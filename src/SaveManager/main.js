const fs = require("fs");

/**
 * SaveManager Class
 */
class SaveManager {
	/**
	 * SaveManager Class Constructor
	 * @param {string} saveLoc Location of Save Games
	 */
	constructor(saveLoc = process.env.APPDATA) {
		this.location = saveLoc;
	}

	/**
	 * Save Game
	 * @param {object} jso JavaScript Object
	 * @param {string} filePath Save Game File Folder Location
	 * @param {string} fileName Save Game File Name
	 */
	async Save(jso, filePath = this.location, fileName = Date.now().toString()) {
		let json = JSON.stringify(jso);
		let file = await fs.writeFileSync(loc + `\\${fileName}`, json);

		return file;
	}
}

module.exports = SaveManager;