/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/styles.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#main {
    max-width: 400px;
    min-width: 500px;
    margin: 0 auto;
    padding: 40px 0 120px;
}
#main > p {
    text-align: center;
}
fieldset {
    margin: 0 10px 24px;
}
fieldset > p {
    margin: 0;
    padding: 0 0 0 8px;
}
fieldset div {
    clear: both;
    margin: 14px 10px;
}
fieldset span {
    float: right;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/mousetrap/mousetrap.js":
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ "./node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js ***!
  \*****************************************************************************/
/***/ (() => {

/**
 * adds a bindGlobal method to Mousetrap that allows you to
 * bind specific keyboard shortcuts that will still work
 * inside a text input field
 *
 * usage:
 * Mousetrap.bindGlobal('ctrl+s', _saveChanges);
 */
/* global Mousetrap:true */
(function(Mousetrap) {
    if (! Mousetrap) {
        return;
    }
    var _globalCallbacks = {};
    var _originalStopCallback = Mousetrap.prototype.stopCallback;

    Mousetrap.prototype.stopCallback = function(e, element, combo, sequence) {
        var self = this;

        if (self.paused) {
            return true;
        }

        if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
            return false;
        }

        return _originalStopCallback.call(self, e, element, combo);
    };

    Mousetrap.prototype.bindGlobal = function(keys, callback, action) {
        var self = this;
        self.bind(keys, callback, action);

        if (keys instanceof Array) {
            for (var i = 0; i < keys.length; i++) {
                _globalCallbacks[keys[i]] = true;
            }
            return;
        }

        _globalCallbacks[keys] = true;
    };

    Mousetrap.init();
}) (typeof Mousetrap !== "undefined" ? Mousetrap : undefined);


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ts/contentScript.ts":
/*!*********************************!*\
  !*** ./src/ts/contentScript.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// https://github.com/ccampbell/mousetrap
// https://craig.is/killing/mice
const mousetrap_1 = __importDefault(__webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js")); // global-bind must be import after Mousetrap
__webpack_require__(/*! mousetrap/plugins/global-bind/mousetrap-global-bind */ "./node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js");
const storageLocal_1 = __webpack_require__(/*! ./storageLocal */ "./src/ts/storageLocal.ts");
const focus_1 = __webpack_require__(/*! ./focus */ "./src/ts/focus.ts");
const finder_1 = __webpack_require__(/*! ./finder */ "./src/ts/finder.ts");
function autofocus(items) {
    const settings = items.settings;
    const finder = finder_1.Finder.new(settings.nearest);
    if (settings.autofocus) {
        const focusableElement = finder.getFirstFocusableElement();
        if (typeof focusableElement == "undefined")
            return;
        focusableElement.activate(settings.selectAll);
    }
}
function bindCallback(items) {
    return (e, combo) => {
        var _a;
        e.preventDefault();
        const settings = items.settings;
        const keys = settings.keys;
        if (keys.blur == combo) {
            const active = document.activeElement;
            const selection = window.getSelection();
            if (selection != null) {
                selection.removeAllRanges();
            }
            if (active != null) {
                active.blur();
            }
            (_a = window.top) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
        const finder = finder_1.Finder.new(settings.nearest);
        let element;
        switch (combo) {
            case keys.next:
                element = finder.getNextFocusableElement();
                break;
            case keys.prev:
                element = finder.getPrevFocusableElement();
                break;
            case keys.first:
                element = finder.getFirstFocusableElement();
                break;
            case keys.last:
                element = finder.getLastFocusableElement();
                break;
            default:
                return;
        }
        // console.log(e, combo);
        // console.log(element);
        if (typeof element != "undefined") {
            const focusOptions = {
                scroll: settings.scroll,
                marker: settings.marker,
                selectAll: settings.selectAll,
            };
            focus_1.Focus.new(focusOptions).on(element);
        }
    };
}
storageLocal_1.StorageLocal.get((items) => {
    mousetrap_1.default.bindGlobal(storageLocal_1.ItemObject.shortcutKeys(items), bindCallback(items));
    autofocus(items);
});
const onChangedCallback = (items) => {
    mousetrap_1.default.reset();
    mousetrap_1.default.bindGlobal(storageLocal_1.ItemObject.shortcutKeys(items), bindCallback(items));
};
storageLocal_1.StorageLocal.onChangedListener(onChangedCallback);


/***/ }),

/***/ "./src/ts/extractor/_extractors.ts":
/*!*****************************************!*\
  !*** ./src/ts/extractor/_extractors.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractors = void 0;
const reddit_1 = __webpack_require__(/*! ./reddit */ "./src/ts/extractor/reddit.ts");

