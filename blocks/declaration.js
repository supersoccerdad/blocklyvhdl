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

goog.provide('Blockly.Blocks.declaration');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
//Blockly.Blocks.entity.HUE = 210;

Blockly.Blocks['procedure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("procedure")
        .appendField(new Blockly.FieldTextInput("default"), "procedure_name");
    this.appendStatementInput("parameter_list")
        .setCheck(null);
    this.appendStatementInput("declaration")
        .setCheck(null)
        .appendField("is");
    this.appendStatementInput("sequential")
        .setCheck(null)
        .appendField("begin");
    this.appendDummyInput()
        .appendField("end")
        .appendField(new Blockly.FieldTextInput("default"), "end_name");
    this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('procedure_name');
    this.setFieldValue(name, 'end_name');
  }
};

Blockly.Blocks['function_pack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("default"), "name");
    this.appendStatementInput("declaration")
        .setCheck(null);
    this.appendValueInput("return")
        .setCheck(null)
        .appendField("return");
	this.appendDummyInput()
        .appendField(";")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['component_instantiation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("component")
        .appendField(new Blockly.FieldTextInput("name"), "component_name");
    this.appendStatementInput("generic_port")
        .setCheck(null)
        .appendField("generic/port");
    this.appendDummyInput()
        .appendField("end component")
		.appendField(new Blockly.FieldTextInput("name"), "end_name")
        .appendField(";");
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'component_instantiation');
    this.setNextStatement(true, 'component_instantiation');
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    onchange: function(e) {
    var name = this.getFieldValue('component_name');
    this.setFieldValue(name, 'end_name');
  }
};

Blockly.Blocks['component_procedure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["component", "component"], ["procedure", "procedure"]]), "module")
        .appendField(new Blockly.FieldTextInput("name"), "component_name");
    this.appendStatementInput("generic_port")
        .setCheck(null)
        .appendField("generic/port");
    this.appendDummyInput()
        .appendField("end component;")
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'component_instantiation');
    this.setNextStatement(true, 'component_instantiation');
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['alias'] = {
  init: function() {
    this.appendValueInput("alias")
        .setCheck(null)
        .appendField("alias");
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("is");
    this.appendValueInput("type")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['signal'] = {
  init: function() {
    this.appendValueInput("signal_name")
        .setCheck(null)
		.appendField(new Blockly.FieldDropdown([["signal", "signal"], ["variable", "variable"], ["constant", "constant"]]), "signal")
    this.appendValueInput("signal_type")
        .setCheck(null)
        .appendField(":");
	this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['signal_init'] = {
  init: function() {
    this.appendValueInput("signal_name")
        .setCheck(null)
		.appendField(new Blockly.FieldDropdown([["signal", "signal"], ["variable", "variable"], ["constant", "constant"]]), "signal")
    this.appendValueInput("signal_type")
        .setCheck(null)
        .appendField(":");
    this.appendValueInput("signal_init")
        .setCheck(null)
        .appendField(":=");
	this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['variable'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck(null)
        .appendField("variable");
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("list")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['association'] = {
  init: function() {
    this.appendValueInput("signal_name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["<=", "<="], [":=", ":="]]), "association");
    this.appendValueInput("variable")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['name_type'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null);
    this.appendValueInput("type")
        .setCheck(null)
        .appendField(":");
	this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['association_delay'] = {
  init: function() {
    this.appendValueInput("signal_name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("<=");
    this.appendValueInput("variable")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("after");
    this.appendValueInput("delay")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['attribute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute");
    this.appendValueInput("atribute_name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("type_name")
        .setCheck(null);
	this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['attribute_of'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute");
    this.appendValueInput("atribute_name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("of");
    this.appendValueInput("variable")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("type_name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("is");
    this.appendValueInput("value")
        .setCheck(null);
	this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['type'] = {
  init: function() {
    this.appendValueInput("type")
        .setCheck(null)
        .appendField("type");
    this.appendValueInput("list")
	    .appendField(new Blockly.FieldDropdown([["is", "is"], ["is access", "is access"], ["is range", "is range"], ["is file of", "is file of"]]), "type_list")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "variables");
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['subtype'] = {
  init: function() {
    this.appendValueInput("subtype")
        .setCheck(null)
        .appendField("subtype");
    this.appendDummyInput()
        .appendField("is");
    this.appendValueInput("base_type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['subtype_range'] = {
  init: function() {
    this.appendValueInput("subtype")
        .setCheck(null)
        .appendField("subtype");
    this.appendDummyInput()
        .appendField("is");
    this.appendValueInput("base_type")
        .setCheck(null);
	this.appendDummyInput()
        .appendField("range");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['type_array'] = {
  init: function() {
    this.appendValueInput("type1")
        .setCheck(null)
        .appendField("type");
    this.appendDummyInput()
        .appendField("is array");
    this.appendValueInput("type2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("of");
    this.appendValueInput("range")
        .setCheck(null);
	this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['array_type_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("is array (");
    this.appendValueInput("index_type")
        .setCheck(null);
    this.appendValueInput("range")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(") of");
    this.appendValueInput("data_type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['alias'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("alias");
    this.appendValueInput("alias_name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("is");
    this.appendValueInput("name")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['disconnect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("disconnect");
    this.appendValueInput("signal")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("after");
    this.appendValueInput("time")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['record'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldTextInput("default"), "record_name")
        .appendField("is record");
    this.appendStatementInput("record")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end record")
        .appendField(new Blockly.FieldTextInput("default"), "record_name_end");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['proc_pin_name'] = {
  init: function() {
    this.appendDummyInput("signal_type")
        .appendField(new Blockly.FieldDropdown([["signal", "signal"], ["variable", "variable"], ["constant", "constant"]]), "type");
    this.appendValueInput("pin_name")
        .setCheck(null)
    this.appendValueInput("pin_type")
        .setCheck(null)
        .appendField(":")
        .appendField(new Blockly.FieldDropdown([["in", "in"], ["out", "out"], ["inout", "inout"]]), "in_out");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};