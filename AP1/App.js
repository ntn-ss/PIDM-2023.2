import { StyleSheet, Text, View } from 'react-native';


// centralizador
import AppProva from './src/AppProva';

export default function App() {
  return (
    <View style={styles.container}>
      <AppProva />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});