import { CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyParallelogram } from "./MyParallelogram.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {

	constructor(scene) {
		super(scene);
		this.parallelogram = new MyParallelogram(scene);
		this.diamond = new MyDiamond(scene);
		this.triangleSmall = new MyTriangleSmall(scene);
		this.triangle = new MyTriangle(scene);
		this.triangleBig = new MyTriangleBig(scene);		
	}

	initBuffers() {
		this.vertices = [];
		this.indices = [];

		
		this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
	
	display() {

		var m = [
			Math.cos(Math.PI/4),-Math.sin(Math.PI/4),0,0,
			Math.cos(Math.PI/4),Math.cos(Math.PI/4),0,0,
			0,0,1,0,
			0.7,0.7,0,0.995
		  ];
		  
		  this.scene.pushMatrix();
		  this.scene.multMatrix(m);
		  this.diamond.display();
		  this.scene.popMatrix();
	  
		  
		  this.scene.pushMatrix();
		  this.scene.rotate(-Math.PI/4,0,0,1);
		  this.scene.translate(-1,0,0);
		  this.triangleSmall.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();
		  this.scene.rotate(-3*Math.PI/4,0,0,1);
		  this.scene.translate(1,-1,0);
		  this.triangle.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();
		  this.scene.rotate(Math.PI/4,0,0,1);
		  this.scene.translate(-2,1,0)
		  this.triangleSmall.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();
		  this.scene.rotate(Math.PI,0,1,0);
		  this.scene.rotate(-3*Math.PI/4,0,0,1);
		  this.scene.translate(0,-2,0);
		  this.parallelogram.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();    
		  this.scene.rotate(-Math.PI/4,0,0,1);
		  this.scene.translate(1,-1,0);
		  this.triangleBig.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();
		  this.scene.rotate(3*Math.PI/4,0,0,1);
		  this.scene.translate(-1,1,0);
		  this.triangleBig.display();
		  this.scene.popMatrix();
	}
}