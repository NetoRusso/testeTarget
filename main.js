
// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?


let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Resposta Questão 01 : Soma =  " + SOMA);

// Resposta Questão 01 : Soma =  91


// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


const isFibonacci = (num) => {
  let a = 0, b = 1, temp;

  if (num === a || num === b) {
    return `O número ${num} pertence à sequência de Fibonacci`;
  }

  while (b < num) {
    temp = a + b;
    a = b;
    b = temp;
  }

  if (b === num) {
    return `O número ${num} pertence à sequência de Fibonacci`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci`;
  }

}

console.log(isFibonacci(13));

// O número 13 pertence à sequência de Fibonacci

console.log(isFibonacci(14));

// O número 14 não pertence à sequência de Fibonacci


// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.


// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// JSON ou XML não disponibilizado foi então gerado uma sequência de números aleatórios para o faturamento mensal.

const faturamentoDiario = [
  0, 1200, 3000, 0, 1500, 2000, 1000, 0, 1800, 2300, 0, 3100, 4000, 0, 2000, 2200, 1500, 1900, 2400, 2700, 0, 3000, 2900, 2800, 0, 3200, 3300, 3100, 0, 3400
]


function caixa(faturamentoDiario) {

  const diasComFaturamento = faturamentoDiario.filter(dia => dia > 0);

  const mediaMensal = diasComFaturamento.reduce((acumulador, valor) => acumulador + valor, 0) / diasComFaturamento.length;

  const menorValor = Math.min(...diasComFaturamento);
  const maiorValor = Math.max(...diasComFaturamento);

  const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  }

}



console.log("Menor faturamento ocorrido no mês: " + caixa(faturamentoDiario).menorValor);

// Menor faturamento ocorrido no mês: 1000

console.log("Maior faturamento ocorrido no mês: " + caixa(faturamentoDiario).maiorValor);

// Maior faturamento ocorrido no mês: 4000

console.log("Dias no mês em que o valor de faturamento diário foi superior à média mensal: " + caixa(faturamentoDiario).diasAcimaDaMedia);

// Dias no mês em que o valor de faturamento diário foi superior à média mensal: 11



// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  


const distribuidoras = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}


function calcularPercentual(distribuidoras) {
  const faturamentoTotal = Object.values(distribuidoras).reduce((acc, distribuidor) => acc + distribuidor, 0);

  const participacao = {};

  for (const estado in distribuidoras) { 
    participacao[estado] = `${((distribuidoras[estado] / faturamentoTotal)*100).toFixed(2)}%`;
  }

  return { participacao };

}

console.log(calcularPercentual(distribuidoras));


// participacao : 
// ES : "15.03%"
// MG : "16.17%"
// Outros : "10.98%"
// RJ : "20.29%"
// SP : "37.53%"




// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverteString(str) {
  
  let invertida = "";

  for (let i = str.length - 1; i>=0; i--) {
    invertida += str[i];
  }

  return invertida;
}

console.log("Hello World: " + inverteString("Hello World"));

// Hello World: dlroW olleH

console.log("Olá Sou o Neto Russo: " + inverteString("Olá Sou o Neto Russo"));

// Olá Sou o Neto Russo: ossuR oteN o uoS álO