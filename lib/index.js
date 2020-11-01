var KeyboardMaster = (() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // src/index.ts
  var require_src = __commonJS((exports, module) => {
    HTMLElement.prototype.addKeyBindings = function(keyBindings) {
      this.pressed = new Set();
      this.keyBindings = keyBindings;
      keyBindings.seperator = keyBindings.seperator != void 0 ? keyBindings.seperator : " + ";
      this.checkKeyBinding = function() {
        const pressedKeys = Array.from(this.pressed);
        this.keyBindings.bindings.forEach((binding) => {
          if (pressedKeys.join(keyBindings.seperator).toLowerCase() === formatBinding(binding.keyBinding, keyBindings.seperator).toLowerCase()) {
            binding.action.call(this, binding.keyBinding);
          }
        });
      };
      this.onkeyup = (event) => {
        this.pressed.delete(formatKey(event.key));
        log("deleting key from storage", this.pressed);
      };
      this.onkeydown = (event) => {
        this.pressed.add(formatKey(event.key));
        this.checkKeyBinding(event);
        log(event.key);
        log("adding key to storage", this.pressed);
      };
      log(`bindings added for ${this}`);
    };
    HTMLElement.prototype.removeAllKeyBindings = function() {
      log(this);
      this.keyBindings.bindings = [];
    };
    module.exports = {
      updateConfig
    };
  });

  // src/extend-lib.ts
  const CONFIG = {
    mode: "development"
  };
  function updateConfig(config) {
    for (const i in config) {
      CONFIG[i] = config[i];
    }
    log("config update to", CONFIG);
  }
  const log = (...str) => {
    if (CONFIG.mode === "development") {
      console.log(...str);
    }
  };

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
  return require_src();
})();
//# sourceMappingURL=index.js.map
