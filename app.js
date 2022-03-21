function capitalizeWord(word) {
    word[0].toUpperCase();
    return word;
}

console.log(capitalizeWord('word')); // 'Word'
console.log(capitalizeWord('i')); // 'I'
console.log(capitalizeWord('glasswear')); // 'Glasswear'