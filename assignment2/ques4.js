// 4. Function to sum the products of corresponding digits of two numbers
function sumProductsOfDigits(n1, n2) {
    let sum = 0;
    let num1 = n1.toString();
    let num2 = n2.toString();
    
    for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
        let digit1 = i < num1.length ? parseInt(num1[i]) : 0;
        let digit2 = i < num2.length ? parseInt(num2[i]) : 0;
        sum += digit1 * digit2;
    }
    
    return sum;
}

// Example usage:
console.log(sumProductsOfDigits(6, 34));    // Output: 24 (6*4 + 0*3)
console.log(sumProductsOfDigits(123, 45));  // Output: 20 (1*4 + 2*5 + 3*0)
