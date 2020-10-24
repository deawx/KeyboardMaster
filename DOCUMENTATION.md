# KeyboardMaster - Documentation

## Data Types

KeyboardMaster uses Typescript to use some advanced features like type declarations.

KeyboardMaster declares 2 data types,

```typescript
export interface keyBindingObject {
    keyBinding: string;
    action: Function;
}

export interface keyBindingArray {
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
