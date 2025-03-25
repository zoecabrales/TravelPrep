import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
  return (
    <View style={styles.container}>
      <Ionicons name="briefcase-outline" size={64} color="#ffd33d" />
      <Text style={styles.title}>Welcome to Packing List</Text>
      <Text style={styles.subtitle}>Keep track of your travel items</Text>
      <Link href="/packing" style={styles.button}>
        <Text style={styles.buttonText}>Go to Packing List</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#ffd33d',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
