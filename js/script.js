$(document).ready(function (){

//declare variables
var $setTemp = $(".temperature");
var $setLocation = $(".location");
var $setConditions = $(".conditions");
var input = 0;
var $setBody = $("body");
var $setButton = $(".button");
//set a variable to edit the div later on
//var $output = $("#output");

var getCoords = document.getElementById('getCoords');
getCoords.addEventListener('click', getLocation, false);

//the function that will actually get your location
function getLocation() {
  //checking to see if browser supports geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    //not actually sure what this is doing ?
    //callback?
  } else {
    innerHTML = "Geolocation is not supported on your browser.";
  }
}

//display position
function showPosition(position) {
  //testing purposes, in case you break something in the future
  //console.log(position.coords.latitude);

  //start the API call!
  //it now automatically detects your location and retrieves the weather
  //omg

  $.ajax({
      type: 'GET',
      url: 'http://api.wunderground.com/api/f9ee0f522276d317/conditions/q/' + position.coords.latitude + "," + position.coords.longitude + '.json',
      success: function (data) {

        //a third temp variable to determine which one is being displayed
        var temp = data.current_observation.temp_f;

        var temp_f = data.current_observation.temp_f;
        var temp_c = data.current_observation.temp_c;
        var conditions = data.current_observation.weather;
        var location = data.current_observation.display_location.full;
        var $button = $("#convert");


        //display info
        ($setTemp).html("<p>" + temp_f + "&deg; F</p>");
        ($setLocation).html("<p>" + location + "</p>");
        ($setButton).html("<button id='convert' class='btn btn-default'>&deg;C</button>");
        //($setConditions).html("<p>" + conditions + "</p>");

        //try to hide 'get weather' button after the API call?
        $("#getCoords").css("display", "hidden");

        switch (conditions) {
           case 'Overcast':
             //($setConditions).html("<i class='fa fa-cloud' aria-hidden='true'></i> <br>" + conditions);
             ($setBody).css("background-color", "#dcdcdc");
             break;

             case 'Partly Cloudy':
               //($setConditions).html("<i class='fa fa-cloud' aria-hidden='true'></i> <br>" + conditions);
               ($container).css("background-color", "#7aceea");
               break;

           case 'Clear':
           ($container).css("background-color", "#7aceea");
           //($setConditions).html("<i class='fa fa-sun' aria-hidden='true'></i> <p>" + conditions);
           break;

           case 'Rain':
           ($container).css("background-color", "#7aceea");
           //($setConditions).html("<i class='fa fa-cloud' aria-hidden='true'></i> <p>" + conditions);
            break;
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

}
      });
