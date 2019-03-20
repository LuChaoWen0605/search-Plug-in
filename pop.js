function createPop(type,text){
    var o = new Object();
    o.content = text;
    o.show = function(){
        //显示方法
    };
    switch(type){
        case 'alert':
          //警示框
          break;
        case 'prompt':
          //提示框
          break;
        case 'confirm':
          //确认框
          break;
    }
    return o;
}
