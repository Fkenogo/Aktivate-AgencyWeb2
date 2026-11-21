import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface RouteSeoMetadata {
  title: string;
  description: string;
  pageType: 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ContactPage';
}

export const HOME_SEO: RouteSeoMetadata = {
  title: 'Aktivate | Branding & Brand Management Agency',
  description:
    'Aktivate is a Burundi-based branding and brand-management agency helping organisations understand markets, build stronger brands and manage them better.',
  pageType: 'WebPage',
};

export const SERVICES_SEO: RouteSeoMetadata = {
  title: 'Expertise & Services | Aktivate Brand Agency',
  description:
    "Explore Aktivate's five core capabilities: brand intelligence, brand strategy, brand management and advisory, creative communications, and activations.",
  pageType: 'WebPage',
};

export const WORK_SEO: RouteSeoMetadata = {
  title: 'Our Work & Portfolio | Aktivate Brand Agency',
  description:
    "Discover selected brand, campaign and activation work for Primus, BGF Bank and Vital'o alongside Aktivate's research and brand governance practice.",
  pageType: 'CollectionPage',
};

export const ABOUT_SEO: RouteSeoMetadata = {
  title: 'About Aktivate | Branding & Brand Strategy Agency',
  description:
    'Meet Aktivate in Bujumbura, Burundi. Creative in our thinking and strategic in our approach, we partner with organisations beyond launch day.',
  pageType: 'AboutPage',
};

export const CONTACT_SEO: RouteSeoMetadata = {
  title: 'Contact Aktivate | Start a Brand Conversation',
  description:
    'Connect with Aktivate in Bujumbura via info@aktivate.bi or (+257) 66 511 150 to discuss research, brand strategy, brand management or campaigns.',
  pageType: 'ContactPage',
};

export const DEFAULT_SEO: RouteSeoMetadata = HOME_SEO;

export const ROUTE_SEO_MAP: Record<string, RouteSeoMetadata> = {
  '/': HOME_SEO,
  '/services': SERVICES_SEO,
  '/work': WORK_SEO,
  '/about': ABOUT_SEO,
  '/contact': CONTACT_SEO,
};

function upsertMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string
): void {
  const existing = document.head.querySelectorAll<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );
  if (existing.length === 0) {
    const element = document.createElement('meta');
    element.setAttribute(attribute, key);
    element.setAttribute('content', content);
    document.head.appendChild(element);
    return;
  }
  existing[0].setAttribute('content', content);
  for (let i = 1; i < existing.length; i++) {
    existing[i].remove();
  }
}

function upsertCanonicalLink(href: string): void {
  const existing = document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
  if (existing.length === 0) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', href);
    document.head.appendChild(link);
    return;
  }
  existing[0].setAttribute('href', href);
  for (let i = 1; i < existing.length; i++) {
    existing[i].remove();
  }
}

function upsertStructuredData(payload: Record<string, unknown>): void {
  let script = document.head.querySelector<HTMLScriptElement>(
    'script#aktivate-route-jsonld[type="application/ld+json"]'
  );
  if (!script) {
    script = document.createElement('script');
    script.id = 'aktivate-route-jsonld';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
}

const RouteSeo: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname.length > 1 && pathname.endsWith('/')
        ? pathname.slice(0, -1)
        : pathname;
    const seo = ROUTE_SEO_MAP[normalizedPath] ?? DEFAULT_SEO;

    const cleanPathname = window.location.pathname.replace(/\/index\.html$/, '/');
    const baseUrl = `${window.location.origin}${cleanPathname}`;
    const canonicalUrl =
      normalizedPath === '/' ? baseUrl : `${baseUrl}#${normalizedPath}`;
    const ogImageUrl = `${window.location.origin}/assets/aistudio/ChatGPT_Image_Nov_17__2026__05_15_56_PM-3_473972e3.png`;

    document.title = seo.title;

    // Standard SEO
    upsertMetaTag('name', 'description', seo.description);
    upsertMetaTag('name', 'robots', 'index, follow');

    // OpenGraph
    upsertMetaTag('property', 'og:type', 'website');
    upsertMetaTag('property', 'og:site_name', 'Aktivate');
    upsertMetaTag('property', 'og:title', seo.title);
    upsertMetaTag('property', 'og:description', seo.description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('property', 'og:image', ogImageUrl);

    // Twitter / X Card
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', seo.title);
    upsertMetaTag('name', 'twitter:description', seo.description);
    upsertMetaTag('name', 'twitter:image', ogImageUrl);

    // Canonical Link
    upsertCanonicalLink(canonicalUrl);

    // Schema.org Structured Data
    upsertStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': `${window.location.origin}/#organization`,
          name: 'Aktivate',
          description: DEFAULT_SEO.description,
          url: window.location.origin,
          email: 'info@aktivate.bi',
          telephone: ['+257 66 511 150', '+257 79 681 209'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bujumbura',
            addressCountry: 'BI',
          },
          slogan: 'Imagine. Dare. Create.',
        },
        {
          '@type': seo.pageType,
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: seo.title,
          description: seo.description,
          inLanguage: 'en',
          isPartOf: {
            '@id': `${window.location.origin}/#organization`,
          },
        },
      ],
    });
  }, [pathname]);

  return null;
};

export default RouteSeo;
