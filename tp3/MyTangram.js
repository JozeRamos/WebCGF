import { CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { CGFappearance } from "../lib/CGF.js";
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
        this.initMaterials(scene);
	}

	initBuffers() {
		this.vertices = [];
		this.indices = [];

		
		this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
	
	initMaterials(scene){

		this.green = new CGFappearance(scene);
        this.green.setAmbient(0,0.0,0.0,1);
        this.green.setDiffuse(0, 1, 0,1.0);
        this.green.setSpecular(1,1,1,1.0);
        this.green.setShininess(10.0);
		
		this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(0,0.0,0.0,1);
        this.yellow.setDiffuse(1, 1, 0,1.0);
        this.yellow.setSpecular(1,1,1,1.0);
        this.yellow.setShininess(10.0);
		
		this.red = new CGFappearance(scene);
        this.red.setAmbient(0,0.0,0.0,1);
        this.red.setDiffuse(1, 0, 0,1.0);
        this.red.setSpecular(1,1,1,1.0);
        this.red.setShininess(10.0);
		
		this.pink = new CGFappearance(scene);
        this.pink.setAmbient(0,0.0,0.0,1);
        this.pink.setDiffuse(1, 0.61, 0.82, 0);
        this.pink.setSpecular(1,1,1,1.0);
        this.pink.setShininess(10.0);
		
		this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0,0.0,0.0,1);
        this.purple.setDiffuse(0.67, 0.31, 0.76,1.0);
        this.purple.setSpecular(1,1,1,1.0);
        this.purple.setShininess(10.0);
		
		this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0,0.0,0.0,1);
        this.blue.setDiffuse(0, 0.61, 1,1.0);
        this.blue.setSpecular(1,1,1,1.0);
        this.blue.setShininess(10.0);
		
		this.orange = new CGFappearance(scene);
        this.orange.setAmbient(0,0.0,0.0,1);
        this.orange.setDiffuse(1, 0.61, 0,1.0);
        this.orange.setSpecular(1,1,1,1.0);
        this.orange.setShininess(10.0);
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
		  if (this.scene.selectedMaterial != 4)
		  	this.green.apply();
		  this.diamond.display();
		  this.scene.popMatrix();
	  
		  
		  this.scene.pushMatrix();
		  this.scene.rotate(-Math.PI/4,0,0,1);
		  this.scene.translate(-1,0,0);
		  this.red.apply();
		  this.triangleSmall.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();
		  this.scene.rotate(-3*Math.PI/4,0,0,1);
		  this.scene.translate(1,-1,0);
		  this.pink.apply();
		  this.triangle.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();
		  this.scene.rotate(Math.PI/4,0,0,1);
		  this.scene.translate(-2,1,0)
		  this.purple.apply();
		  this.triangleSmall.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();
		  this.scene.rotate(Math.PI,0,1,0);
		  this.scene.rotate(-3*Math.PI/4,0,0,1);
		  this.scene.translate(0,-2,0);
		  this.yellow.apply();
		  this.parallelogram.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();    
		  this.scene.rotate(-Math.PI/4,0,0,1);
		  this.scene.translate(1,-1,0);
		  this.blue.apply();
		  this.triangleBig.display();
		  this.scene.popMatrix();
	  
		  this.scene.pushMatrix();
		  this.scene.rotate(3*Math.PI/4,0,0,1);
		  this.scene.translate(-1,1,0);
		  this.orange.apply();
		  this.triangleBig.display();
		  this.scene.popMatrix();
	}

	enableNormalViz() {
        this.diamond.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangle.disableNormalViz();       
        this.triangleBig.disableNormalViz();       
        this.triangleSmall.disableNormalViz();       
    }
}