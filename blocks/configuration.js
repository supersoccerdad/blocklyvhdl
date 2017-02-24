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

goog.provide('Blockly.Blocks.configuration');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.configuration.HUE = 15;

Blockly.Blocks['configuration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("configuration")
        .appendField(new Blockly.FieldTextInput(""), "name")
        .appendField("of")
        .appendField(new Blockly.FieldTextInput(""), "type")
        .appendField("is");
    this.appendStatementInput("config_state")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end")
        .appendField(new Blockly.FieldTextInput(""), "end_name")
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('name');
    this.setFieldValue(name, 'end_name');
  }
};

Blockly.Blocks['forconfig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldTextInput(""), "name");
    this.appendStatementInput("for_config")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end for");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
 };
 
 Blockly.Blocks['for_arch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldTextInput(""), "label")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(""), "comp_name");
    this.appendStatementInput("comp_conf")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end for;");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};