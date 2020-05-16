
$(document).ready(function () {
      crearTablas();    
  
  });
  function crearTablas() 
  {

      var map = L.map('mapid').setView([-2.2058400, -79.9079500] , 13);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
     
      var urlCrimen = "https://localhost:5001/api/CrimenItems";
      
      $.getJSON(urlCrimen,
        function(data){
          
          $.each(data, function( key, val) { 

            var marker = L.marker([val.latitude, val.longitude]).addTo(map).bindPopup(val.zona).openPopup();
        });      
      });
  };

