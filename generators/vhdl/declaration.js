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

Blockly.VHDL['procedure'] = function(block) {
  var text_procedure_name = block.getFieldValue('procedure_name');
  var statements_parameter_list = Blockly.VHDL.statementToCode(block, 'parameter_list');
  var statements_declaration = Blockly.VHDL.statementToCode(block, 'declaration');
  var statements_sequential = Blockly.VHDL.statementToCode(block, 'sequential');
  var text_end_name = block.getFieldValue('end_name');
  var code = 'procedure ' + text_procedure_name + '(\n';
  code = code  + statements_parameter_list + ') is\n' + 'begin';
  code = code  + statements_declaration + '\n';
  code = code  + statements_sequential + 'end ' + text_end_name + ';\n';
  return code;
};

Blockly.VHDL['function_pack'] = function(block) {
  var text_name = block.getFieldValue('name');
  var statements_declaration = Blockly.VHDL.statementToCode(block, 'declaration');
  var value_return = Blockly.VHDL.valueToCode(block, 'return', Blockly.VHDL.ORDER_NONE);
    var statements_declaration = statements_declaration.substring(0, statements_declaration.length - 1)
  var code = 'function ' + text_name + ' (\n' + statements_declaration + ')\n  return ' + value_return + ';\n';
  return code;
};

Blockly.VHDL['component_instantiation'] = function(block) {
  var text_component_name = block.getFieldValue('component_name');
  var statements_generic_port = Blockly.VHDL.statementToCode(block, 'generic_port');
  var text_end_name = block.getFieldValue('end_name');
  var code = 'component ' + text_component_name + '\n' + statements_generic_port + 'end component ' + text_end_name + ';\n';
  return code;
};

Blockly.VHDL['alias'] = function(block) {
  var value_alias = Blockly.VHDL.valueToCode(block, 'alias', Blockly.VHDL.ORDER_NONE);
  var value_name = Blockly.VHDL.valueToCode(block, 'name', Blockly.VHDL.ORDER_NONE);
  var value_type = Blockly.VHDL.valueToCode(block, 'type', Blockly.VHDL.ORDER_NONE);
  var code = 'alias ' + value_alias + ': ' + value_alias + ' is ' + value_type + ';\n';
  return code;
};

Blockly.VHDL['signal'] = function(block) {
  var dropdown_signal = block.getFieldValue('signal');
  var value_signal_name = Blockly.VHDL.valueToCode(block, 'signal_name', Blockly.VHDL.ORDER_NONE);
  var value_signal_type = Blockly.VHDL.valueToCode(block, 'signal_type', Blockly.VHDL.ORDER_NONE);
  var code = dropdown_signal +  ' ' + value_signal_name + ': ' + value_signal_type + ';\n';
  return code;
};

Blockly.VHDL['signal_init'] = function(block) {
  var dropdown_signal = block.getFieldValue('signal');
  var value_signal_name = Blockly.VHDL.valueToCode(block, 'signal_name', Blockly.VHDL.ORDER_NONE);
  var value_signal_type = Blockly.VHDL.valueToCode(block, 'signal_type', Blockly.VHDL.ORDER_NONE);
  var value_signal_init = Blockly.VHDL.valueToCode(block, 'signal_init', Blockly.VHDL.ORDER_NONE);
  var code = dropdown_signal +  ' ' + value_signal_name + ': ' + value_signal_type + ' := ' + value_signal_init + ';\n';
  return code;
};

Blockly.VHDL['variable'] = function(block) {
  var value_variable = Blockly.VHDL.valueToCode(block, 'variable', Blockly.VHDL.ORDER_NONE);
  var value_list = Blockly.VHDL.valueToCode(block, 'list', Blockly.VHDL.ORDER_NONE);
  var code = 'variable ' + value_variable + ': ' + value_list + ';\n';
  return code;
};

Blockly.VHDL['association'] = function(block) {
  var value_signal_name = Blockly.VHDL.valueToCode(block, 'signal_name', Blockly.VHDL.ORDER_NONE);
  var dropdown_association = block.getFieldValue('association');
  var value_variable = Blockly.VHDL.valueToCode(block, 'variable', Blockly.VHDL.ORDER_NONE);
  var code = value_signal_name + ' ' + dropdown_association + ' ' + value_variable + ';\n';
  return code;
};

