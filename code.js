/**
 * 小型代码库
 * **/
const CqbTool = CqbTool || {};
CqbTool.g = function(id){

  let _identifier = id.substr(0,1),
      _id = id.substr(1,id.length-1);
  switch ( _identifier ) {
    case "." :
      return document.getElementsByClassName(_id);
      break;
    case "#" :
      return document.getElementById(_id);
  }

};
CqbTool.css = function(id , key , value){
  let args = arguments;
  if(args.length == 3){
    typeof id === 'string' ? this.g(id).style[key] = value : id.style[key] = value;
  }else {

  }
  return this;

};
CqbTool.on = function( id ,type ,fn ){

  let dom = typeof id === 'string' ? this.g(id) : id;

  if(dom.addEventListener){

    dom.addEventListener(type,fn,false);

  }else if( dom.attachEvent ){

    dom.attachEvent('on' + type ,fn);

  }else{

    dom[ 'on' + type ] = fn;

  }
  return this;

};
CqbTool.CElement = function( ele, param ){
  let _el = document.createElement(ele);
  if (param && param.className) {
    _el.className = param.className;
  }
  if (param && param.text) {
    _el.textContent = param.text;
  }
  return _el;
};
CqbTool.dom = function(txt){
  /*字符串转dom对象*/
  let xmlDoc = "";
    try //Internet Explorer
    {
      xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async="false";
      xmlDoc.loadXML(txt);
      //alert('IE');
      return(xmlDoc);
    }
    catch(e)
    {
      try //Firefox, Mozilla, Opera, etc.
      {
        let _parser = new DOMParser();
        xmlDoc = _parser.parseFromString(txt,"text/xml");
        //alert('FMO');
        return(xmlDoc);
      }
      catch(e) {alert(e.message)}
    }
    return(null);
}
/**
 * ajax
 * **/
CqbTool.ajax = function(obj){
  //创建xhr对象;
  if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
    obj.xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {// code for IE6, IE5
    obj.xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  //后面随机数防止浏览器缓存
  obj.url = url + "?rand=" + Math.random();
  //序列化对象
  obj.data = params(obj.data);
  //当是get请求时
  if (obj.method = 'get') {
    //当前面没设置随机数时
    obj.url += obj.url.indexOf('?') == -1 ? '?' +obj.data : '&' + obj.data;
  }
  //异步调用
  if (obj.async == true) {
    //监听响应状态
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        callback();
      }
    };
  }
  //启动HTTP请求
  xhr.open(obj.method, obj.url, obj.aysnc);
  //当是post请求时
  if(obj.method === 'post') {
    //模仿表单提交
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //发送HTTP请求-post
    xhr.send(obj.data);
  } else {
    //发送HTTP请求-get
    xhr.send(null);
  }
  //同步调用
  if (obj.async == false) {
    callback();
  }
  //回调函数传参
  function callback() {
    if (xhr.atatus == 200) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.status);
    }
    obj.complete();
  }
}
/**
 * ajax({
        method: 'get',
        url: 'demo3.php',
        async : true,
        data: {
          'name' = 'Lee',
          'age' = 100
        },
        success: function(text) {
          alert(text);
        },
        error: function(){

        }

      });
 * **/

//vue
export { CqbTool };
