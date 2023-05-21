import {CGFobject} from '../../lib/CGF.js';
import { MyQuarterPrism } from "./MyQuarterPrism.js";
import { MyQuarterPrismCover } from "./MyQuarterPrismCover.js";
/**
 * MyQuarterPrismWithCover
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to MyQuarterPrismWithCover number of slices (bigger number will be more detailled)
 * @param stacks - Reference to MyQuarterPrismWithCover number of stacks (bigger number will be more detailled)
 */
export class MyQuarterPrismWithCover extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.quarterPrism = new MyQuarterPrism(scene, slices, stacks);
        this.prismCoverFront = new MyQuarterPrismCover(scene, slices);
        this.prismCoverBack = new MyQuarterPrismCover(scene, slices);
    }

    
    display() {
        this.quarterPrism.display();
        this.prismCoverFront.display();

        this.scene.pushMatrix();
		this.scene.translate(0, 0, -1);
		this.prismCoverBack.display();
		this.scene.popMatrix();
    }
    
}