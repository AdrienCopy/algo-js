(() => {
    // YOUR CODE HERE
    /* la formule mathématique pour trouver la distance entre deux point dans a espace 2d,
    - soustraction des deux abscisses(x), au carré.
    - soustraction des deux ordonnée(y), au carré.
    - additonner les deux resulat, puis racine carré du resultat.
    */
    function calcDistance(point1, point2) {
        let X = point2[0] - point1[0]; // soustraction des deux abscisse.
        let Y = point2[1] - point1[1]; // soustraction des deux ordonnée.
        return Math.sqrt(X * X + Y * Y); // carré de x et de y puis addition des deux et racine carré avec sqrt.
    }

    let pointA = [1, 1];
    let pointB = [2, 2];
    let pointC = [-2, 2];
    let pointD = [2, -2];
    let distanceAB = calcDistance(pointA, pointB);
    let distanceCD = calcDistance(pointC, pointD);
    console.log(distanceAB);
    console.log(distanceCD);

})();

