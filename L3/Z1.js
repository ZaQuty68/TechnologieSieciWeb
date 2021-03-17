const array = [
    { 
      id: 'abc',
      name: 'Ala'
    },
    {
      id: 'def',
      name: 'Tomek'
    },
    {
      id: 'ghi',
      name: 'Jan'
    }
];

const newArray = {}

for (const element of array){
    newArray[element.id] = element;
}

console.log(newArray);