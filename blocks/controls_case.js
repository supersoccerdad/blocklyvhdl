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
 * @fileoverview Logic blocks for Blockly.
 * @author info@blocklyvhdl.com (hotmas erombas)
 */
'use strict';

goog.provide('Blockly.Blocks.controls_case');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.logic.HUE = 210;

Blockly.Blocks['controls_case'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
//    this.setColour(Blockly.Blocks.logic.HUE);
	this.appendDummyInput('ADD')
        .appendField("case")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(""), "case_name")
        .appendField("is");
	this.appendStatementInput('ADD0')
	     .setAlign(Blockly.ALIGN_RIGHT)
		 .appendField("when")
	     .appendField(new Blockly.FieldTextInput(""), "Q")
		 .appendField("=>");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_case_when',
                                         'controls_case_when_others']));
    var thisBlock = this;
	this.setColour(195);
    this.setTooltip(function() {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
	this.mem=[];
	this.detection=0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('case_when0');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('controls_case_when');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('controls_case_when_others');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
	var dummyConnections = [null]
	this.detection=0;//
	
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_case_when':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
		  dummyConnections.push(clauseBlock.dummyConnection_);//

		  if (this.mem[this.elseifCount_]!=clauseBlock.id && this.detection==0) {
		  this.detection=this.elseifCount_;
          }
          this.mem[this.elseifCount_]=clauseBlock.id;
		  
          break;
        case 'controls_case_when_others':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
	
	this.itemDelete=false;
    this.itemAdd=false;
    if (this.elseifCount_<this.itemCount_){ this.itemDelete=true }
	if ((this.itemCount_ - this.elseifCount_) ==1 && this.detection==0) {this.detection=this.itemCount_}
    if(this.elseifCount_>this.itemCount_){ this.itemAdd=true }        

	this.itemCount_=statementConnections.length -1;
	
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
	    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');//
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_case_when':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;		  
          i++;
          break;
        case 'controls_case_when_others':
		  var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
        throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
      clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
	  this.removeInput('ENDIF');
    }
    var i = 1;
	var enditems=0;
	var code=[];
    while (this.getInput('DO' + i)) {
			var input=this.getInput('DO' + i);
			code[i] = input.fieldRow["1"].text_;
      this.removeInput('DO' + i);
      i++;
    }

	if (this.getInput('ENDIF')) {
	  	  this.removeInput('ENDIF');
	}
    // Rebuild block.
    if (this.itemAdd==true) {enditems=this.elseifCount_}
    if (this.itemDelete==true) {enditems=this.elseifCount_ + 1}	   
    for (var i = 1; i <= enditems; i++) {	
	   if (this.itemAdd==true) {
		   if (this.detection==i) {
			   code[i+1]=code[i];
			   code[i]="";
		   }
		   if (this.detection<i) {
			   code[i+1]=code[i];
	       }	   
	   }
	  if (this.itemDelete==true) {
		   if (i>(this.detection-1)) {
			   code[i]=code[i+1];
		   }  
	   } 
	}
	
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendStatementInput('DO' + i)
	  	 .setAlign(Blockly.ALIGN_RIGHT)
		 .appendField("when")
	     .appendField(new Blockly.FieldTextInput(code[i]), "Q" + i)
		 .appendField("=>");
    }
    if (this.elseCount_) {
	  this.appendStatementInput('ELSE')
	  	 .setAlign(Blockly.ALIGN_RIGHT)
		 .appendField("when others")
		 .appendField("=>");
    }
	  this.appendDummyInput('ENDIF')
          .appendField("end case;");
  }
};

Blockly.Blocks['case_when0'] = {
  /**
   * Mutator block for if container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField("when");
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_case_when'] = {
  /**
   * Mutator bolck for else-if condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField("when");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_case_when_others'] = {
  /**
   * Mutator block for else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
        .appendField("when others");
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
    this.contextMenu = false;
  }
};




