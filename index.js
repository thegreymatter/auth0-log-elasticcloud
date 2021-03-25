module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 163);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("auth0-extension-tools@1.3.1");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(0).config();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(35);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(178);
var defined = __webpack_require__(25);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(19);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const server = __webpack_require__(153);
const urlHelpers = __webpack_require__(40);
const middlewares = __webpack_require__(146);
const routes = __webpack_require__(152);

/*
 * Bootstrap function to run initialize an Express server.
 */
module.exports.createServer = server.createServer;

/*
 * Helpers to figure out the full url and the base path based on the request
 */
module.exports.urlHelpers = urlHelpers;

/*
 * Useful middlewares
 */
module.exports.middlewares = middlewares;

/*
 * Route bundles.
 */
module.exports.routes = routes;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winston = __webpack_require__(223);

winston.emitErrs = true;

var logger = new winston.Logger({
  transports: [new winston.transports.Console({
    timestamp: true,
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  })],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: function write(message) {
    logger.info(message.replace(/\n$/, ''));
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("debug@2.2.0");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express@4.17.1");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/lib/Connection.js Unexpected token (245:6)\nYou may need an appropriate loader to handle this file type.\n|     const {\n|       authorization,\n|       ...headers\n|     } = this.headers\n| ");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



class ElasticsearchClientError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ElasticsearchClientError'
  }
}

class TimeoutError extends ElasticsearchClientError {
  constructor (message, meta) {
    super(message)
    Error.captureStackTrace(this, TimeoutError)
    this.name = 'TimeoutError'
    this.message = message || 'Timeout Error'
    this.meta = meta
  }
}

class ConnectionError extends ElasticsearchClientError {
  constructor (message, meta) {
    super(message)
    Error.captureStackTrace(this, ConnectionError)
    this.name = 'ConnectionError'
    this.message = message || 'Connection Error'
    this.meta = meta
  }
}

class NoLivingConnectionsError extends ElasticsearchClientError {
  constructor (message, meta) {
    super(message)
    Error.captureStackTrace(this, NoLivingConnectionsError)
    this.name = 'NoLivingConnectionsError'
    this.message = message || 'Given the configuration, the ConnectionPool was not able to find a usable Connection for this request.'
    this.meta = meta
  }
}

class SerializationError extends ElasticsearchClientError {
  constructor (message, data) {
    super(message, data)
    Error.captureStackTrace(this, SerializationError)
    this.name = 'SerializationError'
    this.message = message || 'Serialization Error'
    this.data = data
  }
}

class DeserializationError extends ElasticsearchClientError {
  constructor (message, data) {
    super(message, data)
    Error.captureStackTrace(this, DeserializationError)
    this.name = 'DeserializationError'
    this.message = message || 'Deserialization Error'
    this.data = data
  }
}

class ConfigurationError extends ElasticsearchClientError {
  constructor (message) {
    super(message)
    Error.captureStackTrace(this, ConfigurationError)
    this.name = 'ConfigurationError'
    this.message = message || 'Configuration Error'
  }
}

class ResponseError extends ElasticsearchClientError {
  constructor (meta) {
    super('Response Error')
    Error.captureStackTrace(this, ResponseError)
    this.name = 'ResponseError'
    this.message = (meta.body && meta.body.error && meta.body.error.type) || 'Response Error'
    this.meta = meta
  }

  get body () {
    return this.meta.body
  }

  get statusCode () {
    if (this.meta.body && typeof this.meta.body.status === 'number') {
      return this.meta.body.status
    }
    return this.meta.statusCode
  }

  get headers () {
    return this.meta.headers
  }
}

class RequestAbortedError extends ElasticsearchClientError {
  constructor (message, meta) {
    super(message)
    Error.captureStackTrace(this, RequestAbortedError)
    this.name = 'RequestAbortedError'
    this.message = message || 'Request aborted'
    this.meta = meta
  }
}

module.exports = {
  ElasticsearchClientError,
  TimeoutError,
  ConnectionError,
  NoLivingConnectionsError,
  SerializationError,
  DeserializationError,
  ConfigurationError,
  ResponseError,
  RequestAbortedError
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const { URL } = __webpack_require__(20)
const debug = __webpack_require__(14)('elasticsearch')
const Connection = __webpack_require__(21)
const noop = () => {}

class BaseConnectionPool {
  constructor (opts) {
    // list of nodes and weights
    this.connections = []
    // how many nodes we have in our scheduler
    this.size = this.connections.length
    this.Connection = opts.Connection
    this.emit = opts.emit || noop
    this.auth = opts.auth || null
    this._ssl = opts.ssl
    this._agent = opts.agent
    this._proxy = opts.proxy || null
  }

  getConnection () {
    throw new Error('getConnection must be implemented')
  }

  markAlive () {
    return this
  }

  markDead () {
    return this
  }

  /**
   * Creates a new connection instance.
   */
  createConnection (opts) {
    if (typeof opts === 'string') {
      opts = this.urlToHost(opts)
    }

    if (this.auth !== null) {
      opts.auth = this.auth
    } else if (opts.url.username !== '' && opts.url.password !== '') {
      opts.auth = {
        username: decodeURIComponent(opts.url.username),
        password: decodeURIComponent(opts.url.password)
      }
    }

    if (opts.ssl == null) opts.ssl = this._ssl
    /* istanbul ignore else */
    if (opts.agent == null) opts.agent = this._agent
    /* istanbul ignore else */
    if (opts.proxy == null) opts.proxy = this._proxy

    const connection = new this.Connection(opts)

    for (const conn of this.connections) {
      if (conn.id === connection.id) {
        throw new Error(`Connection with id '${connection.id}' is already present`)
      }
    }

    return connection
  }

  /**
   * Adds a new connection to the pool.
   *
   * @param {object|string} host
   * @returns {ConnectionPool}
   */
  addConnection (opts) {
    if (Array.isArray(opts)) {
      return opts.forEach(o => this.addConnection(o))
    }

    if (typeof opts === 'string') {
      opts = this.urlToHost(opts)
    }

    const connectionById = this.connections.find(c => c.id === opts.id)
    const connectionByUrl = this.connections.find(c => c.id === opts.url.href)

    if (connectionById || connectionByUrl) {
      throw new Error(`Connection with id '${opts.id || opts.url.href}' is already present`)
    }

    this.update([...this.connections, opts])
    return this.connections[this.size - 1]
  }

  /**
   * Removes a new connection to the pool.
   *
   * @param {object} connection
   * @returns {ConnectionPool}
   */
  removeConnection (connection) {
    debug('Removing connection', connection)
    return this.update(this.connections.filter(c => c.id !== connection.id))
  }

  /**
   * Empties the connection pool.
   *
   * @returns {ConnectionPool}
   */
  empty (callback) {
    debug('Emptying the connection pool')
    let openConnections = this.size
    this.connections.forEach(connection => {
      connection.close(() => {
        if (--openConnections === 0) {
          this.connections = []
          this.size = this.connections.length
          callback()
        }
      })
    })
  }

  /**
   * Update the ConnectionPool with new connections.
   *
   * @param {array} array of connections
   * @returns {ConnectionPool}
   */
  update (nodes) {
    debug('Updating the connection pool')
    const newConnections = []
    const oldConnections = []

    for (const node of nodes) {
      // if we already have a given connection in the pool
      // we mark it as alive and we do not close the connection
      // to avoid socket issues
      const connectionById = this.connections.find(c => c.id === node.id)
      const connectionByUrl = this.connections.find(c => c.id === node.url.href)
      if (connectionById) {
        debug(`The connection with id '${node.id}' is already present`)
        this.markAlive(connectionById)
        newConnections.push(connectionById)
      // in case the user has passed a single url (or an array of urls),
      // the connection id will be the full href; to avoid closing valid connections
      // because are not present in the pool, we check also the node url,
      // and if is already present we update its id with the ES provided one.
      } else if (connectionByUrl) {
        connectionByUrl.id = node.id
        this.markAlive(connectionByUrl)
        newConnections.push(connectionByUrl)
      } else {
        newConnections.push(this.createConnection(node))
      }
    }

    const ids = nodes.map(c => c.id)
    // remove all the dead connections and old connections
    for (const connection of this.connections) {
      if (ids.indexOf(connection.id) === -1) {
        oldConnections.push(connection)
      }
    }

    // close old connections
    oldConnections.forEach(connection => connection.close())

    this.connections = newConnections
    this.size = this.connections.length

    return this
  }

  /**
   * Transforms the nodes objects to a host object.
   *
   * @param {object} nodes
   * @returns {array} hosts
   */
  nodesToHost (nodes, protocol) {
    const ids = Object.keys(nodes)
    const hosts = []

    for (let i = 0, len = ids.length; i < len; i++) {
      const node = nodes[ids[i]]
      // If there is no protocol in
      // the `publish_address` new URL will throw
      // the publish_address can have two forms:
      //   - ip:port
      //   - hostname/ip:port
      // if we encounter the second case, we should
      // use the hostname instead of the ip
      let address = node.http.publish_address
      const parts = address.split('/')
      // the url is in the form of hostname/ip:port
      if (parts.length > 1) {
        const hostname = parts[0]
        const port = parts[1].match(/((?::))(?:[0-9]+)$/g)[0].slice(1)
        address = `${hostname}:${port}`
      }

      address = address.slice(0, 4) === 'http'
        /* istanbul ignore next */
        ? address
        : `${protocol}//${address}`
      const roles = node.roles.reduce((acc, role) => {
        acc[role] = true
        return acc
      }, {})

      hosts.push({
        url: new URL(address),
        id: ids[i],
        roles: Object.assign({
          [Connection.roles.MASTER]: false,
          [Connection.roles.DATA]: false,
          [Connection.roles.INGEST]: false,
          [Connection.roles.ML]: false
        }, roles)
      })
    }

    return hosts
  }

  /**
   * Transforms an url string to a host object
   *
   * @param {string} url
   * @returns {object} host
   */
  urlToHost (url) {
    return {
      url: new URL(url)
    }
  }
}

module.exports = BaseConnectionPool


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(168), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(4);
var ctx = __webpack_require__(175);
var hide = __webpack_require__(6);
var has = __webpack_require__(3);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(3);
var TAG = __webpack_require__(9)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(4);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(37);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("bluebird@3.4.6");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("lodash@4.8.2");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

const url = __webpack_require__(20);

const USE_WILDCARD_DOMAIN = 3;
const USE_CUSTOM_DOMAIN = 2;
const USE_SHARED_DOMAIN = 1;
const SANITIZE_RX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g; // eslint-disable-line no-useless-escape

const getBasePath = function(originalUrl, path) {
  var basePath = url.parse(originalUrl).pathname || '';
  basePath = basePath.replace(path, '')
    .replace(/^\/|\/$/g, '');
  if (!basePath.startsWith('/')) {
    basePath = '/' + basePath;
  }
  if (!basePath.endsWith('/')) {
    basePath += '/';
  }
  return basePath;
};

module.exports.getBasePath = function(req) {
  return getBasePath(req.originalUrl || '', req.path);
};

module.exports.getBaseUrl = function(req, protocol) {
  var urlProtocol = protocol;
  if (!urlProtocol && "production" === 'development') {
    urlProtocol = 'http';
  }

  const originalUrl = url.parse(req.originalUrl || '').pathname || '';
  return url.format({
    protocol: urlProtocol || 'https',
    host: req.headers.host,
    pathname: originalUrl.replace(req.path, '').replace(/\/$/g, '')
  });
};

function createRouteNormalizationRx(claims) {
  if (!claims.container) {
    return null;
  }

  const container = claims.container.replace(SANITIZE_RX, '\\$&');
  const name = claims.jtn
      ? claims.jtn.replace(SANITIZE_RX, '\\$&')
      : '';

  if (claims.url_format === USE_SHARED_DOMAIN) {
    return new RegExp('^/api/run/' + container + '/(?:' + name + '/?)?');
  } else if (claims.url_format === USE_CUSTOM_DOMAIN) {
    return new RegExp('^/' + container + '/(?:' + name + '/?)?');
  } else if (claims.url_format === USE_WILDCARD_DOMAIN) {
    return new RegExp('^/(?:' + name + '/?)?');
  }

  throw new Error('Unsupported webtask URL format.');
}

function getWTRegionalUrl(wtUrl, container) {
  if (!wtUrl) {
    return null;
  }

  const nodeVersion = (wtUrl.indexOf('sandbox8') >= 0) ? '8' : '';
  const firstPart = wtUrl.split('.it.auth0.com')[0];
  const region = firstPart.split('-')[1] || 'us';

  return 'https://' + container + '.' + region + nodeVersion + '.webtask.io/';
}

module.exports.getWebtaskUrl = function(req) {
  const normalizeRouteRx = createRouteNormalizationRx(req.x_wt);
  const requestOriginalUrl = req.url;
  const requestUrl = req.url.replace(normalizeRouteRx, '/');
  const requestPath = url.parse(requestUrl || '').pathname;
  const isIsolatedDomain = (req.x_wt && req.x_wt.ectx && req.x_wt.ectx.ISOLATED_DOMAIN) || false;
  const originalUrl = url.parse(requestOriginalUrl || '').pathname || '';

  var webtaskUrl;
  if (!isIsolatedDomain) {
    webtaskUrl = originalUrl;
  } else {
    webtaskUrl = url.format({
      protocol: 'https',
      host: req.headers.host,
      pathname: originalUrl.replace(requestPath, '').replace(/\/$/g, '')
    });

    const trigger = '.it.auth0.com/api/run/' + req.x_wt.container + '/';
    const regionalUrl = getWTRegionalUrl(webtaskUrl, req.x_wt.container);

    if (webtaskUrl.indexOf(trigger) >= 0) {
      webtaskUrl = webtaskUrl.replace('https://' + req.headers.host + '/api/run/' + req.x_wt.container + '/', regionalUrl);
    }
  }

  return webtaskUrl;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(38);
var request = __webpack_require__(61);
var querystring = __webpack_require__(60);
var tools = __webpack_require__(0);

function LogsApiClient(options) {
  if (options === null || options === undefined) {
    throw new tools.ArgumentError('Must provide an options object');
  }

  if (options.domain === null || options.domain === undefined) {
    throw new tools.ArgumentError('Must provide a valid domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.clientId === null || options.clientId === undefined) {
    throw new tools.ArgumentError('Must provide a valid clientId');
  }

  if (typeof options.clientId !== 'string' || options.clientId.length === 0) {
    throw new tools.ArgumentError('The provided clientId is invalid: ' + options.clientId);
  }

  if (options.clientSecret === null || options.clientSecret === undefined) {
    throw new tools.ArgumentError('Must provide a valid clientSecret');
  }

  if (typeof options.clientSecret !== 'string' || options.clientSecret.length === 0) {
    throw new tools.ArgumentError('The provided clientSecret is invalid: ' + options.clientSecret);
  }

  this.options = options;
  this.tokenCache = options.tokenCache || {
    getToken: function getToken() {
      return Promise.resolve();
    },
    setToken: function setToken() {
      return Promise.resolve();
    }
  };
}

LogsApiClient.prototype.getAccessToken = function () {
  var self = this;
  return new Promise(function (resolve, reject) {
    request.post('https://' + self.options.domain + '/oauth/token').send({
      audience: 'https://' + self.options.domain + '/api/v2/',
      client_id: self.options.clientId,
      client_secret: self.options.clientSecret,
      grant_type: 'client_credentials'
    }).set('Accept', 'application/json').end(function (err, res) {
      if (err && err.status === 401) {
        return reject(new tools.ManagementApiError('unauthorized', 'Invalid credentials for ' + self.options.clientId, err.status));
      } else if (err && res && res.body && res.body.error) {
        return reject(new tools.ManagementApiError(res.body.error, res.body.error_description || res.body.error, err.status));
      } else if (err) {
        return reject(err);
      }

      if (!res.ok || !res.body.access_token) {
        return reject(new tools.ManagementApiError('unknown_error', 'Unknown error from Management API or no access_token was provided: ' + (res.text || res.status)));
      }

      var expiresAt = new Date();
      return resolve({
        token: res.body.access_token,
        expiresAt: expiresAt.setSeconds(expiresAt.getSeconds() + res.body.expires_in)
      });
    });
  });
};

LogsApiClient.prototype.getAccessTokenCached = function () {
  var self = this;
  return self.tokenCache.getToken().then(function (cached) {
    if (cached && cached.token) {
      var now = new Date().valueOf();
      if (cached.expiresAt - now > 10000) {
        return cached;
      }
    }

    return self.getAccessToken(self.options).then(function (res) {
      return self.tokenCache.setToken(res).then(function () {
        return res;
      });
    });
  });
};

LogsApiClient.prototype.getLogs = function (params) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.getAccessTokenCached(self.options, self.storage).then(function (data) {
      var query = querystring.stringify(params);
      request.get('https://' + self.options.domain + '/api/v2/logs?' + query).set('Authorization', 'Bearer ' + data.token).set('Content-Type', 'application/json').end(function (err, res) {
        if (err && err.status === 403) {
          var returnError = function returnError() {
            return reject(new tools.ManagementApiError(res.body.error, res.body.error_description || res.body.error, err.status));
          };

          // Clear the cached token.
          self.tokenCache.setToken(null).then(returnError).catch(returnError);
        }

        if (err && res && res.body && res.body.error) {
          return reject(new tools.ManagementApiError(res.body.error, res.body.error_description || res.body.error, err.status));
        }

        if (err) {
          return reject(err);
        }

        if (!res.ok) {
          return reject(new tools.ManagementApiError('unknown_error', 'Unknown error from Management API: ' + (res.text || res.status)));
        }

        return resolve({
          logs: res.body,
          limits: {
            limit: res.headers['x-ratelimit-limit'],
            remaining: res.headers['x-ratelimit-remaining'],
            reset: res.headers['x-ratelimit-reset']
          }
        });
      });
    });
  });
};

module.exports = LogsApiClient;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SlackReporter = __webpack_require__(155);

module.exports.LogsProcessor = __webpack_require__(154);

module.exports.LogsApiClient = __webpack_require__(41);

