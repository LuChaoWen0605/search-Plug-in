var LazySingle = (function(){
    var _instance = null;
    function Single(){
        return {
            publicMethod : function(){},
            publicProperty : "1.0"
        }
    }
    
    return function(){
        if( !_instance ){
            _instance = Single();
        }
        return _instance;
    }
})

alert(LazySingle().publicProperty);
