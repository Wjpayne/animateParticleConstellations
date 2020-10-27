

// global variables

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let particles = [];
let particleSize = 5;

var maxParticles = 100;
var threshold = 300;

// create 2 partciles


function line(particle, particle2) {
    ctx.beginPath();
    ctx.moveTo(particle.x, particle.y);
    ctx.lineTo(particle2.x, particle2.y);
    ctx.stroke();
    
   
    
    

}

// animate the partciles we just created

function animate() {

    var maxParticles = document.getElementById('particleInput').value
    var threshold = document.getElementById('thresholdInput').value

        //start with an empty canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        blinkingColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        randomColor = document.getElementById("selectColor").value
        if (randomColor === "blinking") {
            ctx.fillStyle = blinkingColor
        } else {
        ctx.fillStyle = randomColor
        }
        //iterate over a set number of particles and isolate each one using a for loop

       var maxParticles = document.getElementById('particleInput').value
       var threshold = document.getElementById('thresholdInput').value

    
       for (let i = 0; i < maxParticles; i++) {
            let particle = particles[i];
            // create each particle on the canvas
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.arc(particle.x, particle.y , 5, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
            
        
            // make sure you are creating new particles and dont check them against themselves, check them against each other using a for loop comparing the two
            for (let j = 0; j < maxParticles; j++) {
                // if they are not the same particle 
                if (i != j) {
                    let particle2 = particles[j];
                    // assign each particle a numerical value to be evaluated based on distance
                    let distanceX = Math.abs(particle.x - particle2.x);
                    let distanceY = Math.abs(particle.y - particle2.y);
                    // create a threshold and if each particle distance is less then threshold create a line between them
                    if (distanceX < threshold && distanceY < threshold) {
                        ctx.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
                        // make the line color flucuate randomnly based on distance
                        let color = 200 - Math.floor(distanceX - distanceY);
                        ctx.strokeStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
                        // create the line each time the canvas is reset wen threshold is met
                        line(particle, particle2);
                    }
                }
            }
            // make particles move across both dimensions or "vectors"
            particle.x = particle.x + particle.vx;
            particle.y = particle.y + particle.vy;
            //make the objects bounce off the edges and continue
            if (particle.x > canvas.width - particleSize || particle.x < particleSize)
                particle.vx = -particle.vx;
            if (particle.y > canvas.height - particleSize || particle.y < particleSize)
                particle.vy = -particle.vy;
        }
        // iniate the animation 
        window.requestAnimationFrame(animate);


 }


 // initialize with random coordiantes and speeds

for (let i = 0; i < maxParticles; i++) {
  let particle = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random(),
    vy: Math.random(),
  }
  particles.push(particle);
}

// animate!


function hideForm() {

    document.getElementById("inputForm").style.display = "none"
    document.getElementById("myCanvas").style.visibility = "visible"
    return false;

    
}

animate();















