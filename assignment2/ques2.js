// 2. Calculator function with switch
function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
}

// Example usage:
console.log(calculate('add', 5, 3));       // Output: 8
console.log(calculate('subtract', 10, 4)); // Output: 6
console.log(calculate('multiply', 7, 2));  // Output: 14
console.log(calculate('divide', 15, 5));   // Output: 3
