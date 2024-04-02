(() => {
    // YOUR CODE HERE
    function number (max, min, current) {
        if ((min > max)) {
            alert("do you understand ?");
        } else if((current > min) && (current < max)) {
            alert(`${current} is between ${min} and ${max}`);
        } else {
            alert(`${current} is not between ${min} and ${max}`);
    }
    }

    let min;
    while (true) {
        min = prompt("Enter a small number");
        if(!isNaN(min)) {
            min = parseInt(min);
            break;
        } else {
        alert("Erreur");
    }
    }

    let max;
    while (true) {
        max = prompt("Enter a big number");
        if(!isNaN(max)) {
            max = parseInt(max);
            break;
        } else {
        alert("Erreur");
    }
    }

    let current;
    while (true) {
        current = prompt("Enter a current nombre");
        if(!isNaN(current)) {
            current = parseInt(current);
            break;
        } else {
        alert("Erreur");
    }
    }

    number(max, min, current);
})();

