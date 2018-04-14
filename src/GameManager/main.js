const GameObject = require("./gameObject");

/**
 * GameManager Class
 */
class GameManager extends GameObject {
	/**
	 * GameManager Class Constructor
	 * @param {bool} experimental Enables Experimental Functions/Types
	 */
	constructor(experimental = false) {
		super("scene", "canvas");

		this.proto = experimental;
	}
}

module.exports = GameManager;