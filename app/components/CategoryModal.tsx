import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/PackingListStyles';
import { PackingItem } from './interfaces/PackingInterfaces';

interface CategoryModalProps {
  visible: boolean;
  itemName: string;
  onClose: () => void;
  onSelectCategory: (category: PackingItem['category']) => void;
}

export function CategoryModal({ 
  visible, 
  itemName, 
  onClose, 
  onSelectCategory 
}: CategoryModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Category for "{itemName}"</Text>

          {['Essentials', 'Clothing', 'Electronics'].map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.modalButton}
              onPress={() => onSelectCategory(category as PackingItem['category'])}
            >
              <Text style={styles.modalButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.modalCancelButton}
            onPress={onClose}
          >
            <Text style={styles.modalCancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
} 