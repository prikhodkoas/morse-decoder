const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resArr = [];
    let tempExpr = [...expr];

    while(tempExpr.length > 0) {
        let cur = [];

        for(let i = 0; i < 10; i++) {
            let temp = tempExpr.shift();

            if(temp === '*') {
                cur.push(temp);
                continue;
            }

            if(cur.length === 0 && temp === '0') {
                continue;
            }
            else {
                cur.push(temp);
            }
        }

        if(cur[0] === '*') {
            resArr.push(' ');
        }
        else {
            let morzeArr = [];

            for(let i = 1; i < cur.length; i += 2) {
                if(cur[i] === '0') {
                    morzeArr.push('.');
                }
                else {
                    morzeArr.push('-');
                }
            }

            resArr.push(MORSE_TABLE[morzeArr.join('')]);
        }
    }

    return resArr.join('');
}

module.exports = {
    decode
}