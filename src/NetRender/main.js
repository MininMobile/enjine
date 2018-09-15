const Renderer = require("../Base/Render/main");

/**
 * NetRenderer Class
 *
 * @class NetRenderer
 * @extends {Renderer}
 */
class NetRenderer extends Renderer {
	/**
	 * NetRenderer Class Constructor
	 *
	 * @param {boolean} [initMessage=true]
	 * @memberof NetRenderer
	 */
	constructor(initMessage = true) {
		super();

		this.type = "NetRenderer";

		if (initMessage) console.log(`Succesfully Initialized ${this.type}`)
	}
}

module.exports = exports = NetRenderer;