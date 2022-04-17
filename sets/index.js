const ids = new Set();

ids.add('jack');
ids.add(1);
ids.add('data');
ids.add({'key' : 'data-key'})
const object = {a:'NameA' , b:'NameB'};

ids.add(object);

console.log(ids.has('data'));

// for(const el of ids) {
//     console.log(el);
// }

for(let el of ids.keys()) {
    console.log(el);
}

for(let [key,value] of ids.entries()) {
    console.log('key => ' , key);
    console.log('value => ' , value);
}

ids.delete(1);

console.log(ids.size);

console.log(ids);

console.log(typeof(ids));

