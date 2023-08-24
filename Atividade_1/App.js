import { StyleSheet, View } from 'react-native';

// components
import Questao1 from './components/Questao1';
import Questao3 from './components/Questao3';

export default function App() {
  return (
    <View style={styles.container}>
        <Questao1 nome = "Nathan" cidade = "Horizonte" curso = "Design Digital" semestre={6} />
        <View style={{marginTop: 20}}>
          <Questao3 disciplinas={["Desenvolvimento de Software para Web", "Fundamentos de Bancos de Dados", "Linguagens de Marcação e Scripts", "Programação para Design"]} cor='darkorange' />
        </View>
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
