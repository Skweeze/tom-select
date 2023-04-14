/**
* Tom Select v2.0.5
* Licensed under the Apache License, Version 2.0 (the "License");
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.auto_position = factory());
})(this, (function () { 'use strict';

	function plugin () {
	  var self = this;
	  const POSITION = {
	    top: "top",
	    bottom: "bottom"
	  };

	  self.positionDropdown = function () {
	    return function () {
	      const offset = self.settings.dropdownParent === "body" ? {
	        top: self.control.getBoundingClientRect().top,
	        lefy: self.control.getBoundingClientRect().left
	      } : {
	        top: self.control.offsetTop,
	        left: self.control.offsetLeft
	      };
	      offset.top += self.control.getBoundingClientRect().height;
	      const dropdownHeight = self.dropdown.scrollHeight + 5; // 5 - padding value;

	      const controlPosTop = self.control.getBoundingClientRect().top;
	      const wrapperHeight = self.wrapper.getBoundingClientRect().height;
	      const position = controlPosTop + dropdownHeight + wrapperHeight > window.innerHeight ? POSITION.top : POSITION.bottom;
	      const styles = {
	        width: self.control.getBoundingClientRect().width,
	        left: offset.left
	      };

	      if (position === POSITION.top) {
	        Object.assign(styles, {
	          bottom: offset.top + 'px',
	          top: "unset",
	          margin: "0 0 5px 0",
	          display: "none"
	        });
	        self.dropdown.classList.add("selectize-position-top");
	      } else {
	        Object.assign(styles, {
	          top: offset.top + 'px',
	          bottom: "unset",
	          margin: "5px 0 0 0",
	          display: "none"
	        });
	        self.dropdown.classList.remove("selectize-position-top");
	      }

	      Object.assign(self.dropdown.style, styles);
	    };
	  }();
	}

	return plugin;

}));
//# sourceMappingURL=auto_position.js.map
