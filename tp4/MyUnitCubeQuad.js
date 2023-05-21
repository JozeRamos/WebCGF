import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 * @param topo - Texture of top
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, textTop, textFront, textRight, textLeft, textBack, textBottom) {
		super(scene);
		this.quad = new MyQuad(scene);

		this.textTop = textTop;
 		this.textFront = textFront;
		this.textRight = textRight;
		this.textLeft = textLeft;
		this.textBack = textBack;
		this.textBottom = textBottom;

		this.initMaterials(scene);
	}

	initMaterials(scene) {
		this.quadMaterial = new CGFappearance(scene);
        this.quadMaterial.setAmbient(0.5, 0.5, 0.5, 1);
        this.quadMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.quadMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.quadMaterial.setShininess(15.0);
	}

	display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
		this.quadMaterial.setTexture(this.textFront);
		this.quadMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
		this.quadMaterial.setTexture(this.textBack);
		this.quadMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.quadMaterial.setTexture(this.textTop);
		this.quadMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.quadMaterial.setTexture(this.textBottom);
		this.quadMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.quadMaterial.setTexture(this.textRight);
		this.quadMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.quadMaterial.setTexture(this.textLeft);
		this.quadMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();
	}
}