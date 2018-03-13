$(document).ready(function(){
    
    
    $('#submitbutton').click(function(){
        
        $('#show').hide().fadeIn(2000);
        
        var city = $('#city').val();
        
        if(city != ''){
            
            $.ajax({
                url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + '&APPID=178a408f5ec75e85a2bc0374ccd823bf',

                type:"GET",
                dataType:"jsonp",
                success: function(data){
                 var widget = show(data);
                    
                    $('#show').html(widget);
                    
                    $('#city').val('');
                
                
            }
                
                
            });
            
            
        }else{
            $('#arrow').html('Field Cannot Be Empty');
            
        }
        
    
        
        
    });    
    
});

function show(data){
    
    return "<h3 style='font-size: 40px; font-weight: bold;'>Current Weather For " + data.name + ", " + data.sys.country +"</h3>" +
           "<h3>Weather: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+ data.weather[0].description +"</h3>" +
           "<h3>Temperature: "+ data.main.temp +"&deg;F</h3>" +
           "<h3>Humidity: "+ data.main.humidity +"%</h3>" +
           "<h3>Minimum Temperature: "+ data.main.temp_min +"&deg;F</h3>" +
           "<h3>Maximum Temperature: "+ data.main.temp_max +"&deg;F</h3>";
           


}




