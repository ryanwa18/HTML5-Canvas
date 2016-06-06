function createParticle()
{
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	var posY = 0;
	var randX = Math.floor(Math.random() * myCanvas.width);
	var randIncrement = Math.floor(Math.random() * 4) + 1;
	var randSize = Math.floor(Math.random() * 7) + 2;

	setInterval(function() 
	{
		ctx.fillStyle = 'lightblue';
		ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(randX, posY, randSize, 0, Math.PI * 2);
		ctx.fill();
		posY += randIncrement;

	}, 30);
}

function makeItSnow()
{
	setInterval(function() {
		createParticle();
	}, 1);
}