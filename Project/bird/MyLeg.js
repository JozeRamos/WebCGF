import {CGFobject} from '../../lib/CGF.js';
import { MyPrismWithCover } from "../objects/MyPrismWithCover.js";
import { MyFoot } from "./MyFoot.js";
/**
 * MyLeg
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyLeg extends CGFobject {
	constructor(scene) {
		super(scene);

		this.cilinder = new MyPrismWithCover(scene, 20, 10);
		this.foot = new MyFoot(scene);
	}


	display() {

		this.scene.pushMatrix();
		this.foot.display();
		this.scene.popMatrix(); 

		this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.1);
        this.scene.scale(0.1, 0.9, 0.1);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
		this.cilinder.display();
		this.scene.popMatrix();
	}
}