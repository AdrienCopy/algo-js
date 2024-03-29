(() => {
    // YOUR CODE HERE
    function cal (n) {
        for (let i = 1; i <= n; i ++) {
            do {
                number = prompt("Enter a number");
            } while (isNaN(number));
            result = result + parseInt(number);
        }
        console.log(result);
        }   
        
        
    
    let number;
    let result = 0;
    let n;
    while (true) {
        n = prompt("Enter a number !");
        if(!isNaN(n)) {
            n = parseInt(n);
            break;
        } else {
        alert("Erreur");
    }
    }

    cal(n);
})();
