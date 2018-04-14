/**
 * GameObject Class
 */
class GameObject {
	/**
	 * 
	 * @param {string} type Type of Object
	 * @param {string} id Unique Indentifier for Object
	 */
	constructor(id, type = "box") {
		switch (type) {
			case "scene":
				this.type = "canvas";
				break;
			case "box":
				this.type = "box";
				break;

			default:
				this.type = "box";
				break;
		}

		this.id = id;
	}
}

module.exports = GameObject;