function adjacentWords(word = "") {
    let replaces = 0, i = 0;

    for (; i < word.length; i++) {
        const current = word[i];
        const next = word[i + 1];

        if (current === next) {
            let times = 1;
            while (word[i + 1] === current)
                times++, i++;
            replaces += Math.floor(times / 2);
        }
    }

    return replaces
}

module.exports = (words = []) => {
    return words.map(word => adjacentWords(word));
}