// WhatsApp Extractor
class WhatsAppExtractor {
    constructor() {
        this.matches = /https:\/\/web\.whatsapp\.com/;
    }
    
    extract() {
        const inputSelector = 'div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.xjbb1bd.x1ilxmrw.x6prxxf.xvq8zen.xo1l8bm.xzsf02u.x1yc453h[contenteditable="true"]';
        const elements = document.querySelectorAll(inputSelector);
        if (elements && elements.length > 0) {
            return Array.from(elements);
        }
        return [];
    }
}

exports.WhatsAppExtractor = WhatsAppExtractor;
exports.extractors = [new reddit_1.RedditExtractor(), new WhatsAppExtractor()];


/***/ }),

/***/ "./src/ts/extractor/reddit.ts":
/*!************************************!*\
  !*** ./src/ts/extractor/reddit.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedditExtractor = void 0;
const focusableElement_1 = __webpack_require__(/*! ../focusableElement */ "./src/ts/focusableElement.ts");
class RedditExtractor {
    constructor() {
        this.matches = /https:\/\/www\.reddit\.com/;
    }
    extract() {
        var _a, _b;
        const a = (_a = document.querySelector("reddit-search-large")) === null || _a === void 0 ? void 0 : _a.shadowRoot;
        if (!a)
            return;
        const b = (_b = a.querySelector("faceplate-search-input")) === null || _b === void 0 ? void 0 : _b.shadowRoot;
        if (!b)
            return;
        const element = b.querySelector("input");
        if (!element)
            return;
        return [new focusableElement_1.FocusableElement(element)];
    }
}
exports.RedditExtractor = RedditExtractor;


/***/ }),

