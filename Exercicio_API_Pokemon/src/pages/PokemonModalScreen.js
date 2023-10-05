import { View, Text, Button, Image } from 'react-native'

const PokemonModalScreen = ({ navigation, route}) => {
    const {url} = route.params
    const [dados, setDados] = useState({})

    useEffect(() => {
      fetchPokemon()
    }, [])
    
    const fetchPokemon = () => {
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
            })
            .catch(err=>console.log(err))
    }
    return(
        <View>
            <Text>Tela Modal</Text>
            <Text style={{ fontSize: 25}}>{dados.height}</Text>
            <Image
                source={{uri: `https://www.quixada.ufc.br/wp-content/uploads/2015/05/IMG_20190222_140235687_HDR-e1550869224744-108x150.jpg`}}
                style={{width: 200, height: 200}}
            />
            <Image
                source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${dados.id}.png`}}
                style={{width: 200, height: 200}}
            />
            
            <Button
                title={'Fechar modal'.toUpperCase()}
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}

export default PokemonModalScreen