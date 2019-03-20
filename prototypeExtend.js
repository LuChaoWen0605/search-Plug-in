function prototypeExtend(){
    var F = function(){},
    args = arguments,
    i = 0,
    len = args.length;
    for(; i < len ; i++){
        for(var j in args[i]){
            F.prototype[j] = arg[i][j];
        }
    }
    return new F();
}

var penguin = prototypeExtend(
    {
      speed :20,
      swim:function(){
        alert(this.speed);
      }
    },
    {
      run : function(s){
        alert(s);
      }
    }
);
penguin.swim();
penguin.run(10);
