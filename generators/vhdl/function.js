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

Blockly.VHDL['function'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var statements_parameters = Blockly.VHDL.statementToCode(block, 'parameters');
  var statements_parameters = statements_parameters.substring(0, statements_parameters.length - 1)
  var value_return = Blockly.VHDL.valueToCode(block, 'return', Blockly.VHDL.ORDER_NONE);
  var statements_declaration = Blockly.VHDL.statementToCode(block, 'declaration');
  var statements_sequential = Blockly.VHDL.statementToCode(block, 'sequential');
  var text_end_name = block.getFieldValue('end_name');
  var value_return2= Blockly.VHDL.valueToCode(block, 'return2', Blockly.VHDL.ORDER_NONE);
  var code = 'function ' + text_function_name + ' (\n' + statements_parameters + ')' + '\n  return '  + value_return + ' is';
  var code = code  + '\n' + statements_declaration + 'begin\n' + statements_sequential + 'return ' + value_return2 + ';\n' + 'end ' + text_end_name + ';\n';
  return code;
};

Blockly.VHDL['function_call'] = function(block) {
//  var text_function_name = block.getFieldValue('function_name');
  var text_function_name = Blockly.VHDL.valueToCode(block, 'function_name', Blockly.VHDL.ORDER_NONE);
//  var text_parameter_list = block.getFieldValue('parameter_list');
  var text_parameter_list = Blockly.VHDL.valueToCode(block, 'parameter_list', Blockly.VHDL.ORDER_NONE);
  var code = text_function_name + '(' + text_parameter_list + ');\n';
  return [code, Blockly.VHDL.ORDER_NONE];
};



