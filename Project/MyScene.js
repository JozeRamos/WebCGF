import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyTerrain } from "./terrain/MyTerrain.js";
import { MySphere } from "./objects/MySphere.js";
import { MyPanorama } from "./panorama/MyPanorama.js";
import { MyBird } from "./bird/MyBird.js";
import { MyBirdAnimated } from "./bird/MyBirdAnimated.js";
import { MyBirdEgg } from "./Nest&Egg/MyBirdEgg.js";
import { MyNest } from "./Nest&Egg/MyNest.js";
import { MyBillboard } from "./tree/MyBillboard.js";
import { MyTreeGroupPatch } from "./tree/MyTreeGroupPatch.js";
import { MyTreeRowPatch } from "./tree/MyTreeRowPatch.js";

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

    //Initialize scene objects and textures
    this.axis = new CGFaxis(this);
    
    this.terrain = new MyTerrain(this);
    this.sphere = new MySphere(this,20, 20, true);
    this.bird = new MyBird(this);

    this.textEgg = new CGFtexture(this, "images/egg.jpg");
    this.eggs = []

    for (let i = 0; i < 4; i++) {
      this.egg = new MyBirdEgg(this, 5, 5, this.textEgg);
      this.egg.randomPosition();
      this.eggs.push(this.egg);
    }

    this.textNest = new CGFtexture(this, "images/nest.jpg");
    this.nest = new MyNest(this, 5, 5, this.textNest);

    this.birdAnimated = new MyBirdAnimated(this, this.nest);
    
    this.textPanorama = new CGFtexture(this, "images/panorama4.jpg");    
    this.panorama = new MyPanorama(this, this.textPanorama);

    this.textBillboard1 = new CGFtexture(this, "images/billboardtree1.png");
    this.textBillboard2 = new CGFtexture(this, "images/billboardtree2.png");
    this.textBillboard3 = new CGFtexture(this, "images/billboardtree3.png");
    this.billboard = new MyBillboard(this, this.textBillboard1);

    this.treeGroupPatch = new MyTreeGroupPatch(this, this.textBillboard1, this.textBillboard2, this.textBillboard3, 100, -67.9, -10);
    this.treeRowPatch = new MyTreeRowPatch(this, this.textBillboard1, this.textBillboard2, this.textBillboard3, 80, -67.9, -10);


    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;

    this.enableTextures(true);

    // animation
    this.setUpdatePeriod(50); // **at least** 50 ms between animations

    this.appStartTime = Date.now(); // current time in milisecs
  }

  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(0.5, 0.5, 0.5, 0.1);
    this.lights[0].enable();
    this.lights[0].update();

    this.lights[1].setPosition(-15, 0, 5, 1);
    this.lights[1].setDiffuse(0.5, 0.5, 0.5, 0.1);
    this.lights[1].enable();
    this.lights[1].update();


  }
  initCameras() {
    this.camera = new CGFcamera(
      1.0,
      0.1,
      1000,
      vec3.fromValues(50, 10, 15),
      vec3.fromValues(90, -50, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

  update(t)
  {
    var text="Keys pressed: ";
    var keysPressed=false;
    // Check for key codes e.g. in https://keycode.info/
    if (this.gui.isKeyPressed("KeyW")) {
      text+=" W ";
      this.birdAnimated.accelerate(0.1);
      keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyS")) {
      text+=" S ";
      this.birdAnimated.accelerate(-0.1);
      keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyA")) {
      text+=" A ";
      this.birdAnimated.turn(0.1);
      keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyD")) {
      text+=" D ";
      this.birdAnimated.turn(-0.1);
      keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyR")) {
      text+=" R ";
      this.birdAnimated.reset();
      keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyP")) {
      text+=" P ";
      this.birdAnimated.descend();
      keysPressed=true;
    }
    if (this.gui.isKeyPressed("KeyO")) {
      text+=" O ";
      this.birdAnimated.releaseEgg();
      keysPressed=true;
    }
    if (keysPressed)
      console.log(text);

    // Continuous animation based on current time and app start time 
    var timeSinceAppStart=(t-this.appStartTime)/1000.0;

    // delegate animations to objects
    this.birdAnimated.update(timeSinceAppStart, this.eggs);
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

    this.lights[0].update();
    this.lights[1].update();


    // Draw axis
    if (this.displayAxis) this.axis.display();

    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    

    // ---- BEGIN Primitive drawing section
    
    this.pushMatrix();
    this.treeRowPatch.display();
    this.popMatrix();

    this.pushMatrix();
    this.treeGroupPatch.display();
    this.popMatrix();

    this.pushMatrix();
    this.nest.display();
    this.popMatrix();

    this.pushMatrix();
    this.panorama.display();
    this.popMatrix();

    for (let i = 0; i < 4; i++){
      this.pushMatrix();
      this.eggs[i].display();
      this.popMatrix();
    }

    this.pushMatrix();
    this.birdAnimated.upScale(this.scaleFactor);
    this.birdAnimated.display();
    this.popMatrix();

    
    this.pushMatrix();
    this.terrain.display();
    this.popMatrix();


    this.setActiveShader(this.defaultShader);
    // ---- END Primitive drawing section
  }
}
