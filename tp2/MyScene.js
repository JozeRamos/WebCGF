import { CGFscene, CGFcamera, CGFaxis } from "../lib/CGF.js";
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyUnitCube } from "./MyUnitCube.js";
import { MyUnitQuad } from "./MyUnitQuad.js";
import { MyTangram } from "./MyTangram.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);
    
    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.diamond = new MyDiamond(this);
    this.triangleSmall = new MyTriangleSmall(this);
    this.triangle = new MyTriangle(this);
    this.triangleBig = new MyTriangleBig(this);
    this.parallelogram = new MyParallelogram(this);
    this.unitCube = new MyUnitCube(this);
    this.quad = new MyUnitQuad(this);
    this.tangram = new MyTangram(this);

    //Objects connected to MyInterface
    this.obj1 = false;
    this.displayAxis = true;
    this.scaleFactor = 1;
  }
  initLights() {
    this.lights[0].setPosition(15, 2, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      0.4,
      0.1,
      500,
      vec3.fromValues(15, 15, 15),
      vec3.fromValues(0, 0, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }
  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    this.setDefaultAppearance();

    var sca = [
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
    ];

    this.multMatrix(sca);


    this.pushMatrix();
    this.rotate(-Math.PI/2,1,0,0);
    this.translate(3,-3,0.1);

  this.tangram.display();

/*

    //tangram

    var m = [
      Math.cos(Math.PI/4),-Math.sin(Math.PI/4),0,0,
      Math.cos(Math.PI/4),Math.cos(Math.PI/4),0,0,
      0,0,1,0,
      0.7,0.7,0,1
    ];

    
    
    this.pushMatrix();
    this.multMatrix(m);
    this.diamond.display();
    this.popMatrix();

    
    this.pushMatrix();
    this.rotate(-Math.PI/4,0,0,1);
    this.translate(-1,0,0);
    this.triangleSmall.display();
    this.popMatrix();

    this.pushMatrix();
    this.rotate(-3*Math.PI/4,0,0,1);
    this.translate(1,-1,0);
    this.triangle.display();
    this.popMatrix();

    this.pushMatrix();
    this.rotate(Math.PI/4,0,0,1);
    this.translate(-2,1,0)
    this.triangleSmall.display();
    this.popMatrix();

    this.pushMatrix();
    this.rotate(Math.PI,0,1,0);
    this.rotate(-3*Math.PI/4,0,0,1);
    this.translate(0,-2,0);
    this.parallelogram.display();
    this.popMatrix();

    this.pushMatrix();    
    this.rotate(-Math.PI/4,0,0,1);
    this.translate(1,-1,0);
    this.triangleBig.display();
    this.popMatrix();

    this.pushMatrix();
    this.rotate(3*Math.PI/4,0,0,1);
    this.translate(-1,1,0);
    this.triangleBig.display();
    this.popMatrix();

    //Cube
    */
    this.pushMatrix();    
    this.translate(0,0,-0.6);
    this.scale(6,6,1);
    /*this.unitCube.display();
    this.popMatrix();*/

    //Quad
    this.quad.display();
    this.popMatrix();

    this.popMatrix();



    // ---- BEGIN Primitive drawing section

    // ---- END Primitive drawing section
  }
}
