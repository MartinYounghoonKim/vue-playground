(function(modules){
    var modulesArray = {};

    function callback (id) {
        var module = modulesArray[id] = {
            i: id,
            l: false,
            exports: {}
        }
        modules[id].call(module.exports, module, callback);
        return module.exports;
    }
    return callback(id = 0);
})([
    (function(module, callback){
        console.log('Function index number => 1');
        callback(1);
        return 1;
    }),
    (function(module, callback){
        console.log('Function index number => 2');
        callback(2);
        return 2;
    }),
    (function(module, callback){
        console.log('Function index number => 3');
        return 3;
    })
])
