$(document).ready(function (){

//declare variables
var $setTemp = $(".temp");
var $setLocation = $(".location");

//call API
$.ajax({
    type: 'GET',
    url: 'http://api.wunderground.com/api/f9ee0f522276d317/conditions/q/wa/seattle.json',
    success: function (data) {
      //variables for the temps and conditions i need
      var temp_f = data.current_observation.temp_f;
      var temp_c = data.current_observation.temp_c;
      var conditions = data.current_observation.weather;
      var location = data.current_observation.display_location.full;

        //a way to determine what icon gets displayed based on current temperature and conditions
        //just text to start
        console.log(temp_f + " &deg; F");
        console.log(temp_c + " &deg; C");
        console.log(conditions + location);

        ($setTemp).html("<p>" + temp_f + "</p>");
        ($setLocation).html("<p> &mdash; " + location + "&deg; F</p>");

        }
    });
});
