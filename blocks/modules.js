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

goog.provide('Blockly.Blocks.modules');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.modules.HUE = 260;

Blockly.Blocks['counter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Counter");
    this.appendDummyInput()
        .appendField("Width:")
        .appendField(new Blockly.FieldTextInput("default"), "width");
    this.appendDummyInput()
        .appendField("Clock name:")
        .appendField(new Blockly.FieldTextInput("default"), "clockname");
    this.appendDummyInput()
        .appendField("Reset name:")
        .appendField(new Blockly.FieldTextInput("default"), "resetname");
    this.appendDummyInput()
        .appendField("Enable name:")
        .appendField(new Blockly.FieldTextInput("default"), "enablename");
    this.appendDummyInput()
        .appendField("Ouput name:")
        .appendField(new Blockly.FieldTextInput("default"), "outputname");
    this.setColour(260);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};