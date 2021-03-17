const input = [3,2,4,4,3];

function groupBy(tab, key) {
    const map = new Map();
    tab.forEach((item) => {
        const k = key(item);
        const collection = map.get(k);
        if (!collection){
            map.set(k, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

const result = groupBy(input, n => n % 2 === 0);

console.log(result);