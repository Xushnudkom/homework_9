// 31 - M  a  s  a  l  a

//  function arrlength(arr) {
//      let obj = {}
//      for (let i = 0; i < arr.length; i++) {
//        obj[arr[i]] = arr[i].length
//      }
//      return obj
//    }

//    let input = ["xushnud", "kitob", "dars"];
//    let output = arrlength(input);
//    console.log(output)

// 32 - M  a  s  a  l  a

// function findWords(sentence) {
//     let words = sentence.split(" ");
//     let minWord = words[0]
//     let maxWord = words[0]
  
//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length < minWord.length) {
//         minWord = words[i];
//       }
//       if (words[i].length > maxWord.length) {
//         maxWord = words[i];
//       }
//     }
  
//     return { minWord: minWord, maxWord: maxWord };
//   }
  
  
//   let output = findWords("Mening ismim Xushnud");
//   console.log(output)
  
// 33 - M  a  s  a  l  a

// function getLevel(n) {
//     let new_arr = [];
//     for (let i = 1; i <= n; i++) {
//       new_arr.push(Math.pow(2, i));
//     }
//     return new_arr;
//   }

//   console.log(getLevel(4)); 
//   console.log(getLevel(5)); 


// 34 - M  a  s  a  l  a

// function ShortWords(sentence) {
//     const word = sentence.split(" ");
//         let shortestWord = word[0];
    
//     for (let i = 1; i < word.length; i++) {
//         if (word[i].length < shortestWord.length) {
//             shortestWord = word[i]
//         }
//     }
    
//     return shortestWord
// }

// const testSentence = "Bugun negadur havo yomon"
// console.log(ShortWords(testSentence))


// 35 - M  a  s  a  l  a

// function FindNumber(obj, n) {
//     const new_obj = {};
    
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             new_obj[key] = obj[key] * n;
//         }
//     }
    
//     return new_obj;
// }

// const obj = {a: 2, b: 3, c: 4};
// const n = 3;

// const new_obj = FindNumber(obj, n);
// console.log(new_obj); 

// 36 - M  a  s  a  l  a

// function HowNUmbers(str) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//          if (!isNaN(parseInt(str[i]))) {
//             count++
//         }
//     }
//     return count
// }

// const str = "Man 2 yil oldin 18 da edim, xozir 20 daman"
// console.log(HowNUmbers(str))


// 38 - M  a  s  a  l  a

// function FindA(str) {
//     let arr = str.split(" ").filter(item => item !== "")
//     let count = 0
//     arr.forEach(item => {
//         if(item.includes("a")){
//             count++
//         }
//     })
//     console.log(count)
// }
// FindA("Bizda juda ham kuchli jamoa bor")


// 39 - M  a  s  a  l  a

// function NumberPow(n, k) {
  
//     const pow = Math.pow(2, k)
  
//     const result = n / pow

//     console.log(`Berilgan sonning 2 ning ${k}-darajasi bo'yicha natijasi: ${result}`);
// }

// NumberPow(8, 3)