import { View, Text } from 'react-native';
import LoginScreen from '../components/LoginScreen';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  );
}