import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import MainScreen from './Atividade_2/MainScreen';
import Screen01 from './Atividade_2/Screen01';
import Screen02 from './Atividade_2/Screen02';
import Screen03 from './Atividade_2/Screen03';

const Stack = createNativeStackNavigator();

const CentralizadorAtividade2 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={ MainScreen } options={{title: 'Tela Principal'}}/>
        <Stack.Screen name="Screen01" component={ Screen01 } options={{title: 'Tela 01 - Cadastro'}} />
        <Stack.Screen name="Screen02" component={ Screen02 } options={{title: 'Tela 02 - IMC'}}/>
        <Stack.Screen name="Screen03" component={ Screen03 } options={{title: 'Tela 03 - Sobre'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CentralizadorAtividade2;