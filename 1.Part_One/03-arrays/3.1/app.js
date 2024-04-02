(() => {
    // YOUR CODE HERE
    function sum (tab) {
        let total = tab.reduce((acc, curr) => acc + curr, 0);
        return total;
        
    }
    let a = [1, 2, 3, 4, 5];
    let b = [100, 101, 102];
    
    let c = sum(a);
    let d = sum(b);
    console.log(c);
    console.log(d);
})();
