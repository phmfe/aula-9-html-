const botaoCalcular = document.getElementById("botao-calcular");

botaoCalcular.addEventListener("click", function(){
  const campoValor1 = document.getElementById("valor1");
  const campoValor2 = document.getElementById("valor2");
  const campoResultado = document.getElementById("campo-resultado");

  if (campoValor1.valeu === "" || campoValor2.valeu === ""){
      alert("Digite os dois valores!");
      return; 
  }


});