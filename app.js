const playButton = document.querySelector('.playBtn');
const backdrop = document.querySelector('.backdrop');
const module = document.querySelector('.module');
const flashcard = document.querySelector('.theFlashcard');
const phrase = document.querySelector('.hintLetter');
const endButton = document.querySelector('.endBtn');
const prefectureNameDisplay = document.querySelector('.prefectureName');
const prefectureNameDivDisplay = document.querySelector('.prefectureNames');
const failOrPassButtonHolder = document.querySelector('.failOrPassButtonHolder');

const masterArray = [
    {
        japaneseFlashcard: '吸収する',
        englishFlashcard: 'absorb',
        level: 0
    },
    {
        japaneseFlashcard: '実際の',
        englishFlashcard: 'actual',
        level: 0
    },
    {
        japaneseFlashcard: 'に慣れる２',
        englishFlashcard: 'Be accustomed to / get used to',
        level: 1
    },
    {
        japaneseFlashcard: '確認',
        englishFlashcard: 'identification',
        level: 0
    },
    {
        japaneseFlashcard: 'を生じさせる',
        englishFlashcard: 'give rise to',
        level: 0
    },
    {
        japaneseFlashcard: '崩壊',
        englishFlashcard: 'collapse',
        level: 0
    },
    {
        japaneseFlashcard: 'を利用する',
        englishFlashcard: 'take advantage of',
        level: 0
    },
    {
        japaneseFlashcard: '熱心に',
        englishFlashcard: 'diligently',
        level: 0
    },
    {
        japaneseFlashcard: '結果',
        englishFlashcard: 'outcome',
        level: 0
    },
    {
        japaneseFlashcard: 'の埋め合わせをする',
        englishFlashcard: 'make up for',
        level: 0
    },
    {
        japaneseFlashcard: 'を始める、出発する',
        englishFlashcard: 'set out',
        level: 0
    },
    {
        japaneseFlashcard: '顔をしかめる',
        englishFlashcard: 'make a face',
        level: 0
    },
    {
        japaneseFlashcard: '決心する2',
        englishFlashcard: 'make up my mind / determine',
        level: 0
    },
    {
        japaneseFlashcard: 'それにもかかわらず',
        englishFlashcard: 'nonetheless',
        level: 0
    },
    {
        japaneseFlashcard: 'を当然とみなす',
        englishFlashcard: 'take ~ for granted',
        level: 0
    },
    {
        japaneseFlashcard: 'なんとかやっていく',
        englishFlashcard: 'get by',
        level: 0
    },
    {
        japaneseFlashcard: 'を部分修正する',
        englishFlashcard: 'modify',
        level: 0
    },
    {
        japaneseFlashcard: '教えること',
        englishFlashcard: 'instruction',
        level: 0
    },
    {
        japaneseFlashcard: '現れる',
        englishFlashcard: 'turn up',
        level: 0
    },
    {
        japaneseFlashcard: '見下す',
        englishFlashcard: 'look down on',
        level: 0
    },
    {
        japaneseFlashcard: '結論を下す',
        englishFlashcard: 'conclude',
        level: 0
    },
    {
        japaneseFlashcard: 'を実行する2',
        englishFlashcard: 'put into practice / carry out',
        level: 0
    },
    {
        japaneseFlashcard: 'に屈する3',
        englishFlashcard: 'give into/ surrender/ yield',
        level: 0
    },
    {
        japaneseFlashcard: 'を回復する2',
        englishFlashcard: 'restore / recover',
        level: 0
    },
    {
        japaneseFlashcard: 'を解決する2',
        englishFlashcard: 'work out / solve',
        level: 0
    },
    {
        japaneseFlashcard: 'に近寄らない',
        englishFlashcard: 'keep off',
        level: 0
    },
    {
        japaneseFlashcard: '問題を処理する',
        englishFlashcard: 'handle',
        level: 0
    },
    {
        japaneseFlashcard: '目立つ',
        englishFlashcard: 'stand out',
        level: 0
    },
    {
        japaneseFlashcard: 'を変える',
        englishFlashcard: 'alter',
        level: 0
    },
    {
        japaneseFlashcard: 'を重要視する',
        englishFlashcard: 'value',
        level: 0
    },
    {
        japaneseFlashcard: '前進する2',
        englishFlashcard: 'make my way / advance',
        level: 0
    },
    {
        japaneseFlashcard: 'を裏付ける、支援する',
        englishFlashcard: 'back up',
        level: 0
    },
    {
        japaneseFlashcard: '私をイライラさせる',
        englishFlashcard: 'get on my nerves',
        level: 0
    },
    {
        japaneseFlashcard: 'をおこらせる',
        englishFlashcard: 'offend',
        level: 0
    },
    {
        japaneseFlashcard: 'ちらりと見る',
        englishFlashcard: 'glance at',
        level: 0
    },
    {
        japaneseFlashcard: 'を拒否する2',
        englishFlashcard: 'turn down / refuse',
        level: 0
    },
    {
        japaneseFlashcard: '大幅',
        englishFlashcard: 'significantly',
        level: 0
    },
    {
        japaneseFlashcard: 'をかき混ぜる',
        englishFlashcard: 'stir',
        level: 0
    },
    {
        japaneseFlashcard: 'を克服する2',
        englishFlashcard: 'get over / overcome',
        level: 0
    },
    {
        japaneseFlashcard: 'に納得させる',
        englishFlashcard: 'convince',
        level: 0
    },
    {
        japaneseFlashcard: '打撃を受けた',
        englishFlashcard: 'devastated',
        level: 0
    },
    {
        japaneseFlashcard: '習慣',
        englishFlashcard: 'custom',
        level: 0
    },
    {
        japaneseFlashcard: '伝統、伝える',
        englishFlashcard: 'hand down',
        level: 0
    },
    {
        japaneseFlashcard: 'に似ている4',
        englishFlashcard: 'take after / be similar to / resemble / alike',
        level: 0
    },
    {
        japaneseFlashcard: '違反、不快',
        englishFlashcard: 'offense',
        level: 0
    },
    {
        japaneseFlashcard: '要約する',
        englishFlashcard: 'summarize',
        level: 0
    },
    {
        japaneseFlashcard: 'に耐える',
        englishFlashcard: 'bear',
        level: 0
    },
    {
        japaneseFlashcard: '状況、事情',
        englishFlashcard: 'circumstance',
        level: 0
    },
    {
        japaneseFlashcard: '人に物を求めて与える',
        englishFlashcard: 'grant',
        level: 0
    },
    {
        japaneseFlashcard: '相互に作用する',
        englishFlashcard: 'interact',
        level: 0
    },
    {
        japaneseFlashcard: '提案する',
        englishFlashcard: 'propose',
        level: 0
    },
    {
        japaneseFlashcard: '～を心に留める',
        englishFlashcard: 'keep ~ in mind',
        level: 0
    },
    {
        japaneseFlashcard: 'のために場所を空ける',
        englishFlashcard: 'make room for',
        level: 0
    },
    {
        japaneseFlashcard: '生じる、発生する',
        englishFlashcard: 'come into being',
        level: 0
    },
    {
        japaneseFlashcard: 'を引き継ぐ',
        englishFlashcard: 'take over',
        level: 0
    },
    {
        japaneseFlashcard: 'にしがみつく',
        englishFlashcard: 'hang on (to)',
        level: 0
    },
    {
        japaneseFlashcard: '熱心な',
        englishFlashcard: 'enthusiastic',
        level: 0
    },
    {
        japaneseFlashcard: '侮辱',
        englishFlashcard: 'insult',
        level: 0
    },
    {
        japaneseFlashcard: '偏見',
        englishFlashcard: 'bias',
        level: 0
    },
    {
        japaneseFlashcard: 'を延期する',
        englishFlashcard: 'postpone',
        level: 0
    },
    {
        japaneseFlashcard: 'をちょっと尋ねる',
        englishFlashcard: 'drop in at ',
        level: 0
    },
    {
        japaneseFlashcard: '宴会',
        englishFlashcard: 'banquet',
        level: 0
    },
    {
        japaneseFlashcard: 'を我慢する',
        englishFlashcard: 'put up with',
        level: 0
    },
    {
        japaneseFlashcard: 'をねたむ',
        englishFlashcard: 'envy',
        level: 0
    },
    {
        japaneseFlashcard: '禁止2',
        englishFlashcard: 'prohibit / ban',
        level: 0
    },
    {
        japaneseFlashcard: 'するのを慎む',
        englishFlashcard: 'refrain from',
        level: 0
    },
    {
        japaneseFlashcard: 'を確認する',
        englishFlashcard: 'indentify',
        level: 0
    },
    {
        japaneseFlashcard: '終わる',
        englishFlashcard: 'come to an end',
        level: 0
    },
    {
        japaneseFlashcard: '詩',
        englishFlashcard: 'verses',
        level: 0
    },
    {
        japaneseFlashcard: '奇妙な',
        englishFlashcard: 'odd',
        level: 0
    },
    {
        japaneseFlashcard: 'に似合う',
        englishFlashcard: 'go with',
        level: 0
    },
    {
        japaneseFlashcard: '現代の',
        englishFlashcard: 'contemporary',
        level: 0
    },
    {
        japaneseFlashcard: '時間が正しく動く',
        englishFlashcard: 'keep time',
        level: 0
    },
    {
        japaneseFlashcard: '移住',
        englishFlashcard: 'immigration',
        level: 0
    },
    {
        japaneseFlashcard: '取り扱う範囲',
        englishFlashcard: 'coverage',
        level: 0
    },
    {
        japaneseFlashcard: 'を廃止する2',
        englishFlashcard: 'do away with / abolish',
        level: 0
    },
    {
        japaneseFlashcard: 'を見失わないようにする',
        englishFlashcard: 'keep track of',
        level: 0
    },
    {
        japaneseFlashcard: '第一の、主要の',
        englishFlashcard: 'chief',
        level: 0
    },
    {
        japaneseFlashcard: 'を考慮に入れる',
        englishFlashcard: 'take ~ into account',
        level: 0
    },
    {
        japaneseFlashcard: 'ゴム',
        englishFlashcard: 'rubber',
        level: 0
    },
    {
        japaneseFlashcard: 'を調整する、適用する',
        englishFlashcard: 'adjust',
        level: 0
    },
    {
        japaneseFlashcard: 'を許す',
        englishFlashcard: 'permit',
        level: 0
    },
    {
        japaneseFlashcard: '投資',
        englishFlashcard: 'investment',
        level: 0
    },
    {
        japaneseFlashcard: '葬式',
        englishFlashcard: 'funeral',
        level: 0
    },
    {
        japaneseFlashcard: '広告',
        englishFlashcard: 'advertisement',
        level: 0
    },
    {
        japaneseFlashcard: '負担',
        englishFlashcard: 'burden',
        level: 0
    },
    {
        japaneseFlashcard: '投資する',
        englishFlashcard: 'invest',
        level: 0
    },
    {
        japaneseFlashcard: '大目に見る',
        englishFlashcard: 'excuse',
        level: 0
    },
    {
        japaneseFlashcard: '多様性',
        englishFlashcard: 'diversity',
        level: 0
    },
    {
        japaneseFlashcard: '栄養失調',
        englishFlashcard: 'malnutrition',
        level: 0
    },
    {
        japaneseFlashcard: '~の理由を説明する',
        englishFlashcard: 'account for',
        level: 0
    },
    {
        japaneseFlashcard: '達成する2',
        englishFlashcard: 'accomplish / achieve',
        level: 0
    },
    {
        japaneseFlashcard: '実現・達成',
        englishFlashcard: 'fullfillment',
        level: 0
    },
    {
        japaneseFlashcard: 'やり続ける',
        englishFlashcard: 'stick to',
        level: 0
    },
    {
        japaneseFlashcard: 'に遅れずにいる',
        englishFlashcard: 'Keep abreast of',
        level: 0
    },
    {
        japaneseFlashcard: '正確さ',
        englishFlashcard: 'accuracy',
        level: 0
    },
    {
        japaneseFlashcard: '意思',
        englishFlashcard: 'intention / will',
        level: 0
    },
    {
        japaneseFlashcard: '~から目を離さない',
        englishFlashcard: 'keep an eye on',
        level: 0
    },
    {
        japaneseFlashcard: 'に捧げる',
        englishFlashcard: 'devote',
        level: 0
    },
    {
        japaneseFlashcard: '達成',
        englishFlashcard: 'accomplishment',
        level: 0
    },
    {
        japaneseFlashcard: '除外する',
        englishFlashcard: 'leave out',
        level: 0
    },
    {
        japaneseFlashcard: 'つかもうとして手を伸ばす',
        englishFlashcard: 'reach out for',
        level: 0
    },
    {
        japaneseFlashcard: 'に権限を与える',
        englishFlashcard: 'authorize',
        level: 0
    },
    {
        japaneseFlashcard: 'と少し話をする',
        englishFlashcard: 'have a word with',
        level: 0
    },
    {
        japaneseFlashcard: 'を選ぶ3',
        englishFlashcard: 'select / choose / pick out',
        level: 0
    },
    {
        japaneseFlashcard: '断続的に',
        englishFlashcard: 'on and off',
        level: 0
    },
    {
        japaneseFlashcard: 'にもかかわらず',
        englishFlashcard: 'for all ~',
        level: 0
    },
    {
        japaneseFlashcard: '～の声',
        englishFlashcard: 'testimony',
        level: 0
    },
    {
        japaneseFlashcard: 'を扱う',
        englishFlashcard: 'deal with',
        level: 0
    },
    {
        japaneseFlashcard: '感謝する・高く評価する',
        englishFlashcard: 'appreciate',
        level: 0
    },
    {
        japaneseFlashcard: '通り抜ける',
        englishFlashcard: 'cut through',
        level: 0
    },
    {
        japaneseFlashcard: '人口統計',
        englishFlashcard: 'demographic',
        level: 0
    },
    {
        japaneseFlashcard: '矛盾する',
        englishFlashcard: 'contradict',
        level: 0
    },
    {
        japaneseFlashcard: '果たす・満たす',
        englishFlashcard: 'fullfill',
        level: 0
    },
    {
        japaneseFlashcard: '資格',
        englishFlashcard: 'qualification',
        level: 0
    },
    {
        japaneseFlashcard: '修正2',
        englishFlashcard: 'revision / modification',
        level: 0
    },
    {
        japaneseFlashcard: '過剰',
        englishFlashcard: 'excess',
        level: 0
    },
    {
        japaneseFlashcard: '多くの・様々な',
        englishFlashcard: 'multiple',
        level: 0
    },
    {
        japaneseFlashcard: '要因',
        englishFlashcard: 'factors',
        level: 0
    },
    {
        japaneseFlashcard: '協会',
        englishFlashcard: 'association',
        level: 0
    },
    {
        japaneseFlashcard: 'ますます',
        englishFlashcard: 'increasingly',
        level: 0
    },
    {
        japaneseFlashcard: '立ち退く',
        englishFlashcard: 'vacate',
        level: 0
    },
    {
        japaneseFlashcard: '見直す',
        englishFlashcard: 'review',
        level: 0
    },
    {
        japaneseFlashcard: '部分2',
        englishFlashcard: 'portions / part',
        level: 0
    },
    {
        japaneseFlashcard: '寛容',
        englishFlashcard: 'tolerance',
        level: 0
    },
    {
        japaneseFlashcard: '照会',
        englishFlashcard: 'referral',
        level: 0
    },
    {
        japaneseFlashcard: '証明書',
        englishFlashcard: 'certificate',
        level: 0
    },
    {
        japaneseFlashcard: '手段',
        englishFlashcard: 'means',
        level: 0
    },
    {
        japaneseFlashcard: 'とても長い間',
        englishFlashcard: 'for ages',
        level: 0
    },
    {
        japaneseFlashcard: '貯蔵庫',
        englishFlashcard: 'storage',
        level: 0
    },
    {
        japaneseFlashcard: 'に代わって',
        englishFlashcard: 'behalf',
        level: 0
    },
    {
        japaneseFlashcard: '資格を与える',
        englishFlashcard: 'qualify',
        level: 0
    },
    {
        japaneseFlashcard: 'を従う・役に立つ',
        englishFlashcard: 'serve',
        level: 0
    },
    {
        japaneseFlashcard: '構成されている',
        englishFlashcard: 'be made up of',
        level: 0
    },
    {
        japaneseFlashcard: '犠牲にする',
        englishFlashcard: 'sacrifice',
        level: 0
    },
    {
        japaneseFlashcard: '適応する',
        englishFlashcard: 'adjust to',
        level: 0
    },
    {
        japaneseFlashcard: '次に～する',
        englishFlashcard: 'go on to do',
        level: 0
    },
    {
        japaneseFlashcard: 'する気がある',
        englishFlashcard: 'be willing to do',
        level: 0
    },
    {
        japaneseFlashcard: '断固要求する',
        englishFlashcard: 'insist',
        level: 0
    }

];
const shuffle = (originalArray) => {
    let currentIndex = originalArray.length;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex) 
        currentIndex--;
        [originalArray[currentIndex], originalArray[randomIndex]] = [originalArray[randomIndex], originalArray[currentIndex]]
    }
    return originalArray; 
}





