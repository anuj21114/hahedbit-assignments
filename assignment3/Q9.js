function countWords(paragraph) {
    let words = paragraph.split(/\s+/);
    return words.length;
}

let paragraph = "This is a paragraph with several words.";
let wordCount = countWords(paragraph);
console.log("Word count:", wordCount); // Output: 7
