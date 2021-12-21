import mensagens from "./mensagens"

const validadorepisodios = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 40, message: mensagens.maxLength + ': 40'}
    },
    lancamento: {
        minLength: {value: 8, message: mensagens.minLength + ': 00/00/0000'}
    }
}
export default validadorepisodios