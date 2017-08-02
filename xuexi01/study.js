


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





	/////////////////////////////////
	/////////////////////////////////
	//函数
	function showHanshu01(){
		var s = jisuanmianji(3,5);
		var label = document.getElementById('hanshuLabel');
		label.innerHTML = `面积=${s}`;
	}
	function jisuanmianji(x,y){
		return x*y;
	}
	function showHanshu02() {
		foo(34,4,12,5);
	}
	function foo(a, b) {
	var i, rest = [];
    if (arguments.length > 2) {
    	for (i = 2; i<arguments.length; i++) {
           	rest.push(arguments[i]);
        	}
    	}
    	var label = document.getElementById('hanshuLabel');
		label.innerHTML = `a=${a}, b=${b}, ${rest}`;
	}
	function showHanshu03() {
		foo1(12,4,62,15,0);
	}
	function foo1(a, b, ...rest) {
		var label = document.getElementById('hanshuLabel');
		label.innerHTML = `a=${a}, b=${b}, ${rest}`;
	}

		///高阶函数实例
		function gaojieHS01() {
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = showMathABS(-5,8,Math.abs);
			// label.innerHTML = 'hello world';
		}
		function showMathABS(x,y,f){
			return f(x)+f(y);
		}
		///map实例
		function gaojieHS02() {
			var arr = [1,2,3,4,5,6,7,8,9];
			var newarr = arr.map(sex);
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = newarr;
			function sex(x){
				return x*x;
			}
		}
		//reduce实例
		function gaojieHS03() {
			//这个函数必须接收两个参数
			//效果为累计计算一类
			var nums = [1,2,4,5,8,9,13];
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = nums.reduce(sex);
			function sex(x,y){
				return x+y;
			}
		}

		//练习题
		function gaojieHS04() {
			var nums = [1,2,3,4,5];
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = nums.reduce(function (x,y){return x*y});
		}
		function gaojieHS05() {
			var nums = [1, 3, 5, 7, 9];
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = nums.reduce(function (x,y){return x*10+y});
		}
		function gaojieHS06() {
			var num = 13579;
			var arr = [];
			while(num>=1){
				arr.push(Math.floor(num%10));
				num = num/10;
			}
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = arr.reverse();
		}
		function gaojieHS07() {
			var nums = ['1','2','3'];
			var label = document.getElementById('hanshuGJLabel');
			// label.innerHTML = nums.map(function (x,y){return `'${x}'+'${y}'`;});
			label.innerHTML = nums.map(Number);
		}
		function gaojieHS08() {
			//筛选[1,2,3,4,5,6,7,8,9]中能被2整除的
			var nums = [1,2,3,4,5,6,7,8,9,10];
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = nums.filter(function (x){return x%2==0;})
		}
		function gaojieHS09() {
			var arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = arr.filter(function (element, index, self){return self.indexOf(element)==index;});
		}

		//sort的使用
		function gaojieHS10() {
			var nums = [1,10,2,20];
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = nums.sort(function (x,y){if(x<y){return -1;}else if(x>y){return 1;}else{return 0;}})
		}
		function gaojieHS11() {
			var arr = ['Google', 'apple', 'Microsoft'];
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = arr.sort(function (x,y) {
				var x1 = x.toUpperCase();
				var x2 = y.toUpperCase();
				if (x1<x2) {return -1;}
				else if(x1>x2) {return 1;}
				else {return 0;}
			})
		}

		//闭包
		function gaojieHS12() {
			function kaifang(n) {
				return function (x) {
					return Math.pow(x, n);	
				}
			}
			var pow1 = kaifang(3);
			var pow2 = kaifang(2);
			var label = document.getElementById('hanshuGJLabel');
			label.innerHTML = `2^3=${pow1(2)}, 3^2=${pow2(3)}`;
		}





