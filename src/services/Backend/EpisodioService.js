class EpisodioService {
    getAll() {

        const apisodios = localStorage.getItem('apisodios')
        return apisodios ? JSON.parse(apisodios) : []

    }

    get(id) {

        const apisodios = this.getAll()
        return apisodios[id]

    }

    create(dados) {

        const apisodios = this.getAll()
        apisodios.push(dados)
        localStorage.setItem('apisodios', JSON.stringify(apisodios))

    }

    update(dados, id) {

        const apisodios = this.getAll()
        apisodios.splice(id, 1, dados)
        localStorage.setItem('apisodios', JSON.stringify(apisodios))

    }

    delete(id) {

        const apisodios = this.getAll()
        apisodios.splice(id, 1)
        localStorage.setItem('apisodios', JSON.stringify(apisodios))
       
    }
}

export default new EpisodioService();