/*
1. Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no
botão calcular efetuar os cálculos solicitados na página.
*/


/*2. Alterar o cálculo do botão calcular para que a cada vez que o
usuário digitar um valor e sair do input o formulário seja
automaticamente recalculado.
 */
// Adiciona um evento onclick ao botão com o id "btn_calcular" que chama a função "calculo()"
document.getElementById("btn_calcular").setAttribute("onclick", "calculo()");

// Adiciona eventos onmouseout aos elementos com os ids especificados que chamam a função "calculo()" quando o mouse sai deles
document.getElementById("valor_transporte").setAttribute("onmouseout", "calculo()");
document.getElementById("valor_alimentacao").setAttribute("onmouseout", "calculo()");
document.getElementById("valor_receita").setAttribute("onmouseout", "calculo()");
document.getElementById("valor_automovel").setAttribute("onmouseout", "calculo()");
document.getElementById("faltas").setAttribute("onmouseout", "calculo()");

// Define a função de cálculo, que é chamada pelos eventos onclick e onmouseout
const calculo = () => {
  // Obtém os valores dos campos de entrada e converte para números inteiros
  const valorBase = parseInt(document.getElementById("valor_base").value);
  const valorTransporte = parseInt(document.getElementById("valor_transporte").value);
  const valorAlimentacao = parseInt(document.getElementById("valor_alimentacao").value);

  // Calcula a receita somando os valores obtidos
  const calculoValor = valorBase + valorTransporte + valorAlimentacao;

  // Define o valor calculado no campo de entrada com o id "valor_receita"
  document.getElementById("valor_receita").setAttribute("value", calculoValor);

  // Obtém os valores dos campos de entrada relacionados aos descontos e converte para números inteiros
  const descontoAutomovel = parseInt(document.getElementById("valor_automovel").value);
  const faltas = parseInt(document.getElementById("faltas").value);

  // Calcula o desconto somando os valores obtidos
  const calculoDesconto = descontoAutomovel + faltas;

  // Define o valor calculado no campo de entrada com o id "valor_descontos"
  document.getElementById("valor_descontos").setAttribute("value", calculoDesconto);

  // Calcula o total subtraindo o desconto da receita
  const total = calculoValor - calculoDesconto;

  // Define o valor calculado no campo de entrada com o id "valor_total"
  document.getElementById("valor_total").setAttribute("value", total);
};