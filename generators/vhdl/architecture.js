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

Blockly.VHDL['name'] = function(block) {
  var text_name = block.getFieldValue('Name');
  var code = text_name;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['generate_if'] = function(block) {
  var text_label = block.getFieldValue('label');
  var value_label = Blockly.VHDL.valueToCode(block, 'label', Blockly.VHDL.ORDER_NONE);
  var statements_name = Blockly.VHDL.statementToCode(block, 'NAME');
  var text_endgenerate = block.getFieldValue('endgenerate');
  var code = text_label + ': if ' + value_label + ' generate\n' + statements_name + 'end ' + text_endgenerate + ';\n';
  return code;
};

Blockly.VHDL['architecture'] = function(block) {
  var text_architecture_name = block.getFieldValue('architecture_name');
  var text_entity_name = block.getFieldValue('entity_name');
  var statements_declarations = Blockly.VHDL.statementToCode(block, 'declarations');
  var statements_concurent_statements = Blockly.VHDL.statementToCode(block, 'concurent_statements');
  var text_end_arch_name = block.getFieldValue('end_arch_name');
  var code = 'architecture ' +  text_architecture_name + ' of ' + text_entity_name + ' is' + '\n';
  var code = code + statements_declarations;
  var code = code + 'begin' + '\n';
  var code = code + statements_concurent_statements;
  var code = code + 'end ' + text_end_arch_name + ';\n';
  return code;
};

Blockly.VHDL['port_map'] = function(block) {
  var text_label = block.getFieldValue('label');
  var text_component = block.getFieldValue('component');
  var statements_name = Blockly.VHDL.statementToCode(block, 'NAME');
  var statements_name = statements_name.substring(0, statements_name.length - 0)
  var code = text_label + ': ' + text_component + statements_name + ';\n';
  return code;
};

Blockly.VHDL['map_list'] = function(block) {
  var dropdown_map = block.getFieldValue('map');
  var value_port = Blockly.VHDL.valueToCode(block, 'port', Blockly.VHDL.ORDER_ATOMIC);
  var code = '\n' + dropdown_map + value_port;
  return code;
};

Blockly.VHDL['map_association'] = function(block) {
  var value_signal_name = Blockly.VHDL.valueToCode(block, 'signal_name', Blockly.VHDL.ORDER_NONE);
  var value_signal_type = Blockly.VHDL.valueToCode(block, 'signal_type', Blockly.VHDL.ORDER_NONE);
  var code = value_signal_name + ' => ' + value_signal_type + ',\n';
  return code;
};

Blockly.VHDL['constant2'] = function(block) {
  var value_constant_name = Blockly.VHDL.valueToCode(block, 'constant_name', Blockly.VHDL.ORDER_NONE);
  var value_constant_type = Blockly.VHDL.valueToCode(block, 'constant_type', Blockly.VHDL.ORDER_NONE);
  var code = 'constant ' + value_constant_name + ' : ' + value_constant_type + '\n';
  return code;
};

