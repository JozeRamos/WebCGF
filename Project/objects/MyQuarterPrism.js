import {CGFobject} from '../../lib/CGF.js';
/**
 * MyQuarterPrism
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to MyQuarterPrism number of slices (bigger number will be more detailled)
 * @param stacks - Reference to MyQuarterPrism number of stacks (bigger number will be more detailled)
 */
export class MyQuarterPrism extends CGFobject {
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

		var ang = (Math.PI/(4*this.slices));
		
		for(var i = 0; i <= this.slices*2; i++){
			var x = Math.cos(ang*i);
			var y = Math.sin(ang*i);
			var z = 1/this.stacks;
			for(var j = 0; j <= this.stacks; j++){
				this.vertices.push(x,y,z*j);
			}
		}
		
		for(var i = 0; i <= this.slices*2-1; i ++){
			for(var j = 0; j < this.stacks; j++){
				this.indices.push(i*(this.stacks+1)+j,i*(this.stacks+1)+1+this.stacks+j,i*(this.stacks+1)+2+this.stacks+j);
				this.indices.push(i*(this.stacks+1)+j,i*(this.stacks+1)+2+this.stacks+j,i*(this.stacks+1)+1+j);

				this.indices.push(i*(this.stacks+1)+1+this.stacks+j,i*(this.stacks+1)+j, i*(this.stacks+1)+2+this.stacks+j);
				this.indices.push(i*(this.stacks+1)+2+this.stacks+j,i*(this.stacks+1)+j, i*(this.stacks+1)+1+j);
			}
		}

		for (var i = 0; i < this.slices; i++){
			this.setNormal(ang, Math.sin(ang * j));
		}

		for (var i = -1; i < this.slices; i++){
			this.setNormal(ang, Math.sin(ang * j));
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