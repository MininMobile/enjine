const Renderer = require("../Base/Render/main");

/**
 * TextModeRenderer Class
 */
class TextModeRenderer extends Renderer {
	/**
	 * TextModeRenderer Class Constructor
	 * @param {bool} initMessage Display Message on Initialization
	 */
	constructor(initMessage = true) {
		super();

		this.type = "TextModeRenderer";

		if (initMessage) console.log(`Succesfully Initialized ${this.type}`)
	}
}

module.exports = TextModeRenderer;