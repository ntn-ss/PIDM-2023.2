import { StyleSheet, Text, View } from 'react-native';

import CentralizadorAtividade2 from './components/CentralizadorAtividade2';

export default function App() {
  return (
    <View style={styles.container}>
      <CentralizadorAtividade2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
