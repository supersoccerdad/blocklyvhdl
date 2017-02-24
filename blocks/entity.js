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

goog.provide('Blockly.Blocks.entity');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 210;

Blockly.Blocks['entity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("entity")
        .appendField(new Blockly.FieldTextInput("default"), "entity")
        .appendField("is");
    this.appendStatementInput("generic_port")
        .setCheck(null)
        .appendField("generic/port");
    this.appendDummyInput()
        .appendField("end")
        .appendField(new Blockly.FieldTextInput("default"), "end_entity");
    this.setPreviousStatement(true, 'entity');
    this.setNextStatement(true, 'architecture');
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('../help/entity.html');
  },
  onchange: function(e) {
    var name = this.getFieldValue('entity');
    this.setFieldValue(name, 'end_entity');
  }
};

Blockly.Blocks['generic'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([["generic", "generic"], ["port", "port"]]), "port_list")
    this.appendStatementInput("generic_inputs")
        .setCheck("generic_name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "generic");
    this.setNextStatement(true, "generic");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('../help/entity.html#generic');
  }
};

Blockly.Blocks['port_pin_name'] = {
  init: function() {
    this.appendValueInput("pin_name")
        .setCheck(null)
    this.appendValueInput("pin_type")
        .setCheck(null)
        .appendField(":")
        .appendField(new Blockly.FieldDropdown([["in", "in"], ["out", "out"], ["inout", "inout"], ["buffer", "buffer"]]), "in_out");
	this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('../help/entity.html#input_output');
  }
};