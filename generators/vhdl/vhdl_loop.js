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

goog.provide('Blockly.VHDL.vhdl_loop');

goog.require('Blockly.VHDL');


Blockly.VHDL['for_loop'] = function(block) {
  var text_label_name = block.getFieldValue('label_name');
  var text_loop = Blockly.VHDL.valueToCode(block, 'loop', Blockly.VHDL.ORDER_NONE);
  var value_range = Blockly.VHDL.valueToCode(block, 'range', Blockly.VHDL.ORDER_NONE);
  var statements_name = Blockly.VHDL.statementToCode(block, 'NAME');
  var text_end_loop = block.getFieldValue('end_loop');
  var code = '';
  if (block.getFieldValue('label_name') !='') {
     var code = text_label_name + ': '; }  
  var code = code +	'for ' + text_loop + ' in ' + value_range + ' loop' + '\n';
  var code = code + statements_name;
  var code = code + 'end loop ' + text_end_loop + ';\n';
  return code;
};

Blockly.VHDL['loop'] = function(block) {
  var text_label_name = block.getFieldValue('label_name');
  var statements_name = Blockly.VHDL.statementToCode(block, 'NAME');
  var text_end_loop = block.getFieldValue('end_loop');
  var code = text_label_name + ': ' + 'loop\n' + statements_name + 'end loop ' + text_end_loop + ';\n';
  return code;
};

Blockly.VHDL['while_loop'] = function(block) {
  var text_label_name = block.getFieldValue('label_name');
  var value_range = Blockly.VHDL.valueToCode(block, 'range', Blockly.VHDL.ORDER_NONE);
  var statements_name = Blockly.VHDL.statementToCode(block, 'NAME');
  var text_end_loop = block.getFieldValue('end_loop');
  if(text_label_name!=""){
     var code = text_label_name + ': ' + 'while ' + value_range + ' loop\n' + statements_name + 'end loop ' + text_end_loop + ';\n';}
  else { var code = 'while ' + value_range + ' loop\n' + statements_name + 'end loop ' + text_end_loop + ';\n';}
  return code;
};

Blockly.VHDL['exit'] = function(block) {
  // TODO: Assemble VHDL into code variable.
  var code = 'exit;\n';
  return code;
};

Blockly.VHDL['exit_label'] = function(block) {
  var text_exit_label = block.getFieldValue('exit_label');
  // TODO: Assemble VHDL into code variable.
  var code = 'exit ' + text_exit_label + ';\n';
  return code;
};

Blockly.VHDL['exit_when'] = function(block) {
  var text_exit_when = block.getFieldValue('exit_when');
  var value_exit_when = Blockly.VHDL.valueToCode(block, 'exit_when', Blockly.VHDL.ORDER_NONE);
  // TODO: Assemble VHDL into code variable.
  var code = 'exit ' + text_exit_when +  ' when ' + value_exit_when + ';\n';
  return code;
};

Blockly.VHDL['generate'] = function(block) {
  var text_generate_label = block.getFieldValue('generate_label');
  var value_start = Blockly.VHDL.valueToCode(block, 'start', Blockly.VHDL.ORDER_NONE);
  var value_end = Blockly.VHDL.valueToCode(block, 'end', Blockly.VHDL.ORDER_NONE);
  var statements_generate = Blockly.VHDL.statementToCode(block, 'generate');
  var text_end_label = block.getFieldValue('end_label');
  // TODO: Assemble VHDL into code variable.
  var code = text_generate_label + ': for ' + value_start + ' in ' + value_end + ' generate\n'; 
  var code = code + statements_generate + 'end generate ' + text_end_label + ';\n';
  return code;
};

Blockly.VHDL['signal_index'] = function(block) {
  var value_signal = Blockly.VHDL.valueToCode(block, 'signal', Blockly.VHDL.ORDER_NONE);
  var text_index = block.getFieldValue('index');
  // TODO: Assemble VHDL into code variable.
  var code = value_signal + '(' + text_index + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.VHDL.ORDER_NONE];
};