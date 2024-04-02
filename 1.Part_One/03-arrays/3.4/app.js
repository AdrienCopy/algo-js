(() => {
    // YOUR CODE HERE
    let a = [1, 2, 3, 4, 5, 10000000];
    let b = Math.max(...a);
    let c = Math.min(...a);
    console.log("the BIG : " + b + " and little : " + c);
})();
