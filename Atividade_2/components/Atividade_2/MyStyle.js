import { StyleSheet } from "react-native";

const MyStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        marginTop: 20
    },
    buttonArea:{
        flex: 1,
    },
    header: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    screenText: {
        fontSize: 16,
        marginBottom: 15
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkgreen',
        width: 150,
        height: 70,
        margin: 5,
        padding: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
    input:{
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    }
})

export default MyStyle