/***/ "./src/ts/finder.ts":
/*!**************************!*\
  !*** ./src/ts/finder.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Finder = void 0;
const _extractors_1 = __webpack_require__(/*! ./extractor/_extractors */ "./src/ts/extractor/_extractors.ts");
const focusableElement_1 = __webpack_require__(/*! ./focusableElement */ "./src/ts/focusableElement.ts");
class Finder {
    constructor() {
        this.nearest = false;
        this.ASCENDING = Symbol(1);
        this.DESCENDING = Symbol(2);
    }
    static new(nearest) {
        if (typeof Finder.instance === "undefined") {
            Finder.instance = new Finder();
        }
        Finder.instance.nearest = nearest;
        return Finder.instance;
    }
    isEditable(element) {
        const tagName = element.tagName;
        if (tagName == "TEXTAREA" || tagName == "INPUT") {
            if (element.getAttribute("disabled") != null ||
                element.getAttribute("readonly") != null) {
                return false;
            }
            // TextArea: https://www.w3.org/html/wiki/Elements/textarea
            if (tagName == "TEXTAREA") {
                return true;
            }
            // Input:
            // https://www.w3.org/html/wiki/Elements/input
            if (tagName == "INPUT") {
                switch (element.getAttribute("type")) {
                    case null: // if not set, it input element is type text
                    case "date":
                    case "datetime-local":
                    case "email":
                    case "month":
                    case "number":
                    case "password":
                    case "search":
                    case "tel":
                    case "text":
                    case "time":
                    case "url":
                    case "week":
                        return true;
                }
                return false;
            }
        }
        return element.isContentEditable;
    }
    // verify that the element is visible, including the parent element.
    isVisible(element) {
        const domRect = element.getBoundingClientRect();
        let _element = element;
        // elements not intended to be displayed
        if (window.scrollX + domRect.left < 0 ||
            window.scrollY + domRect.top < 0 ||
            domRect.height < 1 ||
            domRect.width < 1) {
            return false;
        }
        do {
            if (_element.getAttribute("hidden") != null) {
                return false;
            }
            const a = _element.getAttribute("aria-hidden");
            if (a != null && a != "false") {
                return false;
            }
            const styles = getComputedStyle(_element);
            if (styles.display == "none" || styles.visibility == "hidden") {
                return false;
            }
            if (_element.tagName == "BODY")
                break;
        } while ((_element = _element.parentElement));
        return true;
    }
    // returns boolean whether the element is in active area.
    inActiveArea(domRect) {
        const absTop = window.scrollY + domRect.top;
        const absBottom = window.scrollY + domRect.bottom;
        const absLeft = window.scrollX + domRect.left;
        const absRight = window.scrollX + domRect.right;
        const activeAreaTop = window.scrollY;
        const activeAreaBottom = window.scrollY + window.innerHeight;
        const activeAreaLeft = window.scrollX;
        const activeAreaRight = window.scrollX + window.innerWidth;
        return (absBottom >= activeAreaTop &&
            absTop <= activeAreaBottom &&
            absLeft <= activeAreaRight &&
            absRight >= activeAreaLeft);
    }
    // find element closest to the active area
    pastActiveArea(domRect, order) {
        switch (order) {
            case this.ASCENDING:
                const activeAreaBottom = window.scrollY + window.innerHeight;
                const activeAreaRight = window.scrollX + window.innerWidth;
                const absBottom = window.scrollY + domRect.bottom;
                const absRight = window.scrollX + domRect.right;
                return (absBottom > activeAreaBottom || absRight > activeAreaRight);
            case this.DESCENDING:
                const activeAreaTop = window.scrollY;
                const activeAreaLeft = window.scrollX;
                const absTop = window.scrollY + domRect.top;
                const absLeft = window.scrollX + domRect.left;
                return absTop <= activeAreaTop || absLeft <= activeAreaLeft;
        }
        return false;
    }
    // A callback function for sorting.
    // Sort the found focusable elements according to their absolute position.
    compareFocusableElement(a, b) {
        const aY = window.scrollY + a.domRect.top;
        const bY = window.scrollY + b.domRect.top;
        if (aY == bY) {
            const aX = window.scrollX + a.domRect.left;
            const bX = window.scrollX + b.domRect.left;
            return aX > bX ? 1 : -1;
        }
        return aY > bY ? 1 : -1;
    }
    getFocusableElementAll() {
        let focusableCollection = [];
        const rawUrl = location.toString();
        for (const extractor of _extractors_1.extractors) {
            if (extractor.matches.test(rawUrl)) {
                const a = extractor.extract();
                if (typeof a != "undefined") {
                    focusableCollection = focusableCollection.concat(a);
                }
            }
        }
        const collection = document.body.getElementsByTagName("*");
        for (const element of collection) {
            if (this.isEditable(element) && this.isVisible(element)) {
                focusableCollection.push(new focusableElement_1.FocusableElement(element));
            }
        }
        if (focusableCollection.length == 0)
            return;
        // Sort by absolute position.
        focusableCollection.sort(this.compareFocusableElement);
        return focusableCollection;
    }
    getFocusableElement(order) {
        const focusableCollection = this.getFocusableElementAll();
        if (typeof focusableCollection == "undefined") {
            return;
        }
        const activeElement = document.activeElement;
        // for skipping until after an active element.
        let skip = this.isEditable(activeElement);
        if (skip) {
            skip = this.isVisible(activeElement);
            if (skip && this.nearest) {
                const domRect = activeElement.getBoundingClientRect();
                skip = this.inActiveArea(domRect);
            }
        }
        // set initial index number and additional values
        // in ascending or descending order
        const l = focusableCollection.length;
        let a, i;
        switch (order) {
            case this.ASCENDING:
                a = 1;
                i = 0;
                break;
            case this.DESCENDING:
                a = -1;
                i = l - 1;
                break;
            default:
                return;
        }
        // first found focusable element
        let firstElement;
        for (; i >= 0 && i < l; i += a) {
            const focusableElement = focusableCollection[i];
            if (skip == false) {
                if (this.nearest) {
                    // element in or closest to the active area
                    if (this.inActiveArea(focusableElement.domRect) ||
                        this.pastActiveArea(focusableElement.domRect, order)) {
                        return focusableElement;
                    }
                }
                else {
                    return focusableElement;
                }
            }
            if (typeof firstElement == "undefined") {
                firstElement = focusableElement;
            }
            if (skip == true && focusableElement.isActive()) {
                skip = false;
            }
        }
        return firstElement;
    }
    getNextFocusableElement() {
        return this.getFocusableElement(this.ASCENDING);
    }
    getPrevFocusableElement() {
        return this.getFocusableElement(this.DESCENDING);
    }
    getFirstFocusableElement() {
        const focusableCollection = this.getFocusableElementAll();
        if (typeof focusableCollection == "undefined")
            return;
        return focusableCollection[0];
    }
    getLastFocusableElement() {
        const focusableCollection = this.getFocusableElementAll();
        if (typeof focusableCollection == "undefined")
            return;
        return focusableCollection[focusableCollection.length - 1];
    }
}
exports.Finder = Finder;


/***/ }),

