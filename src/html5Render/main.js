const Renderer = require("../Base/Render/main");
const cvj = require("convergejs");

/**
 * html5Renderer Class
 *
 * @class html5Renderer
 * @extends {Renderer}
 */
class html5Renderer extends Renderer {
	/**
	 * html5Renderer Class Constructor, powered by Convergejs
	 *
	 * @param {GameManager} gameManager
	 * @param {number} [fps=60]
	 * @param {boolean} [initMessage=false]
	 * @memberof html5Renderer
	 */
	constructor(gameManager, fps = 60, initMessage = false) {
		super();
		this.fps = fps;
		this.type = "html5Renderer";
		if (initMessage) console.log(`Succesfully Initialized ${this.type}`);

		//#region Create Canvas
		let canvas = document.createElement("div");
		canvas.setAttribute("id", "renderCanvas");
		let body = document.getElementsByTagName("body")[0];
		body.appendChild(canvas);

		this.c = new cvj.Canvas(document.getElementById("renderCanvas"), "100vw", "100vh", this.fps);
		//#endregion
	}
}

module.exports = exports = html5Renderer;