
$(document).ready(function(){
    $("#btnCalcular").click(function(){
        calcular();
    });
});

function calcular() {
  panel = $("#resultados");
  monto = $("#txtMonto").val();
  plazo = $("#txtPlazo").val();
  tasa = $("#txtTasa").val();

  tabla = $("<table></table>");
  var pago = 2935.27;
  var total = pago*plazo;
  var saldo = total;

   for (var i=1; i<=plazo; i++){
       tr = $("<tr></tr>")
      /// for (var j=1; j<= 3; j++){
           
           var clase = "rayado";

           saldo = (parseFloat(saldo) - parseFloat(pago));
           saldo = Math.round(saldo);

           tdsec = $("<td></td>").addClass(clase).text(i);
           tdpago = $("<td></td>").addClass(clase).text(pago);
           tdsaldo = $("<td></td>").addClass(clase).text(saldo);

      // }

      if (i==12)
       tdsaldo =0

       tr.append(tdsec);
       tr.append(tdpago);
       tr.append(tdsaldo);

       tabla.append(tr);
       
   }
   panel.empty();
   panel.append(tabla);
}