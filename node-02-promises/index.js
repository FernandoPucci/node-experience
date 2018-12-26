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

//carrega usuario
const usuarioPromise = obterUsuario()

// para manipular o sucesso usamos a função .then
// para manipular erros, usamos o .catch
// função usuario -> telefone -> endereco
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(telefone) {
                return {
                    usuario: {
                        id: usuario.id,
                        nome: usuario.name
                    },
                    telefone: {
                        ddd: telefone.ddd,
                        numero: telefone.numero
                    }
                }
            })
    })
    .then(function (usuarioTelefone) {
        const endereco = obterEnderecoAsync(usuarioTelefone.usuario.id);
        return endereco.then(function resolverEndereco(endereco) {
            return {
                usuario: usuarioTelefone.usuario,
                telefone: usuarioTelefone.telefone,
                endereco: {
                    logradouro: endereco.logradouro,
                    numero: endereco.numero,
                    complemento: endereco.complemento,
                    cidade: endereco.cidade,
                    estado: endereco.estado
                }
            }
        })
    })
    .then(function (resultado) {
        console.log('resultado', resultado);
    })
    .catch(function erro(error) {
        console.erro("HOUVE UM ERRO! ", error);
    });

