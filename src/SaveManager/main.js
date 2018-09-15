const fs = require("fs");
const path = require("path");
const _ = require("underscore");

/**
 * SaveManager Class
 *
 * @class SaveManager
 */
class SaveManager {
	/**
	 * SaveManager Class Constructor
	 *
	 * @param {string} [saveLoc="Unknown Developer"]
	 * @memberof SaveManager
	 */
	constructor(saveLoc = "Unknown Developer") {
		this.location = path.join(process.env.APPDATA , `\\${saveLoc}`);
		if (!fs.existsSync(this.location)) fs.mkdir(this.location);
	}

	/**
	 * Save Game to File
	 *
	 * @param {object} jso
	 * @param {string} [filePath=this.location]
	 * @param {string} [fileName=`${Date.now().toString()}.json`]
	 * @returns {number}
	 * @memberof SaveManager
	 */
	async Save(jso, filePath = this.location, fileName = `${Date.now().toString()}.json`) {
		let json = JSON.stringify(jso);
		let file = await fs.writeFileSync(`${filePath}\\${fileName}`, json);

		return file;
	}

	/**
	 * Load Game from File
	 *
	 * @param {string} [filePath=this.location]
	 * @param {string} [fileName="getLatestSave"]
	 * @returns {string}
	 * @memberof SaveManager
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

module.exports = exports = SaveManager;