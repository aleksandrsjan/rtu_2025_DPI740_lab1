"use strict";

const assert = require('assert');
const Triangle = require("../src/triangle");

describe('Test Triangle class', () => {
    // describe('Triangle constructor method', () => {
    //     it('Should create triangle with the 0 side legths if the given negative values', () => {
    //         const T = new Triangle(-5,-7,-10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 side legths if the given x value < 0', () => {
    //         const T = new Triangle(-5,7,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 side legths if the given y value < 0', () => {
    //         const T = new Triangle(5,-7,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 side legths if the given z value < 0', () => {
    //         const T = new Triangle(5,7,-10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given values are = 0', () => {
    //         const T = new Triangle(0,7,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given x value = 0', () => {
    //         const T = new Triangle(0,7,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given y value = 0', () => {
    //         const T = new Triangle(0,7,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given z value = 0', () => {
    //         const T = new Triangle(0,7,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the given side lengths if the given positive values', () => {
    //         const T = new Triangle(5,7,10);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given values are NaN', () => {
    //         const T = new Triangle(NaN,NaN,NaN);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given x value is NaN', () => {
    //         const T = new Triangle(NaN,7,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given y value is NaN', () => {
    //         const T = new Triangle(5,NaN,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given z value is NaN', () => {
    //         const T = new Triangle(5,7,NaN);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given values are not a number type', () => {
    //         const T = new Triangle("5","7","10");
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given x value is not a number type', () => {
    //         const T = new Triangle("5",7,10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given y value is not a number type', () => {
    //         const T = new Triangle(5,"7",10);
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });

    //     it('Should create triangle with the 0 sides legth if the given z value is not a number type', () => {
    //         const T = new Triangle(5,7,"10");
    //         assert.strictEqual(T.x, 0);
    //         assert.strictEqual(T.y, 0);
    //         assert.strictEqual(T.z, 0);
    //     });
    // });
    
    // describe('Triangle updateSize method', () => {
    //     it('Should increase Triangle side lengths by given values if given positive values', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,1,1);
    //         assert.strictEqual(T.x, 6);
    //         assert.strictEqual(T.y, 8);
    //         assert.strictEqual(T.z, 11);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given negative values', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(-1,-1,-1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given x value < 0', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(-1,1,1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given y value < 0', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,-1,1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given z value < 0', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,1,-1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given values = 0', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(0,0,0);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given x value = 0', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(0,1,1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given y value = 0', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,0,1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given z value = 0', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,1,0);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given values are NaN', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(NaN,NaN,NaN);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given x value is NaN', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(NaN,1,1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given y value is NaN', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,NaN,1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given z value is NaN', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,1,NaN);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given values are not a number type', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize("1","1","1");
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given x value are not a number type', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize("1",1,1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given y value are not a number type', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,"1",1);
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });

    //     it('Should not increase Triangle side lengths by given values if given z value are not a number type', () => {
    //         const T = new Triangle(5,7,10);
    //         T.updateSize(1,1,"1");
    //         assert.strictEqual(T.x, 5);
    //         assert.strictEqual(T.y, 7);
    //         assert.strictEqual(T.z, 10);
    //     });
    // });

    // describe('Triangle getPerimeter method', () => {
    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(1,3,5);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 9);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(10,30,50);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 90);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(1,79,20);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 100);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(100,30,50);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 180);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(1,3,500);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 504);
    //     });
        
    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(1000,3000,5000);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 9000);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(1,1,1);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 3);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(0,0,0);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 0);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(-100,-100,-100);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 0);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle(NaN,NaN,NaN);
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 0);
    //     });

    //     it('Should return correct Triangle perimeter', () =>{
    //         const T = new Triangle("100","100","100");
    //         const result = T.getPerimeter();
    //         assert.strictEqual(result, 0);
    //     });
    // });

    // describe('Triangle getLongestEdge method', () => {
    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle(1,5,10);
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 10);
    //     });

    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle(1,1,1);
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 1);
    //     });

    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle(0,0,0);
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 0);
    //     });

    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle(1000,50,10);
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 1000);
    //     });

    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle(1,500,10);
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 500);
    //     });

    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle(500,500,500);
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 500);
    //     });

    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle(-10,-10,-10);
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 0);
    //     });

    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle(NaN,NaN,NaN);
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 0);
    //     });

    //     it('Should return correct Triangle longest edge value', () => {
    //         const T = new Triangle("1","5","10");
    //         const result = T.getLongestEdge();
    //         assert.strictEqual(result, 0);
    //     });
    // });

    describe('Triangle getNameAndLength method', () => {
        it('Should return correct values for Map keys', () => {
            const T = new Triangle(1,5,7);
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 1);
            assert.strictEqual(edgeY, 5);
            assert.strictEqual(edgeZ, 7);
        });

        it('Should return correct values for Map keys', () => {
            const T = new Triangle(10,50,70);
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 10);
            assert.strictEqual(edgeY, 50);
            assert.strictEqual(edgeZ, 70);
        });

        it('Should return correct values for Map keys', () => {
            const T = new Triangle(1000,5000,7000);
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 1000);
            assert.strictEqual(edgeY, 5000);
            assert.strictEqual(edgeZ, 7000);
        });

        it('Should return correct values for Map keys', () => {
            const T = new Triangle(100,1,1);
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 100);
            assert.strictEqual(edgeY, 1);
            assert.strictEqual(edgeZ, 1);
        });

        it('Should return correct values for Map keys', () => {
            const T = new Triangle(1,1,1);
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 1);
            assert.strictEqual(edgeY, 1);
            assert.strictEqual(edgeZ, 1);
        });

        it('Should return correct values for Map keys', () => {
            const T = new Triangle(0,0,0);
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 0);
            assert.strictEqual(edgeY, 0);
            assert.strictEqual(edgeZ, 0);
        });

        it('Should return correct values for Map keys', () => {
            const T = new Triangle(-1,-5,-7);
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 0);
            assert.strictEqual(edgeY, 0);
            assert.strictEqual(edgeZ, 0);
        });

        it('Should return correct values for Map keys', () => {
            const T = new Triangle(NaN,NaN,NaN);
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 0);
            assert.strictEqual(edgeY, 0);
            assert.strictEqual(edgeZ, 0);
        });

        it('Should return correct values for Map keys', () => {
            const T = new Triangle("1","1","1");
            const TriangleMap = T.getEdgeNameAndLength();
            const edgeX = TriangleMap.get('x');
            const edgeY = TriangleMap.get('y');
            const edgeZ = TriangleMap.get('z');
            assert.strictEqual(edgeX, 0);
            assert.strictEqual(edgeY, 0);
            assert.strictEqual(edgeZ, 0);
        });
    });
});

