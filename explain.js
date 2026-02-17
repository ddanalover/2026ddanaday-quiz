// data/explain.js  (별빛노트 - 해설카드)
// - export/import 없이 GitHub Pages에서 안정적으로 동작
// - window.masterExplainDB 에 저장 (category/title/wrong/why/fix/summary/stepup)

(function(){
// 별빛노트: 해설카드 DB (최종본 샘플)
// 규칙: 설명은 한국어(정중체), 일본어 예문은 띄어쓰기 없음, 한자 루비 적용
// 형식: category/title/wrong/why/fix/summary/stepup
// GitHub에 올린 뒤 UI에서 import 해서 사용하세요.

const masterExplainDB = [

  // =========================
  // 경어와 톤
  // =========================
  {
    category: "경어와 톤",
    title: "見せてください와ご覧ください의 차이",
    wrong: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。",
    why: "「見せる」は 상대가 나에게 보여 주는 행동을 나타냅니다. 무대에서는 청중이 보는 사람이므로 이 표현은 방향이 맞지 않습니다.",
    fix: [
      "スクリーンをご<ruby>覧<rt>らん</rt></ruby>ください。",
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。",
      "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。"
    ],
    summary: "보여 달라 → 見せる / 보세요 → ご覧",
    stepup: "「<ruby>拝見<rt>はいけん</rt></ruby>します」は 내가 겸손하게 본다는 뜻입니다."
  },

  {
    category: "경어와 톤",
    title: "〜てあげる의 뉘앙스",
    wrong: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてあげます。",
    why: "「〜てあげる」에는 ‘해 준다’는 의미가 포함됩니다. 공식 멘트에서 사용하면 베푸는 느낌이 강조되어 자연스럽지 않습니다.",
    fix: [
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。",
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>、どうぞ。",
      "<ruby>聞<rt>き</rt></ruby>かせてあげるよ。"
    ],
    summary: "공식 멘트 → します/ください / あげる는 친근 관계",
    stepup: "연인이나 가까운 친구 사이에서는 다정한 표현으로 자연스럽습니다."
  },

  {
    category: "경어와 톤",
    title: "聞いてください와聞かせてください의 차이",
    wrong: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください。",
    why: "이 표현은 ‘저에게 들려 주세요’라는 의미입니다. 곡 안내에서는 청중이 듣는 상황이므로 의미가 맞지 않습니다.",
    fix: [
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。",
      "みなさんの<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください。"
    ],
    summary: "듣다 → 聞いて / 들려주다 → 聞かせて",
    stepup: "청중 참여 멘트에서는 ‘목소리를 들려 주세요’가 자연스럽습니다."
  },

  {
    category: "경어와 톤",
    title: "お願いします와どうぞ의 구분",
    wrong: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、どうぞ。",
    why: "「どうぞ」は 넘기는 느낌입니다. 스태프에게 운영 요청을 할 때는 부탁 표현이 자연스럽습니다.",
    fix: [
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。",
      "では、<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>どうぞ。"
    ],
    summary: "스태프 → お願いします / 청중 → どうぞ",
    stepup: "누구에게 말하는지에 따라 표현이 달라집니다."
  },

  // =========================
  // 단어 선택
  // =========================
  {
    category: "단어 선택",
    title: "<ruby>全員<rt>ぜんいん</rt></ruby>과<ruby>全部<rt>ぜんぶ</rt></ruby>의 구분",
    wrong: "メンバー<ruby>全部<rt>ぜんぶ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。",
    why: "「全部」は 사물에 사용합니다. 사람에게 사용하면 자연스럽지 않습니다.",
    fix: [
      "メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。",
      "チケットは<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>売<rt>う</rt></ruby>れました。"
    ],
    summary: "사람 → 全員 / 사물 → 全部",
    stepup: "문장 전체가 사람을 말하는지, 사물을 말하는지 먼저 확인합니다."
  },

  {
    category: "단어 선택",
    title: "<ruby>隣<rt>となり</rt></ruby>와구역표현의차이",
    wrong: "<ruby>隣<rt>となり</rt></ruby>も<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>もありがとうございます。",
    why: "「隣」は 개인 기준 위치입니다. 콘서트 구역을 말할 때는 방향 표현이 자연스럽습니다.",
    fix: [
      "センターの<ruby>方<rt>ほう</rt></ruby>もありがとうございます。",
      "<ruby>右<rt>みぎ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>もありがとうございます。",
      "<ruby>私<rt>わたし</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>座<rt>すわ</rt></ruby>ってください。"
    ],
    summary: "구역 → センター/右左 / 개인옆 → 隣",
    stepup: "「そば」は 정서적 의미도 포함합니다."
  },

  {
    category: "단어 선택",
    title: "ステージと<ruby>舞台<rt>ぶたい</rt></ruby>의차이",
    wrong: "<ruby>今日<rt>きょう</rt></ruby>の<ruby>舞台<rt>ぶたい</rt></ruby>は<ruby>楽<rt>たの</rt></ruby>しかったです。",
    why: "콘서트 맥락에서는 ステージ나ライブ가 자연스럽습니다. 舞台는 연극이나 뮤지컬에 가깝습니다.",
    fix: [
      "<ruby>今日<rt>きょう</rt></ruby>のステージは<ruby>最<rt>さい</rt></ruby><ruby>高<rt>こう</rt></ruby>でした。",
      "ミュージカルの<ruby>舞台<rt>ぶたい</rt></ruby>は<ruby>素<rt>す</rt></ruby><ruby>晴<rt>ば</rt></ruby>らしかったです。"
    ],
    summary: "콘서트 → ステージ / 연극·뮤지컬 → 舞台",
    stepup: "공식 안내에서는 「<ruby>公演<rt>こうえん</rt></ruby>」이 자연스럽습니다."
  },

  // =========================
  // 조사 사용
  // =========================
  {
    category: "조사 사용",
    title: "で와に의구분",
    wrong: "バスに<ruby>行<rt>い</rt></ruby>きます。",
    why: "교통수단은 방법에 해당합니다. 목적지를 말할 때만 「に」를 사용합니다.",
    fix: [
      "バスで<ruby>行<rt>い</rt></ruby>きます。",
      "<ruby>駅<rt>えき</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。"
    ],
    summary: "수단 → で / 목적지 → に",
    stepup: "행동이 일어나는 장소도 「で」를 사용합니다."
  },

  {
    category: "조사 사용",
    title: "会う의조사선택",
    wrong: "<ruby>友達<rt>ともだち</rt></ruby>を<ruby>会<rt>あ</rt></ruby>いたいです。",
    why: "「会う」は 만나는 대상에 「に」를 사용합니다. 직역하면 어색합니다.",
    fix: [
      "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いたいです。",
      "<ruby>友達<rt>ともだち</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちます。"
    ],
    summary: "会う → に / 待つ → を",
    stepup: "동사마다 자주 쓰이는 조사가 다릅니다."
  },

  {
    category: "조사 사용",
    title: "名詞＋<ruby>中<rt>ちゅう</rt></ruby>의쓰임",
    wrong: "<ruby>見<rt>み</rt></ruby>る<ruby>中<rt>ちゅう</rt></ruby>です。",
    why: "「中」は 명사와 함께 사용합니다. 동사에 바로 붙이면 자연스럽지 않습니다.",
    fix: [
      "<ruby>会議中<rt>かいぎちゅう</rt></ruby>です。",
      "<ruby>見<rt>み</rt></ruby>ています。",
      "<ruby>見<rt>み</rt></ruby>ているところです。"
    ],
    summary: "中は 명사와 함께",
    stepup: "‘과정 속에서’는 「〜する中で」로 표현합니다."
  }
];



window.masterExplainDB = (typeof masterExplainDB !== 'undefined') ? masterExplainDB : [];
})();
