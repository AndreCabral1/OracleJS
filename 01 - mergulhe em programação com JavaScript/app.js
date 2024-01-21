// @ts-nocheck
alert('Boas vindas ao jogo do número secreto')
let numeroMaximo = 100;
const numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroDeTentativas = 1;
let numeroDigitado;

while (numeroDigitado != numeroSecreto) {
    numeroDigitado = parseFloat(prompt(`Escolhe um número entre 1 e ${numeroMaximo}`));

    if (numeroDigitado == numeroSecreto) {
        break;
    } else {
        if (numeroDigitado > numeroSecreto) {
            alert(`O numero secreto é menor que ${numeroDigitado}`);
        } else {
            alert(`O numero secreto é maior que ${numeroDigitado}`);
        }
    }
    numeroDeTentativas++;
}

let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o numero secreto ${numeroSecreto} com ${numeroDeTentativas} ${palavraTentativa}`);

