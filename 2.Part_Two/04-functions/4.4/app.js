(() => {
    // YOUR CODE HERE
    function pickLearner(inputAr, n) {
        let tab = [];
        for (let i = 1; i <= n; i++) {
            let index = Math.floor(Math.random() * inputAr.length);
            tab.push(inputAr[index]);
        }
        return tab;
    }

    let inputAr = [
        "Iliess Abdelmadjid",
        "Maryam Akraiche",
        "Nathanaël Amand",
        "Zahra Anaflous",
        "Dorian Blariau",
        "Adrien Boels",
        "Jean-Emmanuel Carenjot",
        "Adrien Caufriez",
        "Caroline Deconinck",
        "Tom Delinte",
        "Stacy Druart",
        "Dylan Feys",
        "Justine Frigo",
        "Mohamed Kamal",
        "Lyne Kapongo Tshilumbwa",
        "Dzheylyan Kyamilova",
        "Ludovic Lacroix",
        "Justine Lambert",
        "Denis Lettany",
        "Jordan Masy",
        "Nataliia Melnykova",
        "Angel Nittelet",
        "Isabelle Noël",
        "Youris Rachid",
        "Giovanni Tummino",
        "Arnaud Van Acker",
        "Julie Wustefeld"
    ];

    let n = 5;
    //let a = Math.floor(Math.random() * inputAr.length);
    //let b = inputAr[a];
    let a = pickLearner(inputAr, n);
    console.log(a);

})();

