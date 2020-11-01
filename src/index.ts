import { keyBindingArray } from "./data-types";
import { CONFIG, updateConfig, log } from './extend-lib';
import { formatBinding, formatKey } from "./utils";

HTMLElement.prototype.addKeyBindings = function (keyBindings: keyBindingArray) {
    this.pressed = new Set();
    this.keyBindings = keyBindings;
    keyBindings.seperator =
        keyBindings.seperator != undefined ? keyBindings.seperator : " + ";

    this.checkKeyBinding = function (event) {
        let pressedKeys = Array.from(this.pressed);
        this.keyBindings.bindings.forEach((binding) => {
            if (
                pressedKeys.join(keyBindings.seperator).toLowerCase() ===
                formatBinding(
                    binding.keyBinding,
                    keyBindings.seperator
                ).toLowerCase()
            ) {
                binding.action.call(this, binding.keyBinding);
            }
        });
    };

    this.onkeyup = (event) => {
        console.log(CONFIG);
        this.pressed.delete(formatKey(event.key));
        log('deleting key from storage', this.pressed);
    };

    this.onkeydown = (event) => {
        this.pressed.add(formatKey(event.key));
        this.checkKeyBinding(event);
        log(event.key);
        log('adding key to storage', this.pressed);
    };
    log(`bindings added for `, this);
};

HTMLElement.prototype.removeAllKeyBindings = function () {
    log(this);
    this.keyBindings.bindings = [];
};

// @ts-ignore
module.exports = {
    updateConfig
}
