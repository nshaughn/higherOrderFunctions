// Activity 1 - Write a simple function that logs ‘Hello Codenation" to the console. Then write a higher-order function which will run 
//the simple function five times, even though you only call it once. 
//Hint: Pass the simple function as a parameter, which will involve a For loop.

const simple = () => {
    console.log('Hello Codenation');
};
//simple()

const five = (runFive) => {
    for(i = 0; i < 5; i++) {
        runFive()
    }
};

five(simple);


// Activity 2 - The array method .map is an example of a higher-order function.
// Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3. 

const myArray = [1, 5, 20, 40, 50];

const myMap = myArray.map(x => x * 3);

console.log(myMap);


// Activity 3 - Test this function to ensure it works by passing a number to the doMaths function.
// Then passing a number and one of the four maths functions to the returned function.

const add = (a, b) => {
    return a + b;
   };
   const subtract = (a, b) => {
    return a - b;
   };
   const multiply = (a, b) => {
    return a * b;
   };
   const divide = (a, b) => {
    return a / b;
   };
   const doMaths = (num1) => {
    return (num2, fn) => {
    return fn(num1, num2);
    };
   };

   console.log(doMaths(10)(10, add))


