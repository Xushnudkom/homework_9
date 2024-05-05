// 68 - M  a  s  a  l  a
// Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// Input: [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// Output: {truthy: [1, 10, "sultonqul", 1.13], falsy: [false, "", null, 0]}

// function sortInfo(arr) {
//     return arr.reduce((acc, el) => {
//         if (el) {
//             acc.truthy.push(el)
//         } else {
//             acc.falsy.push(el)
//         }
//         return acc
//     }, { truthy: [], falsy: [] })
// }


// console.log(sortInfo([false, 1, 10, "", null, "sultonqul", 1.13, 0]))




// 69 - M  a  s  a  l  a
// Array.prototype.sum = function() {
//     return this.reduce((acc, el) => acc + el, 0);
// };

// const numbers = [2,3,4,5]
// console.log(numbers.sum())




// 70 - M  a  s  a  l  a
// String.prototype.countwords = function() {
//     let vowels = ["a", "e", "i", "o", "u"];
   
//     let str = this.toLowerCase();

//     let count = 0;
   
//     for (let i = 0; i < str.length; i++) {

//       if (vowels.indexOf(str[i]) !== -1) {
//         count++;
//       }
//     }
//     return count;
//   }
//    let testString = "Salom, Xushnud"
//   console.log(testString.countwords())



// 71 - M  a  s  a  l  a
// String.prototype.wordlength = function() {
//    return this.length
//   }

//   let result = "O`zbekiston"
//   console.log(result.wordlength())






// 73 - M  a  s  a  l  a

// function numbersArr(params , target){
//     let a = params
//     let new_arr = []
// for (let i = 0; i < a.length; i++){
//     if(a[i] !== target){
//         new_arr.push(a[i])
//     }

// }
// console.log(new_arr)
// }
// numbersArr([1, 2, 6, 3, 4, 5, 6], 6)




// 75 - M  a  s  a  l  a

// // function equalityarrays(p, q) {
//     if (p.length !== q.length) {
//         return false
//     }
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] !== q[i]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(equalityarrays(p1 = [1, 2, 3], q1 = [1, 2, 3]))
// console.log(equalityarrays(p2 = [1, 2], q2 = [1, null, 2]))
// console.log(equalityarrays(p3 = [1, 2, 1], q3 = [1, 1, 2]))

  
  








