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

Blockly.SYNTH['procedure'] = function(block) {
  var text_procedure_name = block.getFieldValue('procedure_name');
  var statements_parameter_list = Blockly.SYNTH.statementToCode(block, 'parameter_list');
  var statements_declaration = Blockly.SYNTH.statementToCode(block, 'declaration');
  var statements_sequential = Blockly.SYNTH.statementToCode(block, 'sequential');
  var text_end_name = block.getFieldValue('end_name');
  var code = 'procedure ' + text_procedure_name + '(\n';
  code = code  + statements_parameter_list + ') is\n' + 'begin';
  code = code  + statements_declaration + '\n';
  code = code  + statements_sequential + 'end ' + text_end_name + ';\n';
  return code;
};

Blockly.SYNTH['function_pack'] = function(block) {
  var text_name = block.getFieldValue('name');
  var statements_declaration = Blockly.SYNTH.statementToCode(block, 'declaration');
  var value_return = Blockly.SYNTH.valueToCode(block, 'return', Blockly.SYNTH.ORDER_NONE);
  var statements_declaration = statements_declaration.substring(0, statements_declaration.length - 1)
  var code = 'function ' + text_name + ' (\n' + statements_declaration + ')\n  return ' + value_return + ';\n';
  return code;
};

Blockly.SYNTH['component_instantiation'] = function(block) {
  var text_component_name = block.getFieldValue('component_name');
  var statements_generic_port = Blockly.SYNTH.statementToCode(block, 'generic_port');
  var text_end_name = block.getFieldValue('end_name');
  var code = 'component ' + text_component_name + '\n' + statements_generic_port + 'end component ' + text_end_name + ';\n';
  return code;
};

Blockly.SYNTH['alias'] = function(block) {
  var value_alias = Blockly.SYNTH.valueToCode(block, 'alias', Blockly.SYNTH.ORDER_NONE);
  var value_name = Blockly.SYNTH.valueToCode(block, 'name', Blockly.SYNTH.ORDER_NONE);
  var value_type = Blockly.SYNTH.valueToCode(block, 'type', Blockly.SYNTH.ORDER_NONE);
  var code = 'alias ' + value_alias + ': ' + value_alias + ' is ' + value_type + ';\n';
  return code;
};

Blockly.SYNTH['signal'] = function(block) {
  var dropdown_signal = block.getFieldValue('signal');
  var value_signal_name = Blockly.SYNTH.valueToCode(block, 'signal_name', Blockly.SYNTH.ORDER_NONE);
  var value_signal_type = Blockly.SYNTH.valueToCode(block, 'signal_type', Blockly.SYNTH.ORDER_NONE);
  var code = "var " + value_signal_name + "=false\n";
  code = code + "var " + value_signal_name + "_pre" + "=false;\n";
  code = code + "var " + value_signal_name + "_wave" + "=\'\';\n";
  code = code + "var " + value_signal_name + "_data" + "=[];\n";
  return code;
};

Blockly.SYNTH['signal_init'] = function(block) {
  var dropdown_signal = block.getFieldValue('signal');
  var value_signal_name = Blockly.SYNTH.valueToCode(block, 'signal_name', Blockly.SYNTH.ORDER_NONE);
  var value_signal_type = Blockly.SYNTH.valueToCode(block, 'signal_type', Blockly.SYNTH.ORDER_NONE);
  var value_signal_init = Blockly.SYNTH.valueToCode(block, 'signal_init', Blockly.SYNTH.ORDER_NONE);
  var code = dropdown_signal +  ' ' + value_signal_name + ': ' + value_signal_type + ' := ' + value_signal_init + ';\n';
  return code;
};

Blockly.SYNTH['variable'] = function(block) {
  var value_variable = Blockly.SYNTH.valueToCode(block, 'variable', Blockly.SYNTH.ORDER_NONE);
  var value_list = Blockly.SYNTH.valueToCode(block, 'list', Blockly.SYNTH.ORDER_NONE);
  var code = 'variable ' + value_variable + ': ' + value_list + ';\n';
  return code;
};

