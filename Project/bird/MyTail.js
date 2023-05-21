import {CGFobject} from '../../lib/CGF.js';
import { MyRect } from "../objects/MyRect.js";
import { MyTriangle } from "../objects/MyTriangle.js";

/**
 * MyTail
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTail extends CGFobject {
    constructor(scene) {
        super(scene);
        this.rect = new MyRect(scene, 0.47, 0.33);
        this.triangle = new MyTriangle(scene);
    }

    
    display() {
        this.scene.pushMatrix();
		this.scene.rotate(Math.PI/4, 1, 0, 0);
		this.rect.display();
		this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(0.47, 0, 0);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.235, 0.235, 1);
		this.triangle.display();
		this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(-0.47, 0, 0);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.235, 0.235, 1);
		this.triangle.display();
		this.scene.popMatrix();


    }
    
}