(function(modules){
    console.log(modules)
})([
    (function(module){
        console.log('Function index number => 1');
        return 1;
    }),
    (function(module){
        console.log('Function index number => 2');
        return 2;
    })
])
