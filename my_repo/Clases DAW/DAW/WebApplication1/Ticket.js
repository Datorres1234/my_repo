

$(document).ready(function(){
    $("#ddl_Origen").change(function(){      
        document.getElementById("Datos").innerHTML = '';	
        document.getElementById("Rutas").innerHTML = '';	
        document.getElementById("Detalle").innerHTML = '';	
        Coperativas();
    });
});

function Coperativas() {
   //var urlTicket = "https://localhost:5001/api/TicketItems";
   //var htmlModi = "";

   // tabla = $("<table></table>");

   //$.getJSON(urlTicket,
   //  function(data){
   //     //  alert(data);
   //       var capa = document.getElementById("Datos");
   //       var boton = document.createElement("input");
   //       boton.type = 'button';
   //       boton.name = 'text'+'[1]';
   //       boton.value = 'Destino';
   //       capa.appendChild(boton);

   //       boton.onclick = function () {borrar(this.name)} //aqui llamamos a la funcion borrar
   //       capa.appendChild(boton);

   //       function borrar(obj) {//aqui la ejecutamos
   //         //field = document.getElementById('field');
   //         //field.removeChild(document.getElementById(obj));
   //         alert("boton");
   //       }
 
   //    $.each(data, function( key, val) { 

   //     var button = '<input type="submit" value="Numero parrafos" id="num_parrafos" name="Numero Parrafos"/>';
   //      alert(button);
   //      $('form').append(button);

   //      var marker = L.marker([val.latitude, val.longitude]).addTo(map);
         
         
   //  });      
   //});

   var myObj, i, j, x = "";
myObj = {
  "nameT":"*** Terminal Terrestre Guayaquil *** ",
  "age":30,
  "cars": [
    {"name":"TransporteEsmeralda", "models":["$11", "Esmeralda - Quito", "35","$11.75", "Esmeralda - Guayaquil", "30", "$15", "Esmeralda - Manta", "20","$11.25" ]},
    {"name":"Flota Imbabura", "models":["$15", "Quito - Guayaquil", "25",
    "$6", "Quito - Ibarra", "30","$10", "Quito - Tulcan", "38",
    ]},
    {"name":"Transporte Baños", "models":["$10", "Baños - Guayaquil", "40",
    "$12", "Baños - Cuenca", "30","$7", "Baños - Quito", "22",
    ] }
  ]
}
x += "<h2>" + myObj.nameT + "</h2>";
for (i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
    conboton = document.createElement('div');
    var capa = document.getElementById("Datos");  
    if (j==0){
        var  sec = 0;
        var capa = document.getElementById("Datos");    
    
        conboton = document.createElement('div');              
        conboton.id = 'div' + i;
        conboton.setAttribute('class', 'listaTransportes');  
        capa.appendChild(conboton);
    
              boton = document.createElement("input");
              boton.type = 'button';
              boton.name =  'btn' + i ;
              boton.id = i;
              boton.value = myObj.cars[i].name;
              conboton.appendChild(boton);
              
    
              boton.onclick = function () { Generar(this.name, this.id)}         
    
    }


    function Generar(obj, num) {
        document.getElementById('Detalle').innerHTML = '';	
        document.getElementById("Rutas").innerHTML = '';	
        

          fi = document.getElementById('Rutas');

          contenedorr = document.createElement('div');              
          contenedorr.id = 'div' + num;
          contenedorr.setAttribute('class', 'hijo');  
          fi.appendChild(contenedorr);

          lbl = document.createElement('label');
          lbl.innerHTML = 'RUTA: ';
          contenedorr.appendChild(lbl);

          srut = document.createElement('select');
          srut.type = 'select';
          srut.name = 'slt_rutas';    
          srut.id   = 'slt_rutas';   
          lbl.appendChild(srut); 
          srut.onchange = function () {
            document.getElementById("Detalle").innerHTML = '';	
            var combo = document.getElementById("slt_rutas");
            var selected = combo.options[combo.selectedIndex].value;            
              Generardet(num, myObj.cars[num].models, selected)
            }  
       
 
          cargar(myObj.cars[num].models);

          function cargar( rutas) {
            var rutasdes ;
            rutasdes = {
                "0":rutas[1],
                "1":rutas[4],
                "2":rutas[7]
              };

            var select = document.getElementById("slt_rutas"); 
            
            for(i in rutasdes){ 
                var option = document.createElement("option"); 
                option.innerHTML = rutasdes[i]; 
                option.value = i;
                select.appendChild(option); //Metemos la opción en el select
            }
        }
        

        function Generardet(num, detdatos, escogido){
           document.getElementById("Detalle").innerHTML = '';
            
            fi = document.getElementById('Detalle');
            contenedor = document.createElement('div');              
            contenedor.id = 'div' + num;
            contenedor.setAttribute('class', 'hijo');  
            fi.appendChild(contenedor);
  
            lbl = document.createElement('label');
            lbl.innerHTML = 'No Asientos: ';
            contenedor.appendChild(lbl);

          //  var rutasesc;
           

            var valores =0, s =0;

            if (escogido ==0)
            {
                s = 0;
                rutasesc = {
                    "0": detdatos[0],
                    "1": detdatos[1],
                    "2": detdatos[2]
                };


            }

            if (escogido ==1)
            {
                s = 4;
                rutasesc = {
                    "0": detdatos[3],
                    "1": detdatos[4],
                    "2": detdatos[5]
                };
            }
            if (escogido ==2)
            {
                s = 7;
                rutasesc = {
                    "0": detdatos[6],
                    "1": detdatos[7],
                    "2": detdatos[8]
                };
            }


          
            ele = document.createElement('input');
            ele.type = 'text';
            ele.name = 'nombre' + num;              
            ele.value = rutasesc[2]; //'40';
            lbl.appendChild(ele);
  
            contenedorv = document.createElement('div');
            contenedorv.id = 'div' + num;
            contenedorv.setAttribute('class', 'hijo');  
            fi.appendChild(contenedorv);
  
            
            lbl = document.createElement('label');
            lbl.innerHTML = 'Valor: ';
            contenedorv.appendChild(lbl);
  
            valor = document.createElement('input');
            valor.type = 'text';
            valor.name = 'nombre' + num;
            valor.value = rutasesc[0]; //'15';
            lbl.appendChild(valor);
  
            contenedorp = document.createElement('div');
            contenedorp.id = 'div' + num;
            fi.appendChild(contenedorp);
  
            var botonp = document.createElement("input");
            botonp.type = 'button';
            botonp.name = 'btn' + num;
            botonp.value = 'Pagar';
            contenedorp.appendChild(botonp);
  
            botonp.onclick = function () { Pagar(this.name) }
  
            function Pagar(obj) {
              
            }
            contenedorp.appendChild(botonp);

        }

      }



  }
}
//document.getElementById("demo").innerHTML = x;


}