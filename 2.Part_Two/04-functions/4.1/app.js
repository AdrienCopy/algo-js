(() => {
    // YOUR CODE HERE
    function calcSurface (a, b) {
        return a * b;
    }

    function getNumber () {
        let number
        while (true) {
            number = prompt("Enter the size in centimeters");
            if(!isNaN(number)) {
                number = parseInt(number);
                break;
            } else {
            alert("Erreur");
            }
        } 
        return number;  
    }

    let length = getNumber();
    let width = getNumber();
    console.log(length, width);

    let result = calcSurface(length, width);
    alert(`the size is ${result} square centimeter`);
    console.log(result);

})();