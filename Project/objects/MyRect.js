import {CGFobject} from '../../lib/CGF.js';
/**
 * MyRect
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {Array} coords - Array of texture coordinates (optional)
 */
export class MyRect extends CGFobject {
	constructor(scene, l1, l2) {
		super(scene);

		this.l1 = l1;
		this.l2 = l2;
		this.initBuffers();

	}
	
	initBuffers() {
		this.vertices = [
			-this.l1, -this.l2, 0,	//0
			this.l1, -this.l2, 0,	//1
			-this.l1, this.l2, 0,	//2
			this.l1, this.l2, 0,	//3

			-this.l1, -this.l2, 0,	//4
			this.l1, -this.l2, 0,	//5
			-this.l1, this.l2, 0,	//6
			this.l1, this.l2, 0		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			3, 2, 1,
			6, 5, 4,
			5, 6, 7
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

