export interface Pillar {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
}

export interface AgeCategory {
  id: string;
  range: string;
  title: string;
  emoji: string;
  imageUrl: string;
  risks: string[];
  recommendations: string[];
  screenTime: string;
  guideTitle: string;
  fullGuideText: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface AppAnalysis {
  id: string;
  name: string;
  category: 'social' | 'games' | 'ai' | 'streaming' | 'comm';
  categoryLabel: string;
  logo: string;
  recommendedAge: string;
  riskLevel: 'high' | 'medium' | 'low';
  riskScore: number; // 1-10
  description: string;
  dangers: string[];
  parentTips: string[];
}

export interface FreeResource {
  id: string;
  title: string;
  description: string;
  fileName: string;
  type: string;
  contentPreview: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}
