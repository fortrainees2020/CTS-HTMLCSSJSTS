/**In TypeScript, the Record type is a built-in utility type that allows you to create an object type 
 * whose property keys are of a specified type, and whose property values are also of a specified type. 
 * It is particularly useful when you want to define a type for objects with known keys and values. */
// Define a type for a record of string keys and number values
type NumberRecord = Record<string, number>;

// Create an object of type NumberRecord
const scores: NumberRecord = {
    math: 90,
    science: 85,
    english: 80
};
console.log(scores); // Output: { math: 90, science: 85, english: 80 }
