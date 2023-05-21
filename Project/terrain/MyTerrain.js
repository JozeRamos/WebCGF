import {CGFobject, CGFtexture, CGFappearance, CGFshader} from '../../lib/CGF.js';
import { MyPlane } from "../objects/MyPlane.js";
/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTerrain extends CGFobject {
	constructor(scene) {
		super(scene);

		this.plane = new MyPlane(scene, 30);

		this.textureTerrain = new CGFtexture(scene, "images/terrain.jpg");
		this.textHeightMap = new CGFtexture(scene, "images/heightmap.jpg");
		this.textAltimetry = new CGFtexture(scene, "images/altimetry.png");

		this.appearance = new CGFappearance(scene);
		this.appearance.setTexture(this.textureTerrain);
		this.appearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
		
		this.terrainShader = new CGFshader(scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");

		this.terrainShader.setUniformsValues({ normScale: 2 });
		this.terrainShader.setUniformsValues({ uSampler2: 1 });
		this.terrainShader.setUniformsValues({ uSampler3: 2 });
		
	}

	display(){
        this.scene.pushMatrix();
		this.appearance.apply();
		this.scene.setActiveShader(this.terrainShader);
		this.textHeightMap.bind(1);
		this.textAltimetry.bind(2);
		this.scene.translate(0,-100,0);
		this.scene.scale(400,400,400);
		this.scene.rotate(-Math.PI/2.0,1,0,0);
		this.plane.display();
		this.scene.popMatrix();
    }
}