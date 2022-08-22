"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var randomColor = /*#__PURE__*/function () {
  function randomColor() {
    _classCallCheck(this, randomColor);

    this.valor = this.crearColorRandom();
  }

  _createClass(randomColor, [{
    key: "crearColorRandom",
    value: function crearColorRandom() {
      var random1 = Math.round(Math.random() * 255);
      var random2 = Math.round(Math.random() * 255);
      var random3 = Math.round(Math.random() * 255);
      return "".concat(random1, ",").concat(random2, ",").concat(random3, ",");
    }
  }]);

  return randomColor;
}();

var color = new randomColor();
console.log(color.valor);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var randomColor = /*#__PURE__*/function () {
  function randomColor() {
    _classCallCheck(this, randomColor);

    this.valor = this.crearColorRandom();
  }

  _createClass(randomColor, [{
    key: "crearColorRandom",
    value: function crearColorRandom() {
      var random1 = Math.round(Math.random() * 255);
      var random2 = Math.round(Math.random() * 255);
      var random3 = Math.round(Math.random() * 255);
      return "".concat(random1, ",").concat(random2, ",").concat(random3, ",");
    }
  }]);

  return randomColor;
}();

var color = new randomColor();
console.log(color.valor);
