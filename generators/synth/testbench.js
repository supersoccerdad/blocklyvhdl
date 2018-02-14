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

Blockly.SYNTH['assert'] = function(block) {
  var value_condition = Blockly.SYNTH.valueToCode(block, 'condition', Blockly.SYNTH.ORDER_NONE);
  var value_test_string = Blockly.SYNTH.valueToCode(block, 'test_String', Blockly.SYNTH.ORDER_NONE);
  var dropdown_severity = block.getFieldValue('severity');
  var code = 'assert ' + value_condition + ' report ' + value_test_string + ' severity ' + dropdown_severity + ';\n';
  return code;
};

Blockly.SYNTH['testbench'] = function(block) {
  var text_testbench = block.getFieldValue('testbench');
  var statements_testbench = Blockly.SYNTH.statementToCode(block, 'testbench');
  var res= statements_testbench.split(";");
  var reset=""
  for (var n=0; n<res.length; n++){
  	  res[n]=res[n].trim();
      res[n]=res[n].split(" ");
  }

  var code = statements_testbench + "\n";
  code = code + "\n";
//  code = code + "var wavesignal = \"{signal: [\"\n"

  for (var n=0; n<res.length-1; n++){
	  if ((res[n][1].indexOf("out")!=-1) || (res[n][1].indexOf("internal")!=-1)){
	  } 
	  else {
		 reset=res[n][1].replace("inp_","")
         code = code + reset + "= {val:false, pre:\'\', data:\'\', wave:\'\'};\n";
      }
  }

  code = code + "for (n=0; n<" + ((res[0][3].length)-2) + "; n++){\n"
  
  for (var n=0; n<res.length-1; n++){
	  if ((res[n][1].indexOf("out")!=-1) || (res[n][1].indexOf("internal")!=-1)){
	  } 
	  else {
         code = code + "if " + "(" + res[n][1] + "[n]" + "=='.') {" + res[n][1].slice(4) + ".val=" + res[n][1].slice(4) + ".pre} else {" + res[n][1].slice(4) + ".val=" + res[n][1] + "[n]};\n";
      }
  }
  code = code + text_testbench + "()\n"; 
  
  for (var n=0; n<res.length-1; n++){
	  if ((res[n][1].indexOf("out")!=-1) || (res[n][1].indexOf("internal")!=-1)){
//	  if (res[n][1].includes("out") || res[n][1].includes("internal")){
	  } 
	  else {
         code = code + res[n][1].slice(4) + "f(\'\', false)\n";
      }
  }
  
  code = code + "if (latch || error!=\'\') {\n" 
  code = code + "break}\n}\n"
  code = code + "</script>\n"
  code = code + "<script type=\"WaveDrom\">\n" 
  code = code + "{ signal : [\n"
  for (var n=0; n<res.length-1; n++){
	  if ((res[n][1].indexOf("out")!=-1) || (res[n][1].indexOf("int")!=-1)){
//	  if (res[n][1].includes("out") || res[n][1].includes("int")){
	     code = code + "{ name: \'" + res[n][1].substr(4) + "\' , wave: " +  res[n][1].substr(4) + ".wave" + ", data: " + res[n][1].substr(4) + ".data},\n";
	} else {
//         code = code + "{ name: "  + "'" + res[n][1].substr(4) + "'" + " , wave: " + res[n][3].replace("'","\'") + "},\n";
//		 code = code + "{ name: "  + "'" + res[n][1].substr(4) + "'" + " , wave: " + res[n][1].replace("'","\'") + ", data: " + res[n][1].substr(4) + "_data},\n";
	     code = code + "{ name: \'" + res[n][1].substr(4) + "\' , wave: " +  res[n][1].substr(4) + ".wave" + ", data: " + res[n][1].substr(4) + ".data},\n";

		 }
  }
  code = code + "]}"
  code= code + "\n</script>\n"
  code= code + '<div id=\"log\"></div>\n'
  code= code + '<script>\n'
  code= code + 'document.getElementById(\"log\").innerHTML = window.error'
//  code= code + '</script>\n'
//  code= code + "</body>\n</html>"
  return code;
};

Blockly.SYNTH['tb_clockgen'] = function(block) {
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

Blockly.SYNTH['tb_signal'] = function(block) {
  var text_signalname = block.getFieldValue('signalname');
  var text_trace = block.getFieldValue('trace');
  text_trace=text_trace.replace(/ /g,"u")
  var code= "var " + "inp_" + text_signalname +  " = \'" + text_trace + "\';\n"

  return code;
};

Blockly.SYNTH['testbench_out'] = function(block) {
  var text_output = block.getFieldValue('output');
  var code = 'var ' + "out_" + text_output + " = \'\';\n";
  return code;
};

Blockly.SYNTH['tb_out'] = function(block) {
  var text_output = block.getFieldValue('output');
  var code = 'var ' + "out_" + text_output + " = \'\';\n";
  return code;
};

Blockly.SYNTH['tb_internal'] = function(block) {
  var text_output = block.getFieldValue('internal');
  var code = 'var ' + "int_" + text_output + " = \'\';\n";
  return code;
};

