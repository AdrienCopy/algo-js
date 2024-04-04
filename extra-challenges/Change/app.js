(() => {
    // YOUR CODE HERE
    function computeChange(price, moneyHanded){
        let difference = moneyHanded - price;
        let changes = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1];
        let moneyReturned = [];

        for (let change of changes) {
            while (difference >= change) {
                moneyReturned.push(change);
                difference -= change;
            }
        }
        return moneyReturned;
    }

    function sum(tab) {
        let total = tab.reduce((acc, curr) => acc + curr, 0);
        return total.toFixed(2);
        
    }
        

    let price;
    while (true) {
        price = prompt("Enter price !");
        if(!isNaN(price)) {
            price = parseFloat(price);
            break;
        } else {
        alert("Erreur");
    }
    }

    let moneyHanded;
    while (true) {
        moneyHanded = prompt("How much do you give ?");
        if(!isNaN(moneyHanded)) {
            moneyHanded = parseFloat(moneyHanded);
            if (moneyHanded >= price) {
                break;
            } else {
                alert("The amount given is insufficient.");
            }
        } else {
        alert("Erreur");
    }
    }

    let transaction = computeChange(price, moneyHanded);
    let sumTransaction = sum(transaction);
    alert(`The change given is ${sumTransaction} (detail: ${transaction})`);
    console.log(transaction);
    console.log(sumTransaction);

})();



