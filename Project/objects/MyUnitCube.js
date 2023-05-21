import {CGFobject} from '../../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			//frente
			0.5, 0.5, 0.5,	//0
			0.5, -0.5, 0.5,	//1
			-0.5, 0.5, 0.5,	//2
			-0.5, -0.5, 0.5, //3
			//trás
			0.5, 0.5, -0.5, //4
			0.5, -0.5, -0.5, //5
			-0.5, 0.5, -0.5, //6
			-0.5, -0.5, -0.5, //7
			//cima
			0.5, 0.5, 0.5,	//0
			-0.5, 0.5, 0.5,	//2
			0.5, 0.5, -0.5, //4
			-0.5, 0.5, -0.5, //6
			//baixo
			0.5, -0.5, 0.5,	//1
			-0.5, -0.5, 0.5, //3
			0.5, -0.5, -0.5, //5
			-0.5, -0.5, -0.5, //7
			//direita
			0.5, 0.5, 0.5,	//0
			0.5, -0.5, 0.5,	//1
			0.5, 0.5, -0.5, //4
			0.5, -0.5, -0.5, //5
			//esquerda
			-0.5, 0.5, 0.5,	//2
			-0.5, -0.5, 0.5, //3
			-0.5, 0.5, -0.5, //6
			-0.5, -0.5, -0.5 //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			//front
			0, 2, 1,
			1, 2, 3,
			//back
			5, 6, 4,
			7, 6, 5,
			//top
			9, 8, 10,
			9, 10, 11,
			//bottom
			14, 12, 13,
			15, 14, 13,
			//rigth
			16, 17, 18,
			17, 19, 18,
			//left
			21, 20, 22,
			22, 23, 21
		];

		this.normals = [
			//frente
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			//trás
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			//cima
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			//baixo
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			//direita
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			//esquerda
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}