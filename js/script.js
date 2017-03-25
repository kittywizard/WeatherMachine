$(document).ready(function (){

//declare variables
var $setTemp = $(".temp");
var $setLocation = $(".location");
var $setConditions = $(".conditions");
var input = 0;

//listen for a click on the submit button to get data
var getZipcode = document.getElementById('subButton');
subButton.addEventListener('click', getZip, false);

//runs this function when the button is clicked
function getZip() {
  //save user input as variable
  input = document.getElementById("zipField").value;

//zipcode not the right length, bad user
  if (input.length !== 5) {
    //alert("Please enter a 5 digit zipcode.");
    console.log("Enter a 5 digit zipcode error");
  }
  console.log(input);

  //start the API call!
  $.ajax({
      type: 'GET',
      url: 'http://api.wunderground.com/api/f9ee0f522276d317/conditions/q/' + input + '.json',
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
        ($setConditions).html("<p>" + conditions + "</p>");

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
