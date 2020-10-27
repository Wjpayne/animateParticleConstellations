function changeInputs () {
    // if (particleValue > 0 || particleValue <= 100) {
    //     maxParticles = particleValue;
    // }

    // if (thresholdValue > 0 || thresholdValue <= 150) {
    //     threshold = thresholdValue
    // }
    // if (colorValue === 'Red' || colorValue === 'Blue' || colorValue === 'Yellow' || colorValue === 'Blinking') {
    //     randomColor = colorValue;

    // }
    var x = document.getElementsByClassName("inputForm").style.display;

    if (x.style === "block") {
        x.style = "none"
    } else {
        x.style = "block"
    }
}