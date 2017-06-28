/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating vhdl for blocks.
 * @author info@blocklyvhdl.com (hotmas erombas)
 */
'use strict';

goog.provide('Blockly.VHDL.testbench');

goog.require('Blockly.VHDL');

Blockly.VHDL['assert'] = function(block) {
  var value_condition = Blockly.VHDL.valueToCode(block, 'condition', Blockly.VHDL.ORDER_NONE);
  var value_test_string = Blockly.VHDL.valueToCode(block, 'test_String', Blockly.VHDL.ORDER_NONE);
  var dropdown_severity = block.getFieldValue('severity');
  var code = 'assert ' + value_condition + ' report ' + value_test_string + ' severity ' + dropdown_severity + ';\n';
  return code;
};



