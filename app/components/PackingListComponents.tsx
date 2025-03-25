import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Import styles and interfaces
import { styles } from './styles/PackingListStyles';
import { PackingItem, CATEGORIES } from './interfaces/PackingInterfaces';

// Import subcomponents
import { EmptyState } from './EmptyState';
import { PackingItemComponent } from './PackingItem';
import { CategoryFilters } from './CategoryFilters';
import { SortOptions } from './SortOptions';
import { PackingSummary } from './PackingSummary';
import { CategoryModal } from './CategoryModal';

const INITIAL_ITEMS: PackingItem[] = [];

export default function PackingListComponent() {
  const [items, setItems] = useState<PackingItem[]>(INITIAL_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PackingItem['category'] | 'All'>('All');
  const [newItemName, setNewItemName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState<'name' | 'category' | 'quantity'>('name');

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortOption) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'quantity':
        return b.quantity - a.quantity;
      default:
        return 0;
    }
  });

  const addItem = () => {
    if (newItemName.trim()) {
      setModalVisible(true);
    }
  };

  const handleAddItemWithCategory = (category: PackingItem['category']) => {
    const newItem: PackingItem = {
      id: Date.now().toString(),
      name: newItemName.trim(),
      category,
      packed: false,
      quantity: 1
    };
    setItems([...items, newItem]);
    setNewItemName('');
    setModalVisible(false);
  };

  const togglePacked = (id: string) => {
    setItems(items.map(i =>
      i.id === id ? { ...i, packed: !i.packed } : i
    ));
  };

  const updateQuantity = (id: string, increment: boolean) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => setItems(items.filter(item => item.id !== id))
        }
      ]
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.addItemContainer}>
        <TextInput
          style={styles.addItemInput}
          placeholder="Add new item..."
          placeholderTextColor="#8E8E93"
          value={newItemName}
          onChangeText={setNewItemName}
        />
        <TouchableOpacity
          style={[styles.addButton, !newItemName.trim() && styles.addButtonDisabled]}
          onPress={addItem}
          disabled={!newItemName.trim()}
        >
          <Ionicons name="add" size={24} color={newItemName.trim() ? '#FFFFFF' : '#8E8E93'} />
        </TouchableOpacity>
      </View>

      <View style={styles.filtersContainer}>
        <CategoryFilters
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category as any)}
        />
      </View>

      {items.length > 0 ? (
        <View style={styles.metadataContainer}>
          <PackingSummary items={items} />
          <SortOptions sortOption={sortOption} onSort={setSortOption} />
        </View>
      ) : (
        <EmptyState />
      )}

      <FlatList
        data={sortedItems}
        renderItem={({ item }) => (
          <PackingItemComponent
            item={item}
            onTogglePacked={togglePacked}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={[
          styles.listContent,
          items.length === 0 && { flex: 0 }
        ]}
        ListEmptyComponent={null}
      />

      <CategoryModal
        visible={modalVisible}
        itemName={newItemName}
        onClose={() => setModalVisible(false)}
        onSelectCategory={handleAddItemWithCategory}
      />
    </View>
  );
}