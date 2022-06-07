function adjacentWords(words = []) {
    let replaces = 0;
    
    while(words.length) {
        const current = words.shift();
        const next = words[0];

        if (current === next) {
            let times = 1;
            while (words[0] === current)
                times++, words.shift();
            replaces += Math.floor(times / 2);
        }
    }

    return replaces
}

module.exports = (words = []) => {
    return words.map(word => adjacentWords(word.split("")));
}
  