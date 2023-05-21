import {CGFobject} from '../../lib/CGF.js';
import { MyWingless } from "./MyWingless.js";
import { MyWing1 } from "./MyWing1.js";
import { MyWing2 } from "./MyWing2.js";

/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyBird extends CGFobject {
	constructor(scene) {
		super(scene);
		this.body = new MyWingless(scene);
		this.wing1 = new MyWing1(scene);
		this.wing2 = new MyWing2(scene);
	}

	display(){
		this.scene.pushMatrix();
		this.body.display();
		this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(0.5,-0.25,0.45);
		this.wing1.display();
        this.scene.popMatrix();

		
        this.scene.pushMatrix();		
		this.scene.translate(-0.5,-0.25,0.45);
		this.wing2.display();
        this.scene.popMatrix();
	}

}