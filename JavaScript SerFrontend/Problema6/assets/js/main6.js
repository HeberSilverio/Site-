// PROBLEMA 6
// Se nota1 > 0 e nota2 > 0 E media > 5
// mostra mensagem de parabéns
// Senão mostra mensagem de reprovação

let nota1 = prompt('Qual a sua primeira nota?');

//converter em número inteiro
nota1 = parseFloat(nota1);

//pedir para o usuário digitar outro número
let nota2 = prompt('Qual a sua segunda nota?');

//converter em número inteiro
nota2 = parseFloat(nota2);

const media = (nota1 + nota2) / 2;

// Se nota1 > 0 e nota2 > 0 E media > 5
if(nota1 > 0 && nota2 > 0 && media > 5){
   alert(`Parabéns! Sua média é ${media}`)
} else {

  // Senão mostra mensagem de reprovação
   alert(`Sua média é ${media}. Você reprovou.`);
   
}


// alert(`O Jogador1 escolheu ${n1}, O Jogador1 escolheu ${n2}, O numero sorteado foi: ${sorteio}`)
// const exibeBoolean = document.querySelector('.comparacao');
// exibeBoolean.innerHTML += `<p>A média: ${resultadoMedia} é maior do que o número 5? Resposta: ${texteBoolean}. </p>`

// console.log(typeof(texteBoolean));