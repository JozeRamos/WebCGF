import {CGFobject} from '../../lib/CGF.js';
import { MyWing } from "./MyWing.js"

/**
 * MyWing1
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyWing1 extends CGFobject {
	constructor(scene) {
		super(scene);
		this.wing = new MyWing(scene);
	}

	display(){

		//wings

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