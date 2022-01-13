exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js":
/*!***************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/history.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalHistory": () => (/* binding */ globalHistory),
/* harmony export */   "navigate": () => (/* binding */ navigate),
/* harmony export */   "createHistory": () => (/* binding */ createHistory),
/* harmony export */   "createMemorySource": () => (/* binding */ createMemorySource)
/* harmony export */ });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "insertParams": () => (/* binding */ insertParams),
/* harmony export */   "validateRedirect": () => (/* binding */ validateRedirect),
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/lib/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/lib/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? (0, _invariant2.default)(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigate = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

var _utils = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;
var _excluded = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];

var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = getGlobalBasePrefix();
  }

  if (!isLocalLink(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : getGlobalPathPrefix()) !== null && _ref !== void 0 ? _ref : "/";
  return "" + (base !== null && base !== void 0 && base.endsWith("/") ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
} // These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.


var getGlobalPathPrefix = function getGlobalPathPrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var getGlobalBasePrefix = function getGlobalBasePrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var isLocalLink = function isLocalLink(path) {
  return path && !path.startsWith("http://") && !path.startsWith("https://") && !path.startsWith("//");
};

function withAssetPrefix(path) {
  return withPrefix(path, getGlobalPathPrefix());
}

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  return (0, _utils.resolve)(path, current);
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (typeof path === "number") {
    return path;
  }

  if (!isLocalLink(path)) {
    return path;
  }

  return isAbsolutePath(path) ? withPrefix(path) : absolutify(path, relativeTo);
};

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        cb(entry.isIntersecting || entry.intersectionRatio > 0);
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

function GatsbyLinkLocationWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, function (_ref2) {
    var location = _ref2.location;
    return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({}, props, {
      _location: location
    }));
  });
}

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref3) {
      var isPartiallyCurrent = _ref3.isPartiallyCurrent,
          isCurrent = _ref3.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.abortPrefetch = null;
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto._prefetch = function _prefetch() {
    var currentPath = window.location.pathname + window.location.search; // reach router should have the correct state

    if (this.props._location && this.props._location.pathname) {
      currentPath = this.props._location.pathname + this.props._location.search;
    }

    var rewrittenPath = rewriteLinkPath(this.props.to, currentPath);
    var parsed = (0, _parsePath.parsePath)(rewrittenPath);
    var newPathName = parsed.pathname + parsed.search; // Prefetch is used to speed up next navigations. When you use it on the current navigation,
    // there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete

    if (currentPath !== newPathName) {
      return ___loader.enqueue(newPathName);
    }

    return undefined;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;

    if (this.abortPrefetch) {
      this.abortPrefetch.abort();
    }

    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && Object.prototype.hasOwnProperty.call(this.props.innerRef, "current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function (inViewPort) {
        if (inViewPort) {
          _this2.abortPrefetch = _this2._prefetch();
        } else {
          if (_this2.abortPrefetch) {
            _this2.abortPrefetch.abort();
          }
        }
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        _location = _this$props._location,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);

    if ( true && !isLocalLink(to)) {
      console.warn("External link " + to + " was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links");
    }

    var prefixedTo = rewriteLinkPath(to, _location.pathname);

    if (!isLocalLink(prefixedTo)) {
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    }

    return /*#__PURE__*/_react.default.createElement(_reachRouter.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        var parsed = (0, _parsePath.parsePath)(prefixedTo);

        ___loader.hovering(parsed.pathname + parsed.search);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;

          var isCurrent = encodeURI(prefixedTo) === _location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          window.___navigate(prefixedTo, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate(rewriteLinkPath(to, window.location.pathname), options);
};

exports.navigate = navigate;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;

    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;

      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;

    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }

    this._isTicking = false;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMatchPaths": () => (/* binding */ setMatchPaths),
/* harmony export */   "findMatchPath": () => (/* binding */ findMatchPath),
/* harmony export */   "grabMatchParams": () => (/* binding */ grabMatchParams),
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "cleanPath": () => (/* binding */ cleanPath)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];

const trimPathname = rawPathname => {
  const pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname, decodeURIComponent("")) // Remove any hashfragment
  .split(`#`)[0];
  return trimmedPathname;
};

function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  } // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router


  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}
/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */


const setMatchPaths = value => {
  matchPaths = value;
};
/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */

const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);
  }

  return null;
};
/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */

const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return path.params;
  }

  return {};
}; // Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`

const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));

  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }

  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);

  if (redirect) {
    return findPath(redirect.toPath);
  }

  let foundPath = findMatchPath(trimmedPathname);

  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }

  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};
/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */

const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;

  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }

  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "withAssetPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withAssetPrefix),
/* harmony export */   "withPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withPrefix),
/* harmony export */   "graphql": () => (/* binding */ graphql),
/* harmony export */   "parsePath": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.parsePath),
/* harmony export */   "navigate": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.navigate),
/* harmony export */   "useScrollRestoration": () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__.useScrollRestoration),
/* harmony export */   "StaticQueryContext": () => (/* binding */ StaticQueryContext),
/* harmony export */   "StaticQuery": () => (/* binding */ StaticQuery),
/* harmony export */   "PageRenderer": () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a),
/* harmony export */   "useStaticQuery": () => (/* binding */ useStaticQuery),
/* harmony export */   "prefetchPathname": () => (/* binding */ prefetchPathname)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");






const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_5__["default"].enqueue;
const StaticQueryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});

function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading (StaticQuery)"));
}

const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryContext.Consumer, null, staticQueryData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};

const useStaticQuery = query => {
  var _context$query;

  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }

  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext); // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction

  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }

  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};

StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}



/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageResourceStatus": () => (/* binding */ PageResourceStatus),
/* harmony export */   "BaseLoader": () => (/* binding */ BaseLoader),
/* harmony export */   "ProdLoader": () => (/* binding */ ProdLoader),
/* harmony export */   "setLoader": () => (/* binding */ setLoader),
/* harmony export */   "publicLoader": () => (/* binding */ publicLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticQueryResults": () => (/* binding */ getStaticQueryResults)
/* harmony export */ });
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");



/**
 * Available resource loading statuses
 */

const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,

  /**
   * Resources loaded successfully
   */
  Success: `success`
};

const preferDefault = m => m && m.default || m;

const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};

const createPageDataUrl = rawPath => {
  const [path, maybeSearch] = rawPath.split(`?`);
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json${maybeSearch ? `?${maybeSearch}` : ``}`;
};

function doFetch(url, method = `GET`) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };

    req.send(null);
  });
}

const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
};

const toPageResources = (pageData, component = null) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes,
    getServerDataError: pageData.getServerDataError
  };
  return {
    component,
    json: pageData.result,
    page
  };
};

class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.isPrefetchQueueRunning = false;
    this.prefetchQueued = [];
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.setMatchPaths)(matchPaths);
  }

  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);

    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    } // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox


    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }

  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req; // Handle 200

      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }

          const maybeSearch = pagePath.split(`?`)[1];

          if (maybeSearch && !jsonPayload.path.includes(maybeSearch)) {
            jsonPayload.path += `?${maybeSearch}`;
          }

          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {// continue regardless of error
        }
      } // Handle 404


      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        } // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s


        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      } // handle 500 response (Unrecoverable)


      if (status === 500) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      } // Handle everything else, including status === 0, and 503s. Should retry


      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      } // Retried 3 times already, result is an error.


      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }

  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);

      if (true) {
        return Promise.resolve(pageData);
      }
    }

    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }

  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findMatchPath)(rawPath);
  } // TODO check all uses of this and whether they use undefined for page resources not exist


  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);

      if (true) {
        if (page.error) {
          return {
            error: page.error,
            status: page.status
          };
        }

        return Promise.resolve(page.payload);
      }
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    const inFlightPromise = Promise.all([this.loadAppData(), this.loadPageDataJson(pagePath)]).then(allData => {
      const result = allData[1];

      if (result.status === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }

      let pageData = result.payload;
      const {
        componentChunkName,
        staticQueryHashes = []
      } = pageData;
      const finalResult = {};
      const componentChunkPromise = this.loadComponent(componentChunkName).then(component => {
        finalResult.createdAt = new Date();
        let pageResources;

        if (!component || component instanceof Error) {
          finalResult.status = PageResourceStatus.Error;
          finalResult.error = component;
        } else {
          finalResult.status = PageResourceStatus.Success;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageData = Object.assign(pageData, {
            webpackCompilationHash: allData[0] ? allData[0].webpackCompilationHash : ``
          });
          pageResources = toPageResources(pageData, component);
        } // undefined if final result is an error


        return pageResources;
      });
      const staticQueryBatchPromise = Promise.all(staticQueryHashes.map(staticQueryHash => {
        // Check for cache in case this static query result has already been loaded
        if (this.staticQueryDb[staticQueryHash]) {
          const jsonPayload = this.staticQueryDb[staticQueryHash];
          return {
            staticQueryHash,
            jsonPayload
          };
        }

        return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
          const jsonPayload = JSON.parse(req.responseText);
          return {
            staticQueryHash,
            jsonPayload
          };
        }).catch(() => {
          throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
        });
      })).then(staticQueryResults => {
        const staticQueryResultsMap = {};
        staticQueryResults.forEach(({
          staticQueryHash,
          jsonPayload
        }) => {
          staticQueryResultsMap[staticQueryHash] = jsonPayload;
          this.staticQueryDb[staticQueryHash] = jsonPayload;
        });
        return staticQueryResultsMap;
      });
      return Promise.all([componentChunkPromise, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
        let payload;

        if (pageResources) {
          payload = { ...pageResources,
            staticQueryResults
          };
          finalResult.payload = payload;
          _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit(`onPostLoadPageResources`, {
            page: payload,
            pageResources: payload
          });
        }

        this.pageDb.set(pagePath, finalResult);

        if (finalResult.error) {
          return {
            error: finalResult.error,
            status: finalResult.status
          };
        }

        return payload;
      }) // when static-query fail to load we throw a better error
      .catch(err => {
        return {
          error: err,
          status: PageResourceStatus.Error
        };
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  } // returns undefined if the page does not exists in cache


  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);

      if (pageData.payload) {
        return pageData.payload;
      }

      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }

    return undefined;
  }

  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return {
        then: resolve => resolve(false),
        abort: () => {}
      };
    }

    if (this.prefetchTriggered.has(pagePath)) {
      return {
        then: resolve => resolve(true),
        abort: () => {}
      };
    }

    const defer = {
      resolve: null,
      reject: null,
      promise: null
    };
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    this.prefetchQueued.push([pagePath, defer]);
    const abortC = new AbortController();
    abortC.signal.addEventListener(`abort`, () => {
      const index = this.prefetchQueued.findIndex(([p]) => p === pagePath); // remove from the queue

      if (index !== -1) {
        this.prefetchQueued.splice(index, 1);
      }
    });

    if (!this.isPrefetchQueueRunning) {
      this.isPrefetchQueueRunning = true;
      setTimeout(() => {
        this._processNextPrefetchBatch();
      }, 3000);
    }

    return {
      then: (resolve, reject) => defer.promise.then(resolve, reject),
      abort: abortC.abort.bind(abortC)
    };
  }

  _processNextPrefetchBatch() {
    const idleCallback = window.requestIdleCallback || (cb => setTimeout(cb, 0));

    idleCallback(() => {
      const toPrefetch = this.prefetchQueued.splice(0, 4);
      const prefetches = Promise.all(toPrefetch.map(([pagePath, dPromise]) => {
        // Tell plugins with custom prefetching logic that they should start
        // prefetching this path.
        if (!this.prefetchTriggered.has(pagePath)) {
          this.apiRunner(`onPrefetchPathname`, {
            pathname: pagePath
          });
          this.prefetchTriggered.add(pagePath);
        } // If a plugin has disabled core prefetching, stop now.


        if (this.prefetchDisabled) {
          return dPromise.resolve(false);
        }

        return this.doPrefetch((0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(pagePath)).then(() => {
          if (!this.prefetchCompleted.has(pagePath)) {
            this.apiRunner(`onPostPrefetchPathname`, {
              pathname: pagePath
            });
            this.prefetchCompleted.add(pagePath);
          }

          dPromise.resolve(true);
        });
      }));

      if (this.prefetchQueued.length) {
        prefetches.then(() => {
          setTimeout(() => {
            this._processNextPrefetchBatch();
          }, 3000);
        });
      } else {
        this.isPrefetchQueueRunning = false;
      }
    });
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    return (0,_prefetch__WEBPACK_IMPORTED_MODULE_0__["default"])(pageDataUrl, {
      crossOrigin: `anonymous`,
      as: `fetch`
    }).then(() => // This was just prefetched, so will return a response from
    // the cache instead of making another request to the server
    this.loadPageDataJson(pagePath));
  }

  hovering(rawPath) {
    this.loadPage(rawPath);
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);

    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }

  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }

  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;

      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      } // Handle 200


      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }

          appData = jsonPayload;
        } catch (err) {// continue regardless of error
        }
      }

      return appData;
    });
  }

}

const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);

class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths, pageData) {
    const loadComponent = chunkName => {
      if (!asyncRequires.components[chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name ${chunkName}`);
      }

      return asyncRequires.components[chunkName]().then(preferDefault) // loader will handle the case when component is error
      .catch(err => err);
    };

    super(loadComponent, matchPaths);

    if (pageData) {
      this.pageDataDb.set((0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(pageData.path), {
        pagePath: pageData.path,
        payload: pageData,
        status: `success`
      });
    }
  }

  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }

      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_0__["default"])).then(() => pageData);
    });
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          } // if HEAD request wasn't 200, return notFound result
          // and show 404 page


          return data;
        });
      }

      return data;
    });
  }

}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathAndSearch => {
  if (pathAndSearch === undefined) {
    return pathAndSearch;
  }

  let [path, search = ``] = pathAndSearch.split(`?`);

  if (search) {
    search = `?` + search;
  }

  if (path === `/`) {
    return `/` + search;
  }

  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1) + search;
  }

  return path + search;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }

  const fakeLink = document.createElement(`link`);

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }

    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};

const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);

    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};

const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;

if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/react-lifecycles-compat.js":
/*!*******************************************!*\
  !*** ./.cache/react-lifecycles-compat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.polyfill = Component => Component;

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeGetBrowserRedirect": () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");
 // Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);

  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }

  return redirect;
}

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }

  if (str === prefix) {
    return `/`;
  }

  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }

  return str;
}

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_I_Icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/I_Icon.svg */ "./src/images/I_Icon.svg");
/* harmony import */ var _images_E_Icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/E_Icon.svg */ "./src/images/E_Icon.svg");
/* harmony import */ var _images_T_Icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/T_Icon.svg */ "./src/images/T_Icon.svg");




const icons = [_images_I_Icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"], _images_E_Icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"], _images_T_Icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"]];

const Icon = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.instagram.com/justinxtoronto/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon",
    src: props.image,
    alt: "tag"
  })));
};

const Footer = props => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {});
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "footer",
    className: "siteFooter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footerTab mx-auto"
  }, icons.map((icon, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, {
    key: `icon_${i}`,
    image: icon
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2265898178_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2265898178.json */ "./public/page-data/sq/d/2265898178.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");





const Header = props => {
  const [collapseMain, setCollapseMain] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const data = _public_page_data_sq_d_2265898178_json__WEBPACK_IMPORTED_MODULE_0__.data;
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    var header = document.getElementById('header');
    window.addEventListener('scroll', event => {
      if (window.pageYOffset > 50 && !collapseMain) {
        //console.log(header.classList.contains('siteHeader-squash'))
        if (!header.classList.contains('siteHeader-squash')) {
          header.classList.add('siteHeader-squash');
        }
      } else {
        console.log(header.classList.remove('siteHeader-squash'));
      }
    });
  });
  const postSections = props.sections;
  const pages = data.allWpPage.edges.map(edge => edge.node);
  const pagesIndex = data.allWpPage.edges.map(edge => edge.node.menuOrder);
  pages.sort((a, b) => a.menuOrder - b.menuOrder);
  const logoURL = data.allWpMediaItem.edges.find(edge => edge.node.title === "Logo").node.sourceUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    id: "header",
    className: "siteHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    id: "header-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row",
    style: {
      width: `100%`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    class: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo01",
    "aria-controls": "navbarTogglerDemo01",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    onClick: () => setCollapseMain(!collapseMain)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    class: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: `navbar-nav navbar-collapse ${collapseMain ? `` : `collapse`}`,
    id: "navbarTogglerDemo01"
  }, pages.map(page => {
    let title = page.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      key: `nav${title}`,
      className: "nav-item nav-link",
      href: `/${title.replace(' ', '')}`
    }, title);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    className: "navbar-logo",
    href: "/Home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: logoURL,
    alt: "logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-4"
  })))), postSections && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNavAltMarkup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "navbar-nav m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "navblock-left bg-light"
  }), postSections.map(title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    key: title,
    className: "nav-item nav-link bg-light",
    href: `#${title}`
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "navblock-right bg-light"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/section.js":
/*!***********************************!*\
  !*** ./src/components/section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var leader_line_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leader-line-new */ "./node_modules/leader-line-new/leader-line.js");
/* harmony import */ var leader_line_new__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leader_line_new__WEBPACK_IMPORTED_MODULE_2__);




