import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles/PackingListStyles';
import { CATEGORIES } from './interfaces/PackingInterfaces';

interface CategoryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilters({ 
  selectedCategory, 
  onSelectCategory 
}: CategoryFiltersProps) {
  return (
    <ScrollView
      style={styles.categoryFilters}
      contentContainerStyle={{ paddingVertical: 4 }}
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
          onPress={() => onSelectCategory(category)}
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
  );
} 