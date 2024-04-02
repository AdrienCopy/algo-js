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

    
    let a = askTvSerie();
    console.log(a);
    alert(a);
})();

