function saludo(){

  console.log("Hola");
}

function calculadora(){
  var primerNumero=0;
  var segundoNumero=0;

  primerNumero= document.getElementById("first").value;
  var primerNumeroFinal = parseInt(primerNumero);

  segundoNumero= document.getElementById("second").value;
  var segundoNumeroFinal = parseInt(segundoNumero);

  var resultado=primerNumeroFinal+segundoNumeroFinal;
  //var resultado= primerNumero*segundoNumero;
  console.log(resultado);
}

function calculadora2(){
  var primerNumero=0;
  var segundoNumero=0;
  var tercerNumero=0;
  var cuartoNumero=0;

  primerNumero= document.getElementById("first").value;
  var primerNumeroFinal = parseInt(primerNumero);

  segundoNumero= document.getElementById("second").value;
  var segundoNumeroFinal = parseInt(segundoNumero);

  tercerNumero= document.getElementById("third").value;
  var tercerNumeroFinal = parseInt(tercerNumero);

  segundoNumero= document.getElementById("fourth").value;
  var cuartoNumeroFinal = parseInt(cuartoNumero);

  var resultado=primerNumeroFinal+segundoNumeroFinal+tercerNumeroFinal+cuartoNumeroFinal;
  //var resultado= primerNumero*segundoNumero;

document.getElementById("result").innerHTML= "El resultado es " + resultado;

  console.log(resultado);
}
