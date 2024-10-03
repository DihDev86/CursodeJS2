//Condicional if, else e else if

//if: é usada para ver se uma condição é verdadeira ou falsa
//else if: é usado quando desejamos verificar outra condição caso a primeira no if seja falsa
//else: é usado para executar código se todas as condições forem falsas

let idade = 16;
let paisPresente = true;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresente) && comprouBilhete;

let msgMaiorIdade =  (idade >= 18) ? "É maior de idade": "È menor de idade" // Esse é o operador ternario, ele pode ser uma opção de uso em relação ao if e else que avalia a idade.

console.log(msgMaiorIdade)

// if(!comprouBilhete){
//     console.log("Não comprou o bilhete!")
// }
// else{
//     if(idade >= 18){
//         console.log("É maior de 18 anos")
//     }else{
//         console.log("É menor de idade e só pode viajar na com os responsáveis.")
//     }  
// }

let nota1 = 8;
let nota2 = 7;
let media =(nota1 + nota2) /2

if(nota1 === 0 || nota2 === 0){     
    console.log("Reprovado!!!")
}else if(media <= 5){
    console.log("Recuperação!")
}else if(media >=7){    
    console.log("Aprovado!")

}

console.log(media)

/*
O if, else if, e else em JavaScript são usados para tomar decisões com base em condições. Aqui está uma explicação simples e resumida de como cada um funciona:

"if"
O if é usado para verificar uma condição. Se a condição for verdadeira (true), o bloco de código dentro do if será executado.

if (condição) {
  // código a ser executado se a condição for verdadeira
}

"else if"
O else if é usado quando você deseja verificar outra condição, caso a primeira (no if) seja falsa.

if (condição1) {
  // código a ser executado se a condição1 for verdadeira
} else if (condição2) {
  // código a ser executado se a condição1 for falsa e condição2 for verdadeira
}

"else"
O else é usado para executar código se todas as condições anteriores forem falsas. Ele é opcional e sempre vem por último.

if (condição1) {
  // código a ser executado se condição1 for verdadeira
} else if (condição2) {
  // código a ser executado se condição1 for falsa e condição2 for verdadeira
} else {
  // código a ser executado se todas as condições forem falsas
}
Exemplo completo:

let idade = 18;

if (idade < 18) {
  console.log("Você é menor de idade.");
} else if (idade === 18) {
  console.log("Você tem 18 anos.");
} else {
  console.log("Você é maior de idade.");
}
Nesse exemplo, dependendo da idade, a mensagem apropriada será exibida.
*/