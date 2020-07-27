(function(window){
    var hellospekar={};
    var say=Hello;
    hellospekar.sayhello=function(name){
        console.log(say +" "+name);
    }
    window.hellospekar=hellospekar;
})(window);