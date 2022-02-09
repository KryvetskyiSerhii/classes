class Square {
    constructor(size) {
        this.size = size
    }
    area() {
        return this.size * this.size
    }

    perimeter () {
        return this.size * 4
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * this.radius * this.radius
    }

    perimeter () {
        return Math.PI * 2 * this.radius
    }
} 

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    area() {
        let s = (this.side1 + this.side2 + this.side3)/2
        return Math.sqrt(s*(s - this.side1)*(s - this.side2)*(s - this.side3))
    }

    perimeter () {
        return this.side1 + this.side2 + this.side3
    }
}

class Rectangle {
    constructor(side1, side2) {
        this.side1 = side1
        this.side2 = side2
    }

    area() {
        return this.side1 * this.side2
    }

    perimeter () {
        return (this.side1 + this.side2)*2
    }
}

