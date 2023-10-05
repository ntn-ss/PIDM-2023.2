import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Questao1 from './components/Questao1/Questao1'
import Questao2 from './components/Questao2/Questao2'

const Stack = createNativeStackNavigator()

const AppProva = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tela01">
                <Stack.Screen name="Tela01" component={Questao1} options={{ title: "Tela 01" }} />
                <Stack.Screen name="Tela02" component={Questao2} options={{ title: "Tela 02" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppProva