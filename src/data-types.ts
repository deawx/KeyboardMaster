import "./extension";

export interface keyBindingObject {
    keyBinding: string;
    action: (keyBinding: string) => void;
}

export interface keyBindingArray {
    bindings: Array<keyBindingObject>;
    seperator: string;
}

export interface Configuration {
    /**
     * "production":
     *      The log function will stop console.logging.
     *      Which means, All console.logs from KeyboardMaster will be removed.
     */
    mode: "development" | "production"
}