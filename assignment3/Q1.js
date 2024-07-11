let states = ["Kerala", "Uttar Pradesh", "Goa", "Assam", "Rajasthan", "Odisha", "Bihar"];

// Function to filter out states starting with vowels
let filteredStates = states.filter(state => {
    let firstChar = state.charAt(0).toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log(filteredStates);
// Output: ["Uttar Pradesh", "Assam", "Rajasthan", "Odisha", "Bihar"]
