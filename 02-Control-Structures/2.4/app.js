(() => {
    // YOUR CODE HERE
    let i = 1;
    function count () {
        while (i <= 100) {
            if (i  % 2 === 0){
                console.log(i / 2);
            } else {
            console.log(i * 3);
            }
            i += 1;
        }
    }

    count();

})();

