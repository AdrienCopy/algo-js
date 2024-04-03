(() => {
    // YOUR CODE HERE
    class Circle {
        constructor(xPos, yPos, raduis) {
            this.xPos = xPos;
            this.yPos = yPos;
            this.raduis = raduis;
        } 
        move(xOffset, yOffset) {
            this.xPos = xOffset;
            this.yPos = yOffset;
            return this;

        }
        get surface() {
            return Math.PI * this.raduis * this.raduis;
        }
    }

    let a = new Circle(1, 1, 8);
    console.log(a);
    a = a.move(20, 5);
    let b = a.surface;  
    console.log(a);
    console.log(`la surface est de ${b}`);
    console.log(a.surface);
})();

