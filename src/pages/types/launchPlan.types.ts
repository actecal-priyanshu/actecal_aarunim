export interface LaunchState {
  companyName?: string;
  selectedApps?: string[];
}

export interface ChatOption {
  id: string;
  icon: string;
  label: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  author: 'user' | 'lovable';
  text: string;
  timestamp?: number;
}

export type DummyPageId = 'product' | 'solutions' | 'resources' | 'pricing';

export interface DummyHeroConfig {
  getHeadline: (companyName: string) => string;
  getCopy: (companyName: string) => string;
  primaryCta: string;
  secondaryCta: string;
  chipSource: 'stack' | 'tags' | 'none';
  tags?: string[];
  previewMeta: string;
  previewEyebrow: string;
  previewDescription: string;
}

export interface DummyPageAccent {
  badgeLabel: string;
  tagline: string;
  metrics: { label: string; value: string }[];
  palette: {
    accent: string;
    strong: string;
    soft: string;
    border: string;
    gradient: string;
    shadow: string;
    halo: string;
    surface: string;
  };
}

export type DummySection = {
  type: 'features';
  id: string;
  heading: string;
  copy: string;
  items: { title: string; description: string }[];
} | {
  type: 'stats';
  id: string;
  heading: string;
  copy: string;
  stats: { value: string; description: string }[];
} | {
  type: 'timeline';
  id: string;
  heading: string;
  copy?: string;
  steps: { step: string; title: string; copy: string }[];
} | {
  type: 'testimonials';
  id: string;
  heading: string;
  copy: string;
  quotes: { quote: string; author: string; title: string }[];
} | {
  type: 'faq';
  id: string;
  heading: string;
  copy: string;
  faqs: { question: string; answer: string }[];
} | {
  type: 'cta';
  id: string;
  heading: string;
  copy: string;
  actions: { primary: string; secondary: string };
};

export interface EditorSlide {
  id: string;
  title: string;
  blurb: string;
}

export interface EditorThemeToken {
  label: string;
  value: string;
}

export interface PublishStatus {
  success?: boolean;
  message?: string;
  error?: string;
  publishedUrl?: string;
  showRetry?: boolean;
}
