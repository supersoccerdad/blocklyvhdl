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

goog.provide('Blockly.SYNTH.case3');

goog.require('Blockly.SYNTH');


Blockly.SYNTH['controls_case'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = block.getFieldValue('case_name');
  var argument2 = block.getFieldValue('Q');
  var branch = Blockly.SYNTH.statementToCode(block, 'ADD0');
  var code = 'case ' + argument + ' is\n';
      code += 'when ' + argument2 + ' =>\n';
	  code += branch;
  for (n = 1; n <= block.elseifCount_; n++) {
    var argument2 = block.getFieldValue('Q' + n);
    branch = Blockly.SYNTH.statementToCode(block, 'DO' + n);
    code += 'when ' + argument2 + ' =>\n';
	code += branch;
  }
  if (block.elseCount_) {
    branch = Blockly.SYNTH.statementToCode(block, 'ELSE');
    code += 'when others =>\n';
	code += branch;
  }
	code += 'end case;\n';
  return code;
};
