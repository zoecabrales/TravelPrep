import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
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

// Move styles from app/index.tsx
const styles = StyleSheet.create({
    // Copy all your styles from app/index.tsx
}); 