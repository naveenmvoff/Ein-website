import { Suspense } from "react";
import ViewBlogPage from "@/components/admin/blog/Viewblog";
// Child component that safely awaits the params (this is where the dynamic access happens)
async function BlogEditContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Safe: this runs only at request time, inside Suspense

  return <ViewBlogPage id={id} />;
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <BlogEditContent params={params} />
    </Suspense>
  );
}
