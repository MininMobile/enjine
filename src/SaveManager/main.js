/**
 * SaveManager Class
 */
class SaveManager {
	/**
	 * SaveManager Class Constructor
	 * @param {string} saveLoc Location of Save Games
	 */
	constructor(saveLoc = process.env.APPDATA, ) {
		this.location = saveLoc;
	}

	/**
	 * Save Game
	 * @param {object} jso JavaScript Object
	 * @param {string} loc Save Game File Folder Location
	 * @param {string} fileName Save Game File Name
	 */
	Save(jso, loc = this.location, fileName = Date.now().toString()) {

	}
}

module.exports = SaveManager;