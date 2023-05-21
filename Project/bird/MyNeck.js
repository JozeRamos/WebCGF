import {CGFobject} from '../../lib/CGF.js';
import { MyPrism } from "../objects/MyPrism.js";
import { CGFappearance } from "../../lib/CGF.js";
/**
 * MyNeck
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyNeck extends CGFobject {
	constructor(scene) {
		super(scene);

        this.prism = new MyPrism(scene, 15, 20);

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

    display() {
		this.scene.pushMatrix();
		this.grey.apply();
        this.prism.display();
		this.scene.popMatrix();
    }
}