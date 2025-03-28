import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LandingPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/(tabs)/packing');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons name="briefcase" size={80} color="#ffd33d" />
          <Text style={styles.title}>TravelPrep</Text>
          <Text style={styles.subtitle}>Your smart packing assistant</Text>
        </View>

        <View style={styles.features}>
          <FeatureItem
            icon="checkmark-circle"
            title="Organized Packing"
            description="Categorize items and never forget essentials"
          />
          <FeatureItem
            icon="time-outline"
            title="Save Time"
            description="Quick access to your most used packing lists"
          />
          <FeatureItem
            icon="compass-outline"
            title="Travel Ready"
            description="Be prepared for any journey with smart suggestions"
          />
        </View>

        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <View style={styles.featureItem}>
      <Ionicons name={icon} size={30} color="#ffd33d" />
      <View style={styles.featureTextContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    marginTop: 8,
  },
  features: {
    marginTop: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  featureTextContainer: {
    marginLeft: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  getStartedButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
});