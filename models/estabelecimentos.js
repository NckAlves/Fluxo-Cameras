const res = require('express/lib/response')
const conexao = require('../infra/conexao')

class Estabelecimentos {

    adicionarEstabelecimento(cadastro) {
        const sql = 'INSERT INTO estabelecimentos SET ?'

        conexao.query(sql, cadastro, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    exibirEstabelecimentos(res) {
        const sql = 'SELECT * FROM estabelecimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                res.send(resultados)
                console.log(resultados)
            }
        })
    }
}

module.exports = new Estabelecimentos