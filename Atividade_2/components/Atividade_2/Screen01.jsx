import { Button, Text, TextInput, View } from "react-native"
import { useState } from "react"

import MyStyle from './MyStyle'
let styles = MyStyle

import ModalApp from "./ModalApp"

const Screen01 = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [eMail, setEMail] = useState('')

    const [objeto, setObjeto] = useState([name, age, eMail, 'isCadastro'])
    
    const formulaObjeto = () => {
        setObjeto([name, age, eMail, 'isCadastro'])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Cadastro
            </Text>

            <Text style={styles.screenText}>Nome:</Text>
            <TextInput style={styles.input} value={name} onChangeText={(nomeNovo)=>setName(nomeNovo)} autoFocus />
            
            <Text style={styles.screenText}>Idade:</Text>
            <TextInput style={styles.input} value={age} onChangeText={(idadeNova)=>setAge(idadeNova)} />

            <Text style={styles.screenText}>E-mail:</Text>
            <TextInput style={styles.input} value={eMail} onChangeText={(eMailNovo)=>setEMail(eMailNovo)} />

            <Button
                title="Cadastrar"
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

export default Screen01