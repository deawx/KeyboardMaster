/**
 * @param {String} keyBinding Keybinding to format
 * @param {String} splitter A piece of string which is used as the "join string".
 * @export The formatted keyBinding
 * @description Formats a keyBinding
 */
export function formatBinding(keyBinding: string, splitter: string): string {
    return keyBinding
        .split(splitter)
        .map((word) => {
            let newWord = word;
            if (word.toLowerCase() == "ctrl") {
                newWord = "Control";
            }
            if (word.toLowerCase() == "shift") {
                newWord = "Shift";
            }
            return newWord;
        })
        .join(splitter);
}
