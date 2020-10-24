import "./extension";

export interface keyBindingObject {
    id?: string;
    keyBinding: string;
    action: Function;
}

export interface keyBindingArray {
    bindings: Array<keyBindingObject>;
    seperator: string;
}
