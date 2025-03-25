import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles/PackingListStyles';

interface EmptyStateProps {
}

export function EmptyState({ }: EmptyStateProps) {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateTitle}>Your packing list is empty</Text>
      <Text style={styles.emptyStateText}>
        Add items using the field above to start building your packing list.
      </Text>
    </View>
  );
} 