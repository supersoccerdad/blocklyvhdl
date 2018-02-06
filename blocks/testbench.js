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

goog.provide('Blockly.Blocks.testbench');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 270;

Blockly.Blocks['assert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("assert");
    this.appendValueInput("condition")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("report");
    this.appendValueInput("test_String")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("severity");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Note", "Note"], ["Warning", "Warning"], ["Error", "Error"], ["Failure", "Failure"]]), "severity");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
/*
Blockly.Blocks['testbench'] = {
  init: function() {
    this.appendStatementInput("testbench")
        .setCheck(null)
        .appendField("testbench");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
*/

Blockly.Blocks['testbench'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("testbench:")
        .appendField(new Blockly.FieldTextInput("default"), "testbench");
    this.appendStatementInput("testbench")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['testbench_out'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("signal\\output")
        .appendField(new Blockly.FieldTextInput("default"), "output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['tb_out'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("output")
        .appendField(new Blockly.FieldTextInput("default"), "output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['tb_internal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("internal signal")
        .appendField(new Blockly.FieldTextInput("default"), "internal");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['tb_clockgen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("clockname")
        .appendField(new Blockly.FieldTextInput(""), "clockname")
        .appendField("periods")
        .appendField(new Blockly.FieldTextInput(""), "periods");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tb_signal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("input")
        .appendField(new Blockly.FieldTextInput(""), "signalname")
        .appendField("trace")
        .appendField(new Blockly.FieldTextInput(""), "trace");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};