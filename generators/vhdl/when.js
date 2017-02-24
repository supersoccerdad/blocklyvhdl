/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2015 Google Inc.
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
 * @fileoverview Generating VHDL for logic blocks.
 * @author info@blocklyvhdl.com (hotmas erombas)
 */
'use strict';

goog.provide('Blockly.VHDL.when');

goog.require('Blockly.VHDL');

Blockly.VHDL['controls_when'] = function(block) {
  var n = 0;
  var text_label = block.getFieldValue('label');
  var text_A = block.getFieldValue('A');
  var text_B = block.getFieldValue('B');
  var argument = Blockly.VHDL.valueToCode(block, 'C', Blockly.VHDL.ORDER_NONE) || 'false';
  if (text_label != '') {
  var code = text_label + ': ' + text_A + '<=' + text_B + ' when ' + argument; } 
  else {code= text_A + '<=' + text_B + ' when ' + argument;}
  if (block.elseCount_) {
    var argument = Blockly.VHDL.valueToCode(block, 'ELSE', Blockly.VHDL.ORDER_NONE) || 'false';
    code += '\n else ' + argument;
  }
  for (n = 1; n < block.itemCount_; n++) {
    var text_A = block.getFieldValue('A' + n);
    var text_B = block.getFieldValue('B' + n);
    argument = Blockly.VHDL.valueToCode(block, 'ADD' + n,
    Blockly.VHDL.ORDER_NONE) || 'false';
	code += '\n else ' +  '<=' + text_B + ' when ' + argument
  if (n==block.elseifCount_) {
    argument = Blockly.VHDL.valueToCode(block, 'ELSE' + n,
    Blockly.VHDL.ORDER_NONE) || 'false';
    code += '\n else ' + argument;        
	}
  }
  return code + '\n';
};

