import { SITE } from "@/config/site";
import type { FaqItem } from "@/data/faqs";

export function canonical(pathname: string) {
  return new URL(pathname, SITE.domain).toString();
}

export function jsonLdLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    areaServed: SITE.coverage,
    telephone: SITE.phoneDisplay,
    url: SITE.domain,
  };
}

export function jsonLdService(serviceName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
    },
    areaServed: SITE.coverage,
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
