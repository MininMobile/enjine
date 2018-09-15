const Renderer = require("../Base/Render/main");

/**
 * TextModeRenderer Class
 *
 * @class TextModeRenderer
 * @extends {Renderer}
 */
class TextModeRenderer extends Renderer {
	/**
	 * TextModeRenderer Class Constructor
	 *
	 * @param {boolean} [initMessage=true]
	 * @memberof TextModeRenderer
	 */
	constructor(initMessage = true) {
		super();

		this.type = "TextModeRenderer";

		if (initMessage) console.log(`Succesfully Initialized ${this.type}`)
	}
}

module.exports = exports = TextModeRenderer;