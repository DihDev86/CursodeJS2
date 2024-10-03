//Conversão de tipos de dados

let n1 = 10;
let n2 ="5";
n2 = parseInt(n2);

console.log(n1 * n2);

//Nesse caso o js é inteligente o suficiente para entender qnue "5" seria number, ou seja, ele converte de forma implicita para number e faz a multiplicação.

console.log(typeof n1, typeof n2);
//Quando usamos o typeof para ver os tipo de dado ele mostra o n1 como number e o n2 como string.

//Se fossemos fazer uma conta de adição o JS entenderia como uma concatenação, porque o n1 é number e o n2 é string, logo teriamos o valor 105. Por isso é importante fazer a conversão de maneira explicita.Os demais sinais são convertidos implicitamente.

//Para fazer a conversão de modo explicito usamos o parseInt, parseFloat e o Number. Cada um tem uma função diferente.

//ParseInt: converte para números inteiros
//Para converter uma string em number usamos o parseInt da seguinte forma:
//n2 = parseInt(n2); ou seja, o n2 recebe o parseInt de n2. Dessa forma teremos a conversão de uma string em number de forma explicita.
//E assim podemos fazer contas com qualquer operador.  

//No caso de conversão de números decimais usando o parseFloat ,porque o parseInt irá ignorar as casas decimais e irá exibir somente o número inteiro.

//Ele so consegue converter se os primeiros caracteres forem números, no caso se tivermos strings depois dos números, elas serão descartadas e se tivermos antes o valor será NAN 

console.log(n1+n2);
//E o resultado é 15, antes teriamos 105 por causa da concatenação.  

//ParseFloat: converte strings em number decimais.
let n3 = "10.568"
n3 = parseFloat(n3)
console.log(n3)

//Number: Ele não consegue converte quando tivemos caracteres não numericos, e o resultados será sempre NAN.