module.exports.LogsApiStream = __webpack_require__(44);

module.exports.logTypes = __webpack_require__(43);

module.exports.reporters = {
  SlackReporter: SlackReporter
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sev = { success: 'success', error: 'error', warning: 'warning' };
var logTypes = {
  s: {
    name: 'Success Login',
    icon: 'icon-budicon-448',
    severity: sev.success,
    level: 1
  },
  ssa: {
    name: 'Success Silent Auth',
    icon: 'icon-budicon-448',
    severity: sev.success,
    level: 1
  },
  fsa: {
    name: 'Failed Silent Auth',
    icon: 'icon-budicon-448',
    severity: sev.error,
    level: 3
  },
  seacft: {
    name: 'Success Exchange',
    description: 'Authorization Code for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  feacft: {
    name: 'Failed Exchange',
    description: 'Authorization Code for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  seccft: {
    name: 'Success Exchange',
    description: 'Client Credentials for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  feccft: {
    name: 'Failed Exchange',
    description: 'Client Credentials for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  sepft: {
    name: 'Success Exchange',
    description: 'Password for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  fepft: {
    name: 'Failed Exchange',
    description: 'Password for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  sertft: {
    name: 'Success Exchange',
    description: 'Refresh Token for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  fertft: {
    name: 'Failed Exchange',
    description: 'Refresh Token for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  seoobft: {
    name: 'Success Exchange',
    description: 'Password and OOB Challenge for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  feoobft: {
    name: 'Failed Exchange',
    description: 'Password and OOB Challenge for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  seotpft: {
    name: 'Success Exchange',
    description: 'Password and OTP Challenge for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  feotpft: {
    name: 'Failed Exchange',
    description: 'Password and OTP Challenge for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  sercft: {
    name: 'Success Exchange',
    description: 'Password and MFA Recovery code for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  fercft: {
    name: 'Failed Exchange',
    description: 'Password and MFA Recovery code for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  f: {
    name: 'Failed Login',
    icon: 'icon-budicon-448',
    severity: sev.error,
    level: 3
  },
  w: {
    name: 'Warning',
    icon: 'icon-budicon-354',
    severity: sev.warning,
    level: 2
  },
  depnote: {
    name: 'Deprecation Notice',
    icon: 'icon-budicon-354',
    severity: sev.warning,
    level: 2
  },
  du: {
    name: 'Deleted User',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  fu: {
    name: 'Failed Login (invalid email/username)',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  fp: {
    name: 'Failed Login (wrong password)',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  fc: {
    name: 'Failed by Connector',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 3
  },
  fco: {
    name: 'Failed by CORS',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 3
  },
  con: {
    name: 'Connector Online',
    icon: 'icon-budicon-143',
    severity: sev.success,
    level: 1
  },
  coff: {
    name: 'Connector Offline',
    icon: 'icon-budicon-143',
    severity: sev.error,
    level: 3
  },
  fcpro: {
    name: 'Failed Connector Provisioning',
    icon: 'icon-budicon-143',
    severity: sev.error,
    level: 4
  },
  ss: {
    name: 'Success Signup',
    icon: 'icon-budicon-314',
    severity: sev.success,
    level: 1
  },
  fs: {
    name: 'Failed Signup',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  cs: {
    name: 'Code Sent',
    icon: 'icon-budicon-243',
    severity: sev.success,
    level: 1
  },
  cls: {
    name: 'Code/Link Sent',
    icon: 'icon-budicon-781',
    severity: sev.success,
    level: 1
  },
  sv: {
    name: 'Success Verification Email',
    icon: 'icon-budicon-781',
    severity: sev.success,
    level: 1
  },
  fv: {
    name: 'Failed Verification Email',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  scp: {
    name: 'Success Change Password',
    icon: 'icon-budicon-280',
    severity: sev.success,
    level: 1
  },
  fcp: {
    name: 'Failed Change Password',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  scph: {
    name: 'Success Post Change Password Hook',
    icon: 'icon-budicon-280',
    severity: sev.success,
    level: 1
  },
  fcph: {
    name: 'Failed Post Change Password Hook',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  sce: {
    name: 'Success Change Email',
    icon: 'icon-budicon-266',
    severity: sev.success,
    level: 1
  },
  fce: {
    name: 'Failed Change Email',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  scu: {
    name: 'Success Change Username',
    icon: 'icon-budicon-266',
    severity: sev.success,
    level: 1
  },
  fcu: {
    name: 'Failed Change Username',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  scpn: {
    name: 'Success Change Phone Number',
    icon: 'icon-budicon-266',
    severity: sev.success,
    level: 1
  },
  fcpn: {
    name: 'Failed Change Phone Number',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  svr: {
    name: 'Success Verification Email Request',
    icon: 'icon-budicon-781',
    severity: sev.success,
    level: 1
  },
  fvr: {
    name: 'Failed Verification Email Request',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  scpr: {
    name: 'Success Change Password Request',
    icon: 'icon-budicon-280',
    severity: sev.success,
    level: 1
  },
  fcpr: {
    name: 'Failed Change Password Request',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  fn: {
    name: 'Failed Sending Notification',
    icon: 'icon-budicon-782',
    severity: sev.error,
    level: 3
  },
  sapi: {
    name: 'API Operation',
    icon: 'icon-budicon-546',
    severity: sev.success,
    level: 1,
    category: 'api'
  },
  fapi: {
    name: 'Failed API Operation',
    icon: 'icon-budicon-546',
    severity: sev.error,
    level: 3,
    category: 'api'
  },
  limit_wc: {
    name: 'Blocked Account',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  limit_mu: {
    name: 'Blocked IP Address',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  limit_ui: {
    name: 'Too Many Calls to /userinfo',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  api_limit: {
    name: 'Rate Limit On API',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  limit_delegation: {
    name: 'Too Many Calls to /delegation',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  sdu: {
    name: 'Successful User Deletion',
    icon: 'icon-budicon-312',
    severity: sev.success,
    level: 1
  },
  fdu: {
    name: 'Failed User Deletion',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  admin_update_launch: {
    name: 'Auth0 Update Launched',
    icon: 'icon-budicon-774',
    severity: sev.success,
    level: 1
  },
  sys_os_update_start: {
    name: 'Auth0 OS Update Started',
    icon: 'icon-budicon-661',
    severity: sev.success,
    level: 1
  },
  sys_os_update_end: {
    name: 'Auth0 OS Update Ended',
    icon: 'icon-budicon-661',
    severity: sev.success,
    level: 1
  },
  sys_update_start: {
    name: 'Auth0 Update Started',
    icon: 'icon-budicon-661',
    severity: sev.success,
    level: 1
  },
  sys_update_end: {
    name: 'Auth0 Update Ended',
    icon: 'icon-budicon-661',
    severity: sev.success,
    level: 1
  },
  slo: {
    name: 'Success Logout',
    icon: 'icon-budicon-449',
    severity: sev.success,
    level: 1
  },
  flo: {
    name: 'Failed Logout',
    icon: 'icon-budicon-449',
    severity: sev.error,
    level: 3
  },
  sd: {
    name: 'Success Delegation',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  fd: {
    name: 'Failed Delegation',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  gd_unenroll: {
    name: 'Unenroll device account',
    icon: 'icon-budicon-298',
    severity: sev.success,
    level: 1
  },
  gd_update_device_account: {
    name: 'Update device account',
    icon: 'icon-budicon-257',
    severity: sev.success,
    level: 1
  },
  gd_module_switch: {
    name: 'Module switch',
    icon: 'icon-budicon-329',
    severity: sev.success,
    level: 1
  },
  gd_tenant_update: {
    name: 'Guardian tenant update',
    icon: 'icon-budicon-170',
    severity: sev.success,
    level: 1
  },
  gd_start_auth: {
    name: 'Second factor started',
    icon: 'icon-budicon-285',
    severity: sev.success,
    level: 1
  },
  gd_start_enroll: {
    name: 'Enroll started',
    icon: 'icon-budicon-299',
    severity: sev.success,
    level: 1
  },
  gd_start_enroll_failed: {
    name: 'MFA Enrollment start failed',
    icon: 'icon-budicon-299',
    severity: sev.error,
    level: 3
  },
  gd_user_delete: {
    name: 'User delete',
    icon: 'icon-budicon-298',
    severity: sev.success,
    level: 1
  },
  gd_auth_succeed: {
    name: 'OTP Auth suceed',
    icon: 'icon-budicon-mfa-login-succeed',
    severity: sev.success,
    level: 1
  },
  gd_auth_failed: {
    name: 'OTP Auth failed',
    icon: 'icon-budicon-mfa-login-failed',
    severity: sev.error,
    level: 3
  },
  gd_send_pn: {
    name: 'Push notification sent',
    icon: 'icon-budicon-mfa-send-pn',
    severity: sev.success,
    level: 1
  },
  gd_send_pn_failure: {
    name: 'Error sending MFA Push Notification',
    icon: 'icon-budicon-mfa-send-pn',
    severity: sev.error,
    level: 3
  },
  gd_auth_rejected: {
    name: 'OTP Auth rejected',
    icon: 'icon-budicon-mfa-login-failed',
    severity: sev.error,
    level: 3
  },
  gd_recovery_succeed: {
    name: 'Recovery succeed',
    icon: 'icon-budicon-mfa-recovery-succeed',
    severity: sev.success,
    level: 1
  },
  gd_recovery_failed: {
    name: 'Recovery failed',
    icon: 'icon-budicon-mfa-recovery-failed',
    severity: sev.error,
    level: 3
  },
  gd_send_sms: {
    name: 'SMS Sent',
    icon: 'icon-budicon-799',
    severity: sev.success,
    level: 1
  },
  gd_send_sms_failure: {
    name: 'Error sending MFA SMS',
    icon: 'icon-budicon-799',
    severity: sev.error,
    level: 3
  },
  gd_otp_rate_limit_exceed: {
    name: 'Too many failures',
    icon: 'icon-budicon-435',
    severity: sev.warning,
    level: 2
  },
  gd_recovery_rate_limit_exceed: {
    name: 'Too many failures',
    icon: 'icon-budicon-435',
    severity: sev.warning,
    level: 2
  },
  gd_enrollment_complete: {
    name: 'Guardian enrollment complete',
    icon: 'icon-budicon-299',
    severity: sev.success,
    level: 1
  },
  fui: {
    name: 'Users import',
    icon: 'icon-budicon-299',
    severity: sev.warning,
    level: 2
  },
  sui: {
    name: 'Users import',
    icon: 'icon-budicon-299',
    severity: sev.success,
    level: 1
  },
  pwd_leak: {
    name: 'Breached password',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 3
  },
  fcoa: {
    name: 'Failed cross origin authentication',
    icon: 'icon-budicon-448',
    severity: sev.error,
    level: 3
  },
  scoa: {
    name: 'Success cross origin authentication',
    icon: 'icon-budicon-448',
    severity: sev.success,
    level: 1
  },
  ublkdu: {
    name: 'Account unblocked',
    icon: 'icon-budicon-313',
    severity: sev.success,
    level: 1
  },
  sens: {
    name: 'Success Exchange',
    icon: 'icon-budicon-448',
    severity: sev.success,
    level: 1
  },
  fens: {
    name: 'Failed Exchange',
    icon: 'icon-budicon-448',
    severity: sev.error,
    level: 3
  }
};

module.exports = logTypes;
module.exports.get = function (type) {
  return logTypes[type] && logTypes[type].name || 'Unknown Log Type: ' + type;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(221);
var Readable = __webpack_require__(220).Readable;
var tools = __webpack_require__(0);

var LogsApiClient = __webpack_require__(41);

var MS_PER_S = 1000;
var NS_PER_MS = 1000000;

function LogsApiStream(options) {
  if (options === null || options === undefined) {
    throw new tools.ArgumentError('Must provide an options object');
  }

  Readable.call(this, { objectMode: true });

  this.client = new LogsApiClient(options);
  this.options = options;
  this.remaining = 50;
  this.lastBatch = 0;
  this.retries = 0;
  this.previousCheckpoint = options.checkpointId || null;
  this.lastCheckpoint = options.checkpointId || null;
  this.status = {
    startCheckpoint: options.checkpointId || null,
    start: new Date(),
    end: null,
    logsProcessed: 0
  };
}

util.inherits(LogsApiStream, Readable);

LogsApiStream.prototype.getQuery = function (types) {
  if (!types || !types.length) {
    return '';
  }

  return 'type:' + types.join(' OR type:');
};

LogsApiStream.prototype.done = function () {
  this.status.end = new Date();
  this.push(null);
};

LogsApiStream.prototype.next = function (take) {
  var self = this;
  var logger = this.options.logger;
  var perPage = take;

  if (self.remaining < 1) {
    self.status.warning = 'Auth0 Management API rate limit reached.';
    self.done();
  } else {
    var params = self.lastCheckpoint ? { take: perPage, from: self.lastCheckpoint } : { per_page: perPage, page: 0 };
    params.q = self.getQuery(self.options.types);
    params.sort = 'date:1';

    if (logger) {
      var startPoint = params.from ? 'checkpoint ' + params.from : 'page ' + params.page;
      logger.debug('Requesting logs from ' + startPoint);
    }

    var startTime = process.hrtime();
    var getLogs = function getLogs() {
      self.client.getLogs(params).then(function (data) {
        var elapsedTime = process.hrtime(startTime);
        var elapsedMillis = elapsedTime[0] * MS_PER_S + elapsedTime[1] / NS_PER_MS;

        if (logger) {
          logger.debug('Retrieved logs in ' + elapsedMillis + 'ms.');
        }

        var logs = data.logs;
        self.remaining = data.limits.remaining;

        if (logs && logs.length) {
          var filtered = logs;
          if (self.options.types && self.options.types.length) {
            filtered = logs.filter(function (log) {
              return self.options.types.indexOf(log.type) >= 0;
            }).slice(0, take || 100);
          }

          if (filtered.length) {
            self.lastCheckpoint = filtered[filtered.length - 1]._id;
            self.lastBatch += filtered.length;
            self.push({ logs: filtered, limits: data.limits });
          } else {
            self.lastCheckpoint = logs[logs.length - 1]._id;
            self.lastBatch += 0;
            self.push({ logs: [], limits: data.limits });
          }
        } else {
          self.status.end = new Date();
          self.push(null);
        }

        return logs;
      }).catch(function (err) {
        var start = self.options.start;
        var limit = self.options.maxRunTimeSeconds;
        var now = new Date().getTime();
        var hasTime = start + limit * 1000 >= now;

        if (self.options.maxRetries > self.retries && hasTime) {
          self.retries++;
          return getLogs();
        }

        return self.emit('error', err);
      });
    };

    getLogs();
  }
};

LogsApiStream.prototype.batchSaved = function () {
  this.status.logsProcessed += this.lastBatch;
  this.previousCheckpoint = this.lastCheckpoint;
  this.lastBatch = 0;
};

LogsApiStream.prototype._read = function read() {};

module.exports = LogsApiStream;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var once = __webpack_require__(202);

/**
 * Returns a middleware that can be used to conditionally execute another
 * middleware, or alternatively bypass it.
 *
 * @param {(boolean|function)} condition
 *   If true, the middleware will be executed, else the next middleware will be
 *   executed. If the conddition is a function it will be executed with the req,
 *   res, and next arguments. The return of the function will be used as the
 *   conditional.
 * @param {function} success
 *   The middleware to conditionally execute if condition is true.
 * @param {function} fail
 *   The middleware to conditionally execute if condition is false.
 *
 * @return {function}
 *   A middleware wraper to conditionally execute another middleware.
 *
 * @example
 *   // Will enable middleware for requests that use the application/json accept
 *   // header.
 *   app.use(require('express-conditional')(
 *     function (req, res, next) {
 *       return req.get('accept') === 'application/json';
 *     },
 *     function (req, res, next) {
 *       next();
 *     }
 *  ));
 */
module.exports = function (condition, success, fail) {
  return function (req, res, next) {
    var nextOnce = once(next);
    if (condition === true || typeof condition === 'function' && condition(req, res, nextOnce)) {
      return success(req, res, nextOnce);
    }
    if (fail) {
      return fail(req, res, nextOnce);
    }

    return nextOnce();
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(47)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(27);
var redefine = __webpack_require__(54);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(180);
var setToStringTag = __webpack_require__(31);
var getPrototypeOf = __webpack_require__(186);
var ITERATOR = __webpack_require__(9)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(183);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(47)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(177).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(53);
var hiddenKeys = __webpack_require__(26).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(174)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {"name":"@elastic/elasticsearch","description":"The official Elasticsearch client for Node.js","main":"index.js","types":"index.d.ts","exports":{".":{"require":"./index.js","import":"./index.mjs"},"./":"./"},"homepage":"http://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html","version":"7.12.0","versionCanary":"7.12.0-canary.3","keywords":["elasticsearch","elastic","kibana","mapping","REST","search","client","index"],"scripts":{"test":"npm run lint && tap test/{unit,acceptance}/{*,**/*}.test.js && npm run test:types","test:unit":"tap test/unit/{*,**/*}.test.js","test:acceptance":"tap test/acceptance/*.test.js","test:integration":"node test/integration/index.js","test:integration:helpers":"tap test/integration/helpers/*.test.js","test:types":"tsd","test:coverage-100":"tap test/{unit,acceptance}/{*,**/*}.test.js --coverage --100 --nyc-arg=\"--exclude=api\"","test:coverage-report":"tap test/{unit,acceptance}/{*,**/*}.test.js --coverage --nyc-arg=\"--exclude=api\" && nyc report --reporter=text-lcov > coverage.lcov","test:coverage-ui":"tap test/{unit,acceptance}/{*,**/*}.test.js --coverage --coverage-report=html --nyc-arg=\"--exclude=api\"","lint":"standard","lint:fix":"standard --fix","license-checker":"license-checker --production --onlyAllow='MIT;Apache-2.0;Apache1.1;ISC;BSD-3-Clause;BSD-2-Clause'","build-esm":"npx gen-esm-wrapper . index.mjs && standard --fix index.mjs"},"author":{"name":"Tomas Della Vedova","company":"Elastic BV"},"original-author":{"name":"Spencer Alger","company":"Elasticsearch BV"},"devDependencies":{"@sinonjs/fake-timers":"github:sinonjs/fake-timers#0bfffc1","@types/node":"^14.14.28","convert-hrtime":"^3.0.0","dedent":"^0.7.0","deepmerge":"^4.2.2","dezalgo":"^1.0.3","fast-deep-equal":"^3.1.3","into-stream":"^6.0.0","js-yaml":"^4.0.0","license-checker":"^25.0.1","minimist":"^1.2.5","ora":"^5.3.0","pretty-hrtime":"^1.0.3","proxy":"^1.0.2","rimraf":"^3.0.2","semver":"^7.3.4","simple-git":"^2.35.0","simple-statistics":"^7.4.1","split2":"^3.2.2","standard":"^16.0.3","stoppable":"^1.1.0","tap":"^14.11.0","tsd":"^0.14.0","workq":"^3.0.0","xmlbuilder2":"^2.4.0"},"dependencies":{"debug":"^4.3.1","hpagent":"^0.1.1","ms":"^2.1.3","pump":"^3.0.0","secure-json-parse":"^2.3.1"},"license":"Apache-2.0","repository":{"type":"git","url":"https://github.com/elastic/elasticsearch-js.git"},"bugs":{"url":"https://github.com/elastic/elasticsearch-js/issues"},"engines":{"node":">=10"},"tsd":{"directory":"test/types"},"tap":{"esm":false,"ts":false,"jsx":false,"flow":false,"coverage":false,"jobs-auto":true}}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(201);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("express-jwt@3.1.0");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("superagent@1.2.0");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var url = __webpack_require__(20);
var path = __webpack_require__(59);
var morgan = __webpack_require__(216);
var Express = __webpack_require__(15);
var bodyParser = __webpack_require__(206);
var tools = __webpack_require__(0);
var expressTools = __webpack_require__(10);

var routes = __webpack_require__(161);
var meta = __webpack_require__(162);
var hooks = __webpack_require__(159);
var logger = __webpack_require__(11);
var config = __webpack_require__(2);
var processLogs = __webpack_require__(157);

module.exports = function (configProvider, storageProvider) {
  config.setProvider(configProvider);

  var storage = storageProvider ? new tools.WebtaskStorageContext(storageProvider, { force: 1 }) : new tools.FileStorageContext(path.join(__dirname, './data.json'), { mergeWrites: true });

  var app = new Express();
  app.use(morgan(':method :url :status :response-time ms - :res[content-length]', {
    stream: logger.stream
  }));

  var prepareBody = function prepareBody(middleware) {
    return function (req, res, next) {
      if (req.webtaskContext && req.webtaskContext.body) {
        req.body = req.webtaskContext.body;
        return next();
      }

      return middleware(req, res, next);
    };
  };

  app.use(prepareBody(bodyParser.json()));
  app.use(prepareBody(bodyParser.urlencoded({ extended: false })));

  // Configure routes.
  app.use(expressTools.routes.dashboardAdmins({
    secret: config('EXTENSION_SECRET'),
    audience: 'urn:logs-to-provider',
    rta: config('AUTH0_RTA').replace('https://', ''),
    domain: config('AUTH0_DOMAIN'),
    baseUrl: config('PUBLIC_WT_URL') || config('WT_URL'),
    clientName: 'Logs to Any Provider',
    urlPrefix: '',
    sessionStorageKey: 'logs-to-provider:apiToken'
  }));
  app.use('/meta', meta());
  app.use('/.extensions', hooks());

  app.use('/app', Express.static(path.join(__dirname, '../dist')));

  app.use(processLogs(storage));
  app.use('/', routes(storage));

  // Generic error handler.
  app.use(expressTools.middlewares.errorHandler(logger.error.bind(logger)));
  return app;
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 63 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/async_search.js Unexpected token (43:26)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/autoscaling.js Unexpected token (43:28)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, name, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/bulk.js Unexpected token (44:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/cat.js Unexpected token (37:28)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, name, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/ccr.js Unexpected token (43:28)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, name, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/clear_scroll.js Unexpected token (32:43)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, scrollId, scroll_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/close_point_in_time.js Unexpected token (32:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/cluster.js Unexpected token (37:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/count.js Unexpected token (38:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/create.js Unexpected token (46:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/dangling_indices.js Unexpected token (43:45)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, indexUuid, index_uuid, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/delete.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/delete_by_query.js Unexpected token (48:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/delete_by_query_rethrottle.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, taskId, task_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/delete_script.js Unexpected token (38:26)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/enrich.js Unexpected token (43:28)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, name, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/eql.js Unexpected token (43:26)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/exists.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/exists_source.js Unexpected token (51:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/explain.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/features.js Unexpected token (37:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/field_caps.js Unexpected token (32:29)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, index, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/get.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/get_script.js Unexpected token (38:26)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/get_script_context.js Unexpected token (32:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/get_script_languages.js Unexpected token (32:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/get_source.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/graph.js Unexpected token (49:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/ilm.js Unexpected token (43:30)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, policy, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/index.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/indices.js Unexpected token (53:36)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, block, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/info.js Unexpected token (32:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/ingest.js Unexpected token (43:26)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/license.js Unexpected token (37:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/logstash.js Unexpected token (43:26)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/mget.js Unexpected token (44:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/migration.js Unexpected token (37:29)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, index, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/ml.js Unexpected token (43:37)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, jobId, job_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/monitoring.js Unexpected token (43:28)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/msearch.js Unexpected token (44:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/msearch_template.js Unexpected token (44:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/mtermvectors.js Unexpected token (38:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/nodes.js Unexpected token (37:39)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, nodeId, node_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/open_point_in_time.js Unexpected token (32:29)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, index, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/ping.js Unexpected token (32:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/put_script.js Unexpected token (48:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, context, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/rank_eval.js Unexpected token (38:29)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/reindex.js Unexpected token (38:22)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/reindex_rethrottle.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, taskId, task_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/render_search_template.js Unexpected token (32:26)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/rollup.js Unexpected token (43:26)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/scripts_painless_execute.js Unexpected token (32:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/scroll.js Unexpected token (32:43)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, scrollId, scroll_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/search.js Unexpected token (38:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/search_shards.js Unexpected token (32:29)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, index, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/search_template.js Unexpected token (44:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/searchable_snapshots.js Unexpected token (37:29)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, index, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/security.js Unexpected token (37:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/slm.js Unexpected token (43:43)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, policyId, policy_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/snapshot.js Unexpected token (43:34)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, repository, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/sql.js Unexpected token (43:22)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/ssl.js Unexpected token (37:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/tasks.js Unexpected token (37:39)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, taskId, task_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/termvectors.js Unexpected token (38:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, id, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/text_structure.js Unexpected token (43:22)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/transform.js Unexpected token (43:49)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, transformId, transform_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/update.js Unexpected token (46:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, id, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/update_by_query.js Unexpected token (44:35)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, index, type, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/update_by_query_rethrottle.js Unexpected token (42:39)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, taskId, task_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/watcher.js Unexpected token (49:62)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   let { method, body, watchId, watch_id, actionId, action_id, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 133 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/api/api/xpack.js Unexpected token (37:22)\nYou may need an appropriate loader to handle this file type.\n|   ;[params, options, callback] = normalizeArguments(params, options, callback)\n| \n|   let { method, body, ...querystring } = params\n|   querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)\n| ");

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const bulkApi = __webpack_require__(65)
const CatApi = __webpack_require__(66)
const clearScrollApi = __webpack_require__(68)
const ClusterApi = __webpack_require__(70)
const countApi = __webpack_require__(71)
const createApi = __webpack_require__(72)
const DanglingIndicesApi = __webpack_require__(73)
const deleteApi = __webpack_require__(74)
const deleteByQueryApi = __webpack_require__(75)
const deleteByQueryRethrottleApi = __webpack_require__(76)
const deleteScriptApi = __webpack_require__(77)
const existsApi = __webpack_require__(80)
const existsSourceApi = __webpack_require__(81)
const explainApi = __webpack_require__(82)
const FeaturesApi = __webpack_require__(83)
const fieldCapsApi = __webpack_require__(84)
const getApi = __webpack_require__(85)
const getScriptApi = __webpack_require__(86)
const getScriptContextApi = __webpack_require__(87)
const getScriptLanguagesApi = __webpack_require__(88)
const getSourceApi = __webpack_require__(89)
const indexApi = __webpack_require__(92)
const IndicesApi = __webpack_require__(93)
const infoApi = __webpack_require__(94)
const IngestApi = __webpack_require__(95)
const mgetApi = __webpack_require__(98)
const msearchApi = __webpack_require__(102)
const msearchTemplateApi = __webpack_require__(103)
const mtermvectorsApi = __webpack_require__(104)
const NodesApi = __webpack_require__(105)
const pingApi = __webpack_require__(107)
const putScriptApi = __webpack_require__(108)
const rankEvalApi = __webpack_require__(109)
const reindexApi = __webpack_require__(110)
const reindexRethrottleApi = __webpack_require__(111)
const renderSearchTemplateApi = __webpack_require__(112)
const scriptsPainlessExecuteApi = __webpack_require__(114)
const scrollApi = __webpack_require__(115)
const searchApi = __webpack_require__(116)
const searchShardsApi = __webpack_require__(117)
const searchTemplateApi = __webpack_require__(118)
const SnapshotApi = __webpack_require__(122)
const TasksApi = __webpack_require__(125)
const termvectorsApi = __webpack_require__(126)
const updateApi = __webpack_require__(129)
const updateByQueryApi = __webpack_require__(130)
const updateByQueryRethrottleApi = __webpack_require__(131)
const AsyncSearchApi = __webpack_require__(63)
const AutoscalingApi = __webpack_require__(64)
const CcrApi = __webpack_require__(67)
const closePointInTimeApi = __webpack_require__(69)
const EnrichApi = __webpack_require__(78)
const EqlApi = __webpack_require__(79)
const GraphApi = __webpack_require__(90)
const IlmApi = __webpack_require__(91)
const LicenseApi = __webpack_require__(96)
const LogstashApi = __webpack_require__(97)
const MigrationApi = __webpack_require__(99)
const MlApi = __webpack_require__(100)
const MonitoringApi = __webpack_require__(101)
const openPointInTimeApi = __webpack_require__(106)
const RollupApi = __webpack_require__(113)
const SearchableSnapshotsApi = __webpack_require__(119)
const SecurityApi = __webpack_require__(120)
const SlmApi = __webpack_require__(121)
const SqlApi = __webpack_require__(123)
const SslApi = __webpack_require__(124)
const TextStructureApi = __webpack_require__(127)
const TransformApi = __webpack_require__(128)
const WatcherApi = __webpack_require__(132)
const XpackApi = __webpack_require__(133)

const { kConfigurationError } = __webpack_require__(135)
const kCat = Symbol('Cat')
const kCluster = Symbol('Cluster')
const kDanglingIndices = Symbol('DanglingIndices')
const kFeatures = Symbol('Features')
const kIndices = Symbol('Indices')
const kIngest = Symbol('Ingest')
const kNodes = Symbol('Nodes')
const kSnapshot = Symbol('Snapshot')
const kTasks = Symbol('Tasks')
const kAsyncSearch = Symbol('AsyncSearch')
const kAutoscaling = Symbol('Autoscaling')
const kCcr = Symbol('Ccr')
const kEnrich = Symbol('Enrich')
const kEql = Symbol('Eql')
const kGraph = Symbol('Graph')
const kIlm = Symbol('Ilm')
const kLicense = Symbol('License')
const kLogstash = Symbol('Logstash')
const kMigration = Symbol('Migration')
const kMl = Symbol('Ml')
const kMonitoring = Symbol('Monitoring')
const kRollup = Symbol('Rollup')
const kSearchableSnapshots = Symbol('SearchableSnapshots')
const kSecurity = Symbol('Security')
const kSlm = Symbol('Slm')
const kSql = Symbol('Sql')
const kSsl = Symbol('Ssl')
const kTextStructure = Symbol('TextStructure')
const kTransform = Symbol('Transform')
const kWatcher = Symbol('Watcher')
const kXpack = Symbol('Xpack')

function ESAPI (opts) {
  this[kConfigurationError] = opts.ConfigurationError
  this[kCat] = null
  this[kCluster] = null
  this[kDanglingIndices] = null
  this[kFeatures] = null
  this[kIndices] = null
  this[kIngest] = null
  this[kNodes] = null
  this[kSnapshot] = null
  this[kTasks] = null
  this[kAsyncSearch] = null
  this[kAutoscaling] = null
  this[kCcr] = null
  this[kEnrich] = null
  this[kEql] = null
  this[kGraph] = null
  this[kIlm] = null
  this[kLicense] = null
  this[kLogstash] = null
  this[kMigration] = null
  this[kMl] = null
  this[kMonitoring] = null
  this[kRollup] = null
  this[kSearchableSnapshots] = null
  this[kSecurity] = null
  this[kSlm] = null
  this[kSql] = null
  this[kSsl] = null
  this[kTextStructure] = null
  this[kTransform] = null
  this[kWatcher] = null
  this[kXpack] = null
}

ESAPI.prototype.bulk = bulkApi
ESAPI.prototype.clearScroll = clearScrollApi
ESAPI.prototype.count = countApi
ESAPI.prototype.create = createApi
ESAPI.prototype.delete = deleteApi
ESAPI.prototype.deleteByQuery = deleteByQueryApi
ESAPI.prototype.deleteByQueryRethrottle = deleteByQueryRethrottleApi
ESAPI.prototype.deleteScript = deleteScriptApi
ESAPI.prototype.exists = existsApi
ESAPI.prototype.existsSource = existsSourceApi
ESAPI.prototype.explain = explainApi
ESAPI.prototype.fieldCaps = fieldCapsApi
ESAPI.prototype.get = getApi
ESAPI.prototype.getScript = getScriptApi
ESAPI.prototype.getScriptContext = getScriptContextApi
ESAPI.prototype.getScriptLanguages = getScriptLanguagesApi
ESAPI.prototype.getSource = getSourceApi
ESAPI.prototype.index = indexApi
ESAPI.prototype.info = infoApi
ESAPI.prototype.mget = mgetApi
ESAPI.prototype.msearch = msearchApi
ESAPI.prototype.msearchTemplate = msearchTemplateApi
ESAPI.prototype.mtermvectors = mtermvectorsApi
ESAPI.prototype.ping = pingApi
ESAPI.prototype.putScript = putScriptApi
ESAPI.prototype.rankEval = rankEvalApi
ESAPI.prototype.reindex = reindexApi
ESAPI.prototype.reindexRethrottle = reindexRethrottleApi
ESAPI.prototype.renderSearchTemplate = renderSearchTemplateApi
ESAPI.prototype.scriptsPainlessExecute = scriptsPainlessExecuteApi
ESAPI.prototype.scroll = scrollApi
ESAPI.prototype.search = searchApi
ESAPI.prototype.searchShards = searchShardsApi
ESAPI.prototype.searchTemplate = searchTemplateApi
ESAPI.prototype.termvectors = termvectorsApi
ESAPI.prototype.update = updateApi
ESAPI.prototype.updateByQuery = updateByQueryApi
ESAPI.prototype.updateByQueryRethrottle = updateByQueryRethrottleApi
ESAPI.prototype.closePointInTime = closePointInTimeApi
ESAPI.prototype.openPointInTime = openPointInTimeApi

Object.defineProperties(ESAPI.prototype, {
  cat: {
    get () {
      if (this[kCat] === null) {
        this[kCat] = new CatApi(this.transport, this[kConfigurationError])
      }
      return this[kCat]
    }
  },
  clear_scroll: { get () { return this.clearScroll } },
  cluster: {
    get () {
      if (this[kCluster] === null) {
        this[kCluster] = new ClusterApi(this.transport, this[kConfigurationError])
      }
      return this[kCluster]
    }
  },
  danglingIndices: {
    get () {
      if (this[kDanglingIndices] === null) {
        this[kDanglingIndices] = new DanglingIndicesApi(this.transport, this[kConfigurationError])
      }
      return this[kDanglingIndices]
    }
  },
  dangling_indices: { get () { return this.danglingIndices } },
  delete_by_query: { get () { return this.deleteByQuery } },
  delete_by_query_rethrottle: { get () { return this.deleteByQueryRethrottle } },
  delete_script: { get () { return this.deleteScript } },
  exists_source: { get () { return this.existsSource } },
  features: {
    get () {
      if (this[kFeatures] === null) {
        this[kFeatures] = new FeaturesApi(this.transport, this[kConfigurationError])
      }
      return this[kFeatures]
    }
  },
  field_caps: { get () { return this.fieldCaps } },
  get_script: { get () { return this.getScript } },
  get_script_context: { get () { return this.getScriptContext } },
  get_script_languages: { get () { return this.getScriptLanguages } },
  get_source: { get () { return this.getSource } },
  indices: {
    get () {
      if (this[kIndices] === null) {
        this[kIndices] = new IndicesApi(this.transport, this[kConfigurationError])
      }
      return this[kIndices]
    }
  },
  ingest: {
    get () {
      if (this[kIngest] === null) {
        this[kIngest] = new IngestApi(this.transport, this[kConfigurationError])
      }
      return this[kIngest]
    }
  },
  msearch_template: { get () { return this.msearchTemplate } },
  nodes: {
    get () {
      if (this[kNodes] === null) {
        this[kNodes] = new NodesApi(this.transport, this[kConfigurationError])
      }
      return this[kNodes]
    }
  },
  put_script: { get () { return this.putScript } },
  rank_eval: { get () { return this.rankEval } },
  reindex_rethrottle: { get () { return this.reindexRethrottle } },
  render_search_template: { get () { return this.renderSearchTemplate } },
  scripts_painless_execute: { get () { return this.scriptsPainlessExecute } },
  search_shards: { get () { return this.searchShards } },
  search_template: { get () { return this.searchTemplate } },
  snapshot: {
    get () {
      if (this[kSnapshot] === null) {
        this[kSnapshot] = new SnapshotApi(this.transport, this[kConfigurationError])
      }
      return this[kSnapshot]
    }
  },
  tasks: {
    get () {
      if (this[kTasks] === null) {
        this[kTasks] = new TasksApi(this.transport, this[kConfigurationError])
      }
      return this[kTasks]
    }
  },
  update_by_query: { get () { return this.updateByQuery } },
  update_by_query_rethrottle: { get () { return this.updateByQueryRethrottle } },
  asyncSearch: {
    get () {
      if (this[kAsyncSearch] === null) {
        this[kAsyncSearch] = new AsyncSearchApi(this.transport, this[kConfigurationError])
      }
      return this[kAsyncSearch]
    }
  },
  async_search: { get () { return this.asyncSearch } },
  autoscaling: {
    get () {
      if (this[kAutoscaling] === null) {
        this[kAutoscaling] = new AutoscalingApi(this.transport, this[kConfigurationError])
      }
      return this[kAutoscaling]
    }
  },
  ccr: {
    get () {
      if (this[kCcr] === null) {
        this[kCcr] = new CcrApi(this.transport, this[kConfigurationError])
      }
      return this[kCcr]
    }
  },
  close_point_in_time: { get () { return this.closePointInTime } },
  enrich: {
    get () {
      if (this[kEnrich] === null) {
        this[kEnrich] = new EnrichApi(this.transport, this[kConfigurationError])
      }
      return this[kEnrich]
    }
  },
  eql: {
    get () {
      if (this[kEql] === null) {
        this[kEql] = new EqlApi(this.transport, this[kConfigurationError])
      }
      return this[kEql]
    }
  },
  graph: {
    get () {
      if (this[kGraph] === null) {
        this[kGraph] = new GraphApi(this.transport, this[kConfigurationError])
      }
      return this[kGraph]
    }
  },
  ilm: {
    get () {
      if (this[kIlm] === null) {
        this[kIlm] = new IlmApi(this.transport, this[kConfigurationError])
      }
      return this[kIlm]
    }
  },
  license: {
    get () {
      if (this[kLicense] === null) {
        this[kLicense] = new LicenseApi(this.transport, this[kConfigurationError])
      }
      return this[kLicense]
    }
  },
  logstash: {
    get () {
      if (this[kLogstash] === null) {
        this[kLogstash] = new LogstashApi(this.transport, this[kConfigurationError])
      }
      return this[kLogstash]
    }
  },
  migration: {
    get () {
      if (this[kMigration] === null) {
        this[kMigration] = new MigrationApi(this.transport, this[kConfigurationError])
      }
      return this[kMigration]
    }
  },
  ml: {
    get () {
      if (this[kMl] === null) {
        this[kMl] = new MlApi(this.transport, this[kConfigurationError])
      }
      return this[kMl]
    }
  },
  monitoring: {
    get () {
      if (this[kMonitoring] === null) {
        this[kMonitoring] = new MonitoringApi(this.transport, this[kConfigurationError])
      }
      return this[kMonitoring]
    }
  },
  open_point_in_time: { get () { return this.openPointInTime } },
  rollup: {
    get () {
      if (this[kRollup] === null) {
        this[kRollup] = new RollupApi(this.transport, this[kConfigurationError])
      }
      return this[kRollup]
    }
  },
  searchableSnapshots: {
    get () {
      if (this[kSearchableSnapshots] === null) {
        this[kSearchableSnapshots] = new SearchableSnapshotsApi(this.transport, this[kConfigurationError])
      }
      return this[kSearchableSnapshots]
    }
  },
  searchable_snapshots: { get () { return this.searchableSnapshots } },
  security: {
    get () {
      if (this[kSecurity] === null) {
        this[kSecurity] = new SecurityApi(this.transport, this[kConfigurationError])
      }
      return this[kSecurity]
    }
  },
  slm: {
    get () {
      if (this[kSlm] === null) {
        this[kSlm] = new SlmApi(this.transport, this[kConfigurationError])
      }
      return this[kSlm]
    }
  },
  sql: {
    get () {
      if (this[kSql] === null) {
        this[kSql] = new SqlApi(this.transport, this[kConfigurationError])
      }
      return this[kSql]
    }
  },
  ssl: {
    get () {
      if (this[kSsl] === null) {
        this[kSsl] = new SslApi(this.transport, this[kConfigurationError])
      }
      return this[kSsl]
    }
  },
  textStructure: {
    get () {
      if (this[kTextStructure] === null) {
        this[kTextStructure] = new TextStructureApi(this.transport, this[kConfigurationError])
      }
      return this[kTextStructure]
    }
  },
  text_structure: { get () { return this.textStructure } },
  transform: {
    get () {
      if (this[kTransform] === null) {
        this[kTransform] = new TransformApi(this.transport, this[kConfigurationError])
      }
      return this[kTransform]
    }
  },
  watcher: {
    get () {
      if (this[kWatcher] === null) {
        this[kWatcher] = new WatcherApi(this.transport, this[kConfigurationError])
      }
      return this[kWatcher]
    }
  },
  xpack: {
    get () {
      if (this[kXpack] === null) {
        this[kXpack] = new XpackApi(this.transport, this[kConfigurationError])
      }
      return this[kXpack]
    }
  }
})

module.exports = ESAPI


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const result = { body: null, statusCode: null, headers: null, warnings: null }
const kConfigurationError = Symbol('configuration error')

function handleError (err, callback) {
  if (callback) {
    process.nextTick(callback, err, result)
    return { then: noop, catch: noop, abort: noop }
  }
  return Promise.reject(err)
}

function snakeCaseKeys (acceptedQuerystring, snakeCase, querystring) {
  const target = {}
  const keys = Object.keys(querystring)
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    target[snakeCase[key] || key] = querystring[key]
  }
  return target
}

function normalizeArguments (params, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }
  if (typeof params === 'function' || params == null) {
    callback = params
    params = {}
    options = {}
  }
  return [params, options, callback]
}

function noop () {}

module.exports = { handleError, snakeCaseKeys, normalizeArguments, noop, kConfigurationError }


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const nodeMajor = Number(process.versions.node.split('.')[0])

const { EventEmitter } = __webpack_require__(211)
const { URL } = __webpack_require__(20)
const debug = __webpack_require__(14)('elasticsearch')
const Transport = __webpack_require__(139)
const Connection = __webpack_require__(21)
const { ConnectionPool, CloudConnectionPool } = __webpack_require__(142)
const Helpers = __webpack_require__(137)
const Serializer = __webpack_require__(138)
const errors = __webpack_require__(22)
const { ConfigurationError } = errors
const { prepareHeaders } = Connection.internals
let clientVersion = __webpack_require__(56).version
/* istanbul ignore next */
if (clientVersion.includes('-')) {
  // clean prerelease
  clientVersion = clientVersion.slice(0, clientVersion.indexOf('-')) + 'p'
}
const nodeVersion = process.versions.node

const kInitialOptions = Symbol('elasticsearchjs-initial-options')
const kChild = Symbol('elasticsearchjs-child')
const kExtensions = Symbol('elasticsearchjs-extensions')
const kEventEmitter = Symbol('elasticsearchjs-event-emitter')

const ESAPI = __webpack_require__(134)

/* istanbul ignore next */
if (nodeMajor >= 10 && nodeMajor < 12) {
  process.emitWarning('You are using a version of Node.js that will reach EOL in April 2021. ' +
                      'The support for this version will be dropped in 7.13. ' +
                      'Please refer to https://ela.st/nodejs-support for additional information.',
  'DeprecationWarning'
  )
}

class Client extends ESAPI {
  constructor (opts = {}) {
    super({ ConfigurationError })
    if (opts.cloud && opts[kChild] === undefined) {
      const { id, username, password } = opts.cloud
      // the cloud id is `cluster-name:base64encodedurl`
      // the url is a string divided by two '$', the first is the cloud url
      // the second the elasticsearch instance, the third the kibana instance
      const cloudUrls = Buffer.from(id.split(':')[1], 'base64').toString().split('$')

      // TODO: remove username and password here in 8
      if (username && password) {
        opts.auth = Object.assign({}, opts.auth, { username, password })
      }
      opts.node = `https://${cloudUrls[1]}.${cloudUrls[0]}`

      // Cloud has better performances with compression enabled
      // see https://github.com/elastic/elasticsearch-py/pull/704.
      // So unless the user specifies otherwise, we enable compression.
      if (opts.compression == null) opts.compression = 'gzip'
      if (opts.suggestCompression == null) opts.suggestCompression = true
      if (opts.ssl == null ||
         (opts.ssl && opts.ssl.secureProtocol == null)) {
        opts.ssl = opts.ssl || {}
        opts.ssl.secureProtocol = 'TLSv1_2_method'
      }
    }

    if (!opts.node && !opts.nodes) {
      throw new ConfigurationError('Missing node(s) option')
    }

    if (opts[kChild] === undefined) {
      const checkAuth = getAuth(opts.node || opts.nodes)
      if (checkAuth && checkAuth.username && checkAuth.password) {
        opts.auth = Object.assign({}, opts.auth, { username: checkAuth.username, password: checkAuth.password })
      }
    }

    const options = opts[kChild] !== undefined
      ? opts[kChild].initialOptions
      : Object.assign({}, {
        Connection,
        Transport,
        Serializer,
        ConnectionPool: opts.cloud ? CloudConnectionPool : ConnectionPool,
        maxRetries: 3,
        requestTimeout: 30000,
        pingTimeout: 3000,
        sniffInterval: false,
        sniffOnStart: false,
        sniffEndpoint: '_nodes/_all/http',
        sniffOnConnectionFault: false,
        resurrectStrategy: 'ping',
        suggestCompression: false,
        compression: false,
        ssl: null,
        agent: null,
        headers: {},
        nodeFilter: null,
        nodeSelector: 'round-robin',
        generateRequestId: null,
        name: 'elasticsearch-js',
        auth: null,
        opaqueIdPrefix: null,
        context: null,
        proxy: null,
        enableMetaHeader: true
      }, opts)

    this[kInitialOptions] = options
    this[kExtensions] = []
    this.name = options.name

    if (options.enableMetaHeader) {
      options.headers['x-elastic-client-meta'] = `es=${clientVersion},js=${nodeVersion},t=${clientVersion},hc=${nodeVersion}`
    }

    if (opts[kChild] !== undefined) {
      this.serializer = options[kChild].serializer
      this.connectionPool = options[kChild].connectionPool
      this[kEventEmitter] = options[kChild].eventEmitter
    } else {
      this[kEventEmitter] = new EventEmitter()
      this.serializer = new options.Serializer()
      this.connectionPool = new options.ConnectionPool({
        pingTimeout: options.pingTimeout,
        resurrectStrategy: options.resurrectStrategy,
        ssl: options.ssl,
        agent: options.agent,
        proxy: options.proxy,
        Connection: options.Connection,
        auth: options.auth,
        emit: this[kEventEmitter].emit.bind(this[kEventEmitter]),
        sniffEnabled: options.sniffInterval !== false ||
                      options.sniffOnStart !== false ||
                      options.sniffOnConnectionFault !== false
      })
      // Add the connections before initialize the Transport
      this.connectionPool.addConnection(options.node || options.nodes)
    }

    this.transport = new options.Transport({
      emit: this[kEventEmitter].emit.bind(this[kEventEmitter]),
      connectionPool: this.connectionPool,
      serializer: this.serializer,
      maxRetries: options.maxRetries,
      requestTimeout: options.requestTimeout,
      sniffInterval: options.sniffInterval,
      sniffOnStart: options.sniffOnStart,
      sniffOnConnectionFault: options.sniffOnConnectionFault,
      sniffEndpoint: options.sniffEndpoint,
      suggestCompression: options.suggestCompression,
      compression: options.compression,
      headers: options.headers,
      nodeFilter: options.nodeFilter,
      nodeSelector: options.nodeSelector,
      generateRequestId: options.generateRequestId,
      name: options.name,
      opaqueIdPrefix: options.opaqueIdPrefix,
      context: options.context
    })

    this.helpers = new Helpers({
      client: this,
      maxRetries: options.maxRetries,
      metaHeader: options.enableMetaHeader
        ? `es=${clientVersion},js=${nodeVersion},t=${clientVersion},hc=${nodeVersion}`
        : null
    })
  }

  get emit () {
    return this[kEventEmitter].emit.bind(this[kEventEmitter])
  }

  get on () {
    return this[kEventEmitter].on.bind(this[kEventEmitter])
  }

  get once () {
    return this[kEventEmitter].once.bind(this[kEventEmitter])
  }

  get off () {
    return this[kEventEmitter].off.bind(this[kEventEmitter])
  }

  extend (name, opts, fn) {
    if (typeof opts === 'function') {
      fn = opts
      opts = {}
    }

    let [namespace, method] = name.split('.')
    if (method == null) {
      method = namespace
      namespace = null
    }

    if (namespace != null) {
      if (this[namespace] != null && this[namespace][method] != null && opts.force !== true) {
        throw new Error(`The method "${method}" already exists on namespace "${namespace}"`)
      }

      if (this[namespace] == null) this[namespace] = {}
      this[namespace][method] = fn({
        makeRequest: this.transport.request.bind(this.transport),
        result: { body: null, statusCode: null, headers: null, warnings: null },
        ConfigurationError
      })
    } else {
      if (this[method] != null && opts.force !== true) {
        throw new Error(`The method "${method}" already exists`)
      }

      this[method] = fn({
        makeRequest: this.transport.request.bind(this.transport),
        result: { body: null, statusCode: null, headers: null, warnings: null },
        ConfigurationError
      })
    }

    this[kExtensions].push({ name, opts, fn })
  }

  child (opts) {
    // Merge the new options with the initial ones
    const options = Object.assign({}, this[kInitialOptions], opts)
    // Pass to the child client the parent instances that cannot be overriden
    options[kChild] = {
      connectionPool: this.connectionPool,
      serializer: this.serializer,
      eventEmitter: this[kEventEmitter],
      initialOptions: options
    }

    /* istanbul ignore else */
    if (options.auth !== undefined) {
      options.headers = prepareHeaders(options.headers, options.auth)
    }

    const client = new Client(options)
    // Add parent extensions
    if (this[kExtensions].length > 0) {
      this[kExtensions].forEach(({ name, opts, fn }) => {
        client.extend(name, opts, fn)
      })
    }
    return client
  }

  close (callback) {
    if (callback == null) {
      return new Promise((resolve, reject) => {
        this.close(resolve)
      })
    }
    debug('Closing the client')
    this.connectionPool.empty(callback)
  }
}

function getAuth (node) {
  if (Array.isArray(node)) {
    for (const url of node) {
      const auth = getUsernameAndPassword(url)
      if (auth.username !== '' && auth.password !== '') {
        return auth
      }
    }

    return null
  }

  const auth = getUsernameAndPassword(node)
  if (auth.username !== '' && auth.password !== '') {
    return auth
  }

  return null

  function getUsernameAndPassword (node) {
    /* istanbul ignore else */
    if (typeof node === 'string') {
      const { username, password } = new URL(node)
      return {
        username: decodeURIComponent(username),
        password: decodeURIComponent(password)
      }
    } else if (node.url instanceof URL) {
      return {
        username: decodeURIComponent(node.url.username),
        password: decodeURIComponent(node.url.password)
      }
    }
  }
}

const events = {
  RESPONSE: 'response',
  REQUEST: 'request',
  SNIFF: 'sniff',
  RESURRECT: 'resurrect',
  SERIALIZATION: 'serialization',
  DESERIALIZATION: 'deserialization'
}

module.exports = {
  Client,
  Transport,
  ConnectionPool,
  Connection,
  Serializer,
  events,
  errors
}


/***/ }),
/* 137 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/omrif/dev/auth0-logs-to-provider/node_modules/@elastic/elasticsearch/lib/Helpers.js Unexpected token (75:8)\nYou may need an appropriate loader to handle this file type.\n|    * @return {iterator} the async iterator\n|    */\n|   async * scrollSearch (params, options = {}) {\n|     if (this[kMetaHeader] !== null) {\n|       options.headers = options.headers || {}");

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const { stringify } = __webpack_require__(60)
const debug = __webpack_require__(14)('elasticsearch')
const sjson = __webpack_require__(203)
const { SerializationError, DeserializationError } = __webpack_require__(22)

class Serializer {
  serialize (object) {
    debug('Serializing', object)
    let json
    try {
      json = JSON.stringify(object)
    } catch (err) {
      throw new SerializationError(err.message, object)
    }
    return json
  }

  deserialize (json) {
    debug('Deserializing', json)
    let object
    try {
      object = sjson.parse(json)
    } catch (err) {
      throw new DeserializationError(err.message, json)
    }
    return object
  }

  ndserialize (array) {
    debug('ndserialize', array)
    if (Array.isArray(array) === false) {
      throw new SerializationError('The argument provided is not an array')
    }
    let ndjson = ''
    for (let i = 0, len = array.length; i < len; i++) {
      if (typeof array[i] === 'string') {
        ndjson += array[i] + '\n'
      } else {
        ndjson += this.serialize(array[i]) + '\n'
      }
    }
    return ndjson
  }

  qserialize (object) {
    debug('qserialize', object)
    if (object == null) return ''
    if (typeof object === 'string') return object
    // arrays should be serialized as comma separated list
    const keys = Object.keys(object)
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i]
      // elasticsearch will complain for keys without a value
      if (object[key] === undefined) {
        delete object[key]
      } else if (Array.isArray(object[key]) === true) {
        object[key] = object[key].join(',')
      }
    }
    return stringify(object)
  }
}

module.exports = Serializer


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const debug = __webpack_require__(14)('elasticsearch')
const os = __webpack_require__(218)
const { gzip, unzip, createGzip } = __webpack_require__(225)
const buffer = __webpack_require__(207)
const ms = __webpack_require__(217)
const {
  ConnectionError,
  RequestAbortedError,
  NoLivingConnectionsError,
  ResponseError,
  ConfigurationError
} = __webpack_require__(22)

const noop = () => {}

const clientVersion = __webpack_require__(56).version
const userAgent = `elasticsearch-js/${clientVersion} (${os.platform()} ${os.release()}-${os.arch()}; Node.js ${process.version})`
const MAX_BUFFER_LENGTH = buffer.constants.MAX_LENGTH
const MAX_STRING_LENGTH = buffer.constants.MAX_STRING_LENGTH

class Transport {
  constructor (opts) {
    if (typeof opts.compression === 'string' && opts.compression !== 'gzip') {
      throw new ConfigurationError(`Invalid compression: '${opts.compression}'`)
    }

    this.emit = opts.emit
    this.connectionPool = opts.connectionPool
    this.serializer = opts.serializer
    this.maxRetries = opts.maxRetries
    this.requestTimeout = toMs(opts.requestTimeout)
    this.suggestCompression = opts.suggestCompression === true
    this.compression = opts.compression || false
    this.context = opts.context || null
    this.headers = Object.assign({},
      { 'user-agent': userAgent },
      opts.suggestCompression === true ? { 'accept-encoding': 'gzip,deflate' } : null,
      lowerCaseHeaders(opts.headers)
    )
    this.sniffInterval = opts.sniffInterval
    this.sniffOnConnectionFault = opts.sniffOnConnectionFault
    this.sniffEndpoint = opts.sniffEndpoint
    this.generateRequestId = opts.generateRequestId || generateRequestId()
    this.name = opts.name
    this.opaqueIdPrefix = opts.opaqueIdPrefix

    this.nodeFilter = opts.nodeFilter || defaultNodeFilter
    if (typeof opts.nodeSelector === 'function') {
      this.nodeSelector = opts.nodeSelector
    } else if (opts.nodeSelector === 'round-robin') {
      this.nodeSelector = roundRobinSelector()
    } else if (opts.nodeSelector === 'random') {
      this.nodeSelector = randomSelector
    } else {
      this.nodeSelector = roundRobinSelector()
    }

    this._sniffEnabled = typeof this.sniffInterval === 'number'
    this._nextSniff = this._sniffEnabled ? (Date.now() + this.sniffInterval) : 0
    this._isSniffing = false

    if (opts.sniffOnStart === true) {
      this.sniff({ reason: Transport.sniffReasons.SNIFF_ON_START })
    }
  }

  request (params, options, callback) {
    options = options || {}
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    let p = null

    // promises support
    if (callback === undefined) {
      let onFulfilled = null
      let onRejected = null
      p = new Promise((resolve, reject) => {
        onFulfilled = resolve
        onRejected = reject
      })
      callback = function callback (err, result) {
        err ? onRejected(err) : onFulfilled(result)
      }
    }

    const meta = {
      context: null,
      request: {
        params: null,
        options: null,
        id: options.id || this.generateRequestId(params, options)
      },
      name: this.name,
      connection: null,
      attempts: 0,
      aborted: false
    }

    if (this.context != null && options.context != null) {
      meta.context = Object.assign({}, this.context, options.context)
    } else if (this.context != null) {
      meta.context = this.context
    } else if (options.context != null) {
      meta.context = options.context
    }

    const result = {
      body: null,
      statusCode: null,
      headers: null,
      meta
    }

    Object.defineProperty(result, 'warnings', {
      get () {
        return this.headers && this.headers.warning
          ? this.headers.warning.split(/(?!\B"[^"]*),(?![^"]*"\B)/)
          : null
      }
    })

    // We should not retry if we are sending a stream body, because we should store in memory
    // a copy of the stream to be able to send it again, but since we don't know in advance
    // the size of the stream, we risk to take too much memory.
    // Furthermore, copying everytime the stream is very a expensive operation.
    const maxRetries = isStream(params.body) || isStream(params.bulkBody)
      ? 0
      : (typeof options.maxRetries === 'number' ? options.maxRetries : this.maxRetries)
    const compression = options.compression !== undefined ? options.compression : this.compression
    let request = { abort: noop }
    const transportReturn = {
      then (onFulfilled, onRejected) {
        return p.then(onFulfilled, onRejected)
      },
      catch (onRejected) {
        return p.catch(onRejected)
      },
      abort () {
        meta.aborted = true
        request.abort()
        debug('Aborting request', params)
        return this
      },
      finally (onFinally) {
        return p.finally(onFinally)
      }
    }

    const makeRequest = () => {
      if (meta.aborted === true) {
        return process.nextTick(callback, new RequestAbortedError(), result)
      }
      meta.connection = this.getConnection({ requestId: meta.request.id })
      if (meta.connection == null) {
        return process.nextTick(callback, new NoLivingConnectionsError(), result)
      }
      this.emit('request', null, result)
      // perform the actual http request
      request = meta.connection.request(params, onResponse)
    }

    const onConnectionError = (err) => {
      if (err.name !== 'RequestAbortedError') {
        // if there is an error in the connection
        // let's mark the connection as dead
        this.connectionPool.markDead(meta.connection)

        if (this.sniffOnConnectionFault === true) {
          this.sniff({
            reason: Transport.sniffReasons.SNIFF_ON_CONNECTION_FAULT,
            requestId: meta.request.id
          })
        }

        // retry logic
        if (meta.attempts < maxRetries) {
          meta.attempts++
          debug(`Retrying request, there are still ${maxRetries - meta.attempts} attempts`, params)
          makeRequest()
          return
        }
      }

      err.meta = result
      this.emit('response', err, result)
      return callback(err, result)
    }

    const onResponse = (err, response) => {
      if (err !== null) {
        return onConnectionError(err)
      }

      result.statusCode = response.statusCode
      result.headers = response.headers

      if (options.asStream === true) {
        result.body = response
        this.emit('response', null, result)
        callback(null, result)
        return
      }

      const contentEncoding = (result.headers['content-encoding'] || '').toLowerCase()
      const isCompressed = contentEncoding.indexOf('gzip') > -1 || contentEncoding.indexOf('deflate') > -1

      /* istanbul ignore else */
      if (result.headers['content-length'] !== undefined) {
        const contentLength = Number(result.headers['content-length'])
        if (isCompressed && contentLength > MAX_BUFFER_LENGTH) {
          response.destroy()
          return onConnectionError(
            new RequestAbortedError(`The content length (${contentLength}) is bigger than the maximum allowed buffer (${MAX_BUFFER_LENGTH})`, result)
          )
        } else if (contentLength > MAX_STRING_LENGTH) {
          response.destroy()
          return onConnectionError(
            new RequestAbortedError(`The content length (${contentLength}) is bigger than the maximum allowed string (${MAX_STRING_LENGTH})`, result)
          )
        }
      }
      // if the response is compressed, we must handle it
      // as buffer for allowing decompression later
      let payload = isCompressed ? [] : ''
      const onData = isCompressed
        ? chunk => { payload.push(chunk) }
        : chunk => { payload += chunk }
      const onEnd = err => {
        response.removeListener('data', onData)
        response.removeListener('end', onEnd)
        response.removeListener('error', onEnd)
        response.removeListener('aborted', onAbort)

        if (err) {
          return onConnectionError(new ConnectionError(err.message))
        }

        if (isCompressed) {
          unzip(Buffer.concat(payload), onBody)
        } else {
          onBody(null, payload)
        }
      }

      const onAbort = () => {
        response.destroy()
        onEnd(new Error('Response aborted while reading the body'))
      }

      if (!isCompressed) {
        response.setEncoding('utf8')
      }

      this.emit('deserialization', null, result)
      response.on('data', onData)
      response.on('error', onEnd)
      response.on('end', onEnd)
      response.on('aborted', onAbort)
    }

    const onBody = (err, payload) => {
      if (err) {
        this.emit('response', err, result)
        return callback(err, result)
      }
      if (Buffer.isBuffer(payload)) {
        payload = payload.toString()
      }
      const isHead = params.method === 'HEAD'
      // we should attempt the payload deserialization only if:
      //    - a `content-type` is defined and is equal to `application/json`
      //    - the request is not a HEAD request
      //    - the payload is not an empty string
      if (result.headers['content-type'] !== undefined &&
          result.headers['content-type'].indexOf('application/json') > -1 &&
          isHead === false &&
          payload !== ''
      ) {
        try {
          result.body = this.serializer.deserialize(payload)
        } catch (err) {
          this.emit('response', err, result)
          return callback(err, result)
        }
      } else {
        // cast to boolean if the request method was HEAD
        result.body = isHead === true ? true : payload
      }

      // we should ignore the statusCode if the user has configured the `ignore` field with
      // the statusCode we just got or if the request method is HEAD and the statusCode is 404
      const ignoreStatusCode = (Array.isArray(options.ignore) && options.ignore.indexOf(result.statusCode) > -1) ||
        (isHead === true && result.statusCode === 404)

      if (ignoreStatusCode === false &&
         (result.statusCode === 502 || result.statusCode === 503 || result.statusCode === 504)) {
        // if the statusCode is 502/3/4 we should run our retry strategy
        // and mark the connection as dead
        this.connectionPool.markDead(meta.connection)
        // retry logic (we shoukd not retry on "429 - Too Many Requests")
        if (meta.attempts < maxRetries && result.statusCode !== 429) {
          meta.attempts++
          debug(`Retrying request, there are still ${maxRetries - meta.attempts} attempts`, params)
          makeRequest()
          return
        }
      } else {
        // everything has worked as expected, let's mark
        // the connection as alive (or confirm it)
        this.connectionPool.markAlive(meta.connection)
      }

      if (ignoreStatusCode === false && result.statusCode >= 400) {
        const error = new ResponseError(result)
        this.emit('response', error, result)
        callback(error, result)
      } else {
        // cast to boolean if the request method was HEAD
        if (isHead === true && result.statusCode === 404) {
          result.body = false
        }
        this.emit('response', null, result)
        callback(null, result)
      }
    }

    this.emit('serialization', null, result)
    const headers = Object.assign({}, this.headers, lowerCaseHeaders(options.headers))

    if (options.opaqueId !== undefined) {
      headers['x-opaque-id'] = this.opaqueIdPrefix !== null
        ? this.opaqueIdPrefix + options.opaqueId
        : options.opaqueId
    }

    // handle json body
    if (params.body != null) {
      if (shouldSerialize(params.body) === true) {
        try {
          params.body = this.serializer.serialize(params.body)
        } catch (err) {
          this.emit('request', err, result)
          process.nextTick(callback, err, result)
          return transportReturn
        }
      }

      if (params.body !== '') {
        headers['content-type'] = headers['content-type'] || 'application/json'
      }

    // handle ndjson body
    } else if (params.bulkBody != null) {
      if (shouldSerialize(params.bulkBody) === true) {
        try {
          params.body = this.serializer.ndserialize(params.bulkBody)
        } catch (err) {
          this.emit('request', err, result)
          process.nextTick(callback, err, result)
          return transportReturn
        }
      } else {
        params.body = params.bulkBody
      }
      if (params.body !== '') {
        headers['content-type'] = headers['content-type'] || 'application/x-ndjson'
      }
    }

    params.headers = headers
    // serializes the querystring
    if (options.querystring == null) {
      params.querystring = this.serializer.qserialize(params.querystring)
    } else {
      params.querystring = this.serializer.qserialize(
        Object.assign({}, params.querystring, options.querystring)
      )
    }

    // handles request timeout
    params.timeout = toMs(options.requestTimeout || this.requestTimeout)
    if (options.asStream === true) params.asStream = true
    meta.request.params = params
    meta.request.options = options

    // handle compression
    if (params.body !== '' && params.body != null) {
      if (isStream(params.body) === true) {
        if (compression === 'gzip') {
          params.headers['content-encoding'] = compression
          params.body = params.body.pipe(createGzip())
        }
        makeRequest()
      } else if (compression === 'gzip') {
        gzip(params.body, (err, buffer) => {
          /* istanbul ignore next */
          if (err) {
            this.emit('request', err, result)
            return callback(err, result)
          }
          params.headers['content-encoding'] = compression
          params.headers['content-length'] = '' + Buffer.byteLength(buffer)
          params.body = buffer
          makeRequest()
        })
      } else {
        params.headers['content-length'] = '' + Buffer.byteLength(params.body)
        makeRequest()
      }
    } else {
      makeRequest()
    }

    return transportReturn
  }

  getConnection (opts) {
    const now = Date.now()
    if (this._sniffEnabled === true && now > this._nextSniff) {
      this.sniff({ reason: Transport.sniffReasons.SNIFF_INTERVAL, requestId: opts.requestId })
    }
    return this.connectionPool.getConnection({
      filter: this.nodeFilter,
      selector: this.nodeSelector,
      requestId: opts.requestId,
      name: this.name,
      now
    })
  }

  sniff (opts, callback = noop) {
    if (this._isSniffing === true) return
    this._isSniffing = true
    debug('Started sniffing request')

    if (typeof opts === 'function') {
      callback = opts
      opts = { reason: Transport.sniffReasons.DEFAULT }
    }

    const { reason } = opts

    const request = {
      method: 'GET',
      path: this.sniffEndpoint
    }

    this.request(request, { id: opts.requestId }, (err, result) => {
      this._isSniffing = false
      if (this._sniffEnabled === true) {
        this._nextSniff = Date.now() + this.sniffInterval
      }

      if (err != null) {
        debug('Sniffing errored', err)
        result.meta.sniff = { hosts: [], reason }
        this.emit('sniff', err, result)
        return callback(err)
      }

      debug('Sniffing ended successfully', result.body)
      const protocol = result.meta.connection.url.protocol || /* istanbul ignore next */ 'http:'
      const hosts = this.connectionPool.nodesToHost(result.body.nodes, protocol)
      this.connectionPool.update(hosts)

      result.meta.sniff = { hosts, reason }
      this.emit('sniff', null, result)
      callback(null, hosts)
    })
  }
}

Transport.sniffReasons = {
  SNIFF_ON_START: 'sniff-on-start',
  SNIFF_INTERVAL: 'sniff-interval',
  SNIFF_ON_CONNECTION_FAULT: 'sniff-on-connection-fault',
  // TODO: find a better name
  DEFAULT: 'default'
}

function toMs (time) {
  if (typeof time === 'string') {
    return ms(time)
  }
  return time
}

function shouldSerialize (obj) {
  return typeof obj !== 'string' &&
         typeof obj.pipe !== 'function' &&
         Buffer.isBuffer(obj) === false
}

function isStream (obj) {
  return obj != null && typeof obj.pipe === 'function'
}

function defaultNodeFilter (node) {
  // avoid master only nodes
  if (node.roles.master === true &&
      node.roles.data === false &&
      node.roles.ingest === false) {
    return false
  }
  return true
}

function roundRobinSelector () {
  let current = -1
  return function _roundRobinSelector (connections) {
    if (++current >= connections.length) {
      current = 0
    }
    return connections[current]
  }
}

function randomSelector (connections) {
  const index = Math.floor(Math.random() * connections.length)
  return connections[index]
}

function generateRequestId () {
  const maxInt = 2147483647
  let nextReqId = 0
  return function genReqId (params, options) {
    return (nextReqId = (nextReqId + 1) & maxInt)
  }
}

function lowerCaseHeaders (oldHeaders) {
  if (oldHeaders == null) return oldHeaders
  const newHeaders = {}
  for (const header in oldHeaders) {
    newHeaders[header.toLowerCase()] = oldHeaders[header]
  }
  return newHeaders
}

module.exports = Transport
module.exports.internals = {
  defaultNodeFilter,
  roundRobinSelector,
  randomSelector,
  generateRequestId,
  lowerCaseHeaders
}


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const BaseConnectionPool = __webpack_require__(23)

class CloudConnectionPool extends BaseConnectionPool {
  constructor (opts) {
    super(opts)
    this.cloudConnection = null
  }

  /**
   * Returns the only cloud connection.
   *
   * @returns {object} connection
   */
  getConnection () {
    return this.cloudConnection
  }

  /**
   * Empties the connection pool.
   *
   * @returns {ConnectionPool}
   */
  empty (callback) {
    super.empty(() => {
      this.cloudConnection = null
      callback()
    })
  }

  /**
   * Update the ConnectionPool with new connections.
   *
   * @param {array} array of connections
   * @returns {ConnectionPool}
   */
  update (connections) {
    super.update(connections)
    this.cloudConnection = this.connections[0]
    return this
  }
}

module.exports = CloudConnectionPool


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const BaseConnectionPool = __webpack_require__(23)
const assert = __webpack_require__(204)
const debug = __webpack_require__(14)('elasticsearch')
const Connection = __webpack_require__(21)
const noop = () => {}

class ConnectionPool extends BaseConnectionPool {
  constructor (opts) {
    super(opts)

    this.dead = []
    // the resurrect timeout is 60s
    this.resurrectTimeout = 1000 * 60
    // number of consecutive failures after which
    // the timeout doesn't increase
    this.resurrectTimeoutCutoff = 5
    this.pingTimeout = opts.pingTimeout
    this._sniffEnabled = opts.sniffEnabled || false

    const resurrectStrategy = opts.resurrectStrategy || 'ping'
    this.resurrectStrategy = ConnectionPool.resurrectStrategies[resurrectStrategy]
    assert(
      this.resurrectStrategy != null,
      `Invalid resurrection strategy: '${resurrectStrategy}'`
    )
  }

  /**
   * Marks a connection as 'alive'.
   * If needed removes the connection from the dead list
   * and then resets the `deadCount`.
   *
   * @param {object} connection
   */
  markAlive (connection) {
    const { id } = connection
    debug(`Marking as 'alive' connection '${id}'`)
    const index = this.dead.indexOf(id)
    if (index > -1) this.dead.splice(index, 1)
    connection.status = Connection.statuses.ALIVE
    connection.deadCount = 0
    connection.resurrectTimeout = 0
    return this
  }

  /**
   * Marks a connection as 'dead'.
   * If needed adds the connection to the dead list
   * and then increments the `deadCount`.
   *
   * @param {object} connection
   */
  markDead (connection) {
    const { id } = connection
    debug(`Marking as 'dead' connection '${id}'`)
    if (this.dead.indexOf(id) === -1) {
      // It might happen that `markDead` is called jsut after
      // a pool update, and in such case we will add to the dead
      // list a node that no longer exist. The following check verify
      // that the connection is still part of the pool before
      // marking it as dead.
      for (let i = 0; i < this.size; i++) {
        if (this.connections[i].id === id) {
          this.dead.push(id)
          break
        }
      }
    }
    connection.status = Connection.statuses.DEAD
    connection.deadCount++
    // resurrectTimeout formula:
    // `resurrectTimeout * 2 ** min(deadCount - 1, resurrectTimeoutCutoff)`
    connection.resurrectTimeout = Date.now() + this.resurrectTimeout * Math.pow(
      2, Math.min(connection.deadCount - 1, this.resurrectTimeoutCutoff)
    )

    // sort the dead list in ascending order
    // based on the resurrectTimeout
    this.dead.sort((a, b) => {
      const conn1 = this.connections.find(c => c.id === a)
      const conn2 = this.connections.find(c => c.id === b)
      return conn1.resurrectTimeout - conn2.resurrectTimeout
    })

    return this
  }

  /**
   * If enabled, tries to resurrect a connection with the given
   * resurrect strategy ('ping', 'optimistic', 'none').
   *
   * @param {object} { now, requestId }
   * @param {function} callback (isAlive, connection)
   */
  resurrect (opts, callback = noop) {
    if (this.resurrectStrategy === 0 || this.dead.length === 0) {
      debug('Nothing to resurrect')
      callback(null, null)
      return
    }

    // the dead list is sorted in ascending order based on the timeout
    // so the first element will always be the one with the smaller timeout
    const connection = this.connections.find(c => c.id === this.dead[0])
    if ((opts.now || Date.now()) < connection.resurrectTimeout) {
      debug('Nothing to resurrect')
      callback(null, null)
      return
    }

    const { id } = connection

    // ping strategy
    if (this.resurrectStrategy === 1) {
      connection.request({
        method: 'HEAD',
        path: '/',
        timeout: this.pingTimeout
      }, (err, response) => {
        let isAlive = true
        const statusCode = response !== null ? response.statusCode : 0
        if (err != null ||
           (statusCode === 502 || statusCode === 503 || statusCode === 504)) {
          debug(`Resurrect: connection '${id}' is still dead`)
          this.markDead(connection)
          isAlive = false
        } else {
          debug(`Resurrect: connection '${id}' is now alive`)
          this.markAlive(connection)
        }
        this.emit('resurrect', null, {
          strategy: 'ping',
          name: opts.name,
          request: { id: opts.requestId },
          isAlive,
          connection
        })
        callback(isAlive, connection)
      })
    // optimistic strategy
    } else {
      debug(`Resurrect: optimistic resurrection for connection '${id}'`)
      this.dead.splice(this.dead.indexOf(id), 1)
      connection.status = Connection.statuses.ALIVE
      this.emit('resurrect', null, {
        strategy: 'optimistic',
        name: opts.name,
        request: { id: opts.requestId },
        isAlive: true,
        connection
      })
      callback(true, connection) // eslint-disable-line
    }
  }

  /**
   * Returns an alive connection if present,
   * otherwise returns a dead connection.
   * By default it filters the `master` only nodes.
   * It uses the selector to choose which
   * connection return.
   *
   * @param {object} options (filter and selector)
   * @returns {object|null} connection
   */
  getConnection (opts = {}) {
    const filter = opts.filter || (() => true)
    const selector = opts.selector || (c => c[0])

    this.resurrect({
      now: opts.now,
      requestId: opts.requestId,
      name: opts.name
    })

    const noAliveConnections = this.size === this.dead.length

    // TODO: can we cache this?
    const connections = []
    for (let i = 0; i < this.size; i++) {
      const connection = this.connections[i]
      if (noAliveConnections || connection.status === Connection.statuses.ALIVE) {
        if (filter(connection) === true) {
          connections.push(connection)
        }
      }
    }

    if (connections.length === 0) return null

    return selector(connections)
  }

  /**
   * Empties the connection pool.
   *
   * @returns {ConnectionPool}
   */
  empty (callback) {
    super.empty(() => {
      this.dead = []
      callback()
    })
  }

  /**
   * Update the ConnectionPool with new connections.
   *
   * @param {array} array of connections
   * @returns {ConnectionPool}
   */
  update (connections) {
    super.update(connections)
    this.dead = []
    return this
  }
}

ConnectionPool.resurrectStrategies = {
  none: 0,
  ping: 1,
  optimistic: 2
}

module.exports = ConnectionPool


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const BaseConnectionPool = __webpack_require__(23)
const ConnectionPool = __webpack_require__(141)
const CloudConnectionPool = __webpack_require__(140)

module.exports = {
  BaseConnectionPool,
  ConnectionPool,
  CloudConnectionPool
}


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

const decode = __webpack_require__(57);
const expressJwt = __webpack_require__(58);
const tools = __webpack_require__(0);
const conditional = __webpack_require__(45);

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.secret === null || options.secret === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.secret !== 'string' || options.secret.length === 0) {
    throw new tools.ArgumentError('The provided secret is invalid: ' + options.secret);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  if (options.baseUrl === null || options.baseUrl === undefined) {
    throw new tools.ArgumentError('Must provide a valid base URL');
  }

  if (typeof options.baseUrl !== 'string' || options.baseUrl.length === 0) {
    throw new tools.ArgumentError('The provided base URL is invalid: ' + options.baseUrl);
  }

  const validateToken = expressJwt({
    audience: options.audience,
    issuer: options.baseUrl,
    secret: options.secret,
    algorithms: [ 'HS256' ],
    credentialsRequired: options.credentialsRequired || true
  });

  return function(req, res, next) {
    validateToken(req, res, function(err) {
      if (err) {
        return next(err);
      }

      if (options.onLoginSuccess) {
        return options.onLoginSuccess(req, res, next);
      }

      return next();
    });
  };
};

module.exports.optional = function(options) {
  const mw = module.exports(options);
  return conditional(
    function(req) {
      if (req && req.headers && req.headers.authorization && req.headers.authorization.indexOf('Bearer ') === 0) {
        try {
          const decodedToken = decode(req.headers.authorization.split(' ')[1]);
          return decodedToken && decodedToken.iss === options.baseUrl;
        } catch (ex) {
          return false;
        }
      }

      return false;
    },
    mw
  );
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

const decode = __webpack_require__(57);
const jwt = __webpack_require__(58);
const jwksRsa = __webpack_require__(214);
const tools = __webpack_require__(0);
const conditional = __webpack_require__(45);
const UnauthorizedError = __webpack_require__(0).UnauthorizedError;

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.domain === null || options.domain === undefined) {
    throw new tools.ArgumentError('Must provide a valid domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid audience');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  const validateToken = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://' + options.domain + '/.well-known/jwks.json',
      handleSigningKeyError: function(err, cb) {
        if (err instanceof jwksRsa.SigningKeyNotFoundError) {
          return cb(new UnauthorizedError('A token was provided with an invalid kid'));
        }

        return cb(err);
      }
    }),

    // Validate the audience and the issuer.
    audience: options.audience,
    issuer: 'https://' + options.domain + '/',
    algorithms: [ 'RS256' ],

    // Optionally require authentication
    credentialsRequired: (options && options.credentialsRequired) || true
  });

  return function(req, res, next) {
    validateToken(req, res, function(err) {
      if (err) {
        return next(err);
      }

      if (options.onLoginSuccess) {
        return options.onLoginSuccess(req, res, next);
      }

      return next();
    });
  };
};

module.exports.optional = function(options) {
  const mw = module.exports(options);
  return conditional(
    function(req) {
      if (req && req.headers && req.headers.authorization && req.headers.authorization.indexOf('Bearer ') === 0) {
        try {
          const decodedToken = decode(req.headers.authorization.split(' ')[1]);
          return decodedToken && decodedToken.iss === 'https://' + options.domain + '/';
        } catch (ex) {
          return false;
        }
      }

      return false;
    },
    mw
  );
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(errorLogger) {
  return function(err, req, res, next) { // eslint-disable-line no-unused-vars
    if (errorLogger) {
      errorLogger(err);
    }

    if (err && err.status) {
      res.status(err.status);
      return res.json({
        error: err.code || err.name,
        message: err.message || err.name
      });
    }

    res.status(err.status || 500);
    if (true) {
      return res.json({
        error: 'InternalServerError',
        message: err.message || err.name
      });
    }

    return res.json({
      error: 'InternalServerError',
      message: err.message || err.name,
      details: {
        message: err.message,
        status: err.status,
        stack: err.stack
      }
    });
  };
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.authenticateAdmins = __webpack_require__(143);
module.exports.authenticateUsers = __webpack_require__(144);
module.exports.requireAuthentication = __webpack_require__(148);
module.exports.errorHandler = __webpack_require__(145);
module.exports.managementApiClient = __webpack_require__(147);
module.exports.validateHookToken = __webpack_require__(149);
module.exports.webtaskConfig = __webpack_require__(150);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);

module.exports = function(handlerOptions) {
  return function(req, res, next) {
    const request = req;
    const isAdministrator = req.user && req.user.access_token && req.user.access_token.length;
    const options = !isAdministrator ? handlerOptions : {
      domain: handlerOptions.domain,
      accessToken: req.user.access_token
    };

    tools.managementApi.getClient(options)
      .then(function(auth0) {
        request.auth0 = auth0;
        next();
        return null;
      })
      .catch(function(err) {
        next(err);
      });
  };
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

const UnauthorizedError = __webpack_require__(0).UnauthorizedError;

module.exports = function(req, res, next) {
  if (!req.user) {
    return next(new UnauthorizedError('Authentication required for this endpoint.'));
  }

  return next();
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);

module.exports = function(domain, webtaskUrl, extensionSecret) {
  if (domain === null || domain === undefined) {
    throw new tools.ArgumentError('Must provide the domain');
  }

  if (typeof domain !== 'string' || domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + domain);
  }

  if (webtaskUrl === null || webtaskUrl === undefined) {
    throw new tools.ArgumentError('Must provide the webtaskUrl');
  }

  if (typeof webtaskUrl !== 'string' || webtaskUrl.length === 0) {
    throw new tools.ArgumentError('The provided webtaskUrl is invalid: ' + webtaskUrl);
  }

  if (extensionSecret === null || extensionSecret === undefined) {
    throw new tools.ArgumentError('Must provide the extensionSecret');
  }

  if (typeof extensionSecret !== 'string' || extensionSecret.length === 0) {
    throw new tools.ArgumentError('The provided extensionSecret is invalid: ' + extensionSecret);
  }

  return function(hookPath) {
    if (hookPath === null || hookPath === undefined) {
      throw new tools.ArgumentError('Must provide the hookPath');
    }

    if (typeof hookPath !== 'string' || hookPath.length === 0) {
      throw new tools.ArgumentError('The provided hookPath is invalid: ' + hookPath);
    }

    return function(req, res, next) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        const token = req.headers.authorization.split(' ')[1];

        try {
          if (tools.validateHookToken(domain, webtaskUrl, hookPath, extensionSecret, token)) {
            return next();
          }
        } catch (e) {
          return next(e);
        }
      }

      return next(new tools.HookTokenError('Hook token missing for the call to: ' + hookPath));
    };
  };
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);

module.exports = function(config) {
  return function(req, res, next) {
    if (req.webtaskContext) {
      config.setProvider(tools.configProvider.fromWebtaskContext(req.webtaskContext));
    }

    return next();
  };
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(15);
const crypto = __webpack_require__(209);
const cookieParser = __webpack_require__(208);
const jwt = __webpack_require__(213);
const tools = __webpack_require__(0);

const urlHelpers = __webpack_require__(40);

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.secret === null || options.secret === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.secret !== 'string' || options.secret.length === 0) {
    throw new tools.ArgumentError('The provided secret is invalid: ' + options.secret);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid audience');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  if (options.rta === null || options.rta === undefined) {
    throw new tools.ArgumentError('Must provide a valid rta');
  }

  if (typeof options.rta !== 'string' || options.rta.length === 0) {
    throw new tools.ArgumentError('The provided rta is invalid: ' + options.rta);
  }

  if (options.domain === null || options.domain === undefined) {
    throw new tools.ArgumentError('Must provide a valid domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.baseUrl === null || options.baseUrl === undefined) {
    throw new tools.ArgumentError('Must provide a valid base URL');
  }

  if (typeof options.baseUrl !== 'string' || options.baseUrl.length === 0) {
    throw new tools.ArgumentError('The provided base URL is invalid: ' + options.baseUrl);
  }

  if (options.clientName === null || options.clientName === undefined) {
    throw new tools.ArgumentError('Must provide a valid client name');
  }

  if (typeof options.clientName !== 'string' || options.clientName.length === 0) {
    throw new tools.ArgumentError('The provided client name is invalid: ' + options.clientName);
  }

  if (typeof options.storageType !== 'undefined' && options.storageType !== 'sessionStorage' && options.storageType !== 'localStorage') {
    throw new tools.ArgumentError('The storageType must be either "sessionStorage" or "localStorage". Incorrect storageType: ' + options.storageType);
  }

  const stateKey = options.stateKey || 'state';
  const nonceKey = options.nonceKey || 'nonce';
  const urlPrefix = options.urlPrefix || '';
  const storageType = options.storageType || 'sessionStorage';
  const storageKey = options.storageKey || options.sessionStorageKey || 'apiToken';
  const sessionManager = new tools.SessionManager(options.rta, options.domain, options.baseUrl);

  const router = express.Router();
  router.get(urlPrefix + '/login', function(req, res) {
    const basePath = urlHelpers.getBasePath(req);
    const state = crypto.randomBytes(16).toString('hex');
    const nonce = crypto.randomBytes(16).toString('hex');  
    const basicAttr = {
      httpOnly: true,
      path: basePath
    };

    res.cookie(stateKey, state, Object.assign({}, basicAttr, { sameSite: 'None', secure: true }));
    res.cookie(nonceKey, nonce, Object.assign({}, basicAttr, { sameSite: 'None', secure: true }));

    // create legacy cookie
    res.cookie(stateKey + '_compat', state, basicAttr);
    res.cookie(nonceKey + '_compat', nonce, basicAttr);
    
    const redirectTo = sessionManager.createAuthorizeUrl({
      redirectUri: urlHelpers.getBaseUrl(req) + urlPrefix + '/login/callback',
      scopes: options.scopes,
      expiration: options.expiration,
      nonce: nonce,
      state: state
    });
    res.redirect(redirectTo);
  });

  router.post(urlPrefix + '/login/callback', cookieParser(), function(req, res, next) {
    var decoded;

    try {
      decoded = jwt.decode(req.body.id_token);
    } catch (e) {
      decoded = null;
    }

    if (!decoded) {
      return next(new tools.ValidationError('Login failed. Invalid token.'));
    }

    if ((req.cookies && req.cookies[nonceKey] && req.cookies[nonceKey] !== decoded.nonce) || (req.cookies && req.cookies[nonceKey + '_compat'] && req.cookies[nonceKey + '_compat'] !== decoded.nonce)) {
      return next(new tools.ValidationError('Login failed. Nonce mismatch.'));
    }
    if ((req.cookies && req.cookies[stateKey] && req.cookies[stateKey] !== req.body.state) || (req.cookies && req.cookies[stateKey + '_compat'] && req.cookies[stateKey + '_compat'] !== req.body.state)) {
      return next(new tools.ValidationError('Login failed. State mismatch.'));
    }

    const basePath = urlHelpers.getBasePath(req);
    const session = sessionManager.create(req.body.id_token, req.body.access_token, {
      secret: options.secret,
      issuer: options.baseUrl,
      audience: options.audience,
      noAccessToken: options.noAccessToken
    });

    return session
      .then(function(token) {
        res.clearCookie(stateKey, { path: basePath });
        res.clearCookie(nonceKey, { path: basePath });
        res.clearCookie(stateKey + '_compat', { path: basePath });
        res.clearCookie(nonceKey + '_compat', { path: basePath });
        res.header('Content-Type', 'text/html');
        res.status(200).send('<html>' +
          '<head>' +
          '<script type="text/javascript">' +
          storageType + '.setItem("' + storageKey + '", "' + token + '");' +
          'window.location.href = "' + urlHelpers.getBaseUrl(req) + '";' +
          '</script>' +
          '</head>' +
          '</html>');
      })
      .catch(function(err) {
        next(err);
      });
  });

  router.get(urlPrefix + '/logout', function(req, res) {
    const basePath = urlHelpers.getBasePath(req);
    const encodedBaseUrl = encodeURIComponent(urlHelpers.getBaseUrl(req));
    res.clearCookie(stateKey, { path: basePath });
    res.clearCookie(nonceKey, { path: basePath });
    res.clearCookie(stateKey + '_compat', { path: basePath });
    res.clearCookie(nonceKey + '_compat', { path: basePath });
    res.header('Content-Type', 'text/html');
    res.status(200).send(
      '<html>' +
      '<head>' +
      '<script type="text/javascript">' +
      storageType + '.removeItem("' + storageKey + '");' +
      'window.location.href = "https://' + options.rta + '/v2/logout/?returnTo=' + encodedBaseUrl + '&client_id=' + encodedBaseUrl + '";' +
      '</script>' +
      '</head>' +
      '</html>'
    );
  });

  router.get('/.well-known/oauth2-client-configuration', function(req, res) {
    res.header('Content-Type', 'application/json');
    res.status(200).send({
      redirect_uris: [ urlHelpers.getBaseUrl(req) + urlPrefix + '/login/callback' ],
      client_name: options.clientName,
      post_logout_redirect_uris: [ urlHelpers.getBaseUrl(req) ]
    });
  });

  return router;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.dashboardAdmins = __webpack_require__(151);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);
const Webtask = __webpack_require__(222);

module.exports.createServer = function(cb) {
  const serverFn = tools.createServer(cb);
  var dispatchFn = null;

  return Webtask.fromExpress(function requestHandler(req, res) {
    if (!dispatchFn) {
      dispatchFn = serverFn(req.webtaskContext);
    }

    return dispatchFn(req, res);
  });
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(39);
var Promise = __webpack_require__(38);
var tools = __webpack_require__(0);

var logTypes = __webpack_require__(43);
var LogsApiStream = __webpack_require__(44);
var StorageProvider = __webpack_require__(156);

function LogsProcessor(storageContext, options) {
  if (options === null || options === undefined) {
    throw new tools.ArgumentError('Must provide an options object');
  }

  this.start = new Date().getTime();
  this.storage = new StorageProvider(storageContext);
  this.options = _.assign({}, {
    batchSize: 100,
    maxRetries: 5,
    maxRunTimeSeconds: 22
  }, options);
}

LogsProcessor.prototype.hasTimeLeft = function (start, responseCount) {
  var now = new Date().getTime();
  var averageTime = (now - start) / responseCount;
  var limit = this.options.maxRunTimeSeconds;
  var timeLeft = start + limit * 1000 - now;

  if (this.options.logger) {
    this.options.logger.debug(timeLeft / 1000 + ' seconds run time left, average response time is ' + averageTime / 1000 + ' seconds.');
  }

  return timeLeft >= averageTime;
};

LogsProcessor.prototype.getLogFilter = function (options) {
  var types = options.logTypes || [];
  if (options.logLevel) {
    var typesFromLevel = _.map(logTypes, function (data, type) {
      var logType = data;
      logType.type = type;
      return logType;
    });

    types = types.concat(_.map(_.filter(typesFromLevel, function (type) {
      return type.level >= options.logLevel;
    }), 'type'));
  }

  return _.uniq(types);
};

LogsProcessor.prototype.getReport = function (start, end) {
  var startStamp = new Date(start).getTime();
  var endStamp = end ? new Date(end).getTime() : new Date().getTime();

  return this.storage.read().then(function (data) {
    return _.filter(data.logs, function (log) {
      var logStart = new Date(log.start).getTime();
      var logEnd = new Date(log.end).getTime();

      return logStart >= startStamp && logEnd <= endStamp;
    });
  }).then(function (logs) {
    var result = {
      type: 'report',
      processed: 0,
      warnings: 0,
      errors: 0,
      checkpoint: ''
    };

    _.each(logs, function (log) {
      result.processed += log.logsProcessed;
      result.checkpoint = log.checkpoint;

      if (log.error) {
        result.errors += 1;
      }

      if (log.warning) {
        result.warnings += 1;
      }
    });

    return result;
  });
};

LogsProcessor.prototype.createStream = function (options) {
  var _this = this;

  return this.storage.getCheckpoint(options.startFrom).then(function (startCheckpoint) {
    if (options.logger) {
      options.logger.debug('Starting logs processor from checkpoint:', startCheckpoint);
    }

    return new LogsApiStream({
      checkpointId: startCheckpoint,
      types: _this.getLogFilter(options),
      start: _this.start,
      maxRetries: options.maxRetries,
      maxRunTimeSeconds: options.maxRunTimeSeconds,
      domain: options.domain,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      tokenCache: _this.storage,
      logger: options.logger
    });
  });
};

LogsProcessor.prototype.run = function (handler) {
  var _this2 = this;

  var handlerAsync = Promise.promisify(handler);

  return new Promise(function (resolve, reject) {
    var start = _this2.start;
    var responseCount = 0;
    var retries = 0;
    var lastLogDate = 0;
    var logsBatch = [];
    var storage = _this2.storage;
    var options = _this2.options;
    var batchSize = options.batchSize;
    var maxRetries = options.maxRetries;

    // Stop the run because it failed.
    var runFailed = function runFailed(error, status, checkpoint) {
      if (options.logger) {
        options.logger.debug('Processor failed:', error);
      }

      status.error = error;

      storage.done(status, checkpoint).then(function () {
        return resolve({ status: status, checkpoint: checkpoint });
      }).catch(reject);
    };

    // The run ended successfully.
    var runSuccess = function runSuccess(status, checkpoint) {
      if (options.logger) {
        options.logger.debug('Processor run complete. Logs processed:', status.logsProcessed);
      }

      if (checkpoint !== status.startCheckpoint) {
        var week = 604800000;
        var currentDate = new Date().getTime();
        var timeDiff = currentDate - lastLogDate;

        if (timeDiff >= week) {
          status.warning = 'Logs are outdated more than for week. Last processed log has date is ' + new Date(lastLogDate);
        }

        return storage.done(status, checkpoint).then(function () {
          return resolve({ status: status, checkpoint: checkpoint });
        }).catch(reject);
      }

      return resolve({ status: status, checkpoint: checkpoint });
    };

    // Figure out how big we want the batch of logs to be.
    var getNextLimit = function getNextLimit() {
      var limit = batchSize;
      limit -= logsBatch.length;
      if (limit > 1000) {
        limit = 1000;
      }
      return limit;
    };

    // Retry the process if it failed.
    var retryProcess = function retryProcess(err, stream) {
      if (!_this2.hasTimeLeft(start, responseCount)) {
        return Promise.reject({
          err: err,
          status: stream.status,
          checkpoint: stream.previousCheckpoint,
          unrecoverable: true
        });
      }

      if (retries < maxRetries) {
        retries += 1;
        return handlerAsync(logsBatch);
      }

      var error = [err, 'Skipping logs from ' + stream.previousCheckpoint + ' to ' + stream.lastCheckpoint + ' after ' + maxRetries + ' retries.'];

      if (options.logger) {
        options.logger.error(error[0] && error[0].message || error[0], error[1]);
      }

      // We're giving up.
      return Promise.reject({
        err: error,
        status: stream.status,
        checkpoint: stream.lastCheckpoint,
        unrecoverable: true
      });
    };

    _this2.createStream(options).then(function (stream) {
      return new Promise(function (streamResolve, streamReject) {
        var nextLimit = getNextLimit();
        var timedOut = false;

        if (options.logger) {
          options.logger.debug('Loading next batch of logs. Next limit:', nextLimit);
        }

        // Get the first batch.
        stream.next(nextLimit);

        // Process batch of logs.
        stream.on('data', function (data) {
          var logs = data.logs;
          logsBatch = logsBatch.concat(logs);

          responseCount++;

          if (logs && logs.length) {
            lastLogDate = new Date(logs[logs.length - 1].date).getTime();
          }

          // TODO: At some point, even if the batch is too small, we need to ship the logs.
          if (logsBatch.length < batchSize && _this2.hasTimeLeft(start, responseCount)) {
            return stream.next(getNextLimit());
          }

          var processComplete = function processComplete(err) {
            if (err) {
              if (err.unrecoverable) {
                return streamReject(err);
              }

              return retryProcess(err.err || err, stream).then(function () {
                return processComplete();
              }).catch(function (err) {
                return processComplete(err);
              });
            }

            logsBatch = [];

            if (!_this2.hasTimeLeft(start, responseCount)) {
              if (options.logger) {
                options.logger.debug('No time left for additional requests');
              }

              return stream.done();
            }

            stream.batchSaved();
            return stream.next(getNextLimit());
          };

          return handlerAsync(logsBatch).then(function () {
            return processComplete();
          }).catch(function (err) {
            return processComplete(err);
          });
        });

        var handleEnd = function handleEnd() {
          var processComplete = function processComplete(err) {
            if (err) {
              if (err.unrecoverable) {
                return streamReject(err);
              }

              return retryProcess(err.err || err, stream).then(function () {
                return processComplete();
              }).catch(function (err) {
                return processComplete(err);
              });
            }

            stream.batchSaved();
            return streamResolve({
              status: stream.status,
              checkpoint: stream.lastCheckpoint
            });
          };

          return handlerAsync(logsBatch).then(function () {
            return processComplete();
          }).catch(function (err) {
            return processComplete(err);
          });
        };

        new Promise(function (endResolve) {
          stream.on('end', endResolve);
        }).then(handleEnd);

        // An error occured when processing the stream.
        stream.on('error', function (err) {
          return streamReject({
            err: err,
            status: stream.status,
            checkpoint: stream.previousCheckpoint
          });
        });
      });
    }).then(function (result) {
      return runSuccess(result.status, result.checkpoint);
    }).catch(function (result) {
      return runFailed(result.err, result.status, result.checkpoint);
    });
  });
};

module.exports = LogsProcessor;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(24);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(167);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Promise = __webpack_require__(38);
var request = __webpack_require__(61);

function SlackReporter(options) {
  this.options = options || {};
}

SlackReporter.prototype.send = function (status, checkpoint) {
  if (!status || (typeof status === 'undefined' ? 'undefined' : (0, _typeof3.default)(status)) !== 'object') {
    throw new Error('object status is required');
  }

  var options = this.options;
  var msg = this.createMessage(this.options, status, checkpoint);

  return new Promise(function (resolve, reject) {
    if (!options.hook) {
      return resolve();
    }

    return request.post(options.hook).send(msg).set('Accept', 'application/json').end(function (err) {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
};

SlackReporter.prototype.createMessage = function (options, status, checkpoint) {
  var msg = {
    username: options.username || 'auth0-logger',
    icon_emoji: options.icon || ':rocket:',
    attachments: []
  };

  var title = options.title || 'Auth0 Logger';
  var defaultText = status.type === 'report' ? title + ' Daily Report' : status.error ? title + ' Error' : title + ' Success';
  var error = status.error || null;

  var defaultTemplate = {
    fallback: options.fallback || defaultText,
    text: options.text || defaultText,
    error_field: { title: 'Error', value: (0, _stringify2.default)(error), short: false }
  };

  if (status.type === 'report') {
    defaultTemplate.fields = [{ title: 'Logs processed', value: status.processed, short: true }, { title: 'Warnings', value: status.warnings, short: true }, { title: 'Errors', value: status.errors, short: true }, { title: 'Next checkpoint', value: status.checkpoint, short: true }];
  } else {
    defaultTemplate.fields = [{ title: 'Start time', value: status.start, short: true }, { title: 'End time', value: status.end, short: true }, { title: 'Logs processed', value: status.logsProcessed, short: true }, { title: 'Next checkpoint', value: checkpoint, short: true }];
  }

  var details = options.url ? ' (<' + options.url + '|Details>)' : null;

  var fields = defaultTemplate.fields;

  if (status.error) {
    fields.push(defaultTemplate.error_field);
  }

  // Todo: this should handle error colors/warning colors also.
  msg.attachments.push({
    color: status.error ? '#d13f42' : '#7cd197',
    fallback: defaultTemplate.fallback,
    text: defaultTemplate.fallback + (details || ''),
    fields: fields
  });

  return msg;
};

module.exports = SlackReporter;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(24);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assign = __webpack_require__(39).assign;
var ArgumentError = __webpack_require__(0).ArgumentError;

function StorageProvider(storageContext, options) {
  if (!storageContext) {
    throw new ArgumentError('The storageContext is required');
  }

  this.storageContext = storageContext;
  this.options = assign({}, { limit: 400 }, options);
}

StorageProvider.prototype.read = function () {
  var self = this;
  return self.storageContext.read().then(function (contents) {
    var data = contents || {};
    data.logs = data.logs || [];
    return data;
  });
};

StorageProvider.prototype.write = function (data) {
  var self = this;
  return self.storageContext.write(data);
};

StorageProvider.prototype.getCheckpoint = function (startFrom) {
  var self = this;
  return self.read().then(function (data) {
    if (startFrom && startFrom !== data.startFrom) {
      data.startFrom = startFrom;
      data.checkpointId = startFrom;

      return self.write(data).then(function () {
        return data.checkpointId || startFrom || null;
      });
    }

    return data.checkpointId;
  });
};

StorageProvider.prototype.getToken = function () {
  return this.read().then(function (data) {
    return data.logs_access_token || null;
  });
};

StorageProvider.prototype.setToken = function (token) {
  var self = this;
  return self.read().then(function (data) {
    data.logs_access_token = token;
    return self.write(data);
  });
};

StorageProvider.prototype.done = function (status, checkpointId) {
  var self = this;
  return self.read().then(function (data) {
    var storageSize = Buffer.byteLength((0, _stringify2.default)(data), 'utf8');
    if (storageSize >= self.options.limit * 1024 && data.logs && data.logs.length) {
      data.logs.splice(0, 5);
    }

    status.checkpoint = checkpointId;

    data.logs.push(status);
    data.checkpointId = checkpointId;

    return self.write(data);
  });
};

module.exports = StorageProvider;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(215);
var loggingTools = __webpack_require__(42);

var logger = __webpack_require__(11);
var config = __webpack_require__(2);
var sender = __webpack_require__(158);

var MS_PER_S = 1000;
var NS_PER_MS = 1000000;

module.exports = function (storage) {
  return function (req, res, next) {
    var wtBody = req.webtaskContext && req.webtaskContext.body || req.body || {};
    var wtHead = req.webtaskContext && req.webtaskContext.headers || {};
    var isCron = wtBody.schedule && wtBody.state === 'active' || wtHead.referer === 'https://manage.auth0.com/' && wtHead['if-none-match'];

    if (!isCron) {
      return next();
    }

    var sendLogs = sender();

    var updateLastRun = function updateLastRun() {
      return storage.read().then(function (data) {
        data.lastRun = new Date();
        return storage.write(data);
      });
    };

    var provider = "elasticcloud";

    var onLogsReceived = function onLogsReceived(logs, callback) {
      var startTime = process.hrtime();

      var requestFinished = function requestFinished(err) {
        var elapsedTime = process.hrtime(startTime);
        var elapsedMillis = elapsedTime[0] * MS_PER_S + elapsedTime[1] / NS_PER_MS;

        logger.info('Finished request to \'' + provider + '\' in ' + elapsedMillis + 'ms.');

        callback(err);
      };

      sendLogs(logs, requestFinished);
    };

    var slackConfig = {
      hook: config('SLACK_INCOMING_WEBHOOK_URL'),
      username: 'auth0-logs-to-' + provider,
      title: 'Logs Export'
    };

    if (provider === 'mgmt-webhooks') {
      slackConfig.username = 'auth0-management-api-webhooks';
      slackConfig.title = 'Management API Webhooks';
    } else if (provider === 'auth-webhooks') {
      slackConfig.username = 'auth0-authentication-api-webhooks';
      slackConfig.title = 'Authentication API Webhooks';
    }

    var slack = new loggingTools.reporters.SlackReporter(slackConfig);

    var options = {
      domain: config('AUTH0_DOMAIN'),
      clientId: config('AUTH0_CLIENT_ID'),
      clientSecret: config('AUTH0_CLIENT_SECRET'),
      batchSize: parseInt(config('BATCH_SIZE')),
      startFrom: config('START_FROM'),
      logTypes: config('LOG_TYPES'),
      logLevel: config('LOG_LEVEL'),
      logger: logger
    };

    var maxBatchSize = 100;

    if (provider === 'mixpanel') {
      maxBatchSize = 20;
    } else if (options.batchSize === 1000) {
      maxBatchSize = options.batchSize;
    }

    if (!options.batchSize || options.batchSize > maxBatchSize) {
      options.batchSize = maxBatchSize;
    }

    if (options.logTypes && !Array.isArray(options.logTypes)) {
      options.logTypes = options.logTypes.replace(/\s/g, '').split(',');
    }

    if (provider === 'mgmt-webhooks') {
      options.logTypes = ['sapi', 'fapi'];
    } else if (provider === 'segment') {
      options.logTypes = ['s', 'ss', 'f'];
    }

    var auth0logger = new loggingTools.LogsProcessor(storage, options);

    var sendDailyReport = function sendDailyReport(lastReportDate) {
      var current = new Date();

      var end = current.getTime();
      var start = end - 86400000;
      auth0logger.getReport(start, end).then(function (report) {
        return slack.send(report, report.checkpoint);
      }).then(function () {
        return storage.read();
      }).then(function (data) {
        data.lastReportDate = lastReportDate;
        return storage.write(data);
      });
    };

    var checkReportTime = function checkReportTime() {
      storage.read().then(function (data) {
        var now = moment().format('DD-MM-YYYY');
        var reportTime = config('DAILY_REPORT_TIME') || 16;

        if (data.lastReportDate !== now && new Date().getHours() >= reportTime) {
          sendDailyReport(now);
        }
      });
    };

    return updateLastRun().then(function () {
      return auth0logger.run(onLogsReceived).then(function (result) {
        if (result && result.status && result.status.error) {
          slack.send(result.status, result.checkpoint);
        } else if (config('SLACK_SEND_SUCCESS') === true || config('SLACK_SEND_SUCCESS') === 'true') {
          slack.send(result.status, result.checkpoint);
        }
        checkReportTime();
        res.json(result);
      }).catch(function (err) {
        slack.send({ error: err, logsProcessed: 0 }, null);
        checkReportTime();
        next(err);
      });
    });
  };
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(24);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(164);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var async = __webpack_require__(205);
var request = __webpack_require__(219);
var loggingTools = __webpack_require__(42);

var _require = __webpack_require__(136),
    Client = _require.Client;

var config = __webpack_require__(2);
var logger = __webpack_require__(11);

module.exports = function () {
  var now = Date.now();

  var client = new Client({
    cloud: {
      id: config('ELASTIC_ID')
    },
    auth: {
      username: config('ELASTIC_USERNAME'),
      password: config('ELASTIC_PASSWORD')
    }
  });

  var sendLog = function sendLog(log, callback) {
    if (!log) {
      return callback();
    }

    var index = config('ELASTIC_INDEX');

    var data = {
      post_date: now,
      type_description: loggingTools.logTypes.get(log.type)
    };

    (0, _keys2.default)(log).forEach(function (key) {
      data[key] = log[key];
    });
    data.message = (0, _stringify2.default)(log);

    client.index({
      index: index,
      body: {
        character: 'Daenerys Targaryen',
        quote: 'I am the blood of the dragon.'
      }
    }).then(function (x) {
      return callback();
    }).catch(function (error) {
      return callback(error);
    });
  };

  return function (logs, callback) {
    if (!logs || !logs.length) {
      return callback();
    }

    logger.info('Sending ' + logs.length + ' logs to Elastic Cloud.');

    async.eachLimit(logs, 10, sendLog, callback);
  };
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var router = __webpack_require__(15).Router;
var middlewares = __webpack_require__(10).middlewares;

var config = __webpack_require__(2);
var logger = __webpack_require__(11);

module.exports = function () {
  var hooks = router();
  var hookValidator = middlewares.validateHookToken(config('AUTH0_DOMAIN'), config('WT_URL'), config('EXTENSION_SECRET'));

  hooks.use('/on-uninstall', hookValidator('/.extensions/on-uninstall'));
  hooks.use(middlewares.managementApiClient({
    domain: config('AUTH0_DOMAIN'),
    clientId: config('AUTH0_CLIENT_ID'),
    clientSecret: config('AUTH0_CLIENT_SECRET')
  }));

  hooks.delete('/on-uninstall', function (req, res) {
    var clientId = config('AUTH0_CLIENT_ID');
    req.auth0.clients.delete({ client_id: clientId }).then(function () {
      logger.debug('Deleted client ' + clientId);
      res.sendStatus(204);
    }).catch(function (err) {
      logger.debug('Error deleting client: ' + config('AUTH0_CLIENT_ID'));
      logger.error(err);

      // Even if deleting fails, we need to be able to uninstall the extension.
      res.sendStatus(204);
    });
  });
  return hooks;
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var fs = __webpack_require__(212);
var ejs = __webpack_require__(210);
var path = __webpack_require__(59);
var urlHelpers = __webpack_require__(10).urlHelpers;

var config = __webpack_require__(2);

module.exports = function () {
  var template = '\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <title><%= config.TITLE %></title>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/4.6.13/lib/logos/img/favicon.png">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.1672/css/index.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/4.6.13/index.min.css" />\n    <% if (assets.style) { %><link rel="stylesheet" type="text/css" href="/app/<%= assets.style %>" /><% } %>\n    <% if (assets.useCdn) { %><link rel="stylesheet" type="text/css" href="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.css" /><% } %>\n    <% if (assets.customCss) { %><link rel="stylesheet" type="text/css" href="<%= assets.customCss %>" /><% } %>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="text/javascript" src="//cdn.auth0.com/w2/auth0-7.0.4.min.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.1672/js/bundle.js"></script>\n    <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;</script>\n    <% if (assets.vendors) { %><script type="text/javascript" src="/app/<%= assets.vendors %>"></script><% } %>\n    <% if (assets.app) { %><script type="text/javascript" src="<%= assets.app %>"></script><% } %>\n    <% if (assets.useCdn) { %>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.vendors.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.js"></script>\n    <% } %>\n  </body>\n  </html>\n  ';

  return function (req, res, next) {
    if (req.url.indexOf('/api') === 0) {
      return next();
    }

    var settings = {
      AUTH0_DOMAIN: config('AUTH0_DOMAIN'),
      AUTH0_CLIENT_ID: config('EXTENSION_CLIENT_ID'),
      AUTH0_MANAGE_URL: config('AUTH0_MANAGE_URL') || 'https://manage.auth0.com',
      BASE_URL: urlHelpers.getBaseUrl(req),
      BASE_PATH: urlHelpers.getBasePath(req),
      TITLE: config('TITLE')
    };

    // Render from CDN.
    if (true) {
      return res.send(ejs.render(template, {
        config: settings,
        assets: {
          customCss: config('CUSTOM_CSS'),
          useCdn: true
        }
      }));
    }

    // Render locally.
    return fs.readFile(path.join(__dirname, '../../dist/manifest.json'), 'utf8', function (err, manifest) {
      var locals = {
        config: settings,
        assets: {
          customCss: config('CUSTOM_CSS'),
          app: 'http://localhost:3000/app/bundle.js'
        }
      };

      if (!err && manifest) {
        locals.assets = JSON.parse(manifest);
        locals.assets.app = '/app/' + locals.assets.app;
        locals.assets.customCss = config('CUSTOM_CSS');
      }

      // Render the HTML page.
      res.send(ejs.render(template, locals));
    });
  };
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(39);
var router = __webpack_require__(15).Router;
var middlewares = __webpack_require__(10).middlewares;

var config = __webpack_require__(2);
var htmlRoute = __webpack_require__(160);

module.exports = function (storage) {
  var app = router();
  var authenticateAdmins = middlewares.authenticateAdmins({
    credentialsRequired: true,
    secret: config('EXTENSION_SECRET'),
    audience: 'urn:logs-to-provider',
    baseUrl: config('PUBLIC_WT_URL') || config('WT_URL'),
    onLoginSuccess: function onLoginSuccess(req, res, next) {
      return next();
    }
  });

  app.get('/', htmlRoute());

  app.get('/api/report', authenticateAdmins, function (req, res, next) {
    return storage.read().then(function (data) {
      var lastRun = data && data.lastRun;
      var allLogs = data && data.logs ? _.orderBy(data.logs, 'start', 'desc') : [];
      var logs = req.query.filter && req.query.filter === 'errors' ? _.filter(allLogs, function (log) {
        return !!log.error;
      }) : allLogs;
      var page = req.query.page && parseInt(req.query.page) ? parseInt(req.query.page) - 1 : 0;
      var perPage = req.query.per_page && parseInt(req.query.per_page) || 10;
      var offset = perPage * page;

      return res.json({ logs: logs.slice(offset, offset + perPage), total: logs.length, lastRun: lastRun });
    }).catch(next);
  });

  return app;
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(15);
var metadata = __webpack_require__(199);

module.exports = function () {
  var api = express.Router();
  api.get('/', function (req, res) {
    res.status(200).send(metadata);
  });

  return api;
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(10);

var expressApp = __webpack_require__(62);
var config = __webpack_require__(2);
var logger = __webpack_require__(11);

var createServer = tools.createServer(function (config, storage) {
  logger.info('Starting Auth0 Logging Extension - Version:', "2.3.4");
  return expressApp(config, storage);
});

module.exports = function (context, req, res) {
  var publicUrl = req.x_wt && req.x_wt.ectx && req.x_wt.ectx.PUBLIC_WT_URL || false;
  if (!publicUrl) {
    config.setValue('PUBLIC_WT_URL', tools.urlHelpers.getWebtaskUrl(req));
  }

  createServer(context, req, res);
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(170), __esModule: true };

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(166);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(165);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(192);
module.exports = __webpack_require__(4).Object.keys;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(195);
__webpack_require__(193);
__webpack_require__(196);
__webpack_require__(197);
module.exports = __webpack_require__(4).Symbol;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(194);
__webpack_require__(198);
module.exports = __webpack_require__(37).f('iterator');


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(190);
var toAbsoluteIndex = __webpack_require__(189);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(172);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(30);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(46);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(50);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(31);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(9)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(19)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(3);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(12)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(17);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(30);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(35);
var has = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(48);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8);
var gOPN = __webpack_require__(51).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3);
var toObject = __webpack_require__(55);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(27);
var core = __webpack_require__(4);
var fails = __webpack_require__(12);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(173);
var step = __webpack_require__(181);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(55);
var $keys = __webpack_require__(17);

__webpack_require__(187)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 193 */
/***/ (function(module, exports) {



/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(188)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(27);
var redefine = __webpack_require__(54);
var META = __webpack_require__(182).KEY;
var $fails = __webpack_require__(12);
var shared = __webpack_require__(33);
var setToStringTag = __webpack_require__(31);
var uid = __webpack_require__(19);
var wks = __webpack_require__(9);
var wksExt = __webpack_require__(37);
var wksDefine = __webpack_require__(36);
var enumKeys = __webpack_require__(176);
var isArray = __webpack_require__(179);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(13);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(35);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(50);
var gOPNExt = __webpack_require__(185);
var $GOPD = __webpack_require__(184);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(17);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(30).f = $propertyIsEnumerable;
  __webpack_require__(52).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('asyncIterator');


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('observable');


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191);
var global = __webpack_require__(1);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(28);
var TO_STRING_TAG = __webpack_require__(9)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = {"author":"auth0","type":"cron","category":"log_export","initialUrlPath":"/login","repository":"https://github.com/auth0-extensions/auth0-logs-to-provider","keywords":["auth0","extension"],"schedule":"0 */5 * * * *","auth0":{"createClient":true,"onUninstallPath":"/.extensions/on-uninstall","scopes":"read:logs delete:clients"},"secrets":{"BATCH_SIZE":{"description":"The amount of logs to batch before sending. A single cron execution will send multiple batches. The maximum value is 100.","default":100},"START_FROM":{"description":"Checkpoint ID of log to start from."},"SLACK_INCOMING_WEBHOOK_URL":{"description":"Slack Incoming Webhook URL used to report statistics and possible failures"},"SLACK_SEND_SUCCESS":{"description":"This setting will enable verbose notifications to Slack which are useful for troubleshooting","type":"select","allowMultiple":false,"default":"false","options":[{"value":"false","text":"No"},{"value":"true","text":"Yes"}]},"LOG_LEVEL":{"description":"This allows you to specify the log level of events that need to be sent. Selected level includes all levels above.","type":"select","allowMultiple":false,"options":[{"value":"-","text":""},{"value":"4","text":"Critical"},{"value":"3","text":"Error"},{"value":"2","text":"Warning"},{"value":"1","text":"Info"},{"value":"0","text":"Debug"}]},"LOG_TYPES":{"description":"If you only want to send events with a specific type (eg: failed logins)","type":"select","allowMultiple":true,"options":[{"text":"","value":"-"},{"text":"Success Login","value":"s"},{"text":"Success Silent Auth","value":"ssa"},{"text":"Failed Silent Auth","value":"fsa"},{"text":"Success Exchange","value":"seacft"},{"text":"Failed Exchange","value":"feacft"},{"text":"Success Exchange","value":"seccft"},{"text":"Failed Exchange","value":"feccft"},{"text":"Success Exchange","value":"sepft"},{"text":"Failed Exchange","value":"fepft"},{"text":"Success Exchange","value":"sertft"},{"text":"Failed Exchange","value":"fertft"},{"text":"Success Exchange","value":"seoobft"},{"text":"Failed Exchange","value":"feoobft"},{"text":"Success Exchange","value":"seotpft"},{"text":"Failed Exchange","value":"feotpft"},{"text":"Success Exchange","value":"sercft"},{"text":"Failed Exchange","value":"fercft"},{"text":"Failed Login","value":"f"},{"text":"Warning","value":"w"},{"text":"Deprecation Notice","value":"depnote"},{"text":"Deleted User","value":"du"},{"text":"Failed Login (invalid email/username)","value":"fu"},{"text":"Failed Login (wrong password)","value":"fp"},{"text":"Failed by Connector","value":"fc"},{"text":"Failed by CORS","value":"fco"},{"text":"Connector Online","value":"con"},{"text":"Connector Offline","value":"coff"},{"text":"Failed Connector Provisioning","value":"fcpro"},{"text":"Success Signup","value":"ss"},{"text":"Failed Signup","value":"fs"},{"text":"Code Sent","value":"cs"},{"text":"Code/Link Sent","value":"cls"},{"text":"Success Verification Email","value":"sv"},{"text":"Failed Verification Email","value":"fv"},{"text":"Success Change Password","value":"scp"},{"text":"Failed Change Password","value":"fcp"},{"text":"Success Post Change Password Hook","value":"scph"},{"text":"Failed Post Change Password Hook","value":"fcph"},{"text":"Success Change Email","value":"sce"},{"text":"Failed Change Email","value":"fce"},{"text":"Success Change Username","value":"scu"},{"text":"Failed Change Username","value":"fcu"},{"text":"Success Change Phone Number","value":"scpn"},{"text":"Failed Change Phone Number","value":"fcpn"},{"text":"Success Verification Email Request","value":"svr"},{"text":"Failed Verification Email Request","value":"fvr"},{"text":"Success Change Password Request","value":"scpr"},{"text":"Failed Change Password Request","value":"fcpr"},{"text":"Failed Sending Notification","value":"fn"},{"text":"API Operation","value":"sapi"},{"text":"Failed API Operation","value":"fapi"},{"text":"Blocked Account","value":"limit_wc"},{"text":"Blocked IP Address","value":"limit_mu"},{"text":"Too Many Calls to /userinfo","value":"limit_ui"},{"text":"Rate Limit On API","value":"api_limit"},{"text":"Too Many Calls to /delegation","value":"limit_delegation"},{"text":"Successful User Deletion","value":"sdu"},{"text":"Failed User Deletion","value":"fdu"},{"text":"Auth0 Update Launched","value":"admin_update_launch"},{"text":"Auth0 OS Update Started","value":"sys_os_update_start"},{"text":"Auth0 OS Update Ended","value":"sys_os_update_end"},{"text":"Auth0 Update Started","value":"sys_update_start"},{"text":"Auth0 Update Ended","value":"sys_update_end"},{"text":"Success Logout","value":"slo"},{"text":"Failed Logout","value":"flo"},{"text":"Success Delegation","value":"sd"},{"text":"Failed Delegation","value":"fd"},{"text":"Unenroll device account","value":"gd_unenroll"},{"text":"Update device account","value":"gd_update_device_account"},{"text":"Module switch","value":"gd_module_switch"},{"text":"Guardian tenant update","value":"gd_tenant_update"},{"text":"Second factor started","value":"gd_start_auth"},{"text":"Enroll started","value":"gd_start_enroll"},{"text":"MFA Enrollment start failed","value":"gd_start_enroll_failed"},{"text":"User delete","value":"gd_user_delete"},{"text":"OTP Auth suceed","value":"gd_auth_succeed"},{"text":"OTP Auth failed","value":"gd_auth_failed"},{"text":"Push notification sent","value":"gd_send_pn"},{"text":"Error sending MFA Push Notification","value":"gd_send_pn_failure"},{"text":"OTP Auth rejected","value":"gd_auth_rejected"},{"text":"Recovery succeed","value":"gd_recovery_succeed"},{"text":"Recovery failed","value":"gd_recovery_failed"},{"text":"SMS Sent","value":"gd_send_sms"},{"text":"Error sending MFA SMS","value":"gd_send_sms_failure"},{"text":"Too many failures","value":"gd_otp_rate_limit_exceed"},{"text":"Too many failures","value":"gd_recovery_rate_limit_exceed"},{"text":"Guardian enrollment complete","value":"gd_enrollment_complete"},{"text":"Users import","value":"fui"},{"text":"Users import","value":"sui"},{"text":"Breached password","value":"pwd_leak"},{"text":"Failed cross origin authentication","value":"fcoa"},{"text":"Success cross origin authentication","value":"scoa"},{"text":"Account unblocked","value":"ublkdu"},{"text":"Success Exchange","value":"sens"},{"text":"Failed Exchange","value":"fens"}]},"ELASTIC_ID":{"description":"elastic cluster token","example":"blabla","required":true},"ELASTIC_USERNAME":{"description":"elastic cluster authenticatioj","example":"x:y","required":true},"ELASTIC_PASSWORD":{"description":"elastic cluster authenticatioj","example":"x:y","required":true},"ELASTIC_INDEX":{"description":"Index","required":true}},"title":"Auth0 Logs to Elastic","name":"auth0-logs-to-elasticcloud","version":"2.3.4","preVersion":"2.3.3","description":"This extension will continuously export your Auth0 logs to elasticcloud","docsUrl":"https://cdn.auth0.com/extensions/auth0-logs-to-logstash/assets/logo.png","logoUrl":"https://cdn.auth0.com/extensions/auth0-logs-to-logstash/assets/logo.png"}

/***/ }),
/* 200 */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(200);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(224)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const hasBuffer = typeof Buffer !== 'undefined'
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/

function parse (text, reviver, options) {
  // Normalize arguments
  if (options == null) {
    if (reviver !== null && typeof reviver === 'object') {
      options = reviver
      reviver = undefined
    } else {
      options = {}
    }
  }

  const protoAction = options.protoAction || 'error'
  const constructorAction = options.constructorAction || 'error'

  if (hasBuffer && Buffer.isBuffer(text)) {
    text = text.toString()
  }

  // BOM checker
  if (text && text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1)
  }

  // Parse normally, allowing exceptions
  const obj = JSON.parse(text, reviver)

  // options: 'error' (default) / 'remove' / 'ignore'
  if (protoAction === 'ignore' && constructorAction === 'ignore') {
    return obj
  }

  // Ignore null and non-objects
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (protoAction !== 'ignore' && constructorAction !== 'ignore') {
    if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
      return obj
    }
  } else if (protoAction !== 'ignore' && constructorAction === 'ignore') {
    if (suspectProtoRx.test(text) === false) {
      return obj
    }
  } else {
    if (suspectConstructorRx.test(text) === false) {
      return obj
    }
  }

  // Scan result for proto keys
  scan(obj, { protoAction, constructorAction })

  return obj
}

function scan (obj, { protoAction = 'error', constructorAction = 'error' } = {}) {
  let next = [obj]

  while (next.length) {
    const nodes = next
    next = []

    for (const node of nodes) {
      if (protoAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, '__proto__')) { // Avoid calling node.hasOwnProperty directly
        if (protoAction === 'error') {
          throw new SyntaxError('Object contains forbidden prototype property')
        }

        delete node.__proto__ // eslint-disable-line no-proto
      }

      if (constructorAction !== 'ignore' &&
          Object.prototype.hasOwnProperty.call(node, 'constructor') &&
          Object.prototype.hasOwnProperty.call(node.constructor, 'prototype')) { // Avoid calling node.hasOwnProperty directly
        if (constructorAction === 'error') {
          throw new SyntaxError('Object contains forbidden prototype property')
        }

        delete node.constructor
      }

      for (const key in node) {
        const value = node[key]
        if (value && typeof value === 'object') {
          next.push(node[key])
        }
      }
    }
  }
}

function safeParse (text, reviver) {
  try {
    return parse(text, reviver)
  } catch (ignoreError) {
    return null
  }
}

module.exports = {
  parse,
  scan,
  safeParse
}


/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = require("async@2.1.2");

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("body-parser@1.12.4");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser@1.4.4");

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = require("ejs@2.3.1");

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken@7.1.9");

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = require("jwks-rsa@1.6.0");

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = require("moment@2.10.3");

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("morgan@1.5.3");

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = require("ms@0.7.1");

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = require("request@2.56.0");

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = require("webtask-tools");

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = require("winston@1.0.0");

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = require("wrappy@1.0.1");

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })
/******/ ]);
