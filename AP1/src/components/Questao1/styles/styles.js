import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
    item: {
        backgroundColor: '#1212',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-evenly'
      },
      header: {
        fontSize: 32,
        color: '#eeeeee'
      },
      lugarEHora: {

      },
      title: {
        fontSize: 24,
        color: '#eeeeee'
      },
      horario: {
        fontSize: 15,
        color: '#eee'
      },
      preco: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#eee'
      }
})

export default styles