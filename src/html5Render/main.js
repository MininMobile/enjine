const Renderer = require("../Base/Render/main");

/**
 * html5Renderer Class
 */
class html5Renderer extends Renderer {
	/**
	 * html5Renderer Class Constructor
	 * @param {bool} initMessage Display Message on Initialization
	 */
	constructor(initMessage = true) {
		super();

		this.type = "html5Renderer";

		if (initMessage) console.log(`Succesfully Initialized ${this.type}`)
	}
}

module.exports = html5Renderer;