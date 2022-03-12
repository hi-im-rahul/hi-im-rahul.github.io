
var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
  	reset();
 }

 function setupModeButtons(){
 	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?numSquares=3:numSquares=6;
		reset();
	    })
   	}
 }

 function setupSquares(){
 	for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];	

	squares[i].addEventListener("click", function(){

		var clickedColor=this.style.background;
		if(clickedColor===pickedColor){
			message.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";
		}
		else{
			message.textContent="Try again!";
			this.style.background="#232323";
		}

	});
  }
 }

 function reset(){
 	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];	
		}else{
			squares[i].style.display="none";
		}
		
	}
	message.textContent="";
	resetButton.textContent="New colors";
	h1.style.background= "steelblue";

 }


resetButton.addEventListener("click",function(){
	reset();
})

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}	

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number){
	var arr=[];
	for(var i=0;i<number;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
