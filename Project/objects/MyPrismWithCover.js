import {CGFobject} from '../../lib/CGF.js';
import { MyPrism } from "./MyPrism.js";
import { MyPrismCover } from "./MyPrismCover.js";
/**
 * MyPrismWithCover
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to MyPrismWithCover number of slices (bigger number will be more detailled)
 * @param stacks - Reference to MyPrismWithCover number of stacks (bigger number will be more detailled)
 */
export class MyPrismWithCover extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.prism = new MyPrism(scene, slices, stacks);
        this.prismCoverFront = new MyPrismCover(scene, slices);
        this.prismCoverBack = new MyPrismCover(scene, slices);
    }

    
    display() {
        this.prism.display();
        this.prismCoverFront.display();

        this.scene.pushMatrix();
		this.scene.translate(0, 0, -1);
		this.prismCoverBack.display();
		this.scene.popMatrix();
    }
    
}