/***/ "./src/ts/focus.ts":
/*!*************************!*\
  !*** ./src/ts/focus.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Focus = exports.Marker = void 0;
class Marker {
    constructor(options) {
        this.options = options;
        this.animationProperties = {
            opacity: ["0.8", "0"],
            // width: ["10px", "20px", "50px", "20px", "80px"],
            // height: ["10px", "20px", "50px", "20px", "80px"],
            // top: [],
            // left: [],
        };
        this.styles = {
            position: "absolute",
            zIndex: "1000000000",
            padding: "0px",
            margin: "0px",
            boxShadow: "0 0 8px #888",
            borderRadius: "50%",
        };
    }
    createElement(tagName, top, left) {
        let element = document.createElement(tagName);
        for (const k in this.styles) {
            element.style[k] = this.styles[k];
        }
        element.style.top = String(top) + "px";
        element.style.left = String(left) + "px";
        (element.style.backgroundColor = this.options.color || "#ff5566"),
            document.documentElement.appendChild(element);
        return element;
    }
    makeAnimationProperties(top, left) {
        this.animationProperties.top = [
            String(top) + "px",
            String(top - 5) + "px",
            String(top - 18) + "px",
            String(top - 5) + "px",
            String(top - 30) + "px",
        ];
        this.animationProperties.left = [
            String(left) + "px",
            String(left - 5) + "px",
            String(left - 18) + "px",
            String(left - 5) + "px",
            String(left - 30) + "px",
        ];
        const n = this.options.size;
        const a = new Array(5);
        let i = 0;
        for (const x of [1, 2, 5, 2, 8]) {
            a[i] = n * x + "px";
            i++;
        }
        this.animationProperties.width = a;
        this.animationProperties.height = a;
        return this.animationProperties;
    }
    draw(element) {
        if (this.options.milliseconds < 1 || this.options.size < 1)
            return;
        // Should get DOMRect after scrolling, so get it here.
        const domRect = element.getBoundingClientRect();
        const top = window.scrollY + domRect.top;
        const left = window.scrollX + domRect.left;
        let div = this.createElement("div", top, left);
        let animation = div.animate(this.makeAnimationProperties(top, left), this.options.milliseconds);
        animation.addEventListener("finish", () => document.documentElement.removeChild(div));
    }
}
exports.Marker = Marker;
class Focus {
    constructor(options) {
        this.options = options;
        this.marker = new Marker(this.options.marker);
    }
    static new(options) {
        if (typeof Focus.instance === "undefined") {
            Focus.instance = new Focus(options);
        }
        else {
            Focus.instance.options = options;
            Focus.instance.marker.options = options.marker;
        }
        return Focus.instance;
    }
    on(focusableElement) {
        focusableElement.activate(this.options.selectAll);
        focusableElement.scrollIntoView(this.options.scroll);
        this.marker.draw(focusableElement.element);
    }
}
exports.Focus = Focus;


/***/ }),

/***/ "./src/ts/focusableElement.ts":
/*!************************************!*\
  !*** ./src/ts/focusableElement.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FocusableElement = void 0;
class FocusableElement {
    constructor(element) {
        this.element = element;
        this.domRect = element.getBoundingClientRect();
    }
    activate(selectAll) {
        // preventScroll is set to true, the browser will not scroll until the element into view after focus.
        this.element.focus({ preventScroll: true });
        if (selectAll == true && "select" in this.element) {
            this.element.select();
        }
    }
    isActive() {
        return document.activeElement == this.element;
    }
    scrollIntoView(options) {
        this.element.scrollIntoView(options);
    }
}
exports.FocusableElement = FocusableElement;


/***/ }),

