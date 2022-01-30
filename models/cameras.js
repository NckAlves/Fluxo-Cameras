const res = require('express/lib/response')
const conexao = require('../infra/conexao')

class Cameras {

    adicionarCamera(cadastro) {
        const sql = 'INSERT INTO cameras SET ?'

        conexao.query(sql, cadastro, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    exibirCameras(res) {
        const sql = 'SELECT * FROM cameras'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                console.log(erro)
            } else {
                res.send(resultados).json()
                console.log(resultados)
            }
        })
    }

    alterarCamera(id, valores, res) {
        const sql = 'UPDATE cameras SET ? WHERE id=?'
        
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
                res.send(resultados)
            }
        } )
    }

    deletarCamera(id, res) {
        const sql = 'DELETE FROM cameras WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
                res.send(resultados)
            }
        })
    }
}

module.exports = new Cameras