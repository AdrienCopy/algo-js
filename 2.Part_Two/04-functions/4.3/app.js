(() => {
    // YOUR CODE HERE
    function rand10() {
        let nombre = Math.floor(Math.random() * 10) + 1;
        return nombre
    }

    function multiRand(n) {
        let tab = [];
        for (let i = 1; i <= n; i++){
            tab.push(rand10());
        }
        return tab;
    }

    let number;
        while (true) {
            number = prompt("Enter a number, please!");
            if(!isNaN(number)) {
                number = parseInt(number);
                break;
            } else {
                alert("Erreur");
            }
        } 

    let result = multiRand(number);
    console.log(result);

})();

