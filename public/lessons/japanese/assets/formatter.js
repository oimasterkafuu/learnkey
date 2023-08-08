/* eslint-disable */

let lyrics = `

`;

lyrics = lyrics.replaceAll(/\n/g, ' ');
lyrics = lyrics.replaceAll('　', ' ');

let sentences = lyrics.split(/([。 ])/);

let array = [];

for (let i = 0; i < sentences.length; i += 2) {
    let sentence = sentences[i];
    let punctuation = sentences[i + 1];
    sentence = sentence.trim();
    try {
        punctuation = punctuation.trim();
    } catch (e) {
        console.log(e);
    }
    if (!sentence) continue;
    array.push(sentence + punctuation);
}

for (let i = 0; i < array.length; i++) {
    array[i] = [array[i]];
}

for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].split(/({{[pP]hotrans\|.+?\|.+?}})/);
}

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j].match(/{{[pP]hotrans\|.+?\|.+?}}/)) {
            array[i][j] = array[i][j].replace(
                /{{[pP]hotrans\|(.+?)\|(.+?)}}/,
                '$1,$2'
            );
            array[i][j] = array[i][j].split(',');
        }
    }
}

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].filter((element) => element.length);
}

copy(JSON.stringify(array));
