import {CGFobject} from '../../lib/CGF.js';
import { MyPrism_half } from "../objects/MyPrism_half.js";
import { MyFigure_half } from "../objects/MyFigure_half.js";
import { MyTriangle } from "../objects/MyTriangle.js";
import { MySquare } from "../objects/MySquare.js";
import { CGFappearance } from "../../lib/CGF.js";

/**
 * MyBeek
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyBeek extends CGFobject {
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
		
		this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(0.97, 0.754, 0.258,1);
        this.yellow.setDiffuse(0.97, 0.754, 0.258,1);


	}

	display(){
		//upper
		this.scene.pushMatrix();
		this.yellow.apply();

		this.scene.pushMatrix();
		this.scene.scale(2.75,1,1)
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.25,1)
		this.scene.translate(0,0,-1);
		this.figure.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.25,1)
		this.prism.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.scale(2.75,1,1)
		this.scene.translate(0,0,1);
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.25,1);
		this.figure.display();
		this.scene.popMatrix();

		
		//lower
		this.scene.pushMatrix();

		this.scene.rotate(Math.PI,1,0,0)
		this.scene.translate(0,3,-1)

		this.scene.pushMatrix();

		//smaller

		this.scene.scale(0.5,0.5,1)
		
		this.scene.translate(2.75,-3,0);

		this.scene.pushMatrix();
		this.scene.scale(2.75,1,1)
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.25,1)
		this.scene.translate(0,0,-1);
		this.figure.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.25,1)
		this.prism.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.scale(2.75,1,1)
		this.scene.translate(0,0,1);
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.25,1);
		this.figure.display();
		this.scene.popMatrix();

		this.scene.popMatrix();

		//bigger
		
		this.scene.translate(-2.75,0,0);

		this.scene.pushMatrix();
		this.scene.scale(2.75,1,1)
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.75,1)
		this.scene.translate(0,0,-1);
		this.figure.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.75,1)
		this.prism.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.scale(2.75,1,1)
		this.scene.translate(0,0,1);
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.atan(1/2.75),0,0,1);
		this.scene.scale(Math.sqrt(2.75**2+1**2),0.75,1);
		this.figure.display();
		this.scene.popMatrix();



		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-5.5,-2,0);
		this.scene.scale(5.5,1,1);
		this.square.display();
		this.scene.translate(0,0,1);
		this.square.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-5.5,-4,1);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(1,4,1);
		this.square.display();
		this.scene.popMatrix();

		this.scene.popMatrix();
	}

	enableNormalViz() {
        this.prism.enableNormalViz();
        this.figure.enableNormalViz();
        this.triangle.enableNormalViz();
        this.square.enableNormalViz();
        
    }

    disableNormalViz() {
        this.prism.disableNormalViz();
        this.figure.disableNormalViz();
        this.triangle.disableNormalViz();       
        this.square.disableNormalViz();   
    }
}