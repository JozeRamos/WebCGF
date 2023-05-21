import {CGFobject} from '../../lib/CGF.js';
/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to MyCylinder number of slices (bigger number will be more detailled)
 * @param stacks - Reference to MyCylinder number of stacks (bigger number will be more detailled)
 */
export class MyCylinder extends CGFobject {
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
		
		for(var i = 0; i <= this.slices; i++){
			var x = Math.cos(ang*i);
			var y = Math.sin(ang*i);
			var z = 1/this.stacks;
			for(var j = 0; j <= this.stacks; j++){
				this.vertices.push(x,y,z*j);
			}
		}
		
		for(var i = 0; i < this.slices; i ++){
			for(var j = 0; j < this.stacks; j++){
				this.indices.push(i*(this.stacks+1)+j,i*(this.stacks+1)+1+this.stacks+j,i*(this.stacks+1)+2+this.stacks+j);
				this.indices.push(i*(this.stacks+1)+j,i*(this.stacks+1)+2+this.stacks+j,i*(this.stacks+1)+1+j);
			}
		}

		for (var i = 0; i <= this.slices; i++){
			var x = Math.cos(ang*i);
			var y = Math.sin(ang*i);
			for(var j = 0; j <= this.stacks; j++){				
				this.normals.push(x,y,0);
			}
		}


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	
}