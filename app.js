const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let valor = null;

function obterEscolha() {
  rl.question('Escolha a bebida (café, leite ou chá): ', function (choice) {
    switch (choice.toLowerCase()) {
      case 'café':
        valor = 5.50;
        break;
      case 'leite':
        valor = 4.00;
        break;
      case 'chá':
        valor = 3.50;
        break;
      default:
        console.log('\nEscolha invalida!\nPor favor, escolha entre café, leite ou chá.');
        obterEscolha(); // Chama novamente para nova entrada
        return;
    }

    console.log(`Você escolheu ${choice} no valor de R$ ${valor.toFixed(2)}`);
    rl.close();
  });
}

obterEscolha();
