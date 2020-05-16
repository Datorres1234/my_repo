$(document).ready(function() {
    $("#btnCalcular").click(function(){
        calcular();

    });

});



function calcular(){
    //alert("HOLA");
    //panel=document.getElementById("resultados");
    panel= $("#resultados");
    //numero=document.getElementById("txtNumero").value;
    numero= $("#txtNumero").val();
    tabla= $("<table></table>");
    for(var i=1;i<numero;i++){
        tr= $("<tr></tr>");
        for(var j=1; j<=numero; j++){
            //contenido= i + "*" +j + "=" + i*j + "|";
            
            contenido= i + "*" +j + "=" + i*j ;
            var clase= "rayado";
            if (j%2 == 0)
              clase= "rayado2";
            //td= $("<td></td>").text(contenido);
            var td= $("<td></td>").addClass(clase).text(contenido);
            //panel.innerHTML +="<h1>HOLA</h1>";
            //panel.append("<h1>HOLA</h1>");
            //panel.append(contenido);
            
            tr.append(td);
        }
        tabla.append(tr);
        
    }
    panel.empty();
    panel.append(tabla);
}
    


    
    