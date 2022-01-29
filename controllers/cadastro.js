const Gerentes = require('../models/gerentes')
const Estabelecimentos = require('../models/estabelecimentos')
const Cameras = require('../models/cameras')

module.exports = app => {
    app.get('', (req, res) => res.send('Rota vazia'))

    //CRUD Gerentes
    app.get('/gerentes', (req, res) => {
        Gerentes.exibirGerentes(res)
    })

    app.post('/gerentes', (req, res) => {
        const gerente = req.body

        Gerentes.adicionarGerente(gerente)
        res.send('POST nos gerentes')}
        )


    //CRUD Estabelecimentos
    app.get('/estabelecimentos', (req, res) => {
        Estabelecimentos.exibirEstabelecimentos(res)
    })    
    app.post('/estabelecimentos', (req, res) => {
        const estabelecimento = req.body

        Estabelecimentos.adicionarEstabelecimento(estabelecimento)
        res.send('POST nos estabelecimentos')
    })


    //CRUD Cameras
    app.get('/cameras', (req, res) => {
        Cameras.exibirCameras(res)
    })
    app.post('/cameras', (req, res) => {
        const camera = req.body

        Cameras.adicionarCamera(camera)
        res.send('POST nas cameras')
    })
    app.patch('./cameras/:id', (req, res) => {
        const id = parseInt(req.query)
        const valores = req.body

        Cameras.alterarCamera(id, valores, res)
    })
    app.delete('./cameras/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Cameras.deletarCamera(id)
    })
}