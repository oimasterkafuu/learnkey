/* eslint-disable */

let lyrics = `
@1——{{Photrans|感|かん}}じていた、おんなじ{{Photrans|香|かお}}り。

@3たった{{Photrans|一|いち}}{{Photrans|秒|びょう}}{{Photrans|先|さき}}の{{Photrans|未来|みらい}}
@3{{Photrans|何|なに}}が{{Photrans|起|お}}きるかも　わからないから{{Photrans|楽|たの}}しい
@4ねえ　{{Photrans|初|はじ}}めは{{Photrans|何|なん}}でも　うまく{{Photrans|行|い}}かなくて
@4{{Photrans|当|あ}}たりだって{{Photrans|噂|うわさ}}よ

@1つかれた{{Photrans|時|とき}}は　{{Photrans|振|ふ}}り{{Photrans|返|かえ}}らないで
@2{{Photrans|想像|そうぞう}}して{{Photrans|想像|そうぞう}}して　{{Photrans|次|つぎ}}の{{Photrans|一歩|いっぽ}}の{{Photrans|事|こと}}
@2{{Photrans|大丈夫|だいじょうぶ}}だよねきっと　{{Photrans|一人|ひとり}}じゃない

{{Photrans|強|つよ}}い{{Photrans|風|かぜ}}をかき{{Photrans|分|わ}}けて　{{Photrans|僕|ぼく}}たちは
{{Photrans|例|たと}}えば{{Photrans|雨|あめ}}が{{Photrans|振|ふ}}っても　{{Photrans|歩|ある}}いていくんだ
ちょっとだけ{{Photrans|大人|おとな}}びた　{{Photrans|服|ふく}}を{{Photrans|着|き}}て
{{Photrans|明日|あした}}も{{Photrans|笑|わら}}っていたいんだ

@1{{Photrans|不安|ふあん}}だけどね…えっと、うん
{{Photrans|涙|なみだ}}はみせない

@1{{Photrans|朝|あさ}}　{{Photrans|早|はや}}{{Photrans|起|お}}き{{Photrans|成功|せいこう}}
@1{{Photrans|見|み}}るもの{{Photrans|全|すべ}}てが　キラキラしてて{{Photrans|嬉|うれ}}しい
@2もちろん{{Photrans|栄養|えいよう}}は{{Photrans|大切|たいせつ}}
@2「{{Photrans|体力|たいりょく}}つけなきゃ　{{Photrans|乗|の}}り{{Photrans|切|き}}れないよ」
@2って　アドバイス

@4{{Photrans|迷|まよ}}った{{Photrans|時|とき}}は　ココロを{{Photrans|大切|たいせつ}}に
@3{{Photrans|甘|あま}}いものや{{Photrans|可愛|かわい}}いもの　{{Photrans|色|いろ}}んな"{{Photrans|大|だい}}{{Photrans|好|す}}き"を
@3みんなと{{Photrans|分|わ}}かちあえば　{{Photrans|幸|しあわ}}せ

{{Photrans|人波|ひとなみ}}に{{Photrans|揉|も}}まれてく　{{Photrans|僕|ぼく}}たちは
{{Photrans|背|せ}}{{Photrans|伸|の}}びをしなきゃ{{Photrans|見|み}}えない　{{Photrans|未来|みらい}}もあるけど
ちょっとだけ{{Photrans|深呼吸|しんこきゅう}}　できたなら
{{Photrans|今日|きょう}}も{{Photrans|笑|わら}}っていれるんだ

@4ねえ　イメージして　{{Photrans|待|ま}}ってる{{Photrans|人|ひと}}の{{Photrans|事|こと}}
@2{{Photrans|創造|そうぞう}}して　{{Photrans|君|きみ}}だけのアイデア

@2{{Photrans|大丈夫|だいじょうぶ}}だよねきっと　@4{{Photrans|忘|わす}}れないでねずっと
@1{{Photrans|足跡|あしあと}}の{{Photrans|形|かたち}}は…キミだよ

{{Photrans|強|つよ}}い{{Photrans|風|かぜ}}をかき{{Photrans|分|わ}}けて　{{Photrans|僕|ぼく}}たちは
{{Photrans|例|たと}}えば{{Photrans|雨|あめ}}が{{Photrans|振|ふ}}っても　{{Photrans|歩|ある}}いていくんだ
ちょっとだけ{{Photrans|大人|おとな}}びた　{{Photrans|服|ふく}}を{{Photrans|着|き}}て
{{Photrans|明日|あした}}も{{Photrans|笑|わら}}っていたいんだ

@3{{Photrans|不安|ふあん}}だけどね　@2{{Photrans|心配|しんぱい}}だけどね
{{Photrans|涙|なみだ}}はみせない

@1——{{Photrans|感|かん}}じていた、おんなじ{{Photrans|香|かお}}り。
`;

lyrics = lyrics.replace(/@(\d+)/g, '');
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
            array[i][j] = array[i][j].replace(/{{[pP]hotrans\|(.+?)\|(.+?)}}/, '$1,$2');
            array[i][j] = array[i][j].split(',');
        }
    }
}

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].filter((element) => element.length);
}

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

copy(convert(array));
