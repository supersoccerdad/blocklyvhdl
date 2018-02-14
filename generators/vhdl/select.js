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
 * @fileoverview Generating VHDL for logic blocks.
 * @author info@blocklyvhdl.com (hotmas erombas)
 */
'use strict';

Blockly.VHDL['controls_select'] = function(block) {
  var space = " "
  var text_label = block.getFieldValue('label');
  var text_A = block.getFieldValue('A');
  var text_Q = block.getFieldValue('Q');
  var text_Y = block.getFieldValue('Y');
  var value_add0 = Blockly.VHDL.valueToCode(block, 'ADD0', Blockly.VHDL.ORDER_NONE);
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.VHDL.valueToCode(block, 'NAME', Blockly.VHDL.ORDER_NONE);
  var code=''
  var argument = ''
  var spacer=text_A.length + text_label.length + 3;
  if (text_label != '') {
     code = text_label + ': with ' + text_A + ' select\n'; } 
  else {code= 'with' + text_A + ' select\n';}
     code = code + text_Q + ' <= ' + text_Y + ' when ' + value_add0 + ',\n';
  for (var n = 1; n < block.itemCount_; n++) {
     var text_B = block.getFieldValue('B' + n);
     argument = Blockly.VHDL.valueToCode(block, 'ADD' + n,Blockly.VHDL.ORDER_NONE) || 'false';  
     code += space.repeat(spacer) + text_B + ' when ' + argument
	 if(n==block.itemCount_-1){code += ';\n'} else { code += ',\n'};
  }
  return code + '\n';
};