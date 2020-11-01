# KeyboardMaster - Documentation

## Configuration

Now, this library declares a variable `KeyboardMaster`, which has a `updateConfig` function. `updateConfig` function takes the new configurations as an object (the format of the object is shown below). This function can be used to update the configuration of this library. 

```typescript
const updateConfig = (config: Configuration) => void;
```

At the moment, There are not much values to configure. Supported value(s) are shown below.

```typescript
interface Configuration {
    /**
     * "production":
     *      The log function will stop console.logging.
     *      Which means, All console.logs from KeyboardMaster will be removed.
     */
    mode: "development" | "production"
}

```

## Data Types

KeyboardMaster uses Typescript to use some advanced features like type declarations.

KeyboardMaster declares 2 data types,

```typescript
interface keyBindingObject {
    keyBinding: string;
    action: (keyBinding: string) => void;
}

interface keyBindingArray {
    bindings: Array<keyBindingObject>;
    seperator: string;
}

```

## Methods

### HTMLElement.prototype.addKeyBindings

-   Parameters:
    -   keyBindings: ` keyBindingArray`
-   Return type: `void`

### HTMLElement.prototype.removeAllKeyBindings

-   Parameters: none
-   Return type: `void`
