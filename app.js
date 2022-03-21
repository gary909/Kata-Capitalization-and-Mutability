function capitalizeWord(word) {
    myWord = word[0].toUpperCase() + word.slice(1);
    return myWord;
}

console.log(capitalizeWord('word')); // 'Word'
console.log(capitalizeWord('i')); // 'I'
console.log(capitalizeWord('glasswear')); // 'Glasswear'