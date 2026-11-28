export type PageMeta = {
  number: string;
  label: string;
  href: string;
};

export type NavItem = PageMeta & {
  children?: PageMeta[];
};

export type MetaStat = {
  label: string;
  value: string;
};

export type CoreValue = {
  title: string;
  description: string;
  dotColor: string;
};

export type TeamMember = {
  name: string;
  initial: string;
  role: string;
  roleColor: string;
  description: string;
  gradient: string;
};

export type ServiceOverview = {
  number: string;
  slug: string;
  href: string;
  title: string;
  description: string;
  bullets: string[];
  accentColor: string;
  dotColor: string;
  topLineGradient: string;
  iconBg: string;
  iconColor: string;
  icon: "monitor" | "layers" | "camera";
};

export type WorkflowStep = {
  number: string;
  title: string;
  description: string;
  color: string;
};

export type ServiceDetail = {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  highlightGradient: string;
  description: string;
  features: string[];
  checkColor: string;
  tags?: string[];
  specs: MetaStat[];
};

export type PackageTier = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  featured?: boolean;
  badge?: string;
  accentColor: string;
  features: string[];
};

export type CommitmentItem = {
  title: string;
  description: string;
};

export type PortfolioStat = {
  target: number;
  suffix: string;
  label: string;
};

export type PortfolioProject = {
  id: string;
  category: "WEBSITE" | "DESAIN GRAFIS" | "DOKUMENTASI" | "BRANDING";
  title: string;
  clientYear: string;
  summary: string;
  gradient: string;
};

export type TestimonialItem = {
  quote: string;
  clientName: string;
  clientRole: string;
  quoteColor: string;
  avatarGradient: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type OnboardingStep = {
  number: string;
  label: string;
  color: string;
};
