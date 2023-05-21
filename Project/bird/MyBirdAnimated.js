import { MyWingless } from "./MyWingless.js";
import { MyWing1 } from "./MyWing1.js";
import { MyWing2 } from "./MyWing2.js";

/**
 * MyBirdAnimated
 * @constructor
 * @param scene - Reference to MyScene object
 * @param nest - Reference to MyNest object
 * @param s - Reference to MyBirdAnimated start animation
 * @param e - Reference to MyBirdAnimated end time animation
 * @param st - Reference to MyBirdAnimated start time animation
 * @param d - Reference to MyBirdAnimated duration of the animation
 * @param axisY - Reference to MyBirdAnimated rotation
 * @param v - Reference to MyBirdAnimated velocity
 * @param x - Reference to MyBirdAnimated x location
 * @param y - Reference to MyBirdAnimated y location
 * @param z - Reference to MyBirdAnimated z location
 */

export class MyBirdAnimated
{
    constructor(scene, nest, s=0, e=5, st=3, d=2, axisY = 0, v = 0, x = 90, y = -50, z = 0)
    {
        this.scene = scene;

        this.nest = nest;

        this.birdWingless = new MyWingless(scene);
        this.wing1 = new MyWing1(scene);
        this.wing2 = new MyWing2(scene);
        
        this.scene.speedFactor = 0.1;
        this.startVal=s;
        this.endVal=e;
        this.animStartTimeSecs=st;
        this.animDurationSecs=d;
        this.length=(this.endVal-this.startVal);

        this.animVal = this.startVal;

        this.startValOscilation=0;
        this.endValOscilation=1;
        this.elapsedTimeSecsOscilation = undefined;
        this.deltaTOscilation = undefined;
        this.animDurationSecsOscilation = 1;
        this.lengthOscilation=(this.endValOscilation-this.startValOscilation);

        this.animValOscilation = this.startValOscilation;

        this.startValDescending = 0;
        this.endValDescending = 2;
        this.animStartTimeSecsDescending = 0;
        this.elapsedTimeSecsDescending = undefined;
        this.animDurationSecsDescending = 2;
        this.lengthDescending = 2;
        this.deltaT = undefined;

        this.animValDescending = this.startValDescending;

        this.startValDropEgg = 0;
        this.endValDropEgg = 2;
        this.animStartTimeSecsDropEgg = 0;
        this.elapsedTimeSecsDropEgg = undefined;
        this.animDurationSecsDropEgg = 2;
        this.lengthDropEgg = 1;
        this.deltaTDropEgg = undefined;

        this.animValDropEgg = this.startValDropEgg;

        this.axisY = axisY;
        this.x = x;
        this.y = y;
        this.z = z;
        this.v = v;
        this.descending = false;

        this.gotEgg = undefined;
        this.egg = true;
        this.dropEgg = false;
        this.scale = 1;

        
        this.xEgg = undefined;
        this.zEgg = undefined;
        this.axisEgg = undefined;
        this.vEgg = undefined;
        this.speedFactorEgg = undefined;
    }


