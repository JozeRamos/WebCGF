import {CGFobject} from '../../lib/CGF.js';
/**
 * MyPrismCover
 * @constructor
 * @param scene - Reference to MyScene object
 * @param sides - Reference to MyPrismCover number of sides
 */
export class MyPrismCover extends CGFobject {
    constructor(scene, sides) {
        super(scene);
        
        this.slices = sides;

        this.initBuffers();
    }

    
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 2*(Math.PI/this.slices);
        
        this.vertices.push(0,0,1);
        this.normals.push(0,0,1);

        for(var i = 0; i <= this.slices; i++){
            var x = Math.cos(ang*i);
            var y = Math.sin(ang*i);
            this.vertices.push(x,y,1);    
            this.normals.push(0,0,1);
        }
        
        for(var i = 0; i < this.slices; i ++){
            this.indices.push(i+2,0,i+1);
            this.indices.push(0,i+2,i+1);
            
        }

        

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
    
}