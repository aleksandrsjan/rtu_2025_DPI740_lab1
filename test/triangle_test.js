"use strict";

const assert = require('assert');
const Triangle = require("../src/triangle");

describe('Test Triangle clas', () => {
    describe('Triangle constructor method', () => {
        it('Should create triangle with the 0 side legths if the given negative values', () => {
            const T = new Triangle(-5,-7,-10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 side legths if the given x value < 0', () => {
            const T = new Triangle(-5,7,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 side legths if the given y value < 0', () => {
            const T = new Triangle(5,-7,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 side legths if the given z value < 0', () => {
            const T = new Triangle(5,7,-10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given values are = 0', () => {
            const T = new Triangle(0,7,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given x value = 0', () => {
            const T = new Triangle(0,7,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given y value = 0', () => {
            const T = new Triangle(0,7,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given z value = 0', () => {
            const T = new Triangle(0,7,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the given side lengths if the given positive values', () => {
            const T = new Triangle(5,7,10);
            assert.strictEqual(T.x, 5);
            assert.strictEqual(T.y, 7);
            assert.strictEqual(T.z, 10);
        });

        it('Should create triangle with the 0 sides legth if the given values are NaN', () => {
            const T = new Triangle(NaN,NaN,NaN);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given x value is NaN', () => {
            const T = new Triangle(NaN,7,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given y value is NaN', () => {
            const T = new Triangle(5,NaN,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given z value is NaN', () => {
            const T = new Triangle(5,7,NaN);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given values are not a number type', () => {
            const T = new Triangle("5","7","10");
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given x value is not a number type', () => {
            const T = new Triangle("5",7,10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given y value is not a number type', () => {
            const T = new Triangle(5,"7",10);
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });

        it('Should create triangle with the 0 sides legth if the given z value is not a number type', () => {
            const T = new Triangle(5,7,"10");
            assert.strictEqual(T.x, 0);
            assert.strictEqual(T.y, 0);
            assert.strictEqual(T.z, 0);
        });
    });
});

