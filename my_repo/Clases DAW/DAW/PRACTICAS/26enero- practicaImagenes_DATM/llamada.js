
(function(){

 var flickerApi="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

 $.getJSON( flickerApi,{ tags:"", tagmode:"any", format:"json"})
 .done( function(data) { $.each(data.items, 
 function(i, item){$("<img>").attr("src",item.media.m).appendTo("#mostrar").css({ 'width':'200px', 'height':'200px'});}); });

})();
    
