"use strict";

class Triangle {
    x;
    y;
    z;

    constructor (x, y, z) {
        if (this.#isValidNumber(x) === true && this.#isValidNumber(y) === true && this.#isValidNumber(z) === true) {
            this.x = x;
            this.y = y;
            this.z = z;  
        }  else { 
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
    }

    #isValidNumber(num) {
        if (!(typeof num === "number")) {
            return false;
        } else if (!(num > 0)) { 
            return false;
        } else if (Number.isNaN(num)) {
            return false;
        } else {
            return true;
        }
    }

    updateSize(xx, yy, zz) {
        if (this.#isValidNumber(xx) === true && this.#isValidNumber(yy) === true && this.#isValidNumber(zz) === true) { 
            this.x += xx;
            this.y += yy;
            this.z += zz; 
        }
    }

    getPerimeter() {
        return this.x + this.y + this.z;
    }

    getLongestEdge() {
        let longestEdge = this.x;
        if (longestEdge < this.y) {
            longestEdge = this.y;
        }

        if (longestEdge < this.z) {
            longestEdge = this.z;
        }
        
        return longestEdge;
    }
    
    getEdgeNameAndLength() {
        const triangleMap = new Map();
        triangleMap.set("x", this.x);
        triangleMap.set("y", this.y);
        triangleMap.set("z", this.z);

        return triangleMap;
    }

    isEquilateral() {
        return this.x === this.y && this.x === this.z;
    }

    isIsosceles() {
        if (this.isEquilateral() === true) {
            return false;
        } else if (this.x === this.y && this.x !== this.z) {
            return true;
        } else if (this.x === this.z && this.x !== this.y) {
            return true;
        } else if ( this.y === this.z && this.y !== this.x) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Triangle;
