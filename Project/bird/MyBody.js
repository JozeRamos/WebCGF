import { CGFobject, CGFtexture, CGFappearance } from '../../lib/CGF.js';
import { MyRect } from "../objects/MyRect.js";
import { MyTriangle } from "../objects/MyTriangle.js";
import { MyQuarterPrismWithCover } from "../objects/MyQuarterPrismWithCover.js";
import { MyTail } from "./MyTail.js";
/**
 * MyBody.js
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyBody extends CGFobject {

	constructor(scene) {
		super(scene);
		this.rectTop = new MyRect(scene, 0.47, 1.0);
		this.rectLeft = new MyRect(scene, 0.47, 0.2);
		this.rectFrontBack1 = new MyRect(scene, 1.0, 0.2);
		this.rectFrontBack2 = new MyRect(scene, 0.8, 0.2);
		this.triangle = new MyTriangle(scene);
		this.rectBelow = new MyRect(scene, 0.47, 0.83);
		this.prismWithCover = new MyQuarterPrismWithCover(scene, 20, 4);
		this.tail = new MyTail(scene);


		this.initMaterials(scene);
	}

	initMaterials(scene){
		this.whiteAppearance = new CGFappearance(scene);
		this.whiteAppearance.setAmbient(1, 1, 1, 1);
		this.whiteAppearance.setDiffuse(1, 1, 1, 1);
	}


	display() {
		this.whiteAppearance.apply();	

		this.scene.scale(0.5, 0.5, 0.5);

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.rectTop.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.2, 1);
		this.rectLeft.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.47, -0.2, 0);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.rectFrontBack1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.47, -0.2, 0);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.rectFrontBack1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.47, -0.6, -0.2);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.rectFrontBack2.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.47, -0.6, -0.2);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.rectFrontBack2.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.47 *2 + 0.47/6 + 0.001, -0.17);
		this.scene.rotate(Math.PI/2 - Math.PI/40, 1, 0, 0);
		this.rectBelow.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.47, -0.865, -0.2);
		this.scene.rotate(Math.PI/45 , 1, 0, 0);
		this.scene.rotate(Math.PI , 0, 0, 1);
		this.scene.rotate(-Math.PI/2, 0, 1, 0);
		this.scene.scale(0.8, 0.12, 1);
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.47, -0.865, -0.2);
		this.scene.rotate(Math.PI/45 , 1, 0, 0);
		this.scene.rotate(Math.PI , 0, 0, 1);
		this.scene.rotate(-Math.PI/2, 0, 1, 0);
		this.scene.scale(0.8, 0.12, 1);
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.47, -0.4, 0.6);
		this.scene.rotate(Math.PI, 1, 0, 0);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.scene.scale(0.4, 0.4, 0.94);
		this.prismWithCover.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.47/2, -1 - 0.46/2);
		this.tail.display();
		this.scene.popMatrix(); 

		this.scene.pushMatrix();
		this.scene.translate(0, -0.47 * 2 + 0.01, 0);
		this.scene.scale(1, -1, 1);
		this.scene.translate(0, -0.47/2, -1 - 0.46/2);
		this.tail.display();
		this.scene.popMatrix();
	}

 	enableNormalViz() {
		this.rectTop.enableNormalViz();
		this.rectLeft.enableNormalViz();
		this.rectFrontBack1.enableNormalViz();
		this.rectFrontBack2.enableNormalViz();
		this.triangle.enableNormalViz();
		this.rectBelow.enableNormalViz();
		this.prismWithCover.enableNormalViz();
		this.tail.enableNormalViz();
	}

	disableNormalViz() {
		this.rectTop.disableNormalViz();
		this.rectLeft.disableNormalViz();
		this.rectFrontBack1.disableNormalViz();
		this.rectFrontBack2.disableNormalViz();
		this.triangle.disableNormalViz();
		this.rectBelow.disableNormalViz();
		this.prismWithCover.disableNormalViz();
		this.tail.disableNormalViz();
	} 
}