import mensagens from "./mensagens"

const validadoraliens = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 40, message: mensagens.maxLength + ': 40'}
    },
    especie: {
        required: mensagens.required,
        maxLength: {value: 20, message: mensagens.maxLength + ': 20'}
    },
    localizacao: {
        maxLength: {value: 20, message: mensagens.maxLength + ': 20'}
    }
}
export default validadoraliens