"use strict"

/*
    In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

    Example
    filter_list([1,2,'a','b']) == [1,2]
    filter_list([1,'a','b',0,15]) == [1,0,15]
    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

// let arr = [1, 2, 0, 'aasf', '1', '123', 123];


// function filterList(arr) {

//     return arr.filter(function(item) {
//         if (typeof(item) === "number") {

//             return true;
//         };
//     });
// };





/*
    Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

    [Make sure you type the exact thing I wrote or the program may not execute properly]
*/

// function greet(name){
//     return "Hello, ${name} how are you doing today?"
// };





/*
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

/*
    Best solution was:

    function removeExclamationMarks(s) {
        return s.replace(/!/g, '');
    }
*/

// function removeExclamationMarks(s) {
//     return s.split("").filter(item => {return item !== "!"}).join("");
// }





/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

    Solutions:
        function findShort(s){
            return Math.min.apply(null, s.split(' ').map(w => w.length));
        }

        function findShort(s){
            return Math.min(...s.split(" ").map (s => s.length));
        }
*/

// function findShort(s){
//     let arr = s.split(" ")
//                 .map((item) => item.length)
//                 .sort((a, b) => a - b);
    
//     return arr[0];
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));





/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// function descendingOrder(n) {
//     return +String(n).split("").sort((a, b) => b - a).join("");
// }

// console.log(descendingOrder(1023456789));





/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// let uniqueInOrder = function(iterable) {
//     let arr = Array.from(iterable);
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== newArr[newArr.length - 1]) {
//             newArr.push(arr[i])
//         }
//     }

//     return newArr
// }

// function uniqueInOrder(iterable) {
//     let arr = [];

//     for (let i = 0; i < iterable.length; i++) {
//         if (arr[arr.length - 1] !== iterable[i]) {
//             arr.push(iterable[i])
//         }
//     }

//     return arr;
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder([1,2,2,3,3]));





/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
    let arr = x.split(" ");
    let scores = arr.map(function(item) {
        return item.split("").reduce(function(prVal, item) {
            for (let i = 0; i < item.length; i++) {
                return prVal += item[i].charCodeAt() - 96;
            }
        }, 0)
    });

    let biggest = function(arr) {
        return Math.max.apply(null, arr)
    };

    let indexOfWord = scores.indexOf(biggest(scores));

    return arr[indexOfWord];
}


console.log(high("a b"));
console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
