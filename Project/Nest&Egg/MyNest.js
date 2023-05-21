import {CGFobject, CGFappearance} from '../../lib/CGF.js';
import { MyHalfSphere } from "../objects/MyHalfSphere.js";
/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to MyNest number of slices (bigger number will be more detailled)
 * @param stacks - Reference to MyNest number of stacks (bigger number will be more detailled)
 * @param texture - Reference to MyNest texture
 */
export class MyNest extends CGFobject {
	constructor(scene, slices, stacks, texture) {
		super(scene);

        this.halfsphere = new MyHalfSphere(scene, slices, stacks, false);
        this.halfsphere1 = new MyHalfSphere(scene, slices, stacks, true);

        this.appearance = new CGFappearance(scene);
        this.appearance.setTexture(texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        this.eggs = [];
	}

    addEggs(v){
        this.eggs.push(v);
    }

    takeEggs(){       
        if(this.eggs.length > 0) 
            return this.eggs.pop();
    }

    getEggsLength(){
        return this.eggs.length;
    }
    
    display(){
        this.scene.pushMatrix();
        this.appearance.apply();
        this.scene.translate(95,-66.5,0);
        this.scene.scale(3,1.5,3);
        this.scene.rotate(Math.PI/2, 1, 0, 0);

        for (let i = 0; i < this.eggs.length; i++){
            switch (i){
                case 0:{                    
                    this.eggs[i].follow(94,-67,2);
                    break;
                }
                case 1:{
                    this.eggs[i].follow(95,-67,-1);
                    break;
                }
                case 2:{
                    this.eggs[i].follow(94,-67,-2);
                    break;
                }
                case 3:{
                    this.eggs[i].follow(97,-67,1);
                    break;
                }
            }
        }

        this.halfsphere.display();
        this.halfsphere1.display();
        this.scene.popMatrix();
    }
	
	
}