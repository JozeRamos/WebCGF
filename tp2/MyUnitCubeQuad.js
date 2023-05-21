import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.quad = new MyQuad(scene);
	}
	
	initBuffers() {
		this.vertices = [];

		this.indices = [];

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	display(){
		this.quad.display();

		this.scene.pushMatrix();    
		this.scene.rotate(Math.PI/2,1,0,0);
		this.quad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();    
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.quad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();    
		this.scene.rotate(Math.PI/2,0,1,0);
		this.quad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();    
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.quad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();    
		this.scene.rotate(Math.PI,1,0,0);
		this.quad.display();
		this.scene.popMatrix();
	}
}