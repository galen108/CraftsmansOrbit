export type BlockType = 'text' | 'list' | 'chips' | 'definition-list' | 'tech-grid';

export interface TechItem {
  name: string;
  description?: string;
}

export interface ContentBlock {
  type: BlockType;
  content?: string;
  items?: string[];
  techItems?: TechItem[];
}

export interface ArchetypeSection {
  title: string;
  blocks: ContentBlock[];
}

export interface Archetype {
  index: number;
  archetype: string;
  tagline: string;
  role: string;
  accentColor: string;
  sections: ArchetypeSection[];
}
