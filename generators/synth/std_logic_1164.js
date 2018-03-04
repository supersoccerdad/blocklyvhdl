function signal_type_check(l,r){
  if(l.type!=r.type){
	  error=error + "The types of these signalnames " + l.name + " type=" + l.type + " and " + r.name + " type=" + r.type + " are conflicting\n"
// alert("signal_type_check")
 return false
	  } else {
	  return true
	  }
}

function library_check(l){
//	alert("library_check=" + l.type + l.name)
  if (((l.type=="std_logic" || l.type=="std_ulogic" || 
  l.type=="std_logic_vector" || l.type=="std_ulogic_vector" ) &&
  (window.library.indexOf("std_logic_1164")!=-1)) || 
  ((l.type=="signed" || l.type=="unsigned" ) && (window.library.indexOf("numeric_bit")!=-1 || window.library.indexOf("numeric_std")!=-1))) {
	return true
  } else {
//	  console.log()
	error=error + "The type " + l.type + " of signal " + l.name + " is not supported by a library\n"
//	 alert("library_check")
	return false
}
}

function signal_value_check(l){
	if (((l.val=="u" || l.val=="x" || l.val=="0" || l.val=="1" || l.val=="z" || l.val=="w" || l.val=="h" || l.val=="dc") &&
  (l.type=="std_logic" || l.type=="std_ulogic" || l.type=="std_logic_vector" || l.type=="std_ulogic_vector")) ||
  ((l.val=="0" || l.val=="1"))){
	  return true
  } else {
//	   alert("signal_value_check")
	  error=error + "The signal value " + l.val + " of signal " + l.name + " does not match with its signal type " + l.type + "\n"  
	  return false
  }
}

function check_equal_length(l,r){
	if (l.val.length!=r.val.length){
	    error=error + "Signals " + l.name + " and " + r.name + " dont have vectors of the same lenght\n"
//		 alert("check_equal_length")
	    return false
	} else {
		return true
	}
}

function check_combi(l,r){
if (signal_type_check(l,r)==true && 
library_check(l)==true && 
signal_value_check(l)==true && 
signal_value_check(r)==true &&
check_equal_length(l,r)==true) {
return true} else { return false}
}

function and(l,r){
var and=[]
var result=""
//alert("and " + l.name + " " + r.name)
if(check_combi(l,r)==true){
//	alert(l.type + " "+  r.type)
and['u']  = {u:'u', x:'u', 0:'0', 1:'u', z:'u', w:'0', l:'u', h:'u', dc:"z"};
and['x']  = {u:'u', x:'x', 0:'0', 1:'x', z:'x', w:'0', l:'x', h:'x', dc:"x"};
and['0']  = {u:'0', x:'0', 0:'0', 1:'0', z:'0', w:'0', l:'0', h:'0', dc:"0"};
and['1']  = {u:'u', x:'x', 0:'0', 1:'1', z:'x', w:'0', l:'1', h:'x', dc:"x"};
and['z']  = {u:'u', x:'x', 0:'0', 1:'x', z:'x', w:'0', l:'x', h:'x', dc:"z"};
and['w']  = {u:'u', x:'x', 0:'0', 1:'x', z:'x', w:'0', l:'x', h:'x', dc:"x"};
and['l']  = {u:'0', x:'0', 0:'0', 1:'0', z:'0', w:'0', l:'0', h:'0', dc:"0"};
and['h']  = {u:'u', x:'x', 0:'0', 1:'1', z:'x', w:'0', l:'1', h:'x', dc:"x"};
and['dc'] = {u:'u', x:'x', 0:'0', 1:'x', z:'x', w:'0', l:'x', h:'x', dc:"x"};
for (var n=0; n<l.val.length;n++){
	result=result + and[l.val[n]][r.val[n]]
}
return result
} else {
	return '0'
}
}

function or(l,r){
var or=[]
var result=""
//alert("or " + l.name + " " + r.name)
if(check_combi(l,r)==true){
//alert(l.type + " "+  r.type)
or['u']  = {u:'u', x:'u', 0:'u', 1:'1', z:'u', w:'u', l:'u', h:'1', dc:"u"};
or['x']  = {u:'u', x:'x', 0:'x', 1:'1', z:'x', w:'x', l:'x', h:'1', dc:"x"};
or['0']  = {u:'u', x:'x', 0:'0', 1:'1', z:'x', w:'x', l:'0', h:'1', dc:"x"};
or['1']  = {u:'1', x:'1', 0:'1', 1:'1', z:'1', w:'0', l:'1', h:'1', dc:"1"};
or['z']  = {u:'u', x:'x', 0:'x', 1:'1', z:'x', w:'1', l:'x', h:'1', dc:"x"};
or['w']  = {u:'u', x:'x', 0:'x', 1:'1', z:'x', w:'x', l:'x', h:'1', dc:"x"};
or['l']  = {u:'u', x:'x', 0:'0', 1:'1', z:'x', w:'x', l:'0', h:'1', dc:"x"};
or['h']  = {u:'1', x:'1', 0:'1', 1:'1', z:'1', w:'1', l:'1', h:'1', dc:"1"};
or['dc'] = {u:'u', x:'x', 0:'x', 1:'1', z:'x', w:'x', l:'x', h:'1', dc:"x"};
for (var n=0; n<l.val.length;n++){
	result=result + or[l.val[n]][r.val[n]]
}
return result
} else {
	return '0'
}
}


