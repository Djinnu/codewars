class Cube {
    constructor(side = 0) { this.side = side; }
    getSide() { return Math.abs(this.side); }
    setSide(side) { this.side = side; }
};