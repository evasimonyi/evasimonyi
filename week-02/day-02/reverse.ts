'use strict';
export {};

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed1 = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverseString1(reversed1) {
    return reversed1.split("").reverse().join("");
};
console.log(reverseString1(reversed1))