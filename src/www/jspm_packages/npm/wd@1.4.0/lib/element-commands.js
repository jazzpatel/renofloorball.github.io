/* */ 
var _ = require('./lodash'),
    utils = require('./utils'),
    deprecator = utils.deprecator,
    fs = require('fs'),
    callbacks = require('./callbacks'),
    elementCallback = callbacks.elementCallback,
    elementsCallback = callbacks.elementsCallback,
    commands = require('./commands');
var elementCommands = {};
elementCommands.type = function(keys, cb) {
  commands.type.apply(this.browser, [this, keys, cb]);
};
elementCommands.keys = function(keys, cb) {
  commands.keys.apply(this.browser, [keys, cb]);
};
function _isLocalFile(path, cb) {
  fs.exists(path, function(exists) {
    if (exists) {
      fs.lstat(path, function(err, stats) {
        cb(err, stats.isFile());
      });
    } else {
      cb(null, false);
    }
  });
}
elementCommands.sendKeys = function(keys, cb) {
  var _this = this;
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  _.each(keys, function(key, idx) {
    if (typeof key !== "string") {
      keys[idx] = key.toString();
    }
  });
  var path = keys.join('');
  _isLocalFile(path, function(err, isLocalFile) {
    if (err) {
      return cb(err);
    }
    if (isLocalFile) {
      commands.uploadFile.apply(_this.browser, [path, function(err, distantFilePath) {
        if (err) {
          return cb(err);
        }
        return commands.type.apply(_this.browser, [_this, distantFilePath, cb]);
      }]);
    } else {
      commands.type.apply(_this.browser, [_this, keys, cb]);
    }
  });
};
elementCommands.setText = function(keys, cb) {
  var _this = this;
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  _.each(keys, function(key, idx) {
    if (typeof key !== "string") {
      keys[idx] = key.toString();
    }
  });
  commands.replace.apply(_this.browser, [_this, keys, cb]);
};
elementCommands.replaceKeys = function(keys, cb) {
  deprecator.warn('element.replaceKeys', 'element.replaceKeys has been deprecated, use element.setText instead.');
  elementCommands.setText.call(this, keys, cb);
};
elementCommands.click = function(cb) {
  commands.clickElement.apply(this.browser, [this, cb]);
};
elementCommands.tap = function(cb) {
  commands.tapElement.apply(this.browser, [this, cb]);
};
elementCommands.doubleclick = function(cb) {
  return commands.moveTo.apply(this.browser, [this, function(err) {
    if (err) {
      return cb(err);
    }
    commands.doubleclick.apply(this.browser, [cb]);
  }.bind(this)]);
};
elementCommands.doubleClick = elementCommands.doubleclick;
elementCommands.moveTo = function() {
  var fargs = utils.varargs(arguments);
  var cb = fargs.callback,
      xoffset = fargs.all[0],
      yoffset = fargs.all[1];
  commands.moveTo.apply(this.browser, [this, xoffset, yoffset, cb]);
};
elementCommands.flick = function(xoffset, yoffset, speed, cb) {
  commands.flick.apply(this.browser, [this.value, xoffset, yoffset, speed, cb]);
};
elementCommands.text = function(cb) {
  commands.text.apply(this.browser, [this, cb]);
};
elementCommands.textPresent = function(searchText, cb) {
  commands.textPresent.apply(this.browser, [searchText, this, cb]);
};
elementCommands.getAttribute = function(name, cb) {
  commands.getAttribute.apply(this.browser, [this, name, cb]);
};
elementCommands.getTagName = function(cb) {
  commands.getTagName.apply(this.browser, [this, cb]);
};
elementCommands.isDisplayed = function(cb) {
  commands.isDisplayed.apply(this.browser, [this, cb]);
};
elementCommands.displayed = elementCommands.isDisplayed;
elementCommands.isSelected = function(cb) {
  commands.isSelected.apply(this.browser, [this, cb]);
};
elementCommands.selected = elementCommands.isSelected;
elementCommands.isEnabled = function(cb) {
  commands.isEnabled.apply(this.browser, [this, cb]);
};
elementCommands.enabled = elementCommands.isEnabled;
elementCommands.isVisible = function(cb) {
  deprecator.warn('element.isVisible', 'element.isVisible has been deprecated, use element.isDisplayed instead.');
  commands.isVisible.apply(this.browser, [this, cb]);
};
elementCommands.getLocation = function(cb) {
  commands.getLocation.apply(this.browser, [this, cb]);
};
elementCommands.getLocationInView = function(cb) {
  commands.getLocationInView.apply(this.browser, [this, cb]);
};
elementCommands.getSize = function(cb) {
  commands.getSize.apply(this.browser, [this, cb]);
};
elementCommands.getValue = function(cb) {
  commands.getValue.apply(this.browser, [this, cb]);
};
elementCommands.getComputedCss = function(styleName, cb) {
  commands.getComputedCss.apply(this.browser, [this, styleName, cb]);
};
elementCommands.getComputedCSS = elementCommands.getComputedCss;
elementCommands.clear = function(cb) {
  commands.clear.apply(this.browser, [this, cb]);
};
elementCommands.submit = function(cb) {
  commands.submit.apply(this.browser, [this, cb]);
};
_.each(utils.elementFuncTypes, function(type) {
  elementCommands['element' + utils.elFuncSuffix(type)] = function(value, cb) {
    elementCommands.element.apply(this, [utils.elFuncFullType(type), value, cb]);
  };
  elementCommands['elements' + utils.elFuncSuffix(type)] = function(value, cb) {
    elementCommands.elements.apply(this, [utils.elFuncFullType(type), value, cb]);
  };
});
elementCommands.element = function(using, value, cb) {
  var _this = this;
  this.browser._jsonWireCall({
    method: 'POST',
    relPath: '/element/' + _this.value + '/element',
    data: {
      using: using,
      value: value
    },
    cb: elementCallback(cb, this.browser)
  });
};
elementCommands.elements = function(using, value, cb) {
  var _this = this;
  this.browser._jsonWireCall({
    method: 'POST',
    relPath: '/element/' + _this.value + '/elements',
    data: {
      using: using,
      value: value
    },
    cb: elementsCallback(cb, this.browser)
  });
};
elementCommands.equals = function(other, cb) {
  commands.equalsElement.apply(this.browser, [this, other, cb]);
};
elementCommands.sleep = function(ms, cb) {
  cb = cb || function() {};
  setTimeout(cb, ms);
};
elementCommands.noop = function(cb) {
  if (cb) {
    cb();
  }
};
elementCommands.performMultiAction = function(actions, cb) {
  commands.performMultiAction.apply(this.browser, [this, actions, cb]);
};
elementCommands.rotate = function(opts, cb) {
  commands.rotateDevice.apply(this.browser, [this, opts, cb]);
};
elementCommands.setImmediateValueInApp = function(value, cb) {
  commands.setImmediateValueInApp.apply(this.browser, [this, value, cb]);
};
elementCommands.setImmediateValue = elementCommands.setImmediateValueInApp;
module.exports = elementCommands;
