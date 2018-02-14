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
 * @fileoverview Helper functions for generating SYNTH for blocks.
 * @author info@blocklySYNTH.com (hotmas erombas)
 */
'use strict';

Blockly.SYNTH['function'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var statements_parameters = Blockly.SYNTH.statementToCode(block, 'parameters');
  var statements_parameters = statements_parameters.substring(0, statements_parameters.length - 1)
  var value_return = Blockly.SYNTH.valueToCode(block, 'return', Blockly.SYNTH.ORDER_NONE);
  var statements_declaration = Blockly.SYNTH.statementToCode(block, 'declaration');
  var statements_sequential = Blockly.SYNTH.statementToCode(block, 'sequential');
  var text_end_name = block.getFieldValue('end_name');
  var value_return2= Blockly.SYNTH.valueToCode(block, 'return2', Blockly.SYNTH.ORDER_NONE);
  var code = 'function ' + text_function_name + ' (\n' + statements_parameters + ')' + '\n  return '  + value_return + ' is';
  var code = code  + '\n' + statements_declaration + 'begin\n' + statements_sequential + 'return ' + value_return2 + ';\n' + 'end ' + text_end_name + ';\n';
  return code;
};

Blockly.SYNTH['function_call'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var text_parameter_list = block.getFieldValue('parameter_list');
  var code = text_function_name + '(' + text_parameter_list + ');\n';
  return [code, Blockly.SYNTH.ORDER_NONE];
};



