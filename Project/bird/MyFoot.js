import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyTriangleSmall } from "../objects/MyTriangleSmall.js";
import { MyHalfPrismCover } from "../objects/MyHalfPrismCover.js";
import { MyQuarterPrismWithCover } from "../objects/MyQuarterPrismWithCover.js";


/**
 * MyFoot
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyFoot extends CGFobject {
    constructor(scene) {
        super(scene);
        this.halfHexa = new MyHalfPrismCover(scene, 3);
        this.triangle = new MyTriangleSmall(scene);
        this.quarterPrismWithCover = new MyQuarterPrismWithCover(scene, 20, 20);

        this.initMaterials(scene);
    }

    initMaterials(scene){
		
		this.whiteAppearance = new CGFappearance(scene);
		this.whiteAppearance.setDiffuse(1, 1, 1, 1);

        this.orangeRedAppearance = new CGFappearance(scene);
        
		this.orangeRedAppearance.setAmbient(1, 0.27, 0, 1);
		this.orangeRedAppearance.setDiffuse(1, 0.27, 0, 1);

        this.orangeAppearance = new CGFappearance(scene);
		this.orangeAppearance.setAmbient(1, 0.547, 0, 0);
		this.orangeAppearance.setAmbient(1, 0.547, 0, 0);

	}

    
    display() {
        this.scene.scale(0.25, 0.5, 0.6);

        this.scene.pushMatrix();
        this.orangeRedAppearance.apply();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0, -1);
        this.halfHexa.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.whiteAppearance.apply();
        this.scene.translate(0.49, 0, 0.82);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(Math.PI/5, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.whiteAppearance.apply();
        this.scene.translate(-0.49, 0, 0.82);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(-Math.PI/5, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.whiteAppearance.apply();
        this.scene.translate(-0.93, 0, 0.05);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(-Math.PI/2 - Math.PI/10, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.whiteAppearance.apply();
        this.scene.translate(0.93, 0, 0.05);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(Math.PI/2 + Math.PI/10, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.orangeRedAppearance.apply();
        this.scene.rotate(Math.PI/6, 0, 1, 0);  
        this.scene.scale(0.1, 0.05, 0.95);
        this.quarterPrismWithCover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.orangeRedAppearance.apply();
        this.scene.rotate(Math.PI/6, 0, 1, 0);  
        this.scene.scale(0.1, 0.05, 0.95);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.quarterPrismWithCover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.orangeRedAppearance.apply();
        this.scene.rotate(-Math.PI/6, 0, 1, 0);  
        this.scene.scale(0.1, 0.05, 0.95);
        this.quarterPrismWithCover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.orangeRedAppearance.apply();
        this.scene.rotate(-Math.PI/6, 0, 1, 0);  
        this.scene.scale(0.1, 0.05, 0.95);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.quarterPrismWithCover.display();
        this.scene.popMatrix();
        

    }
    
}