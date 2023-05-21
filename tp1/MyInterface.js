import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        
        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        
        //Checkbox element in GUI to display Diamond
        this.gui.add(this.scene, 'obj1').name('Diamond');

        //Checkbox element in GUI to display Triangle
        this.gui.add(this.scene, 'obj2').name('Triangle');

        //Checkbox element in GUI to display Paralleologram
        this.gui.add(this.scene, 'obj3').name('Parallelogram');

        //Checkbox element in GUI to display Paralleologram
        this.gui.add(this.scene, 'obj4').name('TriangleSmall');

        //Checkbox element in GUI to display Paralleologram
        this.gui.add(this.scene, 'obj5').name('TriangleBig');

        return true;
    }
}