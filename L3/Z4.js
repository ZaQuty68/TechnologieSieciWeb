const defFun = function (fun,types){
    fun.typeConstr=types;
    return fun;
}

const myfun = defFun(
    (a,b) => 
        a + b,
        ['number','number']
);

const appFun = function(fun){
    const args = arguments;
    const types = fun.typeConstr;
}

try{
    console.log(appFun(myfun, 12, 15));
}
catch(e){
    console.log(e.typerr);
}