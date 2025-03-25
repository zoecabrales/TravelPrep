import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles/PackingListStyles';
import { PackingItem } from './interfaces/PackingInterfaces';

interface PackingSummaryProps {
  items: PackingItem[];
}

export function PackingSummary({ items }: PackingSummaryProps) {
  const getPackingSummary = () => {
    const total = items.length;
    if (total === 0) return { total: 0, packed: 0, percentage: 0 };
    
    const packed = items.filter(item => item.packed).length;
    const percentage = Math.round((packed / total) * 100) || 0;
    return { total, packed, percentage };
  };

  const summary = getPackingSummary();

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>
        {summary.packed} of {summary.total} items packed ({summary.percentage}%)
      </Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${summary.percentage}%` }]} />
      </View>
    </View>
  );
} 