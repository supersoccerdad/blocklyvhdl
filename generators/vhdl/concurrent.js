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

Blockly.VHDL['process'] = function(block) {
  var text_label_begin = block.getFieldValue('label_begin');
  var statements_declarations = Blockly.VHDL.statementToCode(block, 'declarations');
  var statements_begin = Blockly.VHDL.statementToCode(block, 'begin');
  var text_label_end = block.getFieldValue('label_end');
  if (block.getFieldValue('sens')) {
     var sens = "(" + block.getFieldValue('sens') + ")\n";
  } else {
     var sens = "\n";
	 }
  var code = text_label_begin + ': ' + 'process' + sens + statements_declarations + 'begin' + '\n';
  var code = code + statements_begin + 'end process ' + text_label_end + ';\n';
  return code;
};

Blockly.VHDL['procedure_call'] = function(block) {
  var value_procedurename = Blockly.VHDL.valueToCode(block, 'procedurename', Blockly.VHDL.ORDER_NONE);
  var value_values = Blockly.VHDL.valueToCode(block, 'values', Blockly.VHDL.ORDER_NONE);
  var code = value_procedurename + ' (' + value_values + ');' + '\n';
  return code;
};

Blockly.VHDL['generate'] = function(block) {
  var text_generate_label = block.getFieldValue('generate_label');
  var value_start = Blockly.VHDL.valueToCode(block, 'start', Blockly.VHDL.ORDER_NONE);
  var value_end = Blockly.VHDL.valueToCode(block, 'end', Blockly.VHDL.ORDER_NONE);
  var statements_generate = Blockly.VHDL.statementToCode(block, 'generate');
  var text_end_label = block.getFieldValue('end_label');
  var code = text_generate_label + ': for ' + value_start + ' in ' + value_end + ' generate\n'; 
  var code = code + statements_generate + 'end generate ' + text_end_label + ';\n';
  return code;
};



