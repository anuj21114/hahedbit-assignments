function countConsonantsAndVowels(str) {
    let vowels = 'aeiouAEIOU';
    let consonantCount = 0;
    let vowelCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (/[a-zA-Z]/.test(char)) {
            consonantCount++;
        }
    }

    return { consonantCount, vowelCount };
}

let sentence = "This is a sample sentence to count vowels and consonants";
let counts = countConsonantsAndVowels(sentence);
console.log("Consonants:", counts.consonantCount);
console.log("Vowels:", counts.vowelCount);
