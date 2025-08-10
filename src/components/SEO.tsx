import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Digital Service Technologie - Agence Digitale au Maroc | Développement Web & Mobile',
  description = 'Agence digitale innovante au Maroc spécialisée en développement web, applications mobiles, social media management et branding. Transformez votre vision en solutions digitales performantes.',
  keywords = 'agence digitale maroc, développement web maroc, application mobile maroc, social media management, branding maroc, site web casablanca, e-commerce maroc, marketing digital, SEO maroc, design web',
  image = 'https://digiservweb.com/og-image.jpg',
  url = 'https://digiservweb.com',
  type = 'website',
  author = 'Digital Service Technologie'
}) => {
  const siteName = 'Digital Service Technologie';
  const twitterHandle = '@digiservtech';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content={twitterHandle} />
      <meta property="twitter:site" content={twitterHandle} />
    </Helmet>
  );
};

export default SEO; 