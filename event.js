//获取事件对象
var getEvent = function(event){
	return event || window.event //标准返回event IE 返回 window.event
}
//获取元素
var getTarget = function(event){
	var event = getEvent(event);
	
	return event.target || event.srcElement;
}
//阻止默认行为
var preventDefault = function(event){
	var event = getEvent(event);
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
}

//外观者模式实现
function addEvent(dom,type,fn){
	if(dom.addEventListener){
		dom.addEventListener(type,fn,false);
	}else if(dom.attachEvent){
		dom.attachEvent('on'+type,fn);
	}else{
		dom['on' + type] = fn;
	}
}
//var a = document.getElementById("a");
//addEvent(a,'click',function(){})

//小型代码库
var A = {
	g : function(id){
		return document.getElementById(id);
	},
	css : function(id , key , value){
		document.getElementById(id).style[key] = value;
	},
	//设置元素属性
	attr : function(id , key , value){
		document.getElementById(id)[key] = value;
	}
}

//适配器模式
//引入JQ
window.A = A = jQuery;

//定义框架
var A = A || {};
A.g = function(id){
	return document.getElementById(id);
};
A.on = function(id,type,fn){
	var dom = typeof id === 'string' ? this.g(id) : id;
	if(dom.addEventListener){
		dom.addEventListener(type,fn,false);
	}else if(dom.attachEvent){
		dom.attachEvent('on'+type,fn);
	}else{
		dom['on' + type] = fn;
	}
}
