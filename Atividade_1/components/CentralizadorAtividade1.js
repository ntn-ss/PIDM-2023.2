import { View } from "react-native"

import Questao1 from "./Atividade_1/Questao1"
import Questao3 from "./Atividade_1/Questao3"

const CentralizadorAtividade1 = () => {

    const nathan = {
        nome: "Nathan",
        cidade: "Horizonte",
        curso: "Design Digital",
        semestre: 6
    }

    const disciplinas =
        [
            "Desenvolvimento de Software para Web",
            "Fundamentos de Bancos de Dados",
            "Linguagens de Marcação e Scripts",
            "Programação para Design"
        ]

    return (
        <View>
            <Questao1 props={ nathan } />
                <View style={{ marginTop: 20 }}>
                    <Questao3 disciplinas={disciplinas} cor='darkorange' />
                </View>
        
        </View>
    )
}

export default CentralizadorAtividade1