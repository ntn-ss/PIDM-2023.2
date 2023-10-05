import { Modal, StyleSheet,Text, Pressable, View, Image } from 'react-native'

const ModalApp = ({ modalVisible, setModalVisible, informacoes }) => {

    if (informacoes[3] !== 'isCadastro'){
        let peso = informacoes[0];
        let altura = informacoes[1];
        var imc = peso/altura;
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                        { informacoes[3] == 'isCadastro' ?
                            
                            <>
                                <Image source={{uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Wlademir-Araujo-Tavares1-225x300.png'}} style={{width: '200px', height: '250px', marginBottom: 20}} />
                                <Text style={styles.modalText}>Nome: {informacoes[0]}.</Text>
                                <Text style={styles.modalText}>Idade: {informacoes[1]}.</Text>
                                <Text style={styles.modalText}>E-mail: {informacoes[2]}.</Text>
                            </>
                            :
                            <>
                                <Text style={styles.modalText}>Peso: {informacoes[0]} kg.</Text>
                                <Text style={styles.modalText}>Altura: {informacoes[1]} m.</Text>

                                <Text style={styles.modalText}>
                                    Seu IMC é de {imc}.
                                </Text>
                                
                                <Text>Sua situação é:</Text>
                                {imc < 17 ? <Text style={styles.modalText}>"muito abaixo do peso".</Text> : '' }
                                {imc > 17 && imc <= 18.49 ? <Text style={styles.modalText}>"abaixo do peso".</Text> : ''}
                                {imc > 18.50 && imc <= 24.99 ? <Text style={styles.modalText}>"peso ideal".</Text> : ''}
                                {imc > 25 && imc <= 29.99 ? <Text style={styles.modalText}>"acima do peso".</Text> : ''}
                                {imc > 30 && imc <= 34.99 ? <Text style={styles.modalText}>"obesidade grau 1".</Text> : ''}
                                {imc > 35 && imc <= 39.99 ? <Text style={styles.modalText}>"obesidade grau 2".</Text> : ''}
                                {imc > 40 ? <Text style={styles.modalText}>"obesidade mórbida".</Text> : ''}
                            </>
                        }

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={()=> {
                            setModalVisible(!modalVisible)
                            navigation.navigate('Main')
                        }}
                    >
                        <Text style={styles.textStyle}>Voltar à Página Inicial</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 300,
        height: 'auto'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: '#F194FF'
    },
    buttonClose: {
        backgroundColor: '#2196F3'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
})

export default ModalApp