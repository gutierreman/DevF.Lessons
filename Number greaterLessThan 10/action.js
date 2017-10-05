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
