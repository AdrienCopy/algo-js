(() => {
    // YOUR CODE HERE
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let number;
    while (true) {
        number = prompt("Enter a number between 1 and 7");
        if(!isNaN(number)) {
            number = day[number -= 1];
            alert(number);
            break;
        } else {
        alert("Erreur");
    }
    }
    

})();

