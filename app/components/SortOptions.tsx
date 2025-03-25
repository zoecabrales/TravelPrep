import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/PackingListStyles';

interface SortOptionsProps {
  sortOption: 'name' | 'category' | 'quantity';
  onSort: (option: 'name' | 'category' | 'quantity') => void;
}

export function SortOptions({ sortOption, onSort }: SortOptionsProps) {
  return (
    <View style={styles.sortContainer}>
      <Text style={styles.sortLabel}>Sort by:</Text>
      <TouchableOpacity
        style={[styles.sortButton, sortOption === 'name' && styles.selectedSort]}
        onPress={() => onSort('name')}
      >
        <Text style={[styles.sortButtonText, sortOption === 'name' && styles.selectedSortText]}>Name</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.sortButton, sortOption === 'category' && styles.selectedSort]}
        onPress={() => onSort('category')}
      >
        <Text style={[styles.sortButtonText, sortOption === 'category' && styles.selectedSortText]}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.sortButton, sortOption === 'quantity' && styles.selectedSort]}
        onPress={() => onSort('quantity')}
      >
        <Text style={[styles.sortButtonText, sortOption === 'quantity' && styles.selectedSortText]}>Quantity</Text>
      </TouchableOpacity>
    </View>
  );
} 