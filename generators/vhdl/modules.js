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

Blockly.VHDL['counter'] = function(block) {
  var text_width = block.getFieldValue('width');
  var text_clockname = block.getFieldValue('clockname');
  var text_resetname = block.getFieldValue('resetname');
  var text_enablename = block.getFieldValue('enablename');
  var text_outputname = block.getFieldValue('outputname');
  // TODO: Assemble JavaScript into code variable.
 
  var code= 'library ieee ;\n';
  code += 'use ieee.std_logic_1164.all;\n';
  code += 'use ieee.std_logic_unsigned.all;\n';
  code += '\n';
  code += 'entity counter is;\n';
  code += '   generic(n: natural :=' + text_width + ');\n';
  code += '   port(' + text_clockname + ':   in std_logic;\n';
  code += '        ' + text_resetname + ':   in std_logic;\n';
  code += '        ' + text_enablename + ':  in std_logic;\n';
  code += '        ' + text_outputname + ':  out std_logic_vector('+ text_width + '-1 downto 0)\n'
  code += '   );\n';
  code += 'end counter;\n';
  code += '\n';
  code += 'architecture behv of counter is\n'                                         
  code += 'signal Pre_Q: std_logic_vector(' + text_width + 'n-1 downto 0);\n';
  code += '\n';
  code += 'begin\n'
  code += 'process(' + text_clockname + ', ' + text_resetname + ')\n';
  code += 'begin\n';
  code += 'if '+ text_resetname + ' = \'1\' then\n';
  code += '  Pre_Q <= Pre_Q - Pre_Q\n';
  code += 'elsif (' + text_clockname + '=\'1\' and ' + text_clockname + '\'event) then\n';
  code += '  Pre_Q <= Pre_Q + 1;\n';
  code += 'end if;\n';
  code += 'end process;\n';          
  code += text_outputname + '<= Pre_Q;\n';
  code += 'end behv;\n';
  
  return code;
};
