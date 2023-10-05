import { View } from 'react-native';
import AppPokemon from './src/AppPokemon'

export default function App() {
  return (
    <View style={styles.container}>
      <AppPokemon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
