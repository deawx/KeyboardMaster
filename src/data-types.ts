import "./extension";

export interface keyBindingObject {
    keyBinding: string;
    action: (keyBinding: string) => void;
}

export interface keyBindingArray {
    bindings: Array<keyBindingObject>;
    seperator: string;
}
