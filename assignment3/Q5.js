function correctWord(sentence, wrong, correct) {
    let regex = new RegExp(wrong, 'gi'); // 'gi' for global and case-insensitive replace
    let correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}

let originalSentence = "Ths is the wrng sentence.";
let correctedSentence = correctWord(originalSentence, "Ths", "This");
console.log(correctedSentence);
// Output: "This is the wrong sentence."
