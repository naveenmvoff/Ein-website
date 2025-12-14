import { Suspense } from "react";
import EditBlogPage from "@/components/admin/blog/Editblog";
// Child component that safely awaits the params (this is where the dynamic access happens)
async function BlogEditContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Safe: this runs only at request time, inside Suspense

  return <EditBlogPage id={id} />;
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <BlogEditContent params={params} />
    </Suspense>
  );
}
