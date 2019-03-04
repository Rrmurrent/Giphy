// Indicates the score is starting at zero
var score = 0;
// indicated the timer is set to start at 10
var time = 10;
// indicates number of points player has starts at zero
var points= 0;
// tells computer to start at [0] in object array.
var i = 0;
// timer variable
var timer


// Div where everything is displayed
var mainDiv= $('#mainDiv');

// making object
var question = [{
    quote: '"The flower that blooms in adversity is the most rare and beautiful of them all"',
    choices: ["Alladin","Beauty and the Beast","Cinderella","Mulan"],
    validAnswer: "Mulan",
    imgSrc: "assets/images/mulan.jpg"
    
},
{
    quote: '"Love is putting someone else’s needs before yours."',
    choices:["Toy Story", "Treasure Planet", "Tarzan", "Frozen"],
    validAnswer: "Frozen",
    imgSrc: "assets/images/frozen.jpg"
},
{
    quote:  '"I was hiding under your porch because I love you"',
    choices:["Finding Nemo","Snow White","UP", "Alladin"],
    validAnswer:"UP",
    imgSrc:"assets/images/up.jpg"

},

{
    quote:  '"If you can’t say something nice, don’t say nothin’ at all."',
    choices:["Bambi","Sleeping Beauty","Alice in Wonderland", "The Jungle Book"],
    validAnswer:"Bambi",
    imgSrc:"assets/images/bambi.png"
},

{
    quote:  '"Ohana means family, and family means no one gets left behind or forgotten."',
    choices:["Moana","Mary Poppins","Peter Pan", "Lilo & Stitch"],
    validAnswer: "Lilo & Stitch",
    imgSrc:"assets/images/lilo.png"
},

{
    quote:  '"The past can hurt. But the way I see it, you can either run from it, or learn from it."',
    choices:["Lady and The Tramp","Beauty and the Beast","The Lion King", "Cinderella"],
    validAnswer: "The Lion King",
    imgSrc: "assets/images/lionKing.jpg"
},

{
    quote:  '"Ladies do not start fights, but they can finish them."',
    choices:["Snow White","Alladin","The Aristocats", "Mulan"],
    validAnswer: "The Aristocats",
    imgSrc:"assets/images/aristoCats.jpg"
},

{
    quote:  '"You’re braver than you believe, and stronger than you seem, and smarter than you think."',
    choices:["Pinocchio","Toy Story","Finding Nemo", "Winnie the Pooh"],
    validAnswer: "Winnie the Pooh",
    imgSrc:"assets/images/winnie.jpg"
},

{
    quote:  '"Our fate lives within us. You only have to be brave enough to see it."',
    choices:["Sleeping Beauty","Beauty and the Beast","Brave", "UP"],
    validAnswer: "Brave",
    imgSrc: "assets/images/brave.jpg"
    
    
    
},

{
    quote:  '"She warned him not to be deceived by appearances, for beauty is found within."',
    choices:["Mary Poppins","Beauty and the Beast","Finding Nemo", "Anastasia"],
    validAnswer: "Beauty and the Beast",
    imgSrc: "assets/images/beauty.jpeg"
    
},


];

//Making variable for question.length to use in for loops
var qlength =  question.length;
// displays the questions and the button answers in the main div
var display = function () {
//    empties the main div, to be filled with button and question content.
    mainDiv.empty(); 
    
// stats contains the timer and the score
    var stats = $('<div><h3>timer:<div id = "timerDiv">'+ time +'</div>score:<div id = "scoreDiv">'+ score +'</div></h3></div>')
// variable for questions
    var q = question[i]
// Created div to put the questions and answer options in
    var qDiv = $('<div></div>')
// Created location for the quotes and answers to go
    var qQuote = $('<h2>' + q.quote + '</h2>')
    var a1 = $('<button class = "ansBtn btn btn-lg btn-danger mx-1" value = "' + q.choices[0] + '">'+ q.choices[0] +'</button>')
    var a2 = $('<button class = "ansBtn btn btn-lg btn-danger mx-1" value = "' + q.choices[1] + '">'+ q.choices[1] +'</button>')
    var a3 = $('<button class = "ansBtn btn btn-lg btn-danger mx-1" value = "' + q.choices[2] + '">'+ q.choices[2] +'</button>')
    var a4 = $('<button class = "ansBtn btn btn-lg btn-danger mx-1" value = "' + q.choices[3] + '">'+ q.choices[3] +'</button>')

    var imagePic = $('<img src="'+ q.imgSrc + '" alt="images">');
    
   

// appending time and scoreboard to q.div
    $(stats).appendTo(qDiv);
    // appending quotes to qdiv
    $(qQuote).appendTo(qDiv);
    // appending answer option 1-4
    $(imagePic).appendTo(qDiv);
    $(a1).appendTo(qDiv);
    $(a2).appendTo(qDiv);
    $(a3).appendTo(qDiv);
    $(a4).appendTo(qDiv);
    
    // appending qDiv containing all of the above to the mainDiv
    $(qDiv).appendTo(mainDiv);    
// checking if quotes work
    console.log(q.quote);

};

