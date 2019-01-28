const service = require('./services')


async function main(){

try {
    const result = await service.obterPessoas('r2');

    for (let i = 0; i <= result.results.length - 1; i++) {
       const pessoa =result.results[i]
       console.log(pessoa)
        
    }
} catch (error) {
    console.error("ERRO INTERNO: ", error)
}
    
}

main();