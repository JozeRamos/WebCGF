import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
		
		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	}

	
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];

		var ang = 2*(Math.PI/this.slices);
		
		for(var i = 0; i < this.slices*2; i++){
			var x = Math.cos(ang*i);
			var y = Math.sin(ang*i);
			var z = 1/this.stacks;
			for(var j = 0; j <= this.stacks; j++){
				this.vertices.push(x,y,z*j);
			}
		}
		
		for(var i = 0; i < this.slices*2-1; i ++){
			for(var j = 0; j < this.stacks; j++){
				this.indices.push(i*(this.stacks+1)+j,i*(this.stacks+1)+1+this.stacks+j,i*(this.stacks+1)+2+this.stacks+j);
				this.indices.push(i*(this.stacks+1)+j,i*(this.stacks+1)+2+this.stacks+j,i*(this.stacks+1)+1+j);
			}
		}

		for (var i = 0; i < this.slices; i++){
			this.setNormal(ang, i);
		}

		for (var i = -1; i < this.slices; i++){
			this.setNormal(ang, i);
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	//Set the normal of the plane
	setNormal(ang, i){
		//nor = angle of the plane - 90º + ang * i
		var nor = Math.PI - (Math.PI-ang)/2 - Math.PI/2 + i*ang;
		var x = Math.cos(nor);
		var y = Math.sin(nor);
		for(var j = 0; j <= this.stacks; j++){				
			this.normals.push(x,y,0);
		}
	}
	
}