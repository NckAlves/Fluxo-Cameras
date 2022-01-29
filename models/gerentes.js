const conexao = require('../infra/conexao')

class Gerentes {

    adicionarGerente(cadastro) {
        const sql = 'INSERT INTO gerentes SET ?'

        conexao.query(sql, cadastro, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    exibirGerentes(res) {
        const sql = 'SELECT * FROM gerentes'

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                console.log(erro)
            } else {
                res.send(resultado)
                console.log(resultado)
            }
        })
    }
}

module.exports = new Gerentes