function xor(l,r){
var xor=[]
var result=""
if(check_combi(l,r)==true){
xor['u']  = {u:'u', x:'u', 0:'u', 1:'u', z:'u', w:'u', l:'u', h:'u', dc:"u"};
xor['x']  = {u:'u', x:'x', 0:'x', 1:'x', z:'x', w:'x', l:'x', h:'x', dc:"x"};
xor['0']  = {u:'u', x:'x', 0:'0', 1:'1', z:'x', w:'x', l:'0', h:'1', dc:"x"};
xor['1']  = {u:'1', x:'x', 0:'1', 1:'0', z:'x', w:'x', l:'1', h:'0', dc:"x"};
xor['z']  = {u:'u', x:'x', 0:'x', 1:'x', z:'x', w:'x', l:'x', h:'x', dc:"x"};
xor['w']  = {u:'u', x:'x', 0:'x', 1:'x', z:'x', w:'x', l:'x', h:'x', dc:"x"};
xor['l']  = {u:'u', x:'x', 0:'0', 1:'1', z:'x', w:'x', l:'0', h:'1', dc:"x"};
xor['h']  = {u:'1', x:'1', 0:'1', 1:'0', z:'x', w:'x', l:'1', h:'0', dc:"x"};
xor['dc'] = {u:'u', x:'x', 0:'x', 1:'x', z:'x', w:'x', l:'x', h:'x', dc:"x"};
for (var n=0; n<l.val.length;n++){
	result=result + xor[l.val[n]][r.val[n]]
}
return result
} else {
	return '0'
}
}
function not(l){
var not=[]
var result=""
//alert("not= " + l.type + " ")
if (
library_check(l)==true && 
signal_value_check(l)==true ){//&& 
//signal_value_check(r)==true) {
not = {u:'u', x:'x', 0:'1', 1:'0', z:'x', w:'x', l:'1', h:'0', dc:"x"};
for (var n=0; n<l.val.length;n++){
	result=result + not[l.val[n]]
}
return result
} else {
	return '0'
}
}

function nand(l,r){
//	alert("nand= " + l.type + " " + r.type)
	var notport = {val:"", type:""}
	notport.val=and(l,r)
	notport.type=l.type
	notport.name="notport"
//return not(and(l,r))
return not(notport)
}

function nor(l,r){
return not(or(l,r))
}

function xnor(l,r){
return not(xor(l,r))
}


function resolution(l,r){
var res=[]
var result=""
//console.log()
//alert("resolution= " + l.val + " " + l.name + " " + r.val + " " + r.name)
if(check_combi(l,r)==true){
res['u']  = {u:'u', x:'u', 0:'u', 1:'u', z:'=', w:'u', l:'u', h:'u', dc:"u"};
res['x']  = {u:'u', x:'x', 0:'x', 1:'x', z:'x', w:'x', l:'x', h:'x', dc:"x"};
res['0']  = {u:'u', x:'x', 0:'0', 1:'x', z:'0', w:'0', l:'0', h:'0', dc:"x"};
res['1']  = {u:'u', x:'x', 0:'x', 1:'1', z:'1', w:'1', l:'1', h:'1', dc:"x"};
res['z']  = {u:'u', x:'x', 0:'0', 1:'1', z:'z', w:'w', l:'l', h:'h', dc:"x"};
res['w']  = {u:'u', x:'x', 0:'0', 1:'1', z:'w', w:'w', l:'w', h:'w', dc:"x"};
res['l']  = {u:'u', x:'x', 0:'0', 1:'1', z:'l', w:'w', l:'l', h:'w', dc:"x"};
res['h']  = {u:'u', x:'x', 0:'0', 1:'1', z:'h', w:'w', l:'w', h:'h', dc:"x"};
res['dc'] = {u:'u', x:'x', 0:'x', 1:'x', z:'x', w:'x', l:'x', h:'x', dc:"x"};
for (var n=0; n<l.val.length;n++){
	result=result + res[l.val[n]][r.val[n]]
}
return result
} else {
	return '0'
}
}



