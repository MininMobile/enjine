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
}

module.exports = SaveManager;