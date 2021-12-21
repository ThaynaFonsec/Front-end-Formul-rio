class AliensService {
    getAll() {

        const aliens = localStorage.getItem('aliens')
        return aliens ? JSON.parse(aliens) : []

    }

    get(id) {

        const aliens = this.getAll()
        return aliens[id]

    }

    create(dados) {

        const aliens = this.getAll()
        aliens.push(dados)
        localStorage.setItem('aliens', JSON.stringify(aliens))

    }

    update(dados, id) {

        const aliens = this.getAll()
        aliens.splice(id, 1, dados)
        localStorage.setItem('aliens', JSON.stringify(aliens))

    }

    delete(id) {

        const aliens = this.getAll()
        aliens.splice(id, 1)
        localStorage.setItem('aliens', JSON.stringify(aliens))
       
    }
}

export default new AliensService();