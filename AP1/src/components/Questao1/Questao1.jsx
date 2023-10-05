import { SectionList, Text, View } from "react-native"

import { PaperProvider, IconButton, MD3Colors } from 'react-native-paper'

import BD from "./BD"

import styles from './styles/styles'

const Questao1 = ({ navigation }) => {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <SectionList
                    sections={BD}
                    keyExtractor={(item, index)=>index+item}
                    
                    renderItem={({item, section})=>(
                        <View style={styles.item}>
                            <IconButton
                                icon={item.icon}
                                iconColor={MD3Colors.tertiary100}
                                size={30}
                                mode="contained"
                                onPress={()=>navigation.navigate('Tela02', item, section)}
                            />
                            <View style={styles.lugarEHora}>
                                <Text style={styles.title}>{item.nome}</Text>
                                <Text style={styles.horario}>{item.horas}:{item.minutos}</Text>
                            </View>
                            
                            <Text style={styles.preco}>{item.preco}</Text>
                        </View>
                    )}

                    renderSectionHeader={({section: {dia}})=>(
                        <Text style={styles.header}>{dia}</Text>
                    )}
                >
                
                </SectionList>
            </View>
        </PaperProvider>
    )
}

export default Questao1