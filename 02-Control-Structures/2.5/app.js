(() => {
    // YOUR CODE HERE
    let favoriteNumber;
    while (true) {
        favoriteNumber = prompt("what your favorite number ?");
        if(favoriteNumber === "42") {
            alert("Nice !");
            break;
        } else {
        alert("Are you sure?");
    }
    }
})();