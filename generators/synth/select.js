/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2015 Google Inc.
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
 * @fileoverview Generating SYNTH for logic blocks.
 * @author info@blocklySYNTH.com (hotmas erombas)
 */
'use strict';

goog.provide('Blockly.SYNTH.select');

goog.require('Blockly.SYNTH');


Blockly.SYNTH['controls_select'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var text_label = block.getFieldValue('label');
  var text_A = block.getFieldValue('A');
  var text_B = block.getFieldValue('B');
 
  var text_Q = block.getFieldValue('Q');
  var text_Y = block.getFieldValue('Y');
  var argument0 = Blockly.SYNTH.valueToCode(block, 'ADD0', Blockly.SYNTH.ORDER_NONE) || 'false';
  
  var argument = Blockly.SYNTH.valueToCode(block, 'C', Blockly.SYNTH.ORDER_NONE) || 'false';
//  if (text_label != '') {
  var code = text_label + ': ' + 'with ' + text_A + ' select\n'; //} 
//  else {code= text_A + '<=' + text_B + ' when ' + argument;} /* + ') {\n' + branch + '}'; */
  code += text_Q + ' <= ' + text_Y + ' when ' + argument0 + ',';
  
  if (block.elseCount_) {
//    branch = Blockly.SYNTH.statementToCode(block, 'ELSE');
    var argument = Blockly.SYNTH.valueToCode(block, 'ELSE', Blockly.SYNTH.ORDER_NONE) || 'false';
    code += '\n else ' + argument;
  }
//  for (n = 1; n <= block.elseifCount_; n++) {
  for (n = 1; n < block.itemCount_; n++) {
    var text_A = block.getFieldValue('A' + n);
    var text_B = block.getFieldValue('B' + n);
    argument = Blockly.SYNTH.valueToCode(block, 'ADD' + n,
        Blockly.SYNTH.ORDER_NONE) || 'false';
	argument=argument.replace(/, /g, " | ");
	
//    branch = Blockly.SYNTH.statementToCode(block, 'DO' + n);
//    code += '\n else1 ' + text_A + '<=' + text_B + ' when ' + argument
    if (n<(block.itemCount_)){
	code += '\n ' + text_B + ' when ' + argument + ',';} else
	{code += '\n ' + text_B + ' when ' + argument + '';}
	
  if (n==block.elseifCount_) {
      argument = Blockly.SYNTH.valueToCode(block, 'ELSE' + n,
        Blockly.SYNTH.ORDER_NONE) || 'false';
    code += '\n else ' + argument;        
	}
  }
//  if (block.elseCount_) {
//    branch = Blockly.SYNTH.statementToCode(block, 'ELSE');
//    code += ' else {\n' + branch + '}';
//  }
  return code + '\n';
//  return 'ffff' + '\n';
};

