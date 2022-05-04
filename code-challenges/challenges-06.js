'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max = 0;
    //
    for (let m =0; m < arr.length; m++){
        let mx = arr[m];
        if (mx >= max) {max = mx};
    }
    //
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
// 


/*------------------------------------------------------------------------ 
const arr = [20, '234', 'car', 41, 20, 'chair'];
const sumNums = (arr)=>{
    let sum = 0;
for (let i = 0; i<= arr.length; i++) {
    let val = arr[i];
    if (Number.isNaN(val) == false) {sum += val} 
}

return sum;
}
--------------------------------------------------------*/
// const sumNums = (arr)=>{
//     let sum = 0;
//     for (let i = 0; i< arr.length; i++) {
//         if (Math.min(arr[i], arr[i]+1) == arr[i]){
//             sum = sum+arr[i]
//         }
//     }
// return sum;
// }
// -------------------------------------------------------------------------------------------------------
const sumNums = (arr)=>{
    const sum = arr.reduce( (sumSoFar, nextValue) => {
        if ( typeof nextValue === "number" && isFinite(nextValue) ) {
           return sumSoFar + nextValue;
        }
        //skip otherwise
        return sumSoFar;
     }, 0); //sum starting from zero
      
     return sum;
}

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

function reverseArray(arr) {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};