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

goog.provide('Blockly.Blocks.package');
goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 210;

Blockly.Blocks['package'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([["package", "package"], ["package body", "package body"]]), "package")
        .appendField(new Blockly.FieldTextInput("default"), "name")
        .appendField("is");
    this.appendStatementInput("declarations")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end")
        .appendField(new Blockly.FieldTextInput("default"), "end_name")
        .appendField(";");
    this.setTooltip('');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
    this.setHelpUrl('http://www.example.com/');
  },
  onchange: function(e) {
    var name = this.getFieldValue('name');
    this.setFieldValue(name, 'end_name');
  }
};