/*
O operador switch no JavaScript é uma estrutura de controle usada para tomar decisões com base no valor de uma variável ou expressão. Ele verifica o valor e executa um bloco de código específico que corresponde ao valor encontrado.

Funciona assim:

O valor da variável é comparado com diferentes casos (opções).
Quando um caso correspondente é encontrado, o código dentro desse caso é executado.
O comando break é usado para parar a execução após o caso ser encontrado (senão, o código continua executando).
Se nenhum caso for encontrado, o código dentro de default (padrão) é executado.
*/

let diaSemana = 5 ;

if(diaSemana === 0){
    console.log("Hoje é Domingo")
}else if(diaSemana === 1){
    console.log("Hoje é Segunda-feira")
}else if(diaSemana ===2){
    console.log("Hoje é Terça-feira")
}else if(diaSemana ===3){
    console.log("Hoje é Quarta-feira")
}else if(diaSemana === 4){
    console.log("Hoje é Quinta-feira")
}else if(diaSemana === 5){
    console.log("Hoje é Sexta-feira")
}else if(diaSemana === 6){
    console.log("Hoje é Sabado")
}

let dia = ""

switch(diaSemana){
    case 0:
        dia = "Domingo"
        break
    case 1: 
        dia ="Segunda-feira"
        break
    case 2:
        dia="Terça-feira"
        break
    case 3:
        dia = "Quarta-feira"
        break
    case 4:
        dia = "Quinta-feira"
        break
    case 5: 
        dia = "Sexta-feira"
        break
    case 6://No ultimo case o break é opcional.
        dia = "Sábado"
        break
    default:
        console.log("----")
}

console.log(`Hoje é ${dia} raça safada!`)