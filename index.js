"use strict";

const Triangle = require("./src/triangle");
const { program } = require('commander');

program
    .requiredOption('-x, --edgeX <edgeX>', 'Triangle X side length')
    .requiredOption('-y, --edgeY <edgeY>', 'Triangle Y side length')
    .requiredOption('-z, --edgeZ <edgeZ>', 'Triangle Z side length')
    .option('-a, --actions <actions...>', 'Triangle class actions');
program.parse();

const options = program.opts();

const T = new Triangle(Number(options.edgeX), Number(options.edgeY), Number(options.edgeZ));
console.log(T);

if(options.actions) {
    for (const currentAction of options.actions) {
        switch (currentAction) {
            case "updateSize": 
                T.updateSize(1,2,3);
                console.log(T);
                break;
            case "getPerimeter":
                console.log(`Perimetrs: ${T.getPerimeter()}`);
                break;
            case "getLongestEdge":
                console.log(`Garākā mala: ${T.getLongestEdge()}`);
                break;
            case "getEdgeNameAndLength":
                console.log(T.getEdgeNameAndLength());
                break;
            case "isEquilateral":
                if (T.isEquilateral()) {
                    console.log('Trijstūris ir vienādmalu');
                } else {
                    console.log('Trijstūris nav vienādmalu');
                }
                break;
            case "isIsosceles":
                if (T.isIsosceles()) {
                    console.log('Trijstūris ir vienādsānu');
                } else {
                    console.log('Trijstūris nav vienādsānu');
                }
                break;
            default:
                console.log(`Darbība ${currentAction} nav definēta`);
        }
    }
}

