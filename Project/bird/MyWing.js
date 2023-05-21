import {CGFobject} from '../../lib/CGF.js';
import { MyUnitCube } from "../objects/MyUnitCube.js";
import { MyQuarterPrismWithCover } from "../objects/MyQuarterPrismWithCover.js";
import { CGFappearance } from "../../lib/CGF.js";
/**
 * MyWing
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyWing extends CGFobject {
	constructor(scene) {
		super(scene);
		
		this.prism = new MyQuarterPrismWithCover(scene, 20, 20);
		this.square = new MyUnitCube(scene);
		
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

		this.scene.translate(0,0,0);

		this.scene.pushMatrix();
		this.grey.apply();
        this.scene.scale(0.1,0.4,1);
        this.square.display();	
		this.scene.popMatrix();

        
		this.scene.pushMatrix();
		this.grey.apply();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.scene.translate(0.2,0.1,-0.05);
        this.scene.scale(0.3,0.4,0.1);
        this.prism.display();	
		this.scene.popMatrix();

        this.scene.pushMatrix();
		this.grey.apply();
		this.scene.rotate(Math.PI*3/4,1,0,0);
        this.scene.translate(0,0.3,0.7);
        this.scene.scale(0.09,0.5,1.6);
        this.square.display();	
		this.scene.popMatrix();
		
		this.scene.popMatrix();

	}
}