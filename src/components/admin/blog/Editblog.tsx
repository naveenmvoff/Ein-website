"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import RichTextEditorTiny from "@/components/admin/blog/Rich-text-editor-tiny";
import Image from "next/image";

// Prevent static generation for admin routes (required for Cache Components)
// export async function generateStaticParams() {
//   // Return placeholder to satisfy Cache Components requirement
//   // This route is client-side only and doesn't need static generation
//   return [{ id: "placeholder" }];
// }

const removeFieldError = (
  field: string,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
) => {
  setErrors((prev) => {
    if (!prev[field]) return prev;
    const newErrors = { ...prev };
    delete newErrors[field];
    return newErrors;
  });
};

interface Blog {
  _id: string;
  title: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  pageURL: string;
  status: string;
}

export default function EditBlogPage({ id }: { id: string }) {
  const router = useRouter();
  const blogId = id;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [metaKeywords, setMetaKeywords] = useState<string[]>([]);
  const [pageURL, setPageURL] = useState("");
  const [title, setTitle] = useState("");
  const [urlError, setURLError] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [thumbError, setThumbError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/admin/blog/${blogId}`);
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to fetch blog");
        }

        const blogData = data.data;

        setBlog(blogData);
        console.log("blogData", blogData, "sss");
        setTitle(blogData.title);
        setContent(blogData.content);
        setMetaTitle(blogData.metaTitle);
        setMetaDescription(blogData.metaDescription);
        setThumbnail(blogData.thumbnail);
        // setStatus()
        const keywords = Array.isArray(blogData.metaKeywords)
          ? blogData.metaKeywords
              .map((keyword: unknown) =>
                typeof keyword === "string" ? keyword.trim() : ""
              )
              .filter(
                (keyword: string, index: number, arr: string[]) =>
                  keyword && arr.indexOf(keyword) === index
              )
          : [];
        setMetaKeywords(keywords);
        setPageURL(blogData.pageURL);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to load blog";
        setError(message);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();
      const trimmed = inputValue.trim();
      if (!trimmed) {
        return;
      }

      const alreadyExists = metaKeywords.some(
        (keyword) => keyword.toLowerCase() === trimmed.toLowerCase()
      );
      if (alreadyExists) {
        toast.error("Keyword already added");
        setInputValue("");
        return;
      }

      setMetaKeywords((prev) => [...prev, trimmed]);
      setInputValue("");
    }
  };

  const handlePageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    value = value.replace(/\s+/g, "-");
    const validPattern = /^[a-z0-9-]+$/;

    if (value.includes("/")) {
      setURLError(
        "Slashes ( / ) are not allowed — use a single word or hyphens only."
      );
    } else if (!validPattern.test(value) && value.length > 0) {
      setURLError("Only lowercase letters, numbers, and hyphens are allowed.");
    } else if (value.length > 60) {
      setURLError("Slug too long — keep it under 60 characters.");
    } else {
      setURLError("");
    }

    value = value.replace(/[^a-z0-9-]/g, "");
    setPageURL(value);
    removeFieldError("pageURL", setFormErrors);
  };

  const handleUpdate = async (type: any) => {
    try {
      setFormErrors({});
      if (!title.trim()) {
        toast.error("Please enter a blog title");
        setFormErrors((prev) => ({ ...prev, title: "Title is required." }));
        return;
      }

      if (!content.trim()) {
        toast.error("Please add blog content");
        setFormErrors((prev) => ({ ...prev, content: "Content is required." }));
        return;
      }

      if (!pageURL.trim()) {
        toast.error("Please enter a page URL slug");
        setFormErrors((prev) => ({
          ...prev,
          pageURL: "Page URL slug is required.",
        }));
        return;
      }

      if (urlError) {
        toast.error(urlError);
        return;
      }
      if (!thumbnail) {
        setThumbError("Thumbnail is required");

        toast.error("Please add thumbnail");
        return;
      }

      if (thumbError) {
        toast.error(thumbError);
        return;
      }
      setSaving(true);

      const keywords = metaKeywords
        .map((keyword) => keyword.trim())
        .filter(
          (keyword, index, arr) => keyword && arr.indexOf(keyword) === index
        );

      const payload = {
        title: title.trim(),
        content: content.trim(),
        metaDescription: metaDescription.trim(),
        metaKeywords: keywords,
        metaTitle: metaTitle.trim(),
        pageURL: pageURL.trim(),
        thumbnail: thumbnail,
        status: type == "publish" ? "Active" : "Draft",
      };

      const res = await fetch(`/api/admin/blog/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (res.status === 409) {
          const message =
            data.message || "A blog with this page URL already exists.";
          setURLError(message);
          setFormErrors((prev) => ({ ...prev, pageURL: message }));
          throw new Error(message);
        }
        if (res.status === 400 && data.errors) {
          setFormErrors(data.errors);
          if (data.errors.pageURL) {
            setURLError(data.errors.pageURL);
          }
          throw new Error(data.message || "Validation failed");
        }
        throw new Error(data.message || "Failed to update blog");
      }

      toast.success("Blog updated successfully!");

      router.push(
        `/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog/${blogId}`
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Error updating blog";
      toast.error(message);
      console.error("Error updating blog:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThumbError(""); // clear error
    const file = e.target.files?.[0];

    if (!file) {
      setThumbError("Thumbnail is required");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnail(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <div className="h-64 rounded-lg border border-dashed border-gray-200 bg-white/60 shadow-sm">
            <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-500">
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
              <p>Loading blog...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto w-full max-w-3xl rounded-lg border border-red-200 bg-red-50 p-6 shadow">
          <h1 className="text-2xl font-semibold text-gray-800">Edit Blog</h1>
          <p className="mt-3 text-red-700">{error || "Blog not found"}</p>
          <button
            onClick={() =>
              router.push(
                "/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog"
              )
            }
            className="mt-6 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const goBack = () =>
    router.push(
      "/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog"
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Edit Blog</h1>
            <p className="text-sm text-gray-600">
              Update the content and metadata before republishing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={goBack}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              disabled={saving}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleUpdate}
              disabled={saving}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Updating..." : "Save Changes"}
            </button>

            {blog.status == "Draft" && (
              <button
                onClick={() => handleUpdate("publish")}
                className="px-3 py-1 bg-green-200 text-green-800 rounded text-sm hover:bg-green-300 transition"
              >
                {saving ? "Publishing..." : "Publish"}
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleUpdate("update");
            }}
            className="space-y-6 rounded-lg bg-white p-6 shadow"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    removeFieldError("title", setFormErrors);
                  }}
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-70"
                  placeholder="Enter blog title"
                  disabled={saving}
                />
                {formErrors.title && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.title}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => {
                    setMetaTitle(e.target.value);
                    removeFieldError("metaTitle", setFormErrors);
                  }}
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-70"
                  placeholder="Enter meta title"
                  disabled={saving}
                />
                {formErrors.metaTitle && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.metaTitle}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Meta Description
                </label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => {
                    setMetaDescription(e.target.value);
                    removeFieldError("metaDescription", setFormErrors);
                  }}
                  className="min-h-[120px] w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-70"
                  placeholder="Enter meta description"
                  disabled={saving}
                />
                {formErrors.metaDescription && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.metaDescription}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Meta Keywords
              </label>
              <p className="mb-2 text-xs text-gray-500">
                Press Enter, comma, or space to add each keyword.
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeydown}
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-70"
                placeholder="Update or add keywords"
                disabled={saving}
              />
              {metaKeywords.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {metaKeywords.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() =>
                          setMetaKeywords((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }
                        className="ml-2 text-blue-500 transition hover:text-blue-700"
                        disabled={saving}
                        aria-label={`Remove keyword ${item}`}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Page URL Slug
              </label>
              <input
                type="text"
                value={pageURL}
                onChange={handlePageURLChange}
                placeholder="e.g. my-updated-blog"
                className={`w-full rounded-md border px-3 py-2 text-gray-900 transition focus:outline-none focus:ring-2 ${
                  urlError
                    ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-100"
                } disabled:opacity-70`}
                disabled={saving}
              />
              {formErrors.pageURL || urlError ? (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.pageURL || urlError}
                </p>
              ) : null}
              <p className="mt-1 text-sm text-gray-500">
                Final URL:{" "}
                <span className="font-medium text-gray-800">
                  {process.env.NEXT_PUBLIC_APP_URL}/blog/
                  {pageURL || "<your-slug>"}
                </span>
              </p>
            </div>
            <div className="space-y-2">
              {/* Label */}
              <label className="block text-sm font-medium text-gray-700">
                Upload Thumbnail
              </label>

              {/* Input */}
              <div className="p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="text-sm"
                />
              </div>
              {thumbError ? (
                <p className="mt-1 text-sm text-red-500">{thumbError}</p>
              ) : null}

              {/* Preview */}
              {thumbnail && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-1">Preview:</p>

                  <div className="w-40 h-28 relative rounded-lg overflow-hidden border">
                    <Image
                      src={thumbnail}
                      alt="Thumbnail Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Content
              </label>
              <RichTextEditorTiny
                value={content}
                onChange={(value) => {
                  setContent(value);
                  removeFieldError("content", setFormErrors);
                }}
              />
              {formErrors.content && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.content}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 sm:hidden">
              <button
                type="button"
                onClick={goBack}
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                disabled={saving}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </form>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Preview</h2>
              <span className="text-xs uppercase tracking-wide text-gray-400">
                Live Update
              </span>
            </div>
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
