// 0 obter usuario
// 1- obter numero de telefone de usuario a partir do id
// 2- obter o endereco do usuario


// Importamos o Modulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

// IMPLEMENTAÇÃO POR PROMISES

function obterUsuario() {
    // Quando houver problema - reject(erro)
    // Quando sucesso - resolve  
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 31731,
                name: 'Zé da silva',
                birthDate: new Date(1985, 12, 25)
            })
        }, 500);
    })
};

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 24525,
                ddd: '16',
                numero: '39112154'
            })
        }, 1000);
    });
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            logradouro: 'Rua XPTO',
            numero: '35',
            complemento: 'apartamento',
            cidade: 'São Paulo',
            estado: 'SP'
        })
    }, 1000)
}


// 1 - adicionar a palavra 'async' a uma function -> automaticamente ela retornará uma Promise

// 2 - não se pode esquecer de realizar a chamada da função asíncrona main()
main()

async function main() {
    try {
        const usuario = await obterUsuario()
        const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id)

        console.log('resultado', `
                 ID: ${usuario.id}
                 Nome: ${usuario.name}
                 Endereço: ${endereco.logradouro}, ${endereco.numero}
                 Complemento: ${endereco.complemento}
                 Cidade: ${endereco.cidade}/${endereco.estado}
                 Telefone: (${telefone.ddd})${telefone.numero}
                 `);

    } catch (error) {
        console.error("OCORREU UM ERRO! ", error)
    }
}
