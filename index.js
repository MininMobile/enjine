// E N J I N E //

const exports = {
	// Game Managers
	SaveManager:require("src/SaveManager/main"),
	GameManager:require("src/GameManager/main"),

	// Game Renderers
	CanvasRenderer:require("src/CanvasRender/main"),
	NetRenderer:require("src/NetRender/main"),

	// Libraries
	Runtime:require("src/Runtime/main")
};

module.exports = exports;