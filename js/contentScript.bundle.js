/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mousetrap/mousetrap.js":
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 * Claude helped to improve
 * https://claude.ai/chat/2647e329-6245-461d-8bff-2c94319e8616
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
exports.extractors = [new reddit_1.RedditExtractor()];


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

                // Determine if this is a complex UI element that needs special handling
                this.needsSpecialHandling = this.detectComplexElement(element);
            }

            // Detect if an element needs special focus handling
            detectComplexElement(element) {
                // Check for contenteditable elements
                if (element.getAttribute('contenteditable') === 'true') {
                    return true;
                }

                // Check for custom elements or components
                if (element.tagName && element.tagName.includes('-')) {
                    return true;
                }

                // Check for elements with special attributes commonly used in modern web apps
                if (element.getAttribute('data-content') === 'true' ||
                    element.getAttribute('translate') === 'no' ||
                    element.hasAttribute('data-dl-no-input-translation')) {
                    return true;
                }

                // Check if element is or contains a WYSIWYG editor component
                if (element.classList &&
                    (element.classList.contains('ProseMirror') ||
                        element.querySelector('.ProseMirror') ||
                        element.classList.contains('ql-editor'))) {
                    return true;
                }

                // Check if element is inside shadow DOM or custom component
                if (element.closest('d-textarea') ||
                    element.closest('[contenteditable="true"]')) {
                    return true;
                }

                return false;
            }

            // Find the actual focusable element if this is a complex component
            findActualFocusTarget() {
                // If it's already a standard input, return it
                if (this.element.tagName === 'INPUT' || this.element.tagName === 'TEXTAREA') {
                    return this.element;
                }

                // If it's a contenteditable itself
                if (this.element.getAttribute('contenteditable') === 'true') {
                    return this.element;
                }

                // Search for specific inputs used in chat applications
                const specificInput = document.getElementById('prompt-textarea');
                if (specificInput) {
                    return specificInput;
                }

                // Search for contenteditable inside
                let contentEditable = this.element.querySelector('[contenteditable="true"]');
                if (contentEditable) {
                    return contentEditable;
                }

                // Check for custom components
                if (this.element.tagName && this.element.tagName.includes('-')) {
                    // Look inside shadow DOM if available
                    if (this.element.shadowRoot) {
                        const shadowTarget = this.element.shadowRoot.querySelector('input, textarea, [contenteditable="true"]');
                        if (shadowTarget) {
                            return shadowTarget;
                        }
                    }

                    // Look for nested contenteditable
                    contentEditable = this.element.querySelector('[contenteditable="true"]');
                    if (contentEditable) {
                        return contentEditable;
                    }
                }

                // Try to find any ProseMirror or similar rich text editor
                const richTextEditor = this.element.querySelector('.ProseMirror, .ql-editor');
                if (richTextEditor) {
                    return richTextEditor;
                }

                // If we're inside a custom component, try to get its editable area
                const customParent = this.element.closest('[contenteditable="true"], d-textarea');
                if (customParent) {
                    contentEditable = customParent.querySelector('[contenteditable="true"]');
                    if (contentEditable) {
                        return contentEditable;
                    }
                    return customParent;
                }

                // Fallback to the original element
                return this.element;
            }

            // Set cursor to end of text content
            placeCursorAtEnd(element) {
                try {
                    // For standard inputs and textareas
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        if ('setSelectionRange' in element) {
                            element.setSelectionRange(element.value.length, element.value.length);
                        }
                        return;
                    }

                    // For contenteditable elements
                    if (document.createRange && window.getSelection) {
                        const range = document.createRange();
                        range.selectNodeContents(element);
                        range.collapse(false); // collapse to end
                        const selection = window.getSelection();
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                } catch (e) {
                    console.error("Error placing cursor at end", e);
                }
            }

            activate(selectAll) {
                // Check if this is Google search input
                const isGoogleSearch = (element) => {
                    // Check for Google search by various attributes
                    return (
                        (element.name === 'q' && window.location.hostname.includes('google')) ||
                        element.getAttribute('jsname') === 'yZiJbe' ||
                        element.className.includes('gLFyf') ||
                        element.getAttribute('aria-label')?.toLowerCase().includes('search')
                    );
                };

                // If this needs special handling, use enhanced focus techniques
                if (this.needsSpecialHandling) {
                    const targetElement = this.findActualFocusTarget();

                    // Multi-step focus approach for complex UIs
                    // 1. Initial click and focus
                    targetElement.click();
                    targetElement.focus();

                    // 2. Dispatch additional events to overcome event handlers
                    try {
                        targetElement.dispatchEvent(new MouseEvent('mousedown', {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        }));

                        targetElement.dispatchEvent(new MouseEvent('mouseup', {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        }));

                        targetElement.dispatchEvent(new FocusEvent('focusin', {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        }));
                    } catch (e) {
                        // Some browsers might not support all these events
                    }

                    // 3. Place cursor at end of content
                    this.placeCursorAtEnd(targetElement);

                    // 4. Final focus with delay to overcome apps that might steal focus
                    setTimeout(() => {
                        targetElement.click();
                        targetElement.focus();
                        this.placeCursorAtEnd(targetElement);
                    }, 50);

                    return;
                }

                // Default behavior for standard elements
                this.element.focus({ preventScroll: true });
                
                // For Google search, always place cursor at end instead of selecting all
                if (isGoogleSearch(this.element)) {
                    this.placeCursorAtEnd(this.element);
                } else if (selectAll === true && "select" in this.element) {
                    this.element.select();
                }
            }

            isActive() {
                if (this.needsSpecialHandling) {
                    const targetElement = this.findActualFocusTarget();
                    return document.activeElement === targetElement;
                }

                return document.activeElement === this.element;
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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/contentScript.ts");
/******/ 	
/******/ })()
;