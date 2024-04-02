(() => {
    // YOUR CODE HERE
    function askTvSerie() {
        let serie = {
            name: prompt("enter name of serie"),
            productionYear: prompt("enter year"),
            NamesOfTheCastMembers: prompt("Enter the cast member names, separated by commas")
            .split(',')  // Sépare la chaîne en une liste en utilisant la virgule comme délimiteur
            .map(name => name.trim()) // Supprime les espaces de chaque nom
        };
        return serie = JSON.stringify(serie);
    }

    function randomizeCast(tvSerie) {
        let parsedSerie = JSON.parse(tvSerie);
        let cast = parsedSerie.NamesOfTheCastMembers;
        for (let i = cast.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cast[i], cast[j]] = [cast[j], cast[i]];
        }
        return cast = JSON.stringify(cast);
    }

    let a = askTvSerie();
    let newSerie = randomizeCast(a);
    console.log(`new cast ${newSerie}`);
    //console.log(randomizeCast(a));
    //alert(a);
})();

