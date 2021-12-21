import mensagens from "./mensagens"

const validadorricks = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 40, message: mensagens.maxLength + ': 40'}
    },
    cpf: {
        required: mensagens.required,
        minLength: {value: 11, message: mensagens.minLength + ': 11'}
    },
    nascimento: {
        required: mensagens.required,
        minLength: {value: 8, message: mensagens.minLength + ': 8'}
    },
    especie: {
        required: mensagens.required,
        maxLength: {value: 20, message: mensagens.maxLength + ': 20'}
    },
    cidade: {
        maxLength: {value: 20, message: mensagens.maxLength + ': 20'}
    }
}
export default validadorricks