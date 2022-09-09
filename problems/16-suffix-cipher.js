/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/
let suffixer = function (word, obj) {
    let keyArr = Object.keys(obj);
    for (thing in keyArr) {
        let suffix = keyArr[thing]
        let n = suffix.length * -1;
        if (word.slice(n) === suffix) {
            return obj[suffix](word) + ' '
        } else {
            return word + " "
        }
    }
}

let suffixCipher = function (sent, obj) {
    let newSent = '';
    let sentArr = sent.split(' ');
    for (item in sentArr) {
        let word = sentArr[item]
        newSent += suffixer(word, obj)
    }
    return newSent;
}

    ;


let cipher1 = {
    ly: function (word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function (word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function (word) {
        return word.toUpperCase();
    },
    s: function (word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
