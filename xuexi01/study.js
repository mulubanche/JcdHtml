


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





/////////////////////////////////
/////////////////////////////////
//数组处理
function showArray01(){
		var arr = ['123','sf',12,12.1,null,true];
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr[1];
	}
	function showArray02(){
		var arr = ['123','sf',12,12.1,null,true];
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr.length;
	}
	function showArray03(){
		var arr = ['123','sf',12,12.1,null,true];
		arr[4] = 'jiang';
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray04(){
		var arr = ['123','sf',12,12.1,null,true];
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr.indexOf(12);
	}
	function showArray05(){
		var arr = ['123','sf',12,12.1,null,true];
		var newArr = arr.slice(0,3);
		var label = document.getElementById('showArrLabel');
		label.innerHTML = newArr;
	}
	function showArray06(){
		var arr = ['123','sf',12,12.1,null,true];
		var newArr = arr.slice(3);
		var label = document.getElementById('showArrLabel');
		label.innerHTML = newArr;
	}
	function showArray07(){
		var arr = ['123','sf',12,12.1,null,true];
		arr.push('jiang','chao');
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray08(){
		var arr = ['123','sf', 12, 12.1, null, true];
		arr.pop();
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray09(){
		var arr = ['123','sf', 12, 12.1, null, true];
		arr.unshift('jiang','chao');
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray10(){
		var arr = ['123','sf', 12, 12.1, null, true];
		arr.shift();
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray11(){
		var arr = ['B','T','E','M','Z','A'];
		arr.sort();
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray12(){
		var arr = ['123','sf', 12, 12.1, null, true];
		arr.reverse();
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray13(){
		var arr = ['123','sf', 12, 12.1, null, true];
		arr.splice(2,3,'jiang','chao');
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray14(){
		var arr = ['123','sf', 12, 12.1, null, true];
		arr.splice(2,3);
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray15(){
		var arr = ['123','sf', 12, 12.1, null, true];
		arr.splice(2,0,'jiang','chao');
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr;
	}
	function showArray16(){
		var arr1 = ['B','T','E','M','Z','A'];
		var arr2 = ['123','sf', 12, 12.1, null, true];
		var newArr = arr2.concat(arr1);
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = newArr;
	}
	function showArray17(){
		var arr = ['123','sf', 12, 12.1, 'null', true];
		var lable = document.getElementById('showArrLabel');
		lable.innerHTML = arr.join('-');
	}





/////////////////////////////////
/////////////////////////////////
//对象
	function showObject01(){
		var xiaoming={
			name:'小明',
			birth: 1990,
			school: 'No.1 Middle School',
   			height: 1.70,
   			weight: 65,
   			score: null
		}
		var label = document.getElementById('showObjectLabel');
		label.innerHTML = `基本信息：姓名${xiaoming.name}	出生日期${xiaoming.birth} 就读学校${xiaoming.school} 身高${xiaoming.height}`;
	}
	function showObject02(){
		var xiaoming={
			name:'小明',
			birth: 1990,
			school: 'No.1 Middle School',
   			height: 1.70,
   			weight: 65,
   			score: null
		}
		xiaoming.age = 22;
		var label = document.getElementById('showObjectLabel');
		label.innerHTML = `基本信息：姓名${xiaoming.name} 身高${xiaoming.height} 年龄${xiaoming.age}`;
	}
	function showObject03(){
		var xiaoming={
			name:'小明',
			birth: 1990,
			school: 'No.1 Middle School',
   			height: 1.70,
   			weight: 65,
   			score: null
		}
		delete xiaoming.school;	
		var label = document.getElementById('showObjectLabel');
		label.innerHTML = `基本信息：姓名${xiaoming.name}	出生日期${xiaoming.birth} 就读学校${xiaoming.school} 身高${xiaoming.height}`;
	}
	function showObject04(){
		var xiaoming={
			name:'小明',
			birth: 1990,
			school: 'No.1 Middle School',
   			height: 1.70,
   			weight: 65,
   			score: null
		}
		var retIn = 'toString' in xiaoming;
		var retHax = 'name' in xiaoming;
		var label = document.getElementById('showObjectLabel');
		label.innerHTML = `判断toString是否为当前模型中的元素：${retIn}  判断name是否为当前模型中的元素：${retHax}`;
	}