/***/ "./src/ts/storageLocal.ts":
/*!********************************!*\
  !*** ./src/ts/storageLocal.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StorageLocal = exports.ItemObject = void 0;
class ItemObject {
    constructor() {
        this.settings = {
            // Default settings
            keys: {
                next: "f2",
                prev: "shift+f2",
                blur: "f4",
                first: "",
                last: "",
            },
            nearest: true,
            autofocus: false,
            selectAll: true,
            marker: {
                milliseconds: 700,
                color: "#ff5566",
                size: 10,
            },
            scroll: {
                behavior: "smooth",
                block: "nearest",
                inline: "nearest",
            },
        };
    }
    static shortcutKeys(o) {
        let a = [];
        let keys = o.settings.keys;
        for (let key in keys) {
            let value = keys[key].trim();
            if (value == "")
                continue;
            a.push(value);
        }
        return a;
    }
}
exports.ItemObject = ItemObject;
class StorageLocal {
    static set(items) {
        chrome.storage.local.set(items);
    }
    static addOptions(items) {
        // This is a temporary process that occurs when adding settings.
        // Current version 1.4 and should to be removed in a future version.
        let changed = false;
        const o = items[StorageLocal.KEY];
        if (o.hasOwnProperty("marks") && !o.hasOwnProperty("marker")) {
            items[StorageLocal.KEY].marker = items[StorageLocal.KEY].marks;
            items[StorageLocal.KEY].marker.size = 10;
            delete items[StorageLocal.KEY].marks;
        }
        if (typeof o.marker.size == "string") {
            const m = o.marker.size.match(/^\d+/);
            if (m != null)
                items[StorageLocal.KEY].marker.size = m[0] - 0; // string to number
        }
        if (!o.hasOwnProperty("autofocus")) {
            items[StorageLocal.KEY].autofocus = false;
        }
        if (!o.hasOwnProperty("selectAll")) {
            items[StorageLocal.KEY].selectAll = true;
        }
        if (!o["keys"].hasOwnProperty("first") ||
            !o["keys"].hasOwnProperty("last")) {
            items[StorageLocal.KEY].keys["first"] = "";
            items[StorageLocal.KEY].keys["last"] = "";
        }
        if (changed)
            chrome.storage.local.set(items);
        return items;
    }
    static get(callback) {
        chrome.storage.local.get(StorageLocal.KEY, (items) => {
            if (typeof items == "undefined" ||
                !items.hasOwnProperty(StorageLocal.KEY)) {
                items = new ItemObject();
                chrome.storage.local.set(items);
            }
            else {
                items = StorageLocal.addOptions(items);
            }
            callback(items);
        });
    }
    static onChangedCallback(callback) {
        return (changes, areaName) => {
            if (areaName != "local")
                return;
            StorageLocal.get(callback);
        };
    }
    static onChangedListener(callback) {
        chrome.storage.onChanged.addListener(StorageLocal.onChangedCallback(callback));
    }
}
exports.StorageLocal = StorageLocal;
StorageLocal.KEY = "settings";


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!***************************!*\
  !*** ./src/ts/options.ts ***!
  \***************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
__webpack_require__(/*! ./contentScript */ "./src/ts/contentScript.ts");
const storageLocal_1 = __webpack_require__(/*! ./storageLocal */ "./src/ts/storageLocal.ts");
const pattern = new RegExp("f[1-9]|f1[0-2]|ctrl|shift|alt|meta|backspace|tab|enter|return|capslock|esc|escape|space|pageup|pagedown|end|home|left|up|right|down|ins|del|plus", "ig");
const normalize = function (key) {
    return key
        .trim()
        .replace(/\s+/, " ")
        .replace(pattern, (v) => v.toLowerCase())
        .split(/\s*\+\s*/)
        .join("+");
};
const handleEvent = function (e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
        return;
    }
    if (e.type == "change") {
        storageLocal_1.StorageLocal.get((items) => {
            switch (e.target.name) {
                case "next":
                case "prev":
                case "blur":
                case "first":
                case "last":
                    items.settings.keys[e.target.name] = normalize(e.target.value);
                    break;
                case "nearest":
                    items.settings.nearest = e.target.checked;
                    break;
                case "autofocus":
                    items.settings.autofocus = e.target.checked;
                    break;
                case "selectAll":
                    items.settings.selectAll = e.target.checked;
                    break;
                case "milliseconds":
                case "color":
                case "size":
                    items.settings.marker[e.target.name] =
                        e.target.value;
                    break;
                case "behavior":
                case "block":
                case "inline":
                    items.settings.scroll[e.target.name] =
                        e.target[e.target.selectedIndex].value;
                    break;
            }
            storageLocal_1.StorageLocal.set(items);
        });
    }
};
const onLoad = function (items) {
    const form = document["settings"];
    form.addEventListener("change", handleEvent);
    // nearest
    form.nearest.checked = items.settings.nearest;
    form.autofocus.checked = items.settings.autofocus;
    form.selectAll.checked = items.settings.selectAll;
    // keys
    const keys = items.settings.keys;
    form.next.value = keys.next;
    form.prev.value = keys.prev;
    form.blur.value = keys.blur;
    form.first.value = keys.first;
    form.last.value = keys.last;
    // marker options
    const marker = items.settings.marker;
    form.milliseconds.value = marker.milliseconds;
    form.color.value = marker.color;
    form.size.value = marker.size;
    const indexOf = function (name, options) {
        const l = options.length;
        for (let i = 0; i < l; i++) {
            if (options[i].value == name)
                return i;
        }
        return -1;
    };
    let index;
    const scroll = items.settings.scroll;
    index = indexOf(scroll.behavior, form.behavior.options);
    form.behavior.options[index].selected = true;
    index = indexOf(scroll.block, form.block.options);
    form.block.options[index].selected = true;
    index = indexOf(scroll.inline, form.inline.options);
    form.inline.options[index].selected = true;
};
storageLocal_1.StorageLocal.get(onLoad);

})();

/******/ })()
;