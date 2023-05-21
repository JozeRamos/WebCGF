import {CGFobject} from '../../lib/CGF.js';
import { MyBillboard } from "./MyBillboard.js";

/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 * @param texture1 - Reference to MyTreeRowPatch one of the tree textures
 * @param texture2 - Reference to MyTreeRowPatch one of the tree textures
 * @param texture3 - Reference to MyTreeRowPatch one of the tree textures
 * @param x - Reference to MyTreeRowPatch x location
 * @param y - Reference to MyTreeRowPatch y location
 * @param z - Reference to MyTreeRowPatch z location
 */
export class MyTreeRowPatch extends CGFobject {
	constructor(scene, texture1, texture2, texture3, x, y, z) {
		super(scene);

        this.distance = 10;
        this.billboard1 = new MyBillboard(scene, texture1);
        this.billboard2 = new MyBillboard(scene, texture2);
        this.billboard3 = new MyBillboard(scene, texture3);
        
        this.x = x;
        this.y = y;
        this.z = z;
        
        this.positionsX = [];
        this.positionsZ = [];
        this.scaleFactor = [];
        this.textures = [];

        this.getRandomArbitrary();

	}

    getRandomArbitrary() {
        for(let i = 0; i < 6; i++){
            var randomNumber1 = Math.random() * (4.0 - 0.1) + 0.1;
            var randomNumber2 = Math.random() * (4.0 - 0.1) + 0.1;
            var randomNumber3 = Math.random() * (15.0 - 5.0) + 5.0;
            var randomNumber4 = Math.floor(Math.random() * 3);

            this.positionsX.push(this.x + randomNumber1);
            this.positionsZ.push(this.z + randomNumber2);
            this.scaleFactor.push(randomNumber3);
            this.textures.push(randomNumber4);

            this.z += this.distance;
        }
    }

	display(){
        for(let i = 0; i < 6; i++){
            this.scene.pushMatrix();
            switch (this.textures[i]){
                case 0:
                    this.billboard1.display(this.positionsX[i], this.y, this.positionsZ[i], this.scaleFactor[i]);
                    break;
                case 1:
                    this.billboard2.display(this.positionsX[i], this.y, this.positionsZ[i], this.scaleFactor[i]);
                    break;
                case 2:
                    this.billboard3.display(this.positionsX[i], this.y, this.positionsZ[i], this.scaleFactor[i]);
                    break;
            }            
            this.scene.popMatrix();
        }
	}

}