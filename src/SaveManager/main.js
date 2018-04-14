const fs = require("fs");
const path = require("path");
const util = require("util");
const _ = require("underscore");

/**
 * SaveManager Class
 */
class SaveManager {
	/**
	 * SaveManager Class Constructor
	 * @param {string} saveLoc Location of Save Games
	 */
	constructor(saveLoc = "Unknown Developer") {
		this.location = path.join(process.env.APPDATA , `\\${saveLoc}`);
		if (!fs.existsSync(this.location)) fs.mkdir(this.location);
	}

	/**
	 * Save Game to File
	 * @param {object} jso JavaScript Object
	 * @param {string} filePath Save Game File Folder Location
	 * @param {string} fileName Save Game File Name, if unset uses UNIX Timestamp
	 */
	async Save(jso, filePath = this.location, fileName = `${Date.now().toString()}.json`) {
		let json = JSON.stringify(jso);
		let file = await fs.writeFileSync(`${filePath}\\${fileName}`, json);

		return file;
	}

	/**
	 * Load Game from File
	 * @param {string} filePath Load Game File Folder Location 
	 * @param {string} fileName Load Game File Name, if unset loads Latest Save
	 */
	async Load(filePath = this.location, fileName = "getLatestSave") {
		if (fileName == "getLatestSave") {
			let files = await fs.readdirSync(filePath);

			fileName = await _.max(files, function (f) {
				let fullpath = path.join(filePath, f);

				return fs.statSync(fullpath).ctime;
			});
		}

		let file = `${filePath}\\${fileName}`;
		let content = await fs.readFileSync(file);
		let jso = JSON.parse(content);

		return jso;
	}
}

module.exports = SaveManager;