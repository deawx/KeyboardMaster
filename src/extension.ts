import { keyBindingObject, keyBindingArray } from "./data-types";

declare global {
    interface HTMLElement {
        pressed: Set<string>;
        keyBindings: keyBindingArray; // Stores the keybindings defined on the current element
        checkKeyBinding: (event: KeyboardEvent) => void;
        onkeydown: (event: KeyboardEvent) => void;
        addKeyBindings: (keyBindings: keyBindingArray) => void; // Adds keyBindings to the current element
        removeAllKeyBindings: () => void; // Removes all the key bindings on the current element
    }
}
