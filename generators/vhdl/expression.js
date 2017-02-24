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

Blockly.VHDL['operator'] = function(block) {
  var value_in_a = Blockly.VHDL.valueToCode(block, 'in_a', Blockly.VHDL.ORDER_NONE);
  var dropdown_operator = block.getFieldValue('operator');
  var value_in_b = Blockly.VHDL.valueToCode(block, 'in_b', Blockly.VHDL.ORDER_NONE);
  var code = '('+ value_in_a + ' ' + dropdown_operator + ' ' + value_in_b + ')';
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['qualified'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_range = block.getFieldValue('range');
  var code = text_name + '\'' + dropdown_range;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['not'] = function(block) {
  var value_not_value = Blockly.VHDL.valueToCode(block, 'not_value', Blockly.VHDL.ORDER_NONE);
  var code = 'not '+ value_not_value;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['others'] = function(block) {
  var value_not_value = Blockly.VHDL.valueToCode(block, 'others', Blockly.VHDL.ORDER_NONE);
  var code = 'others => '+ value_not_value;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['condition'] = function(block) {
  var value_a = Blockly.VHDL.valueToCode(block, 'A', Blockly.VHDL.ORDER_NONE);
  var dropdown_condition = block.getFieldValue('condition');
  var value_b = Blockly.VHDL.valueToCode(block, 'B', Blockly.VHDL.ORDER_NONE);
  var code = value_a + " " + dropdown_condition + " " + value_b;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['type_conversion'] = function(block) {
  var dropdown_conversion = block.getFieldValue('conversion');
  var value_variable = Blockly.VHDL.valueToCode(block, 'variable', Blockly.VHDL.ORDER_NONE);
  var value_to_integer = Blockly.VHDL.valueToCode(block, 'to_integer', Blockly.VHDL.ORDER_NONE);
  var code = value_variable + '(' + dropdown_conversion + '(' + value_to_integer + '))';
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['conversion'] = function(block) {
  var dropdown_std_logic = block.getFieldValue('std_logic');
  var value_name = Blockly.VHDL.valueToCode(block, 'NAME', Blockly.VHDL.ORDER_ATOMIC);
  var code = dropdown_std_logic + value_name;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['std_match'] = function(block) {
  var value_left = Blockly.VHDL.valueToCode(block, 'left', Blockly.VHDL.ORDER_NONE);
  var value_right = Blockly.VHDL.valueToCode(block, 'right', Blockly.VHDL.ORDER_NONE);
  var code = 'std_match(' + value_left + ', ' + value_right + ');\n';
  return code;
};

Blockly.VHDL['range_type'] = function(block) {
  var value_type = Blockly.VHDL.valueToCode(block, 'type', Blockly.VHDL.ORDER_NONE);
  var code = 'range ' + value_type;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['range1'] = function(block) {
  var text_msb = Blockly.VHDL.valueToCode(block, 'msb', Blockly.VHDL.ORDER_NONE);
  var dropdown_downto = block.getFieldValue('downto');
  var text_lsb = Blockly.VHDL.valueToCode(block, 'lsb', Blockly.VHDL.ORDER_NONE);
  var code = text_msb + ' ' + dropdown_downto + ' ' + text_lsb;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['range2'] = function(block) {
  var text_name = Blockly.VHDL.valueToCode(block, 'name', Blockly.VHDL.ORDER_NONE);
  var dropdown_range = block.getFieldValue('range');
  var code = text_name + '\'' + dropdown_range;
  if (block.getFieldValue('N')) { code=code; }	   
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['range2_index'] = function(block) {
  var text_name = Blockly.VHDL.valueToCode(block, 'name', Blockly.VHDL.ORDER_NONE);
  var dropdown_range = block.getFieldValue('range');
  var text_n = Blockly.VHDL.valueToCode(block, 'N', Blockly.VHDL.ORDER_NONE);
  var code = text_name + '\'' + dropdown_range;
//  if (block.getFieldValue('N')) 
  if (text_n) { code=code + '(' + text_n + ')'; }	   
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['range_var'] = function(block) {
  var value_variable = Blockly.VHDL.valueToCode(block, 'variable', Blockly.VHDL.ORDER_NONE);
  var value_range = Blockly.VHDL.valueToCode(block, 'range', Blockly.VHDL.ORDER_NONE);
  var code = value_variable + ' range ' + value_range;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['index'] = function(block) {
  var text_index_name = Blockly.VHDL.valueToCode(block, 'index_name', Blockly.VHDL.ORDER_NONE);
  var text_index_list = Blockly.VHDL.valueToCode(block, 'index_list', Blockly.VHDL.ORDER_NONE);
  var code = text_index_name + '(' + text_index_list + ')';
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['all'] = function(block) {
  var code = '<>';
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['time_association'] = function(block) {
  var text_time = Blockly.VHDL.valueToCode(block, 'time', Blockly.VHDL.ORDER_NONE);
  var dropdown_unit = block.getFieldValue('unit');
  var code = text_time + ' ' + dropdown_unit;
  return [code, Blockly.VHDL.ORDER_NONE];
};


