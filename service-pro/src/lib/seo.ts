import { SITE } from "@/config/site";
import type { FaqItem } from "@/data/faqs";

export function canonical(pathname: string) {
  return new URL(pathname, SITE.domain).toString();
}

export function jsonLdLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.domain,
    image: [`${SITE.domain}/og.jpg`],
    logo: `${SITE.domain}/logo-service-pro.png`,
    areaServed: ["CABA", "AMBA"],
    telephone: `+${SITE.whatsappE164}`,
    priceRange: "$$",
    openingHours: ["Mo-Sa 08:00-20:00"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${SITE.whatsappE164}`,
      availableLanguage: ["es"],
    },
  };
}

export function jsonLdService(serviceName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    areaServed: ["CABA", "AMBA"],
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      "@id": `${SITE.domain}#business`,
    },
  };
}

export function jsonLdFaqPage(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
