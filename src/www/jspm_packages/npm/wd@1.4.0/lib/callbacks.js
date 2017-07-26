/* */ 
var utils = require('./utils'),
    newError = utils.newError,
    getJsonwireError = utils.getJsonwireError,
    isWebDriverException = utils.isWebDriverException;
var cbStub = function() {};
exports.simpleCallback = function(cb) {
  cb = cb || cbStub;
  return function(err, data) {
    if (err) {
      return cb(err);
    }
    if ((data === '') || (data === 'OK')) {
      cb(null);
    } else {
      var jsonWireRes;
      try {
        jsonWireRes = JSON.parse(data);
      } catch (ign) {}
      if (jsonWireRes && (jsonWireRes.status !== undefined)) {
        if (jsonWireRes.status === 0) {
          cb(null);
        } else {
          var jsonwireError = getJsonwireError(jsonWireRes.status);
          var errorMessage = 'Error response status: ' + jsonWireRes.status;
          if (jsonwireError) {
            errorMessage += ", " + jsonwireError.summary + " - " + jsonwireError.detail;
          }
          if (jsonWireRes.value && jsonWireRes.value.message) {
            errorMessage += " Selenium error: " + jsonWireRes.value.message;
          }
          var error = newError({
            message: errorMessage,
            status: jsonWireRes.status,
            cause: jsonWireRes
          });
          if (jsonwireError) {
            error['jsonwire-error'] = jsonwireError;
          }
          cb(error);
        }
      } else {
        cb(newError({
          message: 'Unexpected data in simpleCallback.',
          data: jsonWireRes || data
        }));
      }
    }
  };
};
var callbackWithDataBase = function(cb) {
  cb = cb || cbStub;
  return function(err, data) {
    if (err) {
      return cb(err);
    }
    var obj,
        alertText;
    try {
      obj = JSON.parse(data);
    } catch (e) {
      return cb(newError({
        message: 'Not JSON response',
        data: data
      }));
    }
    try {
      alertText = obj.value.alert.text;
    } catch (e) {
      alertText = '';
    }
    if (obj.status > 0) {
      var jsonwireError = getJsonwireError(obj.status);
      var errorMessage = 'Error response status: ' + obj.status + ", " + alertText;
      if (jsonwireError) {
        errorMessage += ", " + jsonwireError.summary + " - " + jsonwireError.detail;
      }
      if (obj.value && obj.value.message) {
        errorMessage += " Selenium error: " + obj.value.message;
      }
      var error = newError({
        message: errorMessage,
        status: obj.status,
        cause: obj
      });
      if (jsonwireError) {
        error['jsonwire-error'] = jsonwireError;
      }
      cb(error);
    } else {
      cb(null, obj);
    }
  };
};
exports.callbackWithData = function(cb, browser) {
  cb = cb || cbStub;
  return callbackWithDataBase(function(err, obj) {
    if (err) {
      return cb(err);
    }
    if (isWebDriverException(obj.value)) {
      return cb(newError({
        message: obj.value.message,
        cause: obj.value
      }));
    }
    if (obj.value && typeof obj.value.ELEMENT !== "undefined") {
      obj.value = browser.newElement(obj.value.ELEMENT);
    } else if (Object.prototype.toString.call(obj.value) === "[object Array]") {
      for (var i = 0; i < obj.value.length; i++) {
        if (obj.value[i] && typeof obj.value[i].ELEMENT !== "undefined") {
          obj.value[i] = browser.newElement(obj.value[i].ELEMENT);
        }
      }
    }
    cb(null, obj.value);
  });
};
exports.elementCallback = function(cb, browser) {
  cb = cb || cbStub;
  return callbackWithDataBase(function(err, obj) {
    if (err) {
      return cb(err);
    }
    if (isWebDriverException(obj.value)) {
      return cb(newError({
        message: obj.value.message,
        cause: obj.value
      }));
    }
    if (!obj.value.ELEMENT) {
      cb(newError({
        message: "no ELEMENT in response value field.",
        cause: obj
      }));
    } else {
      var el = browser.newElement(obj.value.ELEMENT);
      cb(null, el);
    }
  });
};
exports.elementsCallback = function(cb, browser) {
  cb = cb || cbStub;
  return callbackWithDataBase(function(err, obj) {
    if (err) {
      return cb(err);
    }
    if (isWebDriverException(obj.value)) {
      return cb(newError({
        message: obj.value.message,
        cause: obj.value
      }));
    }
    if (!Array.isArray(obj.value)) {
      return cb(newError({
        message: "Response value field is not an Array.",
        cause: obj.value
      }));
    }
    var i,
        elements = [];
    for (i = 0; i < obj.value.length; i++) {
      var el = browser.newElement(obj.value[i].ELEMENT);
      elements.push(el);
    }
    cb(null, elements);
  });
};
exports.elementOrElementsCallback = function(cb, browser) {
  cb = cb || cbStub;
  return callbackWithDataBase(function(err, obj) {
    if (err) {
      return cb(err);
    }
    if (isWebDriverException(obj.value)) {
      return cb(newError({
        message: obj.value.message,
        cause: obj.value
      }));
    }
    var el;
    if (obj.value.ELEMENT) {
      el = browser.newElement(obj.value.ELEMENT);
      cb(null, el);
    } else if (Array.isArray(obj.value)) {
      var i,
          elements = [];
      for (i = 0; i < obj.value.length; i++) {
        el = browser.newElement(obj.value[i].ELEMENT);
        elements.push(el);
      }
      cb(null, elements);
    } else {
      cb(newError({
        message: "no element or element array in response value field.",
        cause: obj
      }));
    }
  });
};