Blockly.SYNTH['association'] = function(block) {
  var value_signal_name = Blockly.SYNTH.valueToCode(block, 'signal_name', Blockly.SYNTH.ORDER_NONE);
  var dropdown_association = block.getFieldValue('association');
  var value_variable = Blockly.SYNTH.valueToCode(block, 'variable', Blockly.SYNTH.ORDER_NONE);
  var code = value_signal_name + 'f(\"\", false)\n'
  code = code + "function " + value_signal_name + "f(latchstr, bypass){\n"
//  code = code + "if (latchstr.includes(\'" + value_signal_name + "\')!=true){\n"
  code = code + "if (latchstr.indexOf(\'" + value_signal_name + "\')==-1){\n"
  code = code + "var temp=latchstr +" + " \'" + value_signal_name + "\'" + ";\n"
  var res5=""

if (value_variable.indexOf("temp")==-1){
var array_vhdlport =["nand","and","nor","or","xnor","xor","srl","sll"]
var array_javaport =[" && "," && "," || "," || "," != "," != "," << "," >> "]
for (var n=0; n<array_vhdlport.length; n++){
    if (value_variable.indexOf(array_vhdlport[n])!=-1){
        if (value_variable.match(/\(/g)) {
            if (value_variable.match(/\)/g)) {
                if (value_variable.match(/\(/g).length!=value_variable.match(/\)/g).length){
                   alert("there is a mismatch between the amount of left and right brackets")
                   break
                } 
			    else {}
            } else {
              alert("there is a mismatch between the amount of left and right brackets")
              break
            }
        } else {
          value_variable= "(" + value_variable + ")"
        }
    }
}
var count=0
var split_value=value_variable.split(" ");

for (var n=1; n<array_vhdlport.length; n=n+2){
    for (var m=1; m<split_value.length; m=m+2){
        if (split_value[m]==(array_vhdlport[n])){
            split_value[m]=split_value[m].replace(array_vhdlport[n], array_javaport[n])
			if (!split_value[m-1]=="f(temp, true)"){ split_value[m-1]=split_value[m-1] + "f(temp, true)"}
//            if (split_value[m+1].includes(")")){ split_value[m+1]=split_value[m+1].replace(")","f(temp, true))")
		    if (split_value[m+1].idexOf(")")){ split_value[m+1]=split_value[m+1].replace(")","f(temp, true))")
		    } else {
                split_value[m+1]=split_value[m+1] + "f(temp, true)"
			}
		}
	}
}

for (var n=0; n<array_vhdlport.length; n=n+2){
    for (var m=1; m<split_value.length; m=m+2){
        if (split_value[m].indexOf(array_vhdlport[n])!=-1){
//		if (split_value[m].includes(array_vhdlport[n])){
            split_value[m]=split_value[m].replace(array_vhdlport[n], array_javaport[n])
			split_value[m-1]=split_value[m-1] + "f(temp, true)"
			split_value[m+1]=split_value[m+1] + "f(temp, true)"
		    count=1
		    for (var q=m-1; q>=0; q=q-2){
                if (split_value[q].match(/\(/)){
                    count=count-split_value[q].match(/\(/g).length}        
                    if (split_value[q].match(/\)/g)){
                        count=count+split_value[q].match(/\)/g).length}
                    if (count<=0 && split_value[q].match(/\(/g)){
                        value_variable=""
                        var extra_split=""
                        split_value[q]=split_value[q].replace(/\(/g, "( ");
                        extra_split=split_value[q].split(" ")
                        extra_split[-count]= "!"+ extra_split[-count]
                        split_value[q]=""
                        for(var r=0;r<extra_split.length;r++){
                            split_value[q]=split_value[q] + extra_split[r]
                        }
                    break
                }
            }
        }
    }
}
 
for (var n=0; n<split_value.length; n++){
    value_variable=value_variable + split_value[n] + " "
}
}

//remove first spaces in string if any
var res=value_variable.replace(/^\s/, "");
res=res.replace(/\s\s+/g, ' ');
//replace bracket with space with only bracket
res=res.replace(/\( /g, "(");
res=res.replace(/ \)/g, ")");
//find out if brackets are placed in the right order
var x=0;
for (n=0; n<res.length;n++){
  if (res[n]==")"){
     x=x-1;}
  else if (res[n]=="("){
     x=x+1;
  }
  if (x<0) {
    alert("error: brackets are placed wrong")
    break
  }
}

value_variable=res 
res = res.replace(/xnor|nor|xor|or|nand|and|not\(/g, "");
res = res.replace(/\(/g, "");
res = res.replace(/\)/g, "");
res = res.replace(/!/g, "");
res = res.replace(/ftemp,true/g, "");
res = res.replace(/ftemp, true/g, "");

// Split the decleration string in substirng sepperated by commas
res = res.split(" ");
//discard double function calls
var temptype=[]
for( var m=0; m<res.length; m=m+2){
	if (res5.indexOf(res[m])==-1){
        if (res.indexOf("f(temp, true)")==-1 && res.indexOf("0")==-1){
            res5=res5 + res[m] + "f(temp, true)\n"
			temptype=temptype+res[m] + ".type,"	
        }
    }
}

temptype= "[" + temptype + value_signal_name + ".type]\n"

value_variable=value_variable.replace(" ,", ",")
value_variable=value_variable + ";"
value_variable = value_variable.replace(");", ",temptype);")

code = code + "var temptype=" + temptype
code = code + res5		
code = code + value_signal_name + ".val=" + value_variable + "\n"
code = code + "if (!bypass){\n"
code = code + "if(" + value_signal_name + ".val==\'u\' || " + value_signal_name + ".val==\'w\' || " + value_signal_name + ".val==\'d\'){" + value_signal_name + ".data.push(" + value_signal_name + ".val); " + value_signal_name + ".val=\'=\'}\n"
code = code + "if (" + value_signal_name + ".val==" + value_signal_name + ".pre && " + value_signal_name + ".wave!=\"\"" + ") {" + value_signal_name + ".wave=" + value_signal_name + ".wave + \".\"} else {" + value_signal_name + ".wave=" + value_signal_name + ".wave + " + value_signal_name + ".val}\n" 
code = code + value_signal_name + ".pre=" + value_signal_name + ".val\n}"
code = code + "}\n"
code = code + "else {\n"
code = code + "alert(\'you made a latch at signal \' + " + "\'" + value_signal_name + "\'"  + ")\n"
code = code + "latch=true\n"
code = code + "}\n"
code = code + "return " + value_signal_name + ".val\n}\n"
return code;
};

Blockly.SYNTH['name_type'] = function(block) {
  var value_name = Blockly.SYNTH.valueToCode(block, 'name', Blockly.SYNTH.ORDER_NONE);
  var value_type = Blockly.SYNTH.valueToCode(block, 'type', Blockly.SYNTH.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + ' : ' + value_type + '\n';
  return code;
};

Blockly.SYNTH['association_delay'] = function(block) {
  var value_signal_name = Blockly.SYNTH.valueToCode(block, 'signal_name', Blockly.SYNTH.ORDER_NONE);
  var value_variable = Blockly.SYNTH.valueToCode(block, 'variable', Blockly.SYNTH.ORDER_NONE);
  var value_delay = Blockly.SYNTH.valueToCode(block, 'delay', Blockly.SYNTH.ORDER_NONE);
  var code = value_signal_name + ' <= ' + value_variable + ' after ' + value_delay + ';\n';
  return code;
};

Blockly.SYNTH['attribute'] = function(block) {
  var value_atribute_name = Blockly.SYNTH.valueToCode(block, 'atribute_name', Blockly.SYNTH.ORDER_NONE);
  var value_type_name = Blockly.SYNTH.valueToCode(block, 'type_name', Blockly.SYNTH.ORDER_NONE);
  var code = 'attribute ' + value_atribute_name + ': ' + value_type_name + ';\n';
  return code;
};

Blockly.SYNTH['attribute_of'] = function(block) {
  var value_atribute_name = Blockly.SYNTH.valueToCode(block, 'atribute_name', Blockly.SYNTH.ORDER_NONE);
  var value_variable = Blockly.SYNTH.valueToCode(block, 'variable', Blockly.SYNTH.ORDER_NONE);
  var value_type_name = Blockly.SYNTH.valueToCode(block, 'type_name', Blockly.SYNTH.ORDER_NONE);
  var value_value = Blockly.SYNTH.valueToCode(block, 'value', Blockly.SYNTH.ORDER_NONE);
  var code = 'attribute ' + value_atribute_name + ' of ' +  value_variable + ': ' +  value_type_name + ' is ' + value_value + ';\n';
  return code;
};

Blockly.SYNTH['type'] = function(block) {
  var value_type = Blockly.SYNTH.valueToCode(block, 'type', Blockly.SYNTH.ORDER_NONE);
  var dropdown_type_list = block.getFieldValue('type_list');
  var value_list = Blockly.SYNTH.valueToCode(block, 'list', Blockly.SYNTH.ORDER_NONE);
  var code = 'type ' + value_type + ' ' + dropdown_type_list + ' (' + value_list + ');\n';
  return code;
};

Blockly.SYNTH['subtype'] = function(block) {
  var value_subtype = Blockly.SYNTH.valueToCode(block, 'subtype', Blockly.SYNTH.ORDER_NONE);
  var value_type = Blockly.SYNTH.valueToCode(block, 'base_type', Blockly.SYNTH.ORDER_NONE);
  var code = 'subtype ' + value_subtype + ' is ' + value_type + ';\n';
  return code;
};

Blockly.SYNTH['subtype_range'] = function(block) {
  var value_subtype = Blockly.SYNTH.valueToCode(block, 'subtype', Blockly.SYNTH.ORDER_NONE);
  var value_base_type = Blockly.SYNTH.valueToCode(block, 'base_type', Blockly.SYNTH.ORDER_NONE);
  var value_type = Blockly.SYNTH.valueToCode(block, 'type', Blockly.SYNTH.ORDER_NONE);
  var code = 'subtype ' + value_subtype + ' is ' + value_base_type + ' range ' + value_type + ';\n';
  return code;
};

Blockly.SYNTH['type_array'] = function(block) {
  var value_type1 = Blockly.SYNTH.valueToCode(block, 'type1', Blockly.SYNTH.ORDER_NONE);
  var value_type2 = Blockly.SYNTH.valueToCode(block, 'type2', Blockly.SYNTH.ORDER_NONE);
  var value_range = Blockly.SYNTH.valueToCode(block, 'range', Blockly.SYNTH.ORDER_NONE);
  var code = 'type ' + value_type1 + ' is array (' + value_type2 + ') of ' + value_range + ';\n';
  return code;
};

Blockly.SYNTH['array_type_type'] = function(block) {
  var value_type = Blockly.SYNTH.valueToCode(block, 'type', Blockly.SYNTH.ORDER_NONE);
  var value_index_type = Blockly.SYNTH.valueToCode(block, 'index_type', Blockly.SYNTH.ORDER_NONE);
  var value_range = Blockly.SYNTH.valueToCode(block, 'range', Blockly.SYNTH.ORDER_NONE);
  var value_data_type = Blockly.SYNTH.valueToCode(block, 'data_type', Blockly.SYNTH.ORDER_NONE);
  var code = 'type ' + value_type + ' is array (' + value_index_type + ' ' + value_range + ') of ' + value_data_type + ';\n';
  return code;
};

Blockly.SYNTH['alias'] = function(block) {
  var text_alias_name = Blockly.SYNTH.valueToCode(block, 'alias_name', Blockly.SYNTH.ORDER_NONE);
  var text_type = Blockly.SYNTH.valueToCode(block, 'type', Blockly.SYNTH.ORDER_NONE);
  var text_name = Blockly.SYNTH.valueToCode(block, 'name', Blockly.SYNTH.ORDER_NONE);
  var code = 'alias ' + text_alias_name + ' : ' + text_type  + ' is ' + text_name + ';\n';
  return code;
};

Blockly.SYNTH['disconnect'] = function(block) {
  var value_signal = Blockly.SYNTH.valueToCode(block, 'signal', Blockly.SYNTH.ORDER_NONE);
  var value_type = Blockly.SYNTH.valueToCode(block, 'type', Blockly.SYNTH.ORDER_NONE);
  var value_time = Blockly.SYNTH.valueToCode(block, 'time', Blockly.SYNTH.ORDER_NONE);
  var code = 'disconnect ' +  value_signal + ': ' + value_type + ' after ' + value_time  + ';\n';
  return code;
};

Blockly.SYNTH['record'] = function(block) {
  var text_record_name = block.getFieldValue('record_name');
  var statements_record = Blockly.SYNTH.statementToCode(block, 'record');
  var text_record_name_end = block.getFieldValue('record_name_end');
  var code = 'type ' +  text_record_name + ' is record' + '\n' + statements_record + 'end record ' + text_record_name_end + ';\n';
  return code;
};

Blockly.SYNTH['proc_pin_name'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_pin_name = Blockly.SYNTH.valueToCode(block, 'pin_name', Blockly.SYNTH.ORDER_NONE);
  var dropdown_in_out = block.getFieldValue('in_out');
  var value_pin_type = Blockly.SYNTH.valueToCode(block, 'pin_type', Blockly.SYNTH.ORDER_NONE);
  var code = dropdown_type + ' ' + value_pin_name + ' ' + dropdown_in_out + ' ' + value_pin_type + ';\n';
  return code;
};





