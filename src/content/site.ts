export const site = {
  name: "DEKA CREATIVELY",
  tagline: "Think. Create. Grow.",
  description:
    "Studio kreatif yang membantu bisnis tumbuh melalui website, desain grafis, dan dokumentasi yang berkarakter.",
  url: "https://dekacreatively.com",
  locale: "id_ID",
  email: "hello@dekacreatively.com",
  whatsapp: "6281234567890",
  socials: {
    instagram: "https://instagram.com/dekacreatively",
    linkedin: "https://linkedin.com/company/dekacreatively",
    behance: "https://behance.net/dekacreatively",
  },
} as const;

export type Site = typeof site;