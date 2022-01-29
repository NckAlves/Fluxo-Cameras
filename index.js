const custom = require('./config/custom')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('BD Subiu')

        Tabelas.init(conexao)

        const app = custom()
        app.listen(3000, () => console.log('Hala Madrid!'))
    }
})


