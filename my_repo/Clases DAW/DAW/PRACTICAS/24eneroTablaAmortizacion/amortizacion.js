$(document).ready(function() {
    $("#btnCalcular").click(function(){
        calcular();

    });

});



function calcular(){
    
    panel= $("#resultados");
    monto= $("#txtMonto").val();
    plazo= $("#txtPlazo").val();
    tasa= $("#txtTasa").val();

    tabla= $("<table></table>");
    
    var pago= 2935.27;
    var total=pago*plazo;
    var saldo=total;
    
    var cabecera="rayado2";
    var Cab_num= $("<td></td>").addClass(cabecera).text("NUMERO");
    var Cab_pago= $("<td></td>").addClass(cabecera).text("PAGO");
    var Cab_saldo= $("<td></td>").addClass(cabecera).text("SALDO");
    


    for(var i=1;i<=plazo;i++){
        tr= $("<tr></tr>");
 
            var clase= "rayado";
            
            saldo= saldo - pago;
            saldo = parseFloat(Math.round(saldo * 100) / 100).toFixed(2);
            
            tdNum= $("<td></td>").addClass(clase).text(i);
            tdPago= $("<td></td>").addClass(clase).text(pago);
            tdSaldo= $("<td></td>").addClass(clase).text(saldo);

            if(i==1){

                tr_cab= $("<tr></tr>");
            
            tr_cab.append(Cab_num);
            tr_cab.append(Cab_pago);
            tr_cab.append(Cab_saldo);
            tabla.append(tr_cab);

            }


            if(i==12)
                tdSaldo=0;
                tdSaldo= $("<td></td>").addClass(clase).text(saldo);
            tr.append(tdNum);
            tr.append(tdPago);
            tr.append(tdSaldo);
            tabla.append(tr);

            
        }

        
    panel.empty();
    panel.append(tabla);
}
    


    
    