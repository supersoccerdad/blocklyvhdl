// Do not edit this file; automatically generated by build.py.
'use strict';


Blockly.SYNTH=new Blockly.Generator("SYNTH");Blockly.SYNTH.addReservedWords("and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,not,or,pass,print,raise,return,try,while,with,yield,True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern");
Blockly.SYNTH.ORDER_ATOMIC=0;Blockly.SYNTH.ORDER_COLLECTION=1;Blockly.SYNTH.ORDER_STRING_CONVERSION=1;Blockly.SYNTH.ORDER_MEMBER=2;Blockly.SYNTH.ORDER_FUNCTION_CALL=2;Blockly.SYNTH.ORDER_EXPONENTIATION=3;Blockly.SYNTH.ORDER_UNARY_SIGN=4;Blockly.SYNTH.ORDER_BITWISE_NOT=4;Blockly.SYNTH.ORDER_MULTIPLICATIVE=5;Blockly.SYNTH.ORDER_ADDITIVE=6;Blockly.SYNTH.ORDER_BITWISE_SHIFT=7;Blockly.SYNTH.ORDER_BITWISE_AND=8;Blockly.SYNTH.ORDER_BITWISE_XOR=9;Blockly.SYNTH.ORDER_BITWISE_OR=10;
Blockly.SYNTH.ORDER_RELATIONAL=11;Blockly.SYNTH.ORDER_LOGICAL_NOT=12;Blockly.SYNTH.ORDER_LOGICAL_AND=13;Blockly.SYNTH.ORDER_LOGICAL_OR=14;Blockly.SYNTH.ORDER_CONDITIONAL=15;Blockly.SYNTH.ORDER_LAMBDA=16;Blockly.SYNTH.ORDER_NONE=99;
Blockly.SYNTH.init=function(a){Blockly.SYNTH.PASS=this.INDENT+"pass\n";Blockly.SYNTH.definitions_=Object.create(null);Blockly.SYNTH.functionNames_=Object.create(null);Blockly.SYNTH.variableDB_?Blockly.SYNTH.variableDB_.reset():Blockly.SYNTH.variableDB_=new Blockly.Names(Blockly.SYNTH.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);for(var d=0;d<a.length;d++)b[d]=Blockly.SYNTH.variableDB_.getName(a[d],Blockly.Variables.NAME_TYPE)+" = None";Blockly.SYNTH.definitions_.variables=b.join("\n")};
Blockly.SYNTH.finish=function(a){var b=[],d=[],c;for(c in Blockly.SYNTH.definitions_){var e=Blockly.SYNTH.definitions_[c];e.match(/^(from\s+\S+\s+)?import\s+\S+/)?b.push(e):d.push(e)}delete Blockly.SYNTH.definitions_;delete Blockly.SYNTH.functionNames_;Blockly.SYNTH.variableDB_.reset();return(b.join("\n")+"\n\n"+d.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.SYNTH.scrubNakedValue=function(a){return a+"\n"};
Blockly.SYNTH.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/%/g,"\\%").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.SYNTH.scrub_=function(a,b){var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){var c=a.getCommentText();c&&(d+=Blockly.SYNTH.prefixLines(c,"# ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(c=a.inputList[e].connection.targetBlock())&&(c=Blockly.SYNTH.allNestedComments(c))&&(d+=Blockly.SYNTH.prefixLines(c,"# "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.SYNTH.blockToCode(e);return d+b+e};Blockly.SYNTH.name=function(a){return[a.getFieldValue("Name"),Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.generate_if=function(a){var b=a.getFieldValue("label"),d=Blockly.SYNTH.valueToCode(a,"label",Blockly.SYNTH.ORDER_NONE),c=Blockly.SYNTH.statementToCode(a,"NAME");a=a.getFieldValue("endgenerate");return b+": if "+d+" generate\n"+c+"end "+a+";\n"};
Blockly.SYNTH.architecture=function(a){a.getFieldValue("architecture_name");var b=a.getFieldValue("entity_name"),d=Blockly.SYNTH.statementToCode(a,"declarations"),c=Blockly.SYNTH.statementToCode(a,"concurent_statements");a.getFieldValue("end_arch_name");var e=c.split("\n");for(a=0;a<e.length-1;a++)if(0<e[a].search("association"))for(c=a+1;c<e.length-1;c++){var f=e[a].replace("(","");f=f.replace(")","");f=f.trim();f=f.split(" ");var g=e[c].replace("(","");g=g.trim();g=g.split(" ");for(var h=2;h<f.length-
1;h+=2)if(f[h]==g[0]){f=e[a];e[a]=e[c];e[c]=f;break}}c="";for(a=0;a<e.length-1;a++)f=e[a].trim(),f=f.split(" "),f=f[0],-1!=f.indexOf("_i")&&(f=f.split("="),c=c+f[0]+"=''\n");for(a=0;a<e.length-1;a++)c=c.concat(e[a]+"\n"),e[a]=e[a].trim(),e[a]=e[a].split(" ");c=d+'var error=""\n\nfunction '+b+"(){\n"+c;d=c.split(/\r\n|\r|\n/);e=[];b=[];for(a=0;a<d.length;a++)f=d[a].trim().split(" "),"function"==f[0]&&f[1]&&-1!=f[1].indexOf("latchstr")&&e.push(f[1]),"Process"==f[0]&&"function"==f[2]&&f[2]&&(e.push(f[3]),
b.push(f[0]));b="";for(a=0;a<e.length;a++)for(f=1,g=a+1;g<e.length;g++)e[a]==e[g]&&(1==f&&(c=c.replace("function "+e[g],"function "+e[g].split("(")[0]+"_"+f+"(latchstr,"),c=c.replace(e[a].split("(")[0]+'("", false)',""),f+=1),c=c.replace("function "+e[g],"function "+e[g].split("(")[0]+"_"+f+"(latchstr,"),c=c.replace(e[a].split("(")[0]+'("", false)',""),-1!=c.indexOf("function "+e[g])&&(f+=1)),d=e[a].split("f(")[0],(""==b||-1==b.search("function "+d))&&-1==c.search(d+".type='std_logic';")&&1<f&&(b=
b+d+"f('', false)\n",b=b+"var "+d+"r='';\n",b=b+"function "+e[a]+" bypass){\n",b=b+"if ("+d+".type=='std_logic'){\n",b=b+d+"r="+d+"f_1('', true)\n",b=b+"for (var m=2;m<"+(f+1)+";m++){\n",b=b+d+'r=resolution(eval("'+d+'f_" + m + "(latchstr, true)"),'+d+"r)\n}",b+="if (!bypass){\n",b=b+"if("+d+"r=='u' || "+d+"r=='w' || "+d+"r=='d'){"+d+".data.push("+d+"r); "+d+"r='='}\n",b=b+"if ("+d+"r=="+d+".pre && "+d+'.wave!="") {'+d+".wave="+d+'.wave + "."} else {'+d+".wave="+d+".wave + "+d+"r}\n",b=b+d+".pre="+
d+"r\n",b+="}\n",b=b+"return "+d+"r\n",b+="}\n",b+="error=error + '<br>Error: one or more sources are driving signal c which is not from a resolved type (std_logic)'\n",b+="}\n");g=e=0;h="";d=c.split(/\r\n|\r|\n/);for(a=0;a<d.length;a++)f=d[a].trim().split(" "),"Process"==f[0]&&"function"==f[2]&&(f[3].indexOf("_"),e+=1,h=h+"function "+f[3]+" bypass){return'hold'}\n"),"Process}"==f[0]&&"{function"!=f[2]&&(c=c.replace("  Process} else {","  Process_} else {"+h),g=e,h="");0<g&&-1!=d[d.length-2].indexOf("Process")&&
(c+="}\n");c=c+b+"}\n";c=c.replace(/Process_/g,"");return c=c.replace(/Process/g,"")};Blockly.SYNTH.port_map=function(a){var b=a.getFieldValue("label"),d=a.getFieldValue("component");a=Blockly.SYNTH.statementToCode(a,"NAME");a=a.substring(0,a.length-0);return b+": "+d+a+";\n"};Blockly.SYNTH.map_list=function(a){var b=a.getFieldValue("map");a=Blockly.SYNTH.valueToCode(a,"port",Blockly.SYNTH.ORDER_ATOMIC);return"\n"+b+a};
Blockly.SYNTH.map_association=function(a){var b=Blockly.SYNTH.valueToCode(a,"signal_name",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"signal_type",Blockly.SYNTH.ORDER_NONE);return b+" => "+a+",\n"};Blockly.SYNTH.constant2=function(a){var b=Blockly.SYNTH.valueToCode(a,"constant_name",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"constant_type",Blockly.SYNTH.ORDER_NONE);return"constant "+b+" : "+a+"\n"};Blockly.SYNTH.process=function(a){a.getFieldValue("label_begin");Blockly.SYNTH.statementToCode(a,"declarations");var b=Blockly.SYNTH.statementToCode(a,"begin");a.getFieldValue("label_end");a=a.getFieldValue("sens")?"("+a.getFieldValue("sens")+")\n":"\n";var d="if (";a=a.slice(1,a.length-2);a=a.split(",");for(var c=0;c<a.length;c++)d=c<a.length-1?d+a[c]+".pre!="+a[c]+".val || ":d+a[c]+".pre!="+a[c]+".val){";b=b.replace(/\n/g,"\nProcess");d=d+b+"} else {\n";b.split("\n");return d+"}"};
Blockly.SYNTH.procedure_call=function(a){var b=Blockly.SYNTH.valueToCode(a,"procedurename",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"values",Blockly.SYNTH.ORDER_NONE);return b+" ("+a+");\n"};
Blockly.SYNTH.generate=function(a){var b=a.getFieldValue("generate_label"),d=Blockly.SYNTH.valueToCode(a,"start",Blockly.SYNTH.ORDER_NONE),c=Blockly.SYNTH.valueToCode(a,"end",Blockly.SYNTH.ORDER_NONE),e=Blockly.SYNTH.statementToCode(a,"generate");a=a.getFieldValue("end_label");return b+": for "+d+" in "+c+" generate\n"+e+"end generate "+a+";\n"};
Blockly.SYNTH.case3={};Blockly.SYNTH.controls_case=function(a){var b=a.getFieldValue("case_name");var d=a.getFieldValue("Q"),c=Blockly.SYNTH.statementToCode(a,"ADD0");var e="case "+b+" is\n"+("when "+d+" =>\n")+c;for(b=1;b<=a.elseifCount_;b++)d=a.getFieldValue("Q"+b),c=Blockly.SYNTH.statementToCode(a,"DO"+b),e+="when "+d+" =>\n",e+=c;a.elseCount_&&(c=Blockly.SYNTH.statementToCode(a,"ELSE"),e+="when others =>\n",e+=c);return e+="end case;\n"};Blockly.SYNTH.procedure=function(a){var b=a.getFieldValue("procedure_name"),d=Blockly.SYNTH.statementToCode(a,"parameter_list"),c=Blockly.SYNTH.statementToCode(a,"declaration"),e=Blockly.SYNTH.statementToCode(a,"sequential");a=a.getFieldValue("end_name");b="procedure "+b+"(\n"+d+") is\nbegin"+c+"\n";return b=b+e+"end "+a+";\n"};
Blockly.SYNTH.function_pack=function(a){var b=a.getFieldValue("name"),d=Blockly.SYNTH.statementToCode(a,"declaration");a=Blockly.SYNTH.valueToCode(a,"return",Blockly.SYNTH.ORDER_NONE);d=d.substring(0,d.length-1);return"function "+b+" (\n"+d+")\n  return "+a+";\n"};Blockly.SYNTH.component_instantiation=function(a){var b=a.getFieldValue("component_name"),d=Blockly.SYNTH.statementToCode(a,"generic_port");a=a.getFieldValue("end_name");return"component "+b+"\n"+d+"end component "+a+";\n"};
Blockly.SYNTH.alias=function(a){var b=Blockly.SYNTH.valueToCode(a,"alias",Blockly.SYNTH.ORDER_NONE);Blockly.SYNTH.valueToCode(a,"name",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"type",Blockly.SYNTH.ORDER_NONE);return"alias "+b+": "+b+" is "+a+";\n"};
Blockly.SYNTH.signal=function(a){a.getFieldValue("signal");var b=Blockly.SYNTH.valueToCode(a,"signal_name",Blockly.SYNTH.ORDER_NONE);Blockly.SYNTH.valueToCode(a,"signal_type",Blockly.SYNTH.ORDER_NONE);return"var "+b+"=false\nvar "+b+"_pre=false;\nvar "+b+"_wave='';\nvar "+b+"_data=[];\n"};
Blockly.SYNTH.signal_init=function(a){var b=a.getFieldValue("signal"),d=Blockly.SYNTH.valueToCode(a,"signal_name",Blockly.SYNTH.ORDER_NONE),c=Blockly.SYNTH.valueToCode(a,"signal_type",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"signal_init",Blockly.SYNTH.ORDER_NONE);return b+" "+d+": "+c+" := "+a+";\n"};
Blockly.SYNTH.variable=function(a){var b=Blockly.SYNTH.valueToCode(a,"variable",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"list",Blockly.SYNTH.ORDER_NONE);return"variable "+b+": "+a+";\n"};
Blockly.SYNTH.association=function(a){var b=Blockly.SYNTH.valueToCode(a,"signal_name",Blockly.SYNTH.ORDER_NONE);a.getFieldValue("association");var d=Blockly.SYNTH.valueToCode(a,"variable",Blockly.SYNTH.ORDER_NONE);a=b+'f("", false)\nfunction '+b+"f(latchstr, bypass){\nif (latchstr.indexOf('"+b+"')==-1){\nvar temp=latchstr + '"+b+"';\n";var c="";if(-1==d.indexOf("temp")){for(var e="nand and nor or xnor xor srl sll".split(" "),f=" && ; && ; || ; || ; != ; != ; << ; >> ".split(";"),g=0;g<e.length;g++)if(-1!=
d.indexOf(e[g]))if(d.match(/\(/g))if(d.match(/\)/g)){if(d.match(/\(/g).length!=d.match(/\)/g).length){alert("there is a mismatch between the amount of left and right brackets");break}}else{alert("there is a mismatch between the amount of left and right brackets");break}else d="("+d+")";var h=d.split(" ");for(g=1;g<e.length;g+=2)for(var k=1;k<h.length;k+=2)h[k]==e[g]&&(h[k]=h[k].replace(e[g],f[g]),"f(temp, true)"==!h[k-1]&&(h[k-1]+="f(temp, true)"),h[k+1].idexOf(")")?h[k+1]=h[k+1].replace(")","f(temp, true))"):
h[k+1]+="f(temp, true)");for(g=0;g<e.length;g+=2)for(k=1;k<h.length;k+=2)if(-1!=h[k].indexOf(e[g])){h[k]=h[k].replace(e[g],f[g]);h[k-1]+="f(temp, true)";h[k+1]+="f(temp, true)";var m=1;for(var l=k-1;0<=l;l-=2)if(h[l].match(/\(/)&&(m-=h[l].match(/\(/g).length),h[l].match(/\)/g)&&(m+=h[l].match(/\)/g).length),0>=m&&h[l].match(/\(/g)){d="";h[l]=h[l].replace(/\(/g,"( ");var n=h[l].split(" ");n[-m]="!"+n[-m];h[l]="";for(m=0;m<n.length;m++)h[l]+=n[m];break}}for(g=0;g<h.length;g++)d=d+h[g]+" "}e=d.replace(/^\s/,
"");e=e.replace(/\s\s+/g," ");e=e.replace(/\( /g,"(");e=e.replace(/ \)/g,")");for(g=d=0;g<e.length;g++)if(")"==e[g]?--d:"("==e[g]&&(d+=1),0>d){alert("error: brackets are placed wrong");break}d=e;e=e.replace(/xnor|nor|xor|or|nand|and|not\(/g,"");e=e.replace(/\(/g,"");e=e.replace(/\)/g,"");e=e.replace(/!/g,"");e=e.replace(/ftemp,true/g,"");e=e.replace(/ftemp, true/g,"");e=e.split(" ");g=[];for(k=0;k<e.length;k+=2)-1==c.indexOf(e[k])&&-1==e.indexOf("f(temp, true)")&&-1==e.indexOf("0")&&(c=c+e[k]+"f(temp, true)\n",
g=g+e[k]+".type,");g="["+g+b+".type]\n";d=d.replace(" ,",",");d=(d+";").replace(");",",temptype);");a=a+"var temptype="+g+c;a=a+b+".val="+d+"\nif (!bypass){\n";a=a+"if("+b+".val=='u' || "+b+".val=='w' || "+b+".val=='d'){"+b+".data.push("+b+".val); "+b+".val='='}\n";a=a+"if ("+b+".val=="+b+".pre && "+b+'.wave!="") {'+b+".wave="+b+'.wave + "."} else {'+b+".wave="+b+".wave + "+b+".val}\n";a=a+b+".pre="+b+".val\n}";a+="}\n";a+="else {\n";a=a+"alert('you made a latch at signal ' + '"+b+"')\n";a+="latch=true\n";
a+="}\n";return a=a+"return "+b+".val\n}\n"};Blockly.SYNTH.name_type=function(a){var b=Blockly.SYNTH.valueToCode(a,"name",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"type",Blockly.SYNTH.ORDER_NONE);return b+" : "+a+"\n"};
Blockly.SYNTH.association_delay=function(a){var b=Blockly.SYNTH.valueToCode(a,"signal_name",Blockly.SYNTH.ORDER_NONE),d=Blockly.SYNTH.valueToCode(a,"variable",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"delay",Blockly.SYNTH.ORDER_NONE);return b+" <= "+d+" after "+a+";\n"};Blockly.SYNTH.attribute=function(a){var b=Blockly.SYNTH.valueToCode(a,"atribute_name",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"type_name",Blockly.SYNTH.ORDER_NONE);return"attribute "+b+": "+a+";\n"};
Blockly.SYNTH.attribute_of=function(a){var b=Blockly.SYNTH.valueToCode(a,"atribute_name",Blockly.SYNTH.ORDER_NONE),d=Blockly.SYNTH.valueToCode(a,"variable",Blockly.SYNTH.ORDER_NONE),c=Blockly.SYNTH.valueToCode(a,"type_name",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"value",Blockly.SYNTH.ORDER_NONE);return"attribute "+b+" of "+d+": "+c+" is "+a+";\n"};
Blockly.SYNTH.type=function(a){var b=Blockly.SYNTH.valueToCode(a,"type",Blockly.SYNTH.ORDER_NONE),d=a.getFieldValue("type_list");a=Blockly.SYNTH.valueToCode(a,"list",Blockly.SYNTH.ORDER_NONE);return"type "+b+" "+d+" ("+a+");\n"};Blockly.SYNTH.subtype=function(a){var b=Blockly.SYNTH.valueToCode(a,"subtype",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"base_type",Blockly.SYNTH.ORDER_NONE);return"subtype "+b+" is "+a+";\n"};
Blockly.SYNTH.subtype_range=function(a){var b=Blockly.SYNTH.valueToCode(a,"subtype",Blockly.SYNTH.ORDER_NONE),d=Blockly.SYNTH.valueToCode(a,"base_type",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"type",Blockly.SYNTH.ORDER_NONE);return"subtype "+b+" is "+d+" range "+a+";\n"};
Blockly.SYNTH.type_array=function(a){var b=Blockly.SYNTH.valueToCode(a,"type1",Blockly.SYNTH.ORDER_NONE),d=Blockly.SYNTH.valueToCode(a,"type2",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"range",Blockly.SYNTH.ORDER_NONE);return"type "+b+" is array ("+d+") of "+a+";\n"};
Blockly.SYNTH.array_type_type=function(a){var b=Blockly.SYNTH.valueToCode(a,"type",Blockly.SYNTH.ORDER_NONE),d=Blockly.SYNTH.valueToCode(a,"index_type",Blockly.SYNTH.ORDER_NONE),c=Blockly.SYNTH.valueToCode(a,"range",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"data_type",Blockly.SYNTH.ORDER_NONE);return"type "+b+" is array ("+d+" "+c+") of "+a+";\n"};
Blockly.SYNTH.alias=function(a){var b=Blockly.SYNTH.valueToCode(a,"alias_name",Blockly.SYNTH.ORDER_NONE),d=Blockly.SYNTH.valueToCode(a,"type",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"name",Blockly.SYNTH.ORDER_NONE);return"alias "+b+" : "+d+" is "+a+";\n"};
Blockly.SYNTH.disconnect=function(a){var b=Blockly.SYNTH.valueToCode(a,"signal",Blockly.SYNTH.ORDER_NONE),d=Blockly.SYNTH.valueToCode(a,"type",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"time",Blockly.SYNTH.ORDER_NONE);return"disconnect "+b+": "+d+" after "+a+";\n"};Blockly.SYNTH.record=function(a){var b=a.getFieldValue("record_name"),d=Blockly.SYNTH.statementToCode(a,"record");a=a.getFieldValue("record_name_end");return"type "+b+" is record\n"+d+"end record "+a+";\n"};
Blockly.SYNTH.proc_pin_name=function(a){var b=a.getFieldValue("type"),d=Blockly.SYNTH.valueToCode(a,"pin_name",Blockly.SYNTH.ORDER_NONE),c=a.getFieldValue("in_out");a=Blockly.SYNTH.valueToCode(a,"pin_type",Blockly.SYNTH.ORDER_NONE);return b+" "+d+" "+c+" "+a+";\n"};Blockly.SYNTH.entity=function(a){a.getFieldValue("entity");var b=Blockly.SYNTH.statementToCode(a,"generic_port");a.getFieldValue("end_entity");return'<script src="http://www.blocklyvhdl.com/demo/wavedrom/skins/default.js" type="text/javascript">\x3c/script>\n<script src="http://www.blocklyvhdl.com/demo/wavedrom/wavedrom.min.js" type="text/javascript">\x3c/script><script>\n'+b+"\nvar latch=false\n"};
Blockly.SYNTH.generic=function(a){a.getFieldValue("port_list");return Blockly.SYNTH.statementToCode(a,"generic_inputs",Blockly.SYNTH.ORDER_NONE)};
Blockly.SYNTH.port_pin_name=function(a){var b=Blockly.SYNTH.valueToCode(a,"pin_name",Blockly.SYNTH.ORDER_NONE),d=a.getFieldValue("in_out");a=Blockly.SYNTH.valueToCode(a,"pin_type",Blockly.SYNTH.ORDER_NONE);var c="";"in"==d?(c=c+"var "+b+'= {val:false, pre:"", data:"", wave:"", type:""};\n'+b+'.type="'+a+'";\nfunction '+b+"f(latchstr, bypass) {\nif ("+b+".val=='' | "+b+".val== ' '){"+b+".val='u'}\n",c+="if (!bypass){\n",c=c+"if("+b+".val=='u' || "+b+".val=='w' || "+b+".val=='d'){"+b+".data.push("+
b+".val); "+b+".val='='}\n",c=c+"if ("+b+".val=="+b+".pre && "+b+'.wave!="") {'+b+".wave="+b+'.wave + "."} else {'+b+".wave="+b+".wave + "+b+".val}\n",c=c+b+".pre="+b+".val\n",c+="}\n",c=c+"return "+b+".val\n",c+="}\n"):c=c+"var "+b+'= {val:false, pre:"", data:"", wave:"", type:"'+a+'"};\n'+b+'.type="'+a+'";\n';return c};Blockly.SYNTH.operator=function(a){var b=Blockly.SYNTH.valueToCode(a,"in_a",Blockly.SYNTH.ORDER_NONE),d=a.getFieldValue("operator");a=Blockly.SYNTH.valueToCode(a,"in_b",Blockly.SYNTH.ORDER_NONE);var c="";"warning"!=d&&(c=c+d+"("+b,c=-1==b.lastIndexOf(")")?c+"f(temp, true) , "+a:c+" , "+a,-1==a.lastIndexOf(")")&&(c+="f(temp, true)"),c+=" )");return[c,Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.qualified=function(a){var b=a.getFieldValue("name");a=a.getFieldValue("range");return[b+"'"+a,Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.not=function(a){a=Blockly.SYNTH.valueToCode(a,"not_value",Blockly.SYNTH.ORDER_NONE);var b="not("+a;b=-1==a.lastIndexOf(")")?b+"f(temp, true) , 0)":b+", 0)";return[b,Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.others=function(a){return["others => "+Blockly.SYNTH.valueToCode(a,"others",Blockly.SYNTH.ORDER_NONE),Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.condition=function(a){var b=Blockly.SYNTH.valueToCode(a,"A",Blockly.SYNTH.ORDER_NONE),d=a.getFieldValue("condition");a=Blockly.SYNTH.valueToCode(a,"B",Blockly.SYNTH.ORDER_NONE);switch(d){case "=":var c="==";break;case "/=":c="!="}return[b+" "+c+" "+a,Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.type_conversion=function(a){var b=a.getFieldValue("conversion"),d=Blockly.SYNTH.valueToCode(a,"variable",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"to_integer",Blockly.SYNTH.ORDER_NONE);return[d+"("+b+"("+a+"))",Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.conversion=function(a){var b=a.getFieldValue("std_logic");a=Blockly.SYNTH.valueToCode(a,"NAME",Blockly.SYNTH.ORDER_ATOMIC);return[b+a,Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.std_match=function(a){var b=Blockly.SYNTH.valueToCode(a,"left",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"right",Blockly.SYNTH.ORDER_NONE);return"std_match("+b+", "+a+");\n"};Blockly.SYNTH.range_type=function(a){return["range "+Blockly.SYNTH.valueToCode(a,"type",Blockly.SYNTH.ORDER_NONE),Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.range1=function(a){var b=Blockly.SYNTH.valueToCode(a,"msb",Blockly.SYNTH.ORDER_NONE),d=a.getFieldValue("downto");a=Blockly.SYNTH.valueToCode(a,"lsb",Blockly.SYNTH.ORDER_NONE);return[b+" "+d+" "+a,Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.range2=function(a){var b=Blockly.SYNTH.valueToCode(a,"name",Blockly.SYNTH.ORDER_NONE),d=a.getFieldValue("range");b=b+"'"+d;a.getFieldValue("N");return[b,Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.range2_index=function(a){var b=Blockly.SYNTH.valueToCode(a,"name",Blockly.SYNTH.ORDER_NONE),d=a.getFieldValue("range");a=Blockly.SYNTH.valueToCode(a,"N",Blockly.SYNTH.ORDER_NONE);b=b+"'"+d;a&&(b=b+"("+a+")");return[b,Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.range_var=function(a){var b=Blockly.SYNTH.valueToCode(a,"variable",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"range",Blockly.SYNTH.ORDER_NONE);return[b+" range "+a,Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.index=function(a){var b=Blockly.SYNTH.valueToCode(a,"index_name",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"index_list",Blockly.SYNTH.ORDER_NONE);return[b+"("+a+")",Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.all=function(a){return["<>",Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.time_association=function(a){var b=Blockly.SYNTH.valueToCode(a,"time",Blockly.SYNTH.ORDER_NONE);a=a.getFieldValue("unit");return[b+" "+a,Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH["function"]=function(a){var b=a.getFieldValue("function_name"),d=Blockly.SYNTH.statementToCode(a,"parameters");d=d.substring(0,d.length-1);var c=Blockly.SYNTH.valueToCode(a,"return",Blockly.SYNTH.ORDER_NONE),e=Blockly.SYNTH.statementToCode(a,"declaration"),f=Blockly.SYNTH.statementToCode(a,"sequential"),g=a.getFieldValue("end_name");a=Blockly.SYNTH.valueToCode(a,"return2",Blockly.SYNTH.ORDER_NONE);return"function "+b+" (\n"+d+")\n  return "+c+" is\n"+e+"begin\n"+f+"return "+a+";\nend "+
g+";\n"};Blockly.SYNTH.function_call=function(a){var b=a.getFieldValue("function_name");a=a.getFieldValue("parameter_list");return[b+"("+a+");\n",Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.library=function(a){var b=Blockly.SYNTH.statementToCode(a,"declarations");a.getFieldValue("library");return b};Blockly.SYNTH.ieee=function(a){return'<script src="http://www.blocklyvhdl.com/demo/library/'+a.getFieldValue("IEEE")+'.js" type="text/javascript">\x3c/script>\n'};Blockly.SYNTH.std_textio=function(a){return"use STD.textio;\n"};
Blockly.SYNTH.use=function(a){var b=Blockly.SYNTH.valueToCode(a,"use",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"library",Blockly.SYNTH.ORDER_NONE);return"use "+b+"."+a+";\n"};Blockly.SYNTH.std_logic=function(a){return[a.getFieldValue("std_bit"),Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.std_logic_init=function(a){var b=a.getFieldValue("std_bit");a=Blockly.SYNTH.valueToCode(a,"bit_value",Blockly.SYNTH.ORDER_NONE);return[b+" := "+a,Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.vector=function(a){var b=a.getFieldValue("vector"),d=Blockly.SYNTH.valueToCode(a,"msb",Blockly.SYNTH.ORDER_NONE),c=a.getFieldValue("range");a=Blockly.SYNTH.valueToCode(a,"lsb",Blockly.SYNTH.ORDER_NONE);return[b+"("+d+" "+c+" "+a+")",Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.vector_init=function(a){var b=a.getFieldValue("vector"),d=Blockly.SYNTH.valueToCode(a,"msb",Blockly.SYNTH.ORDER_NONE),c=a.getFieldValue("range"),e=Blockly.SYNTH.valueToCode(a,"lsb",Blockly.SYNTH.ORDER_NONE);a=Blockly.SYNTH.valueToCode(a,"init",Blockly.SYNTH.ORDER_NONE);return[b+"("+d+" "+c+" "+e+") :="+a,Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.integer=function(a){return[a.getFieldValue("integer"),Blockly.SYNTH.ORDER_NONE]};
Blockly.SYNTH.integer_init=function(a){var b=a.getFieldValue("integer");a=Blockly.SYNTH.valueToCode(a,"integer_value",Blockly.SYNTH.ORDER_NONE);return[b+" := "+a,Blockly.SYNTH.ORDER_NONE]};Blockly.SYNTH.select={};
Blockly.SYNTH.controls_select=function(a){var b=a.getFieldValue("label");var d=a.getFieldValue("A");a.getFieldValue("B");var c=a.getFieldValue("Q"),e=a.getFieldValue("Y"),f=Blockly.SYNTH.valueToCode(a,"ADD0",Blockly.SYNTH.ORDER_NONE)||"false";Blockly.SYNTH.valueToCode(a,"C",Blockly.SYNTH.ORDER_NONE);e=b+": with "+d+" select\n"+(c+" <= "+e+" when "+f+",");a.elseCount_&&(c=Blockly.SYNTH.valueToCode(a,"ELSE",Blockly.SYNTH.ORDER_NONE)||"false",e+="\n else "+c);for(b=1;b<a.itemCount_;b++)a.getFieldValue("A"+b),
d=a.getFieldValue("B"+b),c=Blockly.SYNTH.valueToCode(a,"ADD"+b,Blockly.SYNTH.ORDER_NONE)||"false",c=c.replace(/, /g," | "),e=b<a.itemCount_?e+("\n "+d+" when "+c+","):e+("\n "+d+" when "+c),b==a.elseifCount_&&(c=Blockly.SYNTH.valueToCode(a,"ELSE"+b,Blockly.SYNTH.ORDER_NONE)||"false",e+="\n else "+c);return e+"\n"};Blockly.SYNTH.assert=function(a){var b=Blockly.SYNTH.valueToCode(a,"condition",Blockly.SYNTH.ORDER_NONE),d=Blockly.SYNTH.valueToCode(a,"test_String",Blockly.SYNTH.ORDER_NONE);a=a.getFieldValue("severity");return"assert "+b+" report "+d+" severity "+a+";\n"};
Blockly.SYNTH.testbench=function(a){var b=a.getFieldValue("testbench"),d=Blockly.SYNTH.statementToCode(a,"testbench");a=d.split(";");for(var c=0;c<a.length;c++)a[c]=a[c].trim(),a[c]=a[c].split(" ");var e=d+"\n\n";for(c=0;c<a.length-1;c++)-1==a[c][1].indexOf("out")&&-1==a[c][1].indexOf("internal")&&(d=a[c][1].replace("inp_",""),e=e+d+"= {val:false, pre:'', data:'', wave:''};\n");e=e+"for (n=0; n<"+(a[0][3].length-2)+"; n++){\n";for(c=0;c<a.length-1;c++)-1==a[c][1].indexOf("out")&&-1==a[c][1].indexOf("internal")&&
(e=e+"if ("+a[c][1]+"[n]=='.') {"+a[c][1].slice(4)+".val="+a[c][1].slice(4)+".pre} else {"+a[c][1].slice(4)+".val="+a[c][1]+"[n]};\n");e=e+b+"()\n";for(c=0;c<a.length-1;c++)-1==a[c][1].indexOf("out")&&-1==a[c][1].indexOf("internal")&&(e=e+a[c][1].slice(4)+"f('', false)\n");e+="if (latch || error!='') {\nbreak}\n}\n\x3c/script>\n<script type=\"WaveDrom\">\n{ signal : [\n";for(c=0;c<a.length-1;c++)-1!=a[c][1].indexOf("out")||a[c][1].indexOf("int"),e=e+"{ name: '"+a[c][1].substr(4)+"' , wave: "+a[c][1].substr(4)+
".wave, data: "+a[c][1].substr(4)+".data},\n";return e+']}\n\x3c/script>\n<div id="log"></div>\n<script>\ndocument.getElementById("log").innerHTML = window.error'};Blockly.SYNTH.tb_clockgen=function(a){var b=a.getFieldValue("clockname");a=a.getFieldValue("periods");b="{name: '"+b+"', wave: 'p";for(var d=0;d<a;d++)b+=".";return b+"'},\n"};Blockly.SYNTH.tb_signal=function(a){var b=a.getFieldValue("signalname");a=a.getFieldValue("trace");a=a.replace(/ /g,"u");return"var inp_"+b+" = '"+a+"';\n"};
Blockly.SYNTH.testbench_out=function(a){return"var out_"+a.getFieldValue("output")+" = '';\n"};Blockly.SYNTH.tb_out=function(a){return"var out_"+a.getFieldValue("output")+" = '';\n"};Blockly.SYNTH.tb_internal=function(a){return"var int_"+a.getFieldValue("internal")+" = '';\n"};