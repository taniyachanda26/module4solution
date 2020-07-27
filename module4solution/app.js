(function(){
    var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(i=0;i<names.length;i++)
    {
        var firstletter=names[i].charAt(0).toLowerCase();
        if(firstletter=="j")
        {
            byespekar.saybye(names[i]);
        }
        else{
            hellospekar.sayhello(names[i]);
        }
    }
})();