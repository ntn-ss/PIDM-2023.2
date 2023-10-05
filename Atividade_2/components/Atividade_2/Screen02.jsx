import { Button, Text, TextInput, View } from "react-native"
import { useState } from "react"

import MyStyle from './MyStyle'
let styles = MyStyle

import ModalApp from "./ModalApp"

const Screen02 = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const [objeto, setObjeto] = useState([ weight, height ])
    
    const formulaObjeto = () => {
        setObjeto([ weight, height ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                IMC
            </Text>
            
            <Text style={styles.screenText}>Peso:</Text>
            <TextInput style={styles.input} value={weight} onChangeText={(pesoNovo)=>setWeight(pesoNovo)} autoFocus />

            <Text style={styles.screenText}>Altura:</Text>
            <TextInput style={styles.input} value={height} onChangeText={(alturaNova)=>setHeight(alturaNova)} />


            <Button
                title="Avaliar IMC"
                onPress={ ()=> {
                    formulaObjeto()
                    setModalVisible(true)
                }}
            />

            <ModalApp
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                informacoes={objeto}
            />
        
        </View>
    )
}

export default Screen02