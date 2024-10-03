//Operadores de comparação

/*
== Igualdade (Apenas valor)
=== Iguladade (Valor e tipo de dado)
!= Diferente (Apenas valor)
!== Diferente (Valor e tipo de dado)
< Menor que
< = Menor ou igual a
> Maior que 
>= Maior ou igual a
*/

let n1 = "10";
let n2 = 10;
let n3 = 5;

console.log(n1 == 10); // O retorno será True, porque a comparação é feita somente nos valores 
console.log(n1 === 10); // O retorno será False, porque a comparação é feita entre valor e tipo. n1 = string e 10 = number
console.log(n1 != n2); // O retorno será False, porque o n1 e o n2 são iguais no valores e esse oporador comparar se são diferentes somente nos valores.
console.log(n1 !== n2); // O retorno será verdeiro, porque o n1 e o n2 são diferentes em tipo, mesmo sendo iguais em valores.
console.log(n2 < n3);
console.log(n2 <= n3);
console.log(n2 > n3);
console.log(n2 >= n3);

//Se qualquer expressão onde tenha duas condições uma for atendida, o retorno será True.


