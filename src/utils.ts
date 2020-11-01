/**
 * @param {String} keyBinding Keybinding to format
 * @param {String} splitter A piece of string which is used as the "join string".
 * @description Formats a keyBinding
 */
export function formatBinding(keyBinding: string, splitter: string): string {
	return keyBinding
		.split(splitter)
		.map((word) => {
			let newWord = word
			if (word.toLowerCase() == "ctrl") {
				newWord = "Control"
			}
			if (word.toLowerCase() == "shift") {
				newWord = "Shift"
			}
			return newWord
		})
		.join(splitter)
}

/**
 * @param {String} key Key to format
 * @description Formats a key
 */
export function formatKey(key: string): string {
	let newKey: string = key

	const replaceKeys = {
		" ": "Space",
	}

	if (replaceKeys[key]) {
		newKey = replaceKeys[key]
	}

	return newKey
}
