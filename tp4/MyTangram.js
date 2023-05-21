import { CGFobject, CGFtexture } from '../lib/CGF.js';
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
		this.triangleSmallRed = new MyTriangleSmall(scene);
		this.triangleSmallPurple = new MyTriangleSmall(scene);
		this.triangle = new MyTriangle(scene);
		this.triangleBigBlue = new MyTriangleBig(scene);
		this.triangleBigOrange = new MyTriangleBig(scene);
		this.initMaterials(scene);
	}

	initBuffers() {
		this.vertices = [];
		this.indices = [];


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	
	initMaterials(scene) {
		this.texture = new CGFappearance(this.scene);
		this.texture.loadTexture('images/tangram.png');

		this.triangleSmallRed.texCoords = [
			0.25, 0.75,
			0.75, 0.75,
			0.5, 0.5
		]

		this.triangleSmallRed.updateTexCoordsGLBuffers();

		this.triangleSmallPurple.texCoords = [
			0, 0,
			0, 0.5,
			0.25, 0.25
		]

		this.triangleSmallPurple.updateTexCoordsGLBuffers();

		this.triangleBigBlue.texCoords = [
			0, 0,
			1, 0,
			0.5, 0.5
		]

		this.triangleBigBlue.updateTexCoordsGLBuffers();

		this.triangleBigOrange.texCoords = [
			1, 1,
			1, 0,
			0.5, 0.5
		]

		this.triangleBigOrange.updateTexCoordsGLBuffers();
	}

	display() {

		var m = [
			Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4), 0, 0,
			Math.cos(Math.PI / 4), Math.cos(Math.PI / 4), 0, 0,
			0, 0, 1, 0,
			0.7, 0.7, 0, 0.995
		];

		this.texture.apply();

		this.scene.pushMatrix();
		this.scene.multMatrix(m);
		this.diamond.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI / 4, 0, 0, 1);
		this.scene.translate(-1, 0, 0);
		this.triangleSmallRed.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1);
		this.scene.translate(1, -1, 0);
		this.triangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI / 4, 0, 0, 1);
		this.scene.translate(-2, 1, 0)
		this.triangleSmallPurple.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1);
		this.scene.translate(0, -2, 0);
		this.parallelogram.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI / 4, 0, 0, 1);
		this.scene.translate(1, -1, 0);
		this.triangleBigBlue.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(3 * Math.PI / 4, 0, 0, 1);
		this.scene.translate(-1, 1, 0);
		this.triangleBigOrange.display();
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