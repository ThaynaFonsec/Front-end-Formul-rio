class RicksService {
    getAll() {

        const ricks = localStorage.getItem('ricks')
        return ricks ? JSON.parse(ricks) : []

    }

    get(id) {

        const ricks = this.getAll()
        return ricks[id]

    }

    create(dados) {

        const ricks = this.getAll()
        ricks.push(dados)
        localStorage.setItem('ricks', JSON.stringify(ricks))

    }

    update(dados, id) {

        const ricks = this.getAll()
        ricks.splice(id, 1, dados)
        localStorage.setItem('ricks', JSON.stringify(ricks))

    }

    delete(id) {

        const ricks = this.getAll()
        ricks.splice(id, 1)
        localStorage.setItem('ricks', JSON.stringify(ricks))
       
    }
}

export default new RicksService();