const flashcardsArray = shuffle(masterArray);

const answerArray = []; 

flashcardsArray.forEach(e => {
    answerArray.push(e.englishFlashcard);
})

let numberOfCards = [];

for(let j = 0; j<flashcardsArray.length; j++) {
    numberOfCards.push(j);
}

let snapNum = 0;


const JapanMapSVG = document.querySelector('.JapanMapSVG');
let listOfPrefectures = [];
for(i=0;i<81;i++){
    listOfPrefectures.push(JapanMapSVG.children[i]);
}
let snapshots = [];


let prefectures = [
    {
        prefecture: listOfPrefectures[0],
        color: 'red',
        borders: [listOfPrefectures[1], listOfPrefectures[2]]
    },
    {
        prefecture: listOfPrefectures[1],
        color: 'white',
        borders: [listOfPrefectures[0], listOfPrefectures[2], 
            listOfPrefectures[3], listOfPrefectures[4]]
    },
    {
        prefecture: listOfPrefectures[2],
        color: 'white',
        borders: [listOfPrefectures[0], listOfPrefectures[1],
            listOfPrefectures[4],]
    },
    {
        prefecture: listOfPrefectures[3],
        color: 'white',
        borders: [listOfPrefectures[1],listOfPrefectures[4],
        listOfPrefectures[5], listOfPrefectures[6],]
    },
    {
        prefecture: listOfPrefectures[4],
        color: 'white',
        borders: [listOfPrefectures[2],listOfPrefectures[3],listOfPrefectures[6]]
    },
    {
        prefecture: listOfPrefectures[5],
        color: 'white',
        borders: [listOfPrefectures[3],listOfPrefectures[6],
            listOfPrefectures[8], listOfPrefectures[9],
            listOfPrefectures[10],]
    },
    {
        prefecture: listOfPrefectures[6],
        color: 'white',
        borders: [listOfPrefectures[4],listOfPrefectures[3],
            listOfPrefectures[5],listOfPrefectures[7],
            listOfPrefectures[11],listOfPrefectures[8],]
    },
    {
        prefecture: listOfPrefectures[7],
        color: 'white',
        borders: [listOfPrefectures[8],listOfPrefectures[11],
            listOfPrefectures[6],listOfPrefectures[21],]
    },
    {
        prefecture: listOfPrefectures[8],
        color: 'white',
        borders: [listOfPrefectures[5],listOfPrefectures[6],
            listOfPrefectures[7],listOfPrefectures[9],
            listOfPrefectures[21],]
    },
    {
        prefecture: listOfPrefectures[9],
        color: 'white',
        borders: [listOfPrefectures[5],listOfPrefectures[8],
            listOfPrefectures[21],listOfPrefectures[10],
            listOfPrefectures[12], listOfPrefectures[23],
            listOfPrefectures[26], listOfPrefectures[27],]
    },
    {
        prefecture: listOfPrefectures[10],
        color: 'white',
        borders: [listOfPrefectures[5],listOfPrefectures[9],
            listOfPrefectures[12],listOfPrefectures[17],]
    },
    {
        prefecture: listOfPrefectures[11],
        color: 'white',
        borders: [listOfPrefectures[6],listOfPrefectures[7],
            listOfPrefectures[21],listOfPrefectures[22],]
    },
    {
        prefecture: listOfPrefectures[12],
        color: 'white',
        borders: [listOfPrefectures[9], listOfPrefectures[10],
            listOfPrefectures[17],listOfPrefectures[27],
            listOfPrefectures[13],listOfPrefectures[28],
            listOfPrefectures[29]]
    },
    {
        prefecture: listOfPrefectures[13],
        color: 'white',
        borders: [listOfPrefectures[12], listOfPrefectures[14],
            listOfPrefectures[29],listOfPrefectures[28],]
    },
    {
        prefecture: listOfPrefectures[14],
        color: 'white',
        borders: [listOfPrefectures[13], listOfPrefectures[29],
            listOfPrefectures[15],listOfPrefectures[30],
            listOfPrefectures[28],listOfPrefectures[32],]

    },
    {
        prefecture: listOfPrefectures[15],
        color: 'white',
        borders: [listOfPrefectures[14], listOfPrefectures[16],
            listOfPrefectures[32],listOfPrefectures[33],]

    },
    {
        prefecture: listOfPrefectures[16],
        color: 'white',
        borders: [listOfPrefectures[18], listOfPrefectures[15],
            listOfPrefectures[20],listOfPrefectures[33],]

    },
    {
        prefecture: listOfPrefectures[17],
        color: 'white',
        borders: [listOfPrefectures[12], listOfPrefectures[10],
            listOfPrefectures[29]]
    },
    {
        prefecture: listOfPrefectures[18],
        color: 'white',
        borders: [listOfPrefectures[19], listOfPrefectures[16],
            listOfPrefectures[20],listOfPrefectures[33]]

    },
    {
        prefecture: listOfPrefectures[19],
        color: 'black',
        borders: [listOfPrefectures[20], listOfPrefectures[18]]

    },
    {
        prefecture: listOfPrefectures[20],
        color: 'white',
        borders: [listOfPrefectures[18], listOfPrefectures[19],
            listOfPrefectures[33]]

    },
    {
        prefecture: listOfPrefectures[21],
        color: 'white',
        borders: [listOfPrefectures[7], listOfPrefectures[8],
            listOfPrefectures[9],listOfPrefectures[11],
            listOfPrefectures[22],listOfPrefectures[24],
            listOfPrefectures[23]]

    },
    {
        prefecture: listOfPrefectures[22],
        color: 'white',
        borders: [listOfPrefectures[11], listOfPrefectures[21],
            listOfPrefectures[24]]

    },
    {
        prefecture: listOfPrefectures[23],
        color: 'white',
        borders: [listOfPrefectures[8], listOfPrefectures[9],
            listOfPrefectures[21],listOfPrefectures[24],
            listOfPrefectures[25],listOfPrefectures[26],]

    },
    {
        prefecture: listOfPrefectures[24],
        color: 'white',
        borders: [listOfPrefectures[21], listOfPrefectures[22],
            listOfPrefectures[23],listOfPrefectures[25],]

    },
    {
        prefecture: listOfPrefectures[25],
        color: 'white',
        borders: [listOfPrefectures[23], listOfPrefectures[24],
            listOfPrefectures[26]]

    },
    {
        prefecture: listOfPrefectures[26],
        color: 'white',
        borders: [listOfPrefectures[9], listOfPrefectures[23],
            listOfPrefectures[27],listOfPrefectures[25],]

    },
    {
        prefecture: listOfPrefectures[27],
        color: 'white',
        borders: [listOfPrefectures[12], listOfPrefectures[9],
            listOfPrefectures[28],listOfPrefectures[26],]

    },
    {
        prefecture: listOfPrefectures[28],
        color: 'white',
        borders: [listOfPrefectures[12], listOfPrefectures[13],
            listOfPrefectures[14],listOfPrefectures[27],
            listOfPrefectures[30],listOfPrefectures[31]]

    },
    {
        prefecture: listOfPrefectures[29],
        color: 'white',
        borders: [listOfPrefectures[12], listOfPrefectures[13],
            listOfPrefectures[14],listOfPrefectures[17],]

    },
    {
        prefecture: listOfPrefectures[30],
        color: 'white',
        borders: [listOfPrefectures[13], listOfPrefectures[14],
            listOfPrefectures[32],listOfPrefectures[31],
            listOfPrefectures[28],]

    },
    {
        prefecture: listOfPrefectures[31],
        color: 'white',
        borders: [listOfPrefectures[28], listOfPrefectures[30],
            listOfPrefectures[32]]

    },
    {
        prefecture: listOfPrefectures[32],
        color: 'white',
        borders: [listOfPrefectures[14], listOfPrefectures[15],
            listOfPrefectures[30],listOfPrefectures[31]]

    },
    {
        prefecture: listOfPrefectures[33],
        color: 'white',
        borders: [listOfPrefectures[15], listOfPrefectures[16],
            listOfPrefectures[18],listOfPrefectures[20],]

    }


];

