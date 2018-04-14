const Renderer = require("../Base/Render/main");

/**
 * NetRenderer Class
 */
class NetRenderer extends Renderer {
	/**
	 * NetRenderer Class Constructor
	 * @param {bool} initMessage Display Message on Initialization
	 */
	constructor(initMessage = true) {
		super();

		this.type = "NetRenderer";

		if (initMessage) console.log(`Succesfully Initialized ${this.type}`)
	}
}

module.exports = NetRenderer;