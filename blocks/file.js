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

goog.provide('Blockly.Blocks.file');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 210;

Blockly.Blocks['file'] = {
  init: function() {
    this.appendValueInput("filevar")
        .setCheck(null)
        .appendField("file");
    this.appendValueInput("filetype")
        .setCheck(null)
        .appendField(":");
    this.appendValueInput("filename")
        .setCheck(null)
        .appendField("open")
        .appendField(new Blockly.FieldDropdown([["Write_mode", "Write_mode"], ["Read_mode", "Read_mode"], ["Append_mode", "Append_mode"]]), "filemode")
        .appendField("is");
	this.appendDummyInput("")
	    .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['write'] = {
  init: function() {
    this.appendValueInput("write1")
        .setCheck(null)
        .appendField("write (");
    this.appendValueInput("write2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['write2'] = {
  init: function() {
    this.appendValueInput("write1")
        .setCheck(null)
        .appendField("write (");
    this.appendValueInput("write2")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("write3")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("write4")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['writeline'] = {
  init: function() {
    this.appendValueInput("write1")
        .setCheck(null)
        .appendField("writeline (");
    this.appendValueInput("write2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['read'] = {
  init: function() {
    this.appendValueInput("read1")
        .setCheck(null)
        .appendField("read (");
    this.appendValueInput("read2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['readline'] = {
  init: function() {
    this.appendValueInput("read1")
        .setCheck(null)
        .appendField("readline (");
    this.appendValueInput("read2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
