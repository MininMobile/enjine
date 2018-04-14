const fs = require("fs");

/**
 * SaveManager Class
 */
class SaveManager {
	/**
	 * SaveManager Class Constructor
	 * @param {string} saveLoc Location of Save Games
	 */
	constructor(saveLoc = "Unknown Developer") {
		this.location = process.env.APPDATA + `\\${saveLoc}`;
	}

	/**
	 * Save Game
	 * @param {object} jso JavaScript Object
	 * @param {string} filePath Save Game File Folder Location
	 * @param {string} fileName Save Game File Name
	 */
	async Save(jso, filePath = this.location, fileName = `${Date.now().toString()}.json`) {
		let json = JSON.stringify(jso);
		let file = await fs.writeFileSync(`${filePath}\\${fileName}`, json);

		return file;
	}
}

module.exports = SaveManager;