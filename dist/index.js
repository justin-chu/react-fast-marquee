

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

___$insertStyle(".slide-container {\n  overflow: hidden;\n}\n\n.slider {\n  animation: scroll var(--speed) linear infinite;\n  display: flex;\n  width: max-content;\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-3930px);\n    /* 3930px rough width of all images */\n    /* transform: translateX(calc(-400px * 30)); */\n    /* width * (# slides * 2) */\n  }\n}");

var SmoothCarousel = function (_a) {
    var _b;
    var _c = _a.speed, speed = _c === void 0 ? 200 : _c, // Default props
    children = _a.children;
    return (React.createElement("div", { className: "slide-container" },
        React.createElement("div", { style: (_b = {}, _b['--speed'] = speed + "s", _b), className: "slider" }, children)));
};

exports.default = SmoothCarousel;
//# sourceMappingURL=index.js.map
