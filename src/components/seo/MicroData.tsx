/**
 * MicroData — Injects hidden HTML microdata (itemscope / itemtype / itemprop)
 * so that SEO browser extensions (e.g. "SEO 1 Click") that scan for
 * Schema.org microdata attributes can detect the structured data.
 *
 * JSON-LD (via <JsonLd>) is what Google actually reads for rich results.
 * This component exists purely so extension tooling shows the data.
 */

export default function MicroData() {
  return (
    <div
      itemScope
      itemType="https://schema.org/MovingCompany"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      {/* Identity */}
      <meta itemProp="@id" content="https://www.eintransport.com/#Movingcompany" />
      <span itemProp="name">Eintransport Packers and Movers</span>
      <link itemProp="url" href="https://www.eintransport.com/" />
      <meta itemProp="telephone" content="+919043384332" />
      <meta itemProp="email" content="info@eintransport.in" />
      <meta itemProp="priceRange" content="₹₹" />

      {/* Address */}
      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
      >
        <span itemProp="addressLocality">Bangalore</span>
        <span itemProp="addressRegion">Karnataka</span>
        <span itemProp="postalCode">560100</span>
        <span itemProp="addressCountry">IN</span>
      </div>

      {/* Aggregate Rating */}
      <div
        itemProp="aggregateRating"
        itemScope
        itemType="https://schema.org/AggregateRating"
      >
        <meta itemProp="ratingValue" content="4.7" />
        <meta itemProp="reviewCount" content="4" />
      </div>

      {/* Same as */}
      <link itemProp="sameAs" href="https://www.facebook.com/people/Eintransport/61565764442291/" />
      <link itemProp="sameAs" href="https://www.instagram.com/eintransport_pvt_ltd"/>
      <link itemProp="sameAs" href="https://www.linkedin.com/company/eintransport" />
      <link itemProp="sameAs" href="https://www.youtube.com/@eintransport" />
    </div>
  );
}
