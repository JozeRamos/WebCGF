import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyPrismWithCover } from "../objects/MyPrismWithCover.js";


/**
 * MyFeather
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyFeather extends CGFobject {
    constructor(scene) {
        super(scene);
        this.prismWithCover = new MyPrismWithCover(scene, 3, 10);

        this.initMaterials(scene);
    }

    initMaterials(scene){
		
		this.whiteAppearance = new CGFappearance(scene);
        this.whiteAppearance.setAmbient(1, 1, 1, 1);
		this.whiteAppearance.setDiffuse(1, 1, 1, 1);
	}

    
    display() {
        this.scene.pushMatrix();
        this.whiteAppearance.apply();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.4, 0.20, 0.10);
        this.prismWithCover.display();
        this.scene.popMatrix();
    }
    
}