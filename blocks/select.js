/**
* @license
* Visual Blocks Editor
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
* @fileoverview List blocks for Blockly.
* @author info@blocklyvhdl.com (hotmas erombas)
*/
'use strict';
 
goog.provide('Blockly.Blocks.select');
 
goog.require('Blockly.Blocks');
 
 
/**
* Common HSV hue for all blocks in this category.
*/
Blockly.Blocks.select.HUE = 90;
 
Blockly.Blocks['controls_select'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Blocks.select.HUE);
	this.appendDummyInput('ADD')
        .appendField(new Blockly.FieldTextInput(""), "label")
        .appendField(":")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("with")
        .appendField(new Blockly.FieldTextInput(""), "A")
        .appendField("select");
	this.appendValueInput('ADD0')
	     .setAlign(Blockly.ALIGN_RIGHT)
	     .appendField(new Blockly.FieldTextInput(""), "Q")
		 .appendField("<=")
		 .appendField(new Blockly.FieldTextInput(""), "Y")
		 .appendField("when");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setMutator(new Blockly.Mutator(['select_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
	this.setColour(90);
    this.detection=0;
    this.mem=[];
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('select_item_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    var mem = [];
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('select_item');
      itemBlock.initSvg();
      this.mem[i]=itemBlock.id;
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var i=0;
    while (itemBlock) {
        if (i!=0 && itemBlock.id!=this.mem[i] && this.detection==0) {
			this.detection=i;
        }
        this.mem[i]=itemBlock.id;
        connections.push(itemBlock.valueConnection_);
        itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
        i++;
    }
    this.itemDelete=false;
    this.itemAdd=false;
    if(i<this.itemCount_){ this.itemDelete=true }
    if(i>this.itemCount_){ this.itemAdd=true }        
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    }
    
    // Add new inputs.
    for (var i = 1; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i)
            .setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldTextInput(""), "B" + i)
            .appendField("when", "C" + i);			
 //       if (i == 0) {
 //       }
      }
    }
               
    if (this.itemAdd==true) {
		var code="default";
		for (var i = this.detection; i < this.itemCount_; i++) {
			var input=this.getInput('ADD' + i);
			var code2 = input.fieldRow["1"].text_;
			input.removeField("B" + i)
			input.removeField("C" + i);		
			input.appendField(new Blockly.FieldTextInput(code), "B" + i)
			input.appendField("when", "C" + i);
			code=code2;
		}
    this.detection=0;
    } 
    if (this.itemDelete==true) {
		for (var i = this.detection; i < this.itemCount_; i++) {
			var input=this.getInput('ADD' + (i + 1));
			var code = input.fieldRow["0"].text_;
//			alert(code);
			var input=this.getInput('ADD' + i);
//			input.removeField("B" + i)
//			input.removeField("C" + i);
//			input.appendField(new Blockly.FieldTextInput(code), "B" + i)
//			input.appendField("when", "C" + i);
		}
    this.detection=0;
    }
	
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['select_item_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.select.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
//		.setAlign(Blockly.ALIGN_RIGHT)
//		.appendField("=>");
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};
Blockly.Blocks['select_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.select.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
//		.setAlign(Blockly.ALIGN_RIGHT)
//        .appendField("=>");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};
