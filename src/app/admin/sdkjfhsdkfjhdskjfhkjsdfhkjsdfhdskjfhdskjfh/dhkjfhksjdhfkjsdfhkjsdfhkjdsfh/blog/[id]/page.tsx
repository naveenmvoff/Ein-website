"use client"
import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import {toast} from "react-hot-toast"

interface Blog {
  _id: string
  title: string
  content: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string[]
  pageURL: string
  createdAt: string
  updatedAt?: string
}

export default function ViewBlogPage() {
  const router = useRouter()
  const params = useParams()
  const blogId = params.id as string

  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    fetchBlog()
  }, [blogId])

  const fetchBlog = async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch(`/api/admin/blog/${blogId}`)
      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch blog")
      }

      setBlog(data.data)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load blog"
      setError(message)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this blog?")) return

    try {
      setDeleting(true)

      const res = await fetch(`/api/admin/blog/${blogId}`, {
        method: "DELETE",
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete blog")
      }

      toast.success("Blog deleted successfully")

      router.push("/admin/blog")
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error deleting blog"
      toast.error(message)
      console.error("Error deleting blog:", error)
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-500">Loading blog...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-md p-6 text-red-700">
            <p className="mb-4">{error || "Blog not found"}</p>
            <Link href="/admin/blog" className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const createdDateValue = blog.createdAt ? new Date(blog.createdAt) : null
  const formattedCreatedDate =
    createdDateValue && !isNaN(createdDateValue.getTime()) ? createdDateValue.toLocaleDateString() : "—"
  const updatedDateValue = blog.updatedAt ? new Date(blog.updatedAt) : null
  const formattedUpdatedDate =
    updatedDateValue && !isNaN(updatedDateValue.getTime()) ? updatedDateValue.toLocaleDateString() : null

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <Link href="/admin/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
              ← Back to Blogs
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{blog.title}</h1>
            <p className="text-gray-500 text-sm">Published on {formattedCreatedDate}</p>
            {formattedUpdatedDate && <p className="text-gray-400 text-xs">Updated on {formattedUpdatedDate}</p>}
          </div>
          <div className="flex gap-2">
            <Link
              href={`/admin/blog/edit/${blog._id}`}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {deleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>

        {blog.metaDescription && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-gray-600">
              <strong>Meta Description:</strong> {blog.metaDescription}
            </p>
          </div>
        )}

        <div className="bg-white shadow rounded-lg p-8 mb-6">
          <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        {blog.metaKeywords && blog.metaKeywords.length > 0 && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {blog.metaKeywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
