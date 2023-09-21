import {View, Text} from 'react-native'

const Questao3 = ({disciplinas, cor}) => {
  return (
    <View>
        <Text>
            Minhas disciplinas favoritas até o momento foram estas:

            <ol>
                {disciplinas.map((disciplina, index)=> <li key={index} style={{color: cor, fontWeight: 'bold'}}>{disciplina}.</li>)}
            </ol>
        </Text>
    </View>
  )
}

export default Questao3