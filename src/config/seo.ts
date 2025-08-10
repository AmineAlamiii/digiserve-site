// Configuration SEO centralisée
export const SEO_CONFIG = {
  // Informations de base
  siteName: 'Digital Service Technologie',
  siteUrl: 'https://digiservweb.com',
  siteDescription: 'Agence digitale innovante au Maroc spécialisée en développement web, applications mobiles, social media management et branding. Transformez votre vision en solutions digitales performantes.',
  
  // Mots-clés principaux
  keywords: [
    'agence digitale maroc',
    'développement web maroc',
    'application mobile maroc',
    'social media management',
    'branding maroc',
    'site web casablanca',
    'e-commerce maroc',
    'marketing digital',
    'SEO maroc',
    'design web',
    'agence web maroc',
    'création site web',
    'développeur web maroc',
    'application mobile casablanca'
  ].join(', '),
  
  // Réseaux sociaux
  social: {
    facebook: 'https://www.facebook.com/digiservtech',
    linkedin: 'https://www.linkedin.com/company/digiservtech',
    instagram: 'https://www.instagram.com/digiservtech',
    twitter: 'https://twitter.com/digiservtech'
  },
  
  // Contact
  contact: {
    email: 'contact@digiservweb.com',
    phone: '+212-6-XX-XX-XX-XX',
    address: 'Casablanca, Maroc'
  },
  
  // Images par défaut
  images: {
    og: 'https://digiservweb.com/og-image.jpg',
    twitter: 'https://digiservweb.com/twitter-image.jpg',
    logo: 'https://digiservweb.com/logo.png',
    favicon: 'https://digiservweb.com/favicon.ico'
  },
  
  // Métadonnées par page
  pages: {
    home: {
      title: 'Digital Service Technologie - Agence Digitale au Maroc | Développement Web & Mobile',
      description: 'Agence digitale innovante au Maroc spécialisée en développement web, applications mobiles, social media management et branding. Transformez votre vision en solutions digitales performantes.',
      keywords: 'agence digitale maroc, développement web, application mobile, social media, branding, casablanca'
    },
    services: {
      title: 'Nos Services - Développement Web, Mobile & Marketing Digital | Digital Service Technologie',
      description: 'Découvrez nos services digitaux : développement web, applications mobiles, social media management et branding. Solutions sur mesure au Maroc.',
      keywords: 'services digitaux, développement web maroc, application mobile, social media, branding'
    },
    portfolio: {
      title: 'Portfolio - Nos Réalisations | Digital Service Technologie',
      description: 'Découvrez nos réalisations récentes : sites web, applications mobiles, campagnes social media et projets de branding au Maroc.',
      keywords: 'portfolio, réalisations, projets, sites web, applications mobiles'
    },
    contact: {
      title: 'Contact - Digital Service Technologie | Agence Digitale au Maroc',
      description: 'Contactez Digital Service Technologie pour vos projets digitaux. Agence basée à Casablanca, Maroc. Devis gratuit et réponse sous 24h.',
      keywords: 'contact, agence digitale maroc, casablanca, devis gratuit'
    }
  },
  
  // Structured Data
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Digital Service Technologie",
      "alternateName": "DigiServTech",
      "url": "https://digiservweb.com",
      "logo": "https://digiservweb.com/logo.png",
      "description": "Agence digitale innovante au Maroc spécialisée en développement web, applications mobiles, social media management et branding.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Casablanca",
        "addressCountry": "MA",
        "addressRegion": "Casablanca-Settat"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212-6-XX-XX-XX-XX",
        "contactType": "customer service",
        "email": "contact@digiservweb.com",
        "availableLanguage": ["French", "Arabic", "English"]
      },
      "sameAs": [
        "https://www.facebook.com/digiservtech",
        "https://www.linkedin.com/company/digiservtech",
        "https://www.instagram.com/digiservtech"
      ],
      "serviceArea": {
        "@type": "Country",
        "name": "Morocco"
      }
    },
    
    services: [
      {
        "@type": "Service",
        "name": "Développement Web",
        "description": "Sites web modernes, rapides et optimisés SEO",
        "provider": {
          "@type": "Organization",
          "name": "Digital Service Technologie"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Morocco"
        }
      },
      {
        "@type": "Service",
        "name": "Applications Mobiles",
        "description": "Applications iOS et Android natives et cross-platform",
        "provider": {
          "@type": "Organization",
          "name": "Digital Service Technologie"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Morocco"
        }
      },
      {
        "@type": "Service",
        "name": "Social Media Management",
        "description": "Gestion complète des réseaux sociaux",
        "provider": {
          "@type": "Organization",
          "name": "Digital Service Technologie"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Morocco"
        }
      },
      {
        "@type": "Service",
        "name": "Branding & Identité",
        "description": "Création d'identité visuelle forte et mémorable",
        "provider": {
          "@type": "Organization",
          "name": "Digital Service Technologie"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Morocco"
        }
      }
    ]
  }
};

// Fonction utilitaire pour générer les métadonnées
export const generateSEOData = (page: keyof typeof SEO_CONFIG.pages) => {
  const pageData = SEO_CONFIG.pages[page];
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    url: `${SEO_CONFIG.siteUrl}/${page === 'home' ? '' : page}`,
    image: SEO_CONFIG.images.og,
    type: 'website' as const,
    author: SEO_CONFIG.siteName
  };
}; 