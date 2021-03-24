const razemTab = (funTab, cb) => {
    Promise.all(funTab).then(values => cb(values));
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

function f3(xtab){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(xtab.map(x => Math.sqrt(x)));
        }, 3000);
    });
}

function callback(xtab){
    console.log(xtab.map((ytab, index) => `function ${index + 1}: ${ytab.sort((a,b) => a - b)}`));
};

const tab = [1,3,6,2,8,0];

razemTab([f1(tab), f2(tab), f3(tab)], callback);