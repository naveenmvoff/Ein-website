import { notFound } from "next/navigation";
import { getBlogBySlug, type BlogDocument } from "./utils";

type PageProps = {
  params: {
    "page-name": string;
  };
};

export default async function BlogPostPage({ params }: PageProps) {
  const blog = await getBlogBySlug(params["page-name"]);

  if (!blog) {
    notFound();
  }

  const createdDate = blog.createdAt ? new Date(blog.createdAt) : null;
  const updatedDate = blog.updatedAt ? new Date(blog.updatedAt) : null;

  const formattedCreated =
    createdDate && !isNaN(createdDate.getTime())
      ? createdDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

  const formattedUpdated =
    updatedDate && !isNaN(updatedDate.getTime())
      ? updatedDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

  return (
    <article className="bg-white px-6 py-10 shadow-sm ring-1 ring-gray-100 sm:rounded-2xl sm:px-10">
      <header className="mb-8 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {blog.title}
        </h1>
        <div className="mt-3 text-sm text-gray-500">
          {formattedCreated && <p>Published on {formattedCreated}</p>}
          {formattedUpdated && formattedUpdated !== formattedCreated && (
            <p>Last updated on {formattedUpdated}</p>
          )}
        </div>
      </header>

      <section
        className="prose prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}

