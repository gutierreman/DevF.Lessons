function condiciones(){
  var numero= document.getElementById("campo").value;

  if(numero>=10){
    if(numero==10){
      console.log("Tu número es 10");
    } else {
      console.log(numero + " es mayor que 10");
    }
  } else {
    console.log(numero+" NO es mayor que 10");
  }

}

function pares(){
  var numero= document.getElementById("campo").value;

  if(numero>=10){
    if(numero==10){
      console.log("Tu número es 10");
    } else {
      console.log(numero + " es mayor que 10");
    }
  } else {
    console.log(numero+" NO es mayor que 10");
  }

  if(numero%2==0){
    console.log("El Número es par");
  } else{
    console.log("El número es impar");
  }

}

function calculadora(){
  var A=parseInt(document.getElementById("valorA").value);
  var B=parseInt(document.getElementById("valorB").value);
  var resultado=0;

  var temporal=document.getElementById("operacion");
  var operador= temporal.options[temporal.selectedIndex].value;

  console.log(A);
  console.log(B);
  console.log(operador);

  if(operador == "suma"){
    resultado = A + B;
    console.log(resultado);
  } else{
    if(operador=="resta"){
      resultado= A-B;
      console.log(resultado);
    }else{
      if(operador=="multiplicacion"){
        resultado=A*B;
        console.log(resultado);
      }else{
        resultado=A/B;
        console.log(resultado);
      }
    }
  }
}
