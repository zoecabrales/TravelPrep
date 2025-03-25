import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles/PackingListStyles';
import { PackingItem } from './interfaces/PackingInterfaces';

interface PackingItemProps {
  item: PackingItem;
  onTogglePacked: (id: string) => void;
  onUpdateQuantity: (id: string, increment: boolean) => void;
  onRemoveItem: (id: string) => void;
}

export function PackingItemComponent({ 
  item, 
  onTogglePacked, 
  onUpdateQuantity, 
  onRemoveItem 
}: PackingItemProps) {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => onTogglePacked(item.id)}
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
              onPress={() => onUpdateQuantity(item.id, false)}
              disabled={item.quantity <= 1}
            >
              <Ionicons name="remove" size={20} color={item.quantity <= 1 ? '#C7C7CC' : '#007AFF'} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => onUpdateQuantity(item.id, true)}
            >
              <Ionicons name="add" size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onRemoveItem(item.id)}
          >
            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 