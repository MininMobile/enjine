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

		this.styles = {
			background: black
		};
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

	/**
	 * Style GameObject
	 * @param {array} Styles, eg. [["background", "black"], ["border", "white"]]
	 */
	Style(styles) {
		styles.forEach(style => {
			this.styles[style[0]] = style[1];
		});
	}
}

module.exports = GameObject;