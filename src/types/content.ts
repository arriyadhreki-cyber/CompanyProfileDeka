export type PageMeta = {
  number: string;
  label: string;
  href: string;
};

export type NavItem = PageMeta & {
  children?: PageMeta[];
};