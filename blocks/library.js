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

goog.provide('Blockly.Blocks.library');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.library.HUE = 290;

Blockly.Blocks['library'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("Library ")
		.appendField(new Blockly.FieldDropdown([["IEEE", "IEEE"], ["STD", "STD"]]), "library");
	this.appendDummyInput()
		.appendField(";");
    this.appendStatementInput("declarations")
        .setCheck("library");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "entity");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ieee'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("use IEEE.")
        .appendField(new Blockly.FieldDropdown([["std_logic_1164", "std_logic_1164"], ["std_logic_textio", "std_logic_textio"], ["std_logic_arith", "std_logic_arith"], ["numeric.std", "numeric.std"], ["numeric_bit", "numeric_bit"], ["std_logic_signed", "std_logic_signed"], ["std_logic_unsinged", "std_logic_unsinged"], ["math_real", "math_real"], ["math_complex", "math_complex"]]), "IEEE")
        .appendField(".all");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "library");
    this.setNextStatement(true, "library");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['std_textio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("use STD.textio;");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "library");
    this.setNextStatement(true, "library");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['use'] = {
  init: function() {
    this.appendValueInput("use")
        .setCheck(null)
        .appendField("use");
    this.appendValueInput("library")
        .setCheck(null)
        .appendField(".");
	this.appendDummyInput()
	    .appendField(";"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, "library");
    this.setNextStatement(true, "library");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['std_logic'] = {
  init: function() {
      var PROPERTIES = 
	   [["char", "char"],
	    ["line", "line"],
	    ["boolean", "boolean"],
	    ["std_logic", "std_logic"],
	    ["std_logic_vector", "std_logic_vector"], 		
        ["time", "time"],	
        ["std_ulogic", "std_ulogic"],		
        ["bit", "bit"],		
        ["side", "side"]];
    var dropdown = new Blockly.FieldDropdown(PROPERTIES);
    this.appendDummyInput()
        .appendField(dropdown, "std_bit")
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['std_logic_init'] = {
  init: function() {
      var PROPERTIES = 
	   [["char :=", "char"],
	    ["line :=", "line"],
	    ["boolean :=", "boolean"],
	    ["std_logic :=", "std_logic"], 
        ["time :=", "time"],
        ["integer :=", "integer"],		
        ["std_ulogic :=", "std_ulogic"],		
        ["bit :=", "bit"],		
        ["side :=", "side"]];
    var dropdown = new Blockly.FieldDropdown(PROPERTIES);
    this.appendDummyInput()
        .appendField(dropdown, "std_bit")
	this.appendValueInput("bit_value")
	    .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['vector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["std_logic_vector", "std_logic_vector"], ["std_ulogic_vector", "std_ulogic_vector"], ["bit_vector", "bit_vector"]]), "vector");
	this.appendValueInput("msb")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["downto", "downto"], ["to", "to"]]), "range");
	this.appendValueInput("lsb")
	    .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['vector_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["std_logic_vector", "std_logic_vector"], ["std_ulogic_vector", "std_ulogic_vector"], ["bit_vector", "bit_vector"]]), "vector")
        .appendField("(")
	this.appendValueInput("msb")
        .setCheck(null);
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["downto", "downto"], ["to", "to"]]), "range");
	this.appendValueInput("lsb")
	    .setCheck(null);
	this.appendDummyInput()
        .appendField(") =")
	this.appendValueInput("init")
	    .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['integer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["integer", "integer"], ["positive", "positive"], ["natural", "natural"], ["real", "real"], ["string", "string"]]), "integer");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['integer_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["integer", "integer"], ["positive", "positive"], ["natural", "natural"], ["real", "real"], ["string", "string"]]), "integer")
        .appendField(":=")
	this.appendValueInput("integer_value")
	    .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};