    update(timeSinceAppStart, eggs)
    {
      // Animation based on elapsed time since animation start
      var elapsedTimeSecs=timeSinceAppStart-this.animStartTimeSecs;
    
      this.animDurationSecs = 2 - 3 * (this.v * this.scene.speedFactor);


      this.animVal = Math.sin(elapsedTimeSecs/this.animDurationSecs*this.length);

      // if the bird is descending (User pressed "P") bird descends to the ground.
      if (this.descending) {
        
        if (this.elapsedTimeSecsDescending == undefined){
            this.elapsedTimeSecsDescending = timeSinceAppStart;
            this.egg = true;
        }   
            
          this.deltaT=timeSinceAppStart-this.elapsedTimeSecsDescending;
          this.animValDescending=Math.cos(Math.PI * (this.deltaT)/this.animDurationSecsDescending) * this.lengthDescending;
          // descends the bird
          if (this.deltaT <= this.animDurationSecsDescending/2 && this.y > -65.8) {
            this.y -= this.animValDescending;
          }
          // Ascends the bird
          else if (this.deltaT >= this.animDurationSecsDescending/2 && this.deltaT <= this.animDurationSecsDescending){
            if (this.y - this.animValDescending > -50)
                this.y = -50;
            else
                this.y -= this.animValDescending;
          }
          // end animation
          else if (this.deltaT > this.animDurationSecsDescending){
            this.descending = false;
            this.y = -50;
          }
          
          const tolerance = 5;
          // when the bird hits -64 in the y axis check if it catched a egg
          if (this.y <= -64.0 && this.egg && this.gotEgg == undefined){
            this.egg = false;
            for (var i = 0; i < eggs.length; i++){
                if (this.x <= eggs[i].getX() + tolerance && this.x >= eggs[i].getX() - tolerance){
                    if (this.z <= eggs[i].getZ() + tolerance && this.z >= eggs[i].getZ() - tolerance)
                        this.gotEgg = eggs[i];
                }
            }
            if (this.x > 90 && this.x < 100){
                if (this.z > -5 && this.z < 5){
                    console.log('here');
                    if(this.nest.getEggsLength() > 0){
                        this.gotEgg = this.nest.takeEggs();
                        eggs.push(this.gotEgg);
                    }
                }
            }
          }
        
        // if it has a egg, the egg will follow the bird bellow it.
        if (this.gotEgg != undefined){
            this.gotEgg.follow(this.x, this.y-1, this.z);
        }
      }

      // if the bird is not descending (is in the air)
      else{
        if (this.elapsedTimeSecsOscilation == undefined){
            this.elapsedTimeSecsOscilation = timeSinceAppStart;
        }
        this.deltaTOscilation=timeSinceAppStart-this.elapsedTimeSecsOscilation; 
        this.animValOscilation = Math.sin(Math.PI * (this.deltaTOscilation)/this.animDurationSecsOscilation)/5;

        // oscilates the bird up and down
        this.y += this.animValOscilation;

        // if the bird has a egg
        if (this.gotEgg != undefined){

            // if the bird is not dropping the egg, it follows it bellow the bird
            if(!this.dropEgg)
                this.gotEgg.follow(this.x, this.y-1, this.z);
            

            // if the bird drops the egg (User pressed "O")
            else if (this.dropEgg) {
                if (this.elapsedTimeSecsDropEgg == undefined){
                    this.elapsedTimeSecsDropEgg = timeSinceAppStart;                    
                    this.xEgg = this.x;
                    this.zEgg = this.z;
                    this.axisEgg = this.axisY;
                    this.vEgg = this.v;
                    this.speedFactorEgg = this.scene.speedFactor;
                    this.animValDropEgg = 0;
                }   

                
                    this.xEgg += Math.sin(this.axisEgg) * this.vEgg * this.speedFactorEgg;
                    this.zEgg += Math.cos(this.axisEgg) * this.vEgg * this.speedFactorEgg;
                    
                    
                  this.deltaTDropEgg=timeSinceAppStart-this.elapsedTimeSecsDropEgg;
                  // drop the egg with the rigth velocity according to gravity
                  this.animValDropEgg += (this.deltaT)/this.animDurationSecsDropEgg * 9.8 * 0.01;
                // drop the egg
                if (this.gotEgg.getY() + this.animValDropEgg > -65)
                  this.gotEgg.follow(this.xEgg, this.gotEgg.getY() - this.animValDropEgg, this.zEgg);
                else {
                    // drop the egg on the ground
                    this.gotEgg.follow(this.xEgg, -66.9, this.zEgg);

                    // if the egg falls in the nest add its reference to the nest object
                    if (this.gotEgg.getX() > 90 && this.gotEgg.getX() < 100){
                        if (this.gotEgg.getZ() > -5 && this.gotEgg.getZ() < 5){
                            this.nest.addEggs(this.gotEgg);
                        }
                    }

                    this.elapsedTimeSecsDropEgg = undefined;
                    this.gotEgg = undefined;
                    this.dropEgg = false;
                }
              }
      }
    }

      // update the bird position
      this.x += Math.sin(this.axisY) * this.v * this.scene.speedFactor;
      this.z += Math.cos(this.axisY) * this.v * this.scene.speedFactor;   
    }

    releaseEgg(){
        if (this.gotEgg != undefined)
            this.dropEgg = true;
    }

    turn(v) {
        this.axisY += v;
    }

    descend() {
        this.descending = true;
        if (this.elapsedTimeSecsDescending == undefined || this.deltaT > this.animDurationSecsDescending)
            this.elapsedTimeSecsDescending = undefined;
    }

    accelerate(v){
        if (this.v + v < 0)
            this.v = 0;
        else if (this.v + v > 3)
            this.v = 3;
        else
            this.v += v;
    }

    reset(){
        this.axisY = 0;
        this.v = 0;
        this.x = 90;
        this.y = -50;
        this.z = 0;
        this.descending = false;
    }

    upScale(v){
        this.scale = v;
    }

    display()
    {

        
        this.scene.pushMatrix();

		this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.axisY, 0, 1, 0);
        
        this.scene.scale(this.scale,this.scale,this.scale);


        this.birdWingless.display();

        this.scene.pushMatrix();        
		this.scene.translate(0.65,0,0.45);
        this.scene.rotate(Math.PI/2, 0, 0, 1);

        // animates one of the wings flapping
        if(this.animVal > 0.0){

            this.scene.translate(-this.animVal/5, this.animVal/8.5,0);
            this.scene.rotate(-this.animVal*1.5, 0, 0, 1);
            
        }  
        this.wing1.display();    
        this.scene.popMatrix();

        
        this.scene.pushMatrix();     
		this.scene.translate(-0.65,0,0.45);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);

        // animates one of the wings flapping
        if(this.animVal > 0.0){

            this.scene.translate(this.animVal/5, this.animVal/8.5,0);
            this.scene.rotate(this.animVal*1.5, 0, 0, 1);
            
        }  
		this.wing2.display();
        this.scene.popMatrix();


        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}