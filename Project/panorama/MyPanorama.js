import {CGFobject, CGFtexture, CGFappearance} from '../../lib/CGF.js';
import { MySphere } from "../objects/MySphere.js";
/**
 * MyPanorama
 * @constructor
 * @param scene - Reference to MyScene object
 * @param texture - Reference to MyPanorama texture
 */
export class MyPanorama extends CGFobject {
	constructor(scene, texture) {
		super(scene);

        
        this.sphere = new MySphere(scene,20,20, true);

        this.texture = texture;

        this.appearance = new CGFappearance(scene);
        this.appearance.setTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');
        
	}
    
    display(){
      this.scene.pushMatrix();
      this.appearance.apply();
      this.scene.scale(200,200,200);
      this.sphere.display();
      this.scene.popMatrix();
    }
}