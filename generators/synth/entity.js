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

Blockly.SYNTH['entity'] = function(block) {
  var text_entity = block.getFieldValue('entity');
  var statements_generic_port = Blockly.SYNTH.statementToCode(block, 'generic_port');
  var text_end_entity = block.getFieldValue('end_entity');
////  var code = "<script src=\"http://wavedrom.com/skins/default.js\" type=\"text/javascript\"></script>\n"
////  code = code + "<script src=\"http://wavedrom.com/wavedrom.min.js\" type=\"text/javascript\"></script><script>\n"
//  var code = "<script src=\"C:TEMP/wavedrom-master/skins/default.js\" type=\"text/javascript\"></script>\n"
//  code = code + "<script src=\"C:TEMP/wavedrom-master/wavedrom.min.js\" type=\"text/javascript\"></script><script>\n"
  var code = "<script src=\"http://www.blocklyvhdl.com/demo/wavedrom/skins/default.js\" type=\"text/javascript\"></script>\n"
  code = code + "<script src=\"http://www.blocklyvhdl.com/demo/wavedrom/wavedrom.min.js\" type=\"text/javascript\"></script><script>\n"

  code = code + statements_generic_port;
  code = code + "\n" + "var latch=false\n"
  return code;
};

Blockly.SYNTH['generic'] = function(block) {
  var dropdown_generic = block.getFieldValue('port_list');
  var statements_generic_inputs = Blockly.SYNTH.statementToCode(block, 'generic_inputs' , Blockly.SYNTH.ORDER_NONE);
  var code = statements_generic_inputs;
  return code;
};

Blockly.SYNTH['port_pin_name'] = function(block) {
  var value_pin_name = Blockly.SYNTH.valueToCode(block, 'pin_name', Blockly.SYNTH.ORDER_NONE);
  var dropdown_in_out = block.getFieldValue('in_out');
  var value_pin_type = Blockly.SYNTH.valueToCode(block, 'pin_type', Blockly.SYNTH.ORDER_NONE);
  var code ="";
  if (dropdown_in_out=="in"){
//    code = 'var ' + value_pin_name + '=false;\n';
//	code = code + 'var ' + value_pin_name + '_pre ' + ';\n';
//	code = code + 'var ' + value_pin_name + "_data=[]" + ';\n';
//	code = code + 'var ' + value_pin_name + "_wave=\'\'" + ';\n';
//	code = code + 'var ' + value_pin_name + "_type=\'" + value_pin_type + "\'" + ';\n';

code = code + 'var ' + value_pin_name + '= {val:false, pre:\"\", data:\"\", wave:\"\", type:\"\", name:\"' + value_pin_name + '\"};\n'
code = code + value_pin_name + '.type=\"' + value_pin_type + '\";\n' 
	
    code = code + 'function ' + value_pin_name + 'f(latchstr, bypass) {\n'
	code = code + "if (" + value_pin_name + ".val==\'\' | " + value_pin_name + ".val== \' \'){" + value_pin_name + ".val=\'u\'}\n"
	
	code = code + "if (!bypass){\n"
    code = code + "if(" + value_pin_name + ".val==\'u\' || " + value_pin_name + ".val==\'w\' || " + value_pin_name + ".val==\'d\'){" + value_pin_name + ".data.push(" + value_pin_name + ".val); " + value_pin_name + ".val=\'=\'}\n"
    code = code + 'if (' + value_pin_name + '.val==' + value_pin_name + '.pre && ' + value_pin_name + '.wave!=\"\") {' + value_pin_name + '.wave=' + value_pin_name + '.wave + \".\"} else {' + value_pin_name + '.wave=' + value_pin_name + '.wave + ' + value_pin_name + '.val}\n'
    code = code + value_pin_name + ".pre=" + value_pin_name + ".val\n"
	code = code + '}\n'
	code = code + 'return ' + value_pin_name + '\n'
	code = code + '}\n'

  } else {

code = 	code + 'var ' + value_pin_name + '= {val:false, pre:\"\", data:\"\", wave:\"\", type:\"' + value_pin_type + '\"};\n'
code = code + value_pin_name + '.type=\"' + value_pin_type + '\";\n'  
//    code = code + 'var ' + value_pin_name + '.val=\'\';\n';
//	code = code + 'var ' + value_pin_name + '.pre ' + ';\n';
//	code = code + 'var ' + value_pin_name + ".wave=\'\' " + ';\n';
//	code = code + 'var ' + value_pin_name + ".data=[]" + ';\n';
	
//	code = code + 'var ' + value_pin_name + ".type=\'" + value_pin_type + "\'" + ';\n';
  }
  return code;
};



