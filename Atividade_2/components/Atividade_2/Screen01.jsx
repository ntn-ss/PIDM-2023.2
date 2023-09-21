import { Button, Text, View } from "react-native"
import { useState } from "react"

import MyStyle from './MyStyle'
let styles = MyStyle

import ModalApp from "./ModalApp"

const Screen01 = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Cadastro
            </Text>

            <Button
                title="Show modal"
                onPress={()=>setModalVisible(true)}
            />

            <ModalApp
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        
        </View>
    )
}

export default Screen01