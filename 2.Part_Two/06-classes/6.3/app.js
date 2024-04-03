(() => {
    // YOUR CODE HERE
    class Rectangle {
        constructor(topLeftXPos, topLeftYPos, width, length) {
            this.topLeftXPos = topLeftXPos;
            this.topLeftYPos = topLeftYPos;
            this.width = width;
            this.length = length;
        } 
        collides(otherRectangle) {
            if (this.topLeftXPos + this.width < otherRectangle.topLeftXPos || otherRectangle.topLeftXPos + otherRectangle.width < this.topLeftXPos) {
                return false;
            }
            if (this.topLeftYPos + this.length < otherRectangle.topLeftYPos || otherRectangle.topLeftYPos + otherRectangle.length < this.topLeftYPos) {
                return false;
            } else 
            return true;
        }
    }

    function generate(number) {
        let rectangles = [];
        for (let i = 0; i < number; i++) {
            topLeftXPos = Math.floor(Math.random() * 150);
            topLeftYPos = Math.floor(Math.random() * 150);
            width = Math.floor(Math.random() * 100) + 1;
            length = Math.floor(Math.random() * 100) + 1;
            let forme = new Rectangle(topLeftXPos, topLeftYPos, width, length);
            rectangles.push(forme);
        }
        return rectangles;
    }
    
    function compare(tab) {
        let collision = [];
        for (let i = 0; i < tab.length; i++) {
            for (let j = i + 1; j < tab.length; j++) {
                if (tab[i].collides(tab[j])) {
                    collision.push([tab[i], tab[j]]);
                }
            }
        }
        return collision;
    }

let generateRectangle = generate(1000);
let rectanglescollision = compare(generateRectangle);

console.log(rectanglescollision);
console.log(generateRectangle);

alert("Nombre de collison : " + rectanglescollision.length + " !! ");



})();

