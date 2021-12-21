class AnimaisService {
    getAll() {

        const animais = localStorage.getItem('animais')
        return animais ? JSON.parse(animais) : []

    }

    get(id) {

        const animais = this.getAll()
        return animais[id]

    }

    create(dados) {

        const animais = this.getAll()
        animais.push(dados)
        localStorage.setItem('animais', JSON.stringify(animais))

    }

    update(dados, id) {

        const animais = this.getAll()
        animais.splice(id, 1, dados)
        localStorage.setItem('animais', JSON.stringify(animais))

    }

    delete(id) {

        const animais = this.getAll()
        animais.splice(id, 1)
        localStorage.setItem('animais', JSON.stringify(animais))
       
    }
}

export default new AnimaisService();