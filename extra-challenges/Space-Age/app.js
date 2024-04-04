(() => {
    // YOUR CODE HERE
    function spaceAge(seconde) {
        let secondeEarthYear = 365.25 * 24 * 60 * 60;
        let planets = {'Earth': 1, 'Mercury': 0.2408467, 'Venus': 0.61519726, 'Mars': 1.8808158, 'Jupiter': 11.862615,};
        let yourPlanet;
        while (true) {
            yourPlanet = prompt("Enter your planet ! (Earth, Mercury, Venus, Mars, Jupiter");
            if (yourPlanet in planets) {
                break;
            } else {
            alert("Erreur");
            }   
        }
        return seconde / (secondeEarthYear * planets[yourPlanet]);
    }

    let ageSeconds;
    while (true) {
        ageSeconds = prompt("Enter your age in seconds ! (31557600)");
        if(!isNaN(ageSeconds)) {
            ageSeconds = parseFloat(ageSeconds);
            break;
        } else {
        alert("Erreur");
        }   
    }


    let a = spaceAge(ageSeconds);
    console.log(a);
    document.body.textContent = `Result :${a}`;
    
})();

