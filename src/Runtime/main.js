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
	}
}

module.exports = Runtime;