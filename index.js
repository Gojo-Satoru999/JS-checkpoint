// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Array Functions

// Find Maximum and Minimum
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

// Mathematical Functions

// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fibonacci Sequence
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Test the functions
console.log(reverseString("hello")); // Output: "olleh"
console.log(countCharacters("hello")); // Output: 5
console.log(capitalizeWords("hello world")); // Output: "Hello World"

let numbers = [1, 2, 3, 4, 5];
console.log(findMaximum(numbers)); // Output: 5
console.log(findMinimum(numbers)); // Output: 1
console.log(sumArray(numbers)); // Output: 15

let filteredNumbers = filterArray(numbers, num => num > 3);
console.log(filteredNumbers); // Output: [4, 5]

console.log(factorial(5)); // Output: 120
console.log(isPrime(7)); // Output: true
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
