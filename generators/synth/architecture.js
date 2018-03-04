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

Blockly.SYNTH['name'] = function(block) {
  var text_name = block.getFieldValue('Name');
  var code = text_name;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['generate_if'] = function(block) {
  var text_label = block.getFieldValue('label');
  var value_label = Blockly.SYNTH.valueToCode(block, 'label', Blockly.SYNTH.ORDER_NONE);
  var statements_name = Blockly.SYNTH.statementToCode(block, 'NAME');
  var text_endgenerate = block.getFieldValue('endgenerate');
  var code = text_label + ': if ' + value_label + ' generate\n' + statements_name + 'end ' + text_endgenerate + ';\n';
  return code;
};

Blockly.SYNTH['architecture'] = function(block) {
  var text_architecture_name = block.getFieldValue('architecture_name');
  var text_entity_name = block.getFieldValue('entity_name');
  var statements_declarations = Blockly.SYNTH.statementToCode(block, 'declarations');
  var statements_concurent_statements = Blockly.SYNTH.statementToCode(block, 'concurent_statements');
  var text_end_arch_name = block.getFieldValue('end_arch_name');
  var code = statements_concurent_statements;
  var test="";
  var strcode=code.split("\n")
  for(var n=0; n<strcode.length-1; n++){
    if (strcode[n].search("association")>0) {
      for(var i=n+1; i<strcode.length-1; i++){
		  var strcode1=strcode[n].replace("(","");
		  strcode1=strcode1.replace(")","");
		  strcode1=strcode1.trim();
          strcode1=strcode1.split(" ");
		  var strcode2=strcode[i].replace("(","");
		  strcode2=strcode2.trim();
          strcode2=strcode2.split(" "); 
          for(var t=2; t<strcode1.length-1; t=t+2){
              if (strcode1[t]==strcode2[0]){
                  test=strcode[n]
                  strcode[n]=strcode[i]
                  strcode[i]=test
                  {break}                                           
              }
          }
      }
   }
}
code=""
var wavestring;
for(var n=0; n<strcode.length-1; n++){
  wavestring=strcode[n].trim()
  wavestring=wavestring.split(" ");
  test=wavestring[0]
  if (test.indexOf("_i")!=-1) {
//  if (test.includes("_i")) {
	 test=test.split("=");
	 code = code + test[0] + "=\'\'\n"	
  }
}

for(var n=0; n<strcode.length-1; n++){
  code=code.concat(strcode[n] + "\n");
  strcode[n]=strcode[n].trim()
  strcode[n]=strcode[n].split(" ");
  test=strcode[n][0]
  if (test!="if" && test!="}") {
  }
}

statements_declarations  = statements_declarations  + 'var error=\"\"\n'

code = statements_declarations + "\nfunction " + text_entity_name + "(){\n" + code;
var lines = code.split(/\r\n|\r|\n/);  
var funcarray=[]
var label=[]
var funcname=""
var line
for (var n=0; n<lines.length; n++){

	line = lines[n].trim().split(" ")
	if (line[0]=="function" && line[1] && (line[1].indexOf("latchstr")!=-1)){funcarray.push(line[1])}
	if (line[0]=="Process" && line[2]=="function" && line[2] ){funcarray.push(line[3]);label.push(line[0]);}	
}



//var rescntr=1
var doublefound=false
var resolutioncode=""
var deletename=""
for (var n=0; n<funcarray.length; n++){
	var rescntr=1
	for (var m=n+1; m<funcarray.length; m++){
		if(funcarray[n]==funcarray[m]){
			funcname=funcarray[n].split("f(")[0]
			if (rescntr==1){
//				alert("function " + funcarray[m])
			code=code.replace("function " + funcarray[m], "function "+ funcarray[m].split("(")[0] + "_" + rescntr + "(latchstr,")
			var res = code.split("function "+ funcarray[m].split("(")[0] + "_" + rescntr + "(latchstr, bypass){");
			code= res[0] + "function "+ funcarray[m].split("(")[0] + "_" + rescntr + "(latchstr, bypass){\n" + "var " + funcname + "_" + rescntr + " = " + "{val:false, pre:\'\', data:\'\', wave:\'\', type:" + funcname + ".type" + ", name:\'" + funcname + "_" + rescntr + "\'};" + res[1]
			code=code.replace("return " + funcname + ".val", "return " + funcname + "_" + rescntr)
            code=code.replace(funcname + ".val=", funcname + "_" + rescntr + ".val=")
//			alert(res[0])
//			alert(res[1])
			code=code.replace(funcarray[n].split("(")[0] + '(\"\", false)', "")
			rescntr=rescntr+1
			}
			code=code.replace("function " + funcarray[m], "function "+ funcarray[m].split("(")[0] + "_" + rescntr + "(latchstr,")
			var res = code.split("function "+ funcarray[m].split("(")[0] + "_" + rescntr + "(latchstr, bypass){");
			code= res[0] + "function "+ funcarray[m].split("(")[0] + "_" + rescntr + "(latchstr, bypass){\n" + "var " + funcname + "_" + rescntr + " = " + "{val:false, pre:\'\', data:\'\', wave:\'\', type:" + funcname + ".type" + ", name:\'" + funcname + "_" + rescntr + "\'};" + res[1]
			code=code.replace("return " + funcname + ".val", "return " + funcname + "_" + rescntr)
			res = code.split("var " + funcname + "_" + rescntr)
			var c2_1
            res[1]=res[1].replace(funcname + ".val=", funcname + "_" + rescntr + ".val=")
			code=res[0] + "var " + funcname + "_" + rescntr + res[1]
			
//			alert(res[0])
//			alert(res[1])
			code=code.replace(funcarray[n].split("(")[0] + '(\"\", false)', "")
			if (code.indexOf("function " + funcarray[m])!=-1){
			rescntr=rescntr+1}
		}
	       funcname=funcarray[n].split("f(")[0]

var test5=funcarray[n]

						  if(resolutioncode=="" || resolutioncode.search("function " + funcname)==-1){

if(code.search(funcname + ".type=\'std_logic\';")==-1 && rescntr>1){
		   resolutioncode=resolutioncode + funcname + "f(\'\', false)\n"
		   resolutioncode=resolutioncode + "var " + funcname + "r=\'\';\n";
           resolutioncode=resolutioncode + "function " + funcarray[n] + " bypass){\n"
		   resolutioncode=resolutioncode + "if ("+ funcname + ".type==\'std_logic\'){\n"
		   resolutioncode=resolutioncode + funcname + "r=" + funcname + "f_" + "1(\'\', true)\n"   
           resolutioncode=resolutioncode + "for (var m=2;m<" + (rescntr + 1) + ";m++){\n"
           resolutioncode=resolutioncode + funcname + "r=resolution(eval(\"" + funcname + "f_\" + m + \"(latchstr, true)\")," + funcname + "r)\n}"
           resolutioncode=resolutioncode + "if (!bypass){\n"
           resolutioncode=resolutioncode + "if(" + funcname + "r==\'u\' || " + funcname + "r==\'w\' || " + funcname + "r==\'d\'){" + funcname + ".data.push(" + funcname + "r); " + funcname + "r=\'=\'}\n"		   
           resolutioncode=resolutioncode + "if (" + funcname + "r==" + funcname + ".pre && " + funcname + ".wave!=\"\") {" + funcname + ".wave=" + funcname + ".wave + \".\"} else {" + funcname + ".wave="  + funcname + ".wave + " + funcname + "r}\n"
           resolutioncode=resolutioncode + funcname + ".pre=" + funcname + "r\n"
           resolutioncode=resolutioncode + "}\n"
           resolutioncode=resolutioncode + "return " + funcname + "r\n"
   		   resolutioncode=resolutioncode + "}\n"
		   resolutioncode=resolutioncode + "error=error + \'<br>Error: one or more sources are driving signal c which is not from a resolved type (std_logic)\'\n" 	   
		   resolutioncode=resolutioncode + "}\n"
		   }
}
}
}
// Count the total of same functions in a process and put them in the else block
var func_num=0
var end_num=0;
var process_else="";
var previous_line=""
var lines = code.split(/\r\n|\r|\n/);  
for (var n=0; n<lines.length; n++){
  line = lines[n].trim().split(" ")
  if (line[0]=="Process" && line[2]=="function" ){
  if(line[3].indexOf("_")!=-1 ){
	func_num=func_num+1
    process_else=process_else + "function " + line[3] + " bypass){return\'hold\'}\n"
  } else {
	  	    func_num=func_num+1
  process_else=process_else + "function " + line[3] + " bypass){return\'hold\'}\n"	  
  }
 }	 
if (line[0]=="Process}" && line[2]!="{function"){
    code=code.replace("  Process} else {", "  Process_} else {" + process_else)
	  end_num=func_num
	  process_else=""
  } 
  previous_line=line[0]
}
if(end_num>0 && lines[lines.length-2].indexOf("Process")!=-1){
code=code+"}\n"
}

code=code+resolutioncode
code = code + "}\n" 

code=code.replace(/Process_/g, "")
code=code.replace(/Process/g, "")


return code;
};

Blockly.SYNTH['port_map'] = function(block) {
  var text_label = block.getFieldValue('label');
  var text_component = block.getFieldValue('component');
  var statements_name = Blockly.SYNTH.statementToCode(block, 'NAME');
  var statements_name = statements_name.substring(0, statements_name.length - 0)
  var code = text_label + ': ' + text_component + statements_name + ';\n';
  return code;
};

Blockly.SYNTH['map_list'] = function(block) {
  var dropdown_map = block.getFieldValue('map');
  var value_port = Blockly.SYNTH.valueToCode(block, 'port', Blockly.SYNTH.ORDER_ATOMIC);
  var code = '\n' + dropdown_map + value_port;
  return code;
};

Blockly.SYNTH['map_association'] = function(block) {
  var value_signal_name = Blockly.SYNTH.valueToCode(block, 'signal_name', Blockly.SYNTH.ORDER_NONE);
  var value_signal_type = Blockly.SYNTH.valueToCode(block, 'signal_type', Blockly.SYNTH.ORDER_NONE);
  var code = value_signal_name + ' => ' + value_signal_type + ',\n';
  return code;
};

Blockly.SYNTH['constant2'] = function(block) {
  var value_constant_name = Blockly.SYNTH.valueToCode(block, 'constant_name', Blockly.SYNTH.ORDER_NONE);
  var value_constant_type = Blockly.SYNTH.valueToCode(block, 'constant_type', Blockly.SYNTH.ORDER_NONE);
  var code = 'constant ' + value_constant_name + ' : ' + value_constant_type + '\n';
  return code;
};

