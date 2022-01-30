const express = require('express')
const { json } = require('express/lib/response')
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
                res.json(resultado)
                express.json(resultado)
                console.log(resultado)
            }
        })
    }

    alterarGerente(id, valores, res) {
        const sql = 'UPDATE gerentes SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                res.send(resultados)
                console.log(resultados)
            }
        })
    }

    alterarGerente(id, valores, res) {
        const sql = 'UPDATE gerentes SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
                res.send(resultados)
            }
        })
    }

    deletarGerente(id, res) {
        const sql = 'DELETE FROM gerentes WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                res.send(resultados)
                console.log(resultados)
            }
        })
    }
}

module.exports = new Gerentes