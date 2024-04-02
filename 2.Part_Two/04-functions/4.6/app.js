(() => {
    // YOUR CODE HERE
    function factorial(a) {
        if (a === 0) {
            return 1;
        } else { 
            return a * factorial(a - 1);
        }
    }

    let result = factorial(5);
    alert(result);
    console.log(factorial(0) + " and " + factorial(10));
})();

