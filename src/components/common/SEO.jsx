import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultSEO, routesSEO } from "../../content/seoConfig";

export default function SEO({ title, description, keywords, canonical, schemaType, jsonLdExtra }) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const pageMeta = routesSEO[currentPath] || {};

  const seoTitle = title || pageMeta.title || defaultSEO.defaultTitle;
  const seoDescription = description || pageMeta.description || defaultSEO.defaultDescription;
  const seoKeywords = keywords || pageMeta.keywords || defaultSEO.defaultKeywords;
  const seoCanonical = canonical || pageMeta.canonical || `${defaultSEO.domain}${currentPath}`;
  const seoSchemaType = schemaType || pageMeta.schemaType || "WebPage";

  useEffect(() => {
    // 1. Update Title
    document.title = seoTitle;

    // Helper to update or create meta tag
    const setMetaTag = (attrName, attrVal, contentVal) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentVal);
    };

    // Helper to update or create link tag
    const setLinkTag = (relVal, hrefVal) => {
      let element = document.querySelector(`link[rel="${relVal}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", relVal);
        document.head.appendChild(element);
      }
      element.setAttribute("href", hrefVal);
    };

    // 2. Meta Tags
    setMetaTag("name", "description", seoDescription);
    setMetaTag("name", "keywords", seoKeywords);
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMetaTag("name", "author", "Aplos Logix Pvt. Ltd.");

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", seoTitle);
    setMetaTag("property", "og:description", seoDescription);
    setMetaTag("property", "og:url", seoCanonical);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", defaultSEO.siteName);
    setMetaTag("property", "og:image", defaultSEO.ogImage);
    setMetaTag("property", "og:locale", "en_US");

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:site", defaultSEO.twitterHandle);
    setMetaTag("name", "twitter:title", seoTitle);
    setMetaTag("name", "twitter:description", seoDescription);
    setMetaTag("name", "twitter:image", defaultSEO.ogImage);

    // 5. Canonical Link
    setLinkTag("canonical", seoCanonical);

    // 6. Structured Data (JSON-LD) Injection
    const jsonLdId = "aplos-seo-jsonld";
    let scriptElement = document.getElementById(jsonLdId);
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = jsonLdId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }

    const schemaGraph = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${defaultSEO.domain}/#organization`,
        name: defaultSEO.company.name,
        url: defaultSEO.domain,
        logo: defaultSEO.company.logo,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: defaultSEO.company.telephone,
          contactType: "customer service",
          email: defaultSEO.company.email
        },
        address: {
          "@type": "PostalAddress",
          ...defaultSEO.company.address
        }
      },
      {
        "@context": "https://schema.org",
        "@type": seoSchemaType,
        "@id": `${seoCanonical}/#webpage`,
        url: seoCanonical,
        name: seoTitle,
        description: seoDescription,
        isPartOf: {
          "@id": `${defaultSEO.domain}/#website`
        },
        ...(pageMeta.jsonLdExtra || jsonLdExtra || {})
      }
    ];

    if (pageMeta.breadcrumb) {
      schemaGraph.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageMeta.breadcrumb.map((b, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: b.name,
          item: b.item
        }))
      });
    }

    scriptElement.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemaGraph
    });

  }, [currentPath, seoTitle, seoDescription, seoKeywords, seoCanonical, seoSchemaType, jsonLdExtra, pageMeta]);

  return null;
}
