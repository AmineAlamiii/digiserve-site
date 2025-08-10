import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, generateSEOData } from '../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  page?: keyof typeof SEO_CONFIG.pages;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  page
}) => {
  // Utiliser les données de la page si spécifiée, sinon utiliser les props
  const seoData = page ? generateSEOData(page) : {
    title: title || SEO_CONFIG.pages.home.title,
    description: description || SEO_CONFIG.pages.home.description,
    keywords: keywords || SEO_CONFIG.pages.home.keywords,
    url: url || SEO_CONFIG.siteUrl,
    image: image || SEO_CONFIG.images.og,
    type,
    author: author || SEO_CONFIG.siteName
  };

  const twitterHandle = '@digiservtech';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content={seoData.author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoData.type} />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />
      <meta property="twitter:creator" content={twitterHandle} />
      <meta property="twitter:site" content={twitterHandle} />
      
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify(SEO_CONFIG.structuredData.organization)}
      </script>
      
      {/* Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Services Digitaux",
          "description": "Services proposés par Digital Service Technologie",
          "itemListElement": SEO_CONFIG.structuredData.services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": service
          }))
        })}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": SEO_CONFIG.siteUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": section || (page ? page.charAt(0).toUpperCase() + page.slice(1) : "Services"),
              "item": seoData.url
            }
          ]
        })}
      </script>
      
      {/* Local Business Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Digital Service Technologie",
          "image": SEO_CONFIG.images.logo,
          "description": SEO_CONFIG.siteDescription,
          "url": SEO_CONFIG.siteUrl,
          "telephone": SEO_CONFIG.contact.phone,
          "email": SEO_CONFIG.contact.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Casablanca",
            "addressLocality": "Casablanca",
            "addressRegion": "Casablanca-Settat",
            "addressCountry": "MA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.5731",
            "longitude": "-7.5898"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": Object.values(SEO_CONFIG.social)
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 