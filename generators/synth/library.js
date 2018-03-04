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

Blockly.SYNTH['library'] = function(block) {
  var statements_declarations = Blockly.SYNTH.statementToCode(block, 'declarations');
  var dropdown_ieee = block.getFieldValue('library');
//  var code = "<!DOCTYPE html>\n<html>\n<body>\n"
//  code = code + "<body onload=\"WaveDrom.ProcessAll()\">\n" 
//  code = code + statements_declarations
  var code = '<script>var library=[];</script>\n'
  var code = code + statements_declarations
  return code;
};

Blockly.SYNTH['ieee'] = function(block) {
  var dropdown_ieee = block.getFieldValue('IEEE');
  var code = '<script src=\"' + "http://www.blocklyvhdl.com/demo/library/" + dropdown_ieee + '.js\" type=\"text/javascript\"></script>\n'
  code= code + '<script>library.push("' + dropdown_ieee + '")</script>\n'
  return code;
};

Blockly.SYNTH['std_textio'] = function(block) {
  var code = 'use STD.textio;\n';
  return code;
};

Blockly.SYNTH['use'] = function(block) {
  var value_use = Blockly.SYNTH.valueToCode(block, 'use', Blockly.SYNTH.ORDER_NONE);
  var value_library = Blockly.SYNTH.valueToCode(block, 'library', Blockly.SYNTH.ORDER_NONE);
  var code = 'use ' + value_use + '.' + value_library + ';\n';
  return code;
};

Blockly.SYNTH['std_logic'] = function(block) {
  var dropdown_std_bit = block.getFieldValue('std_bit');
  var code = dropdown_std_bit;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['std_logic_init'] = function(block) {
  var dropdown_std_bit = block.getFieldValue('std_bit');
  var text_bit_value = Blockly.SYNTH.valueToCode(block, 'bit_value', Blockly.SYNTH.ORDER_NONE);
  var code = dropdown_std_bit + ' := ' + text_bit_value;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['vector'] = function(block) {
  var dropdown_vector = block.getFieldValue('vector');
  var text_msb = Blockly.SYNTH.valueToCode(block, 'msb', Blockly.SYNTH.ORDER_NONE);
  var dropdown_range = block.getFieldValue('range');
  var text_lsb = Blockly.SYNTH.valueToCode(block, 'lsb', Blockly.SYNTH.ORDER_NONE);
  var code = dropdown_vector + "(" + text_msb + " " + dropdown_range + " " + text_lsb + ")";
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['vector_init'] = function(block) {
  var dropdown_vector = block.getFieldValue('vector');
  var text_msb = Blockly.SYNTH.valueToCode(block, 'msb', Blockly.SYNTH.ORDER_NONE);
  var dropdown_range = block.getFieldValue('range');
  var text_lsb = Blockly.SYNTH.valueToCode(block, 'lsb', Blockly.SYNTH.ORDER_NONE);
  var text_init = Blockly.SYNTH.valueToCode(block, 'init', Blockly.SYNTH.ORDER_NONE);
  var code = dropdown_vector + "(" + text_msb + " " + dropdown_range + " " + text_lsb + ") :=" + text_init; // + ";"; "\"" + text_init + "\"";
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['integer'] = function(block) {
  var dropdown_integer = block.getFieldValue('integer');
  var code = dropdown_integer;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['integer_init'] = function(block) {
  var dropdown_integer = block.getFieldValue('integer');
  var text_integer_value = Blockly.SYNTH.valueToCode(block, 'integer_value', Blockly.SYNTH.ORDER_NONE);
  var code = dropdown_integer + ' := ' + text_integer_value;
  return [code, Blockly.SYNTH.ORDER_NONE];
};



