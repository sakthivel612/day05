// 1 . Do the below programs in anonymous function & IIFE
// a . Print odd numbers in an array
// anonymous function
// var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// var oddnumbers = function(){
//     for(i=0;i<array.length;i++){
//           if(array[i]%2!=0){
//              console.log(array[i])
//           } 
//      }
//   }
// oddnumbers();

// IIFE
// (function(array){
//     for(var i=0;i<array.length;i++){
//         if(array[i]%2!=0){
//             console.log(array[i])
//             } 
//         }
// })([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

// b . Convert all the strings to title caps in a string array
// anonymous
// var str = 'sakthivel';
// var caps = function(){
//     str = str.toLowerCase().split(' ');
//     for(i=0;i<str.length;i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//       console.log(str);
//     } 
//   }
// caps();

// IIFE
// (function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     console.log(str);
//   })("sakthi is my name");

//c.Sum of all numbers in an array 
//anonymous 
// var array = [1,2,3,4,5,6,7,8,9,10]
// var sum = function(){
//     var sum = 0;
//         for(var i = 0 ; i< array.length ; i++){
//              sum = sum + array[i];
//         }
//            console.log(sum);
//     }
// sum();

// IIFE
// (function(array){
//     var sum = 0;
//          for(var i = 0 ; i< array.length ; i++){
//             sum = sum + array[i];
//           }
//           console.log(sum);
//     })([1,2,3,4,5,6,7,8,9,10])

//d.Return all the prime numbers in an array
//Anonymous Function
// var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//  var primnumber =  function(){
//       numArray = numArray.filter((number) => {
//         for (var i = 2; i <= Math.sqrt(number); i++) {
//           if (number % i === 0) return false;
//         }
//         return true;
//       });
//       console.log(numArray);
//   }
// primnumber();

// IIFE  
// (function(numArray){
//      numArray = numArray.filter((number) => {
//        for(var i=2;i<=Math.sqrt(number);i++) {
//          if (number % i === 0) return false;
//        }
//        return true;
//      });
//      console.log(numArray);
//  })([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

// e. Return all the palindromes in an array
// Anonymous Function

// let str = 'racecar';
// let strReverse = str.split('').reverse().join('');
// var palindrome = function(){
//      for(i=0;i<str.length;i++){
//         if(str[i]==strReverse[i]){
//             console.log("The str is a palindrome "+ str);
//         }else{
//             console.log("The str is a not palindrome "+ str);
//         }
//      }
// }
// palindrome();

// IIFE
// (function(array){
//     var palnumber = array.split('').reverse().join('');
//     for(i=0;i<array.length;i++){
//         if(array[i]==palnumber[i]){
//             console.log("The array is a palindrome " + array);
//         }else{
//             console.log("The array is a not palindrome " + array);
//         }
//     }
// })('racecar')

// f. Return median of two sorted arrays of the same size.
// anonymous
// var array = [1,2,3,3,4,5,6,6];
// var sortedArr = function(){
//     var dup  = [...new Set(array)].sort();
//     console.log(dup.length);
// }
// sortedArr();

// IIFE
// (function(array){
//     var sortedArr = [...new Set(array)].sort();
//     console.log(sortedArr.length);
// })([1,2,3,3,4,5,6,6])

// g . Remove duplicates from an array
// anonymous
// var array = [1,2,3,3,4,5,6,6];
// var sortedArr = function(){
//     var dup  = [...new Set(array)].sort();
//     console.log(dup);
// }
// sortedArr();

// IIFE
// (function(array){
//     var sortedArr = [...new Set(array)].sort();
//     console.log(sortedArr);
// })([1,2,3,3,4,5,6,6])

// h . Rotate an array by k times
// anonymous
// var numarray = [1,2,3,4,5,6,7];
// var k = 3;
// var rotateArray = function(){
//     for (let i = 0; i < k; i++) {
//         numarray.unshift(numarray.pop());
//     }  
//     console.log(numarray);
//   }
// rotateArray();

// IIFE
// (function(array){
//     var rotateArray = array;
//     var k = 3;
//     for(i=0;i<k;i++){
//         rotateArray.unshift(array.pop());
//     }
//     console.log(rotateArray);
// })([1,2,3,4,5,6,7])

// 2 . Do the below programs in arrow functions.
// a .Print odd numbers in an array

// arrow function
// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// var oddnumbers = numbers.filter(Array=>Array % 2)
// console.log(oddnumbers);

// b .Convert all the strings to title caps in a string array
// arrow function
// var str = 'sakthivel';
// titleCase = () => {str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     console.log(str.join(' '));
//   }    
// titleCase();

// c .Sum of all numbers in an array
// arrow function
// var array = [1,2,3,4,5,6,7,8,9,10];
// sum = ()=>{ sum = 0;for(var i = 0 ; i< array.length ; i++){
//         sum = sum + array[i];
//     }
//     console.log(sum);
// }
// sum();

// d . Return all the prime numbers in an array
// arrow function
// var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// primeNumber = () => {numArray = numArray.filter((number) => {
//       for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//       }
//       return true;
//     });
//     console.log(numArray);
// }
// primeNumber();

// e .Return all the palindromes in an array
// let str = 'racecar';
// let strReverse = str.split('').reverse().join('');
// palindrome = () => {for(i=0;i<str.length;i++){
//         if(str[i]==strReverse[i]){
//             console.log("The str is a palindrome "+ str);
//         }else{
//             console.log("The str is a not palindrome "+ str);
//         }
//      }
// }
// palindrome();


