class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarGerente()
        this.criarEstabelecimento()
        this.criarCamera()
    }

    criarGerente() {
        const sql = 'CREATE TABLE IF NOT EXISTS gerentes (id int PRIMARY KEY NOT NULL AUTO_INCREMENT, Nome varchar(30) NOT NULL, CPF varchar(11) NOT NULL, email varchar(30) NOT NULL, id_estabelecimento int, CONSTRAINT fk_GerenteEstabelecimento FOREIGN KEY (id_estabelecimento) REFERENCES estabelecimentos (id))'

            this.conexao.query(sql, erro => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Tabela criada para gerentes')
                }
            })
    }

    criarEstabelecimento() {
        const sql = 'CREATE TABLE IF NOT EXISTS estabelecimentos (id int NOT NULL AUTO_INCREMENT, Nome varchar(20), endereco varchar(50), categoria varchar(10), PRIMARY KEY(id))'
        
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada para estabelecimentos')
            }
        })
    }

    criarCamera() {
        const sql = 'CREATE TABLE IF NOT EXISTS cameras (id int PRIMARY KEY NOT NULL AUTO_INCREMENT, IP varchar(16), user varchar(20), senha varchar(20), modelo varchar(30), data_instalacao date, data_contagem date, contagem int, id_estabelecimento int, CONSTRAINT fk_CamEstabelecimento FOREIGN KEY (id_estabelecimento) REFERENCES estabelecimentos (id))'
        
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada para cameras')
            }
        })
    
    }
}

module.exports = new Tabelas