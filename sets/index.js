// const ids = new Set();

// ids.add('jack');
// ids.add(1);
// ids.add('data');
// ids.add({'key' : 'data-key'})
// const object = {a:'NameA' , b:'NameB'};

// ids.add(object);

// console.log(ids.has('data'));

// // for(const el of ids) {
// //     console.log(el);
// // }

// for(let el of ids.keys()) {
//     console.log(el);
// }

// for(let [key,value] of ids.entries()) {
//     console.log('key => ' , key);
//     console.log('value => ' , value);
// }

// ids.delete(1);

// console.log(ids.size);

// console.log(ids);

// console.log(typeof(ids));

//iterating sets
// const mySet1 = new Set()

// mySet1.add(1);           // Set [ 1 ]
// mySet1.add(5);           // Set [ 1, 5 ]
// mySet1.add(5);           // Set [ 1, 5 ]
// mySet1.add('some text'); // Set [ 1, 5, 'some text' ]
// const o = {a: 1, b: 2};
// mySet1.add(o);

// for(let item of mySet1) {
//     console.log(item);
// }

// for(let item of mySet1.keys()) {
//     console.log(item);
// }

// for(let [key,value] of mySet1.entries()) {
//     console.log(key,value);
// }
// //convert set object to an array object using Array.from method
// const myArr = Array.from(mySet1);

// console.log(myArr);

// //converting between Set and Array
// const mySet2 = new Set([1,2,3,4,4]);

// const newArr = [...mySet2];

// const myDupArrayEl = [1,2,3,3,4,4,5,6,6,1];

// //intersect can be simulated via
// const intersection = new Set([...mySet1].filter(x => mySet2.has(x)));

// console.log('intersection' , intersection);

// //Difference can be simulated via 
// const difference = new Set([...mySet1].filter(x => !mySet2.has(x)));
// console.log('difference' , difference);

// mySet1.forEach((value) => {
//     console.log(value);
// });

const setA = new Set([1,2,3,4]);
const setB = new Set([2,3]);
const setC = new Set([3,4,5,6]);

const isSuperSet = (set,subset) => {
    for(let element of subset) {
        if(!set.has(element)) {
            return false;
        }
    }
    return true;
}

const union = (setA,setB) => {
    let = _union = new Set(setA);
    for(let element of setB) {
        _union.add(element);
    }
    return _union;
}

const intersection = (setA,setB) => {
    let _intersection = new Set();
    for(let element of setB) {
        if(setA.has(element)) {
            _intersection.add(element);
        }
    }
    return _intersection;
}

const symmetricDifference = () => {
    let _difference = new Set(setA);
    for(let element of setB) {
        if(_difference.has(element)) {
            _difference.delete(element);
        } else {
            _difference.add(element);
        }
    }
    return _difference;
}

const difference = (setA,setB) => {
    let difference = new Set(setA);
    for(let element of setB) {
        difference.delete(element);
    }
    return difference;
}

console.log(isSuperSet(setA,setB));

console.log(union(setA,setC));

console.log(intersection(setA,setC));

console.log(symmetricDifference(setA,setB));

console.log(difference(setA,setC));