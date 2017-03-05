$(document).ready(function (){

console.log("TEST");

$.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=5c60648bdc118d0dc3a70c4dd3f7856e',
    success: function (data) {
        //STUFF GOES HERE
        console.log(data);
        }
    });
});
    // need a way to replace old quote with new with each click
