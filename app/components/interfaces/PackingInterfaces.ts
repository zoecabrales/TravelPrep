export interface PackingItem {
  id: string;
  name: string;
  category: 'Essentials' | 'Clothing' | 'Electronics';
  packed: boolean;
  quantity: number;
}

export const CATEGORIES = {
  All: 'list',
  Essentials: 'briefcase',
  Clothing: 'shirt',
  Electronics: 'phone-portrait',
} as const; 