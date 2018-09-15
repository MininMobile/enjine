/**
 * GameObject Class
 *
 * @class GameObject
 */
class GameObject {
	/**
	 * GameObject Class Constructor
	 *
	 * @param {string} id
	 * @param {string} [type="box"]
	 * @memberof GameObject
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
	 *
	 * @param {string} id
	 * @param {string} [type="box"]
	 * @memberof GameObject
	 */
	AddChild(id, type = "box") {
		let child = new GameObject(id, type);

		this.children.push(child);
	}

	/**
	 * Style GameObject
	 *
	 * @param {array} Styles
	 * @memberof GameObject
	 */
	Style(styles) {
		styles.forEach(style => {
			if (this.styles[style[0]] != null || undefined) this.styles[style[0]] = style[1];
		});
	}
}

module.exports = exports = GameObject;