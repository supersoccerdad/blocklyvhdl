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

goog.provide('Blockly.Blocks.architecture');
goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 180;

Blockly.Blocks['name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("default"), "Name");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['generate_if'] = {
  init: function() {
    this.appendValueInput("label")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("default"), "label")
        .appendField(": if");
    this.appendDummyInput()
        .appendField("generate");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end generate")
        .appendField(new Blockly.FieldTextInput("default"), "endgenerate");
    this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('label');
    this.setFieldValue(name, 'endgenerate');
  }
};

Blockly.Blocks['architecture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("architecture")
        .appendField(new Blockly.FieldTextInput("default"), "architecture_name")
        .appendField("of")
        .appendField(new Blockly.FieldTextInput("default"), "entity_name")
		.appendField("is");
    this.appendStatementInput("declarations")
        .setCheck(['component_instantiation', 'subtype'])
        .appendField("declarations");
    this.appendDummyInput()
        .appendField("begin");
    this.appendStatementInput("concurent_statements")
        .setCheck('process');
    this.appendDummyInput()
        .appendField("end ")
        .appendField(new Blockly.FieldTextInput("default"), "end_arch_name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, 'architecture');
    this.setNextStatement(true, 'no_connect_3');
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('architecture_name');
    this.setFieldValue(name, 'end_arch_name');
  }
};

Blockly.Blocks['port_map'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("label"), "label")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("component"), "component");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['map_list'] = {
  init: function() {
    this.appendValueInput("port")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["port map", "port map"], ["generic map", "generic map"]]), "map");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['map_association'] = {
  init: function() {
    this.appendValueInput("signal_name")
        .setCheck(null)
    this.appendValueInput("signal_type")
        .setCheck(null)
        .appendField("=>");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['constant2'] = {
  init: function() {
    this.appendValueInput("constant_name")
        .setCheck('name')
        .appendField("constant");
    this.appendValueInput("constant_type")
        .setCheck(null)
        .appendField(":");
	this.appendDummyInput()
        .appendField(";")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};