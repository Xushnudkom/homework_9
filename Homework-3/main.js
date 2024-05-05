// 40 - M  a  s  a  l  a
// function findMiddleNum(arr) {
//     let middleNumber;
//     if (arr.length % 2 === 0) {
//        let middleIndex = arr.length / 2 - 1;
//         middleNumber = (arr[middleIndex] + arr[middleIndex + 1]) / 2;
//     } else {
        
//         let middleIndex = Math.floor(arr.length / 2);
//         middleNumber = arr[middleIndex];
//     }
//     return middleNumber;
// }

// let arr1 = [1, 2, 3, 4, 5];
// let middleNumber1 = findMiddleNum(arr1);
// console.log("Input arr =", arr1, "middleNumber =", middleNumber1);

// let arr2 = [1, 2, 3, 4];
// let middleNumber2 = findMiddleNum(arr2);
// console.log("Input arr =", arr2, "middleNumber =", middleNumber2);



// 42 - M  a  s  a  l  a
// function howNUmObject(arr) {
//     let result = {};
//     arr.forEach(function(item) {
//         result[item] = item.length;
//     });
//     return result;
// }

// console.log(howNUmObject(["xushnud", "abc", "O`zbekiston" ]));




// 43 - M  a  s  a  l  a
// function findNUm(obj, n) {
//     let result = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result[key] = obj[key] * n;
//         }
//     }
//     return result;
// }

// const n = 3;
// console.log(findNUm({a: 2, b: 3, c: 4}, n));



// 44 - M  a  s  a  l  a
// function getLevel(n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(Math.pow(2, i + 1));
//     }
//     return result;
// }

// console.log(getLevel(4));
// console.log(getLevel(5)); 



// 45 - M  a  s  a  l  a
// function findtStrs(arr) {
//     let result = {}
//     arr.forEach(function(item) {
//         if (result[item]) {
//             result[item]++
//         } else {
//             result[item] = 1
//         }
//     })
//     return result
// }

// console.log(findtStrs(['xushnud', 'abc', 'dars', 'xushnud', 'dars', 'abc', 'maktab', "xushnud"]))



// 46 - M  a  s  a  l  a
// function numberdouble(arr) {
//     return arr.map(function(item) {
//         return item * item;
//     });
// }

// console.log(numberdouble([1,2,3,4,5]));




// 47 - M  a  s  a  l  a
// const input = [1, -4, 12, 0, -3, 29, -150]
// const numbers = input.filter(function(num) {
//     return num > 0
// })

// const findNUm = numbers.reduce(function(acc, curr) {
//     return acc + curr
// }, 0)

// console.log(findNUm)




// 48 - M  a  s  a  l  a
// function stringFind(str){
//     return str.split(" ").map((items) => {
//         return items[0]
//     }).join("")
// }

// console.log(stringFind("sadsad sdasd"))




// 50 - M  a  s  a  l  a
// let singleNumber = function(nums) {
//     let result = []
//     nums.forEach(function(num) {
//         if (nums.indexOf(num) === nums.lastIndexOf(num)) {
//             result.push(num)
//         }
//     })
//     return result
// }

// console.log(singleNumber([4, 1, 2, 1, 2, 9, true]));















