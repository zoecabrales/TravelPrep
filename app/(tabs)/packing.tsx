import PackingListComponent from '../components/PackingListComponents';
import { View } from 'react-native';

export default function PackingScreen() {
  return (
    <View style={{ flex: 1 }}>
      <PackingListComponent />
    </View>
  );
}