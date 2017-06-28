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

goog.provide('Blockly.VHDL.configuration');

goog.require('Blockly.VHDL');

Blockly.VHDL['configuration'] = function(block) {
  var text_name = block.getFieldValue('name');
  var text_type = block.getFieldValue('type');
  var statements_configuration = Blockly.VHDL.statementToCode(block, 'config_state');
  var text_end_name = block.getFieldValue('end_name');
  var code = 'configuration ' + text_name + ' of ' + text_type + ' is\n' +  statements_configuration + 'end ' + text_end_name +'\n';
  return code;
};

Blockly.VHDL['forconfig'] = function(block) {
  var text_name = block.getFieldValue('name');
  var statements_configuration = Blockly.VHDL.statementToCode(block, 'for_config');
  var code = 'for ' + text_name + '\n' + statements_configuration + 'end for\n';
  return code;
};

Blockly.VHDL['for_arch'] = function(block) {
  var text_label = block.getFieldValue('label');
  var text_comp_name = block.getFieldValue('comp_name');
  var statements_comp_conf = Blockly.VHDL.statementToCode(block, 'comp_conf');
  var code = 'for ' + text_label + ' : ' +  text_comp_name + '\n' + statements_comp_conf + 'end for\n';
  return code;
};