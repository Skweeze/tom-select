/**
* Tom Select v2.0.6
* Licensed under the Apache License, Version 2.0 (the "License");
*/

// https://github.com/andrewrk/node-diacritics/blob/master/index.js
const latin_convert = {
  'æ': 'ae',
  'ⱥ': 'a',
  'ø': 'o'
};
new RegExp(Object.keys(latin_convert).join('|'), 'g');

// @ts-ignore TS2691 "An import path cannot end with a '.ts' extension"
/**
 * Iterates over arrays and hashes.
 *
 * ```
 * iterate(this.items, function(item, id) {
 *    // invoked for each item
 * });
 * ```
 *
 */

const iterate = (object, callback) => {
  if (Array.isArray(object)) {
    object.forEach(callback);
  } else {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        callback(object[key], key);
      }
    }
  }
};

/**
 * Set attributes of an element
 *
 */

const setAttr = (el, attrs) => {
  iterate(attrs, (val, attr) => {
    if (val == null) {
      el.removeAttribute(attr);
    } else {
      el.setAttribute(attr, '' + val);
    }
  });
};

function plugin () {
  const self = this;

  const updatePlaceholder = () => {
    if (self.settings.mode !== 'multi') return;
    const collapsedItemsTemplate = self.settings.collapsedItemsTemplate ? self.settings.collapsedItemsTemplate : '# Selected';
    let placeholder = self.settings.placeholder;

    if (self.items.length === 1) {
      const value = self.getValue();
      const option = self.getOption(value[0]);
      placeholder = option != null && option.textContent ? option.textContent : '';
    }

    if (self.items.length > 1) placeholder = collapsedItemsTemplate.replace('#', self.items.length.toString());
    setAttr(self.control_input, {
      placeholder: placeholder
    });
  };

  self.hook('after', 'inputState', () => {
    updatePlaceholder();
  });
  self.hook('after', 'setup', () => {
    updatePlaceholder();
  });
}

export { plugin as default };
//# sourceMappingURL=plugin.js.map
