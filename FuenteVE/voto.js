
function Validaciones(){
    var txtced = document.getElementById('txtcedula'); 
    var valor = txtced.value;
    
    if (valor.length<10)
    {
     alert('Cedula ingresada no es valida')
     return
    }
 

    sessionStorage.setItem('dni', valor);


    var inputtxt = document.getElementById('txtpin'); 
    var valor = inputtxt.value;
    
    if (valor.length<6)
    {
     alert('Pin ingresada no es valida')
     return
    }

   // loadid(txtced.value);
    //load(1);
    loadDni(txtced.value);
}




function loadid(dni) {

    var active = dataBase.result;
    var data = active.transaction(["tb_votante"], "readonly");
    var object = data.objectStore("tb_votante");
    var index = object.index("by_dni");

    var ob = index.get("by_dni");

    sessionStorage.setItem('dni', dni);


    var request = index.get(String(dni));
                
    request.onsuccess = function () {
        
        var result = request.result;
        
        if (result !== undefined) {
            alert("ID: " + result.id + "\n\
            DNI: " + result.dni + "\n\
            pin: " + result.pin + "\n\
            psw: " + result.psw );
        }
    };         
    }

    function load(id) {
                
        var active = dataBase.result;
        var data = active.transaction(["tb_votante"], "readonly");
        var object = data.objectStore("tb_votante");
        
        var request = object.get(parseInt(id));
        

        request.onsuccess = function () {
            
            var result = request.result;
            
            if (result !== undefined) {
                alert("dni: " + result.dni + "\n\
                DNI: " + result.dni + "\n\
                pin: " + result.pin + "\n\
                psw: " + result.psw );
            }
        };
        
        var vdni = result.dni;
        var vpin = result.pin;
        var vid = result.id;      
       
        var n = id.localeCompare(vid);
        document.getElementById("demo").innerHTML = n;


        
    }

