import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons name="briefcase-outline" size={80} color="#ffd33d" />
          <Text style={styles.title}>TravelPrep</Text>
          <Text style={styles.subtitle}>Every Adventure Begins with a Checklist</Text>
        </View>

        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle-outline" size={32} color="#34C759" />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Smart Packing Lists</Text>
              <Text style={styles.featureDescription}>Create and manage your packing lists with ease.</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="cube-outline" size={32} color="#007AFF" />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Organize by Category</Text>
              <Text style={styles.featureDescription}>Group items by category for better organization.</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="alert-circle-outline" size={32} color="#FF9500" />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Never Forget Essentials</Text>
              <Text style={styles.featureDescription}>Get reminders for essential items for your trip.</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/(tabs)/packing')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  features: {
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#F8F8F8',
    padding: 16,
    borderRadius: 12,
  },
  featureTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffd33d',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
}); 