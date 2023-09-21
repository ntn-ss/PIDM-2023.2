import { View, Text, TouchableOpacity } from 'react-native'

import MyStyle from './MyStyle'
const styles = MyStyle

const MainScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.header }>Atividade 2</Text>
                    
            <View style={styles.buttons}>
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>navigation.navigate('Screen01')}>
                        <Text style={styles.buttonText}>Cadastro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>navigation.navigate('Screen02')}>
                        <Text style={styles.buttonText}>IMC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>navigation.navigate('Screen03')}>
                        <Text style={styles.buttonText}>Sobre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MainScreen