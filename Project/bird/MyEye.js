import {CGFobject} from '../../lib/CGF.js';
import { MyPrism } from "../objects/MyPrism.js";
import { MyFigure } from "../objects/MyFigure.js";
import { CGFappearance } from "../../lib/CGF.js";
/**
 * MyEye
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyEye extends CGFobject {
	constructor(scene) {
		super(scene);
		
		this.prism = new MyPrism(scene,5,3);
		this.figure = new MyFigure(scene,5);
		
        this.initMaterials(scene);
	}

    initBuffers() {
		this.vertices = [];
		this.indices = [];

		
		this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

	initMaterials(scene){
		
		this.white = new CGFappearance(scene);
        this.white.setAmbient(1, 1, 1,1);
        this.white.setDiffuse(1, 1, 1,1);
        this.white.setSpecular(1,1,1,1);
        this.white.setShininess(128.0);

		this.black = new CGFappearance(scene);
        this.black.setAmbient(0,0,0,0);
        this.black.setDiffuse(0,0,0,0);
        this.black.setSpecular(0.5,0.5,0.5,0.5);
        this.black.setShininess(128.0);

	}

	display(){
		
		this.scene.pushMatrix();
		this.scene.scale(1,1,0.5);
		this.white.apply();
		this.prism.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0,-0.5);
		this.figure.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.3,0,-0.4);
		this.scene.scale(0.5,0.5,1);
		this.black.apply();
		this.figure.display();
		this.scene.popMatrix();
	}

	enableNormalViz() {
        this.prism.enableNormalViz();
        this.figure.enableNormalViz();
    }

    disableNormalViz() {
        this.prism.disableNormalViz();
        this.figure.disableNormalViz();
    }
}