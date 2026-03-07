(function () {

const masterExplainDB = [
  {
    "category": "경어와 톤",
    "title": "〜てあげる의 뉘앙스",
    "wrong": "다음 곡을 들려 드리겠습니다.<br>✖ <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてあげます。<br>〇 <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>をお<ruby>聞<rt>き</rt></ruby>かせします。",
    "why": "〜てあげる는 ‘내가 해 준다’가 앞에 있는 표현입니다. 그래서 무대에서 청중 전체에게 쓰면 ‘내가 너희에게 해 준다’ 같은 느낌이 섞여 들릴 수 있습니다. 안내 문장에서는 관계를 앞세우지 않는 표현이 더 안전합니다.",
    "fix": [
      "それでは、<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>をお<ruby>聞<rt>き</rt></ruby>かせします。<br>→ 그럼 다음 곡 들려드리겠습니다.",
      "では、<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>です。<ruby>聞<rt>き</rt></ruby>いてください。<br>→ 그럼 다음 곡입니다. 들어 주세요."
    ],
    "stepup": "・お<ruby>送<rt>おく</rt></ruby>りします。→ 전해드리겠습니다.<br>・お<ruby>見<rt>み</rt></ruby>せします。→ 보여 드리겠습니다.<br>・ご<ruby>紹介<rt>しょうかい</rt></ruby>します。→ 소개해 드리겠습니다.<br>・ご<ruby>覧<rt>らん</rt></ruby>ください。→ 봐 주세요.<br>・お<ruby>聞<rt>き</rt></ruby>きください。→ 들어 주세요.<br>・お<ruby>楽<rt>たの</rt></ruby>しみください。→ 즐겨 주세요.",
    "summary": "공손한 진행 멘트에는 お/ご + します가 적합합니다. 〜てあげる는 반말이 될 수 있으니 주의하세요."
  },
  {
    "category": "경어와 톤",
    "title": "見せてください가 어색한 이유",
    "wrong": "(무대에서) 다음 문제 부탁드립니다.<br>✖ <ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。<br>〇 <ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。",
    "why": "見せてください는 ‘나에게 보여 달라’ 쪽으로 뜻이 잡히기 쉬운 표현입니다. 무대에서는 스태프에게 진행을 요청하거나, 청중에게 화면을 보라고 안내하는 상황이 많아서 말의 목적이 달라집니다.",
    "fix": [
      "<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。<br>→ 다음 문제 부탁드립니다.",
      "スクリーンをご<ruby>覧<rt>らん</rt></ruby>ください。<br>→ 스크린을 봐 주세요."
    ],
    "stepup": "・スクリーンをご<ruby>覧<rt>らん</rt></ruby>ください。→ 스크린을 봐 주세요.<br>・<ruby>次<rt>つぎ</rt></ruby>のVTRを<ruby>見<rt>み</rt></ruby>てください。→ 다음 VTR을 봐 주세요.<br>・<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。→ 다음 문제 부탁드립니다.<br>・<ruby>資料<rt>しりょう</rt></ruby>をお<ruby>見<rt>み</rt></ruby>せします。→ 자료를 보여 드리겠습니다.",
    "summary": "스태프에게는 お願いします, 청중에게는 ご覧ください가 안전합니다."
  },
  {
    "category": "조사 사용",
    "title": "~中의 사용법",
    "wrong": "지금 보는 중입니다.<br>✖ <ruby>見<rt>み</rt></ruby>る<ruby>中<rt>ちゅう</rt></ruby>です。<br>〇 <ruby>見<rt>み</rt></ruby>ています。",
    "why": "中는 주로 한자 명사 뒤에서 ‘~중’처럼 쓰입니다. 동사 원형에 바로 붙이는 형태는 어색하게 들리기 쉽습니다.",
    "fix": [
      "<ruby>見<rt>み</rt></ruby>ています。<br>→ 보고 있습니다.",
      "<ruby>会議中<rt>かいぎちゅう</rt></ruby>です。<br>→ 회의 중입니다."
    ],
    "stepup": "・<ruby>会議中<rt>かいぎちゅう</rt></ruby>です。→ 회의 중입니다.<br>・<ruby>準備中<rt>じゅんびちゅう</rt></ruby>です。→ 준비 중입니다.<br>・<ruby>確認<rt>かくにん</rt></ruby>しています。→ 확인하고 있습니다.<br>・<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>気<rt>き</rt></ruby>づいた<ruby>点<rt>てん</rt></ruby>です。→ 작업하는 과정에서 알게 된 점입니다.",
    "summary": "한자 명사 + 中는 자연스럽고, 동사 원형 + 中는 어색해질 수 있습니다."
  },
  {
    "category": "조사 사용",
    "title": "で와 に의 차이",
    "wrong": "버스로 갑니다.<br>✖ バスに<ruby>行<rt>い</rt></ruby>きます。<br>〇 バスで<ruby>行<rt>い</rt></ruby>きます。",
    "why": "이동 수단은 ‘방법’이라 で를 쓰는 경우가 많습니다. 도착 지점은 に가 자연스럽습니다.",
    "fix": [
      "バスで<ruby>行<rt>い</rt></ruby>きます。<br>→ 버스로 갑니다.",
      "<ruby>駅<rt>えき</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。<br>→ 역에 갑니다."
    ],
    "stepup": "・タクシーで<ruby>行<rt>い</rt></ruby>きます。→ 택시로 갑니다.<br>・<ruby>会場<rt>かいじょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。→ 회장에 갑니다.<br>・<ruby>駅<rt>えき</rt></ruby>で<ruby>待<rt>ま</rt></ruby>ちます。→ 역에서 기다립니다.<br>・<ruby>客席<rt>きゃくせき</rt></ruby>にお<ruby>戻<rt>もど</rt></ruby>りください。→ 객석으로 돌아가 주세요.",
    "summary": "방법·장소는 で / 도착은 に"
  },
  {
    "category": "단어 선택",
    "title": "<ruby>全員<rt>ぜんいん</rt></ruby>과 <ruby>全部<rt>ぜんぶ</rt></ruby>",
    "wrong": "멤버 전부가 왔습니다.<br>✖ メンバー<ruby>全部<rt>ぜんぶ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。<br>〇 メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。",
    "why": "全部는 사물·내용 전체에 가깝고, 全員은 사람 전체에 씁니다.",
    "fix": [
      "メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。<br>→ 멤버 전원이 왔습니다.",
      "チケットは<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>売<rt>う</rt></ruby>れました。<br>→ 티켓이 전부 팔렸습니다."
    ],
    "stepup": "・<ruby>出演者<rt>しゅつえんしゃ</rt></ruby><ruby>全員<rt>ぜんいん</rt></ruby>がそろいました。→ 출연자 전원이 모였습니다.<br>・チケットは<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>完売<rt>かんばい</rt></ruby>しました。→ 티켓은 전부 매진되었습니다.<br>・ほとんどのメンバーが<ruby>来<rt>き</rt></ruby>ました。→ 멤버 대부분이 왔습니다.",
    "summary": "사람은 全員 / 사물은 全部 / 대부분은 ほとんど"
  },
  {
    "category": "단어 선택",
    "title": "<ruby>隣<rt>となり</rt></ruby>와 구역 표현",
    "wrong": "옆쪽도 가운데도 감사합니다.<br>✖ <ruby>隣<rt>となり</rt></ruby>も<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>もありがとうございます。<br>〇 サイドもセンターもありがとうございます。",
    "why": "隣는 개인 기준의 옆자리 느낌이 강합니다. 구역 호명에는 센터/오른쪽/왼쪽 같은 표현이 더 어울립니다.",
    "fix": [
      "センターの<ruby>方<rt>ほう</rt></ruby>もありがとうございます。<br>→ 센터 쪽도 감사합니다.",
      "<ruby>右<rt>みぎ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>もありがとうございます。<br>→ 오른쪽도 감사합니다."
    ],
    "stepup": "・<ruby>右側<rt>みぎがわ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>、ありがとうございます。→ 오른쪽도 감사합니다.<br><br>・ずっとそばにいます。→ 항상 곁에 있겠습니다.<br><br>・ずっと<ruby>僕<rt>ぼく</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>にいてください。→ 항상 제 곁에 있어주세요.",
    "summary": "구역은 センター/右左 / 개인 옆은 隣"
  }
];

window.masterExplainDB = masterExplainDB;

})();
