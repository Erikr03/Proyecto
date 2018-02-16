var nombre = prompt("Escriba su Nombre completo ");
var edad = prompt("Escriba su Edad");
const presiobase = 250;
if (edad >= 65 || edad <= 18) {
  alert("Lo sentimos; No cumple el requisito de Edad para asegurarlo");
}else {

  var estado_civil = prompt("¿Se encuentra casado? Responda Si o No");

   if (estado_civil == "si") {
    var edad_pareja = prompt("Indique la edad de su Conyuge");
  }
    var hijos = prompt("¿Tiene Hijos? Responda Si o No");

  if (hijos == "si") {
    var cant_hijos = prompt("¿Cuantos hijos tiene menores de 21 años?");
    var comision3 = parseInt(cant_hijos,"10");
  }
  if (edad < 21 ) { var comision1= 0;    }
  else if (edad == 21 || edad < 25) { comision1 = 1;}
  else if (edad == 25 || edad < 30) { comision1 = 2;}
  else if (edad == 30 || edad < 40) { comision1 = 5;}
  else if (edad == 40 || edad < 50) { comision1 = 8;}
  else if (edad == 50 || edad < 65) { comision1 = 12;}
  if (edad_pareja < 30) { var comision2 = 1;}
  else if (edad_pareja >= 30 || edad_pareja < 40) { comision2 =  2;}
  else if (edad_pareja >= 40 || edad_pareja < 50) { comision2 =  3;}
  else if (edad_pareja >= 50 || edad_pareja < 70) { comision2 =  5;}
  var comision4 = comision1+comision2+comision3;
  var recargo = ((comision4/100) * presiobase);
  var totalapagar = recargo + presiobase;
  document.write("Su solicitud fue procesada con exito");
  document.writeln("Su nombre: "+nombre);
  document.writeln( "Su edad es: " + edad);
  document.writeln("Tubo los siguientes recargos:");
  document.writeln("Regargo por edad:"+ comision1);
  document.writeln("Recargo por Conyuge: "+ comision2);
  document.writeln("Recargo por hijos: "+ cant_hijos);
  document.writeln("SU TOTAL A PAGAR ES DE: "+ totalapagar);
  }
