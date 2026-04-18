/**
 * JsonLd - Reusable component to inject any Schema.org structured data
 * as a <script type="application/ld+json"> tag.
 *
 * Usage:
 *   import JsonLd from "@/components/seo/JsonLd";
 *   import { buildFAQSchema } from "@/lib/schemas";
 *
 *   <JsonLd schema={buildFAQSchema(faqs)} />
 */

interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
