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

Blockly.VHDL['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.VHDL.valueToCode(block, 'IF' + n,
      Blockly.VHDL.ORDER_NONE) || 'false';
  var branch = Blockly.VHDL.statementToCode(block, 'DO' + n);
  var code = 'if ' + argument + ' then\n' + branch;
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.VHDL.valueToCode(block, 'IF' + n,
        Blockly.VHDL.ORDER_NONE) || 'false';
    branch = Blockly.VHDL.statementToCode(block, 'DO' + n);
    code += 'elsif ' + argument + ' then\n' + branch;// + 'end if;';
  }
  if (block.elseCount_) {
    branch = Blockly.VHDL.statementToCode(block, 'ELSEDO');
    code += 'else\n' + branch;// + 'end if;';
  }
  code += 'end if;';
  return code + '\n';
};

Blockly.VHDL['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.VHDL.ORDER_EQUALITY : Blockly.VHDL.ORDER_RELATIONAL;
  var argument0 = Blockly.VHDL.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.VHDL.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.VHDL['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.VHDL.ORDER_LOGICAL_AND :
      Blockly.VHDL.ORDER_LOGICAL_OR;
  var argument0 = Blockly.VHDL.valueToCode(block, 'A', order);
  var argument1 = Blockly.VHDL.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.VHDL['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.VHDL.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.VHDL.valueToCode(block, 'BOOL', order) ||
      'true';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.VHDL['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.VHDL.ORDER_ATOMIC];
};

Blockly.VHDL['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.VHDL.ORDER_ATOMIC];
};

Blockly.VHDL['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.VHDL.valueToCode(block, 'IF',
      Blockly.VHDL.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.VHDL.valueToCode(block, 'THEN',
      Blockly.VHDL.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.VHDL.valueToCode(block, 'ELSE',
      Blockly.VHDL.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.VHDL.ORDER_CONDITIONAL];
};

Blockly.VHDL['operator'] = function(block) {
  var value_in_a = Blockly.VHDL.valueToCode(block, 'in_a', Blockly.VHDL.ORDER_NONE);
  var dropdown_operator = block.getFieldValue('operator');
  var value_in_b = Blockly.VHDL.valueToCode(block, 'in_b', Blockly.VHDL.ORDER_NONE);
  // TODO: Assemble VHDL into code variable.
  var code = '('+ value_in_a + ' ' + dropdown_operator + ' ' + value_in_b + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.VHDL.ORDER_NONE];
};
