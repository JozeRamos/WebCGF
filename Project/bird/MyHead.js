import {CGFobject} from '../../lib/CGF.js';
import { MyPrism_half } from "../objects/MyPrism_half.js";
import { MyFigure_half } from "../objects/MyFigure_half.js";
import { MyTriangle } from "../objects/MyTriangle.js";
import { MySquare } from "../objects/MySquare.js";
import { CGFappearance } from "../../lib/CGF.js";
/**
 * MyHead
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyHead extends CGFobject {
	constructor(scene) {
		super(scene);
		
		this.prism = new MyPrism_half(scene,15,20);
		this.figure = new MyFigure_half(scene,15);
		this.triangle = new MyTriangle(scene);
		this.square = new MySquare(scene);
		
        this.initMaterials(scene);
	}

    initBuffers() {
		this.vertices = [];
		this.indices = [];

		
		this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

	initMaterials(scene){
		
		this.grey = new CGFappearance(scene);
        this.grey.setAmbient(0.68, 0.61, 0.574,1);
        this.grey.setDiffuse(0.68, 0.61, 0.574,0.2);

	}

	display(){

		this.scene.pushMatrix();
		this.grey.apply();
		
		this.scene.pushMatrix();
		this.scene.scale(2.75,1,1)
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),2,1)
		this.scene.translate(0,0,-1);
		this.figure.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),2,1)
		this.prism.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.scale(2.75,1,1)
		this.scene.translate(0,0,1);
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),2,1)
		this.figure.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.translate(-1,-4,1);
		this.scene.scale(1,4,1);
		this.square.display();
		this.scene.popMatrix();
		
		this.scene.popMatrix();
	}
}