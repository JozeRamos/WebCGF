import {CGFobject} from '../../lib/CGF.js';
/**
 * MySphere
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Number of slices around the half sphere (integer)
 * @param stacks - Number of stacks along the half sphere (integer)
 * @param inverted - Whether to invert the normals (boolean)
 */
export class MySphere extends CGFobject {
	constructor(scene, slices, stacks, inverted) {
		super(scene);
		
		this.slices = slices;
		this.stacks = stacks;
		this.inverted = inverted;

		this.initBuffers();
	}

	
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var sliceAngle = Math.PI / this.slices;
		var stackAngle = 2 * Math.PI / this.stacks;

		for (var slice = 0; slice <= this.slices; slice++) {
		var theta = slice * sliceAngle;
		var sinTheta = Math.sin(theta);
		var cosTheta = Math.cos(theta);

		for (var stack = 0; stack <= this.stacks; stack++) {
			var phi = stack * stackAngle;
			var sinPhi = Math.sin(phi);
			var cosPhi = Math.cos(phi);

			var x = cosPhi * sinTheta;
			var y = cosTheta;
			var z = sinPhi * sinTheta;

			this.vertices.push(x, y, z);

			var normalX = x;
			var normalY = y;
			var normalZ = z;
			var length = Math.sqrt(normalX*normalX + normalY*normalY + normalZ*normalZ);
			normalX /= length;
			normalY /= length;
			normalZ /= length;

			if (this.inverted)
				this.normals.push(-normalX, -normalY, -normalZ);
			else
				this.normals.push(normalX, normalY, normalZ);

			var s = stack / this.stacks;
			var t = slice / this.slices;
			this.texCoords.push(s, t);
		}
		}

		for (var slice = 0; slice < this.slices; slice++) {
			for (var stack = 0; stack < this.stacks; stack++) {
				if (this.inverted){
					var first = (slice * (this.stacks + 1)) + stack;
					var second = first + this.stacks + 1;
				
					this.indices.push(first, second, first + 1);
					this.indices.push(second, second + 1, first + 1);
				}
				else{
					var first = (slice * (this.stacks + 1)) + stack;
					var second = first + this.stacks + 1;
				
					this.indices.push(first + 1, second, first);
					this.indices.push(first + 1, second + 1, second);
				}
			}
		}
		
		this.primitiveType = this.scene.gl.TRIANGLES;




		this.initGLBuffers();
	}
	
}