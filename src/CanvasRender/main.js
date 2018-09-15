const Renderer = require("../Base/Render/main");

/**
 * CanvasRenderer Class
 *
 * @class CanvasRenderer
 * @extends {Renderer}
 */
class CanvasRenderer extends Renderer {
	/**
	 * CanvasRenderer Class Constructor
	 *
	 * @param {boolean} [initMessage=true]
	 * @memberof CanvasRenderer
	 */
	constructor(initMessage = true) {
		super();

		this.type = "CanvasRenderer";

		if (initMessage) console.log(`Succesfully Initialized ${this.type}`)
	}
}

module.exports = exports = CanvasRenderer;