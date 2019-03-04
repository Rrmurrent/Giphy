alert("hi");

// var mainDiv = document.getElementById('mainDiv');

// var subjectarray= ["dog","cat","bird","penguin", "giraffe"]
// Going to need a four loop
// for (let index = 0; index < array.length; index++) {
    // const element = array[index];
// };

// var display = function () {
//     mainDiv.empty(); 
// };

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=8rWTYSGMgDTrwqndYxIEjk7QT2CSpo0D";

$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function(response) {
  console.log(response.data[0]);
  $("#gallery").html("<img src='" + response.data[11].images.fixed_height.url + "'>");
  



var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=8rWTYSGMgDTrwqndYxIEjk7QT2CSpo0D&tag=dogs";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    var imageUrl = response.data.image_original_url;

    var dogImage = $("<img>");

    dogImage.attr("src",imageUrl);
    dogImage.attr("alt", "dog image");

         $("#gallery").prepend(dogImage);
    });
});