Blockly.VHDL['name_type'] = function(block) {
  var value_name = Blockly.VHDL.valueToCode(block, 'name', Blockly.VHDL.ORDER_NONE);
  var value_type = Blockly.VHDL.valueToCode(block, 'type', Blockly.VHDL.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + ' : ' + value_type + '\n';
  return code;
};

Blockly.VHDL['association_delay'] = function(block) {
  var value_signal_name = Blockly.VHDL.valueToCode(block, 'signal_name', Blockly.VHDL.ORDER_NONE);
  var value_variable = Blockly.VHDL.valueToCode(block, 'variable', Blockly.VHDL.ORDER_NONE);
  var value_delay = Blockly.VHDL.valueToCode(block, 'delay', Blockly.VHDL.ORDER_NONE);
  var code = value_signal_name + ' <= ' + value_variable + ' after ' + value_delay + ';\n';
  return code;
};

Blockly.VHDL['attribute'] = function(block) {
  var value_atribute_name = Blockly.VHDL.valueToCode(block, 'atribute_name', Blockly.VHDL.ORDER_NONE);
  var value_type_name = Blockly.VHDL.valueToCode(block, 'type_name', Blockly.VHDL.ORDER_NONE);
  var code = 'attribute ' + value_atribute_name + ': ' + value_type_name + ';\n';
  return code;
};

Blockly.VHDL['attribute_of'] = function(block) {
  var value_atribute_name = Blockly.VHDL.valueToCode(block, 'atribute_name', Blockly.VHDL.ORDER_NONE);
  var value_variable = Blockly.VHDL.valueToCode(block, 'variable', Blockly.VHDL.ORDER_NONE);
  var value_type_name = Blockly.VHDL.valueToCode(block, 'type_name', Blockly.VHDL.ORDER_NONE);
  var value_value = Blockly.VHDL.valueToCode(block, 'value', Blockly.VHDL.ORDER_NONE);
  var code = 'attribute ' + value_atribute_name + ' of ' +  value_variable + ': ' +  value_type_name + ' is ' + value_value + ';\n';
  return code;
};

Blockly.VHDL['type'] = function(block) {
  var value_type = Blockly.VHDL.valueToCode(block, 'type', Blockly.VHDL.ORDER_NONE);
  var dropdown_type_list = block.getFieldValue('type_list');
  var value_list = Blockly.VHDL.valueToCode(block, 'list', Blockly.VHDL.ORDER_NONE);
  var code = 'type ' + value_type + ' ' + dropdown_type_list + ' (' + value_list + ');\n';
  return code;
};

Blockly.VHDL['subtype'] = function(block) {
  var value_subtype = Blockly.VHDL.valueToCode(block, 'subtype', Blockly.VHDL.ORDER_NONE);
  var value_type = Blockly.VHDL.valueToCode(block, 'base_type', Blockly.VHDL.ORDER_NONE);
  var code = 'subtype ' + value_subtype + ' is ' + value_type + ';\n';
  return code;
};

Blockly.VHDL['subtype_range'] = function(block) {
  var value_subtype = Blockly.VHDL.valueToCode(block, 'subtype', Blockly.VHDL.ORDER_NONE);
  var value_base_type = Blockly.VHDL.valueToCode(block, 'base_type', Blockly.VHDL.ORDER_NONE);
  var value_type = Blockly.VHDL.valueToCode(block, 'type', Blockly.VHDL.ORDER_NONE);
  var code = 'subtype ' + value_subtype + ' is ' + value_base_type + ' range ' + value_type + ';\n';
  return code;
};

Blockly.VHDL['type_array'] = function(block) {
  var value_type1 = Blockly.VHDL.valueToCode(block, 'type1', Blockly.VHDL.ORDER_NONE);
  var value_type2 = Blockly.VHDL.valueToCode(block, 'type2', Blockly.VHDL.ORDER_NONE);
  var value_range = Blockly.VHDL.valueToCode(block, 'range', Blockly.VHDL.ORDER_NONE);
  var code = 'type ' + value_type1 + ' is array (' + value_type2 + ') of ' + value_range + ';\n';
  return code;
};

Blockly.VHDL['array_type_type'] = function(block) {
  var value_type = Blockly.VHDL.valueToCode(block, 'type', Blockly.VHDL.ORDER_NONE);
  var value_index_type = Blockly.VHDL.valueToCode(block, 'index_type', Blockly.VHDL.ORDER_NONE);
  var value_range = Blockly.VHDL.valueToCode(block, 'range', Blockly.VHDL.ORDER_NONE);
  var value_data_type = Blockly.VHDL.valueToCode(block, 'data_type', Blockly.VHDL.ORDER_NONE);
  var code = 'type ' + value_type + ' is array (' + value_index_type + ' ' + value_range + ') of ' + value_data_type + ';\n';
  return code;
};

Blockly.VHDL['alias'] = function(block) {
  var text_alias_name = Blockly.VHDL.valueToCode(block, 'alias_name', Blockly.VHDL.ORDER_NONE);
  var text_type = Blockly.VHDL.valueToCode(block, 'type', Blockly.VHDL.ORDER_NONE);
  var text_name = Blockly.VHDL.valueToCode(block, 'name', Blockly.VHDL.ORDER_NONE);
  var code = 'alias ' + text_alias_name + ' : ' + text_type  + ' is ' + text_name + ';\n';
  return code;
};

Blockly.VHDL['disconnect'] = function(block) {
  var value_signal = Blockly.VHDL.valueToCode(block, 'signal', Blockly.VHDL.ORDER_NONE);
  var value_type = Blockly.VHDL.valueToCode(block, 'type', Blockly.VHDL.ORDER_NONE);
  var value_time = Blockly.VHDL.valueToCode(block, 'time', Blockly.VHDL.ORDER_NONE);
  var code = 'disconnect ' +  value_signal + ': ' + value_type + ' after ' + value_time  + ';\n';
  return code;
};

Blockly.VHDL['record'] = function(block) {
  var text_record_name = block.getFieldValue('record_name');
  var statements_record = Blockly.VHDL.statementToCode(block, 'record');
  var text_record_name_end = block.getFieldValue('record_name_end');
  var code = 'type ' +  text_record_name + ' is record' + '\n' + statements_record + 'end record ' + text_record_name_end + ';\n';
  return code;
};

Blockly.VHDL['proc_pin_name'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_pin_name = Blockly.VHDL.valueToCode(block, 'pin_name', Blockly.VHDL.ORDER_NONE);
  var dropdown_in_out = block.getFieldValue('in_out');
  var value_pin_type = Blockly.VHDL.valueToCode(block, 'pin_type', Blockly.VHDL.ORDER_NONE);
  var code = dropdown_type + ' ' + value_pin_name + ' ' + dropdown_in_out + ' ' + value_pin_type + ';\n';
  return code;
};





