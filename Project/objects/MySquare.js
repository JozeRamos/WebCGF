import {CGFobject} from '../../lib/CGF.js';
/**
 * MySquare
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MySquare extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.normals = [];
		this.vertices = [
			0, 0, 0,	//0
			0, 1, 0,	//1
			1, 1, 0,	//2
			1, 0, 0,	//3
			0, 0, 0,	//0
			0, 1, 0,	//1
			1, 1, 0,	//2
			1, 0, 0,	//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
			0, 3, 2,
			5, 6, 4,
			6, 7, 4,
		];

		for (var i = 0; i < 8; i++){
			if (i < 4)
				this.normals.push(0,0,1);
			else
				this.normals.push(0,0,-1);
		}



		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}