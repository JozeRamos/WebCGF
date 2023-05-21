import {CGFobject} from '../../lib/CGF.js';
import { MyBeek } from "./MyBeek.js";
import { MyNeck } from "./MyNeck.js";
import { MyEye } from "./MyEye.js";
import { MyHead } from "./MyHead.js";
import { MyBody } from "./MyBody.js";
import { MyLeg } from "./MyLeg.js";
import { MyFeather } from './MyFeather.js';

/**
 * MyWingless
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyWingless extends CGFobject {
	constructor(scene) {
		super(scene);
		this.beek = new MyBeek(scene);
		this.neck = new MyNeck(scene);
		this.eye = new MyEye(scene);
		this.head = new MyHead(scene);
		this.body = new MyBody(scene);
		this.leg = new MyLeg(scene);
		this.feather = new MyFeather(scene);
	}

	display(){

		//head and neck
		this.scene.pushMatrix();

		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.translate(0.8,0.1,-0.025);
		this.scene.scale(1/20,1/20,1/15);

		this.scene.pushMatrix();
		this.scene.translate(-4.5,1,1);
		this.scene.rotate(Math.PI,0,1,0);
		this.head.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-6,0,0.5);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.rotate(-Math.PI/4,0,1,0);
		this.scene.translate(1.2,0,-2);
		this.scene.scale(2.6,0.5,7);
		this.neck.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1,1,0);
		this.beek.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3,2,1);
		this.scene.rotate(Math.PI,0,0,1);
		this.eye.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.translate(3,2,0);
		this.eye.display();
		this.scene.popMatrix();
		
		this.scene.popMatrix();

		//body

		this.body.display();

		//Legs
		this.scene.pushMatrix();
		this.scene.scale(1,0.8,1);

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/6, 0, 1, 0);
		this.scene.translate(0.28, -1.7, 0);
		this.leg.display();
		this.scene.popMatrix(); 

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/6, 0, 1, 0);
		this.scene.translate(-0.28, -1.7, 0);
		this.leg.display();
		this.scene.popMatrix();

		this.scene.popMatrix();this.scene.pushMatrix();
		this.scene.translate(0.43, -0.36, -1.28);
		this.scene.rotate(-Math.PI/6, 0, 1, 0);
		this.scene.rotate(Math.PI/6, 1, 0, 0);
		this.scene.rotate(Math.PI/6, 0, 0, 1);
		this.feather.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.38, -0.36, -1.5);
		this.scene.rotate(-Math.PI/6, 0, 1, 0);
		this.scene.rotate(Math.PI/6, 1, 0, 0);
		this.feather.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.1, -0.36, -1.5);
		this.scene.rotate(-Math.PI/8, 0, 1, 0);
		this.scene.rotate(Math.PI/6, 1, 0, 0);
		this.feather.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.08, -0.36, -1.5);
		this.scene.rotate(Math.PI/8, 0, 1, 0);
		this.scene.rotate(Math.PI/6, 1, 0, 0);
		this.feather.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.36, -0.36, -1.5);
		this.scene.rotate(Math.PI/6, 0, 1, 0);
		this.scene.rotate(Math.PI/6, 1, 0, 0);
		this.feather.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.43, -0.36, -1.28);
		this.scene.rotate(Math.PI/6, 0, 1, 0);
		this.scene.rotate(Math.PI/6, 1, 0, 0);
		this.scene.rotate(-Math.PI/6, 0, 0, 1);
		this.feather.display();
		this.scene.popMatrix();

		
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