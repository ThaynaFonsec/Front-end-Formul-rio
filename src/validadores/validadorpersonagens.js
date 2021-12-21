import mensagens from "./mensagens"

const validadorpersonagens = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 40, message: mensagens.maxLength + ': 40'}
    },
    cpf: {
        required: mensagens.required,
        minLength: {value: 14, message: mensagens.minLength + ': 14'}
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
export default validadorpersonagens