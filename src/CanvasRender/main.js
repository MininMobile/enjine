const Renderer = require("../Base/Render/main");

/**
 * CanvasRenderer Class
 */
class CanvasRenderer extends Renderer {
	/**
	 * CanvasRenderer Class Constructor
	 * @param {bool} initMessage Display Message on Initialization
	 */
	constructor(initMessage = true) {
		super();

		this.type = "CanvasRenderer";

		if (initMessage) console.log(`Succesfully Initialized ${this.type}`)
	}
}

module.exports = CanvasRenderer;