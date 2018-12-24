// 0 obter usuario
// 1- obter numero de telefone de usuario a partir do id
// 2- obter o endereco do usuario

// IMPLEMENTAÇÃO POR PROMISES

function obterUsuario() {
    // Quando houver problema - reject(erro)
    // Quando sucesso - resolve  
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 31731,
                name: 'Zé da silva',
                birthDate: new Date(1985, 12, 25)
            })
        }, 500);
    })
};

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            id: 24525,
            ddd: '16',
            numero: '39112154'
        })
    }, 1000);

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

//CALLBACK (erro,sucesso)


//carrega usuario
const usuarioPromise = obterUsuario();

// para manipular o sucesso usamos a função .then
usuarioPromise
    .then(function (resultado) {

        console.log("Resultado:", resultado);

    })
    .catch(function erro(error) {
        console.erro("HOUVE UM ERRO! ", error);
    });

// para manipulasr o erro, usamos o  .catch

// const usuario = obterUsuario(function resolverUsuario(error, usuario) {
//     //null || "" || false === 0 
//     if (error) {
//         console.error("DEU ZEBRA! ERRO AO OBTER USUÁRIO", error);
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(erroTelefone, telefone) {

//         if (erroTelefone) {
//             console.error("DEU ZEBRA! ERRO AO OBTER TELEFONE", erroTelefone);
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(erroEndereco, endereco) {
//             if (erroEndereco) {
//                 console.error("DEU ZEBRA! ERRO AO OBTER ENDEREÇO", erroTelefone);
//                 return;
//             }

//             console.log(`USUARIO: 
//             Id: ${usuario.id}
//             Nome: ${usuario.nome}
//             Telefone: ${telefone.ddd} ${telefone.numero}
//             Endereço: ${endereco.logradouro}, ${endereco.numero} ${endereco.complemento}, ${endereco.cidade}/${endereco.estado}
//     `)
//         });
//     });
// });