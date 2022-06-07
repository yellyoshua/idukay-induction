function adjacentWords(words = []) {
    let acc = 0;
    
    while(words.length) {
        const current = words.shift();
        const next = words[0];

        if (current === next) {
            let nTimes = 1;
            while (words[0] === current)
                nTimes++, words.shift();

            const replaces = Math.floor((nTimes / 2));
            acc += replaces;
        }
    }

    return acc
}

module.exports = (words = []) => {
    return words.map(word => adjacentWords(word.split("")));
}
  