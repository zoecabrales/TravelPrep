import React from 'react';
import { View, StyleSheet } from 'react-native';
import PackingListComponent from '../app/components/PackingListComponents';

export default function PackingScreen() {
    return (
        <View style={styles.container}>
            <PackingListComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
}); 