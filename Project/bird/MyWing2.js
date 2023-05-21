import {CGFobject} from '../../lib/CGF.js';
import { MyWing } from "./MyWing.js"

/**
 * MyWing2
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyWing2 extends CGFobject {
	constructor(scene) {
		super(scene);
		this.wing = new MyWing(scene);
	}

	display(){

		//wings


		this.scene.pushMatrix();
		this.scene.rotate(Math.PI,1,0,0);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.rotate(Math.PI,0,0,1);
		this.wing.display();


		
	}

	
	enableNormalViz() {
        this.beek.enableNormalViz();
        this.eye.enableNormalViz();
        
    }

    disableNormalViz() {
        this.beek.disableNormalViz();
        this.eye.disableNormalViz(); 
    }
}