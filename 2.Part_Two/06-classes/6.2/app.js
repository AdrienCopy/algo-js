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

    let a = new Rectangle(1, 1, 2, 4);
    let b = new Rectangle(10, 20, 2, 4);
    console.log("a et b en collision " + a.collides(b));
    console.log(a); 
    console.log(b);

    let c = new Rectangle(1, 1, 2, 4);
    let d = new Rectangle(2, 2, 2, 4);
    console.log("c et d en collision " + c.collides(d));
    console.log(c); 
    console.log(d);

})();

