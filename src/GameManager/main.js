/**
 * GameManager Class
 */
class GameManager {
	/**
	 * GameManager Class Constructor
	 * @param {bool} experimental Enables Experimental Functions/Types
	 */
	constructor(experimental = false) {
		this.proto = experimental;
		
		this.children = { };
	}
}

module.exports = GameManager;