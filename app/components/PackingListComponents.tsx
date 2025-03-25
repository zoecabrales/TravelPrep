import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Modal
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface PackingItem {
  id: string;
  name: string;
  category: 'Essentials' | 'Clothing' | 'Electronics';
  packed: boolean;
  quantity: number;
}

const INITIAL_ITEMS: PackingItem[] = [
  { id: '1', name: 'Passport', category: 'Essentials', packed: false, quantity: 1 },
  { id: '2', name: 'T-Shirts', category: 'Clothing', packed: false, quantity: 3 },
  { id: '3', name: 'Phone Charger', category: 'Electronics', packed: false, quantity: 1 },
];

const CATEGORIES = {
  All: 'list',
  Essentials: 'briefcase',
  Clothing: 'shirt',
  Electronics: 'phone-portrait',
} as const;

export default function PackingListComponent() {
  const [items, setItems] = useState<PackingItem[]>(INITIAL_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PackingItem['category'] | 'All'>('All');
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<PackingItem['category']>('Essentials');
  const [modalVisible, setModalVisible] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [tripDuration, setTripDuration] = useState(1);

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
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

  const updateQuantity = (id: string, increment: boolean) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const getPackingSummary = () => {
    const total = items.length;
    const packed = items.filter(item => item.packed).length;
    const percentage = Math.round((packed / total) * 100) || 0;
    return { total, packed, percentage };
  };

  const addWeatherItems = (weather: 'hot' | 'cold' | 'rainy') => {
    const suggestions: PackingItem[] = {
      hot: [
        { id: Date.now().toString(), name: 'Sunscreen', category: 'Essentials', packed: false, quantity: 1 },
        { id: (Date.now() + 1).toString(), name: 'Sunglasses', category: 'Essentials', packed: false, quantity: 1 },
        { id: (Date.now() + 2).toString(), name: 'Hat', category: 'Clothing', packed: false, quantity: 1 },
      ],
      cold: [
        { id: Date.now().toString(), name: 'Winter Coat', category: 'Clothing', packed: false, quantity: 1 },
        { id: (Date.now() + 1).toString(), name: 'Gloves', category: 'Clothing', packed: false, quantity: 1 },
        { id: (Date.now() + 2).toString(), name: 'Scarf', category: 'Clothing', packed: false, quantity: 1 },
      ],
      rainy: [
        { id: Date.now().toString(), name: 'Umbrella', category: 'Essentials', packed: false, quantity: 1 },
        { id: (Date.now() + 1).toString(), name: 'Rain Jacket', category: 'Clothing', packed: false, quantity: 1 },
        { id: (Date.now() + 2).toString(), name: 'Waterproof Shoes', category: 'Clothing', packed: false, quantity: 1 },
      ],
    }[weather];

    setItems([...items, ...suggestions]);
  };

  const adjustForDuration = () => {
    setItems(items.map(item => {
      if (item.category === 'Clothing' && ['T-Shirts', 'Socks', 'Underwear'].includes(item.name)) {
        return { ...item, quantity: Math.ceil(tripDuration / 2) };
      }
      return item;
    }));
  };

  const checkEssentials = () => {
    const essentialItems = [
      'Passport',
      'Phone Charger',
      'Medication',
      'Wallet',
      'Travel Documents'
    ];

    const missingEssentials = essentialItems.filter(
      essential => !items.some(item => item.name.toLowerCase() === essential.toLowerCase())
    );

    if (missingEssentials.length > 0) {
      Alert.alert(
        'Missing Essentials',
        `Don't forget to pack:\n${missingEssentials.join('\n')}`,
        [
          {
            text: 'Add All',
            onPress: () => {
              const newItems = missingEssentials.map(name => ({
                id: Date.now().toString(),
                name,
                category: 'Essentials',
                packed: false,
                quantity: 1
              }));
              setItems([...items, ...newItems]);
            }
          },
          { text: 'Later', style: 'cancel' }
        ]
      );
    }
  };

  const renderItem = ({ item }: { item: PackingItem }) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setItems(items.map(i =>
          i.id === item.id ? { ...i, packed: !i.packed } : i
        ))}
      >
        <Ionicons
          name={item.packed ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={item.packed ? '#34C759' : '#C7C7CC'}
        />
      </TouchableOpacity>

      <View style={styles.itemContent}>
        <View style={styles.itemHeader}>
          <Text style={[styles.itemName, item.packed && styles.packedText]}>
            {item.name}
          </Text>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>

        <View style={styles.itemActions}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, false)}
            >
              <Ionicons name="remove" size={20} color="#007AFF" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, true)}
            >
              <Ionicons name="add" size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => removeItem(item.id)}
          >
            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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

      <ScrollView
        style={styles.categoryFilters}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Object.entries(CATEGORIES).map(([category, icon]) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory
            ]}
            onPress={() => setSelectedCategory(category as any)}
          >
            <Ionicons
              name={icon as any}
              size={16}
              color={selectedCategory === category ? '#FFFFFF' : '#007AFF'}
            />
            <Text style={[
              styles.categoryButtonText,
              selectedCategory === category && styles.selectedCategoryText
            ]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          {getPackingSummary().packed} of {getPackingSummary().total} items packed ({getPackingSummary().percentage}%)
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${getPackingSummary().percentage}%` }]} />
        </View>
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Category for "{newItemName}"</Text>

            {['Essentials', 'Clothing', 'Electronics'].map((category) => (
              <TouchableOpacity
                key={category}
                style={styles.modalButton}
                onPress={() => handleAddItemWithCategory(category as PackingItem['category'])}
              >
                <Text style={styles.modalButtonText}>{category}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.modalCancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    padding: 16,
  },
  addItemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  addItemInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#E5E5EA',
  },
  categoryFilters: {
    flexDirection: 'row',
    marginBottom: 4,
    height: 36,
    paddingHorizontal: 4,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
    height: 32,
  },
  selectedCategory: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryButtonText: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '500',
    marginLeft: 2,
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  list: {
    marginTop: 30,
  },
  listContent: {
    gap: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    gap: 12,
  },
  checkboxContainer: {
    justifyContent: 'center',
  },
  itemContent: {
    flex: 1,
  },
  itemHeader: {
    marginBottom: 8,
  },
  itemName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  packedText: {
    textDecorationLine: 'line-through',
    color: '#8E8E93',
  },
  categoryText: {
    fontSize: 14,
    color: '#8E8E93',
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    padding: 4,
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  quantityText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginHorizontal: 12,
    minWidth: 24,
    textAlign: 'center',
  },
  deleteButton: {
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#F2F2F7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 4,
    width: '100%',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
  modalCancelButton: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
  },
  modalCancelText: {
    fontSize: 16,
    color: '#FF3B30',
    textAlign: 'center',
  },
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E5EA',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#34C759',
    borderRadius: 2,
  },
});