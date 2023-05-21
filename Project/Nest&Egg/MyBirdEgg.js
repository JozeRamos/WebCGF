import {CGFobject, CGFappearance} from '../../lib/CGF.js';
import { MySphere } from "../objects/MySphere.js";
/**
 * MyBirdEgg
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to MyBirdEgg number of slices (bigger number will be more detailled)
 * @param stacks - Reference to MyBirdEgg number of stacks (bigger number will be more detailled)
 * @param texture - Reference to MyBirdEgg texture
 * @param x - Reference to MyBirdEgg x position
 * @param y - Reference to MyBirdEgg y position
 */
export class MyBirdEgg extends CGFobject {
	constructor(scene, slices, stacks, texture, x = 0, z = 0) {
		super(scene);

        this.sphere = new MySphere(scene, slices, stacks, false);

        this.texture = texture;

        this.appearance = new CGFappearance(scene);
        this.appearance.setTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        this.x = x;
        this.z = z;
        this.y = -67.8;
        this.rotation = 0;
	}

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getZ(){
        return this.z;
    }

    follow(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    randomPosition(){
        if (Math.random() > 0.5){
            this.x = 85 + Math.random() * 35;
            this.z = -35 + Math.random() * 100;
        }
        else {            
            this.x = 85 - Math.random() * 100;
            this.z = 35 + Math.random() * 40;
        }
        this.rotation = Math.random() * (Math.PI/4 - 1) + 1;
    }
    
    
    display(){
        this.scene.pushMatrix();
        this.appearance.apply();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.rotation, 1, 0, 0);
        this.scene.scale(0.3,0.4,0.3);

        this.sphere.display();
        this.scene.popMatrix();
    }
	
	
}