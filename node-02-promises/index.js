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

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolv, reject) {
        setTimeout(function () {
            return resolv({
                id: 24525,
                ddd: '16',
                numero: '39112154'
            })
        }, 1000);
    });
}

function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolv, reject) {
        setTimeout(function () {
            return resolv(null, {
                logradouro: 'Rua XPTO',
                numero: '35',
                complemento: 'apartamento',
                cidade: 'São Paulo',
                estado: 'SP'
            })
        }, 1000)
    });
}

//carrega usuario
const usuarioPromise = obterUsuario();

// para manipular o sucesso usamos a função .then
usuarioPromise
    .then(function (usuario) {
        console.log("Resultado:", usuario);
        return usuario;
    })
    .then(function (usuario) {
        return obterTelefone(usuario.id);
    })
    .then(function (usuario) {
        return obterEndereco((usuario.id));
    })
    .catch(function erro(error) {
        console.erro("HOUVE UM ERRO! ", error);
    });
