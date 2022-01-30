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
        res.send('POST nos gerentes')
    })
    app.patch('/gerentes/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Gerentes.alterarGerente(id, valores, res)
    })
    app.delete('/gerentes/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Gerentes.deletarGerente(id, res)
    })

    //CRUD Estabelecimentos
    app.get('/estabelecimentos', (req, res) => {
        Estabelecimentos.exibirEstabelecimentos(res)
    })    
    app.post('/estabelecimentos', (req, res) => {
        const estabelecimento = req.body

        Estabelecimentos.adicionarEstabelecimento(estabelecimento)
        res.send('POST nos estabelecimentos')
    })
    app.patch('/estabelecimentos/:id', (req, res) => {
        const id = (req.params.id)
        const valores = req.body

        Estabelecimentos.alterarEstabelecimento(id, valores, res)
    })
    app.delete('/estabelecimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Estabelecimentos.deletarEstabelecimento(id, res)
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
        const id = parseInt(req.params.id)
        const valores = req.body

        Cameras.alterarCamera(id, valores, res)
    })
    app.delete('./cameras/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Cameras.deletarCamera(id, res)
    })
}
