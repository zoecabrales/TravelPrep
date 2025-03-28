import { create } from 'zustand';
import { PackingItem } from '../components/interfaces/PackingInterfaces';

interface PackingState {
    items: PackingItem[];
    selectedCategory: string;
    sortOption: 'name' | 'category' | 'quantity';

    // Actions
    addItem: (item: PackingItem) => void;
    removeItem: (id: string) => void;
    togglePacked: (id: string) => void;
    updateQuantity: (id: string, increment: boolean) => void;
    setSelectedCategory: (category: string) => void;
    setSortOption: (option: 'name' | 'category' | 'quantity') => void;
}

export const usePackingStore = create<PackingState>((set) => ({
    items: [],
    selectedCategory: 'All',
    sortOption: 'name',

    addItem: (item) => set((state) => ({
        items: [...state.items, item]
    })),

    removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
    })),

    togglePacked: (id) => set((state) => ({
        items: state.items.map(item =>
            item.id === id ? { ...item, packed: !item.packed } : item
        )
    })),

    updateQuantity: (id, increment) => set((state) => ({
        items: state.items.map(item => {
            if (item.id === id) {
                const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
                return { ...item, quantity: newQuantity };
            }
            return item;
        })
    })),

    setSelectedCategory: (category) => set({ selectedCategory: category }),

    setSortOption: (option) => set({ sortOption: option }),
})); 