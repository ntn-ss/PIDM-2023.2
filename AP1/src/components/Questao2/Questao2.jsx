import { PaperProvider, IconButton, MD3Colors } from 'react-native-paper'

import styles from './styles'

import { View, Text } from 'react-native'

const Questao2 = ({route, navigation}) => {
    const { dia, icon, horas, minutos, preco, section } = route.params
    return (
        <PaperProvider>
            <View style={styles.container}>
            <IconButton
                icon={icon}
                iconColor={MD3Colors.tertiary100}
                size={30}
                mode="contained"
                onPress={()=>navigation.goBack()}
            />
                <Text style={styles.horario}>
                    {dia}
                </Text>
                <Text style={styles.header}>
                    {preco}
                </Text>
                <Text style={styles.horario}>
                    {horas}:{minutos}
                </Text>
            </View>
        </PaperProvider>
    )
}

export default Questao2