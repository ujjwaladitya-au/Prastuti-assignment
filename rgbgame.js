var squares = document.querySelectorAll(".square")
var colorSelected = document.getElementById("colorSelected")
var tops = document.getElementById("top")
var message = document.querySelector("#message")
var easy = document.querySelector("#easy")
var colors = colorArray(6)
colorPicker()
colorSquares()
colorSelected.textContent = color;

easy.addEventListener("click", function(){
	colors = colorArray(3)
	colorPicker()
	colorSelected.textContent=color;
	colorSquares()
	for(var i=3;i<6;i++)
	{
		squares[i].style.display = "none";
	}
})

for(var i=0 ; i<colors.length ; i++)
{
	squares[i].addEventListener("click", function(){
		var clickedColor = (this.style.backgroundColor)
		if(clickedColor === color)
		{
			tops.style.backgroundColor = color;
			for(var i=0 ; i<squares.length ; i++)
			{
				squares[i].style.backgroundColor = color;
			}
			message.textContent = "CORRECT!"
			reload.textContent = "PLAY AGAIN"
		}
		else
		{
			this.style.backgroundColor = "#232323"
			message.textContent = "Try Again!"
		}
	})
}

function colorPicker()	{
	var a = Math.floor((Math.random()*colors.length));
	color = colors[a]
}

function colorArray(num)	{
	var arr = []
	for(var i=0; i<num; i++)
	{
		var k = randomColor()
		arr.push(k)
	}
	return arr
}

function randomColor()	{
	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)
	return ("rgb(" + r + ", " + g + ", " + b + ")");	
}

function colorSquares()	{
	for(var i=0;i<6;i++)
		squares[i].style.backgroundColor=colors[i]
}