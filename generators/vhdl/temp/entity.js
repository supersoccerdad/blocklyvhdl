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

goog.provide('Blockly.VHDL.entity');

goog.require('Blockly.VHDL');

Blockly.VHDL['entity'] = function(block) {
  var text_entity = block.getFieldValue('entity');
  var statements_generic_port = Blockly.VHDL.statementToCode(block, 'generic_port');
  var text_end_entity = block.getFieldValue('end_entity');
  var code = 'entity ' + text_entity + ' is' + '\n';
  var code = code + statements_generic_port;
  var code = code + 'end ' + text_end_entity + ';\n';
  return code;
};

Blockly.VHDL['generic'] = function(block) {
  var dropdown_generic = block.getFieldValue('port_list');
  var statements_generic_inputs = Blockly.VHDL.statementToCode(block, 'generic_inputs');
  var statements_generic_inputs = statements_generic_inputs.substring(0, statements_generic_inputs.length-2)
  var code = dropdown_generic + ' (\n' + statements_generic_inputs;
  var code = code + ');\n';
  return code;
};

Blockly.VHDL['port_pin_name'] = function(block) {
  var value_pin_name = Blockly.VHDL.valueToCode(block, 'pin_name', Blockly.VHDL.ORDER_NONE);
  var dropdown_in_out = block.getFieldValue('in_out');
  var value_pin_type = Blockly.VHDL.valueToCode(block, 'pin_type', Blockly.VHDL.ORDER_NONE);
  var code = value_pin_name + ' : ' + dropdown_in_out + ' ' + value_pin_type + ';\n';
  return code;
};



