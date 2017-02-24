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

Blockly.VHDL['file'] = function(block) {
  var value_filevar = Blockly.VHDL.valueToCode(block, 'filevar', Blockly.VHDL.ORDER_NONE);
  var value_filetype = Blockly.VHDL.valueToCode(block, 'filetype', Blockly.VHDL.ORDER_NONE);
  var dropdown_filemode = block.getFieldValue('filemode');
  var value_filename = Blockly.VHDL.valueToCode(block, 'filename', Blockly.VHDL.ORDER_NONE);
  var code = 'file ' + value_filevar + ': ' + value_filetype + ' open ' + dropdown_filemode + ' is ' +  value_filename + ';\n';
  return code;
};

Blockly.VHDL['write'] = function(block) {
  var value_write1 = Blockly.VHDL.valueToCode(block, 'write1', Blockly.VHDL.ORDER_NONE);
  var value_write2 = Blockly.VHDL.valueToCode(block, 'write2', Blockly.VHDL.ORDER_NONE);
  var code = 'write (' +  value_write1 + ', ' + value_write2 + ');' + '\n';
  return code;
};

Blockly.VHDL['write2'] = function(block) {
  var value_write1 = Blockly.VHDL.valueToCode(block, 'write1', Blockly.VHDL.ORDER_NONE);
  var value_write2 = Blockly.VHDL.valueToCode(block, 'write2', Blockly.VHDL.ORDER_NONE);
  var value_write3 = Blockly.VHDL.valueToCode(block, 'write3', Blockly.VHDL.ORDER_NONE);
  var value_write4 = Blockly.VHDL.valueToCode(block, 'write4', Blockly.VHDL.ORDER_NONE);
  var code = 'write (' +  value_write1 + ', ' + value_write2 + ', ' +  value_write3 + ', ' + value_write4 + ');' + '\n';
  return code;
};

Blockly.VHDL['writeline'] = function(block) {
  var value_write1 = Blockly.VHDL.valueToCode(block, 'write1', Blockly.VHDL.ORDER_NONE);
  var value_write2 = Blockly.VHDL.valueToCode(block, 'write2', Blockly.VHDL.ORDER_NONE);
  var code = 'writeline (' + value_write1 + ', ' + value_write2 + ')' + ';\n';
  return code;
};

Blockly.VHDL['read'] = function(block) {
  var value_read1 = Blockly.VHDL.valueToCode(block, 'read1', Blockly.VHDL.ORDER_NONE);
  var value_read2 = Blockly.VHDL.valueToCode(block, 'read2', Blockly.VHDL.ORDER_NONE);
  var code = 'read (' +  value_read1 + ', ' + value_read2 + ');' + '\n';
  return code;
};

Blockly.VHDL['readline'] = function(block) {
  var value_read1 = Blockly.VHDL.valueToCode(block, 'read1', Blockly.VHDL.ORDER_NONE);
  var value_read2 = Blockly.VHDL.valueToCode(block, 'read2', Blockly.VHDL.ORDER_NONE);
  var code = 'readline (' +  value_read1 + ', ' + value_read2 + ');' + '\n';
  return code;
};