const Section = props => {
  const [highlightNum, setHighlightNum] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1);
  const [selectNum, setSelectNum] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1);
  var renderedLeader = false;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!renderedLeader && document.getElementById(`${props.contents[0].Name}endpt1`)) {
      let container = document.getElementById(props.section.title); //console.log(container.style.height)
      //console.log(window.innerHeight)

      container.style.height = `${window.innerHeight}px`; //container.style.color = "#ff0000";
      //console.log(container.style.height)

      props.contents.map(content => {
        var myLine = new (leader_line_new__WEBPACK_IMPORTED_MODULE_2___default())(document.getElementById(`${content.Name}endpt1`), document.getElementById(`${content.Name}stpt1`), {
          color: 'grey',
          size: 2
        });
        return myLine;
      });
      renderedLeader = true;
    }
  });

  const highlight = num => {
    setHighlightNum(num);
  };

  const unhighlight = () => {
    setHighlightNum(null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: props.section.title,
    className: "descriptionContainer"
  }, props.contents.map((content, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: `section_${props.section.title}_${content.Name}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      role: "button",
      tabIndex: i,
      className: "start pt",
      id: `${content.Name}stpt1`,
      style: {
        top: `${content.Top}%`,
        left: `${content.Left}%`
      },
      onMouseEnter: () => highlight(content.Number),
      onMouseLeave: () => unhighlight(),
      onClick: () => setSelectNum(content.Number)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "leaderTitle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      role: "button",
      tabIndex: i,
      className: ` ${content.Number === selectNum ? `selected` : ``} end pt`,
      id: `${content.Name}endpt1`,
      value: content.Number,
      onMouseEnter: () => highlight(content.Number),
      onMouseLeave: () => unhighlight(),
      onClick: () => setSelectNum(content.Number)
    }, content.Number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "endTitle"
    }, content.Name)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sectionDescription"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, props.contents[highlightNum ? highlightNum - 1 : selectNum - 1].Name), props.contents[highlightNum ? highlightNum - 1 : selectNum - 1].Description));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/section */ "./src/components/section.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");





 // styles

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif"
};

function objectFromArray(arr) {
  var result = [];
  var i, j;

  for (i = 1; i < arr.length; i++) {
    let object = {};
    let items;
    items = arr[i];

    for (j = 0; j < items.length; j++) {
      let objName = arr[0][j];
      let objValue = items[j]; //console.log(objName)
      //console.log(objValue)

      object[objName] = objValue;
    }

    result.push(object);
  }

  return result;
}

function objectFromTable(table) {
  var results = [];
  var contents = table.slice(table.indexOf("<tbody>") + 7, table.lastIndexOf("</tbody>")).split(`<tr>`);
  contents.map(content => {
    let raw_items = content.split(`<td>`);
    let items = [];
    raw_items.map(item => {
      if (item) {
        item = item.slice(0, item.indexOf(`<`));
        items.push(item);
      }
    });

    if (items.length) {
      results.push(items);
    }
  });
  var objects = objectFromArray(results);
  return objects; //console.log(objects)
} // markup


const IndexPage = ({
  data
}) => {
  //console.log(data)
  const imageRes = data.allWpPage.edges.find(edge => edge.node.title.includes(`Home`)).node.featuredImage.node.sourceUrl;
  const allSections = data.allWpPost.edges.map(edge => edge.node);
  const videoURL = data.allWpMediaItem.edges.find(edge => edge.node.title.includes("Video")).node.mediaItemUrl;
  allSections.sort(function (a, b) {
    return a.slug[0] - b.slug[0];
  });
  const postSections = [...allSections];
  postSections.shift();
  var frameNumber = 0; // start video at frame 0
  // lower numbers = faster playback

  var playbackConst = 1000;
  var frameDuration = 1; // get page height from video duration

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    var setHeight = document.getElementById("scrollingPage");
    var featContainer = document.getElementById(allSections[0].title);
    var featImg = document.getElementById("featureImg"); // select video element         

    var vid = document.getElementById('featureVideo'); // var vid = $('#v0')[0]; // jquery option

    if (!frameDuration) {
      frameDuration = 1;
    }

    if (react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile) {
      featContainer.style.height = `${window.innerHeight}px`;
      featImg.style.height = `${window.innerHeight}px`;
      vid.style.height = `${window.innerHeight * 0.7}px`;
    } else {//featContainer.style.height = `${window.innerHeight}px`
    } // dynamically set the page height according to video length


    vid.addEventListener('loadedmetadata', function () {
      //setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
      frameDuration = vid.duration;
    });
    window.addEventListener('scroll', event => {
      //console.log(window.pageYOffset);
      var frameNumber = window.pageYOffset / (setHeight.clientHeight - window.innerHeight) * frameDuration;
      vid.currentTime = frameNumber;
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sections: allSections.map(section => {
      return section.title;
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tagLine",
    dangerouslySetInnerHTML: {
      __html: allSections[0].content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "featureVideoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    id: "featureVideo",
    tabIndex: "0",
    preload: "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: videoURL
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "scrollingPage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "feature",
    id: allSections[0].title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    id: "featureImg",
    src: imageRes,
    alt: "feature CORB unit"
  })), postSections.map(section => {
    let contents = objectFromTable(section.content);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: section.title,
      section: section,
      contents: contents
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const indexQuery = "485582769";

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "LocationProvider": () => (/* binding */ LocationProvider),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "ServerLocation": () => (/* binding */ ServerLocation),
/* harmony export */   "createHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createHistory),
/* harmony export */   "createMemorySource": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createMemorySource),
/* harmony export */   "isRedirect": () => (/* binding */ isRedirect),
/* harmony export */   "navigate": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.navigate),
/* harmony export */   "redirectTo": () => (/* binding */ redirectTo),
/* harmony export */   "globalHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory),
/* harmony export */   "matchPath": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.match),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "BaseContext": () => (/* binding */ BaseContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "./.cache/react-lifecycles-compat.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js");
/* harmony import */ var _lib_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/history */ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */







////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory
};
 true ? LocationProvider.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
} : 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", {
  baseuri: "/",
  basepath: "/",
  navigate: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory.navigate
});

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.pick)(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, uri), options);
        }
      });

      var clone = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(element, props, element.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        BaseContext.Provider,
        {
          value: { baseuri: uri, basepath: basepath, navigate: props.navigate }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__.polyfill)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.startsWith)(location.pathname, encodedHref);

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.shallowCompare)(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 true ? Link.propTypes = {
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
      navigate((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
    if (!noThrow) redirectTo((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Redirect = function Redirect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 true ? Redirect.propTypes = {
  from: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, baseuri);
          var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? _extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, context.baseuri);
  var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) && element.props.children) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : 0 : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : 0 : void 0;

    !!(element.type === Redirect && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.validateRedirect)(element.props.from, element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : 0 : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/leader-line-new/leader-line.js":
/*!*****************************************************!*\
  !*** ./node_modules/leader-line-new/leader-line.js ***!
  \*****************************************************/
/***/ ((module) => {

/*! LeaderLine v1.1.5 (c) anseki https://anseki.github.io/leader-line/ */
module.exports = (function () {
  "use strict";
  console.log("Intialize LeadeLine")
  var te,
      M,
      I,
      C,
      L,
      o,
      t,
      h,
      f,
      p,
      n,
      a,
      e,
      x,
      b,
      l,
      r,
      i,
      k,
      w,
      s,
      u,
      c,
      A = "leader-line",
      V = 1,
      P = 2,
      N = 3,
      T = 4,
      W = { top: V, right: P, bottom: N, left: T },
      B = 1,
      R = 2,
      F = 3,
      G = 4,
      D = 5,
      z = { straight: B, arc: R, fluid: F, magnet: G, grid: D },
      ne = "behind",
      d = A + "-defs",
      y ='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="leader-line-defs"><style><![CDATA[.leader-line{position:absolute;overflow:visible!important;pointer-events:none!important;font-size:16px}#leader-line-defs{width:0;height:0;position:absolute;left:0;top:0}.leader-line-line-path{fill:none}.leader-line-mask-bg-rect{fill:#fff}.leader-line-caps-mask-anchor,.leader-line-caps-mask-marker-shape{fill:#000}.leader-line-caps-mask-anchor{stroke:#000}.leader-line-caps-mask-line,.leader-line-plugs-face{stroke:transparent}.leader-line-line-mask-shape{stroke:#fff}.leader-line-line-outline-mask-shape{stroke:#000}.leader-line-plug-mask-shape{fill:#fff;stroke:#000}.leader-line-plug-outline-mask-shape{fill:#000;stroke:#fff}.leader-line-areaAnchor{position:absolute;overflow:visible!important}]]></style><defs><circle id="leader-line-disc" cx="0" cy="0" r="5"/><rect id="leader-line-square" x="-5" y="-5" width="10" height="10"/><polygon id="leader-line-arrow1" points="-8,-8 8,0 -8,8 -5,0"/><polygon id="leader-line-arrow2" points="-4,-8 4,0 -4,8 -7,5 -2,0 -7,-5"/><polygon id="leader-line-arrow3" points="-4,-5 8,0 -4,5"/><g id="leader-line-hand"><path style="fill: #fcfcfc" d="M9.19 11.14h4.75c1.38 0 2.49-1.11 2.49-2.49 0-.51-.15-.98-.41-1.37h1.3c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.53-2.49-2.53h1.02c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49h14.96c1.37 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49H16.58C16-9.86 14.28-11.14 9.7-11.14c-4.79 0-6.55 3.42-7.87 4.73H-2.14v13.23h3.68C3.29 9.97 5.47 11.14 9.19 11.14L9.19 11.14Z"/><path style="fill: black" d="M13.95 12c1.85 0 3.35-1.5 3.35-3.35 0-.17-.02-.34-.04-.51h.07c1.85 0 3.35-1.5 3.35-3.35 0-.79-.27-1.51-.72-2.08 1.03-.57 1.74-1.67 1.74-2.93 0-.59-.16-1.15-.43-1.63h12.04c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35H17.2C16.26-10.93 13.91-12 9.7-12 5.36-12 3.22-9.4 1.94-7.84c0 0-.29.33-.5.57-.63 0-3.58 0-3.58 0C-2.61-7.27-3-6.88-3-6.41v13.23c0 .47.39.86.86.86 0 0 2.48 0 3.2 0C2.9 10.73 5.29 12 9.19 12L13.95 12ZM9.19 10.28c-3.46 0-5.33-1.05-6.9-3.87-.15-.27-.44-.44-.75-.44 0 0-1.81 0-2.82 0V-5.55c1.06 0 3.11 0 3.11 0 .25 0 .44-.06.61-.25l.83-.95c1.23-1.49 2.91-3.53 6.43-3.53 3.45 0 4.9.74 5.57 1.72h-4.3c-.48 0-.86.38-.86.86s.39.86.86.86h22.34c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63H15.83c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.52c.9 0 1.63.73 1.63 1.63s-.73 1.63-1.63 1.63h-3.12c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.11c.88 0 1.63.76 1.63 1.67 0 .9-.73 1.63-1.63 1.63h-3.2c-.48 0-.86.39-.86.86 0 .47.39.86.86.86h1.36c.05.16.09.34.09.51 0 .9-.73 1.63-1.63 1.63C13.95 10.28 9.19 10.28 9.19 10.28Z"/></g><g id="leader-line-crosshair"><path d="M0-78.97c-43.54 0-78.97 35.43-78.97 78.97 0 43.54 35.43 78.97 78.97 78.97s78.97-35.43 78.97-78.97C78.97-43.54 43.55-78.97 0-78.97ZM76.51-1.21h-9.91v-9.11h-2.43v9.11h-11.45c-.64-28.12-23.38-50.86-51.5-51.5V-64.17h9.11V-66.6h-9.11v-9.91C42.46-75.86 75.86-42.45 76.51-1.21ZM-1.21-30.76h-9.11v2.43h9.11V-4.2c-1.44.42-2.57 1.54-2.98 2.98H-28.33v-9.11h-2.43v9.11H-50.29C-49.65-28-27.99-49.65-1.21-50.29V-30.76ZM-30.76 1.21v9.11h2.43v-9.11H-4.2c.42 1.44 1.54 2.57 2.98 2.98v24.13h-9.11v2.43h9.11v19.53C-27.99 49.65-49.65 28-50.29 1.21H-30.76ZM1.22 30.75h9.11v-2.43h-9.11V4.2c1.44-.42 2.56-1.54 2.98-2.98h24.13v9.11h2.43v-9.11h19.53C49.65 28 28 49.65 1.22 50.29V30.75ZM30.76-1.21v-9.11h-2.43v9.11H4.2c-.42-1.44-1.54-2.56-2.98-2.98V-28.33h9.11v-2.43h-9.11V-50.29C28-49.65 49.65-28 50.29-1.21H30.76ZM-1.21-76.51v9.91h-9.11v2.43h9.11v11.45c-28.12.64-50.86 23.38-51.5 51.5H-64.17v-9.11H-66.6v9.11h-9.91C-75.86-42.45-42.45-75.86-1.21-76.51ZM-76.51 1.21h9.91v9.11h2.43v-9.11h11.45c.64 28.12 23.38 50.86 51.5 51.5v11.45h-9.11v2.43h9.11v9.91C-42.45 75.86-75.86 42.45-76.51 1.21ZM1.22 76.51v-9.91h9.11v-2.43h-9.11v-11.45c28.12-.64 50.86-23.38 51.5-51.5h11.45v9.11h2.43v-9.11h9.91C75.86 42.45 42.45 75.86 1.22 76.51Z"/><path d="M0 83.58-7.1 96 7.1 96Z"/><path d="M0-83.58 7.1-96-7.1-96"/><path d="M83.58 0 96 7.1 96-7.1Z"/><path d="M-83.58 0-96-7.1-96 7.1Z"/></g></defs></svg>',
      ae = {
          disc: {
              elmId: "leader-line-disc",
              noRotate: !0,
              bBox: { left: -5, top: -5, width: 10, height: 10, right: 5, bottom: 5 },
              widthR: 2.5,
              heightR: 2.5,
              bCircle: 5,
              sideLen: 5,
              backLen: 5,
              overhead: 0,
              outlineBase: 1,
              outlineMax: 4,
          },
          square: {
              elmId: "leader-line-square",
              noRotate: !0,
              bBox: { left: -5, top: -5, width: 10, height: 10, right: 5, bottom: 5 },
              widthR: 2.5,
              heightR: 2.5,
              bCircle: 5,
              sideLen: 5,
              backLen: 5,
              overhead: 0,
              outlineBase: 1,
              outlineMax: 4,
          },
          arrow1: { elmId: "leader-line-arrow1", bBox: { left: -8, top: -8, width: 16, height: 16, right: 8, bottom: 8 }, widthR: 4, heightR: 4, bCircle: 8, sideLen: 8, backLen: 8, overhead: 8, outlineBase: 2, outlineMax: 1.5 },
          arrow2: { elmId: "leader-line-arrow2", bBox: { left: -7, top: -8, width: 11, height: 16, right: 4, bottom: 8 }, widthR: 2.75, heightR: 4, bCircle: 8, sideLen: 8, backLen: 7, overhead: 4, outlineBase: 1, outlineMax: 1.75 },
          arrow3: { elmId: "leader-line-arrow3", bBox: { left: -4, top: -5, width: 12, height: 10, right: 8, bottom: 5 }, widthR: 3, heightR: 2.5, bCircle: 8, sideLen: 5, backLen: 4, overhead: 8, outlineBase: 1, outlineMax: 2.5 },
          hand: { elmId: "leader-line-hand", bBox: { left: -3, top: -12, width: 40, height: 24, right: 37, bottom: 12 }, widthR: 10, heightR: 6, bCircle: 37, sideLen: 12, backLen: 3, overhead: 37 },
          crosshair: { elmId: "leader-line-crosshair", noRotate: !0, bBox: { left: -96, top: -96, width: 192, height: 192, right: 96, bottom: 96 }, widthR: 48, heightR: 48, bCircle: 96, sideLen: 96, backLen: 96, overhead: 0 },
      },
      j = { behind: ne, disc: "disc", square: "square", arrow1: "arrow1", arrow2: "arrow2", arrow3: "arrow3", hand: "hand", crosshair: "crosshair" },
      ie = { disc: "disc", square: "square", arrow1: "arrow1", arrow2: "arrow2", arrow3: "arrow3", hand: "hand", crosshair: "crosshair" },
      H = [V, P, N, T],
      U = "auto",
      oe = { x: "left", y: "top", width: "width", height: "height" },
      Z = 80,
      Y = 4,
      X = 5,
      q = 120,
      Q = 8,
      K = 3.75,
      J = 10,
      $ = 30,
      ee = 0.5522847,
      le = 0.25 * Math.PI,
      m = /^\s*(\-?[\d\.]+)\s*(\%)?\s*$/,
      re = "http://www.w3.org/2000/svg",
      S = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style && !window.navigator.msPointerEnabled,
      se = !S && !!document.uniqueID,
      ue = "MozAppearance" in document.documentElement.style,
      he = !(S || ue || !window.chrome || !window.CSS),
      pe = !S && !se && !ue && !he && !window.chrome && "WebkitAppearance" in document.documentElement.style,
      ce = se || S ? 0.2 : 0.1,
      de = { path: F, lineColor: "coral", lineSize: 4, plugSE: [ne, "arrow1"], plugSizeSE: [1, 1], lineOutlineEnabled: !1, lineOutlineColor: "indianred", lineOutlineSize: 0.25, plugOutlineEnabledSE: [!1, !1], plugOutlineSizeSE: [1, 1] },
      fe =
          ((s = {}.toString),
          (u = {}.hasOwnProperty.toString),
          (c = u.call(Object)),
          function (e) {
              var t, n;
              return e && "[object Object]" === s.call(e) && (!(t = Object.getPrototypeOf(e)) || ((n = t.hasOwnProperty("constructor") && t.constructor) && "function" == typeof n && u.call(n) === c));
          }),
      ye =
          Number.isFinite ||
          function (e) {
              return "number" == typeof e && window.isFinite(e);
          },
      g =
          ((x = { ease: [0.25, 0.1, 0.25, 1], linear: [0, 0, 1, 1], "ease-in": [0.42, 0, 1, 1], "ease-out": [0, 0, 0.58, 1], "ease-in-out": [0.42, 0, 0.58, 1] }),
          (b = 1e3 / 60 / 2),
          (l =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (e) {
                  setTimeout(e, b);
              }),
          (r =
              window.cancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.msCancelAnimationFrame ||
              function (e) {
                  clearTimeout(e);
              }),
          (i =
              Number.isFinite ||
              function (e) {
                  return "number" == typeof e && window.isFinite(e);
              }),
          (k = []),
          (w = 0),
          {
              add: function (n, e, t, a, i, o, l) {
                  var r,
                      s,
                      u,
                      h,
                      p,
                      c,
                      d,
                      f,
                      y,
                      m,
                      S,
                      g,
                      _,
                      v = ++w;
                  function E(e, t) {
                      return { value: n(t), timeRatio: e, outputRatio: t };
                  }
                  if (("string" == typeof i && (i = x[i]), (n = n || function () {}), t < b)) s = [E(0, 0), E(1, 1)];
                  else {
                      if (((u = b / t), (s = [E(0, 0)]), 0 === i[0] && 0 === i[1] && 1 === i[2] && 1 === i[3])) for (p = u; p <= 1; p += u) s.push(E(p, p));
                      else
                          for (c = h = (p = u) / 10; c <= 1; c += h)
                              (_ = g = S = m = y = void 0),
                                  (m = (y = (f = c) * f) * f),
                                  (_ = 3 * (S = 1 - f) * y),
                                  p <= (d = { x: (g = S * S * 3 * f) * i[0] + _ * i[2] + m, y: g * i[1] + _ * i[3] + m }).x && (s.push(E(d.x, d.y)), (p += u));
                      s.push(E(1, 1));
                  }
                  return (r = { animId: v, frameCallback: e, duration: t, count: a, frames: s, reverse: !!o }), k.push(r), !1 !== l && ke(r, l), v;
              },
              remove: function (n) {
                  var a;
                  k.some(function (e, t) {
                      return e.animId === n && ((a = t), !(e.framesStart = null));
                  }) && k.splice(a, 1);
              },
              start: function (t, n, a) {
                  k.some(function (e) {
                      return e.animId === t && ((e.reverse = !!n), ke(e, a), !0);
                  });
              },
              stop: function (t, n) {
                  var a;
                  return (
                      k.some(function (e) {
                          return (
                              e.animId === t &&
                              (n ? null != e.lastFrame && (a = e.frames[e.lastFrame].timeRatio) : ((a = (Date.now() - e.framesStart) / e.duration), e.reverse && (a = 1 - a), a < 0 ? (a = 0) : 1 < a && (a = 1)), !(e.framesStart = null))
                          );
                      }),
                      a
                  );
              },
              validTiming: function (t) {
                  return "string" == typeof t
                      ? x[t]
                      : Array.isArray(t) &&
                        [0, 1, 2, 3].every(function (e) {
                            return i(t[e]) && 0 <= t[e] && t[e] <= 1;
                        })
                      ? [t[0], t[1], t[2], t[3]]
                      : null;
              },
          }),
      _ = function (e) {
          (e.SVGPathElement.prototype.getPathData && e.SVGPathElement.prototype.setPathData) ||
              (function () {
                  function i(e) {
                      (this._string = e), (this._currentIndex = 0), (this._endIndex = this._string.length), (this._prevCommand = null), this._skipOptionalSpaces();
                  }
                  var o = { Z: "Z", M: "M", L: "L", C: "C", Q: "Q", A: "A", H: "H", V: "V", S: "S", T: "T", z: "Z", m: "m", l: "l", c: "c", q: "q", a: "a", h: "h", v: "v", s: "s", t: "t" },
                      l = -1 !== e.navigator.userAgent.indexOf("MSIE ");
                  i.prototype = {
                      parseSegment: function () {
                          var e = this._string[this._currentIndex],
                              t = o[e] ? o[e] : null;
                          if (null === t) {
                              if (null === this._prevCommand) return null;
                              if (
                                  null === (t = ("+" === e || "-" === e || "." === e || ("0" <= e && e <= "9")) && "Z" !== this._prevCommand ? ("M" === this._prevCommand ? "L" : "m" === this._prevCommand ? "l" : this._prevCommand) : null)
                              )
                                  return null;
                          } else this._currentIndex += 1;
                          var n = null,
                              a = (this._prevCommand = t).toUpperCase();
                          return (
                              "H" === a || "V" === a
                                  ? (n = [this._parseNumber()])
                                  : "M" === a || "L" === a || "T" === a
                                  ? (n = [this._parseNumber(), this._parseNumber()])
                                  : "S" === a || "Q" === a
                                  ? (n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()])
                                  : "C" === a
                                  ? (n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()])
                                  : "A" === a
                                  ? (n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseArcFlag(), this._parseArcFlag(), this._parseNumber(), this._parseNumber()])
                                  : "Z" === a && (this._skipOptionalSpaces(), (n = [])),
                              null === n || 0 <= n.indexOf(null) ? null : { type: t, values: n }
                          );
                      },
                      hasMoreData: function () {
                          return this._currentIndex < this._endIndex;
                      },
                      peekSegmentType: function () {
                          var e = this._string[this._currentIndex];
                          return o[e] ? o[e] : null;
                      },
                      initialCommandIsMoveTo: function () {
                          if (!this.hasMoreData()) return !0;
                          var e = this.peekSegmentType();
                          return "M" === e || "m" === e;
                      },
                      _isCurrentSpace: function () {
                          var e = this._string[this._currentIndex];
                          return e <= " " && (" " === e || "\n" === e || "\t" === e || "\r" === e || "\f" === e);
                      },
                      _skipOptionalSpaces: function () {
                          for (; this._currentIndex < this._endIndex && this._isCurrentSpace(); ) this._currentIndex += 1;
                          return this._currentIndex < this._endIndex;
                      },
                      _skipOptionalSpacesOrDelimiter: function () {
                          return (
                              !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," !== this._string[this._currentIndex]) &&
                              (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," === this._string[this._currentIndex] && ((this._currentIndex += 1), this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
                          );
                      },
                      _parseNumber: function () {
                          var e = 0,
                              t = 0,
                              n = 1,
                              a = 0,
                              i = 1,
                              o = 1,
                              l = this._currentIndex;
                          if (
                              (this._skipOptionalSpaces(),
                              this._currentIndex < this._endIndex && "+" === this._string[this._currentIndex]
                                  ? (this._currentIndex += 1)
                                  : this._currentIndex < this._endIndex && "-" === this._string[this._currentIndex] && ((this._currentIndex += 1), (i = -1)),
                              this._currentIndex === this._endIndex || ((this._string[this._currentIndex] < "0" || "9" < this._string[this._currentIndex]) && "." !== this._string[this._currentIndex]))
                          )
                              return null;
                          for (var r = this._currentIndex; this._currentIndex < this._endIndex && "0" <= this._string[this._currentIndex] && this._string[this._currentIndex] <= "9"; ) this._currentIndex += 1;
                          if (this._currentIndex !== r) for (var s = this._currentIndex - 1, u = 1; r <= s; ) (t += u * (this._string[s] - "0")), --s, (u *= 10);
                          if (this._currentIndex < this._endIndex && "." === this._string[this._currentIndex]) {
                              if (((this._currentIndex += 1), this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || "9" < this._string[this._currentIndex])) return null;
                              for (; this._currentIndex < this._endIndex && "0" <= this._string[this._currentIndex] && this._string[this._currentIndex] <= "9"; )
                                  (n *= 10), (a += (this._string.charAt(this._currentIndex) - "0") / n), (this._currentIndex += 1);
                          }
                          if (
                              this._currentIndex !== l &&
                              this._currentIndex + 1 < this._endIndex &&
                              ("e" === this._string[this._currentIndex] || "E" === this._string[this._currentIndex]) &&
                              "x" !== this._string[this._currentIndex + 1] &&
                              "m" !== this._string[this._currentIndex + 1]
                          ) {
                              if (
                                  ((this._currentIndex += 1),
                                  "+" === this._string[this._currentIndex] ? (this._currentIndex += 1) : "-" === this._string[this._currentIndex] && ((this._currentIndex += 1), (o = -1)),
                                  this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || "9" < this._string[this._currentIndex])
                              )
                                  return null;
                              for (; this._currentIndex < this._endIndex && "0" <= this._string[this._currentIndex] && this._string[this._currentIndex] <= "9"; )
                                  (e *= 10), (e += this._string[this._currentIndex] - "0"), (this._currentIndex += 1);
                          }
                          var h = t + a;
                          return (h *= i), e && (h *= Math.pow(10, o * e)), l === this._currentIndex ? null : (this._skipOptionalSpacesOrDelimiter(), h);
                      },
                      _parseArcFlag: function () {
                          if (this._currentIndex >= this._endIndex) return null;
                          var e = null,
                              t = this._string[this._currentIndex];
                          if (((this._currentIndex += 1), "0" === t)) e = 0;
                          else {
                              if ("1" !== t) return null;
                              e = 1;
                          }
                          return this._skipOptionalSpacesOrDelimiter(), e;
                      },
                  };
                  function a(e) {
                      if (!e || 0 === e.length) return [];
                      var t = new i(e),
                          n = [];
                      if (t.initialCommandIsMoveTo())
                          for (; t.hasMoreData(); ) {
                              var a = t.parseSegment();
                              if (null === a) break;
                              n.push(a);
                          }
                      return n;
                  }
                  function r(e) {
                      return e.map(function (e) {
                          return { type: e.type, values: Array.prototype.slice.call(e.values) };
                      });
                  }
                  function d(e) {
                      var m = [],
                          S = null,
                          g = null,
                          _ = null,
                          v = null,
                          E = null,
                          x = null,
                          b = null;
                      return (
                          e.forEach(function (e) {
                              var t, n, a, i, o, l, r, s, u, h, p, c, d, f, y;
                              "M" === e.type
                                  ? ((f = e.values[0]), (y = e.values[1]), m.push({ type: "M", values: [f, y] }), (v = x = f), (E = b = y))
                                  : "C" === e.type
                                  ? ((a = e.values[0]), (i = e.values[1]), (t = e.values[2]), (n = e.values[3]), (f = e.values[4]), (y = e.values[5]), m.push({ type: "C", values: [a, i, t, n, f, y] }), (g = t), (_ = n), (v = f), (E = y))
                                  : "L" === e.type
                                  ? ((f = e.values[0]), (y = e.values[1]), m.push({ type: "L", values: [f, y] }), (v = f), (E = y))
                                  : "H" === e.type
                                  ? ((f = e.values[0]), m.push({ type: "L", values: [f, E] }), (v = f))
                                  : "V" === e.type
                                  ? ((y = e.values[0]), m.push({ type: "L", values: [v, y] }), (E = y))
                                  : "S" === e.type
                                  ? ((t = e.values[0]),
                                    (n = e.values[1]),
                                    (f = e.values[2]),
                                    (y = e.values[3]),
                                    (l = "C" === S || "S" === S ? ((o = v + (v - g)), E + (E - _)) : ((o = v), E)),
                                    m.push({ type: "C", values: [o, l, t, n, f, y] }),
                                    (g = t),
                                    (_ = n),
                                    (v = f),
                                    (E = y))
                                  : "T" === e.type
                                  ? ((f = e.values[0]),
                                    (y = e.values[1]),
                                    (i = "Q" === S || "T" === S ? ((a = v + (v - g)), E + (E - _)) : ((a = v), E)),
                                    (o = v + (2 * (a - v)) / 3),
                                    (l = E + (2 * (i - E)) / 3),
                                    (r = f + (2 * (a - f)) / 3),
                                    (s = y + (2 * (i - y)) / 3),
                                    m.push({ type: "C", values: [o, l, r, s, f, y] }),
                                    (g = a),
                                    (_ = i),
                                    (v = f),
                                    (E = y))
                                  : "Q" === e.type
                                  ? ((a = e.values[0]),
                                    (i = e.values[1]),
                                    (f = e.values[2]),
                                    (y = e.values[3]),
                                    (o = v + (2 * (a - v)) / 3),
                                    (l = E + (2 * (i - E)) / 3),
                                    (r = f + (2 * (a - f)) / 3),
                                    (s = y + (2 * (i - y)) / 3),
                                    m.push({ type: "C", values: [o, l, r, s, f, y] }),
                                    (g = a),
                                    (_ = i),
                                    (v = f),
                                    (E = y))
                                  : "A" === e.type
                                  ? ((u = e.values[0]),
                                    (h = e.values[1]),
                                    (p = e.values[2]),
                                    (c = e.values[3]),
                                    (d = e.values[4]),
                                    (f = e.values[5]),
                                    (y = e.values[6]),
                                    0 === u || 0 === h
                                        ? (m.push({ type: "C", values: [v, E, f, y, f, y] }), (v = f), (E = y))
                                        : (v === f && E === y) ||
                                          U(v, E, f, y, u, h, p, c, d).forEach(function (e) {
                                              m.push({ type: "C", values: e }), (v = f), (E = y);
                                          }))
                                  : "Z" === e.type && (m.push(e), (v = x), (E = b)),
                                  (S = e.type);
                          }),
                          m
                      );
                  }
                  var n = e.SVGPathElement.prototype.setAttribute,
                      s = e.SVGPathElement.prototype.removeAttribute,
                      f = e.Symbol ? e.Symbol() : "__cachedPathData",
                      y = e.Symbol ? e.Symbol() : "__cachedNormalizedPathData",
                      U = function (e, t, n, a, i, o, l, r, s, u) {
                          function h(e, t, n) {
                              return { x: e * Math.cos(n) - t * Math.sin(n), y: e * Math.sin(n) + t * Math.cos(n) };
                          }
                          var p,
                              c,
                              d,
                              f,
                              y,
                              m,
                              S,
                              g,
                              _,
                              v,
                              E,
                              x,
                              b,
                              k,
                              w,
                              O = ((p = l), (Math.PI * p) / 180),
                              M = [];
                          u
                              ? ((k = u[0]), (w = u[1]), (x = u[2]), (b = u[3]))
                              : ((e = (c = h(e, t, -O)).x),
                                (t = c.y),
                                1 < (m = ((f = (e - (n = (d = h(n, a, -O)).x)) / 2) * f) / (i * i) + ((y = (t - (a = d.y)) / 2) * y) / (o * o)) && ((i *= m = Math.sqrt(m)), (o *= m)),
                                (_ = (S = i * i) * (g = o * o) - S * y * y - g * f * f),
                                (v = S * y * y + g * f * f),
                                (x = ((E = (r === s ? -1 : 1) * Math.sqrt(Math.abs(_ / v))) * i * y) / o + (e + n) / 2),
                                (b = (E * -o * f) / i + (t + a) / 2),
                                (k = Math.asin(parseFloat(((t - b) / o).toFixed(9)))),
                                (w = Math.asin(parseFloat(((a - b) / o).toFixed(9)))),
                                e < x && (k = Math.PI - k),
                                n < x && (w = Math.PI - w),
                                k < 0 && (k = 2 * Math.PI + k),
                                w < 0 && (w = 2 * Math.PI + w),
                                s && w < k && (k -= 2 * Math.PI),
                                !s && k < w && (w -= 2 * Math.PI));
                          var I,
                              C,
                              L,
                              A = w - k;
                          Math.abs(A) > (120 * Math.PI) / 180 &&
                              ((I = w),
                              (C = n),
                              (L = a),
                              (w = s && k < w ? k + ((120 * Math.PI) / 180) * 1 : k + ((120 * Math.PI) / 180) * -1),
                              (n = x + i * Math.cos(w)),
                              (a = b + o * Math.sin(w)),
                              (M = U(n, a, C, L, i, o, l, 0, s, [w, I, x, b]))),
                              (A = w - k);
                          var V = Math.cos(k),
                              P = Math.sin(k),
                              N = Math.cos(w),
                              T = Math.sin(w),
                              W = Math.tan(A / 4),
                              B = (4 / 3) * i * W,
                              R = (4 / 3) * o * W,
                              F = [e, t],
                              G = [e + B * P, t - R * V],
                              D = [n + B * T, a - R * N],
                              z = [n, a];
                          if (((G[0] = 2 * F[0] - G[0]), (G[1] = 2 * F[1] - G[1]), u)) return [G, D, z].concat(M);
                          M = [G, D, z].concat(M).join().split(",");
                          var j = [],
                              H = [];
                          return (
                              M.forEach(function (e, t) {
                                  t % 2 ? H.push(h(M[t - 1], M[t], O).y) : H.push(h(M[t], M[t + 1], O).x), 6 === H.length && (j.push(H), (H = []));
                              }),
                              j
                          );
                      };
                  (e.SVGPathElement.prototype.setAttribute = function (e, t) {
                      "d" === e && ((this[f] = null), (this[y] = null)), n.call(this, e, t);
                  }),
                      (e.SVGPathElement.prototype.removeAttribute = function (e, t) {
                          "d" === e && ((this[f] = null), (this[y] = null)), s.call(this, e);
                      }),
                      (e.SVGPathElement.prototype.getPathData = function (e) {
                          if (e && e.normalize) {
                              if (this[y]) return r(this[y]);
                              this[f] ? (n = r(this[f])) : ((n = a(this.getAttribute("d") || "")), (this[f] = r(n)));
                              var t = d(
                                  ((s = []),
                                  (c = p = h = u = null),
                                  n.forEach(function (e) {
                                      var t,
                                          n,
                                          a,
                                          i,
                                          o,
                                          l,
                                          r = e.type;
                                      "M" === r
                                          ? ((o = e.values[0]), (l = e.values[1]), s.push({ type: "M", values: [o, l] }), (u = p = o), (h = c = l))
                                          : "m" === r
                                          ? ((o = u + e.values[0]), (l = h + e.values[1]), s.push({ type: "M", values: [o, l] }), (u = p = o), (h = c = l))
                                          : "L" === r
                                          ? ((o = e.values[0]), (l = e.values[1]), s.push({ type: "L", values: [o, l] }), (u = o), (h = l))
                                          : "l" === r
                                          ? ((o = u + e.values[0]), (l = h + e.values[1]), s.push({ type: "L", values: [o, l] }), (u = o), (h = l))
                                          : "C" === r
                                          ? ((t = e.values[0]), (n = e.values[1]), (a = e.values[2]), (i = e.values[3]), (o = e.values[4]), (l = e.values[5]), s.push({ type: "C", values: [t, n, a, i, o, l] }), (u = o), (h = l))
                                          : "c" === r
                                          ? ((t = u + e.values[0]),
                                            (n = h + e.values[1]),
                                            (a = u + e.values[2]),
                                            (i = h + e.values[3]),
                                            (o = u + e.values[4]),
                                            (l = h + e.values[5]),
                                            s.push({ type: "C", values: [t, n, a, i, o, l] }),
                                            (u = o),
                                            (h = l))
                                          : "Q" === r
                                          ? ((t = e.values[0]), (n = e.values[1]), (o = e.values[2]), (l = e.values[3]), s.push({ type: "Q", values: [t, n, o, l] }), (u = o), (h = l))
                                          : "q" === r
                                          ? ((t = u + e.values[0]), (n = h + e.values[1]), (o = u + e.values[2]), (l = h + e.values[3]), s.push({ type: "Q", values: [t, n, o, l] }), (u = o), (h = l))
                                          : "A" === r
                                          ? ((o = e.values[5]), (l = e.values[6]), s.push({ type: "A", values: [e.values[0], e.values[1], e.values[2], e.values[3], e.values[4], o, l] }), (u = o), (h = l))
                                          : "a" === r
                                          ? ((o = u + e.values[5]), (l = h + e.values[6]), s.push({ type: "A", values: [e.values[0], e.values[1], e.values[2], e.values[3], e.values[4], o, l] }), (u = o), (h = l))
                                          : "H" === r
                                          ? ((o = e.values[0]), s.push({ type: "H", values: [o] }), (u = o))
                                          : "h" === r
                                          ? ((o = u + e.values[0]), s.push({ type: "H", values: [o] }), (u = o))
                                          : "V" === r
                                          ? ((l = e.values[0]), s.push({ type: "V", values: [l] }), (h = l))
                                          : "v" === r
                                          ? ((l = h + e.values[0]), s.push({ type: "V", values: [l] }), (h = l))
                                          : "S" === r
                                          ? ((a = e.values[0]), (i = e.values[1]), (o = e.values[2]), (l = e.values[3]), s.push({ type: "S", values: [a, i, o, l] }), (u = o), (h = l))
                                          : "s" === r
                                          ? ((a = u + e.values[0]), (i = h + e.values[1]), (o = u + e.values[2]), (l = h + e.values[3]), s.push({ type: "S", values: [a, i, o, l] }), (u = o), (h = l))
                                          : "T" === r
                                          ? ((o = e.values[0]), (l = e.values[1]), s.push({ type: "T", values: [o, l] }), (u = o), (h = l))
                                          : "t" === r
                                          ? ((o = u + e.values[0]), (l = h + e.values[1]), s.push({ type: "T", values: [o, l] }), (u = o), (h = l))
                                          : ("Z" !== r && "z" !== r) || (s.push({ type: "Z", values: [] }), (u = p), (h = c));
                                  }),
                                  s)
                              );
                              return (this[y] = r(t)), t;
                          }
                          if (this[f]) return r(this[f]);
                          var s,
                              u,
                              h,
                              p,
                              c,
                              n = a(this.getAttribute("d") || "");
                          return (this[f] = r(n)), n;
                      }),
                      (e.SVGPathElement.prototype.setPathData = function (e) {
                          if (0 === e.length) l ? this.setAttribute("d", "") : this.removeAttribute("d");
                          else {
                              for (var t = "", n = 0, a = e.length; n < a; n += 1) {
                                  var i = e[n];
                                  0 < n && (t += " "), (t += i.type), i.values && 0 < i.values.length && (t += " " + i.values.join(" "));
                              }
                              this.setAttribute("d", t);
                          }
                      }),
                      (e.SVGRectElement.prototype.getPathData = function (e) {
                          var t = this.x.baseVal.value,
                              n = this.y.baseVal.value,
                              a = this.width.baseVal.value,
                              i = this.height.baseVal.value,
                              o = this.hasAttribute("rx") ? this.rx.baseVal.value : this.ry.baseVal.value,
                              l = this.hasAttribute("ry") ? this.ry.baseVal.value : this.rx.baseVal.value;
                          a / 2 < o && (o = a / 2), i / 2 < l && (l = i / 2);
                          var r = (r = [
                              { type: "M", values: [t + o, n] },
                              { type: "H", values: [t + a - o] },
                              { type: "A", values: [o, l, 0, 0, 1, t + a, n + l] },
                              { type: "V", values: [n + i - l] },
                              { type: "A", values: [o, l, 0, 0, 1, t + a - o, n + i] },
                              { type: "H", values: [t + o] },
                              { type: "A", values: [o, l, 0, 0, 1, t, n + i - l] },
                              { type: "V", values: [n + l] },
                              { type: "A", values: [o, l, 0, 0, 1, t + o, n] },
                              { type: "Z", values: [] },
                          ]).filter(function (e) {
                              return "A" !== e.type || (0 !== e.values[0] && 0 !== e.values[1]);
                          });
                          return e && !0 === e.normalize && (r = d(r)), r;
                      }),
                      (e.SVGCircleElement.prototype.getPathData = function (e) {
                          var t = this.cx.baseVal.value,
                              n = this.cy.baseVal.value,
                              a = this.r.baseVal.value,
                              i = [
                                  { type: "M", values: [t + a, n] },
                                  { type: "A", values: [a, a, 0, 0, 1, t, n + a] },
                                  { type: "A", values: [a, a, 0, 0, 1, t - a, n] },
                                  { type: "A", values: [a, a, 0, 0, 1, t, n - a] },
                                  { type: "A", values: [a, a, 0, 0, 1, t + a, n] },
                                  { type: "Z", values: [] },
                              ];
                          return e && !0 === e.normalize && (i = d(i)), i;
                      }),
                      (e.SVGEllipseElement.prototype.getPathData = function (e) {
                          var t = this.cx.baseVal.value,
                              n = this.cy.baseVal.value,
                              a = this.rx.baseVal.value,
                              i = this.ry.baseVal.value,
                              o = [
                                  { type: "M", values: [t + a, n] },
                                  { type: "A", values: [a, i, 0, 0, 1, t, n + i] },
                                  { type: "A", values: [a, i, 0, 0, 1, t - a, n] },
                                  { type: "A", values: [a, i, 0, 0, 1, t, n - i] },
                                  { type: "A", values: [a, i, 0, 0, 1, t + a, n] },
                                  { type: "Z", values: [] },
                              ];
                          return e && !0 === e.normalize && (o = d(o)), o;
                      }),
                      (e.SVGLineElement.prototype.getPathData = function () {
                          return [
                              { type: "M", values: [this.x1.baseVal.value, this.y1.baseVal.value] },
                              { type: "L", values: [this.x2.baseVal.value, this.y2.baseVal.value] },
                          ];
                      }),
                      (e.SVGPolylineElement.prototype.getPathData = function () {
                          for (var e = [], t = 0; t < this.points.numberOfItems; t += 1) {
                              var n = this.points.getItem(t);
                              e.push({ type: 0 === t ? "M" : "L", values: [n.x, n.y] });
                          }
                          return e;
                      }),
                      (e.SVGPolygonElement.prototype.getPathData = function () {
                          for (var e = [], t = 0; t < this.points.numberOfItems; t += 1) {
                              var n = this.points.getItem(t);
                              e.push({ type: 0 === t ? "M" : "L", values: [n.x, n.y] });
                          }
                          return e.push({ type: "Z", values: [] }), e;
                      });
              })();
      },
      v =
          ((a = {}),
          (xe.m = n = [
              function (e, t, n) {
                  n.r(t);
                  var a = 500,
                      i = [],
                      o =
                          window.requestAnimationFrame ||
                          window.mozRequestAnimationFrame ||
                          window.webkitRequestAnimationFrame ||
                          window.msRequestAnimationFrame ||
                          function (e) {
                              return setTimeout(e, 1e3 / 60);
                          },
                      l =
                          window.cancelAnimationFrame ||
                          window.mozCancelAnimationFrame ||
                          window.webkitCancelAnimationFrame ||
                          window.msCancelAnimationFrame ||
                          function (e) {
                              return clearTimeout(e);
                          },
                      r = Date.now(),
                      s = void 0;
                  function u() {
                      var n = void 0,
                          e = void 0;
                      s && (l.call(window, s), (s = null)),
                          i.forEach(function (e) {
                              var t;
                              (t = e.event) && ((e.event = null), e.listener(t), (n = !0));
                          }),
                          n ? ((r = Date.now()), (e = !0)) : Date.now() - r < a && (e = !0),
                          e && (s = o.call(window, u));
                  }
                  function h(n) {
                      var a = -1;
                      return (
                          i.some(function (e, t) {
                              return e.listener === n && ((a = t), !0);
                          }),
                          a
                      );
                  }
                  var p = {
                      add: function (e) {
                          var t = void 0;
                          return -1 === h(e)
                              ? (i.push((t = { listener: e })),
                                function (e) {
                                    (t.event = e), s || u();
                                })
                              : null;
                      },
                      remove: function (e) {
                          var t;
                          -1 < (t = h(e)) && (i.splice(t, 1), !i.length && s && (l.call(window, s), (s = null)));
                      },
                  };
                  t.default = p;
              },
          ]),
          (xe.c = a),
          (xe.d = function (e, t, n) {
              xe.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
          }),
          (xe.r = function (e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (xe.t = function (t, e) {
              if ((1 & e && (t = xe(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var n = Object.create(null);
              if ((xe.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                  for (var a in t)
                      xe.d(
                          n,
                          a,
                          function (e) {
                              return t[e];
                          }.bind(null, a)
                      );
              return n;
          }),
          (xe.n = function (e) {
              var t =
                  e && e.__esModule
                      ? function () {
                            return e.default;
                        }
                      : function () {
                            return e;
                        };
              return xe.d(t, "a", t), t;
          }),
          (xe.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (xe.p = ""),
          xe((xe.s = 0)).default),
      me = {
          line_altColor: { iniValue: !1 },
          line_color: {},
          line_colorTra: { iniValue: !1 },
          line_strokeWidth: {},
          plug_enabled: { iniValue: !1 },
          plug_enabledSE: { hasSE: !0, iniValue: !1 },
          plug_plugSE: { hasSE: !0, iniValue: ne },
          plug_colorSE: { hasSE: !0 },
          plug_colorTraSE: { hasSE: !0, iniValue: !1 },
          plug_markerWidthSE: { hasSE: !0 },
          plug_markerHeightSE: { hasSE: !0 },
          lineOutline_enabled: { iniValue: !1 },
          lineOutline_color: {},
          lineOutline_colorTra: { iniValue: !1 },
          lineOutline_strokeWidth: {},
          lineOutline_inStrokeWidth: {},
          plugOutline_enabledSE: { hasSE: !0, iniValue: !1 },
          plugOutline_plugSE: { hasSE: !0, iniValue: ne },
          plugOutline_colorSE: { hasSE: !0 },
          plugOutline_colorTraSE: { hasSE: !0, iniValue: !1 },
          plugOutline_strokeWidthSE: { hasSE: !0 },
          plugOutline_inStrokeWidthSE: { hasSE: !0 },
          position_socketXYSE: { hasSE: !0, hasProps: !0 },
          position_plugOverheadSE: { hasSE: !0 },
          position_path: {},
          position_lineStrokeWidth: {},
          position_socketGravitySE: { hasSE: !0 },
          path_pathData: {},
          path_edge: { hasProps: !0 },
          viewBox_bBox: { hasProps: !0 },
          viewBox_plugBCircleSE: { hasSE: !0 },
          lineMask_enabled: { iniValue: !1 },
          lineMask_outlineMode: { iniValue: !1 },
          lineMask_x: {},
          lineMask_y: {},
          lineOutlineMask_x: {},
          lineOutlineMask_y: {},
          maskBGRect_x: {},
          maskBGRect_y: {},
          capsMaskAnchor_enabledSE: { hasSE: !0, iniValue: !1 },
          capsMaskAnchor_pathDataSE: { hasSE: !0 },
          capsMaskAnchor_strokeWidthSE: { hasSE: !0 },
          capsMaskMarker_enabled: { iniValue: !1 },
          capsMaskMarker_enabledSE: { hasSE: !0, iniValue: !1 },
          capsMaskMarker_plugSE: { hasSE: !0, iniValue: ne },
          capsMaskMarker_markerWidthSE: { hasSE: !0 },
          capsMaskMarker_markerHeightSE: { hasSE: !0 },
          caps_enabled: { iniValue: !1 },
          attach_plugSideLenSE: { hasSE: !0 },
          attach_plugBackLenSE: { hasSE: !0 },
      },
      E = { show_on: {}, show_effect: {}, show_animOptions: {}, show_animId: {}, show_inAnim: {} },
      O = "fade",
      Se = [],
      ge = {},
      _e = 0,
      ve = {},
      Ee = 0;
  function xe(e) {
      if (a[e]) return a[e].exports;
      var t = (a[e] = { i: e, l: !1, exports: {} });
      return n[e].call(t.exports, t, t.exports, xe), (t.l = !0), t.exports;
  }
  function be() {
      var i = Date.now(),
          o = !1;
      e && (r.call(window, e), (e = null)),
          k.forEach(function (e) {
              var t, n, a;
              if (e.framesStart) {
                  if ((t = i - e.framesStart) >= e.duration && e.count && e.loopsLeft <= 1)
                      return (a = e.frames[(e.lastFrame = e.reverse ? 0 : e.frames.length - 1)]), e.frameCallback(a.value, !0, a.timeRatio, a.outputRatio), void (e.framesStart = null);
                  if (t > e.duration) {
                      if (((n = Math.floor(t / e.duration)), e.count)) {
                          if (n >= e.loopsLeft) return (a = e.frames[(e.lastFrame = e.reverse ? 0 : e.frames.length - 1)]), e.frameCallback(a.value, !0, a.timeRatio, a.outputRatio), void (e.framesStart = null);
                          e.loopsLeft -= n;
                      }
                      (e.framesStart += e.duration * n), (t = i - e.framesStart);
                  }
                  e.reverse && (t = e.duration - t), (a = e.frames[(e.lastFrame = Math.round(t / b))]), !1 !== e.frameCallback(a.value, !1, a.timeRatio, a.outputRatio) ? (o = !0) : (e.framesStart = null);
              }
          }),
          o && (e = l.call(window, be));
  }
  function ke(e, t) {
      (e.framesStart = Date.now()), null != t && (e.framesStart -= e.duration * (e.reverse ? 1 - t : t)), (e.loopsLeft = e.count), (e.lastFrame = null), be();
  }
  function we(t, n) {
      var e, a;
      return (
          typeof t != typeof n ||
          (e = fe(t) ? "obj" : Array.isArray(t) ? "array" : "") != (fe(n) ? "obj" : Array.isArray(n) ? "array" : "") ||
          ("obj" === e
              ? we((a = Object.keys(t).sort()), Object.keys(n).sort()) ||
                a.some(function (e) {
                    return we(t[e], n[e]);
                })
              : "array" === e
              ? t.length !== n.length ||
                t.some(function (e, t) {
                    return we(e, n[t]);
                })
              : t !== n)
      );
  }
  function Oe(n) {
      return n
          ? fe(n)
              ? Object.keys(n).reduce(function (e, t) {
                    return (e[t] = Oe(n[t])), e;
                }, {})
              : Array.isArray(n)
              ? n.map(Oe)
              : n
          : n;
  }
  function Me(e) {
      var t,
          n,
          a,
          i = 1,
          o = (e = (e + "").trim());
      function l(e) {
          var t = 1,
              n = m.exec(e);
          return n && ((t = parseFloat(n[1])), n[2] ? (t = 0 <= t && t <= 100 ? t / 100 : 1) : (t < 0 || 1 < t) && (t = 1)), t;
      }
      return (
          (t = /^(rgba|hsla|hwb|gray|device\-cmyk)\s*\(([\s\S]+)\)$/i.exec(e))
              ? ((n = t[1].toLowerCase()),
                (a = t[2].trim().split(/\s*,\s*/)),
                "rgba" === n && 4 === a.length
                    ? ((i = l(a[3])), (o = "rgb(" + a.slice(0, 3).join(", ") + ")"))
                    : "hsla" === n && 4 === a.length
                    ? ((i = l(a[3])), (o = "hsl(" + a.slice(0, 3).join(", ") + ")"))
                    : "hwb" === n && 4 === a.length
                    ? ((i = l(a[3])), (o = "hwb(" + a.slice(0, 3).join(", ") + ")"))
                    : "gray" === n && 2 === a.length
                    ? ((i = l(a[1])), (o = "gray(" + a[0] + ")"))
                    : "device-cmyk" === n && 5 <= a.length && ((i = l(a[4])), (o = "device-cmyk(" + a.slice(0, 4).join(", ") + ")")))
              : (t = /^\#(?:([\da-f]{6})([\da-f]{2})|([\da-f]{3})([\da-f]))$/i.exec(e))
              ? (o = t[1] ? ((i = parseInt(t[2], 16) / 255), "#" + t[1]) : ((i = parseInt(t[4] + t[4], 16) / 255), "#" + t[3]))
              : "transparent" === e.toLocaleLowerCase() && (i = 0),
          [i, o]
      );
  }
  function Ie(e) {
      return !(!e || e.nodeType !== Node.ELEMENT_NODE || "function" != typeof e.getBoundingClientRect);
  }
  function Ce(e, t) {
      var n,
          a,
          i,
          o,
          l = {};
      if (!(i = e.ownerDocument)) return console.error("Cannot get document that contains the element."), null;
      if (e.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_DISCONNECTED) return console.error("A disconnected element was passed."), null;
      for (a in (n = e.getBoundingClientRect())) l[a] = n[a];
      if (!t) {
          if (!(o = i.defaultView)) return console.error("Cannot get window that contains the element."), null;
          (l.left += o.pageXOffset), (l.right += o.pageXOffset), (l.top += o.pageYOffset), (l.bottom += o.pageYOffset);
      }
      return l;
  }
  function Le(e, t) {
      var n,
          a,
          i = [],
          o = e;
      for (t = t || window; ; ) {
          if (!(n = o.ownerDocument)) return console.error("Cannot get document that contains the element."), null;
          if (!(a = n.defaultView)) return console.error("Cannot get window that contains the element."), null;
          if (a === t) break;
          if (!(o = a.frameElement)) return console.error("`baseWindow` was not found."), null;
          i.unshift(o);
      }
      return i;
  }
  function Ae(e, t) {
      var n,
          a,
          o = 0,
          l = 0;
      return (a = Le(e, (t = t || window)))
          ? a.length
              ? (a.forEach(function (e, t) {
                    var n,
                        a,
                        i = Ce(e, 0 < t);
                    (o += i.left),
                        (l += i.top),
                        (a = (n = e).ownerDocument.defaultView.getComputedStyle(n, "")),
                        (i = { left: n.clientLeft + parseFloat(a.paddingLeft), top: n.clientTop + parseFloat(a.paddingTop) }),
                        (o += i.left),
                        (l += i.top);
                }),
                ((n = Ce(e, !0)).left += o),
                (n.right += o),
                (n.top += l),
                (n.bottom += l),
                n)
              : Ce(e)
          : null;
  }
  function Ve(e, t) {
      var n = e.x - t.x,
          a = e.y - t.y;
      return Math.sqrt(n * n + a * a);
  }
  function Pe(e, t, n) {
      var a = t.x - e.x,
          i = t.y - e.y;
      return { x: e.x + a * n, y: e.y + i * n, angle: Math.atan2(i, a) / (Math.PI / 180) };
  }
  function Ne(e, t, n) {
      var a = Math.atan2(e.y - t.y, t.x - e.x);
      return { x: t.x + Math.cos(a) * n, y: t.y + Math.sin(a) * n * -1 };
  }
  function Te(e, t, n, a, i) {
      var o = i * i,
          l = o * i,
          r = 1 - i,
          s = r * r,
          u = s * r,
          h = u * e.x + 3 * s * i * t.x + 3 * r * o * n.x + l * a.x,
          p = u * e.y + 3 * s * i * t.y + 3 * r * o * n.y + l * a.y,
          c = e.x + 2 * i * (t.x - e.x) + o * (n.x - 2 * t.x + e.x),
          d = e.y + 2 * i * (t.y - e.y) + o * (n.y - 2 * t.y + e.y),
          f = t.x + 2 * i * (n.x - t.x) + o * (a.x - 2 * n.x + t.x),
          y = t.y + 2 * i * (n.y - t.y) + o * (a.y - 2 * n.y + t.y),
          m = r * e.x + i * t.x,
          S = r * e.y + i * t.y,
          g = r * n.x + i * a.x,
          _ = r * n.y + i * a.y,
          v = 90 - (180 * Math.atan2(c - f, d - y)) / Math.PI;
      return { x: h, y: p, fromP2: { x: c, y: d }, toP1: { x: f, y: y }, fromP1: { x: m, y: S }, toP2: { x: g, y: _ }, angle: (v += 180 < v ? -180 : 180) };
  }
  function We(n, a, i, o, e) {
      function l(e, t, n, a, i) {
          return e * (e * (-3 * t + 9 * n - 9 * a + 3 * i) + 6 * t - 12 * n + 6 * a) - 3 * t + 3 * n;
      }
      var r,
          s,
          u,
          h,
          p = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
          c = 0,
          d = (e = null == e || 1 < e ? 1 : e < 0 ? 0 : e) / 2;
      return (
          [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816].forEach(function (e, t) {
              (s = l((r = d * e + d), n.x, a.x, i.x, o.x)), (u = l(r, n.y, a.y, i.y, o.y)), (h = s * s + u * u), (c += p[t] * Math.sqrt(h));
          }),
          d * c
      );
  }
  function Be(e, t, n, a, i) {
      for (var o, l = 0.5, r = 1 - l; (o = We(e, t, n, a, r)), !(Math.abs(o - i) <= 0.01); ) r += (o < i ? 1 : -1) * (l /= 2);
      return r;
  }
  function Re(e, n) {
      var a;
      return (
          e.forEach(function (e) {
              var t = n
                  ? e.map(function (e) {
                        var t = { x: e.x, y: e.y };
                        return n(t), t;
                    })
                  : e;
              (a = a || [{ type: "M", values: [t[0].x, t[0].y] }]).push(
                  t.length ? (2 === t.length ? { type: "L", values: [t[1].x, t[1].y] } : { type: "C", values: [t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y] }) : { type: "Z", values: [] }
              );
          }),
          a
      );
  }
  function Fe(e) {
      var n = [],
          a = 0;
      return (
          e.forEach(function (e) {
              var t = (2 === e.length ? Ve : We).apply(null, e);
              n.push(t), (a += t);
          }),
          { segsLen: n, lenAll: a }
      );
  }
  function Ge(e, a) {
      return (
          null == e ||
          null == a ||
          e.length !== a.length ||
          e.some(function (e, t) {
              var n = a[t];
              return (
                  e.type !== n.type ||
                  e.values.some(function (e, t) {
                      return e !== n.values[t];
                  })
              );
          })
      );
  }
  function De(e, t, n) {
      e.events[t] ? e.events[t].indexOf(n) < 0 && e.events[t].push(n) : (e.events[t] = [n]);
  }
  function ze(e, t, n) {
      var a;
      e.events[t] && -1 < (a = e.events[t].indexOf(n)) && e.events[t].splice(a, 1);
  }
  function je(e) {
      t && clearTimeout(t),
          Se.push(e),
          (t = setTimeout(function () {
              Se.forEach(function (e) {
                  e();
              }),
                  (Se = []);
          }, 0));
  }
  function He(e, t) {
      e.reflowTargets.indexOf(t) < 0 && e.reflowTargets.push(t);
  }
  function Ue(e) {
      e.reflowTargets.forEach(function (e) {
          var n;
          (n = e),
              setTimeout(function () {
                  var e = n.parentNode,
                      t = n.nextSibling;
                  e.insertBefore(e.removeChild(n), t);
              }, 0);
      }),
          (e.reflowTargets = []);
  }
  function Ze(e, t, n, a, i, o, l) {
      var r, s, u;
      "auto-start-reverse" === n
          ? ("boolean" != typeof h && (t.setAttribute("orient", "auto-start-reverse"), (h = t.orientType.baseVal === SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN)),
            h ? t.setAttribute("orient", n) : ((r = i.createSVGTransform()).setRotate(180, 0, 0), o.transform.baseVal.appendItem(r), t.setAttribute("orient", "auto"), (u = !0)))
          : (t.setAttribute("orient", n), !1 === h && o.transform.baseVal.clear()),
          (s = t.viewBox.baseVal),
          u ? ((s.x = -a.right), (s.y = -a.bottom)) : ((s.x = a.left), (s.y = a.top)),
          (s.width = a.width),
          (s.height = a.height),
          se && He(e, l);
  }
  function Ye(e, t) {
      return { prop: e ? "markerEnd" : "markerStart", orient: t ? (t.noRotate ? "0" : e ? "auto" : "auto-start-reverse") : null };
  }
  function Xe(n, a) {
      Object.keys(a).forEach(function (e) {
          var t = a[e];
          n[e] = null != t.iniValue ? (t.hasSE ? [t.iniValue, t.iniValue] : t.iniValue) : t.hasSE ? (t.hasProps ? [{}, {}] : []) : t.hasProps ? {} : null;
      });
  }
  function qe(t, e, n, a, i) {
      return (
          a !== e[n] &&
          ((e[n] = a),
          i &&
              i.forEach(function (e) {
                  e(t, a, n);
              }),
          !0)
      );
  }
  function Qe(e) {
      function t(e, t) {
          return e + parseFloat(t);
      }
      var n = e.document,
          a = e.getComputedStyle(n.documentElement, ""),
          i = e.getComputedStyle(n.body, ""),
          o = { x: 0, y: 0 };
      return (
          "static" !== i.position
              ? ((o.x -= [a.marginLeft, a.borderLeftWidth, a.paddingLeft, i.marginLeft, i.borderLeftWidth].reduce(t, 0)), (o.y -= [a.marginTop, a.borderTopWidth, a.paddingTop, i.marginTop, i.borderTopWidth].reduce(t, 0)))
              : "static" !== a.position && ((o.x -= [a.marginLeft, a.borderLeftWidth].reduce(t, 0)), (o.y -= [a.marginTop, a.borderTopWidth].reduce(t, 0))),
          o
      );
  }
  function Ke(e) {
      var t,
          n = e.document;
      n.getElementById(d) || ((t = new e.DOMParser().parseFromString(y, "image/svg+xml")), n.body.appendChild(t.documentElement), _(e));
  }
  function Je(u) {
      var _,
          f,
          v,
          e,
          n,
          a,
          i,
          y,
          s,
          h,
          p,
          t,
          o,
          l,
          r,
          c,
          d,
          m,
          S,
          g = u.options,
          E = u.curStats,
          x = u.aplStats,
          b = E.position_socketXYSE,
          k = !1;
      function w(e, t) {
          var n = t === V ? { x: e.left + e.width / 2, y: e.top } : t === P ? { x: e.right, y: e.top + e.height / 2 } : t === N ? { x: e.left + e.width / 2, y: e.bottom } : { x: e.left, y: e.top + e.height / 2 };
          return (n.socketId = t), n;
      }
      function O(e) {
          return { x: e.x, y: e.y };
      }
      if (
          ((E.position_path = g.path),
          (E.position_lineStrokeWidth = E.line_strokeWidth),
          (E.position_socketGravitySE = _ = Oe(g.socketGravitySE)),
          (f = [0, 1].map(function (e) {
              var t,
                  n,
                  a,
                  i = g.anchorSE[e],
                  o = u.optionIsAttach.anchorSE[e],
                  l = !1 !== o ? ve[i._id] : null,
                  r = !1 !== o && l.conf.getStrokeWidth ? l.conf.getStrokeWidth(l, u) : 0,
                  s = !1 !== o && l.conf.getBBoxNest ? l.conf.getBBoxNest(l, u, r) : Ae(i, u.baseWindow);
              return (
                  (E.capsMaskAnchor_pathDataSE[e] =
                      !1 !== o && l.conf.getPathData
                          ? l.conf.getPathData(l, u, r)
                          : ((n = null != (t = s).right ? t.right : t.left + t.width),
                            (a = null != t.bottom ? t.bottom : t.top + t.height),
                            [
                                { type: "M", values: [t.left, t.top] },
                                { type: "L", values: [n, t.top] },
                                { type: "L", values: [n, a] },
                                { type: "L", values: [t.left, a] },
                                { type: "Z", values: [] },
                            ])),
                  (E.capsMaskAnchor_strokeWidthSE[e] = r),
                  s
              );
          })),
          (i = -1),
          g.socketSE[0] && g.socketSE[1]
              ? ((b[0] = w(f[0], g.socketSE[0])), (b[1] = w(f[1], g.socketSE[1])))
              : (g.socketSE[0] || g.socketSE[1]
                    ? ((a = g.socketSE[0] ? ((n = 0), 1) : ((n = 1), 0)),
                      (b[n] = w(f[n], g.socketSE[n])),
                      (e = H.map(function (e) {
                          return w(f[a], e);
                      })).forEach(function (e) {
                          var t = Ve(e, b[n]);
                          (t < i || -1 === i) && ((b[a] = e), (i = t));
                      }))
                    : ((e = H.map(function (e) {
                          return w(f[1], e);
                      })),
                      H.map(function (e) {
                          return w(f[0], e);
                      }).forEach(function (n) {
                          e.forEach(function (e) {
                              var t = Ve(n, e);
                              (t < i || -1 === i) && ((b[0] = n), (b[1] = e), (i = t));
                          });
                      })),
                [0, 1].forEach(function (e) {
                    var t, n;
                    g.socketSE[e] ||
                        (f[e].width || f[e].height
                            ? f[e].width || (b[e].socketId !== T && b[e].socketId !== P)
                                ? f[e].height || (b[e].socketId !== V && b[e].socketId !== N) || (b[e].socketId = 0 <= b[e ? 0 : 1].y - f[e].top ? N : V)
                                : (b[e].socketId = 0 <= b[e ? 0 : 1].x - f[e].left ? P : T)
                            : ((t = b[e ? 0 : 1].x - f[e].left), (n = b[e ? 0 : 1].y - f[e].top), (b[e].socketId = Math.abs(t) >= Math.abs(n) ? (0 <= t ? P : T) : 0 <= n ? N : V)));
                })),
          E.position_path !== x.position_path ||
              E.position_lineStrokeWidth !== x.position_lineStrokeWidth ||
              [0, 1].some(function (e) {
                  return (
                      E.position_plugOverheadSE[e] !== x.position_plugOverheadSE[e] ||
                      ((i = b[e]), (o = x.position_socketXYSE[e]), i.x !== o.x || i.y !== o.y || i.socketId !== o.socketId) ||
                      ((t = _[e]),
                      (n = x.position_socketGravitySE[e]),
                      (a = null == t ? "auto" : Array.isArray(t) ? "array" : "number") != (null == n ? "auto" : Array.isArray(n) ? "array" : "number") || ("array" == a ? t[0] !== n[0] || t[1] !== n[1] : t !== n))
                  );
                  var t, n, a, i, o;
              }))
      ) {
          switch (((u.pathList.baseVal = v = []), (u.pathList.animVal = null), E.position_path)) {
              case B:
                  v.push([O(b[0]), O(b[1])]);
                  break;
              case R:
                  (t = ("number" == typeof _[0] && 0 < _[0]) || ("number" == typeof _[1] && 0 < _[1])),
                      (o = le * (t ? -1 : 1)),
                      (l = Math.atan2(b[1].y - b[0].y, b[1].x - b[0].x)),
                      (r = o - l),
                      (c = Math.PI - l - o),
                      (d = (Ve(b[0], b[1]) / Math.sqrt(2)) * ee),
                      (m = { x: b[0].x + Math.cos(r) * d, y: b[0].y + Math.sin(r) * d * -1 }),
                      (S = { x: b[1].x + Math.cos(c) * d, y: b[1].y + Math.sin(c) * d * -1 }),
                      v.push([O(b[0]), m, S, O(b[1])]);
                  break;
              case F:
              case G:
                  (s = [_[0], E.position_path === G ? 0 : _[1]]),
                      (h = []),
                      (p = []),
                      b.forEach(function (e, t) {
                          var n,
                              a,
                              i,
                              o,
                              l = s[t],
                              r = Array.isArray(l)
                                  ? { x: l[0], y: l[1] }
                                  : "number" == typeof l
                                  ? e.socketId === V
                                      ? { x: 0, y: -l }
                                      : e.socketId === P
                                      ? { x: l, y: 0 }
                                      : e.socketId === N
                                      ? { x: 0, y: l }
                                      : { x: -l, y: 0 }
                                  : ((n = b[t ? 0 : 1]),
                                    (i = 0 < (a = E.position_plugOverheadSE[t]) ? q + (Q < a ? (a - Q) * K : 0) : Z + (E.position_lineStrokeWidth > Y ? (E.position_lineStrokeWidth - Y) * X : 0)),
                                    e.socketId === V
                                        ? ((o = (e.y - n.y) / 2) < i && (o = i), { x: 0, y: -o })
                                        : e.socketId === P
                                        ? ((o = (n.x - e.x) / 2) < i && (o = i), { x: o, y: 0 })
                                        : e.socketId === N
                                        ? ((o = (n.y - e.y) / 2) < i && (o = i), { x: 0, y: o })
                                        : ((o = (e.x - n.x) / 2) < i && (o = i), { x: -o, y: 0 }));
                          (h[t] = e.x + r.x), (p[t] = e.y + r.y);
                      }),
                      v.push([O(b[0]), { x: h[0], y: p[0] }, { x: h[1], y: p[1] }, O(b[1])]);
                  break;
              case D:
                  !(function () {
                      var a,
                          o = 1,
                          l = 2,
                          r = 3,
                          s = 4,
                          u = [[], []],
                          h = [];
                      function p(e) {
                          return e === o ? r : e === l ? s : e === r ? o : l;
                      }
                      function c(e) {
                          return e === l || e === s ? "x" : "y";
                      }
                      function d(e, t, n) {
                          var a = { x: e.x, y: e.y };
                          if (n) {
                              if (n === p(e.dirId)) throw new Error("Invalid dirId: " + n);
                              a.dirId = n;
                          } else a.dirId = e.dirId;
                          return a.dirId === o ? (a.y -= t) : a.dirId === l ? (a.x += t) : a.dirId === r ? (a.y += t) : (a.x -= t), a;
                      }
                      function f(e, t) {
                          return t.dirId === o ? e.y <= t.y : t.dirId === l ? e.x >= t.x : t.dirId === r ? e.y >= t.y : e.x <= t.x;
                      }
                      function y(e, t) {
                          return t.dirId === o || t.dirId === r ? e.x === t.x : e.y === t.y;
                      }
                      function m(e) {
                          return e[0] ? { contain: 0, notContain: 1 } : { contain: 1, notContain: 0 };
                      }
                      function S(e, t, n) {
                          return Math.abs(t[n] - e[n]);
                      }
                      function g(e, t, n) {
                          return "x" === n ? (e.x < t.x ? l : s) : e.y < t.y ? r : o;
                      }
                      for (
                          b.forEach(function (e, t) {
                              var n,
                                  a = O(e),
                                  i = _[t];
                              (n = Array.isArray(i)
                                  ? i[0] < 0
                                      ? [s, -i[0]]
                                      : 0 < i[0]
                                      ? [l, i[0]]
                                      : i[1] < 0
                                      ? [o, -i[1]]
                                      : 0 < i[1]
                                      ? [r, i[1]]
                                      : [e.socketId, 0]
                                  : "number" != typeof i
                                  ? [e.socketId, $]
                                  : 0 <= i
                                  ? [e.socketId, i]
                                  : [p(e.socketId), -i]),
                                  (a.dirId = n[0]),
                                  (i = n[1]),
                                  u[t].push(a),
                                  (h[t] = d(a, i));
                          });
                          (function () {
                              var e,
                                  t,
                                  a,
                                  i,
                                  n = [f(h[1], h[0]), f(h[0], h[1])],
                                  o = [c(h[0].dirId), c(h[1].dirId)];
                              if (o[0] === o[1]) {
                                  if (n[0] && n[1])
                                      return void (
                                          y(h[1], h[0]) ||
                                          (h[0][o[0]] === h[1][o[1]]
                                              ? (u[0].push(h[0]), u[1].push(h[1]))
                                              : ((e = h[0][o[0]] + (h[1][o[1]] - h[0][o[0]]) / 2), u[0].push(d(h[0], Math.abs(e - h[0][o[0]]))), u[1].push(d(h[1], Math.abs(e - h[1][o[1]])))))
                                      );
                                  n[0] !== n[1]
                                      ? ((t = m(n)),
                                        (a = S(h[t.notContain], h[t.contain], o[t.notContain])) < $ && (h[t.notContain] = d(h[t.notContain], $ - a)),
                                        u[t.notContain].push(h[t.notContain]),
                                        (h[t.notContain] = d(h[t.notContain], $, y(h[t.contain], h[t.notContain]) ? ("x" === o[t.notContain] ? r : l) : g(h[t.notContain], h[t.contain], "x" === o[t.notContain] ? "y" : "x"))))
                                      : ((a = S(h[0], h[1], "x" === o[0] ? "y" : "x")),
                                        u.forEach(function (e, t) {
                                            var n = 0 === t ? 1 : 0;
                                            e.push(h[t]), (h[t] = d(h[t], $, 2 * $ <= a ? g(h[t], h[n], "x" === o[t] ? "y" : "x") : "x" === o[t] ? r : l));
                                        }));
                              } else {
                                  if (n[0] && n[1]) return void (y(h[1], h[0]) ? u[1].push(h[1]) : y(h[0], h[1]) ? u[0].push(h[0]) : u[0].push("x" === o[0] ? { x: h[1].x, y: h[0].y } : { x: h[0].x, y: h[1].y }));
                                  n[0] !== n[1]
                                      ? ((t = m(n)),
                                        u[t.notContain].push(h[t.notContain]),
                                        (h[t.notContain] = d(h[t.notContain], $, S(h[t.notContain], h[t.contain], o[t.contain]) >= $ ? g(h[t.notContain], h[t.contain], o[t.contain]) : h[t.contain].dirId)))
                                      : ((i = [
                                            { x: h[0].x, y: h[0].y },
                                            { x: h[1].x, y: h[1].y },
                                        ]),
                                        u.forEach(function (e, t) {
                                            var n = 0 === t ? 1 : 0,
                                                a = S(i[t], i[n], o[t]);
                                            a < $ && (h[t] = d(h[t], $ - a)), e.push(h[t]), (h[t] = d(h[t], $, g(h[t], h[n], o[n])));
                                        }));
                              }
                              return 1;
                          })();

                      );
                      u[1].reverse(),
                          u[0].concat(u[1]).forEach(function (e, t) {
                              var n = { x: e.x, y: e.y };
                              0 < t && v.push([a, n]), (a = n);
                          });
                  })();
          }
          (y = []),
              E.position_plugOverheadSE.forEach(function (e, t) {
                  var n,
                      a,
                      i,
                      o,
                      l,
                      r,
                      s,
                      u,
                      h,
                      p,
                      c,
                      d = !t;
                  0 < e
                      ? 2 === (n = v[(a = d ? 0 : v.length - 1)]).length
                          ? ((y[a] = y[a] || Ve.apply(null, n)), y[a] > J && (y[a] - e < J && (e = y[a] - J), (i = Pe(n[0], n[1], (d ? e : y[a] - e) / y[a])), (v[a] = d ? [i, n[1]] : [n[0], i]), (y[a] -= e)))
                          : ((y[a] = y[a] || We.apply(null, n)),
                            y[a] > J &&
                                (y[a] - e < J && (e = y[a] - J),
                                (i = Te(n[0], n[1], n[2], n[3], Be(n[0], n[1], n[2], n[3], d ? e : y[a] - e))),
                                (l = d ? ((o = n[0]), i.toP1) : ((o = n[3]), i.fromP2)),
                                (r = Math.atan2(o.y - i.y, i.x - o.x)),
                                (s = Ve(i, l)),
                                (i.x = o.x + Math.cos(r) * e),
                                (i.y = o.y + Math.sin(r) * e * -1),
                                (l.x = i.x + Math.cos(r) * s),
                                (l.y = i.y + Math.sin(r) * s * -1),
                                (v[a] = d ? [i, i.toP1, i.toP2, n[3]] : [n[0], i.fromP1, i.fromP2, i]),
                                (y[a] = null)))
                      : e < 0 &&
                        ((n = v[(a = d ? 0 : v.length - 1)]),
                        (u = b[t].socketId),
                        (h = u === T || u === P ? "x" : "y"),
                        e < (c = -f[t]["x" == h ? "width" : "height"]) && (e = c),
                        (p = e * (u === T || u === V ? -1 : 1)),
                        2 === n.length
                            ? (n[d ? 0 : n.length - 1][h] += p)
                            : (d ? [0, 1] : [n.length - 2, n.length - 1]).forEach(function (e) {
                                  n[e][h] += p;
                              }),
                        (y[a] = null));
              }),
              (x.position_socketXYSE = Oe(b)),
              (x.position_plugOverheadSE = Oe(E.position_plugOverheadSE)),
              (x.position_path = E.position_path),
              (x.position_lineStrokeWidth = E.position_lineStrokeWidth),
              (x.position_socketGravitySE = Oe(_)),
              (k = !0),
              u.events.apl_position &&
                  u.events.apl_position.forEach(function (e) {
                      e(u, v);
                  });
      }
      return k;
  }
  function $e(t, n) {
      n !== t.isShown &&
          (!!n != !!t.isShown && (t.svg.style.visibility = n ? "" : "hidden"),
          (t.isShown = n),
          t.events &&
              t.events.svgShow &&
              t.events.svgShow.forEach(function (e) {
                  e(t, n);
              }));
  }
  function et(e, t) {
      var n,
          a,
          i,
          o,
          l,
          h,
          p,
          c,
          d,
          f,
          r,
          s,
          u,
          y,
          m,
          S,
          g,
          _,
          v,
          E,
          x,
          b,
          k,
          w,
          O,
          M,
          I,
          C,
          L,
          A,
          V,
          P,
          N,
          T,
          W,
          B,
          R,
          F,
          G,
          D,
          z,
          j,
          H,
          U,
          Z,
          Y,
          X,
          q,
          Q,
          K,
          J,
          $,
          ee = {};
      t.line &&
          (ee.line =
              ((a = (n = e).options),
              (i = n.curStats),
              (o = n.events),
              (l = !1),
              (l = qe(n, i, "line_color", a.lineColor, o.cur_line_color) || l),
              (l = qe(n, i, "line_colorTra", Me(i.line_color)[0] < 1) || l),
              (l = qe(n, i, "line_strokeWidth", a.lineSize, o.cur_line_strokeWidth) || l))),
          (t.plug || ee.line) &&
              (ee.plug =
                  ((p = (h = e).options),
                  (c = h.curStats),
                  (d = h.events),
                  (f = !1),
                  [0, 1].forEach(function (e) {
                      var t,
                          n,
                          a,
                          i,
                          o,
                          l,
                          r,
                          s,
                          u = p.plugSE[e];
                      (f = qe(h, c.plug_enabledSE, e, u !== ne) || f),
                          (f = qe(h, c.plug_plugSE, e, u) || f),
                          (f = qe(h, c.plug_colorSE, e, (s = p.plugColorSE[e] || c.line_color), d.cur_plug_colorSE) || f),
                          (f = qe(h, c.plug_colorTraSE, e, Me(s)[0] < 1) || f),
                          u !== ne &&
                              ((i = n = (t = ae[ie[u]]).widthR * p.plugSizeSE[e]),
                              (o = a = t.heightR * p.plugSizeSE[e]),
                              pe && ((i *= c.line_strokeWidth), (o *= c.line_strokeWidth)),
                              (f = qe(h, c.plug_markerWidthSE, e, i) || f),
                              (f = qe(h, c.plug_markerHeightSE, e, o) || f),
                              (c.capsMaskMarker_markerWidthSE[e] = n),
                              (c.capsMaskMarker_markerHeightSE[e] = a)),
                          (c.plugOutline_plugSE[e] = c.capsMaskMarker_plugSE[e] = u),
                          c.plug_enabledSE[e]
                              ? ((s = (c.line_strokeWidth / de.lineSize) * p.plugSizeSE[e]), (c.position_plugOverheadSE[e] = t.overhead * s), (c.viewBox_plugBCircleSE[e] = t.bCircle * s), (l = t.sideLen * s), (r = t.backLen * s))
                              : ((c.position_plugOverheadSE[e] = -c.line_strokeWidth / 2), (c.viewBox_plugBCircleSE[e] = l = r = 0)),
                          qe(h, c.attach_plugSideLenSE, e, l, d.cur_attach_plugSideLenSE),
                          qe(h, c.attach_plugBackLenSE, e, r, d.cur_attach_plugBackLenSE),
                          (c.capsMaskAnchor_enabledSE[e] = !c.plug_enabledSE[e]);
                  }),
                  (f = qe(h, c, "plug_enabled", c.plug_enabledSE[0] || c.plug_enabledSE[1]) || f))),
          (t.lineOutline || ee.line) &&
              (ee.lineOutline =
                  ((u = (r = e).options),
                  (y = r.curStats),
                  (m = !1),
                  (m = qe(r, y, "lineOutline_enabled", u.lineOutlineEnabled) || m),
                  (m = qe(r, y, "lineOutline_color", u.lineOutlineColor) || m),
                  (m = qe(r, y, "lineOutline_colorTra", Me(y.lineOutline_color)[0] < 1) || m),
                  (s = y.line_strokeWidth * u.lineOutlineSize),
                  (m = qe(r, y, "lineOutline_strokeWidth", y.line_strokeWidth - 2 * s) || m),
                  (m = qe(r, y, "lineOutline_inStrokeWidth", y.lineOutline_colorTra ? y.lineOutline_strokeWidth + 2 * ce : y.line_strokeWidth - s) || m))),
          (t.plugOutline || ee.line || ee.plug || ee.lineOutline) &&
              (ee.plugOutline =
                  ((g = (S = e).options),
                  (_ = S.curStats),
                  (v = !1),
                  [0, 1].forEach(function (e) {
                      var t,
                          n = _.plugOutline_plugSE[e],
                          a = n !== ne ? ae[ie[n]] : null;
                      (v = qe(S, _.plugOutline_enabledSE, e, g.plugOutlineEnabledSE[e] && _.plug_enabled && _.plug_enabledSE[e] && !!a && !!a.outlineBase) || v),
                          (v = qe(S, _.plugOutline_colorSE, e, (t = g.plugOutlineColorSE[e] || _.lineOutline_color)) || v),
                          (v = qe(S, _.plugOutline_colorTraSE, e, Me(t)[0] < 1) || v),
                          a &&
                              a.outlineBase &&
                              ((t = g.plugOutlineSizeSE[e]) > a.outlineMax && (t = a.outlineMax),
                              (t *= 2 * a.outlineBase),
                              (v = qe(S, _.plugOutline_strokeWidthSE, e, t) || v),
                              (v = qe(S, _.plugOutline_inStrokeWidthSE, e, _.plugOutline_colorTraSE[e] ? t - (ce / (_.line_strokeWidth / de.lineSize) / g.plugSizeSE[e]) * 2 : t / 2) || v));
                  }),
                  v)),
          (t.faces || ee.line || ee.plug || ee.lineOutline || ee.plugOutline) &&
              (ee.faces =
                  ((b = (E = e).curStats),
                  (k = E.aplStats),
                  (w = E.events),
                  (O = !1),
                  !b.line_altColor && qe(E, k, "line_color", (x = b.line_color), w.apl_line_color) && ((E.lineFace.style.stroke = x), (O = !0)),
                  qe(E, k, "line_strokeWidth", (x = b.line_strokeWidth), w.apl_line_strokeWidth) &&
                      ((E.lineShape.style.strokeWidth = x + "px"), (O = !0), (ue || se) && (He(E, E.lineShape), se && (He(E, E.lineFace), He(E, E.lineMaskCaps)))),
                  qe(E, k, "lineOutline_enabled", (x = b.lineOutline_enabled), w.apl_lineOutline_enabled) && ((E.lineOutlineFace.style.display = x ? "inline" : "none"), (O = !0)),
                  b.lineOutline_enabled &&
                      (qe(E, k, "lineOutline_color", (x = b.lineOutline_color), w.apl_lineOutline_color) && ((E.lineOutlineFace.style.stroke = x), (O = !0)),
                      qe(E, k, "lineOutline_strokeWidth", (x = b.lineOutline_strokeWidth), w.apl_lineOutline_strokeWidth) &&
                          ((E.lineOutlineMaskShape.style.strokeWidth = x + "px"), (O = !0), se && (He(E, E.lineOutlineMaskCaps), He(E, E.lineOutlineFace))),
                      qe(E, k, "lineOutline_inStrokeWidth", (x = b.lineOutline_inStrokeWidth), w.apl_lineOutline_inStrokeWidth) &&
                          ((E.lineMaskShape.style.strokeWidth = x + "px"), (O = !0), se && (He(E, E.lineOutlineMaskCaps), He(E, E.lineOutlineFace)))),
                  qe(E, k, "plug_enabled", (x = b.plug_enabled), w.apl_plug_enabled) && ((E.plugsFace.style.display = x ? "inline" : "none"), (O = !0)),
                  b.plug_enabled &&
                      [0, 1].forEach(function (n) {
                          var e = b.plug_plugSE[n],
                              t = e !== ne ? ae[ie[e]] : null,
                              a = Ye(n, t);
                          qe(E, k.plug_enabledSE, n, (x = b.plug_enabledSE[n]), w.apl_plug_enabledSE) && ((E.plugsFace.style[a.prop] = x ? "url(#" + E.plugMarkerIdSE[n] + ")" : "none"), (O = !0)),
                              b.plug_enabledSE[n] &&
                                  (qe(E, k.plug_plugSE, n, e, w.apl_plug_plugSE) &&
                                      ((E.plugFaceSE[n].href.baseVal = "#" + t.elmId), Ze(E, E.plugMarkerSE[n], a.orient, t.bBox, E.svg, E.plugMarkerShapeSE[n], E.plugsFace), (O = !0), ue && He(E, E.plugsFace)),
                                  qe(E, k.plug_colorSE, n, (x = b.plug_colorSE[n]), w.apl_plug_colorSE) && ((E.plugFaceSE[n].style.fill = x), (O = !0), (he || pe || se) && !b.line_colorTra && He(E, se ? E.lineMaskCaps : E.capsMaskLine)),
                                  ["markerWidth", "markerHeight"].forEach(function (e) {
                                      var t = "plug_" + e + "SE";
                                      qe(E, k[t], n, (x = b[t][n]), w["apl_" + t]) && ((E.plugMarkerSE[n][e].baseVal.value = x), (O = !0));
                                  }),
                                  qe(E, k.plugOutline_enabledSE, n, (x = b.plugOutline_enabledSE[n]), w.apl_plugOutline_enabledSE) &&
                                      (x
                                          ? ((E.plugFaceSE[n].style.mask = "url(#" + E.plugMaskIdSE[n] + ")"), (E.plugOutlineFaceSE[n].style.display = "inline"))
                                          : ((E.plugFaceSE[n].style.mask = "none"), (E.plugOutlineFaceSE[n].style.display = "none")),
                                      (O = !0)),
                                  b.plugOutline_enabledSE[n] &&
                                      (qe(E, k.plugOutline_plugSE, n, e, w.apl_plugOutline_plugSE) &&
                                          ((E.plugOutlineFaceSE[n].href.baseVal = E.plugMaskShapeSE[n].href.baseVal = E.plugOutlineMaskShapeSE[n].href.baseVal = "#" + t.elmId),
                                          [E.plugMaskSE[n], E.plugOutlineMaskSE[n]].forEach(function (e) {
                                              (e.x.baseVal.value = t.bBox.left), (e.y.baseVal.value = t.bBox.top), (e.width.baseVal.value = t.bBox.width), (e.height.baseVal.value = t.bBox.height);
                                          }),
                                          (O = !0)),
                                      qe(E, k.plugOutline_colorSE, n, (x = b.plugOutline_colorSE[n]), w.apl_plugOutline_colorSE) &&
                                          ((E.plugOutlineFaceSE[n].style.fill = x), (O = !0), se && (He(E, E.lineMaskCaps), He(E, E.lineOutlineMaskCaps))),
                                      qe(E, k.plugOutline_strokeWidthSE, n, (x = b.plugOutline_strokeWidthSE[n]), w.apl_plugOutline_strokeWidthSE) && ((E.plugOutlineMaskShapeSE[n].style.strokeWidth = x + "px"), (O = !0)),
                                      qe(E, k.plugOutline_inStrokeWidthSE, n, (x = b.plugOutline_inStrokeWidthSE[n]), w.apl_plugOutline_inStrokeWidthSE) && ((E.plugMaskShapeSE[n].style.strokeWidth = x + "px"), (O = !0))));
                      }),
                  O)),
          (t.position || ee.line || ee.plug) && (ee.position = Je(e)),
          (t.path || ee.position) &&
              (ee.path =
                  ((C = (M = e).curStats),
                  (L = M.aplStats),
                  (A = M.pathList.animVal || M.pathList.baseVal),
                  (V = C.path_edge),
                  (P = !1),
                  A &&
                      ((V.x1 = V.x2 = A[0][0].x),
                      (V.y1 = V.y2 = A[0][0].y),
                      (C.path_pathData = I = Re(A, function (e) {
                          e.x < V.x1 && (V.x1 = e.x), e.y < V.y1 && (V.y1 = e.y), e.x > V.x2 && (V.x2 = e.x), e.y > V.y2 && (V.y2 = e.y);
                      })),
                      Ge(I, L.path_pathData) &&
                          (M.linePath.setPathData(I),
                          (L.path_pathData = I),
                          (P = !0),
                          se ? (He(M, M.plugsFace), He(M, M.lineMaskCaps)) : ue && He(M, M.linePath),
                          M.events.apl_path &&
                              M.events.apl_path.forEach(function (e) {
                                  e(M, I);
                              }))),
                  P)),
          (ee.viewBox =
              ((T = (N = e).curStats),
              (W = N.aplStats),
              (B = T.path_edge),
              (R = T.viewBox_bBox),
              (F = W.viewBox_bBox),
              (G = N.svg.viewBox.baseVal),
              (D = N.svg.style),
              (z = !1),
              (j = Math.max(T.line_strokeWidth / 2, T.viewBox_plugBCircleSE[0] || 0, T.viewBox_plugBCircleSE[1] || 0)),
              (H = { x1: B.x1 - j, y1: B.y1 - j, x2: B.x2 + j, y2: B.y2 + j }),
              N.events.new_edge4viewBox &&
                  N.events.new_edge4viewBox.forEach(function (e) {
                      e(N, H);
                  }),
              (R.x = T.lineMask_x = T.lineOutlineMask_x = T.maskBGRect_x = H.x1),
              (R.y = T.lineMask_y = T.lineOutlineMask_y = T.maskBGRect_y = H.y1),
              (R.width = H.x2 - H.x1),
              (R.height = H.y2 - H.y1),
              ["x", "y", "width", "height"].forEach(function (e) {
                  var t;
                  (t = R[e]) !== F[e] && ((G[e] = F[e] = t), (D[oe[e]] = t + ("x" === e || "y" === e ? N.bodyOffset[e] : 0) + "px"), (z = !0));
              }),
              z)),
          (ee.mask =
              ((Y = (U = e).curStats),
              (X = U.aplStats),
              (q = !1),
              Y.plug_enabled
                  ? [0, 1].forEach(function (e) {
                        Y.capsMaskMarker_enabledSE[e] = (Y.plug_enabledSE[e] && Y.plug_colorTraSE[e]) || (Y.plugOutline_enabledSE[e] && Y.plugOutline_colorTraSE[e]);
                    })
                  : (Y.capsMaskMarker_enabledSE[0] = Y.capsMaskMarker_enabledSE[1] = !1),
              (Y.capsMaskMarker_enabled = Y.capsMaskMarker_enabledSE[0] || Y.capsMaskMarker_enabledSE[1]),
              (Y.lineMask_outlineMode = Y.lineOutline_enabled),
              (Y.caps_enabled = Y.capsMaskMarker_enabled || Y.capsMaskAnchor_enabledSE[0] || Y.capsMaskAnchor_enabledSE[1]),
              (Y.lineMask_enabled = Y.caps_enabled || Y.lineMask_outlineMode),
              ((Y.lineMask_enabled && !Y.lineMask_outlineMode) || Y.lineOutline_enabled) &&
                  ["x", "y"].forEach(function (e) {
                      var t = "maskBGRect_" + e;
                      qe(U, X, t, (Z = Y[t])) && ((U.maskBGRect[e].baseVal.value = Z), (q = !0));
                  }),
              qe(U, X, "lineMask_enabled", (Z = Y.lineMask_enabled)) && ((U.lineFace.style.mask = Z ? "url(#" + U.lineMaskId + ")" : "none"), (q = !0), pe && He(U, U.lineMask)),
              Y.lineMask_enabled &&
                  (qe(U, X, "lineMask_outlineMode", (Z = Y.lineMask_outlineMode)) &&
                      (Z ? ((U.lineMaskBG.style.display = "none"), (U.lineMaskShape.style.display = "inline")) : ((U.lineMaskBG.style.display = "inline"), (U.lineMaskShape.style.display = "none")), (q = !0)),
                  ["x", "y"].forEach(function (e) {
                      var t = "lineMask_" + e;
                      qe(U, X, t, (Z = Y[t])) && ((U.lineMask[e].baseVal.value = Z), (q = !0));
                  }),
                  qe(U, X, "caps_enabled", (Z = Y.caps_enabled)) && ((U.lineMaskCaps.style.display = U.lineOutlineMaskCaps.style.display = Z ? "inline" : "none"), (q = !0), pe && He(U, U.capsMaskLine)),
                  Y.caps_enabled &&
                      ([0, 1].forEach(function (e) {
                          var t;
                          qe(U, X.capsMaskAnchor_enabledSE, e, (Z = Y.capsMaskAnchor_enabledSE[e])) && ((U.capsMaskAnchorSE[e].style.display = Z ? "inline" : "none"), (q = !0), pe && He(U, U.lineMask)),
                              Y.capsMaskAnchor_enabledSE[e] &&
                                  (Ge((t = Y.capsMaskAnchor_pathDataSE[e]), X.capsMaskAnchor_pathDataSE[e]) && (U.capsMaskAnchorSE[e].setPathData(t), (X.capsMaskAnchor_pathDataSE[e] = t), (q = !0)),
                                  qe(U, X.capsMaskAnchor_strokeWidthSE, e, (Z = Y.capsMaskAnchor_strokeWidthSE[e])) && ((U.capsMaskAnchorSE[e].style.strokeWidth = Z + "px"), (q = !0)));
                      }),
                      qe(U, X, "capsMaskMarker_enabled", (Z = Y.capsMaskMarker_enabled)) && ((U.capsMaskLine.style.display = Z ? "inline" : "none"), (q = !0)),
                      Y.capsMaskMarker_enabled &&
                          [0, 1].forEach(function (n) {
                              var e = Y.capsMaskMarker_plugSE[n],
                                  t = e !== ne ? ae[ie[e]] : null,
                                  a = Ye(n, t);
                              qe(U, X.capsMaskMarker_enabledSE, n, (Z = Y.capsMaskMarker_enabledSE[n])) && ((U.capsMaskLine.style[a.prop] = Z ? "url(#" + U.lineMaskMarkerIdSE[n] + ")" : "none"), (q = !0)),
                                  Y.capsMaskMarker_enabledSE[n] &&
                                      (qe(U, X.capsMaskMarker_plugSE, n, e) &&
                                          ((U.capsMaskMarkerShapeSE[n].href.baseVal = "#" + t.elmId),
                                          Ze(U, U.capsMaskMarkerSE[n], a.orient, t.bBox, U.svg, U.capsMaskMarkerShapeSE[n], U.capsMaskLine),
                                          (q = !0),
                                          ue && (He(U, U.capsMaskLine), He(U, U.lineFace))),
                                      ["markerWidth", "markerHeight"].forEach(function (e) {
                                          var t = "capsMaskMarker_" + e + "SE";
                                          qe(U, X[t], n, (Z = Y[t][n])) && ((U.capsMaskMarkerSE[n][e].baseVal.value = Z), (q = !0));
                                      }));
                          }))),
              Y.lineOutline_enabled &&
                  ["x", "y"].forEach(function (e) {
                      var t = "lineOutlineMask_" + e;
                      qe(U, X, t, (Z = Y[t])) && ((U.lineOutlineMask[e].baseVal.value = Z), (q = !0));
                  }),
              q)),
          t.effect &&
              ((J = (Q = e).curStats),
              ($ = Q.aplStats),
              Object.keys(te).forEach(function (e) {
                  var t = te[e],
                      n = e + "_enabled",
                      a = e + "_options",
                      i = J[a];
                  qe(Q, $, n, (K = J[n])) ? (K && ($[a] = Oe(i)), t[K ? "init" : "remove"](Q)) : K && we(i, $[a]) && (t.remove(Q), ($[n] = !0), ($[a] = Oe(i)), t.init(Q));
              })),
          (he || pe) && ee.line && !ee.path && He(e, e.lineShape),
          he && ee.plug && !ee.line && He(e, e.plugsFace),
          Ue(e);
  }
  function tt(e, t) {
      return { duration: ye(e.duration) && 0 < e.duration ? e.duration : t.duration, timing: g.validTiming(e.timing) ? e.timing : Oe(t.timing) };
  }
  function nt(e, t, n, a) {
      var i,
          o = e.curStats,
          l = e.aplStats,
          r = {};
      function s() {
          ["show_on", "show_effect", "show_animOptions"].forEach(function (e) {
              l[e] = o[e];
          });
      }
      (o.show_on = t),
          n && M[n] && ((o.show_effect = n), (o.show_animOptions = tt(fe(a) ? a : {}, M[n].defaultAnimOptions))),
          (r.show_on = o.show_on !== l.show_on),
          (r.show_effect = o.show_effect !== l.show_effect),
          (r.show_animOptions = we(o.show_animOptions, l.show_animOptions)),
          r.show_effect || r.show_animOptions
              ? o.show_inAnim
                  ? ((i = r.show_effect ? M[l.show_effect].stop(e, !0, !0) : M[l.show_effect].stop(e)), s(), M[l.show_effect].init(e, i))
                  : r.show_on && (l.show_effect && r.show_effect && M[l.show_effect].stop(e, !0, !0), s(), M[l.show_effect].init(e))
              : r.show_on && (s(), M[l.show_effect].start(e));
  }
  function at(e, t, n) {
      var a = { props: e, optionName: n };
      return e.attachments.indexOf(t) < 0 && (!t.conf.bind || t.conf.bind(t, a)) && (e.attachments.push(t), t.boundTargets.push(a), 1);
  }
  function it(n, a, e) {
      var i = n.attachments.indexOf(a);
      -1 < i && n.attachments.splice(i, 1),
          a.boundTargets.some(function (e, t) {
              return e.props === n && (a.conf.unbind && a.conf.unbind(a, e), (i = t), !0);
          }) &&
              (a.boundTargets.splice(i, 1),
              e ||
                  je(function () {
                      a.boundTargets.length || o(a);
                  }));
  }
  function ot(s, u) {
      var e,
          i,
          a,
          t,
          n,
          o,
          l,
          r,
          h,
          p,
          c,
          d,
          f,
          y,
          m,
          S,
          g,
          _ = s.options,
          v = {};
      function E(e, t, n, a, i) {
          var o = {};
          return n ? (null != a ? ((o.container = e[n]), (o.key = a)) : ((o.container = e), (o.key = n))) : ((o.container = e), (o.key = t)), (o.default = i), (o.acceptsAuto = null == o.default), o;
      }
      function x(e, t, n, a, i, o, l) {
          var r,
              s,
              u,
              h = E(e, n, i, o, l);
          return (
              null != t[n] && (s = (t[n] + "").toLowerCase()) && ((h.acceptsAuto && s === U) || (u = a[s])) && u !== h.container[h.key] && ((h.container[h.key] = u), (r = !0)),
              null != h.container[h.key] || h.acceptsAuto || ((h.container[h.key] = h.default), (r = !0)),
              r
          );
      }
      function b(e, t, n, a, i, o, l, r, s) {
          var u,
              h,
              p,
              c,
              d = E(e, n, i, o, l);
          if (!a) {
              if (null == d.default) throw new Error("Invalid `type`: " + n);
              a = typeof d.default;
          }
          return (
              null != t[n] &&
                  ((d.acceptsAuto && (t[n] + "").toLowerCase() === U) || ((p = h = t[n]), ("number" === (c = a) ? ye(p) : typeof p === c) && ((h = s && "string" === a && h ? h.trim() : h), 1) && (!r || r(h)))) &&
                  h !== d.container[d.key] &&
                  ((d.container[d.key] = h), (u = !0)),
              null != d.container[d.key] || d.acceptsAuto || ((d.container[d.key] = d.default), (u = !0)),
              u
          );
      }
      if (
          ((u = u || {}),
          ["start", "end"].forEach(function (e, t) {
              var n = u[e],
                  a = !1;
              if (n && (Ie(n) || (a = L(n, "anchor"))) && n !== _.anchorSE[t]) {
                  if ((!1 !== s.optionIsAttach.anchorSE[t] && it(s, ve[_.anchorSE[t]._id]), a && !at(s, ve[n._id], e))) throw new Error("Can't bind attachment");
                  (_.anchorSE[t] = n), (s.optionIsAttach.anchorSE[t] = a), (i = v.position = !0);
              }
          }),
          !_.anchorSE[0] || !_.anchorSE[1] || _.anchorSE[0] === _.anchorSE[1])
      )
          throw new Error("`start` and `end` are required.");
      function k(e) {
          var t = o.appendChild(S.createElementNS(re, "mask"));
          return (
              (t.id = e),
              (t.maskUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE),
              [t.x, t.y, t.width, t.height].forEach(function (e) {
                  e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0);
              }),
              t
          );
      }
      function w(e) {
          var t = o.appendChild(S.createElementNS(re, "marker"));
          return (t.id = e), (t.markerUnits.baseVal = SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH), t.viewBox.baseVal || t.setAttribute("viewBox", "0 0 0 0"), t;
      }
      function O(e) {
          return (
              [e.width, e.height].forEach(function (e) {
                  e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100);
              }),
              e
          );
      }
      i &&
          (e = (function (e, t) {
              var n, a, i;
              if (!(n = Le(e)) || !(a = Le(t))) throw new Error("Cannot get frames.");
              return (
                  n.length &&
                      a.length &&
                      (n.reverse(),
                      a.reverse(),
                      n.some(function (t) {
                          return a.some(function (e) {
                              return e === t && ((i = e.contentWindow), !0);
                          });
                      })),
                  i || window
              );
          })(!1 !== s.optionIsAttach.anchorSE[0] ? ve[_.anchorSE[0]._id].element : _.anchorSE[0], !1 !== s.optionIsAttach.anchorSE[1] ? ve[_.anchorSE[1]._id].element : _.anchorSE[1])) !== s.baseWindow &&
          ((t = e),
          (m = (a = s).aplStats),
          (S = t.document),
          (g = A + "-" + a._id),
          (a.pathList = {}),
          Xe(m, me),
          Object.keys(te).forEach(function (e) {
              var t = e + "_enabled";
              m[t] && (te[e].remove(a), (m[t] = !1));
          }),
          a.baseWindow && a.svg && a.baseWindow.document.body.removeChild(a.svg),
          Ke((a.baseWindow = t)),
          (a.bodyOffset = Qe(t)),
          (a.svg = n = S.createElementNS(re, "svg")),
          (n.className.baseVal = A),
          n.viewBox.baseVal || n.setAttribute("viewBox", "0 0 0 0"),
          (a.defs = o = n.appendChild(S.createElementNS(re, "defs"))),
          (a.linePath = r = o.appendChild(S.createElementNS(re, "path"))),
          (r.id = h = g + "-line-path"),
          (r.className.baseVal = A + "-line-path"),
          pe && (r.style.fill = "none"),
          (a.lineShape = r = o.appendChild(S.createElementNS(re, "use"))),
          (r.id = p = g + "-line-shape"),
          (r.href.baseVal = "#" + h),
          ((l = o.appendChild(S.createElementNS(re, "g"))).id = c = g + "-caps"),
          (a.capsMaskAnchorSE = [0, 1].map(function () {
              var e = l.appendChild(S.createElementNS(re, "path"));
              return (e.className.baseVal = A + "-caps-mask-anchor"), e;
          })),
          (a.lineMaskMarkerIdSE = [g + "-caps-mask-marker-0", g + "-caps-mask-marker-1"]),
          (a.capsMaskMarkerSE = [0, 1].map(function (e) {
              return w(a.lineMaskMarkerIdSE[e]);
          })),
          (a.capsMaskMarkerShapeSE = [0, 1].map(function (e) {
              var t = a.capsMaskMarkerSE[e].appendChild(S.createElementNS(re, "use"));
              return (t.className.baseVal = A + "-caps-mask-marker-shape"), t;
          })),
          (a.capsMaskLine = r = l.appendChild(S.createElementNS(re, "use"))),
          (r.className.baseVal = A + "-caps-mask-line"),
          (r.href.baseVal = "#" + p),
          (a.maskBGRect = r = O(o.appendChild(S.createElementNS(re, "rect")))),
          (r.id = d = g + "-mask-bg-rect"),
          (r.className.baseVal = A + "-mask-bg-rect"),
          pe && (r.style.fill = "white"),
          (a.lineMask = O(k((a.lineMaskId = g + "-line-mask")))),
          (a.lineMaskBG = r = a.lineMask.appendChild(S.createElementNS(re, "use"))),
          (r.href.baseVal = "#" + d),
          (a.lineMaskShape = r = a.lineMask.appendChild(S.createElementNS(re, "use"))),
          (r.className.baseVal = A + "-line-mask-shape"),
          (r.href.baseVal = "#" + h),
          (r.style.display = "none"),
          (a.lineMaskCaps = r = a.lineMask.appendChild(S.createElementNS(re, "use"))),
          (r.href.baseVal = "#" + c),
          (a.lineOutlineMask = O(k((f = g + "-line-outline-mask")))),
          ((r = a.lineOutlineMask.appendChild(S.createElementNS(re, "use"))).href.baseVal = "#" + d),
          (a.lineOutlineMaskShape = r = a.lineOutlineMask.appendChild(S.createElementNS(re, "use"))),
          (r.className.baseVal = A + "-line-outline-mask-shape"),
          (r.href.baseVal = "#" + h),
          (a.lineOutlineMaskCaps = r = a.lineOutlineMask.appendChild(S.createElementNS(re, "use"))),
          (r.href.baseVal = "#" + c),
          (a.face = n.appendChild(S.createElementNS(re, "g"))),
          (a.lineFace = r = a.face.appendChild(S.createElementNS(re, "use"))),
          (r.href.baseVal = "#" + p),
          (a.lineOutlineFace = r = a.face.appendChild(S.createElementNS(re, "use"))),
          (r.href.baseVal = "#" + p),
          (r.style.mask = "url(#" + f + ")"),
          (r.style.display = "none"),
          (a.plugMaskIdSE = [g + "-plug-mask-0", g + "-plug-mask-1"]),
          (a.plugMaskSE = [0, 1].map(function (e) {
              return k(a.plugMaskIdSE[e]);
          })),
          (a.plugMaskShapeSE = [0, 1].map(function (e) {
              var t = a.plugMaskSE[e].appendChild(S.createElementNS(re, "use"));
              return (t.className.baseVal = A + "-plug-mask-shape"), t;
          })),
          (y = []),
          (a.plugOutlineMaskSE = [0, 1].map(function (e) {
              return k((y[e] = g + "-plug-outline-mask-" + e));
          })),
          (a.plugOutlineMaskShapeSE = [0, 1].map(function (e) {
              var t = a.plugOutlineMaskSE[e].appendChild(S.createElementNS(re, "use"));
              return (t.className.baseVal = A + "-plug-outline-mask-shape"), t;
          })),
          (a.plugMarkerIdSE = [g + "-plug-marker-0", g + "-plug-marker-1"]),
          (a.plugMarkerSE = [0, 1].map(function (e) {
              var t = w(a.plugMarkerIdSE[e]);
              return pe && (t.markerUnits.baseVal = SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE), t;
          })),
          (a.plugMarkerShapeSE = [0, 1].map(function (e) {
              return a.plugMarkerSE[e].appendChild(S.createElementNS(re, "g"));
          })),
          (a.plugFaceSE = [0, 1].map(function (e) {
              return a.plugMarkerShapeSE[e].appendChild(S.createElementNS(re, "use"));
          })),
          (a.plugOutlineFaceSE = [0, 1].map(function (e) {
              var t = a.plugMarkerShapeSE[e].appendChild(S.createElementNS(re, "use"));
              return (t.style.mask = "url(#" + y[e] + ")"), (t.style.display = "none"), t;
          })),
          (a.plugsFace = r = a.face.appendChild(S.createElementNS(re, "use"))),
          (r.className.baseVal = A + "-plugs-face"),
          (r.href.baseVal = "#" + p),
          (r.style.display = "none"),
          a.curStats.show_inAnim ? ((a.isShown = 1), M[m.show_effect].stop(a, !0)) : a.isShown || (n.style.visibility = "hidden"),
          S.body.appendChild(n),
          [0, 1, 2].forEach(function (e) {
              var t,
                  n = a.options.labelSEM[e];
              n && L(n, "label") && (t = ve[n._id]).conf.initSvg && t.conf.initSvg(t, a);
          }),
          (v.line = v.plug = v.lineOutline = v.plugOutline = v.faces = v.effect = !0)),
          (v.position = x(_, u, "path", z, null, null, de.path) || v.position),
          (v.position = x(_, u, "startSocket", W, "socketSE", 0) || v.position),
          (v.position = x(_, u, "endSocket", W, "socketSE", 1) || v.position),
          [u.startSocketGravity, u.endSocketGravity].forEach(function (e, t) {
              var n,
                  a,
                  i = !1;
              null != e &&
                  (Array.isArray(e)
                      ? ye(e[0]) &&
                        ye(e[1]) &&
                        ((i = [e[0], e[1]]),
                        Array.isArray(_.socketGravitySE[t]) &&
                            ((n = i),
                            (a = _.socketGravitySE[t]),
                            n.length === a.length &&
                                n.every(function (e, t) {
                                    return e === a[t];
                                })) &&
                            (i = !1))
                      : ((e + "").toLowerCase() === U ? (i = null) : ye(e) && 0 <= e && (i = e), i === _.socketGravitySE[t] && (i = !1)),
                  !1 !== i && ((_.socketGravitySE[t] = i), (v.position = !0)));
          }),
          (v.line = b(_, u, "color", null, "lineColor", null, de.lineColor, null, !0) || v.line),
          (v.line =
              b(_, u, "size", null, "lineSize", null, de.lineSize, function (e) {
                  return 0 < e;
              }) || v.line),
          ["startPlug", "endPlug"].forEach(function (e, t) {
              (v.plug = x(_, u, e, j, "plugSE", t, de.plugSE[t]) || v.plug),
                  (v.plug = b(_, u, e + "Color", "string", "plugColorSE", t, null, null, !0) || v.plug),
                  (v.plug =
                      b(_, u, e + "Size", null, "plugSizeSE", t, de.plugSizeSE[t], function (e) {
                          return 0 < e;
                      }) || v.plug);
          }),
          (v.lineOutline = b(_, u, "outline", null, "lineOutlineEnabled", null, de.lineOutlineEnabled) || v.lineOutline),
          (v.lineOutline = b(_, u, "outlineColor", null, "lineOutlineColor", null, de.lineOutlineColor, null, !0) || v.lineOutline),
          (v.lineOutline =
              b(_, u, "outlineSize", null, "lineOutlineSize", null, de.lineOutlineSize, function (e) {
                  return 0 < e && e <= 0.48;
              }) || v.lineOutline),
          ["startPlugOutline", "endPlugOutline"].forEach(function (e, t) {
              (v.plugOutline = b(_, u, e, null, "plugOutlineEnabledSE", t, de.plugOutlineEnabledSE[t]) || v.plugOutline),
                  (v.plugOutline = b(_, u, e + "Color", "string", "plugOutlineColorSE", t, null, null, !0) || v.plugOutline),
                  (v.plugOutline =
                      b(_, u, e + "Size", null, "plugOutlineSizeSE", t, de.plugOutlineSizeSE[t], function (e) {
                          return 1 <= e;
                      }) || v.plugOutline);
          }),
          ["startLabel", "endLabel", "middleLabel"].forEach(function (e, t) {
              var n,
                  a,
                  i,
                  o = u[e],
                  l = _.labelSEM[t] && !s.optionIsAttach.labelSEM[t] ? ve[_.labelSEM[t]._id].text : _.labelSEM[t],
                  r = !1;
              if (((n = "string" == typeof o) && (o = o.trim()), (n || (o && (r = L(o, "label")))) && o !== l)) {
                  if ((_.labelSEM[t] && (it(s, ve[_.labelSEM[t]._id]), (_.labelSEM[t] = "")), o)) {
                      if (
                          (r
                              ? (a = ve[(i = o)._id]).boundTargets.slice().forEach(function (e) {
                                    a.conf.removeOption(a, e);
                                })
                              : (i = new C(I.captionLabel, [o])),
                          !at(s, ve[i._id], e))
                      )
                          throw new Error("Can't bind attachment");
                      _.labelSEM[t] = i;
                  }
                  s.optionIsAttach.labelSEM[t] = r;
              }
          }),
          Object.keys(te).forEach(function (a) {
              var e,
                  t,
                  o = te[a],
                  n = a + "_enabled",
                  i = a + "_options";
              function l(a) {
                  var i = {};
                  return (
                      o.optionsConf.forEach(function (e) {
                          var t = e[0],
                              n = e[3];
                          null == e[4] || i[n] || (i[n] = []), ("function" == typeof t ? t : "id" === t ? x : b).apply(null, [i, a].concat(e.slice(1)));
                      }),
                      i
                  );
              }
              function r(e) {
                  var t,
                      n = a + "_animOptions";
                  return (
                      e.hasOwnProperty("animation")
                          ? fe(e.animation)
                              ? (t = s.curStats[n] = tt(e.animation, o.defaultAnimOptions))
                              : ((t = !!e.animation), (s.curStats[n] = t ? tt({}, o.defaultAnimOptions) : null))
                          : ((t = !!o.defaultEnabled), (s.curStats[n] = t ? tt({}, o.defaultAnimOptions) : null)),
                      t
                  );
              }
              u.hasOwnProperty(a) &&
                  ((e = u[a]),
                  fe(e) ? ((s.curStats[n] = !0), (t = s.curStats[i] = l(e)), o.anim && (s.curStats[i].animation = r(e))) : (t = s.curStats[n] = !!e) && ((s.curStats[i] = l({})), o.anim && (s.curStats[i].animation = r({}))),
                  we(t, _[a]) && ((_[a] = t), (v.effect = !0)));
          }),
          et(s, v);
  }
  
  function lt(e, t, n) {
      var a = {
          options: { anchorSE: [], socketSE: [], socketGravitySE: [], plugSE: [], plugColorSE: [], plugSizeSE: [], plugOutlineEnabledSE: [], plugOutlineColorSE: [], plugOutlineSizeSE: [], labelSEM: ["", "", ""] },
          optionIsAttach: { anchorSE: [!1, !1], labelSEM: [!1, !1, !1] },
          curStats: {},
          aplStats: {},
          attachments: [],
          events: {},
          reflowTargets: [],
      };
      Xe(a.curStats, me),
          Xe(a.aplStats, me),
          Object.keys(te).forEach(function (e) {
              var t = te[e].stats;
              Xe(a.curStats, t), Xe(a.aplStats, t), (a.options[e] = !1);
          }),
          Xe(a.curStats, E),
          Xe(a.aplStats, E),
          (a.curStats.show_effect = O),
          (a.curStats.show_animOptions = Oe(M[O].defaultAnimOptions)),
          Object.defineProperty(this, "_id", { value: ++_e }),
          (a._id = this._id),
          (ge[this._id] = a),
          1 === arguments.length && ((n = e), (e = null)),
          (n = n || {}),
          (e || t) && ((n = Oe(n)), e && (n.start = e), t && (n.end = t)),
          (a.isShown = a.aplStats.show_on = !n.hide),
          this.setOptions(n);
  }

  function rt(n) {
      return function (e) {
          var t = {};
          (t[n] = e), this.setOptions(t);
      };
  }

  function st(e, t) {
      var n,
          a = { conf: e, curStats: {}, aplStats: {}, boundTargets: [] },
          i = {};
      e.argOptions.every(function (e) {
          return !(!t.length || ("string" == typeof e.type ? typeof t[0] !== e.type : "function" != typeof e.type || !e.type(t[0]))) && ((i[e.optionName] = t.shift()), !0);
      }),
          (n = t.length && fe(t[0]) ? Oe(t[0]) : {}),
          Object.keys(i).forEach(function (e) {
              n[e] = i[e];
          }),
          e.stats && (Xe(a.curStats, e.stats), Xe(a.aplStats, e.stats)),
          Object.defineProperty(this, "_id", { value: ++Ee }),
          Object.defineProperty(this, "isRemoved", {
              get: function () {
                  return !ve[this._id];
              },
          }),
          (a._id = this._id),
          (e.init && !e.init(a, n)) || (ve[this._id] = a);
  }

  return (
      (te = {
          dash: {
              stats: { dash_len: {}, dash_gap: {}, dash_maxOffset: {} },
              anim: !0,
              defaultAnimOptions: { duration: 1e3, timing: "linear" },
              optionsConf: [
                  [
                      "type",
                      "len",
                      "number",
                      null,
                      null,
                      null,
                      function (e) {
                          return 0 < e;
                      },
                  ],
                  [
                      "type",
                      "gap",
                      "number",
                      null,
                      null,
                      null,
                      function (e) {
                          return 0 < e;
                      },
                  ],
              ],
              init: function (e) {
                  De(e, "apl_line_strokeWidth", te.dash.update), (e.lineFace.style.strokeDashoffset = 0), te.dash.update(e);
              },
              remove: function (e) {
                  var t = e.curStats;
                  ze(e, "apl_line_strokeWidth", te.dash.update),
                      t.dash_animId && (g.remove(t.dash_animId), (t.dash_animId = null)),
                      (e.lineFace.style.strokeDasharray = "none"),
                      (e.lineFace.style.strokeDashoffset = 0),
                      Xe(e.aplStats, te.dash.stats);
              },
              update: function (t) {
                  var e,
                      n = t.curStats,
                      a = t.aplStats,
                      i = a.dash_options,
                      o = !1;
                  (n.dash_len = i.len || 2 * a.line_strokeWidth),
                      (n.dash_gap = i.gap || a.line_strokeWidth),
                      (n.dash_maxOffset = n.dash_len + n.dash_gap),
                      (o = qe(t, a, "dash_len", n.dash_len) || o),
                      (o = qe(t, a, "dash_gap", n.dash_gap) || o) && (t.lineFace.style.strokeDasharray = a.dash_len + "," + a.dash_gap),
                      n.dash_animOptions
                          ? ((o = qe(t, a, "dash_maxOffset", n.dash_maxOffset)),
                            a.dash_animOptions && (o || we(n.dash_animOptions, a.dash_animOptions)) && (n.dash_animId && ((e = g.stop(n.dash_animId)), g.remove(n.dash_animId)), (a.dash_animOptions = null)),
                            a.dash_animOptions ||
                                ((n.dash_animId = g.add(
                                    function (e) {
                                        return (1 - e) * a.dash_maxOffset + "px";
                                    },
                                    function (e) {
                                        t.lineFace.style.strokeDashoffset = e;
                                    },
                                    n.dash_animOptions.duration,
                                    0,
                                    n.dash_animOptions.timing,
                                    !1,
                                    e
                                )),
                                (a.dash_animOptions = Oe(n.dash_animOptions))))
                          : a.dash_animOptions && (n.dash_animId && (g.remove(n.dash_animId), (n.dash_animId = null)), (t.lineFace.style.strokeDashoffset = 0), (a.dash_animOptions = null));
              },
          },
          gradient: {
              stats: { gradient_colorSE: { hasSE: !0 }, gradient_pointSE: { hasSE: !0, hasProps: !0 } },
              optionsConf: [
                  ["type", "startColor", "string", "colorSE", 0, null, null, !0],
                  ["type", "endColor", "string", "colorSE", 1, null, null, !0],
              ],
              init: function (e) {
                  var t,
                      a = e.baseWindow.document,
                      n = e.defs,
                      i = A + "-" + e._id + "-gradient";
                  (e.efc_gradient_gradient = t = n.appendChild(a.createElementNS(re, "linearGradient"))),
                      (t.id = i),
                      (t.gradientUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE),
                      [t.x1, t.y1, t.x2, t.y2].forEach(function (e) {
                          e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0);
                      }),
                      (e.efc_gradient_stopSE = [0, 1].map(function (t) {
                          var n = e.efc_gradient_gradient.appendChild(a.createElementNS(re, "stop"));
                          try {
                              n.offset.baseVal = t;
                          } catch (e) {
                              if (e.code !== DOMException.NO_MODIFICATION_ALLOWED_ERR) throw e;
                              n.setAttribute("offset", t);
                          }
                          return n;
                      })),
                      De(e, "cur_plug_colorSE", te.gradient.update),
                      De(e, "apl_path", te.gradient.update),
                      (e.curStats.line_altColor = !0),
                      (e.lineFace.style.stroke = "url(#" + i + ")"),
                      te.gradient.update(e);
              },
              remove: function (e) {
                  e.efc_gradient_gradient && (e.defs.removeChild(e.efc_gradient_gradient), (e.efc_gradient_gradient = e.efc_gradient_stopSE = null)),
                      ze(e, "cur_plug_colorSE", te.gradient.update),
                      ze(e, "apl_path", te.gradient.update),
                      (e.curStats.line_altColor = !1),
                      (e.lineFace.style.stroke = e.curStats.line_color),
                      Xe(e.aplStats, te.gradient.stats);
              },
              update: function (a) {
                  var e,
                      t,
                      i = a.curStats,
                      o = a.aplStats,
                      n = o.gradient_options,
                      l = a.pathList.animVal || a.pathList.baseVal;
                  [0, 1].forEach(function (e) {
                      i.gradient_colorSE[e] = n.colorSE[e] || i.plug_colorSE[e];
                  }),
                      (t = l[0][0]),
                      (i.gradient_pointSE[0] = { x: t.x, y: t.y }),
                      (t = (e = l[l.length - 1])[e.length - 1]),
                      (i.gradient_pointSE[1] = { x: t.x, y: t.y }),
                      [0, 1].forEach(function (t) {
                          var n;
                          qe(a, o.gradient_colorSE, t, (n = i.gradient_colorSE[t])) &&
                              (pe ? ((n = Me(n)), (a.efc_gradient_stopSE[t].style.stopColor = n[1]), (a.efc_gradient_stopSE[t].style.stopOpacity = n[0])) : (a.efc_gradient_stopSE[t].style.stopColor = n)),
                              ["x", "y"].forEach(function (e) {
                                  (n = i.gradient_pointSE[t][e]) !== o.gradient_pointSE[t][e] && (a.efc_gradient_gradient[e + (t + 1)].baseVal.value = o.gradient_pointSE[t][e] = n);
                              });
                      });
              },
          },
          dropShadow: {
              stats: { dropShadow_dx: {}, dropShadow_dy: {}, dropShadow_blur: {}, dropShadow_color: {}, dropShadow_opacity: {}, dropShadow_x: {}, dropShadow_y: {} },
              optionsConf: [
                  ["type", "dx", null, null, null, 2],
                  ["type", "dy", null, null, null, 4],
                  [
                      "type",
                      "blur",
                      null,
                      null,
                      null,
                      3,
                      function (e) {
                          return 0 <= e;
                      },
                  ],
                  ["type", "color", null, null, null, "#000", null, !0],
                  [
                      "type",
                      "opacity",
                      null,
                      null,
                      null,
                      0.8,
                      function (e) {
                          return 0 <= e && e <= 1;
                      },
                  ],
              ],
              init: function (t) {
                  var e,
                      n,
                      a,
                      i,
                      o,
                      l = t.baseWindow.document,
                      r = t.defs,
                      s = A + "-" + t._id + "-dropShadow",
                      u =
                          ((e = l),
                          (n = s),
                          (o = {}),
                          "boolean" != typeof p && (p = !!window.SVGFEDropShadowElement && !pe),
                          (o.elmsAppend = [(o.elmFilter = a = e.createElementNS(re, "filter"))]),
                          (a.filterUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE),
                          a.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0),
                          a.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0),
                          a.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100),
                          a.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100),
                          (a.id = n),
                          p
                              ? ((o.elmOffset = o.elmBlur = i = a.appendChild(e.createElementNS(re, "feDropShadow"))), (o.styleFlood = i.style))
                              : ((o.elmBlur = a.appendChild(e.createElementNS(re, "feGaussianBlur"))),
                                (o.elmOffset = i = a.appendChild(e.createElementNS(re, "feOffset"))),
                                (i.result.baseVal = "offsetblur"),
                                (i = a.appendChild(e.createElementNS(re, "feFlood"))),
                                (o.styleFlood = i.style),
                                ((i = a.appendChild(e.createElementNS(re, "feComposite"))).in2.baseVal = "offsetblur"),
                                (i.operator.baseVal = SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN),
                                (i = a.appendChild(e.createElementNS(re, "feMerge"))).appendChild(e.createElementNS(re, "feMergeNode")),
                                (i.appendChild(e.createElementNS(re, "feMergeNode")).in1.baseVal = "SourceGraphic")),
                          o);
                  ["elmFilter", "elmOffset", "elmBlur", "styleFlood", "elmsAppend"].forEach(function (e) {
                      t["efc_dropShadow_" + e] = u[e];
                  }),
                      u.elmsAppend.forEach(function (e) {
                          r.appendChild(e);
                      }),
                      t.face.setAttribute("filter", "url(#" + s + ")"),
                      De(t, "new_edge4viewBox", te.dropShadow.adjustEdge),
                      te.dropShadow.update(t);
              },
              remove: function (e) {
                  var t = e.defs;
                  e.efc_dropShadow_elmsAppend &&
                      (e.efc_dropShadow_elmsAppend.forEach(function (e) {
                          t.removeChild(e);
                      }),
                      (e.efc_dropShadow_elmFilter = e.efc_dropShadow_elmOffset = e.efc_dropShadow_elmBlur = e.efc_dropShadow_styleFlood = e.efc_dropShadow_elmsAppend = null)),
                      ze(e, "new_edge4viewBox", te.dropShadow.adjustEdge),
                      et(e, {}),
                      e.face.removeAttribute("filter"),
                      Xe(e.aplStats, te.dropShadow.stats);
              },
              update: function (e) {
                  var t,
                      n,
                      a = e.curStats,
                      i = e.aplStats,
                      o = i.dropShadow_options;
                  (a.dropShadow_dx = t = o.dx),
                      qe(e, i, "dropShadow_dx", t) && ((e.efc_dropShadow_elmOffset.dx.baseVal = t), (n = !0)),
                      (a.dropShadow_dy = t = o.dy),
                      qe(e, i, "dropShadow_dy", t) && ((e.efc_dropShadow_elmOffset.dy.baseVal = t), (n = !0)),
                      (a.dropShadow_blur = t = o.blur),
                      qe(e, i, "dropShadow_blur", t) && (e.efc_dropShadow_elmBlur.setStdDeviation(t, t), (n = !0)),
                      n && et(e, {}),
                      (a.dropShadow_color = t = o.color),
                      qe(e, i, "dropShadow_color", t) && (e.efc_dropShadow_styleFlood.floodColor = t),
                      (a.dropShadow_opacity = t = o.opacity),
                      qe(e, i, "dropShadow_opacity", t) && (e.efc_dropShadow_styleFlood.floodOpacity = t);
              },
              adjustEdge: function (a, i) {
                  var e,
                      t,
                      o = a.curStats,
                      l = a.aplStats;
                  null != o.dropShadow_dx &&
                      ((e = 3 * o.dropShadow_blur),
                      (t = { x1: i.x1 - e + o.dropShadow_dx, y1: i.y1 - e + o.dropShadow_dy, x2: i.x2 + e + o.dropShadow_dx, y2: i.y2 + e + o.dropShadow_dy }).x1 < i.x1 && (i.x1 = t.x1),
                      t.y1 < i.y1 && (i.y1 = t.y1),
                      t.x2 > i.x2 && (i.x2 = t.x2),
                      t.y2 > i.y2 && (i.y2 = t.y2),
                      ["x", "y"].forEach(function (e) {
                          var t,
                              n = "dropShadow_" + e;
                          (o[n] = t = i[e + "1"]), qe(a, l, n, t) && (a.efc_dropShadow_elmFilter[e].baseVal.value = t);
                      }));
              },
          },
      }),

      Object.keys(te).forEach(function (e) {
          var t = te[e],
              n = t.stats;
          (n[e + "_enabled"] = { iniValue: !1 }), (n[e + "_options"] = { hasProps: !0 }), t.anim && ((n[e + "_animOptions"] = {}), (n[e + "_animId"] = {}));
      }),

      (M = {
          none: {
              defaultAnimOptions: {},
              init: function (e, t) {
                  var n = e.curStats;
                  n.show_animId && (g.remove(n.show_animId), (n.show_animId = null)), M.none.start(e, t);
              },
              start: function (e, t) {
                  M.none.stop(e, !0);
              },
              stop: function (e, t, n) {
                  var a = e.curStats;
                  return (n = null != n ? n : e.aplStats.show_on), (a.show_inAnim = !1), t && $e(e, n), n ? 1 : 0;
              },
          },
          fade: {
              defaultAnimOptions: { duration: 300, timing: "linear" },
              init: function (n, e) {
                  var t = n.curStats,
                      a = n.aplStats;
                  t.show_animId && g.remove(t.show_animId),
                      (t.show_animId = g.add(
                          function (e) {
                              return e;
                          },
                          function (e, t) {
                              t ? M.fade.stop(n, !0) : ((n.svg.style.opacity = e + ""), se && (He(n, n.svg), Ue(n)));
                          },
                          a.show_animOptions.duration,
                          1,
                          a.show_animOptions.timing,
                          null,
                          !1
                      )),
                      M.fade.start(n, e);
              },
              start: function (e, t) {
                  var n,
                      a = e.curStats;
                  a.show_inAnim && (n = g.stop(a.show_animId)), $e(e, 1), (a.show_inAnim = !0), g.start(a.show_animId, !e.aplStats.show_on, null != t ? t : n);
              },
              stop: function (e, t, n) {
                  var a,
                      i = e.curStats;
                  return (n = null != n ? n : e.aplStats.show_on), (a = i.show_inAnim ? g.stop(i.show_animId) : n ? 1 : 0), (i.show_inAnim = !1), t && ((e.svg.style.opacity = n ? "" : "0"), $e(e, n)), a;
              },
          },
          draw: {
              defaultAnimOptions: { duration: 500, timing: [0.58, 0, 0.42, 1] },
              init: function (n, e) {
                  var t = n.curStats,
                      a = n.aplStats,
                      l = n.pathList.baseVal,
                      i = Fe(l),
                      r = i.segsLen,
                      s = i.lenAll;
                  t.show_animId && g.remove(t.show_animId),
                      (t.show_animId = g.add(
                          function (e) {
                              var t,
                                  n,
                                  a,
                                  i,
                                  o = -1;
                              if (0 === e) n = [[l[0][0], l[0][0]]];
                              else if (1 === e) n = l;
                              else {
                                  for (t = s * e, n = []; t >= r[++o]; ) n.push(l[o]), (t -= r[o]);
                                  t && (2 === (a = l[o]).length ? n.push([a[0], Pe(a[0], a[1], t / r[o])]) : ((i = Te(a[0], a[1], a[2], a[3], Be(a[0], a[1], a[2], a[3], t))), n.push([a[0], i.fromP1, i.fromP2, i])));
                              }
                              return n;
                          },
                          function (e, t) {
                              t ? M.draw.stop(n, !0) : ((n.pathList.animVal = e), et(n, { path: !0 }));
                          },
                          a.show_animOptions.duration,
                          1,
                          a.show_animOptions.timing,
                          null,
                          !1
                      )),
                      M.draw.start(n, e);
              },
              start: function (e, t) {
                  var n,
                      a = e.curStats;
                  a.show_inAnim && (n = g.stop(a.show_animId)), $e(e, 1), (a.show_inAnim = !0), De(e, "apl_position", M.draw.update), g.start(a.show_animId, !e.aplStats.show_on, null != t ? t : n);
              },
              stop: function (e, t, n) {
                  var a,
                      i = e.curStats;
                  return (
                      (n = null != n ? n : e.aplStats.show_on),
                      (a = i.show_inAnim ? g.stop(i.show_animId) : n ? 1 : 0),
                      (i.show_inAnim = !1),
                      t && ((e.pathList.animVal = n ? null : [[e.pathList.baseVal[0][0], e.pathList.baseVal[0][0]]]), et(e, { path: !0 }), $e(e, n)),
                      a
                  );
              },
              update: function (e) {
                  ze(e, "apl_position", M.draw.update), e.curStats.show_inAnim ? M.draw.init(e, M.draw.stop(e)) : (e.aplStats.show_animOptions = {});
              },
          },
      }),
      [
          ["start", "anchorSE", 0],
          ["end", "anchorSE", 1],
          ["color", "lineColor"],
          ["size", "lineSize"],
          ["startSocketGravity", "socketGravitySE", 0],
          ["endSocketGravity", "socketGravitySE", 1],
          ["startPlugColor", "plugColorSE", 0],
          ["endPlugColor", "plugColorSE", 1],
          ["startPlugSize", "plugSizeSE", 0],
          ["endPlugSize", "plugSizeSE", 1],
          ["outline", "lineOutlineEnabled"],
          ["outlineColor", "lineOutlineColor"],
          ["outlineSize", "lineOutlineSize"],
          ["startPlugOutline", "plugOutlineEnabledSE", 0],
          ["endPlugOutline", "plugOutlineEnabledSE", 1],
          ["startPlugOutlineColor", "plugOutlineColorSE", 0],
          ["endPlugOutlineColor", "plugOutlineColorSE", 1],
          ["startPlugOutlineSize", "plugOutlineSizeSE", 0],
          ["endPlugOutlineSize", "plugOutlineSizeSE", 1],
      ].forEach(function (e) {
          var t = e[0],
              n = e[1],
              a = e[2];
          Object.defineProperty(lt.prototype, t, {
              get: function () {
                  var e = null != a ? ge[this._id].options[n][a] : n ? ge[this._id].options[n] : ge[this._id].options[t];
                  return null == e ? U : Oe(e);
              },
              set: rt(t),
              enumerable: !0,
          });
      }),
      [
          ["path", z],
          ["startSocket", W, "socketSE", 0],
          ["endSocket", W, "socketSE", 1],
          ["startPlug", j, "plugSE", 0],
          ["endPlug", j, "plugSE", 1],
      ].forEach(function (e) {
          var a = e[0],
              i = e[1],
              o = e[2],
              l = e[3];
          Object.defineProperty(lt.prototype, a, {
              get: function () {
                  var t,
                      n = null != l ? ge[this._id].options[o][l] : o ? ge[this._id].options[o] : ge[this._id].options[a];
                  return n
                      ? Object.keys(i).some(function (e) {
                            return i[e] === n && ((t = e), !0);
                        })
                          ? t
                          : new Error("It's broken")
                      : U;
              },
              set: rt(a),
              enumerable: !0,
          });
      }),
      Object.keys(te).forEach(function (n) {
          var a = te[n];
          Object.defineProperty(lt.prototype, n, {
              get: function () {
                  var u,
                      e,
                      t = ge[this._id].options[n];
                  return fe(t)
                      ? ((u = t),
                        (e = a.optionsConf.reduce(function (e, t) {
                            var n,
                                a = t[0],
                                i = t[1],
                                o = t[2],
                                l = t[3],
                                r = t[4],
                                s = null != r ? u[l][r] : l ? u[l] : u[i];
                            return (
                                (e[i] =
                                    "id" === a
                                        ? s
                                            ? Object.keys(o).some(function (e) {
                                                  return o[e] === s && ((n = e), !0);
                                              })
                                                ? n
                                                : new Error("It's broken")
                                            : U
                                        : null == s
                                        ? U
                                        : Oe(s)),
                                e
                            );
                        }, {})),
                        a.anim && (e.animation = Oe(u.animation)),
                        e)
                      : t;
              },
              set: rt(n),
              enumerable: !0,
          });
      }),
      ["startLabel", "endLabel", "middleLabel"].forEach(function (e, n) {
          Object.defineProperty(lt.prototype, e, {
              get: function () {
                  var e = ge[this._id],
                      t = e.options;
                  return t.labelSEM[n] && !e.optionIsAttach.labelSEM[n] ? ve[t.labelSEM[n]._id].text : t.labelSEM[n] || "";
              },
              set: rt(e),
              enumerable: !0,
          });
      }),
      (lt.prototype.setOptions = function (e) {
          return ot(ge[this._id], e), this;
      }),
      (lt.prototype.position = function () {
          return et(ge[this._id], { position: !0 }), this;
      }),
      (lt.prototype.remove = function () {
          var t = ge[this._id],
              n = t.curStats;
          Object.keys(te).forEach(function (e) {
              var t = e + "_animId";
              n[t] && g.remove(n[t]);
          }),
              n.show_animId && g.remove(n.show_animId),
              t.attachments.slice().forEach(function (e) {
                  it(t, e);
              }),
              t.baseWindow && t.svg && t.baseWindow.document.body.removeChild(t.svg),
              delete ge[this._id];
      }),
      (lt.prototype.show = function (e, t) {
          return nt(ge[this._id], !0, e, t), this;
      }),
      (lt.prototype.hide = function (e, t) {
          return nt(ge[this._id], !1, e, t), this;
      }),
      (o = function (t) {
          t &&
              ve[t._id] &&
              (t.boundTargets.slice().forEach(function (e) {
                  it(e.props, t, !0);
              }),
              t.conf.remove && t.conf.remove(t),
              delete ve[t._id]);
      }),
      (st.prototype.remove = function () {
          var t = this,
              n = ve[t._id];
          n &&
              (n.boundTargets.slice().forEach(function (e) {
                  n.conf.removeOption(n, e);
              }),
              je(function () {
                  var e = ve[t._id];
                  e && (console.error("LeaderLineAttachment was not removed by removeOption"), o(e));
              }));
      }),
      (C = st),
      (window.LeaderLineAttachment = C),
      (L = function (e, t) {
          return e instanceof C && (!(e.isRemoved || (t && ve[e._id].conf.type !== t)) || null);
      }),
      (I = {
          pointAnchor: {
              type: "anchor",
              argOptions: [{ optionName: "element", type: Ie }],
              init: function (e, t) {
                  return (e.element = I.pointAnchor.checkElement(t.element)), (e.x = I.pointAnchor.parsePercent(t.x, !0) || [0.5, !0]), (e.y = I.pointAnchor.parsePercent(t.y, !0) || [0.5, !0]), !0;
              },
              removeOption: function (e, t) {
                  var n = t.props,
                      a = {},
                      i = e.element,
                      o = n.options.anchorSE["start" === t.optionName ? 1 : 0];
                  i === o && (i = o === document.body ? new C(I.pointAnchor, [i]) : document.body), (a[t.optionName] = i), ot(n, a);
              },
              getBBoxNest: function (e, t) {
                  var n = Ae(e.element, t.baseWindow),
                      a = n.width,
                      i = n.height;
                  return (n.width = n.height = 0), (n.left = n.right = n.left + e.x[0] * (e.x[1] ? a : 1)), (n.top = n.bottom = n.top + e.y[0] * (e.y[1] ? i : 1)), n;
              },
              parsePercent: function (e, t) {
                  var n,
                      a,
                      i = !1;
                  return ye(e) ? (a = e) : "string" == typeof e && (n = m.exec(e)) && n[2] && (i = 0 !== (a = parseFloat(n[1]) / 100)), null != a && (t || 0 <= a) ? [a, i] : null;
              },
              checkElement: function (e) {
                  if (null == e) e = document.body;
                  else if (!Ie(e)) throw new Error("`element` must be Element");
                  return e;
              },
          },
          areaAnchor: {
              type: "anchor",
              argOptions: [
                  { optionName: "element", type: Ie },
                  { optionName: "shape", type: "string" },
              ],
              stats: { color: {}, strokeWidth: {}, elementWidth: {}, elementHeight: {}, elementLeft: {}, elementTop: {}, pathListRel: {}, bBoxRel: {}, pathData: {}, viewBoxBBox: { hasProps: !0 }, dashLen: {}, dashGap: {} },
              init: function (i, e) {
                  var t,
                      n,
                      a,
                      o = [];
                  return (
                      (i.element = I.pointAnchor.checkElement(e.element)),
                      "string" == typeof e.color && (i.color = e.color.trim()),
                      "string" == typeof e.fillColor && (i.fill = e.fillColor.trim()),
                      ye(e.size) && 0 <= e.size && (i.size = e.size),
                      e.dash && ((i.dash = !0), ye(e.dash.len) && 0 < e.dash.len && (i.dashLen = e.dash.len), ye(e.dash.gap) && 0 < e.dash.gap && (i.dashGap = e.dash.gap)),
                      "circle" === e.shape
                          ? (i.shape = e.shape)
                          : "polygon" === e.shape &&
                            Array.isArray(e.points) &&
                            3 <= e.points.length &&
                            e.points.every(function (e) {
                                var t = {};
                                return !(!(t.x = I.pointAnchor.parsePercent(e[0], !0)) || !(t.y = I.pointAnchor.parsePercent(e[1], !0))) && (o.push(t), (t.x[1] || t.y[1]) && (i.hasRatio = !0), !0);
                            })
                          ? ((i.shape = e.shape), (i.points = o))
                          : ((i.shape = "rect"), (i.radius = ye(e.radius) && 0 <= e.radius ? e.radius : 0)),
                      ("rect" !== i.shape && "circle" !== i.shape) ||
                          ((i.x = I.pointAnchor.parsePercent(e.x, !0) || [-0.05, !0]),
                          (i.y = I.pointAnchor.parsePercent(e.y, !0) || [-0.05, !0]),
                          (i.width = I.pointAnchor.parsePercent(e.width) || [1.1, !0]),
                          (i.height = I.pointAnchor.parsePercent(e.height) || [1.1, !0]),
                          (i.x[1] || i.y[1] || i.width[1] || i.height[1]) && (i.hasRatio = !0)),
                      (t = i.element.ownerDocument),
                      (i.svg = n = t.createElementNS(re, "svg")),
                      (n.className.baseVal = A + "-areaAnchor"),
                      n.viewBox.baseVal || n.setAttribute("viewBox", "0 0 0 0"),
                      (i.path = n.appendChild(t.createElementNS(re, "path"))),
                      (i.path.style.fill = i.fill || "none"),
                      (i.isShown = !1),
                      (n.style.visibility = "hidden"),
                      t.body.appendChild(n),
                      Ke((a = t.defaultView)),
                      (i.bodyOffset = Qe(a)),
                      (i.updateColor = function () {
                          var e,
                              t = i.curStats,
                              n = i.aplStats,
                              a = i.boundTargets.length ? i.boundTargets[0].props.curStats : null;
                          (t.color = e = i.color || (a ? a.line_color : de.lineColor)), qe(i, n, "color", e) && (i.path.style.stroke = e);
                      }),
                      (i.updateShow = function () {
                          $e(
                              i,
                              i.boundTargets.some(function (e) {
                                  return !0 === e.props.isShown;
                              })
                          );
                      }),
                      !0
                  );
              },
              bind: function (e, t) {
                  var n = t.props;
                  return (
                      e.color || De(n, "cur_line_color", e.updateColor),
                      De(n, "svgShow", e.updateShow),
                      je(function () {
                          e.updateColor(), e.updateShow();
                      }),
                      !0
                  );
              },
              unbind: function (e, t) {
                  var n = t.props;
                  e.color || ze(n, "cur_line_color", e.updateColor),
                      ze(n, "svgShow", e.updateShow),
                      1 < e.boundTargets.length &&
                          je(function () {
                              e.updateColor(),
                                  e.updateShow(),
                                  I.areaAnchor.update(e) &&
                                      e.boundTargets.forEach(function (e) {
                                          et(e.props, { position: !0 });
                                      });
                          });
              },
              removeOption: function (e, t) {
                  I.pointAnchor.removeOption(e, t);
              },
              remove: function (t) {
                  t.boundTargets.length &&
                      (console.error("LeaderLineAttachment was not unbound by remove"),
                      t.boundTargets.forEach(function (e) {
                          I.areaAnchor.unbind(t, e);
                      })),
                      t.svg.parentNode.removeChild(t.svg);
              },
              getStrokeWidth: function (e, t) {
                  return (
                      I.areaAnchor.update(e) &&
                          1 < e.boundTargets.length &&
                          je(function () {
                              e.boundTargets.forEach(function (e) {
                                  e.props !== t && et(e.props, { position: !0 });
                              });
                          }),
                      e.curStats.strokeWidth
                  );
              },
              getPathData: function (e, t) {
                  var n = Ae(e.element, t.baseWindow);
                  return Re(e.curStats.pathListRel, function (e) {
                      (e.x += n.left), (e.y += n.top);
                  });
              },
              getBBoxNest: function (e, t) {
                  var n = Ae(e.element, t.baseWindow),
                      a = e.curStats.bBoxRel;
                  return { left: a.left + n.left, top: a.top + n.top, right: a.right + n.left, bottom: a.bottom + n.top, width: a.width, height: a.height };
              },
              update: function (t) {
                  var a,
                      n,
                      i,
                      o,
                      e,
                      l,
                      r,
                      s,
                      u,
                      h,
                      p,
                      c,
                      d,
                      f,
                      y,
                      m,
                      S,
                      g,
                      _,
                      v,
                      E,
                      x,
                      b,
                      k,
                      w,
                      O,
                      M,
                      I,
                      C,
                      L,
                      A,
                      V,
                      P = t.curStats,
                      N = t.aplStats,
                      T = t.boundTargets.length ? t.boundTargets[0].props.curStats : null,
                      W = {};
                  if (
                      ((W.strokeWidth = qe(t, P, "strokeWidth", null != t.size ? t.size : T ? T.line_strokeWidth : de.lineSize)),
                      (a = Ce(t.element)),
                      (W.elementWidth = qe(t, P, "elementWidth", a.width)),
                      (W.elementHeight = qe(t, P, "elementHeight", a.height)),
                      (W.elementLeft = qe(t, P, "elementLeft", a.left)),
                      (W.elementTop = qe(t, P, "elementTop", a.top)),
                      W.strokeWidth || (t.hasRatio && (W.elementWidth || W.elementHeight)))
                  ) {
                      switch (t.shape) {
                          case "rect":
                              ((I = { left: t.x[0] * (t.x[1] ? a.width : 1), top: t.y[0] * (t.y[1] ? a.height : 1), width: t.width[0] * (t.width[1] ? a.width : 1), height: t.height[0] * (t.height[1] ? a.height : 1) }).right =
                                  I.left + I.width),
                                  (I.bottom = I.top + I.height),
                                  (b = P.strokeWidth / 2),
                                  (E = (x = Math.min(I.width, I.height)) ? (x / 2) * Math.SQRT2 + b : 0),
                                  (O = (v = t.radius ? (t.radius <= E ? t.radius : E) : 0)
                                      ? ((w = v - (k = (v - b) / Math.SQRT2)),
                                        (M = v * ee),
                                        (O = [
                                            { x: I.left - w, y: I.top + k },
                                            { x: I.left + k, y: I.top - w },
                                            { x: I.right - k, y: I.top - w },
                                            { x: I.right + w, y: I.top + k },
                                            { x: I.right + w, y: I.bottom - k },
                                            { x: I.right - k, y: I.bottom + w },
                                            { x: I.left + k, y: I.bottom + w },
                                            { x: I.left - w, y: I.bottom - k },
                                        ]),
                                        (P.pathListRel = [[O[0], { x: O[0].x, y: O[0].y - M }, { x: O[1].x - M, y: O[1].y }, O[1]]]),
                                        O[1].x !== O[2].x && P.pathListRel.push([O[1], O[2]]),
                                        P.pathListRel.push([O[2], { x: O[2].x + M, y: O[2].y }, { x: O[3].x, y: O[3].y - M }, O[3]]),
                                        O[3].y !== O[4].y && P.pathListRel.push([O[3], O[4]]),
                                        P.pathListRel.push([O[4], { x: O[4].x, y: O[4].y + M }, { x: O[5].x + M, y: O[5].y }, O[5]]),
                                        O[5].x !== O[6].x && P.pathListRel.push([O[5], O[6]]),
                                        P.pathListRel.push([O[6], { x: O[6].x - M, y: O[6].y }, { x: O[7].x, y: O[7].y + M }, O[7]]),
                                        O[7].y !== O[0].y && P.pathListRel.push([O[7], O[0]]),
                                        P.pathListRel.push([]),
                                        (w = v - k + P.strokeWidth / 2),
                                        [
                                            { x: I.left - w, y: I.top - w },
                                            { x: I.right + w, y: I.bottom + w },
                                        ])
                                      : ((w = P.strokeWidth / 2),
                                        (O = [
                                            { x: I.left - w, y: I.top - w },
                                            { x: I.right + w, y: I.bottom + w },
                                        ]),
                                        (P.pathListRel = [[O[0], { x: O[1].x, y: O[0].y }], [{ x: O[1].x, y: O[0].y }, O[1]], [O[1], { x: O[0].x, y: O[1].y }], []]),
                                        [
                                            { x: I.left - P.strokeWidth, y: I.top - P.strokeWidth },
                                            { x: I.right + P.strokeWidth, y: I.bottom + P.strokeWidth },
                                        ])),
                                  (P.bBoxRel = { left: O[0].x, top: O[0].y, right: O[1].x, bottom: O[1].y, width: O[1].x - O[0].x, height: O[1].y - O[0].y });
                              break;
                          case "circle":
                              (_ = { left: t.x[0] * (t.x[1] ? a.width : 1), top: t.y[0] * (t.y[1] ? a.height : 1), width: t.width[0] * (t.width[1] ? a.width : 1), height: t.height[0] * (t.height[1] ? a.height : 1) }).width ||
                                  _.height ||
                                  (_.width = _.height = 10),
                                  _.width || (_.width = _.height),
                                  _.height || (_.height = _.width),
                                  (_.right = _.left + _.width),
                                  (_.bottom = _.top + _.height),
                                  (r = _.left + _.width / 2),
                                  (s = _.top + _.height / 2),
                                  (d = P.strokeWidth / 2),
                                  (f = _.width / 2),
                                  (y = _.height / 2),
                                  (u = f * Math.SQRT2 + d),
                                  (h = y * Math.SQRT2 + d),
                                  (p = u * ee),
                                  (c = h * ee),
                                  (g = [
                                      { x: r - u, y: s },
                                      { x: r, y: s - h },
                                      { x: r + u, y: s },
                                      { x: r, y: s + h },
                                  ]),
                                  (P.pathListRel = [
                                      [g[0], { x: g[0].x, y: g[0].y - c }, { x: g[1].x - p, y: g[1].y }, g[1]],
                                      [g[1], { x: g[1].x + p, y: g[1].y }, { x: g[2].x, y: g[2].y - c }, g[2]],
                                      [g[2], { x: g[2].x, y: g[2].y + c }, { x: g[3].x + p, y: g[3].y }, g[3]],
                                      [g[3], { x: g[3].x - p, y: g[3].y }, { x: g[0].x, y: g[0].y + c }, g[0]],
                                      [],
                                  ]),
                                  (m = u - f + P.strokeWidth / 2),
                                  (S = h - y + P.strokeWidth / 2),
                                  (g = [
                                      { x: _.left - m, y: _.top - S },
                                      { x: _.right + m, y: _.bottom + S },
                                  ]),
                                  (P.bBoxRel = { left: g[0].x, top: g[0].y, right: g[1].x, bottom: g[1].y, width: g[1].x - g[0].x, height: g[1].y - g[0].y });
                              break;
                          case "polygon":
                              t.points.forEach(function (e) {
                                  var t = e.x[0] * (e.x[1] ? a.width : 1),
                                      n = e.y[0] * (e.y[1] ? a.height : 1);
                                  i ? (t < i.left && (i.left = t), t > i.right && (i.right = t), n < i.top && (i.top = n), n > i.bottom && (i.bottom = n)) : (i = { left: t, right: t, top: n, bottom: n }),
                                      o ? P.pathListRel.push([o, { x: t, y: n }]) : (P.pathListRel = []),
                                      (o = { x: t, y: n });
                              }),
                                  P.pathListRel.push([]),
                                  (e = P.strokeWidth / 2),
                                  (l = [
                                      { x: i.left - e, y: i.top - e },
                                      { x: i.right + e, y: i.bottom + e },
                                  ]),
                                  (P.bBoxRel = { left: l[0].x, top: l[0].y, right: l[1].x, bottom: l[1].y, width: l[1].x - l[0].x, height: l[1].y - l[0].y });
                      }
                      W.pathListRel = W.bBoxRel = !0;
                  }
                  return (
                      (W.pathListRel || W.elementLeft || W.elementTop) &&
                          (P.pathData = Re(P.pathListRel, function (e) {
                              (e.x += a.left), (e.y += a.top);
                          })),
                      qe(t, N, "strokeWidth", (n = P.strokeWidth)) && (t.path.style.strokeWidth = n + "px"),
                      Ge((n = P.pathData), N.pathData) && (t.path.setPathData(n), (N.pathData = n), (W.pathData = !0)),
                      t.dash &&
                          ((!W.pathData && (!W.strokeWidth || (t.dashLen && t.dashGap))) || ((P.dashLen = t.dashLen || 2 * P.strokeWidth), (P.dashGap = t.dashGap || P.strokeWidth)),
                          (W.dash = qe(t, N, "dashLen", P.dashLen) || W.dash),
                          (W.dash = qe(t, N, "dashGap", P.dashGap) || W.dash),
                          W.dash && (t.path.style.strokeDasharray = N.dashLen + "," + N.dashGap)),
                      (C = P.viewBoxBBox),
                      (L = N.viewBoxBBox),
                      (A = t.svg.viewBox.baseVal),
                      (V = t.svg.style),
                      (C.x = P.bBoxRel.left + a.left),
                      (C.y = P.bBoxRel.top + a.top),
                      (C.width = P.bBoxRel.width),
                      (C.height = P.bBoxRel.height),
                      ["x", "y", "width", "height"].forEach(function (e) {
                          (n = C[e]) !== L[e] && ((A[e] = L[e] = n), (V[oe[e]] = n + ("x" === e || "y" === e ? t.bodyOffset[e] : 0) + "px"));
                      }),
                      W.strokeWidth || W.pathListRel || W.bBoxRel
                  );
              },
          },
          mouseHoverAnchor: {
              type: "anchor",
              argOptions: [
                  { optionName: "element", type: Ie },
                  { optionName: "showEffectName", type: "string" },
              ],
              style: {
                  backgroundImage:
                      "url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==')",
                  backgroundSize: "",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#f8f881",
                  cursor: "default",
              },
              hoverStyle: { backgroundImage: "none", backgroundColor: "#fadf8f" },
              padding: { top: 1, right: 15, bottom: 1, left: 2 },
              minHeight: 15,
              backgroundPosition: { right: 2, top: 2 },
              backgroundSize: { width: 12, height: 12 },
              dirKeys: [
                  ["top", "Top"],
                  ["right", "Right"],
                  ["bottom", "Bottom"],
                  ["left", "Left"],
              ],
              init: function (a, i) {
                  var o,
                      t,
                      e,
                      n,
                      l,
                      r,
                      s,
                      u,
                      h,
                      p,
                      c,
                      d = I.mouseHoverAnchor,
                      f = {};
                  if (((a.element = I.pointAnchor.checkElement(i.element)), (u = a.element), !((p = u.ownerDocument) && (h = p.defaultView) && h.HTMLElement && u instanceof h.HTMLElement)))
                      throw new Error("`element` must be HTML element");
                  return (
                      (d.style.backgroundSize = d.backgroundSize.width + "px " + d.backgroundSize.height + "px"),
                      ["style", "hoverStyle"].forEach(function (e) {
                          var n = d[e];
                          a[e] = Object.keys(n).reduce(function (e, t) {
                              return (e[t] = n[t]), e;
                          }, {});
                      }),
                      "inline" === (o = a.element.ownerDocument.defaultView.getComputedStyle(a.element, "")).display ? (a.style.display = "inline-block") : "none" === o.display && (a.style.display = "block"),
                      I.mouseHoverAnchor.dirKeys.forEach(function (e) {
                          var t = e[0],
                              n = "padding" + e[1];
                          parseFloat(o[n]) < d.padding[t] && (a.style[n] = d.padding[t] + "px");
                      }),
                      a.style.display && ((n = a.element.style.display), (a.element.style.display = a.style.display)),
                      I.mouseHoverAnchor.dirKeys.forEach(function (e) {
                          var t = "padding" + e[1];
                          a.style[t] && ((f[t] = a.element.style[t]), (a.element.style[t] = a.style[t]));
                      }),
                      (e = a.element.getBoundingClientRect()).height < d.minHeight &&
                          (se
                              ? ((c = d.minHeight),
                                "content-box" === o.boxSizing
                                    ? (c -= parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth) + parseFloat(o.paddingTop) + parseFloat(o.paddingBottom))
                                    : "padding-box" === o.boxSizing && (c -= parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth)),
                                (a.style.height = c + "px"))
                              : (a.style.height = parseFloat(o.height) + (d.minHeight - e.height) + "px")),
                      (a.style.backgroundPosition = pe
                          ? e.width - d.backgroundSize.width - d.backgroundPosition.right + "px " + d.backgroundPosition.top + "px"
                          : "right " + d.backgroundPosition.right + "px top " + d.backgroundPosition.top + "px"),
                      a.style.display && (a.element.style.display = n),
                      I.mouseHoverAnchor.dirKeys.forEach(function (e) {
                          var t = "padding" + e[1];
                          a.style[t] && (a.element.style[t] = f[t]);
                      }),
                      ["style", "hoverStyle"].forEach(function (e) {
                          var t = a[e],
                              n = i[e];
                          fe(n) &&
                              Object.keys(n).forEach(function (e) {
                                  "string" == typeof n[e] || ye(n[e]) ? (t[e] = n[e]) : null == n[e] && delete t[e];
                              });
                      }),
                      "function" == typeof i.onSwitch && (s = i.onSwitch),
                      i.showEffectName && M[i.showEffectName] && (a.showEffectName = l = i.showEffectName),
                      (r = i.animOptions),
                      (a.elmStyle = t = a.element.style),
                      (a.mouseenter = function (e) {
                          (a.hoverStyleSave = d.getStyles(t, Object.keys(a.hoverStyle))),
                              d.setStyles(t, a.hoverStyle),
                              a.boundTargets.forEach(function (e) {
                                  nt(e.props, !0, l, r);
                              }),
                              s && s(e);
                      }),
                      (a.mouseleave = function (e) {
                          d.setStyles(t, a.hoverStyleSave),
                              a.boundTargets.forEach(function (e) {
                                  nt(e.props, !1, l, r);
                              }),
                              s && s(e);
                      }),
                      !0
                  );
              },
              bind: function (e, t) {
                  var n, a, i, o, l;
                  return (
                      t.props.svg
                          ? I.mouseHoverAnchor.llShow(t.props, !1, e.showEffectName)
                          : je(function () {
                                I.mouseHoverAnchor.llShow(t.props, !1, e.showEffectName);
                            }),
                      e.enabled ||
                          ((e.styleSave = I.mouseHoverAnchor.getStyles(e.elmStyle, Object.keys(e.style))),
                          I.mouseHoverAnchor.setStyles(e.elmStyle, e.style),
                          (e.removeEventListener =
                              ((n = e.element),
                              (a = e.mouseenter),
                              (i = e.mouseleave),
                              "onmouseenter" in n && "onmouseleave" in n
                                  ? (n.addEventListener("mouseenter", a, !1),
                                    n.addEventListener("mouseleave", i, !1),
                                    function () {
                                        n.removeEventListener("mouseenter", a, !1), n.removeEventListener("mouseleave", i, !1);
                                    })
                                  : (console.warn("mouseenter and mouseleave events polyfill is enabled."),
                                    (o = function (e) {
                                        (e.relatedTarget && (e.relatedTarget === this || this.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) || a.apply(this, arguments);
                                    }),
                                    n.addEventListener("mouseover", o),
                                    (l = function (e) {
                                        (e.relatedTarget && (e.relatedTarget === this || this.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) || i.apply(this, arguments);
                                    }),
                                    n.addEventListener("mouseout", l),
                                    function () {
                                        n.removeEventListener("mouseover", o, !1), n.removeEventListener("mouseout", l, !1);
                                    }))),
                          (e.enabled = !0)),
                      !0
                  );
              },
              unbind: function (e, t) {
                  e.enabled && e.boundTargets.length <= 1 && (e.removeEventListener(), I.mouseHoverAnchor.setStyles(e.elmStyle, e.styleSave), (e.enabled = !1)), I.mouseHoverAnchor.llShow(t.props, !0, e.showEffectName);
              },
              removeOption: function (e, t) {
                  I.pointAnchor.removeOption(e, t);
              },
              remove: function (t) {
                  t.boundTargets.length &&
                      (console.error("LeaderLineAttachment was not unbound by remove"),
                      t.boundTargets.forEach(function (e) {
                          I.mouseHoverAnchor.unbind(t, e);
                      }));
              },
              getBBoxNest: function (e, t) {
                  return Ae(e.element, t.baseWindow);
              },
              llShow: function (e, t, n) {
                  M[n || e.curStats.show_effect].stop(e, !0, t), (e.aplStats.show_on = t);
              },
              getStyles: function (n, e) {
                  return e.reduce(function (e, t) {
                      return (e[t] = n[t]), e;
                  }, {});
              },
              setStyles: function (t, n) {
                  Object.keys(n).forEach(function (e) {
                      t[e] = n[e];
                  });
              },
          },
          captionLabel: {
              type: "label",
              argOptions: [{ optionName: "text", type: "string" }],
              stats: { color: {}, x: {}, y: {} },
              textStyleProps: ["fontFamily", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "kerning", "letterSpacing", "wordSpacing", "textDecoration"],
              init: function (u, t) {
                  return (
                      "string" == typeof t.text && (u.text = t.text.trim()),
                      !!u.text &&
                          ("string" == typeof t.color && (u.color = t.color.trim()),
                          (u.outlineColor = "string" == typeof t.outlineColor ? t.outlineColor.trim() : "#fff"),
                          Array.isArray(t.offset) && ye(t.offset[0]) && ye(t.offset[1]) && (u.offset = { x: t.offset[0], y: t.offset[1] }),
                          ye(t.lineOffset) && (u.lineOffset = t.lineOffset),
                          I.captionLabel.textStyleProps.forEach(function (e) {
                              null != t[e] && (u[e] = t[e]);
                          }),
                          (u.updateColor = function (e) {
                              I.captionLabel.updateColor(u, e);
                          }),
                          (u.updateSocketXY = function (e) {
                              var t,
                                  n,
                                  a,
                                  i,
                                  o = u.curStats,
                                  l = u.aplStats,
                                  r = e.curStats,
                                  s = r.position_socketXYSE[u.socketIndex];
                              null != s.x &&
                                  (u.offset
                                      ? ((o.x = s.x + u.offset.x), (o.y = s.y + u.offset.y))
                                      : ((t = u.height / 2),
                                        (n = Math.max(r.attach_plugSideLenSE[u.socketIndex] || 0, r.line_strokeWidth / 2)),
                                        (a = r.position_socketXYSE[u.socketIndex ? 0 : 1]),
                                        s.socketId === T || s.socketId === P
                                            ? ((o.x = s.socketId === T ? s.x - t - u.width : s.x + t), (o.y = a.y < s.y ? s.y + n + t : s.y - n - t - u.height))
                                            : ((o.x = a.x < s.x ? s.x + n + t : s.x - n - t - u.width), (o.y = s.socketId === V ? s.y - t - u.height : s.y + t))),
                                  qe(u, l, "x", (i = o.x)) && (u.elmPosition.x.baseVal.getItem(0).value = i),
                                  qe(u, l, "y", (i = o.y)) && (u.elmPosition.y.baseVal.getItem(0).value = i + u.height));
                          }),
                          (u.updatePath = function (e) {
                              var t,
                                  n,
                                  a = u.curStats,
                                  i = u.aplStats,
                                  o = e.pathList.animVal || e.pathList.baseVal;
                              o &&
                                  ((t = I.captionLabel.getMidPoint(o, u.lineOffset)),
                                  (a.x = t.x - u.width / 2),
                                  (a.y = t.y - u.height / 2),
                                  qe(u, i, "x", (n = a.x)) && (u.elmPosition.x.baseVal.getItem(0).value = n),
                                  qe(u, i, "y", (n = a.y)) && (u.elmPosition.y.baseVal.getItem(0).value = n + u.height));
                          }),
                          (u.updateShow = function (e) {
                              I.captionLabel.updateShow(u, e);
                          }),
                          pe &&
                              (u.adjustEdge = function (e, t) {
                                  var n = u.curStats;
                                  null != n.x && I.captionLabel.adjustEdge(t, { x: n.x, y: n.y, width: u.width, height: u.height }, u.strokeWidth / 2);
                              }),
                          !0)
                  );
              },
              updateColor: function (e, t) {
                  var n,
                      a = e.curStats,
                      i = e.aplStats,
                      o = t.curStats;
                  (a.color = n = e.color || o.line_color), qe(e, i, "color", n) && (e.styleFill.fill = n);
              },
              updateShow: function (e, t) {
                  var n = !0 === t.isShown;
                  n !== e.isShown && ((e.styleShow.visibility = n ? "" : "hidden"), (e.isShown = n));
              },
              adjustEdge: function (e, t, n) {
                  var a = { x1: t.x - n, y1: t.y - n, x2: t.x + t.width + n, y2: t.y + t.height + n };
                  a.x1 < e.x1 && (e.x1 = a.x1), a.y1 < e.y1 && (e.y1 = a.y1), a.x2 > e.x2 && (e.x2 = a.x2), a.y2 > e.y2 && (e.y2 = a.y2);
              },
              newText: function (e, t, n, a, i) {
                  var o,
                      l,
                      r,
                      s,
                      u,
                      h = t.createElementNS(re, "text");
                  return (
                      (h.textContent = e),
                      [h.x, h.y].forEach(function (e) {
                          var t = n.createSVGLength();
                          t.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), e.baseVal.initialize(t);
                      }),
                      "boolean" != typeof f && (f = "paintOrder" in h.style),
                      i && !f
                          ? ((l = t.createElementNS(re, "defs")),
                            (h.id = a),
                            l.appendChild(h),
                            ((s = (o = t.createElementNS(re, "g")).appendChild(t.createElementNS(re, "use"))).href.baseVal = "#" + a),
                            ((r = o.appendChild(t.createElementNS(re, "use"))).href.baseVal = "#" + a),
                            ((u = s.style).strokeLinejoin = "round"),
                            { elmPosition: h, styleText: h.style, styleFill: r.style, styleStroke: u, styleShow: o.style, elmsAppend: [l, o] })
                          : ((u = h.style), i && ((u.strokeLinejoin = "round"), (u.paintOrder = "stroke")), { elmPosition: h, styleText: u, styleFill: u, styleStroke: i ? u : null, styleShow: u, elmsAppend: [h] })
                  );
              },
              getMidPoint: function (e, t) {
                  var n,
                      a,
                      i = Fe(e),
                      o = i.segsLen,
                      l = i.lenAll,
                      r = -1,
                      s = l / 2 + (t || 0);
                  if (s <= 0) return 2 === (n = e[0]).length ? Pe(n[0], n[1], 0) : Te(n[0], n[1], n[2], n[3], 0);
                  if (l <= s) return 2 === (n = e[e.length - 1]).length ? Pe(n[0], n[1], 1) : Te(n[0], n[1], n[2], n[3], 1);
                  for (a = []; s > o[++r]; ) a.push(e[r]), (s -= o[r]);
                  return 2 === (n = e[r]).length ? Pe(n[0], n[1], s / o[r]) : Te(n[0], n[1], n[2], n[3], Be(n[0], n[1], n[2], n[3], s));
              },
              initSvg: function (t, n) {
                  var e,
                      a,
                      i = I.captionLabel.newText(t.text, n.baseWindow.document, n.svg, A + "-captionLabel-" + t._id, t.outlineColor);
                  ["elmPosition", "styleFill", "styleShow", "elmsAppend"].forEach(function (e) {
                      t[e] = i[e];
                  }),
                      (t.isShown = !1),
                      (t.styleShow.visibility = "hidden"),
                      I.captionLabel.textStyleProps.forEach(function (e) {
                          null != t[e] && (i.styleText[e] = t[e]);
                      }),
                      i.elmsAppend.forEach(function (e) {
                          n.svg.appendChild(e);
                      }),
                      (e = i.elmPosition.getBBox()),
                      (t.width = e.width),
                      (t.height = e.height),
                      t.outlineColor && ((a = 10 < (a = e.height / 9) ? 10 : a < 2 ? 2 : a), (i.styleStroke.strokeWidth = a + "px"), (i.styleStroke.stroke = t.outlineColor)),
                      (t.strokeWidth = a || 0),
                      Xe(t.aplStats, I.captionLabel.stats),
                      t.updateColor(n),
                      t.refSocketXY ? t.updateSocketXY(n) : t.updatePath(n),
                      pe && et(n, {}),
                      t.updateShow(n);
              },
              bind: function (e, t) {
                  var n = t.props;
                  return (
                      e.color || De(n, "cur_line_color", e.updateColor),
                      (e.refSocketXY = "startLabel" === t.optionName || "endLabel" === t.optionName)
                          ? ((e.socketIndex = "startLabel" === t.optionName ? 0 : 1),
                            De(n, "apl_position", e.updateSocketXY),
                            e.offset || (De(n, "cur_attach_plugSideLenSE", e.updateSocketXY), De(n, "cur_line_strokeWidth", e.updateSocketXY)))
                          : De(n, "apl_path", e.updatePath),
                      De(n, "svgShow", e.updateShow),
                      pe && De(n, "new_edge4viewBox", e.adjustEdge),
                      I.captionLabel.initSvg(e, n),
                      !0
                  );
              },
              unbind: function (e, t) {
                  var n = t.props;
                  e.elmsAppend &&
                      (e.elmsAppend.forEach(function (e) {
                          n.svg.removeChild(e);
                      }),
                      (e.elmPosition = e.styleFill = e.styleShow = e.elmsAppend = null)),
                      Xe(e.curStats, I.captionLabel.stats),
                      Xe(e.aplStats, I.captionLabel.stats),
                      e.color || ze(n, "cur_line_color", e.updateColor),
                      e.refSocketXY ? (ze(n, "apl_position", e.updateSocketXY), e.offset || (ze(n, "cur_attach_plugSideLenSE", e.updateSocketXY), ze(n, "cur_line_strokeWidth", e.updateSocketXY))) : ze(n, "apl_path", e.updatePath),
                      ze(n, "svgShow", e.updateShow),
                      pe && (ze(n, "new_edge4viewBox", e.adjustEdge), et(n, {}));
              },
              removeOption: function (e, t) {
                  var n = t.props,
                      a = {};
                  (a[t.optionName] = ""), ot(n, a);
              },
              remove: function (t) {
                  t.boundTargets.length &&
                      (console.error("LeaderLineAttachment was not unbound by remove"),
                      t.boundTargets.forEach(function (e) {
                          I.captionLabel.unbind(t, e);
                      }));
              },
          },
          pathLabel: {
              type: "label",
              argOptions: [{ optionName: "text", type: "string" }],
              stats: { color: {}, startOffset: {}, pathData: {} },
              init: function (s, t) {
                  return (
                      "string" == typeof t.text && (s.text = t.text.trim()),
                      !!s.text &&
                          ("string" == typeof t.color && (s.color = t.color.trim()),
                          (s.outlineColor = "string" == typeof t.outlineColor ? t.outlineColor.trim() : "#fff"),
                          ye(t.lineOffset) && (s.lineOffset = t.lineOffset),
                          I.captionLabel.textStyleProps.forEach(function (e) {
                              null != t[e] && (s[e] = t[e]);
                          }),
                          (s.updateColor = function (e) {
                              I.captionLabel.updateColor(s, e);
                          }),
                          (s.updatePath = function (e) {
                              var t,
                                  n = s.curStats,
                                  a = s.aplStats,
                                  i = e.curStats,
                                  o = e.pathList.animVal || e.pathList.baseVal;
                              o &&
                                  ((n.pathData = t = I.pathLabel.getOffsetPathData(o, i.line_strokeWidth / 2 + s.strokeWidth / 2 + s.height / 4, 1.25 * s.height)),
                                  Ge(t, a.pathData) && (s.elmPath.setPathData(t), (a.pathData = t), (s.bBox = s.elmPosition.getBBox()), s.updateStartOffset(e)));
                          }),
                          (s.updateStartOffset = function (e) {
                              var t,
                                  i,
                                  n,
                                  a,
                                  o = s.curStats,
                                  l = s.aplStats,
                                  r = e.curStats;
                              o.pathData &&
                                  ((2 === s.semIndex && !s.lineOffset) ||
                                      ((n = o.pathData.reduce(function (e, t) {
                                          var n,
                                              a = t.values;
                                          switch (t.type) {
                                              case "M":
                                                  i = { x: a[0], y: a[1] };
                                                  break;
                                              case "L":
                                                  (n = { x: a[0], y: a[1] }), i && (e += Ve(i, n)), (i = n);
                                                  break;
                                              case "C":
                                                  (n = { x: a[4], y: a[5] }), i && (e += We(i, { x: a[0], y: a[1] }, { x: a[2], y: a[3] }, n)), (i = n);
                                          }
                                          return e;
                                      }, 0)),
                                      (a = 0 === s.semIndex ? 0 : 1 === s.semIndex ? n : n / 2),
                                      2 !== s.semIndex &&
                                          ((t = Math.max(r.attach_plugBackLenSE[s.semIndex] || 0, r.line_strokeWidth / 2) + s.strokeWidth / 2 + s.height / 4), (a = (a += 0 === s.semIndex ? t : -t) < 0 ? 0 : n < a ? n : a)),
                                      s.lineOffset && (a = (a += s.lineOffset) < 0 ? 0 : n < a ? n : a),
                                      (o.startOffset = a),
                                      qe(s, l, "startOffset", a) && (s.elmOffset.startOffset.baseVal.value = a)));
                          }),
                          (s.updateShow = function (e) {
                              I.captionLabel.updateShow(s, e);
                          }),
                          pe &&
                              (s.adjustEdge = function (e, t) {
                                  s.bBox && I.captionLabel.adjustEdge(t, s.bBox, s.strokeWidth / 2);
                              }),
                          !0)
                  );
              },
              getOffsetPathData: function (e, x, n) {
                  var b,
                      a,
                      k = [];
                  function w(e, t) {
                      return Math.abs(e.x - t.x) < 3 && Math.abs(e.y - t.y) < 3;
                  }
                  return (
                      e.forEach(function (e) {
                          var t, n, a, i, o, l, r, s, u, h, p, c, d, f, y, m, S, g, _, v, E;
                          2 === e.length
                              ? ((g = e[0]),
                                (_ = e[1]),
                                (v = x),
                                (E = Math.atan2(g.y - _.y, _.x - g.x) + 0.5 * Math.PI),
                                (t = [
                                    { x: g.x + Math.cos(E) * v, y: g.y + Math.sin(E) * v * -1 },
                                    { x: _.x + Math.cos(E) * v, y: _.y + Math.sin(E) * v * -1 },
                                ]),
                                b
                                    ? ((a = b.points),
                                      0 <= (i = Math.atan2(a[1].y - a[0].y, a[0].x - a[1].x) - Math.atan2(e[0].y - e[1].y, e[1].x - e[0].x)) && i <= Math.PI
                                          ? (n = { type: "line", points: t, inside: !0 })
                                          : ((l = Ne(a[0], a[1], x)),
                                            (o = Ne(t[1], t[0], x)),
                                            (s = a[0]),
                                            (h = o),
                                            (p = t[1]),
                                            (c = (u = l).x - s.x),
                                            (d = u.y - s.y),
                                            (f = p.x - h.x),
                                            (y = p.y - h.y),
                                            (m = (-d * (s.x - h.x) + c * (s.y - h.y)) / (-f * d + c * y)),
                                            (S = (f * (s.y - h.y) - y * (s.x - h.x)) / (-f * d + c * y)),
                                            (n = (r = 0 <= m && m <= 1 && 0 <= S && S <= 1 ? { x: s.x + S * c, y: s.y + S * d } : null)
                                                ? { type: "line", points: [(a[1] = r), t[1]] }
                                                : ((a[1] = w(o, l) ? o : l), { type: "line", points: [o, t[1]] })),
                                            (b.len = Ve(a[0], a[1]))))
                                    : (n = { type: "line", points: t }),
                                (n.len = Ve(n.points[0], n.points[1])),
                                k.push((b = n)))
                              : (k.push({
                                    type: "cubic",
                                    points: (function (e, t, n, a, i, o) {
                                        for (
                                            var l, r, s = We(e, t, n, a) / o, u = 1 / (o < i ? (i / o) * s : s), h = [], p = 0;
                                            (r = (90 - (l = Te(e, t, n, a, p)).angle) * (Math.PI / 180)), h.push({ x: l.x + Math.cos(r) * i, y: l.y + Math.sin(r) * i * -1 }), !(1 <= p);

                                        )
                                            1 < (p += u) && (p = 1);
                                        return h;
                                    })(e[0], e[1], e[2], e[3], x, 16),
                                }),
                                (b = null));
                      }),
                      (b = null),
                      k.forEach(function (e) {
                          var t;
                          b =
                              "line" === e.type
                                  ? (e.inside &&
                                        (b.len > x ? (((t = b.points)[1] = Ne(t[0], t[1], -x)), (b.len = Ve(t[0], t[1]))) : ((b.points = null), (b.len = 0)),
                                        e.len > x + n ? (((t = e.points)[0] = Ne(t[1], t[0], -(x + n))), (e.len = Ve(t[0], t[1]))) : ((e.points = null), (e.len = 0))),
                                    e)
                                  : null;
                      }),
                      k.reduce(function (t, e) {
                          var n = e.points;
                          return (
                              n &&
                                  ((a && w(n[0], a)) || t.push({ type: "M", values: [n[0].x, n[0].y] }),
                                  "line" === e.type
                                      ? t.push({ type: "L", values: [n[1].x, n[1].y] })
                                      : (n.shift(),
                                        n.forEach(function (e) {
                                            t.push({ type: "L", values: [e.x, e.y] });
                                        })),
                                  (a = n[n.length - 1])),
                              t
                          );
                      }, [])
                  );
              },
              newText: function (e, t, n, a) {
                  var i,
                      o,
                      l,
                      r,
                      s,
                      u,
                      h,
                      p,
                      c = t.createElementNS(re, "defs"),
                      d = c.appendChild(t.createElementNS(re, "path"));
                  return (
                      (d.id = i = n + "-path"),
                      ((r = (l = t.createElementNS(re, "text")).appendChild(t.createElementNS(re, "textPath"))).href.baseVal = "#" + i),
                      r.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0),
                      (r.textContent = e),
                      "boolean" != typeof f && (f = "paintOrder" in l.style),
                      a && !f
                          ? ((l.id = o = n + "-text"),
                            c.appendChild(l),
                            ((h = (s = t.createElementNS(re, "g")).appendChild(t.createElementNS(re, "use"))).href.baseVal = "#" + o),
                            ((u = s.appendChild(t.createElementNS(re, "use"))).href.baseVal = "#" + o),
                            ((p = h.style).strokeLinejoin = "round"),
                            { elmPosition: l, elmPath: d, elmOffset: r, styleText: l.style, styleFill: u.style, styleStroke: p, styleShow: s.style, elmsAppend: [c, s] })
                          : ((p = l.style),
                            a && ((p.strokeLinejoin = "round"), (p.paintOrder = "stroke")),
                            { elmPosition: l, elmPath: d, elmOffset: r, styleText: p, styleFill: p, styleStroke: a ? p : null, styleShow: p, elmsAppend: [c, l] })
                  );
              },
              initSvg: function (t, n) {
                  var e,
                      a,
                      i = I.pathLabel.newText(t.text, n.baseWindow.document, A + "-pathLabel-" + t._id, t.outlineColor);
                  ["elmPosition", "elmPath", "elmOffset", "styleFill", "styleShow", "elmsAppend"].forEach(function (e) {
                      t[e] = i[e];
                  }),
                      (t.isShown = !1),
                      (t.styleShow.visibility = "hidden"),
                      I.captionLabel.textStyleProps.forEach(function (e) {
                          null != t[e] && (i.styleText[e] = t[e]);
                      }),
                      i.elmsAppend.forEach(function (e) {
                          n.svg.appendChild(e);
                      }),
                      i.elmPath.setPathData([
                          { type: "M", values: [0, 100] },
                          { type: "h", values: [100] },
                      ]),
                      (e = i.elmPosition.getBBox()),
                      (i.styleText.textAnchor = ["start", "end", "middle"][t.semIndex]),
                      2 !== t.semIndex || t.lineOffset || i.elmOffset.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 50),
                      (t.height = e.height),
                      t.outlineColor && ((a = 10 < (a = e.height / 9) ? 10 : a < 2 ? 2 : a), (i.styleStroke.strokeWidth = a + "px"), (i.styleStroke.stroke = t.outlineColor)),
                      (t.strokeWidth = a || 0),
                      Xe(t.aplStats, I.pathLabel.stats),
                      t.updateColor(n),
                      t.updatePath(n),
                      t.updateStartOffset(n),
                      pe && et(n, {}),
                      t.updateShow(n);
              },
              bind: function (e, t) {
                  var n = t.props;
                  return (
                      e.color || De(n, "cur_line_color", e.updateColor),
                      De(n, "cur_line_strokeWidth", e.updatePath),
                      De(n, "apl_path", e.updatePath),
                      (e.semIndex = "startLabel" === t.optionName ? 0 : "endLabel" === t.optionName ? 1 : 2),
                      (2 === e.semIndex && !e.lineOffset) || De(n, "cur_attach_plugBackLenSE", e.updateStartOffset),
                      De(n, "svgShow", e.updateShow),
                      pe && De(n, "new_edge4viewBox", e.adjustEdge),
                      I.pathLabel.initSvg(e, n),
                      !0
                  );
              },
              unbind: function (e, t) {
                  var n = t.props;
                  e.elmsAppend &&
                      (e.elmsAppend.forEach(function (e) {
                          n.svg.removeChild(e);
                      }),
                      (e.elmPosition = e.elmPath = e.elmOffset = e.styleFill = e.styleShow = e.elmsAppend = null)),
                      Xe(e.curStats, I.pathLabel.stats),
                      Xe(e.aplStats, I.pathLabel.stats),
                      e.color || ze(n, "cur_line_color", e.updateColor),
                      ze(n, "cur_line_strokeWidth", e.updatePath),
                      ze(n, "apl_path", e.updatePath),
                      (2 === e.semIndex && !e.lineOffset) || ze(n, "cur_attach_plugBackLenSE", e.updateStartOffset),
                      ze(n, "svgShow", e.updateShow),
                      pe && (ze(n, "new_edge4viewBox", e.adjustEdge), et(n, {}));
              },
              removeOption: function (e, t) {
                  var n = t.props,
                      a = {};
                  (a[t.optionName] = ""), ot(n, a);
              },
              remove: function (t) {
                  t.boundTargets.length &&
                      (console.error("LeaderLineAttachment was not unbound by remove"),
                      t.boundTargets.forEach(function (e) {
                          I.pathLabel.unbind(t, e);
                      }));
              },
          },
      }),
      Object.keys(I).forEach(function (e) {
          lt[e] = function () {
              return new C(I[e], Array.prototype.slice.call(arguments));
          };
      }),
      (lt.positionByWindowResize = !0),
      window.addEventListener(
          "resize",
          v.add(function () {
              lt.positionByWindowResize &&
                  Object.keys(ge).forEach(function (e) {
                      et(ge[e], { position: !0 });
                  });
          }),
          !1
      ),
      lt
  );
})();




/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/react-device-detect/dist/lib.js":
/*!******************************************************!*\
  !*** ./node_modules/react-device-detect/dist/lib.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);

var UAParser = __webpack_require__(/*! ua-parser-js/dist/ua-parser.min */ "./node_modules/ua-parser-js/dist/ua-parser.min.js");

var ClientUAInstance = new UAParser();
var browser = ClientUAInstance.getBrowser();
var cpu = ClientUAInstance.getCPU();
var device = ClientUAInstance.getDevice();
var engine = ClientUAInstance.getEngine();
var os = ClientUAInstance.getOS();
var ua = ClientUAInstance.getUA();
var setUa = function setUa(userAgentString) {
  return ClientUAInstance.setUA(userAgentString);
};
var parseUserAgent = function parseUserAgent(userAgent) {
  if (!userAgent) {
    console.error('No userAgent string was provided');
    return;
  }

  var UserAgentInstance = new UAParser(userAgent);
  return {
    UA: UserAgentInstance,
    browser: UserAgentInstance.getBrowser(),
    cpu: UserAgentInstance.getCPU(),
    device: UserAgentInstance.getDevice(),
    engine: UserAgentInstance.getEngine(),
    os: UserAgentInstance.getOS(),
    ua: UserAgentInstance.getUA(),
    setUserAgent: function setUserAgent(userAgentString) {
      return UserAgentInstance.setUA(userAgentString);
    }
  };
};

var UAHelper = /*#__PURE__*/Object.freeze({
  ClientUAInstance: ClientUAInstance,
  browser: browser,
  cpu: cpu,
  device: device,
  engine: engine,
  os: os,
  ua: ua,
  setUa: setUa,
  parseUserAgent: parseUserAgent
});

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var DeviceTypes = {
  Mobile: 'mobile',
  Tablet: 'tablet',
  SmartTv: 'smarttv',
  Console: 'console',
  Wearable: 'wearable',
  Embedded: 'embedded',
  Browser: undefined
};
var BrowserTypes = {
  Chrome: 'Chrome',
  Firefox: 'Firefox',
  Opera: 'Opera',
  Yandex: 'Yandex',
  Safari: 'Safari',
  InternetExplorer: 'Internet Explorer',
  Edge: 'Edge',
  Chromium: 'Chromium',
  Ie: 'IE',
  MobileSafari: 'Mobile Safari',
  EdgeChromium: 'Edge Chromium',
  MIUI: 'MIUI Browser',
  SamsungBrowser: 'Samsung Browser'
};
var OsTypes = {
  IOS: 'iOS',
  Android: 'Android',
  WindowsPhone: 'Windows Phone',
  Windows: 'Windows',
  MAC_OS: 'Mac OS'
};
var InitialDeviceTypes = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

var checkDeviceType = function checkDeviceType(type) {
  switch (type) {
    case DeviceTypes.Mobile:
      return {
        isMobile: true
      };

    case DeviceTypes.Tablet:
      return {
        isTablet: true
      };

    case DeviceTypes.SmartTv:
      return {
        isSmartTV: true
      };

    case DeviceTypes.Console:
      return {
        isConsole: true
      };

    case DeviceTypes.Wearable:
      return {
        isWearable: true
      };

    case DeviceTypes.Browser:
      return {
        isBrowser: true
      };

    case DeviceTypes.Embedded:
      return {
        isEmbedded: true
      };

    default:
      return InitialDeviceTypes;
  }
};
var setUserAgent = function setUserAgent(userAgent) {
  return setUa(userAgent);
};
var setDefaults = function setDefaults(p) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  return p ? p : d;
};
var getNavigatorInstance = function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
var isIOS13Check = function isIOS13Check(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

var browserPayload = function browserPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: setDefaults(browser.major),
    browserFullVersion: setDefaults(browser.version),
    browserName: setDefaults(browser.name),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    os: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    ua: setDefaults(ua)
  });
};
var smartTvPayload = function smartTvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var wearablePayload = function wearablePayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var embeddedPayload = function embeddedPayload(isEmbedded, device, engine, os, ua) {
  return {
    isEmbedded: isEmbedded,
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};

function deviceDetect(userAgent) {
  var _ref = userAgent ? parseUserAgent(userAgent) : UAHelper,
      device = _ref.device,
      browser = _ref.browser,
      engine = _ref.engine,
      os = _ref.os,
      ua = _ref.ua;

  var type = checkDeviceType(device.type);
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable,
      isEmbedded = type.isEmbedded;

  if (isBrowser) {
    return browserPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return smartTvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearablePayload(isWearable, engine, os, ua);
  }

  if (isEmbedded) {
    return embeddedPayload(isEmbedded, device, engine, os, ua);
  }
}

var isMobileType = function isMobileType(_ref) {
  var type = _ref.type;
  return type === DeviceTypes.Mobile;
};
var isTabletType = function isTabletType(_ref2) {
  var type = _ref2.type;
  return type === DeviceTypes.Tablet;
};
var isMobileAndTabletType = function isMobileAndTabletType(_ref3) {
  var type = _ref3.type;
  return type === DeviceTypes.Mobile || type === DeviceTypes.Tablet;
};
var isSmartTVType = function isSmartTVType(_ref4) {
  var type = _ref4.type;
  return type === DeviceTypes.SmartTv;
};
var isBrowserType = function isBrowserType(_ref5) {
  var type = _ref5.type;
  return type === DeviceTypes.Browser;
};
var isWearableType = function isWearableType(_ref6) {
  var type = _ref6.type;
  return type === DeviceTypes.Wearable;
};
var isConsoleType = function isConsoleType(_ref7) {
  var type = _ref7.type;
  return type === DeviceTypes.Console;
};
var isEmbeddedType = function isEmbeddedType(_ref8) {
  var type = _ref8.type;
  return type === DeviceTypes.Embedded;
};
var getMobileVendor = function getMobileVendor(_ref9) {
  var vendor = _ref9.vendor;
  return setDefaults(vendor);
};
var getMobileModel = function getMobileModel(_ref10) {
  var model = _ref10.model;
  return setDefaults(model);
};
var getDeviceType = function getDeviceType(_ref11) {
  var type = _ref11.type;
  return setDefaults(type, 'browser');
}; // os types

var isAndroidType = function isAndroidType(_ref12) {
  var name = _ref12.name;
  return name === OsTypes.Android;
};
var isWindowsType = function isWindowsType(_ref13) {
  var name = _ref13.name;
  return name === OsTypes.Windows;
};
var isMacOsType = function isMacOsType(_ref14) {
  var name = _ref14.name;
  return name === OsTypes.MAC_OS;
};
var isWinPhoneType = function isWinPhoneType(_ref15) {
  var name = _ref15.name;
  return name === OsTypes.WindowsPhone;
};
var isIOSType = function isIOSType(_ref16) {
  var name = _ref16.name;
  return name === OsTypes.IOS;
};
var getOsVersion = function getOsVersion(_ref17) {
  var version = _ref17.version;
  return setDefaults(version);
};
var getOsName = function getOsName(_ref18) {
  var name = _ref18.name;
  return setDefaults(name);
}; // browser types

var isChromeType = function isChromeType(_ref19) {
  var name = _ref19.name;
  return name === BrowserTypes.Chrome;
};
var isFirefoxType = function isFirefoxType(_ref20) {
  var name = _ref20.name;
  return name === BrowserTypes.Firefox;
};
var isChromiumType = function isChromiumType(_ref21) {
  var name = _ref21.name;
  return name === BrowserTypes.Chromium;
};
var isEdgeType = function isEdgeType(_ref22) {
  var name = _ref22.name;
  return name === BrowserTypes.Edge;
};
var isYandexType = function isYandexType(_ref23) {
  var name = _ref23.name;
  return name === BrowserTypes.Yandex;
};
var isSafariType = function isSafariType(_ref24) {
  var name = _ref24.name;
  return name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari;
};
var isMobileSafariType = function isMobileSafariType(_ref25) {
  var name = _ref25.name;
  return name === BrowserTypes.MobileSafari;
};
var isOperaType = function isOperaType(_ref26) {
  var name = _ref26.name;
  return name === BrowserTypes.Opera;
};
var isIEType = function isIEType(_ref27) {
  var name = _ref27.name;
  return name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie;
};
var isMIUIType = function isMIUIType(_ref28) {
  var name = _ref28.name;
  return name === BrowserTypes.MIUI;
};
var isSamsungBrowserType = function isSamsungBrowserType(_ref29) {
  var name = _ref29.name;
  return name === BrowserTypes.SamsungBrowser;
};
var getBrowserFullVersion = function getBrowserFullVersion(_ref30) {
  var version = _ref30.version;
  return setDefaults(version);
};
var getBrowserVersion = function getBrowserVersion(_ref31) {
  var major = _ref31.major;
  return setDefaults(major);
};
var getBrowserName = function getBrowserName(_ref32) {
  var name = _ref32.name;
  return setDefaults(name);
}; // engine types

var getEngineName = function getEngineName(_ref33) {
  var name = _ref33.name;
  return setDefaults(name);
};
var getEngineVersion = function getEngineVersion(_ref34) {
  var version = _ref34.version;
  return setDefaults(version);
};
var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? /electron/.test(ua) : false;
};
var isEdgeChromiumType = function isEdgeChromiumType(ua) {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};
var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};
var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};
var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};
var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};
var getUseragent = function getUseragent(userAg) {
  return setDefaults(userAg);
};

function buildSelectorsObject(options) {
  var _ref = options ? options : UAHelper,
      device = _ref.device,
      browser = _ref.browser,
      os = _ref.os,
      engine = _ref.engine,
      ua = _ref.ua;

  return {
    isSmartTV: isSmartTVType(device),
    isConsole: isConsoleType(device),
    isWearable: isWearableType(device),
    isEmbedded: isEmbeddedType(device),
    isMobileSafari: isMobileSafariType(browser) || getIPad13(),
    isChromium: isChromiumType(browser),
    isMobile: isMobileAndTabletType(device) || getIPad13(),
    isMobileOnly: isMobileType(device),
    isTablet: isTabletType(device) || getIPad13(),
    isBrowser: isBrowserType(device),
    isDesktop: isBrowserType(device),
    isAndroid: isAndroidType(os),
    isWinPhone: isWinPhoneType(os),
    isIOS: isIOSType(os) || getIPad13(),
    isChrome: isChromeType(browser),
    isFirefox: isFirefoxType(browser),
    isSafari: isSafariType(browser),
    isOpera: isOperaType(browser),
    isIE: isIEType(browser),
    osVersion: getOsVersion(os),
    osName: getOsName(os),
    fullBrowserVersion: getBrowserFullVersion(browser),
    browserVersion: getBrowserVersion(browser),
    browserName: getBrowserName(browser),
    mobileVendor: getMobileVendor(device),
    mobileModel: getMobileModel(device),
    engineName: getEngineName(engine),
    engineVersion: getEngineVersion(engine),
    getUA: getUseragent(ua),
    isEdge: isEdgeType(browser) || isEdgeChromiumType(ua),
    isYandex: isYandexType(browser),
    deviceType: getDeviceType(device),
    isIOS13: getIOS13(),
    isIPad13: getIPad13(),
    isIPhone13: getIphone13(),
    isIPod13: getIPod13(),
    isElectron: isElectronType(),
    isEdgeChromium: isEdgeChromiumType(ua),
    isLegacyEdge: isEdgeType(browser) && !isEdgeChromiumType(ua),
    isWindows: isWindowsType(os),
    isMacOs: isMacOsType(os),
    isMIUI: isMIUIType(browser),
    isSamsungBrowser: isSamsungBrowserType(browser)
  };
}

var isSmartTV = isSmartTVType(device);
var isConsole = isConsoleType(device);
var isWearable = isWearableType(device);
var isEmbedded = isEmbeddedType(device);
var isMobileSafari = isMobileSafariType(browser) || getIPad13();
var isChromium = isChromiumType(browser);
var isMobile = isMobileAndTabletType(device) || getIPad13();
var isMobileOnly = isMobileType(device);
var isTablet = isTabletType(device) || getIPad13();
var isBrowser = isBrowserType(device);
var isDesktop = isBrowserType(device);
var isAndroid = isAndroidType(os);
var isWinPhone = isWinPhoneType(os);
var isIOS = isIOSType(os) || getIPad13();
var isChrome = isChromeType(browser);
var isFirefox = isFirefoxType(browser);
var isSafari = isSafariType(browser);
var isOpera = isOperaType(browser);
var isIE = isIEType(browser);
var osVersion = getOsVersion(os);
var osName = getOsName(os);
var fullBrowserVersion = getBrowserFullVersion(browser);
var browserVersion = getBrowserVersion(browser);
var browserName = getBrowserName(browser);
var mobileVendor = getMobileVendor(device);
var mobileModel = getMobileModel(device);
var engineName = getEngineName(engine);
var engineVersion = getEngineVersion(engine);
var getUA = getUseragent(ua);
var isEdge = isEdgeType(browser) || isEdgeChromiumType(ua);
var isYandex = isYandexType(browser);
var deviceType = getDeviceType(device);
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType(ua);
var isLegacyEdge = isEdgeType(browser) && !isEdgeChromiumType(ua);
var isWindows = isWindowsType(os);
var isMacOs = isMacOsType(os);
var isMIUI = isMIUIType(browser);
var isSamsungBrowser = isSamsungBrowserType(browser);
var getSelectorsByUserAgent = function getSelectorsByUserAgent(userAgent) {
  if (!userAgent || typeof userAgent !== 'string') {
    console.error('No valid user agent string was provided');
    return;
  }

  var _UAHelper$parseUserAg = parseUserAgent(userAgent),
      device = _UAHelper$parseUserAg.device,
      browser = _UAHelper$parseUserAg.browser,
      os = _UAHelper$parseUserAg.os,
      engine = _UAHelper$parseUserAg.engine,
      ua = _UAHelper$parseUserAg.ua;

  return buildSelectorsObject({
    device: device,
    browser: browser,
    os: os,
    engine: engine,
    ua: ua
  });
};

var AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["renderWithFragment", "children"]);

  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["renderWithFragment", "children"]);

  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["renderWithFragment", "children"]);

  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["renderWithFragment", "children"]);

  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["renderWithFragment", "children"]);

  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["renderWithFragment", "children"]);

  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      props = _objectWithoutProperties(_ref7, ["renderWithFragment", "children"]);

  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children,
      viewClassName = _ref8.viewClassName,
      style = _ref8.style,
      props = _objectWithoutProperties(_ref8, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      props = _objectWithoutProperties(_ref9, ["renderWithFragment", "children"]);

  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      props = _objectWithoutProperties(_ref10, ["renderWithFragment", "children"]);

  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      props = _objectWithoutProperties(_ref11, ["renderWithFragment", "children"]);

  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children,
      viewClassName = _ref12.viewClassName,
      style = _ref12.style,
      condition = _ref12.condition,
      props = _objectWithoutProperties(_ref12, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);

  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};

function withOrientationChange(WrappedComponent) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
      _this.isEventListenerAdded = false;
      _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
      _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
      _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
      _this.state = {
        isLandscape: false,
        isPortrait: false
      };
      return _this;
    }

    _createClass(_class, [{
      key: "handleOrientationChange",
      value: function handleOrientationChange() {
        if (!this.isEventListenerAdded) {
          this.isEventListenerAdded = true;
        }

        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: orientation === 0,
          isLandscape: orientation === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function onOrientationChange() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function onPageLoad() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
          if (!this.isEventListenerAdded) {
            this.handleOrientationChange();
            window.addEventListener("load", this.onPageLoad, false);
          } else {
            window.removeEventListener("load", this.onPageLoad, false);
          }

          window.addEventListener("resize", this.onOrientationChange, false);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.onOrientationChange, false);
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement(WrappedComponent, _extends({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]);

    return _class;
  }(React__default.Component);
}

function useMobileOrientation() {
  var _useState = React.useState(function () {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? 'portrait' : 'landscape'
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleOrientationChange = React.useCallback(function () {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    var next = {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? 'portrait' : 'landscape'
    };
    state.orientation !== next.orientation && setState(next);
  }, [state.orientation]);
  React.useEffect(function () {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
      handleOrientationChange();
      window.addEventListener("load", handleOrientationChange, false);
      window.addEventListener("resize", handleOrientationChange, false);
    }

    return function () {
      window.removeEventListener("resize", handleOrientationChange, false);
      window.removeEventListener("load", handleOrientationChange, false);
    };
  }, [handleOrientationChange]);
  return state;
}

function useDeviceData(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  return parseUserAgent(hookUserAgent);
}

function useDeviceSelectors(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  var deviceData = useDeviceData(hookUserAgent);
  var selectors = buildSelectorsObject(deviceData);
  return [selectors, deviceData];
}

exports.AndroidView = AndroidView;
exports.BrowserTypes = BrowserTypes;
exports.BrowserView = BrowserView;
exports.ConsoleView = ConsoleView;
exports.CustomView = CustomView;
exports.IEView = IEView;
exports.IOSView = IOSView;
exports.MobileOnlyView = MobileOnlyView;
exports.MobileView = MobileView;
exports.OsTypes = OsTypes;
exports.SmartTVView = SmartTVView;
exports.TabletView = TabletView;
exports.WearableView = WearableView;
exports.WinPhoneView = WinPhoneView;
exports.browserName = browserName;
exports.browserVersion = browserVersion;
exports.deviceDetect = deviceDetect;
exports.deviceType = deviceType;
exports.engineName = engineName;
exports.engineVersion = engineVersion;
exports.fullBrowserVersion = fullBrowserVersion;
exports.getSelectorsByUserAgent = getSelectorsByUserAgent;
exports.getUA = getUA;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isChromium = isChromium;
exports.isConsole = isConsole;
exports.isDesktop = isDesktop;
exports.isEdge = isEdge;
exports.isEdgeChromium = isEdgeChromium;
exports.isElectron = isElectron;
exports.isEmbedded = isEmbedded;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIOS = isIOS;
exports.isIOS13 = isIOS13;
exports.isIPad13 = isIPad13;
exports.isIPhone13 = isIPhone13;
exports.isIPod13 = isIPod13;
exports.isLegacyEdge = isLegacyEdge;
exports.isMIUI = isMIUI;
exports.isMacOs = isMacOs;
exports.isMobile = isMobile;
exports.isMobileOnly = isMobileOnly;
exports.isMobileSafari = isMobileSafari;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
exports.isSamsungBrowser = isSamsungBrowser;
exports.isSmartTV = isSmartTV;
exports.isTablet = isTablet;
exports.isWearable = isWearable;
exports.isWinPhone = isWinPhone;
exports.isWindows = isWindows;
exports.isYandex = isYandex;
exports.mobileModel = mobileModel;
exports.mobileVendor = mobileVendor;
exports.osName = osName;
exports.osVersion = osVersion;
exports.parseUserAgent = parseUserAgent;
exports.setUserAgent = setUserAgent;
exports.useDeviceData = useDeviceData;
exports.useDeviceSelectors = useDeviceSelectors;
exports.useMobileOrientation = useMobileOrientation;
exports.withOrientationChange = withOrientationChange;


/***/ }),

/***/ "./node_modules/ua-parser-js/dist/ua-parser.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/ua-parser-js/dist/ua-parser.min.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* UAParser.js v0.7.31
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */
(function(window,undefined){"use strict";var LIBVERSION="0.7.31",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=255;var AMAZON="Amazon",APPLE="Apple",ASUS="ASUS",BLACKBERRY="BlackBerry",BROWSER="Browser",CHROME="Chrome",EDGE="Edge",FIREFOX="Firefox",GOOGLE="Google",HUAWEI="Huawei",LG="LG",MICROSOFT="Microsoft",MOTOROLA="Motorola",OPERA="Opera",SAMSUNG="Samsung",SONY="Sony",XIAOMI="Xiaomi",ZEBRA="Zebra",FACEBOOK="Facebook";var extend=function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},enumerize=function(arr){var enums={};for(var i=0;i<arr.length;i++){enums[arr[i].toUpperCase()]=arr[i]}return enums},has=function(str1,str2){return typeof str1===STR_TYPE?lowerize(str2).indexOf(lowerize(str1))!==-1:false},lowerize=function(str){return str.toLowerCase()},majorize=function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,EMPTY).split(".")[0]:undefined},trim=function(str,len){if(typeof str===STR_TYPE){str=str.replace(/^\s\s*/,EMPTY).replace(/\s\s*$/,EMPTY);return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var rgxMapper=function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length===2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length===3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length===4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},strMapper=function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(has(map[i],str)){return i===UNKNOWN?undefined:i}}return str};var oldSafariMap={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},windowsVersionMap={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/ ]+([\w\.]+)/i],[VERSION,[NAME,OPERA+" Mini"]],[/\bopr\/([\w\.]+)/i],[VERSION,[NAME,OPERA]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"UC"+BROWSER]],[/\bqbcore\/([\w\.]+)/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[VERSION,[NAME,"IE"]],[/yabrowser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure "+BROWSER],VERSION],[/\bfocus\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" Focus"]],[/\bopt\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI "+BROWSER]],[/fxios\/([-\w\.]+)/i],[VERSION,[NAME,FIREFOX]],[/\bqihu|(qi?ho?o?|360)browser/i],[[NAME,"360 "+BROWSER]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 "+BROWSER],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[NAME,VERSION],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[NAME],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[NAME,FACEBOOK],VERSION],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+) .*safari\//i],[VERSION,[NAME,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[VERSION,[NAME,CHROME+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[NAME,CHROME+" WebView"],VERSION],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[VERSION,[NAME,"Android "+BROWSER]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,strMapper,oldSafariMap]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[NAME,"Netscape"],VERSION],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,FIREFOX+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows (ce|mobile); ppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[ARCHITECTURE,/ower/,EMPTY,lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,MOBILE]],[/\((ip(?:hone|od)[\w ]*);/i],[MODEL,[VENDOR,APPLE],[TYPE,MOBILE]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,APPLE],[TYPE,TABLET]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,TABLET]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,MOBILE]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,MOBILE]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,TABLET]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[MODEL,[VENDOR,MOTOROLA],[TYPE,MOBILE]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[MODEL,[VENDOR,MOTOROLA],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,LG],[TYPE,TABLET]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[MODEL,[VENDOR,LG],[TYPE,MOBILE]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/(pixel c)\b/i],[MODEL,[VENDOR,GOOGLE],[TYPE,TABLET]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[MODEL,[VENDOR,GOOGLE],[TYPE,MOBILE]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,SONY],[TYPE,MOBILE]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,SONY],[TYPE,TABLET]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[MODEL,[VENDOR,AMAZON],[TYPE,TABLET]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[MODEL,/(.+)/g,"Fire Phone $1"],[VENDOR,AMAZON],[TYPE,MOBILE]],[/(playbook);[-\w\),; ]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[MODEL,[VENDOR,BLACKBERRY],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[MODEL,[VENDOR,ASUS],[TYPE,TABLET]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[MODEL,[VENDOR,ASUS],[TYPE,MOBILE]],[/(nexus 9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(surface duo)/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,TABLET]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/(u304aa)/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/\bsie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/\b(rct\w+) b/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/\b(venue[\d ]{2,7}) b/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/\b(q(?:mv|ta)\w+) b/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/\b(tm\d{3}\w+) b/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/\b(k88) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/\b(nx\d{3}j) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/\b(gen\d{3}) b.+49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/\b(zur\d{3}) b/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/\b((zeki)?tb.*\b) b/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/\b(ns-?\w{0,9}) b/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/\b((nxa|next)-?\w{0,9}) b/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/\b(lvtel\-)?(v1[12]) b/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/\b(ph-1) /i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/\b(trio[-\w\. ]+) b/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/\btu_(1491) b/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w ]+) b/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint) (\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,MICROSOFT],[TYPE,MOBILE]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,TABLET]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,MOBILE]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+; (shield) bui/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation [345portablevi]+)/i],[MODEL,[VENDOR,SONY],[TYPE,CONSOLE]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,CONSOLE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,SAMSUNG],[TYPE,SMARTTV]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[VENDOR,LG],[TYPE,SMARTTV]],[/(apple) ?tv/i],[VENDOR,[MODEL,APPLE+" TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,CHROME+"cast"],[VENDOR,GOOGLE],[TYPE,SMARTTV]],[/droid.+aft(\w)( bui|\))/i],[MODEL,[VENDOR,AMAZON],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[VENDOR,trim],[MODEL,trim],[TYPE,SMARTTV]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[TYPE,SMARTTV]],[/((pebble))app/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/droid.+; (glass) \d/i],[MODEL,[VENDOR,GOOGLE],[TYPE,WEARABLE]],[/droid.+; (wt63?0{2,3})\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,WEARABLE]],[/(quest( 2)?)/i],[MODEL,[VENDOR,FACEBOOK],[TYPE,WEARABLE]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[TYPE,TABLET]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[TYPE,MOBILE]],[/(android[-\w\. ]{0,9});.+buil/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[VERSION,[NAME,EDGE+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft (windows) (vista|xp)/i],[NAME,VERSION],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[NAME,[VERSION,strMapper,windowsVersionMap]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,strMapper,windowsVersionMap]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[VERSION,NAME],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,BLACKBERRY]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,CHROME+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[NAME,VERSION],[/(sunos) ?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua===OBJ_TYPE){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _ua=ua||(typeof window!==UNDEF_TYPE&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var _rgxmap=extensions?extend(regexes,extensions):regexes;this.getBrowser=function(){var _browser={};_browser[NAME]=undefined;_browser[VERSION]=undefined;rgxMapper.call(_browser,_ua,_rgxmap.browser);_browser.major=majorize(_browser.version);return _browser};this.getCPU=function(){var _cpu={};_cpu[ARCHITECTURE]=undefined;rgxMapper.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={};_device[VENDOR]=undefined;_device[MODEL]=undefined;_device[TYPE]=undefined;rgxMapper.call(_device,_ua,_rgxmap.device);return _device};this.getEngine=function(){var _engine={};_engine[NAME]=undefined;_engine[VERSION]=undefined;rgxMapper.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={};_os[NAME]=undefined;_os[VERSION]=undefined;rgxMapper.call(_os,_ua,_rgxmap.os);return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER=enumerize([NAME,VERSION,MAJOR]);UAParser.CPU=enumerize([ARCHITECTURE]);UAParser.DEVICE=enumerize([MODEL,VENDOR,TYPE,CONSOLE,MOBILE,SMARTTV,TABLET,WEARABLE,EMBEDDED]);UAParser.ENGINE=UAParser.OS=enumerize([NAME,VERSION]);if(typeof exports!==UNDEF_TYPE){if("object"!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__webpack_require__.amdO){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(typeof window!==UNDEF_TYPE){window.UAParser=UAParser}}var $=typeof window!==UNDEF_TYPE&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(ua){parser.setUA(ua);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),

/***/ "./src/images/E_Icon.svg":
/*!*******************************!*\
  !*** ./src/images/E_Icon.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDI2LjY2NyA0MjYuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNjY3IDQyNi42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzg0LDQyLjY2N0g0Mi42NjdjLTIzLjU3MywwLTQyLjQ1MywxOS4wOTMtNDIuNDUzLDQyLjY2N0wwLDM0MS4zMzNDMCwzNjQuOTA3LDE5LjA5MywzODQsNDIuNjY3LDM4NEgzODQNCgkJCWMyMy41NzMsMCw0Mi42NjctMTkuMDkzLDQyLjY2Ny00Mi42Njd2LTI1NkM0MjYuNjY3LDYxLjc2LDQwNy41NzMsNDIuNjY3LDM4NCw0Mi42Njd6IE0zODQsMzQxLjMzM0g0Mi42NjdWMTI4bDE3MC42NjcsMTA2LjY2Nw0KCQkJTDM4NCwxMjhWMzQxLjMzM3ogTTIxMy4zMzMsMTkyTDQyLjY2Nyw4NS4zMzNIMzg0TDIxMy4zMzMsMTkyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");

/***/ }),

/***/ "./src/images/I_Icon.svg":
/*!*******************************!*\
  !*** ./src/images/I_Icon.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMHB4IiBoZWlnaHQ9IjUxMHB4IiB2aWV3Qm94PSIwIDAgNTEwIDUxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEwIDUxMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9InBvc3QtaW5zdGFncmFtIj4NCgkJPHBhdGggZD0iTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxVjUxQzUxMCwyMi45NSw0ODcuMDUsMCw0NTksMHoNCgkJCSBNMjU1LDE1M2M1Ni4xLDAsMTAyLDQ1LjksMTAyLDEwMmMwLDU2LjEtNDUuOSwxMDItMTAyLDEwMmMtNTYuMSwwLTEwMi00NS45LTEwMi0xMDJDMTUzLDE5OC45LDE5OC45LDE1MywyNTUsMTUzeiBNNjMuNzUsNDU5DQoJCQlDNTYuMSw0NTksNTEsNDUzLjksNTEsNDQ2LjI1VjIyOS41aDUzLjU1QzEwMiwyMzcuMTUsMTAyLDI0Ny4zNSwxMDIsMjU1YzAsODQuMTUsNjguODUsMTUzLDE1MywxNTNjODQuMTUsMCwxNTMtNjguODUsMTUzLTE1Mw0KCQkJYzAtNy42NSwwLTE3Ljg1LTIuNTUtMjUuNUg0NTl2MjE2Ljc1YzAsNy42NS01LjEsMTIuNzUtMTIuNzUsMTIuNzVINjMuNzV6IE00NTksMTE0Ljc1YzAsNy42NS01LjEsMTIuNzUtMTIuNzUsMTIuNzVoLTUxDQoJCQljLTcuNjUsMC0xMi43NS01LjEtMTIuNzUtMTIuNzV2LTUxYzAtNy42NSw1LjEtMTIuNzUsMTIuNzUtMTIuNzVoNTFDNDUzLjksNTEsNDU5LDU2LjEsNDU5LDYzLjc1VjExNC43NXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "./src/images/T_Icon.svg":
/*!*******************************!*\
  !*** ./src/images/T_Icon.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSI2MHB4IiBoZWlnaHQ9IjYwcHgiPiAgICA8cGF0aCBkPSJNMjgsNi45MzdjLTAuOTU3LDAuNDI1LTEuOTg1LDAuNzExLTMuMDY0LDAuODRjMS4xMDItMC42NiwxLjk0Ny0xLjcwNSwyLjM0NS0yLjk1MWMtMS4wMywwLjYxMS0yLjE3MiwxLjA1NS0zLjM4OCwxLjI5NSBjLTAuOTczLTEuMDM3LTIuMzU5LTEuNjg1LTMuODkzLTEuNjg1Yy0yLjk0NiwwLTUuMzM0LDIuMzg5LTUuMzM0LDUuMzM0YzAsMC40MTgsMC4wNDgsMC44MjYsMC4xMzgsMS4yMTUgYy00LjQzMy0wLjIyMi04LjM2My0yLjM0Ni0xMC45OTUtNS41NzRDMy4zNTEsNi4xOTksMy4wODgsNy4xMTUsMy4wODgsOC4wOTRjMCwxLjg1LDAuOTQxLDMuNDgzLDIuMzcyLDQuNDM5IGMtMC44NzQtMC4wMjgtMS42OTctMC4yNjgtMi40MTYtMC42NjdjMCwwLjAyMywwLDAuMDQ0LDAsMC4wNjdjMCwyLjU4NSwxLjgzOCw0Ljc0MSw0LjI3OSw1LjIzIGMtMC40NDcsMC4xMjItMC45MTksMC4xODctMS40MDYsMC4xODdjLTAuMzQzLDAtMC42NzgtMC4wMzQtMS4wMDMtMC4wOTVjMC42NzksMi4xMTksMi42NDksMy42NjIsNC45ODMsMy43MDUgYy0xLjgyNSwxLjQzMS00LjEyNSwyLjI4NC02LjYyNSwyLjI4NGMtMC40MywwLTAuODU1LTAuMDI1LTEuMjczLTAuMDc1YzIuMzYxLDEuNTEzLDUuMTY0LDIuMzk2LDguMTc3LDIuMzk2IGM5LjgxMiwwLDE1LjE3Ni04LjEyOCwxNS4xNzYtMTUuMTc3YzAtMC4yMzEtMC4wMDUtMC40NjEtMC4wMTUtMC42OUMyNi4zOCw4Ljk0NSwyNy4yODUsOC4wMDYsMjgsNi45Mzd6Ii8+PC9zdmc+");

/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ }),

/***/ "./public/page-data/sq/d/2265898178.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2265898178.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allWpPage":{"edges":[{"node":{"title":"Contact","menuOrder":3}},{"node":{"title":"About","menuOrder":2}},{"node":{"title":"Support","menuOrder":4}},{"node":{"title":"Home","menuOrder":1}}]},"allWpMediaItem":{"edges":[{"node":{"id":"cG9zdDo5OQ==","mediaType":"image","sourceUrl":"http://pre-corb.com/wp-content/uploads/2021/11/Delaney_Hines_Headshot.jpg","title":"Delaney_Hines_Headshot","link":"http://pre-corb.com/delaneyhynes/delaney_hines_headshot/","mediaItemUrl":"http://pre-corb.com/wp-content/uploads/2021/11/Delaney_Hines_Headshot.jpg"}},{"node":{"id":"cG9zdDoxMDE=","mediaType":"image","sourceUrl":"http://pre-corb.com/wp-content/uploads/2021/11/Justin_Smith_Headshot.jpg","title":"Justin_Smith_Headshot","link":"http://pre-corb.com/delaneyhynes/justin_smith_headshot/","mediaItemUrl":"http://pre-corb.com/wp-content/uploads/2021/11/Justin_Smith_Headshot.jpg"}},{"node":{"id":"cG9zdDo0OQ==","mediaType":"image","sourceUrl":"http://pre-corb.com/wp-content/uploads/2021/11/210328_Heal_Icon-e1636920415834.png","title":"Logo","link":"http://pre-corb.com/210328_heal_icon/","mediaItemUrl":"http://pre-corb.com/wp-content/uploads/2021/11/210328_Heal_Icon-e1636920415834.png"}},{"node":{"id":"cG9zdDo2Mg==","mediaType":"file","sourceUrl":null,"title":"CORB Home Video","link":"http://pre-corb.com/2021-11-08-corb_video/","mediaItemUrl":"http://pre-corb.com/wp-content/uploads/2021/11/2021-11-08-CORB_Video.mp4"}},{"node":{"id":"cG9zdDoxMQ==","mediaType":"image","sourceUrl":"http://pre-corb.com/wp-content/uploads/2018/08/wordpress.jpg","title":"wordpress","link":"http://pre-corb.com/wordpress-resources-at-siteground/wordpress/","mediaItemUrl":"http://pre-corb.com/wp-content/uploads/2018/08/wordpress.jpg"}},{"node":{"id":"cG9zdDoyNQ==","mediaType":"image","sourceUrl":"http://pre-corb.com/wp-content/uploads/2021/11/2021-11-13-CORB_Context-e1636921342755.png","title":"2021-11-13 CORBcontext","link":"http://pre-corb.com/2021-11-13-corb_context/","mediaItemUrl":"http://pre-corb.com/wp-content/uploads/2021/11/2021-11-13-CORB_Context-e1636921342755.png"}}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map