(function(window){
    var byespekar={};
    var say="Good Bye";
    byespekar.saybye=function(name){
        console.log(say +" "+name);
    }
    window.byespekar=byespekar;
})(window);
