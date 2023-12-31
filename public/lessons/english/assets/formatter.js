/* eslint-disable */

let article = `

`;

article = article.replaceAll(/\n/g, ' ');
article = article.replaceAll('“', '"');
article = article.replaceAll('”', '"');
article = article.replaceAll('’', "'");
article = article.replaceAll('—', '- ');

let sentences = article.split(/([.?!]["']*)/);

let array = [];

for (let i = 0; i < sentences.length; i += 2) {
    let sentence = sentences[i];
    let punctuation = sentences[i + 1];
    sentence = sentence.trim();
    if (sentence.length > 60) {
        while (sentence.length > 60) {
            let index = sentence.lastIndexOf(',', 60);
            if (index === -1) {
                index = sentence.lastIndexOf(' ', 60);
            }
            if (sentence.slice(index + 1).includes('"') || sentence.slice(index + 1).includes("'")) {
                ++index;
            }
            array.push(sentence.slice(0, index + 1).trim());
            sentence = sentence.slice(index + 1).trim();
        }
        array.push(sentence + punctuation);
    } else {
        array.push(sentence + punctuation);
    }
}

array = array.filter((sentence) => sentence !== 'undefined');

copy(JSON.stringify(array));
