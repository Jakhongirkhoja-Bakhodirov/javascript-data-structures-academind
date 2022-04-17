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

//Relation with Array objects

const kvArray = [['key1' , 'value1'],['key2','value2']];

//Use the regular Map contructor to transform a 2D key-value Array into a Map
const myMapConvert = new Map(kvArray);
console.log(myMapConvert);

//Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMapConvert));

//A succinct way to do the same,using the spread syntax
console.log([...myMapConvert]);

//Or use the keys() or values() iterators,and convert them to an array
console.log(Array.from(myMap.values()));
console.log(Array.from(myMap.keys()));

//Cloning and merging Maps
const original = new Map([
    [1, 'one']
  ])

const clone = new Map(original)

console.log(clone.get(1))       // one
console.log(original === clone) // false (useful for shallow comparison)

const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  const second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  
  // Merge two maps. The last repeated key wins.
  // Spread operator essentially converts a Map to an Array
  const merged = new Map([...first, ...second])
  
  console.log(merged.get(1)) // uno
  console.log(merged.get(2)) // dos
  console.log(merged.get(3)) // three

  const firstMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  const secondMap = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  
  // Merge maps with an array. The last repeated key wins.
  const mergedMap = new Map([...firstMap, ...secondMap, [1, 'eins']])
  
  console.log(mergedMap.get(1)) // eins
  console.log(mergedMap.get(2)) // dos
  console.log(mergedMap.get(3)) // three