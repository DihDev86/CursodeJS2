//Operadores lógicos AND(&&), OR(||) e NOT(!)

/* 
Tabela Verdade para AND (&&)
A operação AND só resulta em verdadeiro se ambas as variáveis forem verdadeiras.

A	B	(A && B) 
V	V	  V
V	F	  F
F	V	  F
F	F	  F
__________________________________________________________________________________

Tabela Verdade para OR (||)
A operação OR resulta em verdadeiro se pelo menos uma das variáveis for verdadeira.

A	B	(A || B)
V	V	  V
V	F	  V
F	V	  V
F	F	  F
___________________________________________________________________________________

Tabela Verdade para NOT (!)
A operação NOT inverte o valor lógico.

A	NOT A
V	F
F	V

*/

let idade = 18;
let paisPresente = false;
let comprouBilhete = false;
const podeViajar = (idade >=18 || paisPresente) && comprouBilhete; 
//Nessa situação precisamos isolar entre parenteses o (idade >=18 || paisPresente) para ser executado primeiro, porque o && é tem precedencia maior, depois disso o que está entre parenteses vai retornar um valor e em seguida o && é executado. 

console.log(`Pode viajar: ${podeViajar}`)

// A ordem de precedência das operações lógicas em expressões booleanas segue uma hierarquia semelhante à das operações aritméticas, ou seja, algumas operações têm maior prioridade do que outras. Aqui está a ordem de precedência entre as operações lógicas:

// NOT (not) – Operador unário, ou seja, afeta apenas um valor. Tem a maior prioridade e é avaliado primeiro.
// AND (&&) – É avaliado depois do NOT. Tem a segunda maior prioridade.
// OR (||) – Tem a menor prioridade entre os operadores lógicos.

//Nível de procedência em operadores aritméticos:

/*
1. O ( ) parênteses tem o nível de procedência mais alto e tudo que estiver dentro dele é executado primeiro;
2. A ** exponenciação é a segunda no nível de precedência e as operações são realizada das "Direita para esquerda";
3. * , / , e % Multiplicação, divisão e módulo são os terceiros no nível de procedência e as operações são realizadas das "esquerda para direita";
4. + e - Adição e subtração são os quartos no nível de procedência  e as operações são realizadas das "esquerda para direita";
*/

