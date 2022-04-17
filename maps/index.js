const resultData = new Map();

resultData.set('average' , 1.53);
resultData.set('lastResult' , null);

const country = {name:'Germany' , population:82};

resultData.set('country',country);

resultData.set('average' ,2.3);

for(let element of resultData) {
    console.log(element);
}

console.log(resultData.get('average'));

console.log(resultData.get('country').name);

console.log(resultData.delete('country'));

console.log(resultData);

const myMap = new Map();

myMap.set('0','zero');
myMap.set('1','one');

for(const [key,value] of myMap) {
    console.log(key + ' = ' + value);
}

for(const key of myMap.keys()) {
    console.log(key);
}

for(const value of myMap.values()) {
    console.log(value);
}

for(const [key,value] of myMap.entries()) {
    console.log(key + ' = ' + value);
}

myMap.forEach((value,key) => {
    console.log(key + ' ' + value);
});