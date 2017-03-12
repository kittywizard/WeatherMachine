$(document).ready(function (){

//declare variables
var $setTemp = $(".temp");
var $setLocation = $(".location");
var $setConditions = $(".conditions");

//call API
$.ajax({
    type: 'GET',
    url: 'http://api.wunderground.com/api/f9ee0f522276d317/conditions/q/wa/seattle.json',
    success: function (data) {
      //variables for the temps and conditions i need

      //a third temp variable to determine which one is being displayed
      var temp = data.current_observation.temp_f;

      var temp_f = data.current_observation.temp_f;
      var temp_c = data.current_observation.temp_c;
      var conditions = data.current_observation.weather;
      var location = data.current_observation.display_location.full;

      //display info
      ($setTemp).html("<p>" + temp_f + "&deg; F</p>");
      ($setLocation).html("<p>" + location + "</p>");


        /* weather icons from font awesome:
        sun, moon, cloud, snowflake, umbrella
        */

        switch (conditions) {
          case 'Overcast':
            ($setConditions).html("<i class='fa fa-cloud' aria-hidden='true'></i> <p>" + conditions);
            break;

          /*case 'Clear':
          //check current time. if clear > display a sun or moon
            if (CHECK FOR CURRENT TIME : COMPARE TO TIME) {
              ($setConditions).html("<i class='fa fa-sun' aria-hidden='true'></i> <p>" + conditions);
            }
            else if (CHECK TO SEE IF ITS NIGHT TIME) {
              ($setConditions).html("<i class='fa fa-moon' aria-hidden='true'></i> <p>" + conditions);
            }
            break;

          case expression:

            break;

          case expression:

            break;*/
        }

        //click the button to change the temperature from F to C and back again

        $("#convert").on('click', function() {
          if(temp == temp_f) {
            temp = temp_c;
            ($setTemp).html("<p>" + temp_c + "&deg; C</p>");

          }
          else if (temp == temp_c){
            temp = temp_f;
            ($setTemp).html("<p>" + temp_f + "&deg; F</p>");

          }



        });
      }
    });



});
