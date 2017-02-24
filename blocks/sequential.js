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

goog.provide('Blockly.Blocks.sequential');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 210;

Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("label"), "label_name")
        .appendField(": for");
    this.appendValueInput("loop")
	    .setCheck(null);
    this.appendDummyInput()
        .appendField("in");
    this.appendValueInput("range")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("loop");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end loop")
        .appendField(new Blockly.FieldTextInput("label"), "end_loop")
		.appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('label_name');
    this.setFieldValue(name, 'end_loop');
  }
};

Blockly.Blocks['loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("label"), "label_name")
        .appendField(": loop");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end loop")
        .appendField(new Blockly.FieldTextInput("label"), "end_loop")
		.appendField(";")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('label_name');
    this.setFieldValue(name, 'end_loop');
  }
};

Blockly.Blocks['while_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("label"), "label_name")
        .appendField(": while")
    this.appendValueInput("range")
        .setCheck(null)
    this.appendDummyInput()
        .appendField("loop");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end loop")
        .appendField(new Blockly.FieldTextInput("label"), "end_loop")
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('label_name');
    this.setFieldValue(name, 'end_loop');
  }
};

Blockly.Blocks['next'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("label"), "labelnext")
        .appendField(": next")
        .appendField(new Blockly.FieldTextInput("looplabel"), "labelloop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['next_when'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("label"), "labelnext")
        .appendField(": next")
        .appendField(new Blockly.FieldTextInput("looplabel"), "labelloop")
        .appendField("when");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return");
    this.appendValueInput("condition")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['exit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("exit;");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['exit_label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("exit")
        .appendField(new Blockly.FieldTextInput("default"), "exit_label")
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['exit_when'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("exit")
        .appendField(new Blockly.FieldTextInput("default"), "exit_when")
        .appendField("when");
    this.appendValueInput("exit_when")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait;");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wait_list'] = {
  init: function() {
    this.appendValueInput("wait_list3")
        .setCheck(null)
        .appendField("wait")
        .appendField(new Blockly.FieldDropdown([["for", "for"], ["until", "until"], ["on", "on"]]), "wait_list2");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("null");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};