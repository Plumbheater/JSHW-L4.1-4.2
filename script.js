"use strict";

// Task # 1

function compareArrays(arr1, arr2) {
    return arr1.every((element, index) => arr1.length === arr2.length && element === arr2[index]);
};

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

// Task # 2

function advancedFilter(arr) {
    return arr.filter((element) => element > 0 && element % 3 === 0).map(x => x*10);
};


console.log(advancedFilter([-1,6,-9,3])); // [60,30]
console.log(advancedFilter([-10,-21,12,123])); // [120, 1230]
console.log(advancedFilter([-1,-2])); // []