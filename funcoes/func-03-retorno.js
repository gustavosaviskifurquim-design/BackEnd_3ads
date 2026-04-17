// Funções de retorno exigem o termo 'return'
// Permitem tornar disponiveis os dados processados 
// Reaproveitamento e ações sequenciais 
// Podemos armazenar as funções de retorno 
// A variaveis, funções, arrays, etc.

function meuSalario(salario) {
    const contaLuz = 145.0
    const aluguel = 1350.0
    const restoSalario = salario - (contaLuz+aluguel)
   //console.log(restoSalario) // não servo p/ usuário
    return `O resto do seu salário é R$ ${restoSalario.toFixed(2).replace(".",",")}`
}
const resto =  meuSalario(15000.0)
console.log(resto)