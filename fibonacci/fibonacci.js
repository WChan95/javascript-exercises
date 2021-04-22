const fibonacci = function(x) {

    //let x = 8
    //fibbonacci Fn = Fn-1 + Fn - 2
    //n = 2, F2 = 1 + 1
    let f1 = 0;
    let f2 = 1;
    let fn;
    let n;

    if(x < 0){
        fn = "OOPS";
    }else{
        for(n = 0; n < x; n++){
            fn = f1 + f2;
            f2 = f1;
            f1 = fn;
        }
    }

    return fn;
}

module.exports = fibonacci
