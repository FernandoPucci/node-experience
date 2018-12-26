//PROMISES - São executadas uma unica vez
//EVENTS - São executados para ações contínuas (ex. leitura de arquivo, leitura de ação do usuariom etc)
const EventEmitter = require('events')
class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

//criação do observer
meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou', click)
})

//simulação do clique
meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no botão OK')


// //emissão de eventos em loop
// let count = 0

// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'no botão OK ' + (count++))
// }, 250);


//LENDO O STDIN
const stdin = process.openStdin()
stdin.addListener('data', function(value){
    console.log(`Você digitou: ${value.toString().trim()}` )
})

