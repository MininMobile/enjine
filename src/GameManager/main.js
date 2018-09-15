const GameObject = require("../Base/GameObject/main");

/**
 * GameManager Class
 *
 * @class GameManager
 * @extends {GameObject}
 */
class GameManager extends GameObject {
	/**
	 * GameManager Class Constructor
	 *
	 * @param {boolean} [experimental=false]
	 * @memberof GameManager
	 */
	constructor(experimental = false) {
		super("scene", "canvas");

		this.proto = experimental;
	}
}

module.exports = exports = GameManager;