const createSnapShot = () => {
    let hexacopy = [];
    prefectures.forEach(e => hexacopy.push({ prefectureName: e.prefecture.classList[0], color: e.color }))
     snapshots.push(hexacopy)  
}
 

const fillMap = () => {
    prefectures.map((element) => {
        element.prefecture.style.fill = element.color
    })
}
fillMap();

const endGame = (snapNu) => {
           prefectures.map((element) => {
               snapshots[snapNu].forEach(e => {
               if(element.prefecture.classList[0] === e.prefectureName) {
                  element.color = e.color 
               } 
           })
       });
       fillMap();
       snapNum = snapNum+1;
}
let fiveSeconds = false;
let modalOpen = false; 
let fiveSecondTimeout;
let fiveSecondTimeoutWords;

const addBackdrop = () => {
    backdrop.classList.add('active')
    module.classList.add('active')
    flashcard.style.display = 'inline-block'
    modalOpen = true;

    failOrPassButtonHolder.innerHTML = '';
    let buttonDoYouKnow = document.createElement('button');
    buttonDoYouKnow.innerHTML = 'Pass';
    buttonDoYouKnow.addEventListener('click', userKnewAnswer)
    buttonDoYouKnow.classList.add('buttonDoYouKnow');
    failOrPassButtonHolder.append(buttonDoYouKnow);
    fiveSeconds = true;

    fiveSecondTimeout = setTimeout(()=>{
        fiveSeconds = false;
        failOrPassButtonHolder.innerHTML = '';
        let buttonYouDidKnow = document.createElement('button');
        buttonYouDidKnow.innerHTML = 'Fail';
        buttonYouDidKnow.addEventListener('click', userDidntKnowAnswer)
        buttonYouDidKnow.classList.add('buttonYouDidKnow');
        failOrPassButtonHolder.append(buttonYouDidKnow)

    }, 5000)
}
const removeBackdrop = () => {
    modalOpen = false;
    backdrop.classList.remove('active')
    module.classList.remove('active')
    flashcard.style.display = 'none'
    flashcard.innerHTML = ''
}

