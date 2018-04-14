/**
 * GameObject Class
 */
class GameObject {
	/**
	 * GameObject Class Constructor
	 * @param {string} id Unique Indentifier for Object
	 * @param {string} type Type of Object
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
		this.children = [ ];
	}

	/**
	 * Create New Child of this GameObject
	 * @param {string} id 
	 * @param {string} type 
	 */
	AddChild(id, type = "box") {
		let child = new GameObject(id, type);

		this.children.push(child);
	}
}

module.exports = GameObject;