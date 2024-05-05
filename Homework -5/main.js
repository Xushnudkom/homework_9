// 60 - M  a  s  a  l  a
// var searchMatrix = function(matrix, target) {};
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// var searchMatrix = function(matrix, target) {
//     if (matrix.length === 0 || matrix[0].length === 0) {
//         return false
//     }
//     let row = 0
//     let col = matrix[0].length - 1
//     while (row < matrix.length && col >= 0) {
//         if (matrix[row][col] === target) {
//             return true
//         } else if (matrix[row][col] < target) {
//             row++
//         } else {
//             col--
//         }
//     }    
//     return false
// }

// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))



// 61 - M  a  s  a  l  a
// djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest
// "Najot ta'lim is the best" yozuvini hosil qiling


// 62 - M  a  s  a  l  a


// 63 - M  a  s  a  l  a
// sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping.

// function findLastWordLength(str) {
    
//     str = str.trim()
//     let lastword = str.lastIndexOf(' ')
//     if (lastword === -1) {     
//         return str.length
//     } else {
        
//         return str.length - lastword - 1
//     }
// }

// console.log(findLastWordLength("Mening ismim Xushnud"))





// 64 - M  a  s  a  l  a
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Input: p = [1,2,1], q = [1,1,2]
// Output: false
// berilgan array lar index ma index bir biriga teng bo'lsa true bo'lmasa false
// chirishi kerak

// function equalityarrays(p, q) {
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





// 65 - M  a  s  a  l  a
// Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. (Object.entries, map, join)
// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']

// function objectToString(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value)
// }

// console.log(objectToString({a: 2, b: 5, c: 7}))






// 66 - M  a  s  a  l  a
// var findmiddlenum = function(nums1, nums2) {
//     let middleArray = nums1.concat(nums2).sort((a, b) => a - b)
//     let n = middleArray.length

//     if (n % 2 === 0) {
//         let mid1 = middleArray[n / 2 - 1]   
//         let mid2 = middleArray[n / 2]
//         return (mid1 + mid2) / 2
//     } else {
//         return middleArray[Math.floor(n / 2)]
//     }
// }


// console.log(findmiddlenum(nums1 = [1, 2], nums2 = [3, 4]))





// 67 - M  a  s  a  l  a
// function translateDubNUm(arr) {
//     let new_arr = []
//     let duplicnum = []

//     arr.forEach(item => {
//         if (!new_arr.includes(item)) {
//             new_arr.push(item)
//         } else {
//             duplicnum.push(item)
//         }
//     });

//     return duplicnum
// }

// console.log(translateDubNUm([1, 2, 3, 4, 1, 2, 5, 6, 3]))






















