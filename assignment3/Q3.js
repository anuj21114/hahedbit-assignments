let string = 'INDIA';

let newArray = string.split('');
newArray.splice(2, 0, 'O'); // Insert 'O' at index 2

let modifiedString = newArray.join('');

console.log(modifiedString);
// Output: 'INDONESIA'
