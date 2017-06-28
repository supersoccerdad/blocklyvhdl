/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Helper functions for generating VHDL for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.VHDL');

goog.require('Blockly.Generator');
//goog.require('Blockly.Blocks');

/**
 * VHDL code generator.
 * @type {!Blockly.Generator}
 */
Blockly.VHDL = new Blockly.Generator('VHDL');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.VHDL.addReservedWords(
    // import keyword
    // print ','.join(keyword.kwlist)
    // http://docs.VHDL.org/reference/lexical_analysis.html#keywords
    'and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,not,or,pass,print,raise,return,try,while,with,yield,' +
    //http://docs.VHDL.org/library/constants.html
    'True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,' +
    // http://docs.VHDL.org/library/functions.html
    'abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern');

/**
 * Order of operation ENUMs.
 * http://docs.VHDL.org/reference/expressions.html#summary
 */
Blockly.VHDL.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.VHDL.ORDER_COLLECTION = 1;        // tuples, lists, dictionaries
Blockly.VHDL.ORDER_STRING_CONVERSION = 1; // `expression...`
Blockly.VHDL.ORDER_MEMBER = 2;            // . []
Blockly.VHDL.ORDER_FUNCTION_CALL = 2;     // ()
Blockly.VHDL.ORDER_EXPONENTIATION = 3;    // **
Blockly.VHDL.ORDER_UNARY_SIGN = 4;        // + -
Blockly.VHDL.ORDER_BITWISE_NOT = 4;       // ~
Blockly.VHDL.ORDER_MULTIPLICATIVE = 5;    // * / // %
Blockly.VHDL.ORDER_ADDITIVE = 6;          // + -
Blockly.VHDL.ORDER_BITWISE_SHIFT = 7;     // << >>
Blockly.VHDL.ORDER_BITWISE_AND = 8;       // &
Blockly.VHDL.ORDER_BITWISE_XOR = 9;       // ^
Blockly.VHDL.ORDER_BITWISE_OR = 10;       // |
Blockly.VHDL.ORDER_RELATIONAL = 11;       // in, not in, is, is not,
                                            //     <, <=, >, >=, <>, !=, ==
Blockly.VHDL.ORDER_LOGICAL_NOT = 12;      // not
Blockly.VHDL.ORDER_LOGICAL_AND = 13;      // and
Blockly.VHDL.ORDER_LOGICAL_OR = 14;       // or
Blockly.VHDL.ORDER_CONDITIONAL = 15;      // if else
Blockly.VHDL.ORDER_LAMBDA = 16;           // lambda
Blockly.VHDL.ORDER_NONE = 99;             // (...)

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.VHDL.init = function(workspace) {
  /**
   * Empty loops or conditionals are not allowed in VHDL.
   */
  Blockly.VHDL.PASS = this.INDENT + 'pass\n';
  // Create a dictionary of definitions to be printed before the code.
  Blockly.VHDL.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.VHDL.functionNames_ = Object.create(null);

  if (!Blockly.VHDL.variableDB_) {
    Blockly.VHDL.variableDB_ =
        new Blockly.Names(Blockly.VHDL.RESERVED_WORDS_);
  } else {
    Blockly.VHDL.variableDB_.reset();
  }

  var defvars = [];
  var variables = Blockly.Variables.allVariables(workspace);
  for (var i = 0; i < variables.length; i++) {
    defvars[i] = Blockly.VHDL.variableDB_.getName(variables[i],
        Blockly.Variables.NAME_TYPE) + ' = None';
  }
  Blockly.VHDL.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.VHDL.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var imports = [];
  var definitions = [];
  for (var name in Blockly.VHDL.definitions_) {
    var def = Blockly.VHDL.definitions_[name];
    if (def.match(/^(from\s+\S+\s+)?import\s+\S+/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }
  // Clean up temporary data.
  delete Blockly.VHDL.definitions_;
  delete Blockly.VHDL.functionNames_;
  Blockly.VHDL.variableDB_.reset();
  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n\n');
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.VHDL.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a properly escaped VHDL string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} VHDL string.
 * @private
 */
Blockly.VHDL.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\%/g, '\\%')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
};

/**
 * Common tasks for generating VHDL from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The VHDL code created for this block.
 * @return {string} VHDL code with comments and subsequent blocks added.
 * @private
 */
Blockly.VHDL.scrub_ = function(block, code) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.VHDL.prefixLines(comment, '# ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.VHDL.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.VHDL.prefixLines(comment, '# ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.VHDL.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
