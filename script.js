let choices = document.getElementsByClassName("options");
const tools = ["rock","paper","scissors"];
var playerChoice;
const modal =document.querySelector(".modal");

//for modal
modal.addEventListener("click",()=>{
	modal.style.display="none";
})

function getComputerChoice(){
	return tools[Math.floor(Math.random()*3)];
}

function highlighComputer(computerChoice,color) {

	document.getElementById(computerChoice).style.border = `3px solid ${color}`;
}

function resultOutput(player){
	if(player=="player"){
		document.querySelector(".main").style.background="radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(132,252,70,1) 100%)";
	}else{
		document.querySelector(".main").style.background="radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(246,0,0,1) 100%)";

	}
}

function playRound(player,computer){
	console.log(player,computer)
	highlighComputer(computer,"#FF3131")
	let result = document.querySelector(".results")	
	if(player==computer){
		highlighComputer(computer,"#39FF14");
		resultOutput("player");
		result.textContent = "It's a tie!!";
	}else if(player=="rock"){
		if(computer=="paper"){
			resultOutput("computer");
			result.textContent = "Computer Wins!! Paper Defeats Rock";
		}else{
			resultOutput("player");
			result.textContent = "Player Wins!! Rock Defeats Scissors";
		}
	}else if(player=="paper"){
		if(computer=="scissors"){
			resultOutput("computer");
			result.textContent = "Computer Wins!! Scissors Defeats Paper";
		}else{
			resultOutput("player");
			result.textContent = "Player Wins!! Paper Defeats Rock";
		}
	}else if(player=="scissors"){
		if(computer=="rock"){
			resultOutput("computer");
			result.textContent = "Computer Wins!! Rock Defeats Scissors";
		}else{
			resultOutput("player");
			result.textContent = "Player Wins!! Scissors Defeats Paper";
		}
	}
}
Array.from(choices).forEach((element)=>{
	element.addEventListener("click",(e)=>{		
		e.target.style.border="3px solid #39FF14";
		playRound(e.target.id,getComputerChoice())
	})
});