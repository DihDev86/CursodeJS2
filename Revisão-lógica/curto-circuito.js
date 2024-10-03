/*

Em JavaScript, o "curto-circuito" ocorre quando utilizamos operadores lógicos como && (E) ou || (OU), e o JavaScript decide parar de avaliar a expressão assim que o resultado já puder ser determinado. Vamos ver como funciona:

Operador || (OU lógico): Ele retorna o primeiro valor verdadeiro que encontrar. Se o primeiro valor já for verdadeiro, o segundo nem é avaliado. Se nenhum valor for verdadeiro, ele retorna o último.

const resultado = "Olá" || "Mundo";
console.log(resultado); // "Olá"

Aqui, o JavaScript encontrou "Olá" (um valor verdadeiro) e nem olhou para "Mundo".

Operador && (E lógico): Ele retorna o primeiro valor falso que encontrar. Se o primeiro valor já for falso, o segundo nem é avaliado. Se todos os valores forem verdadeiros, ele retorna o último valor.

const resultado = 0 && "Mundo";
console.log(resultado); // 0

Nesse caso, o 0 é falso, então ele para ali e nem avalia "Mundo".

Resumindo:

||: Para na primeira condição verdadeira.
&&: Para na primeira condição falsa.

Isso é o curto-circuito em JavaScript. Ele permite que o código seja mais eficiente, evitando avaliações desnecessárias.

*/

const resultado = "Olá" || "Mundo";
console.log(resultado);

const resultado2 = null && "Mundo";
console.log(resultado2);

let isValid = true;
let notIsvalid = false;

console.log(isValid ||notIsvalid )//A primeira condiçãoe é verdadeira, logo o retorno será true e o resto da condição não será avaliada, isso acontece com o operador OU (||).
console.log(notIsvalid && isValid)//A primeira condição é falsa, logo toda condição será falsa e o resto não será avaliada, isso acontece com o operador E (&&).