let flashcardSrc = null; 
let currentWord = null;
let currentPhraseNum = 1;
const phraseChanger = (num) => {
    phrase.innerHTML =  num.englishFlashcard[0]; 
    fiveSecondTimeoutWords = setTimeout(() => {
    playButton.innerHTML =  num.englishFlashcard;
    phrase.innerHTML =  num.englishFlashcard; 
    }, 5000)
};

// const spliceNumberOfcards = (num) => {
//     if(numberOfCards.length === 1) {
//         numberOfCards = [];
//         for(k=0;k<flashcardsArray.length;k++){
//             numberOfCards.push(k);
//         }

//     } else {
//         numberOfCards.splice(num, 1);
//     }
// }

function compare( a, b ) {
    if ( a.level < b.level ){
      return -1;
    }
    if ( a.level > b.level ){
      return 1;
    }
    return 0;
  }
  

const changeCard = () => {
    let flashcardsCopy = [];
    flashcardsArray.forEach(e => flashcardsCopy.push(e));
    let flashcardsArrayCopy = flashcardsCopy.sort(compare);
    randomNum = Math.floor(Math.random()*10);

    currentWord = flashcardsArrayCopy[randomNum];
    currentWordDisplayed = flashcardsArrayCopy[randomNum];
    flashcardSrc = flashcardsArrayCopy[randomNum].japaneseFlashcard
    phraseChanger(currentWord);
    //spliceNumberOfcards(randomNum);
}

