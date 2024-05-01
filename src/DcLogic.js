import * as t from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as dc from 'dvijcock';
import models from "./models.js";

export default class{
	constructor(){}
	init(){
		let dcWorld = this.dcWorld;

		dcWorld.camera = new t.PerspectiveCamera( 65, 1/*dc will set acpect*/, 0.1, 30000 );
		dcWorld.camera.position.set(20,7,0);

		this.controls = new OrbitControls(dcWorld.camera, dcWorld.renderer.domElement);
		this.controls.enablePan = false;

		dcWorld.scene.add(dcWorld.camera);
		dcWorld.scene.add(dc.defaultLights);

		dcWorld.add(models.dvijcock.scene);
	}
	destroy(){
		this.controls.dispose();
	}
}
