$(document).ready(function(){
    
    $('#submitbutton').click(function(){
        
        var city = $('#city').val();
        
        if(city != ''){
            
            $.ajax({
                url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&",
                type:"GET",
                dataType:"jsonp",
                success: function(data){
                 var widget = show(data);
                    
                    $('#show').html(widget);
                    
                    $('#city').val('');
                
                
            }
                
                
            });
            
            
        }else{
            $('#arrow').html('Field cannot be empty');
            
        }
        
        
    });    
    
});

function show(data){
    
    return "<h3 style='font-size: 40px; font-weight: bold;'>Current Weather For " + data.name + ", " + data.sys.country +"</h3>" +
           "<h3>Weather: "+ data.weather[0].main +"</h3>" +
           "<h3>Description: "+ data.weather[0].description +"</h3>" +
           "<h3>Temperature: "+ data.main.temp +"</h3>" +
           "<h3>Pressure: "+ data.main.pressure +"</h3>" +
           "<h3>Humidity: "+ data.main.humidity +"</h3>" +
           "<h3>Minimum Temperature: "+ data.main.temp_min +"</h3>" +
           "<h3>Maximum Temperature: "+ data.main.temp_max +"</h3>" +
           "<h3>Wind Speed: "+ data.wind.speed +"</h3>" +
           "<h3>Wind Direction: "+ data.wind.deg +"</h3>"; 






}