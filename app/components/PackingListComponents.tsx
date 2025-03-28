import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { usePackingStore } from '../stores/packingStore';

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
  // Get state and actions from the store
  const items = usePackingStore((state) => state.items);
  const selectedCategory = usePackingStore((state) => state.selectedCategory);
  const sortOption = usePackingStore((state) => state.sortOption);
  const addItem = usePackingStore((state) => state.addItem);
  const removeItem = usePackingStore((state) => state.removeItem);
  const togglePacked = usePackingStore((state) => state.togglePacked);
  const updateQuantity = usePackingStore((state) => state.updateQuantity);
  const setSelectedCategory = usePackingStore((state) => state.setSelectedCategory);
  const setSortOption = usePackingStore((state) => state.setSortOption);

  // Local state for modal and new item
  const [newItemName, setNewItemName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleAddItemWithCategory = (category: PackingItem['category']) => {
    const newItem: PackingItem = {
      id: Date.now().toString(),
      name: newItemName.trim(),
      category,
      packed: false,
      quantity: 1
    };
    addItem(newItem);
    setNewItemName('');
    setModalVisible(false);
  };

  const handleAddItem = () => {
    if (newItemName.trim()) {
      setModalVisible(true);
    }
  };

  const handleRemoveItem = (id: string) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => removeItem(id)
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
          onPress={handleAddItem}
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
            onRemoveItem={handleRemoveItem}
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