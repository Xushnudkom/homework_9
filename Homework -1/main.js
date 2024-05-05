// 21-m  a  s  a  l  a 
// argument sifatida berilgan sonning tub son yoki tub emasligini aniqlaydigan function yarating

// function primeNumber (params){
//     let count = 0
//     for(let i = 0; i <= params; i++){
//         if(params % i  === 0){
//             count += 1
//         }
//     }
//     if(count == 2){
//         console.log("Tub");
//     }else{
//         console.log("Tub emas");
//     }
// }
// primeNumber(19)



// 22-m  a  s  a  l  a 
// // 2 sonining qandaydir darajasini bildiruvchi qandaydir n butun son berilgan (n > 0) berilgan n son 2 ning qanday k darajadaligini toping
// input: 8 , k = 3

// let input = 8;
// let num = input / 2;
// let count = 0;
// for (let i = 0; i <= num; i++) {
//     if (input > 0) {
//         count++;
//     }
//     input = input / 2;
// }
// console.log(count); 





// 23-m  a  s  a  l  a 
// // argument sifatida berilgan sonning mukammal yoki mukammal emasligini aniqlaydigan function yarating 
// mukamm son: 6, 28, ….. ⇒ mukammal son o’zidan boshqa bo’luvchilar yig’indisiga teng bo’lgan son\

// function perfectNumber(params) {
//     let count = 0
//     for(let i = 0; i < params; i++){
//         if(params % i === 0){
//             count += i
//         }
//     }
//     if (params == count ) {
//         console.log("Mukammal");
//     }
//     else{
//         console.log("Mukammal emas");
//     }
// }
// perfectNumberperfectNumber(13)



// 24-m  a  s  a  l  a 
// argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing
// function str(params) {
//     return Math.abs(params).toString().length;
// }
// console.log(str(2876));   
// console.log(str(7656));  
// console.log(str(-324));  




// 25-m  a  s  a  l  a 
// argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing

// function countA(str) {
//     let wordss = str.trim().split(/\s+/);
//     let count = 0;
//     for (let word of wordss) {
//         if (word.includes('a')) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countA("tatu"))




// 26-m  a  s  a  l  a 
// argument sifatida berilgan string da ya’ni sentence da lengthi eng kam bo’lgan so’zni qaytaradigan function ni tuzing
// function countWords(sentence) {
//     let words = sentence.trim().split(/\s+/);
//     let length = words[0];
//     for (let word of words) {
//         if (word.length < length.length) {
//             length = word;
//         }
//     }
//     return length;
// }

// console.log(countWords("Mening ismim Xushnud, sizniki-chi?")); 




// 27-m  a  s  a  l  a 
// berilgan argument ni nimaligini ayting agar son bo’lsa return “son” agar string bo’lsa “string” aks holda return 0 bo’lsin
// function getType(input) {
//     if (typeof input === 'number') {
//         return "son";
//     } else if (typeof input === 'string') {
//         return "string";
//     } else {
//         return 0;
//     }
// }
// console.log(getType(876)); 
// console.log(getType("salom")); 
// console.log(getType(true)); 



// 28-m  a  s  a  l  a 
// argument sifatida berilgan string ni teskari qiluvchi function tuzing
// function reversStr(str) {
//     let revers = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revers += str[i];
//     }
//     return revers;
// }

// let inputString = "hello";
// console.log(reversStr(inputString));



// 29-m  a  s  a  l  a 
// argument sifatida berilgan string da nechta son qatnashganligini aniqlaydigan function tuzing
// function countNumber(str) {
//     let count = 0;
//     for (let char of str) {
//         if (!isNaN(parseInt(char))) {
//             count++;
//         }
//     }
//     return count;
// }

// let inputString = "cvvf3434dfbdfgh56";
// console.log(countNumber(inputString)); 



// 30 - M  a  s  a  l  a
// function Numberarow(son) {
//     const arrow = son.toString().split('').reverse().join('');
//     const number = parseInt(arrow);
//     return number;
// }


// console.log(Numberarow(123))



