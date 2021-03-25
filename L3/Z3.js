const input = [3,2,4,4,3];

const groupBy = input.reduce(([t, f], el) => 
    (el % 2 === 0 ? [[...t, el], f] : [t, [...f, el]]), [[], []])
    .map((x, index) => index === 0 ? 'true => ' + x : 'false => ' + x);

console.log(groupBy);