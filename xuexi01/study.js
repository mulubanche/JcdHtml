


/////////////////////////////////
/////////////////////////////////
//字符串处理
function showLabel01(){
	var label01 = document.getElementById("showInfoLabel");
	var staticMessage = 'Hello Wolrd!';
	var name = '小明';
	var age = 222;
	// var massge = '你好，$(name)，今年你$(age)岁了~';	//这样变量赋值不成功
	// var massge = '你好,'+name+',今年你'+age+'岁了~';	//这样变量赋值不成功
	label01.innerHTML = `你好, ${name}, 你今年${age}岁了!`;//使用这种方式可赋值成功
}
function showLabel02(){
	var label01 = document.getElementById("showInfoLabel");
	var staticMessage = 'Hello Wolrd!';
	var name = '小明';
	var age = 22;
	alert(`你好, ${name}, 你今年${age}岁了!`);
	// alert(massge);
}
function showLabel03(){
	var label01 = document.getElementById("showInfoLabel");
	var staticMessage = 'Hello Wolrd!';
	label01.innerHTML = staticMessage.toUpperCase();
}
function showLabel04(){
	var label01 = document.getElementById("showInfoLabel");
	var staticMessage = 'Hello Wolrd!';
	label01.innerHTML = staticMessage.toLowerCase();
}
function showLabel05(){
	var label01 = document.getElementById("showInfoLabel");
	var staticMessage = 'Hello Wolrd!';
	var index = staticMessage.toLowerCase().indexOf('o');
	label01.innerHTML = '字符o的位置是'+index;
}
function showLabel06(){
	var label01 = document.getElementById("showInfoLabel");
	var staticMessage = 'Hello Wolrd!';
	var index = staticMessage.toLowerCase().indexOf('wol');
	label01.innerHTML = "字符wor的位置是"+index;
}
function showLabel07(){
	var label01 = document.getElementById("showInfoLabel");
	var staticMessage = 'Hello Wolrd!';
	label01.innerHTML = staticMessage.substring(0,6);
}
function showLabel08(){
	var label01 = document.getElementById("showInfoLabel");
	var staticMessage = 'Hello Wolrd!';
	label01.innerHTML = staticMessage.substring(4);
}