display();
// creating the buttons displaying all the answers, and declared local variables within that function. 
// This is what matches up the right answer with the appropriate question.
$(document).on('click', '.ansBtn', function(event) {
    event.preventDefault();
    var userAns = this.value;
    var actualAns = question[i].validAnswer;
   
    
    console.log (userAns);
    console.log(actualAns);
    
// timer variable created
        clearInterval(timer);
        timer = setInterval(() =>{
            // makes timer go backwards
            time--;
            $('#timerDiv').empty();
            $('#timerDiv').append(time);
            
        
            console.log(time);
            if (time===0) {
                alert('times up, next question.')
                i++
                 time = 10
                $('#timerDiv').empty();
                $('#timeDiv').append(time);
               
                display()

            }
        },1000)
            

// conditional statement 

// Right answer alert
    if(userAns === actualAns){
        alert('Good Job, keep it up!')
        // i++ tells the game to keep spitting out questions.
        i++
        // score ++ increases players score by 1
        score++
        time = 10
        
        $("#scoreDiv").empty();
        $("#scoreDiv").append(score);
        if (i === qlength){
            endAlert();
        }
        else {
            display()
        
        }
       
    }
    // wrong answer alert
    else{

        alert('Boo!! You suck.')
        i++
        time = 10

        // empties the last scoreboard and reappends with the most current # of correct answers
        $("#scoreDiv").empty();
        $("#scoreDiv").append(score);
        
    // if it has gone through the entire length (qlength) of the question array que endAlert function
        if (i === qlength){
         
         endAlert();
        
        //  if [i] has not reached the end, keep asking the questions.
        }
        // if there are still questions in the array, keep pushing out questions.
        else {
            display();
        
        }
        
    }
    
    
});

// End alert
var endAlert =() =>{
    i++
    // Yay. You're done!!
    alert('!!You finished!!');
    alert("Your total score is"  + ' ' + score + "out of a possible 10");
    // "winning alert"
        if (score === 10) {
            alert("You really know your Disney movies!!");
            $("#scoreDiv").empty();
            $('#timerDiv').empty();
        } 
        // If score does not equal 10 alerts..
        else {
            alert("Better grab some popcorn and study up!");
            $("#scoreDiv").empty();
            $('#timerDiv').empty();
        }            
        //Reset Button
var  reload = $('<button>Play Again</button>');
reload.attr('id', 'reloadButton');
reload.attr('class','btn btn-danger');
reload.appendTo('#mainDiv');
$(reload).on('click', reload, function(){
    location.reload(true);
    
})

}


    //Instructions--Trouble getting it to work. Not sure why. 
var instruct = function(){
    // $('#mainDiv').empty();
    console.log('instructions for the game');
    var instructions = document.createElement('div');
        $(instructions).attr('id','infoText');
        $(instructions).append("Show off how well you know your disney quotes! Each questions has one correct answer. Chose wisely and beat the clock.");
        $(instructions).appendTo('#mainDiv');
        console.log("Here are the instructions");
        
// start button--Also having trouble getting to work

    var startButton = document.createElement('button');
        $(startButton).html('Begin the Game!');
        $(startButton).attr('class', 'btn btn-primary');
        $(startButton).attr('id', 'startButton')
        $(startButton).appendTo('#mainDiv');
    $(document).on('click', '#startButton', letsGo);
    
};

console.log ("hello");
// Images
// var movieImage =  function(){
// console.log('This is where the images will go');
//     var imageDiv =  document.createElement('div');

// }

