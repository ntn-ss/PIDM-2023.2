// components
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import PokeButton from '../components/PokeButton'

// hooks
import { useEffect, useState } from "react";

// API
import Api from '../services/Api'

const PokedexScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {
        fetchAllPokemon()
    }, [])
    
    const fetchAllPokemon = async () => {
        try {
            setLoading(true)
            const response = await Api.get('/pokemon?limit=20000')
            const vetorFormatado = response.data.results.map(
                ({ name, url }) => {
                    return { key: url.split('/')[6], id: url.split('/')[6], name, url}
                }
            )
            setAllPokemon(vetorFormatado)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const renderAllPokemon = () => {
        return (
            <ScrollView style={{ width: '95%' }}>
                <View 
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap'
                    }}
                >
                    {
                        allPokemon.map(
                            (pokemonObj)=>{
                                return(
                                    <View
                                        key={pokemonObj.key}
                                        style={{
                                            margin: 2,
                                            marginBottom: 15,
                                            padding: 1,
                                            backgroundColor: 'antiqueWhite',
                                            alignItems: 'center',
                                            width: 100,
                                            borderColor: 'red',
                                            borderWidth: 2,
                                            borderRadius: 5
                                        }}>
                                            <Text style= {{
                                                fontWeight: 'bold', fontSize: 11
                                            }}>
                                                {pokemonObj.name.toUpperCase()}
                                            </Text>
                                            <Image
                                                source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png`}}
                                                style={{width: 90, height: 90}}
                                            />

                                            <PokeButton
                                                title='Detalhes'
                                                onPress = {
                                                    ()=>{
                                                        navigation.navigate('PokémonModal', {url: pokemonObj.url})
                                                    }
                                                }
                                            />
                                            </View>
                                )
                            }
                        )
                    }
                    </View>
                </ScrollView>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    margin: 10,
                    marginBottom: 20,
                    color: 'orange'
                }}
            >
                Pokédex Screen
            </Text>
            {loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={"large"} color={'orange'} />
                </View> : renderAllPokemon()
            }
        </View>
    )
}

export default PokedexScreen