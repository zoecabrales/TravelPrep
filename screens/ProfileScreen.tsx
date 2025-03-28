import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { usePackingStore } from '../app/stores/packingStore';

export default function ProfileScreen() {
    const router = useRouter();
    const items = usePackingStore((state) => state.items);

    // Calculate stats
    const totalItems = items.length;
    const packedItems = items.filter(item => item.packed).length;

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatarContainer}>
                    <Ionicons name="person-circle" size={80} color="#ffd33d" />
                </View>
                <Text style={styles.profileName}>Traveler</Text>
                <Text style={styles.profileEmail}>traveler@example.com</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{totalItems}</Text>
                    <Text style={styles.statLabel}>Items</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{packedItems}</Text>
                    <Text style={styles.statLabel}>Items Packed</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>3</Text>
                    <Text style={styles.statLabel}>Countries</Text>
                </View>
            </View>

            {/* Rest of your profile UI */}

            <View style={styles.settingsContainer}>
                {/* Settings items */}
                <TouchableOpacity
                    style={styles.settingItem}
                    onPress={handleLogout}
                >
                    <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
                    <Text style={styles.settingText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F7',
    },
    profileHeader: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    avatarContainer: {
        marginBottom: 12,
    },
    profileName: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 16,
        marginTop: 1,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
    },
    settingsContainer: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 16,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F7',
    },
    settingText: {
        fontSize: 16,
        color: '#000',
        marginLeft: 16,
        flex: 1,
    }
}); 