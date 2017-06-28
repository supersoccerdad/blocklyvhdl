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

goog.provide('Blockly.VHDL.package');

goog.require('Blockly.VHDL');

Blockly.VHDL['package'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_package = block.getFieldValue('package');
  var statements_declarations = VHDL.Blocks.statementToCode(block, 'declarations');
  var text_end_name = block.getFieldValue('end_name');
  var code = dropdown_package + ' ' + text_name + ' is ' + '\n' + statements_declarations + 'end ' + text_end_name + ';\n';;
  return code;
};



