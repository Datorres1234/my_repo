
$(document).ready(function(){
    $("#btnCalcular").click(function(){
        calcular();
    });
});

function calcular() {
   // alert("hola");
  // panel = document.getElementById("resultados");
  // numero = document.getElementById("txtNumero").value;
  panel = $("#resultados");
  numero = $("#txtNumero").val();
  tabla = $("<table></table>");

   for (var i=1; i<numero; i++){
       tr = $("<tr></tr>")
       for (var j=1; j<= numero; j++){
           contenido = j + "*" + i + "=" + i*j + "|";

           var clase = "rayado";

           if (j%2 == 0)
           clase = "rayado2";

           td = $("<td></td>").addClass(clase).text(contenido);
         //  panel.append(contenido);
           tr.append(td);
       }
       tabla.append(tr);
   }
   panel.empty();
   panel.append(tabla);
}