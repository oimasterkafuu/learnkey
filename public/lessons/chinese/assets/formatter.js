/* eslint-disable */

let article = `

`;

article = article.replaceAll(/\n/g, ' ');
article = article.replaceAll('　', ' ');

let sentences = article.split(/([，。、！？])/);

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
    array[i] = array[i][0].split('');
}

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].filter((element) => element.length);
}

copy(JSON.stringify(array));
