(() => {
    // YOUR CODE HERE
    let i = 1;
    function evenNumber () {
        while (i <= 100) {
            if (i % 2 === 0)
            console.log(i);
            i += 1;
        }
    }

    evenNumber();
})();