const displayCard = () => {
    flashcard.innerHTML = flashcardSrc;
}
backdrop.addEventListener('click', () => {
    removeBackdrop();
})
playButton.addEventListener('click', ()=>{
    changeCard();
    addBackdrop();
    displayCard();
    
})




const buttonRed = document.querySelector('.teamOne')
const buttonOrange = document.querySelector('.teamTwo')
const buttonYellow = document.querySelector('.teamThree')
const buttonGreen = document.querySelector('.teamFour')
const buttonBlue = document.querySelector('.teamFive')
const buttonPurple = document.querySelector('.teamSix')


let currentColor = 'white';
let currentWordDisplayed ='';
buttonRed.addEventListener('click', () => {

    currentColor = 'red'
    
    document.body.style.background = currentColor
    setTimeout(() => {
        document.body.style.background = "linear-gradient(to right, grey, #6699CC)"
    }, 950)
})
window.addEventListener('keydown', (event) => {
    if(event.key === '1'){
        buttonRed.click();
    }
})

buttonOrange.addEventListener('click', () => {
    currentColor = 'orange'

    document.body.style.background = currentColor
    setTimeout(() => {
        document.body.style.background = "linear-gradient(to right, grey, #6699CC)"
    }, 950)
})
window.addEventListener('keyup', (event) => {
    if(event.key === '2'){
        buttonOrange.click();
    }
})

