import { StyleSheet, View } from 'react-native';

//centralizadores
import CentralizadorAtividade1 from './components/CentralizadorAtividade1';

export default function App() {
  return (
    <View style={styles.container}>
        <CentralizadorAtividade1 />
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
