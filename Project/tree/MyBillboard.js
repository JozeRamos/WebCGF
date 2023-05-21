import {CGFobject, CGFappearance} from '../../lib/CGF.js';
import { MyQuad } from "../objects/MyQuad.js";

/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 * @param texture - Reference to MyBillboard texture
 */
export class MyBillboard extends CGFobject {
    constructor(scene, texture) {
        super(scene);
        this.quad = new MyQuad(scene);

        this.texture = texture;

        this.appearance = new CGFappearance(scene);
        this.appearance.setTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');
        this.appearance.setAmbient(2.0, 2.0, 2.0, 1.0);
    }

    display(x, y, z, scaleFactor) {
        this.scene.pushMatrix();

        // Calcula a orientação do quad em relação à câmera
        const cameraPosition = this.scene.camera.position;
        const billboardToCamera = vec3.fromValues(cameraPosition[0] - x, cameraPosition[1] - y, cameraPosition[2] - z);
        const billboardToCameraNormalized = vec3.normalize(vec3.create(), billboardToCamera);

        // Calcula a rotação necessária para orientar o quad para a câmera
        const angle = Math.atan2(-billboardToCameraNormalized[0], -billboardToCameraNormalized[2]);

        this.scene.translate(x, y, z);
        this.scene.rotate(angle, 0, 1, 0);

        this.scene.scale(scaleFactor, scaleFactor, scaleFactor);
        this.scene.translate(0,0.5,0);

        this.appearance.apply();

        this.quad.display();

        this.scene.popMatrix();
    }
}
    