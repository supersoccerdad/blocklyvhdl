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

Blockly.VHDL['assert'] = function(block) {
  var value_condition = Blockly.VHDL.valueToCode(block, 'condition', Blockly.VHDL.ORDER_NONE);
  var value_test_string = Blockly.VHDL.valueToCode(block, 'test_String', Blockly.VHDL.ORDER_NONE);
  var dropdown_severity = block.getFieldValue('severity');
  var code = "";
  return code;
};

Blockly.VHDL['testbench'] = function(block) {
  var text_testbench = block.getFieldValue('testbench');
  var statements_testbench = Blockly.VHDL.statementToCode(block, 'testbench');
  var res= statements_testbench.split(";");
  var code = ""
  return code;
};

Blockly.VHDL['tb_clockgen'] = function(block) {
  var text_clockname = block.getFieldValue('clockname');
  var text_periods = block.getFieldValue('periods');
  // TODO: Assemble JavaScript into code variable.
  
  var code = '{name: \'' + text_clockname + '\', wave: \'p';
  for (var n=0; n<text_periods; n++){
		code = code + '.' ;
  }
  code = code + '\'},\n';
  return code;
};

Blockly.VHDL['tb_signal'] = function(block) {
  var text_signalname = block.getFieldValue('signalname');
  var text_trace = block.getFieldValue('trace');
  var code= "var " + "inp_" + text_signalname +  " = " +  "\'" + text_trace + "\';\n"

  return code;
};

Blockly.VHDL['testbench_out'] = function(block) {
  var text_output = block.getFieldValue('output');
  var code = 'var ' + "out_" + text_output + " = \'\'";
  return code;
};


