// strings, number (int,floats), boolean
// Esse são os 3 tipo da dados primitivos : string(caracteres), number(Números inteiros e fracionários) e boolean(True or False)
//undefined, null, symbol(veremos mais à frente)

let minhaVar ="minha string" // com aspas duplas
let minhaVar2 = 'Minha "string" com aspas simples' // com aspas simples
//Podemos atribuir as strings com aspas simples ou duplas.

console.log(minhaVar2)

let minhaVar3 = `Minha template lireal`; //Essa sintaxe também funciona, porém pode ser que não funcione em navegadores mais antigos.
console.log(minhaVar3)

//A diferença entre templeta literal e aspas se dá na concatenação

let idade = 40;
let msg = `Eu tenho ${idade} anos`

//A concatenação usando o template litera é usando os valores dentro de crase `` e o que queremos concatenar dentro de ${}
//Essa sintaxe é melhor para visibilidade do código.

console.log(msg)

//Para identificar o valor de uma variável usamos a propriedade "typeof"

console.log(typeof msg, typeof idade, typeof minhaVar, "---", 20)


//Tipo number(inteiros ou decimais são number)

const n1 = 10
const n2 = 1.1

console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`O tipo do n2 é ${typeof n2} e seu valor é ${n2}`)

//Tipo Boolean (True ou false)

const isValid = false
console.log(`isValid: ${isValid}`)

//Undefined

let varTeste;

console.log(varTeste) //Variável undefined: Isso acontece quando uma variável é declarada, mas não recebe um valor.

console.log(typeof varTeste)
// Valor undefined: Ocorre quando você atribui explicitamente o valor undefined a uma variável, indicando que ela não tem um valor atribuído

//Podemos atribuir um valor a variável undefined

varTeste=10
console.log(typeof varTeste, varTeste)
//Agora temos a varTest com um valor atribuido, que é o number.

//Para declaracar explicitamente um valor undefined usamos o null.
let varTeste22 = null;
//O tipo retornará object que foi um erro de implementação do JS, e para não quebrar códigos antigos esse erro perdura até hoje.
console.log(typeof varTeste22)






