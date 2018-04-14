const Renderer = require("../Base/Render/main")

/**
 * Runtime Class
 */
class Runtime {
	/**
	 * Runtime Class Constructor
	 * @param {Renderer} renderer Prefered Renderer
	 * @param {number} fps Frames Per Second
	 */
	constructor(renderer, fps = 60) {
		this.fps = fps;
		this.renderer = renderer;

		// Create Events
		this.events = { };

		this.events.update = () => { };
		this.events.fixedUpdate = () => { };
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