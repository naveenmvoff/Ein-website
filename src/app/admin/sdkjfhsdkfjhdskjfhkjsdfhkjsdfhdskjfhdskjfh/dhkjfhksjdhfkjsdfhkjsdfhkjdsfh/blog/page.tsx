"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";

interface Blog {
  _id: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  pageURL: string;
  createdAt: string;
  updatedAt?: string;
  status?: String;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/admin/blog");
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch blogs");
      }

      setBlogs(data.data || []);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load blogs";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">All Blogs</h1>
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">Loading blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
          <Link
            href="/admin/blog/create"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            New Blog
          </Link>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
            {error}
          </div>
        )}

        {blogs.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500 mb-4">No blogs yet</p>
            <Link
              href="/admin/blog/create"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Create First Blog
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {blogs.map((blog) => {
              const createdDate = blog.createdAt
                ? new Date(blog.createdAt)
                : null;
              const formattedDate =
                createdDate && !isNaN(createdDate.getTime())
                  ? createdDate.toLocaleDateString()
                  : "—";

              return (
                <div
                  key={blog._id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {blog.title}
                      </h2>
                      <p
                        className={`${
                          blog.status == "Active"
                            ? "bg-green-300"
                            : "bg-red-300"
                        } w-fit rounded-md  p-2 text-sm font-semibold text-gray-800 mb-2`}
                      >
                        {blog.status}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {blog.metaDescription}
                      </p>
                      <p className="text-gray-400 text-xs">
                        Published on {formattedDate}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/blog/${blog._id}`}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm hover:bg-gray-300 transition"
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/blog/edit/${blog._id}`}
                        className="px-3 py-1 bg-blue-200 text-blue-800 rounded text-sm hover:bg-blue-300 transition"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
