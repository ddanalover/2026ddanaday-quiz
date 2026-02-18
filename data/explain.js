(function () {

const masterExplainDB = [

  // ===== 경어와 톤 =====
  {
    category: "경어와 톤",
    title: "〜てあげる의 뉘앙스",
    wrong:
      "한국어: 다음 곡을 들려 드리겠습니다.<br>" +
      "✖ <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてあげます。<br>" +
      "〇 <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。",
    why:
      "〜てあげる는 ‘내가 해 준다’가 앞에 있는 표현입니다. 그래서 무대에서 청중 전체에게 쓰면 ‘내가 너희에게 해 준다’ 같은 느낌이 섞여 들릴 수 있습니다. 안내 문장에서는 관계를 앞세우지 않는 표현이 더 안전합니다.",
    fix: [
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。<br>→ 다음 곡을 들어 주세요.",
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>、どうぞ。<br>→ 그럼 다음 곡입니다."
    ],
    stepup:
      "친한 사이에서는 자연스럽습니다.<br>" +
      "俺がおまえに<ruby>聞<rt>き</rt></ruby>かせてやるよ。<br>→ 내가 너한테 들려 줄게.<br>" +
      "彼女を<ruby>幸<rt>しあわ</rt></ruby>せにしてあげるよ。<br>→ 내가 그녀를 행복하게 해 줄게.",
    summary:
      "무대 안내는 ください/どうぞ가 안전합니다. あげる는 관계가 드러나는 상황에서 씁니다."
  },

  {
    category: "경어와 톤",
    title: "見せてください가 어색한 이유",
    wrong:
      "한국어: (무대에서) 다음 문제 부탁드립니다.<br>" +
      "✖ <ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。<br>" +
      "〇 <ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。",
    why:
      "見せてください는 ‘나에게 보여 달라’ 쪽으로 뜻이 잡히기 쉬운 표현입니다. 무대에서는 스태프에게 진행을 요청하거나, 청중에게 화면을 보라고 안내하는 상황이 많아서 말의 목적이 달라집니다.",
    fix: [
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。<br>→ 다음 문제 부탁드립니다.",
      "スクリーンをご<ruby>覧<rt>らん</rt></ruby>ください。<br>→ 스크린을 봐 주세요."
    ],
    stepup:
      "개인적으로 부탁할 때는 자연스럽습니다.<br>" +
      "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。<br>→ 사진을 보여 주세요.",
    summary:
      "스태프에게는 お願いします, 청중에게는 ご覧ください가 안전합니다."
  },

  // ===== 조사 사용 =====
  {
    category: "조사 사용",
    title: "~中의 사용법",
    wrong:
      "한국어: 지금 보는 중입니다.<br>" +
      "✖ <ruby>見<rt>み</rt></ruby>る<ruby>中<rt>ちゅう</rt></ruby>です。<br>" +
      "〇 <ruby>見<rt>み</rt></ruby>ています。",
    why:
      "中는 주로 한자 명사 뒤에서 ‘~중’처럼 쓰입니다. 동사 원형에 바로 붙이는 형태는 어색하게 들리기 쉽습니다.",
    fix: [
      "<ruby>見<rt>み</rt></ruby>ています。<br>→ 보고 있습니다.",
      "<ruby>会議中<rt>かいぎちゅう</rt></ruby>です。<br>→ 회의 중입니다."
    ],
    stepup:
      "<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>中<rt>なか</rt></ruby>で<br>→ 공부하는 과정에서",
    summary:
      "한자 명사 + 中는 자연스럽고, 동사 원형 + 中는 어색해질 수 있습니다."
  },

  {
    category: "조사 사용",
    title: "で와 に의 차이",
    wrong:
      "한국어: 버스로 갑니다.<br>" +
      "✖ バスに<ruby>行<rt>い</rt></ruby>きます。<br>" +
      "〇 バスで<ruby>行<rt>い</rt></ruby>きます。",
    why:
      "이동 수단은 ‘방법’이라 で를 쓰는 경우가 많습니다. 도착 지점은 に가 자연스럽습니다.",
    fix: [
      "バスで<ruby>行<rt>い</rt></ruby>きます。<br>→ 버스로 갑니다.",
      "<ruby>駅<rt>えき</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。<br>→ 역에 갑니다."
    ],
    stepup:
      "カフェで<ruby>勉強<rt>べんきょう</rt></ruby>します。<br>→ 카페에서 공부합니다.",
    summary:
      "방법·장소는 で / 도착은 に"
  },

  {
    category: "조사 사용",
    title: "を가 아니라 に를 쓰는 표현",
    wrong:
      "한국어: 친구를 만나고 싶습니다.<br>" +
      "✖ <ruby>友達<rt>ともだち</rt></ruby>を<ruby>会<rt>あ</rt></ruby>いたいです。<br>" +
      "〇 <ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いたいです。",
    why:
      "会う/乗る/入る는 ‘~에’의 느낌(に)으로 말하는 경우가 많습니다. 한국어 ‘를’ 감각 때문에 을/를(を)로 붙이기 쉬워서 헷갈립니다.",
    fix: [
      "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いたいです。<br>→ 친구를 만나고 싶습니다.",
      "バスに<ruby>乗<rt>の</rt></ruby>ります。<br>→ 버스를 탑니다.",
      "<ruby>店<rt>みせ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ります。<br>→ 가게에 들어갑니다."
    ],
    stepup:
      "<ruby>友達<rt>ともだち</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちます。<br>→ 친구를 기다립니다.",
    summary:
      "会う/乗る/入る는 に / 待つ는 を"
  },

  {
    category: "조사 사용",
    title: "を가 아니라 が를 쓰는 표현",
    wrong:
      "한국어: 고기가 먹고 싶습니다.<br>" +
      "✖ <ruby>肉<rt>にく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたいです。<br>" +
      "〇 <ruby>肉<rt>にく</rt></ruby>が<ruby>食<rt>た</rt></ruby>べたいです。",
    why:
      "〜たい/ほしい/好き 같은 표현은 회화에서 ‘가’ 쪽으로 말하는 경우가 많습니다. 한국어 습관 때문에 자동으로 を를 붙이기 쉬워서 자주 헷갈립니다.",
    fix: [
      "<ruby>肉<rt>にく</rt></ruby>が<ruby>食<rt>た</rt></ruby>べたいです。<br>→ 고기가 먹고 싶습니다.",
      "<ruby>水<rt>みず</rt></ruby>がほしいです。<br>→ 물이 필요합니다.",
      "<ruby>映画<rt>えいが</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。<br>→ 영화를 좋아합니다."
    ],
    stepup:
      "<ruby>肉<rt>にく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。<br>→ 고기를 먹습니다.",
    summary:
      "욕구·취향은 が / 단순 행동은 を"
  },

  // ===== 단어 선택 =====
  {
    category: "단어 선택",
    title: "<ruby>全員<rt>ぜんいん</rt></ruby>과<ruby>全部<rt>ぜんぶ</rt></ruby>",
    wrong:
      "한국어: 멤버 전부가 왔습니다.<br>" +
      "✖ メンバー<ruby>全部<rt>ぜんぶ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。<br>" +
      "〇 メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。",
    why:
      "全部는 사물·내용 전체에 가깝고, 全員은 사람 전체에 씁니다.",
    fix: [
      "メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。<br>→ 멤버 전원이 왔습니다.",
      "チケットは<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>売<rt>う</rt></ruby>れました。<br>→ 티켓이 전부 팔렸습니다."
    ],
    stepup:
      "ほとんどのメンバーが<ruby>来<rt>き</rt></ruby>ました。<br>→ 멤버 대부분이 왔습니다.",
    summary:
      "사람은 全員 / 사물은 全部 / 대부분은 ほとんど"
  },

  {
    category: "단어 선택",
    title: "<ruby>隣<rt>となり</rt></ruby>와 구역 표현",
    wrong:
      "한국어: 옆도 가운데도 감사합니다.<br>" +
      "✖ <ruby>隣<rt>となり</rt></ruby>も<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>もありがとうございます。<br>" +
      "〇 センターの<ruby>方<rt>ほう</rt></ruby>もありがとうございます。",
    why:
      "隣는 개인 기준의 옆자리 느낌이 강합니다. 구역 호명에는 센터/오른쪽/왼쪽 같은 표현이 더 어울립니다.",
    fix: [
      "センターの<ruby>方<rt>ほう</rt></ruby>もありがとうございます。<br>→ 센터 쪽도 감사합니다.",
      "<ruby>右<rt>みぎ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>もありがとうございます。<br>→ 오른쪽도 감사합니다."
    ],
    stepup:
      "そばにいてください。<br>→ 곁에 있어 주세요.",
    summary:
      "구역은 センター/右左 / 개인 옆은 隣"
  },

  {
    category: "단어 선택",
    title: "ステージ와<ruby>舞台<rt>ぶたい</rt></ruby>",
    wrong:
      "한국어: 오늘 무대가 즐거웠습니다.<br>" +
      "✖ <ruby>今日<rt>きょう</rt></ruby>の<ruby>舞台<rt>ぶたい</rt></ruby>は<ruby>楽<rt>たの</rt></ruby>しかったです。<br>" +
      "〇 <ruby>今日<rt>きょう</rt></ruby>のステージは<ruby>楽<rt>たの</rt></ruby>しかったです。",
    why:
      "콘서트 문맥에서는 ステージ/ライブ가 더 자주 쓰입니다. 舞台는 연극·뮤지컬 느낌이 강합니다.",
    fix: [
      "<ruby>今日<rt>きょう</rt></ruby>のステージは<ruby>最<rt>さい</rt></ruby><ruby>高<rt>こう</rt></ruby>でした。<br>→ 오늘 스테이지가 최고였습니다.",
      "ミュージカルの<ruby>舞台<rt>ぶたい</rt></ruby>は<ruby>素<rt>す</rt></ruby><ruby>晴<rt>ば</rt></ruby>らしかったです。<br>→ 뮤지컬 무대가 훌륭했습니다."
    ],
    stepup:
      "<ruby>本日<rt>ほんじつ</rt></ruby>の<ruby>公演<rt>こうえん</rt></ruby>は<ruby>六<rt>ろく</rt></ruby><ruby>時<rt>じ</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>まります。<br>→ 오늘 공연은 6시에 시작합니다.",
    summary:
      "콘서트는 ステージ / 연극·뮤지컬은 舞台"
  }

];

window.masterExplainDB = masterExplainDB;

})();
