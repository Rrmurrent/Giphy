var mainDiv = document.getElementById('mainDiv');

var topicArray = [
  'duck',
  'cat',
  'dog',
  'pig',
  'penguin',
  'llama',
  'turkey',
  'moose',
  'ostrich',
  'parrot',
];

var apiKey = '8rWTYSGMgDTrwqndYxIEjk7QT2CSpo0D&limit=10'

for (var i=0;  i < topicArray.length; i++) {
  var button = document.createElement('button');
  $(button).attr('id', topicArray[i]);
  $(button).attr('class', 'buttons btn btn-large');
  $(button).html(topicArray[i]);
  $(button).appendTo(buttonGallery);
};

var searchBtn = $('#searchBtn')
    $(searchBtn).on('click', function(event){
        event.preventDefault();
        $('#buttonGallery').empty();
        var searchInput = $('#searchBox').val().trim();
            topicArray.push(searchInput);
            console.log(topicArray)
            function renderButtons(){
                for (var i = 0; i < topicArray.length; i++) {
                    var button = document.createElement('button');
                    $(button).attr('id', topicArray[i]);
                    $(button).attr('class', 'buttons btn btn-large');
                    $(button).html(topicArray[i]);
                    $(button).appendTo(buttonGallery);
                };
            };
            renderButtons();
    });

    $(document).on('click', 'img', function(){
      console.log('gif clicked')
      var source = $(this).attr('src');
      var static = $(this).attr('static');
      var moving = $(this).attr('moving');
      var status = $(this).attr('status');
      if( status === 'static' ){
          $(this).attr('src', moving)
          $(this).attr('status', 'moving')
      }
      else if(status === 'moving'){
          $(this).attr('src', static);
          $(this).attr('status', 'static')
      }
      else{ alert('it no work')}
  
  })
  $(document).on('click', 'button', function(){
      console.log('This Button Works!')
      
      var gifName = $(this).attr('id');
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + '&api_key=' + apiKey + '&limit=10';
      
      $.ajax({
          url: queryURL,
          method: 'get'
      }).then(function(response){
          var results = response.data;
          for(var i = 0;  i < results.length; i++){
              var bigDiv = document.createElement('div');
                  $(bigDiv).attr('class', 'gifDiv card');
              var imgSrc = results[i].images.fixed_height.url;
              var imgStat = results[i].images.fixed_height_still.url;
              var gifImg = document.createElement('img');
                  $(gifImg).attr('src', imgStat);
                  $(gifImg).attr('static', imgStat);
                  $(gifImg).attr('moving', imgSrc);
                  $(gifImg).attr('status', 'static');
                  $(gifImg).attr('id', 'gif');
                  $(gifImg).attr('class', 'card-img-top');
              var rating = document.createElement('div');
                  $(rating).html('Rated: ' + results[i].rating);
                  $(rating).attr('class', 'card-text')
                  $(gifImg).appendTo(bigDiv);
                  $(rating).appendTo(bigDiv);
                  $(bigDiv).prependTo(mainDiv);
          }
      })
  });