buttonYellow.addEventListener('click', () => {
    currentColor = 'yellow'

    document.body.style.background = currentColor
    setTimeout(() => {
        document.body.style.background = "linear-gradient(to right, grey, #6699CC)"
    }, 950)
})
window.addEventListener('keyup', (event) => {
    if(event.key === '3'){
        
        buttonYellow.click();
    }
})

buttonGreen.addEventListener('click', () => {
    currentColor = 'green'

    document.body.style.background = currentColor
    setTimeout(() => {
        document.body.style.background = "linear-gradient(to right, grey, #6699CC)"
    }, 950)
})
window.addEventListener('keyup', (event) => {
    if(event.key === '4'){
        buttonGreen.click();
    }
})

buttonBlue.addEventListener('click', () => {
    currentColor = 'blue'

    document.body.style.background = currentColor
    setTimeout(() => {
        document.body.style.background = "linear-gradient(to right, grey, #6699CC)"
    }, 950)
})
window.addEventListener('keyup', (event) => {
    if(event.key === '5'){
        buttonBlue.click();
    }
})

buttonPurple.addEventListener('click', () => {
    currentColor = 'black'

    document.body.style.background = currentColor
    setTimeout(() => {
        document.body.style.background = "linear-gradient(to right, grey, #6699CC)"
    }, 950)
})
window.addEventListener('keyup', (event) => {
    if(event.key === '6'){
        buttonPurple.click();
    }
})


