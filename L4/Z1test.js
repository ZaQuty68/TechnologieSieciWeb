const poKolei = (fun1, fun2, cb) => {
    fun1.then(values => fun2(values)).then(values => cb(values));
};

function f1(xtab){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(xtab.map(x => x * 2));
        }, 2000);
    });
}

function f2(xtab){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(xtab.map(x => x - 1));
        }, 1000);
    });
}

function callback(xtab){
    console.log(xtab.sort((a,b) => a - b));
};

const tab = [1,3,6,2,8,0];

poKolei(f1(tab), f2, callback);