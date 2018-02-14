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

Blockly.SYNTH['operator'] = function(block) {
  var operator;
  var inversion=false;
  var value_in_a = Blockly.SYNTH.valueToCode(block, 'in_a', Blockly.SYNTH.ORDER_NONE);
  var dropdown_operator = block.getFieldValue('operator');
  var value_in_b = Blockly.SYNTH.valueToCode(block, 'in_b', Blockly.SYNTH.ORDER_NONE);
  operator=dropdown_operator;
/*  switch (dropdown_operator) {
	  case "and": operator="nand"; break;
	  case "nand": operator="and";
	  case "or": operator="or"; break;
	  case "nor": operator="or";
	  case "xor": operator="xor"; break;
	  case "xnor": operator="xnor";
	  case "srl": operator="srl"; break;
	  case "sll": operator="sll"; break;
      default : operator="warning"; break;	  
  }*/
  
  var code='';
  if (operator!="warning") {  
    code = code + operator + '('  + value_in_a
    if (value_in_a.lastIndexOf(")")==-1) {
//    if (!value_in_a.endsWith(")")) {
    	code = code + 'f' + '(temp, true) ' + "," + ' ' + value_in_b
	    if (value_in_b.lastIndexOf(")")==-1) {
//		if (!value_in_b.endsWith(")")) {
		   code = code + 'f(temp, true)'
	    }
    } else {
	    code = code + ' ' + "," + ' ' + value_in_b
	  	if (value_in_b.lastIndexOf(")")==-1) {
//		if (!value_in_b.endsWith(")")) {
		   code = code + 'f(temp, true)'
	    }
    }
//	code = code + " , " + value_in_a + " , " + value_in_b + " , " + 
    code = code + " )"
  } else {
	  alert("the operator " + dropdown_operator + " is not yet supported for the simulation tool"); return[];
  }
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['qualified'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_range = block.getFieldValue('range');
  var code = text_name + '\'' + dropdown_range;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['not'] = function(block) {
  var value_not_value = Blockly.SYNTH.valueToCode(block, 'not_value', Blockly.SYNTH.ORDER_NONE);
//  var code = 'not '+ value_not_value;
//    var code = '!' + value_not_value;
	var code = 'not('  + value_not_value
    if (value_not_value.lastIndexOf(")")==-1) {
//    if (!value_not_value.endsWith(")")) {
    	code = code + 'f' + '(temp, true) ' + "," + ' ' + "0)"
//		alert(code)
    } else { code = code + ", 0)"}
//			alert(code)
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['others'] = function(block) {
  var value_not_value = Blockly.SYNTH.valueToCode(block, 'others', Blockly.SYNTH.ORDER_NONE);
  var code = 'others => '+ value_not_value;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['condition'] = function(block) {
  var condition;
  var value_a = Blockly.SYNTH.valueToCode(block, 'A', Blockly.SYNTH.ORDER_NONE);
  var dropdown_condition = block.getFieldValue('condition');
  var value_b = Blockly.SYNTH.valueToCode(block, 'B', Blockly.SYNTH.ORDER_NONE);
  
  switch (dropdown_condition) {
	  case "=": condition="=="; break;
	  case "/=": condition="!="; break;
  }

  var code = value_a + " " + condition + " " + value_b;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['type_conversion'] = function(block) {
  var dropdown_conversion = block.getFieldValue('conversion');
  var value_variable = Blockly.SYNTH.valueToCode(block, 'variable', Blockly.SYNTH.ORDER_NONE);
  var value_to_integer = Blockly.SYNTH.valueToCode(block, 'to_integer', Blockly.SYNTH.ORDER_NONE);
  var code = value_variable + '(' + dropdown_conversion + '(' + value_to_integer + '))';
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['conversion'] = function(block) {
  var dropdown_std_logic = block.getFieldValue('std_logic');
  var value_name = Blockly.SYNTH.valueToCode(block, 'NAME', Blockly.SYNTH.ORDER_ATOMIC);
  var code = dropdown_std_logic + value_name;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['std_match'] = function(block) {
  var value_left = Blockly.SYNTH.valueToCode(block, 'left', Blockly.SYNTH.ORDER_NONE);
  var value_right = Blockly.SYNTH.valueToCode(block, 'right', Blockly.SYNTH.ORDER_NONE);
  var code = 'std_match(' + value_left + ', ' + value_right + ');\n';
  return code;
};

Blockly.SYNTH['range_type'] = function(block) {
  var value_type = Blockly.SYNTH.valueToCode(block, 'type', Blockly.SYNTH.ORDER_NONE);
  var code = 'range ' + value_type;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['range1'] = function(block) {
  var text_msb = Blockly.SYNTH.valueToCode(block, 'msb', Blockly.SYNTH.ORDER_NONE);
  var dropdown_downto = block.getFieldValue('downto');
  var text_lsb = Blockly.SYNTH.valueToCode(block, 'lsb', Blockly.SYNTH.ORDER_NONE);
  var code = text_msb + ' ' + dropdown_downto + ' ' + text_lsb;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['range2'] = function(block) {
  var text_name = Blockly.SYNTH.valueToCode(block, 'name', Blockly.SYNTH.ORDER_NONE);
  var dropdown_range = block.getFieldValue('range');
  var code = text_name + '\'' + dropdown_range;
  if (block.getFieldValue('N')) { code=code; }	   
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['range2_index'] = function(block) {
  var text_name = Blockly.SYNTH.valueToCode(block, 'name', Blockly.SYNTH.ORDER_NONE);
  var dropdown_range = block.getFieldValue('range');
  var text_n = Blockly.SYNTH.valueToCode(block, 'N', Blockly.SYNTH.ORDER_NONE);
  var code = text_name + '\'' + dropdown_range;
//  if (block.getFieldValue('N')) 
  if (text_n) { code=code + '(' + text_n + ')'; }	   
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['range_var'] = function(block) {
  var value_variable = Blockly.SYNTH.valueToCode(block, 'variable', Blockly.SYNTH.ORDER_NONE);
  var value_range = Blockly.SYNTH.valueToCode(block, 'range', Blockly.SYNTH.ORDER_NONE);
  var code = value_variable + ' range ' + value_range;
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['index'] = function(block) {
  var text_index_name = Blockly.SYNTH.valueToCode(block, 'index_name', Blockly.SYNTH.ORDER_NONE);
  var text_index_list = Blockly.SYNTH.valueToCode(block, 'index_list', Blockly.SYNTH.ORDER_NONE);
  var code = text_index_name + '(' + text_index_list + ')';
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['all'] = function(block) {
  var code = '<>';
  return [code, Blockly.SYNTH.ORDER_NONE];
};

Blockly.SYNTH['time_association'] = function(block) {
  var text_time = Blockly.SYNTH.valueToCode(block, 'time', Blockly.SYNTH.ORDER_NONE);
  var dropdown_unit = block.getFieldValue('unit');
  var code = text_time + ' ' + dropdown_unit;
  return [code, Blockly.SYNTH.ORDER_NONE];
};


