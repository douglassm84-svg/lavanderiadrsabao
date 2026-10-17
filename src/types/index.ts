export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'especializada' | 'delicada' | 'casa' | 'economica' | 'comercial';
  icon: string;
  heroImage: string;
  processSteps: { title: string; desc: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
  seoKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  startingPrice?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  image: string;
  author: string;
  seoFocus: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  neighborhood: string;
  comment: string;
  serviceUsed: string;
}

export interface SEODocumentation {
  wireframeSections: {
    name: string;
    description: string;
    conversionTactics: string[];
  }[];
  urlStructure: {
    url: string;
    level: string;
    focusKeyword: string;
    searchIntent: string;
    schemaType: string;
  }[];
  metaTags: {
    pageName: string;
    url: string;
    h1: string;
    metaTitle: string;
    metaDescription: string;
    targetKeywords: string[];
  }[];
  technicalChecklist: {
    item: string;
    category: 'Performance' | 'Segurança' | 'Indexação' | 'SEO Local';
    status: 'Implementado' | 'Recomendado';
    detail: string;
  }[];
  baseCopywriting: {
    section: string;
    targetPage: string;
    h1: string;
    leadText: string;
    bodyPoints: string[];
    ctaText: string;
    ctaLink: string;
  }[];
}
