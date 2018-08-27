var game={};

var lives=2;
var colors=[];
var winningColor ;
var noOfSquares = 6;
var squares=document.querySelectorAll(".square");
var newGameButton = document.querySelector("button[name = \"newGame\"]");
// var modeButtons = document.querySelectorAll(".modeButtons");


function init(){
	reset();
	winnerDecider();
	setUpButtonModes();
}



   function setUpButtonModes(){
	$(".modeButton").on("click",function(){
		$(".hardsquare").addClass("square").removeClass("hardsquare");
		$(".modeButton").removeClass("selected");
		$(this).addClass("selected");
		if($(this).text() === "EASY")noOfSquares = 3 

		else if($(this).text() === "MEDIUM")noOfSquares = 6;

	    else{ noOfSquares = 9; 

              $(".square").addClass("hardsquare").removeClass("square");

	         }


        reset();

	});
}


function reset(){
   $("#gameMessage").text("");
   $("#header").css("background","#163969");
   colors = setColors(noOfSquares);
   winningColor =  colors[selectWinningIndex()]; 
   $("#message").text(winningColor);

   for( var i =0 ;i<squares.length;i++)
   {
   	if(colors[i])
   	{
   		squares[i].style.background=colors[i]; 	
   		squares[i].style.display="block";
   }
   else
   {
   		squares[i].style.display="none";

   }

   	}
 	
   
}





//this for selection of the squares

function winnerDecider(){
for ( var i=0;i<squares.length;i++){
	   squares[i].addEventListener("click",function(){

		if(this.style.background === winningColor)
		{
			$("#gameMessage").text("YOU WIN");
			$(".square").css("background",winningColor);
			$(".hardsquare").css("background",winningColor);
			$("#header").css("background",winningColor);

		}
		else
		{
			this.style.background="#000000";
			$("#gameMessage").text("TRY AGAIN");
			
	    }

		});
}
}

//generating random colors for the squares
function randColors()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

//putting the colors in the colors array
function setColors(noOfSquares){
	var newArr = [];
	for(var i = 0 ;i<noOfSquares;i++)
	{
		newArr.push(randColors());
	}

	return newArr;

}

//selecting winning index
function selectWinningIndex()
{
	var index = Math.floor(Math.random()*noOfSquares);
	return index;
}

// reset();

newGameButton.addEventListener("click",reset);
init();