document.querySelector('.teamNames').children[0].addEventListener('click', () => {
    currentColor = 'white'
})
window.addEventListener('keyup', (event) => {
    if(event.key === '7'){
        currentColor = 'white'
    }
})

document.querySelector('.teamNames').children[1].addEventListener('click', () => {
    currentColor = 'transparent'
})
window.addEventListener('keyup', (event) => {
    if(event.key === '8'){
        currentColor = 'transparent'
    }
})

window.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowUp' && !fiveSeconds && !modalOpen){
        playButton.click();
    }
    if(event.key === 'ArrowDown'){
        failOrPassButtonHolder.childNodes[0].click();
        clearTimeout(fiveSecondTimeout);
        fiveSeconds = false;
        failOrPassButtonHolder.innerHTML = '';
        let buttonYouDidKnow = document.createElement('button');
        buttonYouDidKnow.innerHTML = 'Fail';
        buttonYouDidKnow.addEventListener('click', userDidntKnowAnswer)
        buttonYouDidKnow.classList.add('buttonYouDidKnow');
        failOrPassButtonHolder.append(buttonYouDidKnow)
        clearTimeout(fiveSecondTimeoutWords);
        playButton.innerHTML =  currentWord.englishFlashcard;
        phrase.innerHTML =  currentWord.englishFlashcard; 
    }
    
})


const displayPrefectureTaken = (ele) => {
    prefectureNameDisplay.innerHTML = '';
    prefectureNameDisplay.innerHTML = ele.prefecture.classList[0];
    prefectureNameDisplay.style.color = ele.color;
    let lostColor = ele.color
    let gradientDirection = 'to right'

    let randomGradientDirectionNumber = Math.floor(Math.random()*6); 
    if(randomGradientDirectionNumber === 1) {
        gradientDirection = 'to left'
    }
    if(randomGradientDirectionNumber === 2) {
        gradientDirection = 'to left bottom'
    }
    if(randomGradientDirectionNumber === 3) {
        gradientDirection = 'to left top'
    }
    if(randomGradientDirectionNumber === 4) {
        gradientDirection = 'to right bottom'
    }
    if(randomGradientDirectionNumber === 5) {
        gradientDirection = 'to right top'
    }

    setTimeout(()=>{
        prefectureNameDisplay.style.color = currentColor;
    }, 625)
    prefectureNameDivDisplay.style.background = lostColor;
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 0%,' + lostColor + ' 5%,' + lostColor + ')';
    }, 50)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 5%,'+ lostColor + ' 10%,' + lostColor + ')';
    }, 100)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 10%,'+ lostColor + ' 15%,' + lostColor + ')';

    }, 100)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 15%,'+ lostColor + ' 20%,' + lostColor + ')';

    }, 125)



    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 20%,' + lostColor + ' 25%,' + lostColor + ')';

    }, 150)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 25%,' + lostColor + ' 30%,' + lostColor + ')';

    }, 175)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 30%,' + lostColor + ' 35%,' + lostColor + ')';

    }, 200)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 35%,' + lostColor + ' 40%,' + lostColor + ')';

    }, 225)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 40%,' + lostColor + ' 45%,' + lostColor + ')';

    }, 250)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 45%,' + lostColor + ' 50%,' + lostColor + ')';

    }, 275)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 50%,' + lostColor + ' 55%,' + lostColor + ')';

    }, 300)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 55%,' + lostColor + ' 60%,'+ lostColor + ')';

    }, 325)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 60%,' + lostColor + ' 65%,' + lostColor + ')';

    }, 350)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 65%,' + lostColor + ' 70%,' + lostColor + ')';

    }, 375)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 70%,' + lostColor + ' 75%,' + lostColor + ')';

    }, 400)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 75%,' + lostColor + ' 80%,' + lostColor + ')';

    }, 425)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 80%,' + lostColor + ' 85%,' + lostColor + ')';

    }, 450)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 85%,' + lostColor + ' 90%,' + lostColor + ')';

    }, 475)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 90%,' + lostColor + ' 95%,' + lostColor + ')';

    }, 500)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'linear-gradient(' + gradientDirection + ',' + currentColor + ' 95%,' + lostColor + ' 100%,' + lostColor + ')';

    }, 525)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = currentColor;

    }, 525)
    setTimeout(() => {
        prefectureNameDivDisplay.style.background = 'transparent';

    }, 625)



}

