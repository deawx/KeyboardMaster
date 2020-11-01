(() => {
  // src/utils.ts
  function formatBinding(keyBinding, splitter) {
    return keyBinding.split(splitter).map((word) => {
      let newWord = word;
      if (word.toLowerCase() == "ctrl") {
        newWord = "Control";
      }
      if (word.toLowerCase() == "shift") {
        newWord = "Shift";
      }
      return newWord;
    }).join(splitter);
  }
  function formatKey(key) {
    let newKey = key;
    const replaceKeys = {
      " ": "Space"
    };
    if (replaceKeys[key]) {
      newKey = replaceKeys[key];
    }
    return newKey;
  }

  // src/index.ts
  HTMLElement.prototype.addKeyBindings = function(keyBindings) {
    this.pressed = new Set();
    this.keyBindings = keyBindings;
    keyBindings.seperator = keyBindings.seperator != void 0 ? keyBindings.seperator : " + ";
    this.checkKeyBinding = function(event) {
      let pressedKeys = Array.from(this.pressed);
      this.keyBindings.bindings.forEach((binding) => {
        if (pressedKeys.join(keyBindings.seperator).toLowerCase() === formatBinding(binding.keyBinding, keyBindings.seperator).toLowerCase()) {
          binding.action.call(this, binding.keyBinding);
        }
      });
    };
    this.onkeyup = (event) => {
      this.pressed.delete(formatKey(event.key));
    };
    this.onkeydown = (event) => {
      this.pressed.add(formatKey(event.key));
      this.checkKeyBinding(event);
    };
    console.log(`bindings added for `, this);
  };
  HTMLElement.prototype.removeAllKeyBindings = function() {
    console.log(this);
    this.keyBindings.bindings = [];
  };
})();
