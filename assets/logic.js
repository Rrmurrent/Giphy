
$('button').on('click',function () {
    var x = $(this).data("search");
    console.log(x);

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +x+ "&api_key=8rWTYSGMgDTrwqndYxIEjk7QT2CSpo0D&limit=10"
  console.log(queryURL);

  $.ajax({url:queryURL,method:'Get'})
  .done(function(response){
    console.log(response);
    for(var i=0; i<response.data.length;i++) {
    $('#gifArea').prepend("<img src='"+response.data[i].images.downsized.url + "'>");
    }
  })
})