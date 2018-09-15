// E N J I N E //

const modules = {
	// Game Managers
	SaveManager:require("./src/SaveManager/main"),
	GameManager:require("./src/GameManager/main"),

	// Game Renderers
	CanvasRenderer:require("./src/CanvasRender/main"),
	NetRenderer:require("./src/NetRender/main"),
	HTML5Renderer:require("./src/html5Render/main"),
	TextModeRenderer:require("./src/TextModeRender/main"),

	// Libraries
	Runtime:require("./src/Runtime/main")
};

module.exports = exports = modules;