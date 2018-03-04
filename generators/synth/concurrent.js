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

Blockly.SYNTH['process'] = function(block) {
  var text_label_begin = block.getFieldValue('label_begin');
  var statements_declarations = Blockly.SYNTH.statementToCode(block, 'declarations');
  var statements_begin = Blockly.SYNTH.statementToCode(block, 'begin');
  var text_label_end = block.getFieldValue('label_end');
  if (block.getFieldValue('sens')) {
     var sens = "(" + block.getFieldValue('sens') + ")\n";
  } else {
     var sens = "\n";
	 }
  var code = "if ("
  sens=sens.slice(1, sens.length-2)
  sens= sens.split(",")
  for (var n=0; n<sens.length; n++){
	  if (n<sens.length-1){
	    code = code + sens[n] + ".pre!=" + sens[n] + ".val || "
	  } else {
		  code = code + sens[n] + ".pre!=" + sens[n] + ".val){"
	  }
  }
  
  statements_begin=statements_begin.replace(/\n/g, '\nProcess')
  
  code = code + statements_begin
  
  code =code + "} else {\n"
  var test=statements_begin.split("\n")  
  code = code + "}" 
  return code;
};

Blockly.SYNTH['procedure_call'] = function(block) {
  var value_procedurename = Blockly.SYNTH.valueToCode(block, 'procedurename', Blockly.SYNTH.ORDER_NONE);
  var value_values = Blockly.SYNTH.valueToCode(block, 'values', Blockly.SYNTH.ORDER_NONE);
  var code = value_procedurename + ' (' + value_values + ');' + '\n';
  return code;
};

Blockly.SYNTH['generate'] = function(block) {
  var text_generate_label = block.getFieldValue('generate_label');
  var value_start = Blockly.SYNTH.valueToCode(block, 'start', Blockly.SYNTH.ORDER_NONE);
  var value_end = Blockly.SYNTH.valueToCode(block, 'end', Blockly.SYNTH.ORDER_NONE);
  var statements_generate = Blockly.SYNTH.statementToCode(block, 'generate');
  var text_end_label = block.getFieldValue('end_label');
  var code = text_generate_label + ': for ' + value_start + ' in ' + value_end + ' generate\n'; 
  var code = code + statements_generate + 'end generate ' + text_end_label + ';\n';
  return code;
};



