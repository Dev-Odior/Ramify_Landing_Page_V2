import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  weight: string;
  features: string[];
  highlight?: boolean;
}

export interface Addon {
  name: string;
  price: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export interface FooterLink {
  label: string;
  key: string;
  type?: 'link' | 'partner';
}

export interface FooterSection {
  category: string;
  items: FooterLink[];
}

export interface ModalContent {
  title: string;
  content: string;
}
