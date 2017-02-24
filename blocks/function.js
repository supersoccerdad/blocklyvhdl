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

goog.provide('Blockly.Blocks.function');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 210;

Blockly.Blocks['function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("default"), "function_name");
    this.appendStatementInput("parameters")
        .setCheck(null);
    this.appendValueInput("return")
        .setCheck(null)
        .appendField("return");
    this.appendDummyInput()
        .appendField("is");
    this.appendStatementInput("declaration")
        .setCheck(null)
        .appendField("declaration");
    this.appendDummyInput()
        .appendField("begin");
    this.appendStatementInput("sequential")
        .setCheck(null);
    this.appendValueInput("return2")
        .setCheck(null)
        .appendField("return");
    this.appendDummyInput()
        .appendField("end")
        .appendField(new Blockly.FieldTextInput("default"), "end_name")
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('function_name');
    this.setFieldValue(name, 'end_name');
  }
};

Blockly.Blocks['function_call'] = {
  init: function() {
    this.appendValueInput("function_name")
	this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("parameter_list")
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
