const Renderer = require("../Base/Render/main");
const moment = require("moment");

/**
 * Runtime Class
 */
class Runtime {
	/**
	 * Runtime Class Constructor
	 * @param {Renderer} renderer Prefered Renderer
	 * @param {number} fps Frames Per Second
	 * @param {number} pcps Physics Calculations Per Second
	 */
	constructor(renderer, fps = 60, pcps = 60) {
		moment.locale();
		this.fps = fps;
		this.pcps = pcps;
		this.renderer = renderer;

		// Create Functions
		this.f = { };
		this.f.update = () => {
			this.events.update();
			this.renderer.Render();
		}
		this.f.log = (text) => console.log(text);
		this.f.tog = (text) => console.log(moment().format('LTS') + ' | ' + text);
		this.f.err = (error) => console.error(error);

		// Create Events
		this.events = { };
		this.events.update = () => { }; setInterval(this.f.update, 1000/this.fps);
		this.events.fixedUpdate = () => { }; setInterval(this.events.fixedUpdate, 1000/this.pcps);
	}
	
	/**
	 * Set a Callback for an Event
	 * @param {string} event 
	 * @param {function} callback 
	 */
	on(event, callback) {
		switch (event) {
			case "update":
				this.events.update = callback;
				break;
			case "fixedUpdate":
				this.events.fixedUpdate = callback;
				break;
		}
	}
}

module.exports = Runtime;