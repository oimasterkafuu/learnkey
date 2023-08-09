/* eslint-disable */
var json = [
];

const katakana2hiragana = {
    ア: 'あ',
    イ: 'い',
    ウ: 'う',
    エ: 'え',
    オ: 'お',
    カ: 'か',
    キ: 'き',
    ク: 'く',
    ケ: 'け',
    コ: 'こ',
    サ: 'さ',
    シ: 'し',
    ス: 'す',
    セ: 'せ',
    ソ: 'そ',
    タ: 'た',
    チ: 'ち',
    ツ: 'つ',
    テ: 'て',
    ト: 'と',
    ナ: 'な',
    ニ: 'に',
    ヌ: 'ぬ',
    ネ: 'ね',
    ノ: 'の',
    ハ: 'は',
    ヒ: 'ひ',
    フ: 'ふ',
    ヘ: 'へ',
    ホ: 'ほ',
    マ: 'ま',
    ミ: 'み',
    ム: 'む',
    メ: 'め',
    モ: 'も',
    ヤ: 'や',
    ユ: 'ゆ',
    ヨ: 'よ',
    ラ: 'ら',
    リ: 'り',
    ル: 'る',
    レ: 'れ',
    ロ: 'ろ',
    ワ: 'わ',
    ヲ: 'を',
    ン: 'ん',
    ガ: 'が',
    ギ: 'ぎ',
    グ: 'ぐ',
    ゲ: 'げ',
    ゴ: 'ご',
    ザ: 'ざ',
    ジ: 'じ',
    ズ: 'ず',
    ゼ: 'ぜ',
    ゾ: 'ぞ',
    ダ: 'だ',
    ヂ: 'ぢ',
    ヅ: 'づ',
    デ: 'で',
    ド: 'ど',
    バ: 'ば',
    ビ: 'び',
    ブ: 'ぶ',
    ベ: 'べ',
    ボ: 'ぼ',
    パ: 'ぱ',
    ピ: 'ぴ',
    プ: 'ぷ',
    ペ: 'ぺ',
    ポ: 'ぽ',
    ァ: 'ぁ',
    ィ: 'ぃ',
    ゥ: 'ぅ',
    ェ: 'ぇ',
    ォ: 'ぉ',
    ャ: 'ゃ',
    ュ: 'ゅ',
    ョ: 'ょ'
};

function convert(curr) {
    if (typeof curr === 'string') {
        var result = '';
        for (let i = 0; i < curr.length; i++) {
            if (katakana2hiragana[curr[i]]) {
                result += katakana2hiragana[curr[i]];
            } else {
                result += curr[i];
            }
        }
        if (result === curr) {
            return curr;
        } else {
            console.log(curr, '=>', result);
            return [curr, result];
        }
    }

    for (let i in curr) {
        curr[i] = convert(curr[i]);
    }

    return curr;
}

copy(convert(json));
