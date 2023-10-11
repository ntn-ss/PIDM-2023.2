import { useEffect, useState } from 'react'
import { View, Text, Button, Image, ActivityIndicator } from 'react-native'

const PokemonModalScreen = ({ navigation, route}) => {
    const {url} = route.params
    
    const [dados, setDados] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      fetchPokemon()
    }, [])
    
    const fetchPokemon = () => {
        setLoading(true)
        fetch(url)
            .then((response)=>response.json())
            .then((data)=> {
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    height: data.height,
                    order: data.order,
                    weight: data.weight
                }
                setDados(pokemon)
                setLoading(false)
            })
            .catch(err=>console.log(err))
    }
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 40, fontWeight: 'bold', color: 'orange'}}>Tela Modal</Text>
            {loading && (
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
                    <ActivityIndicator size={"large"} color={'orange'} />
                </View>
            )}
            {dados.id && (
                <>
                    <Text style={{ fontSize: 25 }}>Nome: {dados.name[0].toUpperCase() + dados.name.substr(1)}.</Text>
                    <Text style={{ fontSize: 25 }}>Altura: {dados.height}.</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={{
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dados.id}.png`,
                            }}
                            style={{ width: 200, height: 200 }}
                            />

                        <Image
                            source={{
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${dados.id}.png`,
                            }}
                            style={{ width: 200, height: 200 }}
                            />
                    </View>
                </>
      )}
            
            <Button
                title={'Fechar modal'.toUpperCase()}
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}

export default PokemonModalScreen