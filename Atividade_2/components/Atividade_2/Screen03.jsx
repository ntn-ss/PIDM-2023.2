import { Button, Text, View } from "react-native"

import MyStyle from './MyStyle'
let styles = MyStyle

const Screen03 = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Sobre
            </Text>

            <Text style={styles.screenText}>
                Esta é uma sensacionalíssima página de "Sobre".
            </Text>
            <Button
                title="Voltar à Página Inicial"
                onPress={ ()=> {
                    navigation.navigate('Main')
                }}
            />
        
        </View>
    )
}

export default Screen03