prefectures.map(ele => {
    ele.prefecture.addEventListener('click', () => {
        createSnapShot();
        displayPrefectureTaken(ele);
        ele.color = currentColor
        fillMap();
        updateScore();
        
    })
})


let redPoints = 0;
let orangePoints = 0;
let yellowPoints = 0;
let greenPoints = 0;
let bluePoints = 0;
let purplePoints = 0;

const checkPoints = () => {
    prefectures.map( ele => {
        switch (ele.color) {
            case 'red': 
                redPoints = redPoints + 1;
            break; 
            case 'orange':
                orangePoints = orangePoints + 1;
            break;
            case 'yellow':
                yellowPoints = yellowPoints + 1;
            break;    
            case 'green':
                greenPoints = greenPoints + 1;
            break;   
            case 'blue':
                bluePoints = bluePoints + 1;
            break; 
            case 'black':
                purplePoints = purplePoints + 1;
            break; 
        }
    })
}

const updateScore = () => {
    checkPoints();
    buttonRed.textContent = redPoints;
    buttonOrange.textContent = orangePoints;
    buttonYellow.textContent = yellowPoints;
    buttonGreen.textContent = greenPoints;
    buttonBlue.textContent = bluePoints;
    buttonPurple.textContent = purplePoints;

    redPoints = 0;
    orangePoints = 0;
    yellowPoints = 0;
    greenPoints = 0;
    bluePoints = 0;
    purplePoints = 0;
}
updateScore();

endButton.addEventListener('click', () =>{
    
    setInterval(()=>{
        
        endGame(snapNum);
        if(snapNum >= snapshots.length) {
            snapNum = 0
        }
    }, 250)
    
})

let userColor = 'red';
let computerColor = 'black';

let userPrefectures = [prefectures[0]];
let computerPrefectures = [prefectures[19]];


const chooseAPrefecture = (property) => {
    let bordersArray = [];
    let prefectureChosen = null;
    checkForComputerDuplicates();
    checkForUserDuplicates();
    
    if(property === 'User') {
        userPrefectures.forEach(e => {
            e.borders.forEach(ele => {
                if(ele.style.fill === 'white') {
                    bordersArray.push(ele);
                } else if(ele.style.fill != userColor) {
                   bordersArray.push(ele);
               }
            })
        })
        let randomBorderChosen = Math.floor(Math.random()*bordersArray.length)
        prefectures.forEach(e => {
            if(e.prefecture === bordersArray[randomBorderChosen]) {
                prefectureChosen = e;
                e.color = userColor
            }
        })
        createSnapShot();
        displayPrefectureTaken(prefectureChosen);
        fillMap();
        updateScore();
        userPrefectures.push(prefectureChosen);
    }
    if(property === 'Computer') {
        computerPrefectures.forEach(e => {
            console.log(e)
            e.borders.forEach(ele => {
                if(ele.style.fill === 'white') {
                    bordersArray.push(ele);
                } else if(ele.style.fill != computerColor) {
                   bordersArray.push(ele);   
               }
            })
        })
        let randomBorderChosen = Math.floor(Math.random()*bordersArray.length)
        prefectures.forEach(e => {
            if(e.prefecture === bordersArray[randomBorderChosen]) {
                prefectureChosen = e;
                e.color = computerColor
            }
        })
        createSnapShot();
        displayPrefectureTaken(prefectureChosen);
        fillMap();
        updateScore();
        computerPrefectures.push(prefectureChosen);
    }
}

const checkForUserDuplicates = () => {
    
    userPrefectures.forEach((e, index) => {
        if(e.color != userColor) {
            userPrefectures.splice(index, 1)
        }
    })
}

const checkForComputerDuplicates = () => {
    computerPrefectures.forEach((e, index) => {
        if(e.color != computerColor) {
            computerPrefectures.splice(index, 1)
        }
    })
}
let numberOfRounds = 0;
const userDidntKnowAnswer = () => {
    removeBackdrop();
    chooseAPrefecture('Computer'); 
    flashcardsArray.forEach(e => {
        if(currentWordDisplayed === e) {
            e.level = e.level - 1}
    })
    numberOfRounds = numberOfRounds+1;
    console.log(numberOfRounds)

}

const userKnewAnswer = () => {
    removeBackdrop();
    let cordLevel = 0; 

    flashcardsArray.forEach(e => {
        if(currentWordDisplayed === e) {
            e.level = e.level + 1
            cordLevel = e.level
        }
    })

    if(cordLevel >=1 ) {
        chooseAPrefecture('User');
    }

    numberOfRounds = numberOfRounds +1;
    console.log(numberOfRounds)
}