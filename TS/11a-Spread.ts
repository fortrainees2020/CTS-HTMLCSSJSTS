//========== Spread Operator==========================
/*The spread operator (...) allows an iterable (such as an array) to be expanded 
into individual elements. 
It can be used to copy arrays, concatenate arrays, or spread elements in function calls.  */

// Example 1: Copying an array
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [...arr1]; // Copying arr1 to arr2

console.log(arr2); // Output: [1, 2, 3]

// Example 2: Concatenating arrays
const arr3: number[] = [4, 5, 6];
const concatenatedArray: number[] = [...arr1, ...arr3]; // Concatenating arr1 and arr3

console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 3: Spreading elements in function calls
function add(a: number, b: number, c: number) {
    return a + b + c;
}

const numbers: [number, number, number] = [1, 2, 3]
const sum: number = add(...numbers); // Spread elements of the numbers array as arguments to the add function

console.log(sum); // Output: 6


