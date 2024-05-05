// 51 - M  a  s  a  l  a
// // array ichidagi o’rtadagi sonni topadigan function tuzing 
// Input: arr = [1,2,3,4,5] middleNumber = 3
// Input arr = [1,2,3,4] middleNumber = 2.5 o’rtadagi 2 ta sonning o’rta arifmetigi

// function findMiddleNumber(arr) {
//     if (arr.length % 2 === 0) {
//         let midIndex = arr.length / 2 - 1
//         let middleNumber = (arr[midIndex] + arr[midIndex + 1]) / 2
//         return middleNumber
//     } else {
//         let midIndex = Math.floor(arr.length / 2)
//         let middleNumber = arr[midIndex]
//         return middleNumber
//     }
// }

// let arr1 = [1, 2, 3, 4, 5]
// let middleNumber1 = findMiddleNumber(arr1)
// console.log("Input arr1 =", arr1, "middleNumber =", middleNumber1)

// let arr2 = [1, 2, 3, 4]
// let middleNumber2 = findMiddleNumber(arr2)
// console.log("Input arr2 =", arr2, "middleNumber =", middleNumber2)




// 52 - M  a  s  a  l  a
// Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
//     ];

// let products = [
//     {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ]

// let deleteproduct = products.filter(product => product.id !== 4)

// console.log(deleteproduct)




// 53 - M  a  s  a  l  a
// Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring 

// function findStr(str) {
//     for (let i = 0; i < str.length; i++) {
        
//       if (!(/[A-Za-z]/).test(str[i])) {
//             return false;
//         }
//     }
    
//     return true
// }

// console.log(findStr("Xushnud"))
// console.log(findStr("Xushnud12"))





// 54 - M  a  s  a  l  a
// Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let obj = {}
// animals.forEach( item=> {
//     if(obj[item]){
//         obj[item]++
//     }else{
//         obj[item] = 1
//     }
// } )
// console.log(obj)





// 55 - M  a  s  a  l  a
// String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map)
// Input: "Hello world"
// Outpu: [3, 9, 12]


// function numWords(str) {
//     return str.split(' ').map(word => word.length)
// }

// console.log(numWords("Xushnud Komilov"))




// 56 - M  a  s  a  l  a
// Stringni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)

// function deleteSpace(str) {
//     return str.split(' ').length > 1
// }

// console.log(deleteSpace("Xushnud Komilov"))
// console.log(deleteSpace("Xushnud"))




