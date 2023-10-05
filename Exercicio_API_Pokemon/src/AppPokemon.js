// components
import { View } from "react-native"

// hooks...?
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// pages
import PokedexScreen from "./pages/PokedexScreen"
import PokemonModalScreen from './pages/PokemonModalScreen'

const NativeStack = createNativeStackNavigator()

const AppPokemon = () => {
    return (
        <NavigationContainer>
            <NativeStack.Navigator screenOptions={{headerShown: false}}>
                
                {/* Grupo das telas principais */}
                <NativeStack.Group>
                    <NativeStack.Screen name='Pokédex' component={PokedexScreen} />
                </NativeStack.Group>

                {/* Grupo das telas modais */}
                <NativeStack.Group screenOptions={{presentation: 'modal'}}>
                    <NativeStack.Screen name='PokémonModal' component={PokemonModalScreen} />
                </NativeStack.Group>

            </NativeStack.Navigator>
        </NavigationContainer>
    )
}

export default AppPokemon