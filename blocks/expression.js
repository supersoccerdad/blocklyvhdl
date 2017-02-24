/**
 * Blockly Demos: Block Factory Blocks
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
 * @fileoverview Blocks for Blockly's Block Factory application.
 * @author info@blocklyvhdl.com (hotmas erombas)
 */
'use strict';

goog.provide('Blockly.Blocks.expression');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 210;

Blockly.Blocks['operator'] = {
  init: function() {
    this.appendValueInput("in_a")
        .setCheck(null)
		.appendField("(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+", "+"],
		["-", "-"],["/", "/"],["*", "*"],["**", "**"],["&", "&"],["and", "and"], 
		["or", "or"], ["nand", "nand"], ["nor", "nor"], 
		["xor", "xor"], ["xnor", "xnor"], ["mod", "mod"], ["rem", "rem"], ["sll", "sll"], 
		["srl", "srl"], ["sla", "sla"], ["sra", "sra"], 
		["rol", "rol"], ["ror", "ror"]]), "operator");
    this.appendValueInput("in_b")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['qualified'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["'RIGHTOF", "RIGHTOF"], ["'LEFTOF", "LEFTOF"], ["'PRED", "PRED"], ["'SUCC", "SUCC"], ["'VAL", "VAL"], ["'POS", "POS"], ["'BASE", "BASE"], ["'LEFT", "LEFT"], ["'RIGHT", "RIGHT"], ["'LOW", "LOW"], ["'HIGH", "HIGH"], ["'ASCENDING", "ASCENDING"], ["'IMAGE", "IMAGE"], ["'VALUE", "VALUE"]]), "range")
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("not");
    this.appendValueInput("not_value")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['others'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("others =>");
    this.appendValueInput("others")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['condition'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=", "="], ["/=", "/="], [">", ">"], [">=", ">="], ["<", "<"], ["<=", "<="]]), "condition");
    this.appendValueInput("B")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
	this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['type_conversion'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("(")
        .appendField(new Blockly.FieldDropdown([["to_integer", "to_integer"], ["to_signed", "to_signed"], ["to_unsigned", "to_unsigned"]]), "conversion");
    this.appendValueInput("to_integer")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['conversion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["To_integer", "To_integer"],["To_signed", "To_signed"],["To_unsigned", "To_unsigned"],["To_Bit", "To_Bit"], ["To_Bitvector", "To_Bitvector"], ["To_StdULogic", "To_StdULogic"], ["To_StdLogicVector", "To_StdLogicVector"], ["To_StdULogicVector", "To_StdULogicVector"], ["To_X01", "To_X01"], ["To_X01Z", "To_X01Z"], ["To_UX01", "To_UX01"], ["Rising_edge", "Rising_edge"], ["Falling_edge", "Falling_edge"], ["Is_X", "Is_X"]]), "std_logic")
        .appendField("(");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['std_match'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null)
        .appendField("std_match (");
    this.appendValueInput("right")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['range_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("range");
    this.appendValueInput("type")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['range1'] = {
  init: function() {
    this.appendValueInput("msb")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["downto", "downto"], ["to", "to"]]), "downto");
    this.appendValueInput("lsb")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['range2'] = {
  init: function() {
    this.appendDummyInput()
	this.appendValueInput("name")
        .setCheck(null)
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["'EVENT", "EVENT"],["'LEFT", "LEFT"], ["'RIGHT", "RIGHT"], ["'LOW", "LOW"], ["'HIGH", "HIGH"], ["'RANGE", "RANGE"], ["'REVERSE_RANGE", "REVERSE_RANGE"], ["'LENGTH", "LENGTH"], ["'ASCENDING", "ASCENDING"]]), "range");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['range2_index'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["'LEFT", "LEFT"], ["'RIGHT", "RIGHT"], ["'LOW", "LOW"], ["'HIGH", "HIGH"], ["'RANGE", "RANGE"], ["'REVERSE_RANGE", "REVERSE_RANGE"], ["'LENTGH", "LENTGH"], ["'ASCENDING", "ASCENDING"]]), "range");
    this.appendValueInput("N")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['range_var'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("range");
    this.appendValueInput("range")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['index'] = {
  init: function() {
    this.appendValueInput("index_name")
	this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("index_list")
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("<>");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['time_association'] = {
  init: function() {
    this.appendValueInput("time")
	    .setCheck(null);
    this.appendDummyInput()
//        .appendField(new Blockly.FieldTextInput("time"), "time")
        .appendField(new Blockly.FieldDropdown([["fs", "fs"], ["ps", "ps"], ["ns", "ns"]]), "unit");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};