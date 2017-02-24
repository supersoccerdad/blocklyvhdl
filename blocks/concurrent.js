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

goog.provide('Blockly.Blocks.concurrent');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 90;

Blockly.Blocks['process'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("label"), "label_begin")
        .appendField(": process (")
		.appendField(new Blockly.FieldTextInput(""), "sens")
        .appendField(")");
    this.appendStatementInput("declarations")
        .setCheck(null)
        .appendField("declarations");
    this.appendStatementInput("begin")
        .setCheck(null)
        .appendField("begin");
    this.appendDummyInput()
        .appendField("end process")
        .appendField(new Blockly.FieldTextInput("label"), "label_end")
        .appendField(";");
    this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('label_begin');
    this.setFieldValue(name, 'label_end');
  }
};

Blockly.Blocks['procedure_call'] = {
  init: function() {
    this.appendValueInput("procedurename")
        .setCheck(null);
    this.appendValueInput("values")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['generate'] = {
  init: function() {
    this.appendValueInput("start")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("default"), "generate_label")
        .appendField(": for");
    this.appendValueInput("end")
        .setCheck(null)
        .appendField("in");
    this.appendDummyInput()
        .appendField("generate");
    this.appendStatementInput("generate")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end generate")
        .appendField(new Blockly.FieldTextInput("default"), "end_label");
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('generate_label');
    this.setFieldValue(name, 'end_label');
  }
};