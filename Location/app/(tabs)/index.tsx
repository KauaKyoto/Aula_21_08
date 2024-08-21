import { View, Image, StyleSheet, Platform } from 'react-native';
import Home from './telas/home'


export default function HomeScreen() {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
});