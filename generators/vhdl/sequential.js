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

Blockly.VHDL['return'] = function(block) {
  var value_condition = Blockly.VHDL.valueToCode(block, 'condition', Blockly.VHDL.ORDER_ATOMIC);
  var code = 'return;\n';
  return code;
};

Blockly.VHDL['exit'] = function(block) {
  var code = 'exit;\n';
  return code;
};

Blockly.VHDL['exit_label'] = function(block) {
  var text_exit_label = block.getFieldValue('exit_label');
  var code = 'exit ' + text_exit_label + ';\n';
  return code;
};

Blockly.VHDL['exit_when'] = function(block) {
  var text_exit_when = block.getFieldValue('exit_when');
  var value_exit_when = Blockly.VHDL.valueToCode(block, 'exit_when', Blockly.VHDL.ORDER_NONE);
  var code = 'exit ' + text_exit_when +  ' when ' + value_exit_when + ';\n';
  return code;
};

Blockly.VHDL['wait'] = function(block) {
  var code = 'wait;\n';
  return code;
};

Blockly.VHDL['wait_list'] = function(block) {
  var dropdown_wait_list = block.getFieldValue('wait_list2');
  var value_wait = Blockly.VHDL.valueToCode(block, 'wait_list3', Blockly.VHDL.ORDER_NONE);
  var code = 'wait ' + dropdown_wait_list + ' ' + value_wait + ';\n';
  return code;
};

Blockly.VHDL['null'] = function(block) {
  var code = 'null;\n';
  return code;
};



