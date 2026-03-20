(function () {

  const masterExplainDB = [
    {
      "category": "경어와 톤",
      "title": "〜てあげる의 뉘앙스",
      "wrong": "다음 곡을 들려 드리겠습니다.<br>✖ <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてあげます。<br>〇 <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>をお<ruby>聞<rt>き</rt></ruby>かせします。",
      "why": "〜てあげる는 ‘내가 해 준다’는 느낌이 있어 상대에게 베푼다는 뉘앙스가 있습니다. 그래서 청중에게 공손하게 말할 때 쓰면 어색하게 들릴 수 있습니다. 반대로 친구나 동생 등, 친근한 사이(보통 손아랫사람)에게 쓸 때는 자연스럽습니다.",
      "fix": [
        "それでは、<ruby>最後<rt>さいご</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>をお<ruby>聞<rt>き</rt></ruby>かせします。<br>→ 그럼 마지막 곡 들려드리겠습니다.",
        "<ruby>続<rt>つづ</rt></ruby>いて、<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>です。<ruby>聞<rt>き</rt></ruby>いてください。<br>→ 이어서 다음 곡입니다. 들어 주세요."
      ],
      "stepup": "・<ruby>次<rt>つぎ</rt></ruby>は<ruby>、新曲<rt>しんきょく</rt></ruby>をお<ruby>聞<rt>き</rt></ruby>かせします。→ 다음은 신곡을 들려 드리겠습니다.<br>・<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>をお<ruby>聴<rt>き</rt></ruby>きください。→ 다음 곡을 들어 주세요.<br>・<ruby>皆<rt>みな</rt></ruby>さんにメッセージをお<ruby>届<rt>とど</rt></ruby>けします。→ 여러분께 메시지를 전해 드리겠습니다.<br>・ここでゲストをご<ruby>紹介<rt>しょうかい</rt></ruby>します。→ 여기서 게스트를 소개해 드리겠습니다.<br>・<ruby>振<rt>ふ</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けのコツを<ruby>教<rt>おし</rt></ruby>えてあげる。→ 안무 꿀팁을 알려 줄게.<br>・ずっとそばにいてあげる。→ 계속 곁에 있어 줄게.<br>・<ruby>僕<rt>ぼく</rt></ruby>が<ruby>元気<rt>げんき</rt></ruby>にしてあげる。→ 내가 기운 나게 해 줄게.",
      "summary": "공손한 진행 멘트에는 お/ご + します가 적합합니다. 〜てあげる는 존댓말로는 쓰지 않고, 반말로 쓰는 것이 자연스럽습니다."
    },
    {
      "category": "경어와 톤",
      "title": "見せてください가 어색한 이유",
      "wrong": "(무대에서) 다음 문제 부탁드립니다.<br>✖ <ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。<br>〇 <ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。",
      "why": "見せてください는 상대가 나에게 무언가를 직접 제시해서 보여주기를 바란다는 뉘앙스가 있습니다. 하지만 무대에서 “다음 문제 보여 주세요”라고 말하는 것은 실제로 무언가를 가져와서 보여 달라는 뜻이 아니라, 다음 화면이나 문제를 띄워 진행해 달라고 요청하는 상황입니다. 그래서 見せてください보다는 次の問題、お願いします처럼 진행을 부탁하는 표현이 더 잘 맞습니다.",
      "fix": [
        "<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お<ruby>願<rt>ねが</rt></ruby>いします。<br>→ 다음 문제 부탁드립니다.",
        "スクリーンをご<ruby>覧<rt>らん</rt></ruby>ください。<br>→ 스크린을 봐 주세요."
      ],
      "stepup": "・パスポートを<ruby>見<rt>み</rt></ruby>せてください。→ 여권을 보여 주세요.<br>・<ruby>見<rt>み</rt></ruby>せていただけますか。→ 보여 주실 수 있을까요?<br>・<ruby>次<rt>つぎ</rt></ruby>のコーナー、お<ruby>願<rt>ねが</rt></ruby>いします。→ 다음 코너 부탁드립니다.<br>・スクリーンをご<ruby>覧<rt>らん</rt></ruby>ください。→ 스크린을 봐 주세요.",
      "summary": "스태프에게 요청할 때에는 お願いします가 청중에게는 ご覧ください가 안전합니다."
    },
    {
      "category": "조사 사용",
      "title": "~中의 사용법",
      "wrong": "지금 보는 중입니다.<br>✖ <ruby>見<rt>み</rt></ruby>る<ruby>中<rt>ちゅう</rt></ruby>です。<br>〇 <ruby>見<rt>み</rt></ruby>ています。",
      "why": "한국어의 ‘~하는 중이다’라는 표현은 일본어에서는 見ています처럼 현재진행형인 〜ています로 쓰거나, '会議中', '準備中'처럼 한자어 명사+中의 형태로 쓰는 것이 자연스럽습니다.",
      "fix": [
        "いま<ruby>映像<rt>えいぞう</rt></ruby>を<ruby>見<rt>み</rt></ruby>ていますか。<br>→ 지금 영상 보는 중인가요?",
        "まだまだ<ruby>練習中<rt>れんしゅうちゅう</rt></ruby>です。<br>→ 아직 연습 중입니다."
      ],
      "stepup": "・ただいま<ruby>準備中<rt>じゅんびちゅう</rt></ruby>です。→ 지금 준비 중입니다.<br>・いま<ruby>何<rt>なに</rt></ruby>を<ruby>見<rt>み</rt></ruby>ていますか。→ 지금 무엇을 보는 중인가요?<br>・<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>中<rt>なか</rt></ruby>で<ruby>気<rt>き</rt></ruby>づきました。→ 공부하는 과정에서 알게 되었습니다.<br>・<ruby>今<rt>いま</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>めるところです。→ 지금 막 시작하려는 참입니다.",
      "summary": "‘~하는 중’은 〜ています로 말하거나, 会議中처럼 한자어 명사+中로 표현하면 자연스럽습니다."
    },
    {
      "category": "조사 사용",
      "title": "で와 に의 차이",
      "wrong": "버스로 갑니다.<br>✖ バスに<ruby>行<rt>い</rt></ruby>きます。<br>〇 バスで<ruby>行<rt>い</rt></ruby>きます。",
      "why": "한국어에서는 ‘버스로’, ‘학교로’ 등을 모두 ‘-로’로 쓰지만, 일본어에서는 버스나 전철처럼 이동하는 수단/방법일 때는 で, 가는 곳·방향·시점을 말할 때는 に를 씁니다.",
      "fix": [
        "バスで<ruby>行<rt>い</rt></ruby>きます。<br>→ 버스로 갑니다.",
        "<ruby>駅<rt>えき</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。<br>→ 역으로 갑니다."
      ],
      "stepup": "・<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。<br>→ 전철로 학교에 갑니다.<br><br>・<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がります。<br>→ 오른쪽으로 돕니다.<br><br>・<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>書<rt>か</rt></ruby>きます。<br>→ 일본어로 씁니다.<br><br>・7<ruby>時<rt>じ</rt></ruby>に<ruby>会<rt>あ</rt></ruby>います。<br>→ 7시에 만납니다.",
      "summary": "한국어의 ‘-로’는 일본어에서 수단·방법이면 で, 가는 곳·방향·시점이면 に로 나뉩니다."
    },
    {
      "category": "단어 선택",
      "title": "<ruby>全員<rt>ぜんいん</rt></ruby>과 <ruby>全部<rt>ぜんぶ</rt></ruby>",
      "wrong": "멤버 전부가 왔습니다.<br>✖ メンバー<ruby>全部<rt>ぜんぶ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。<br>〇 メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。",
      "why": "全員은 사람 전체를 말할 때 쓰고, 全部는 물건이나 내용 전체를 말할 때 씁니다. 멤버나 관객은 사람이므로 <ruby>全員<rt>ぜんいん</rt></ruby>이 더 자연스럽습니다.",
      "fix": [
        "メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。<br>→ 멤버 전원이 왔습니다.",
        "チケットは<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>売<rt>う</rt></ruby>れました。<br>→ 티켓이 전부 팔렸습니다."
      ],
      "stepup": "・<ruby>出演者<rt>しゅつえんしゃ</rt></ruby><ruby>全員<rt>ぜんいん</rt></ruby>がそろいました。<br>→ 출연자 전원이 모였습니다.<br><br>・<ruby>荷物<rt>にもつ</rt></ruby>は<ruby>全部<rt>ぜんぶ</rt></ruby>ここにあります。<br>→ 짐은 전부 여기에 있습니다.<br><br>・<ruby>書類<rt>しょるい</rt></ruby>は<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>出<rt>だ</rt></ruby>しました。<br>→ 서류는 전부 냈습니다.<br><br>・ほとんどのメンバーが<ruby>来<rt>き</rt></ruby>ました。<br>→ 멤버 대부분이 왔습니다.",
      "summary": "사람은 全員, 사물은 全部를 씁니다. '대부분'은 ほとんど、<ruby>大体<rt>だいたい</rt></ruby>라는 표현을 씁니다."
    },
    {
      "category": "단어 선택",
      "title": "<ruby>隣<rt>となり</rt></ruby>와 구역 표현",
      "wrong": "옆 쪽도 가운데도 고마워!<br>✖ <ruby>隣<rt>となり</rt></ruby>も<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>もありがとう！<br>〇 <ruby>左<rt>ひだり</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>も、<ruby>右<rt>みぎ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>もありがとう！",
      "why": "<ruby>隣<rt>となり</rt></ruby>는 '<ruby>隣<rt>となり</rt></ruby>の席', '私の<ruby>隣<rt>となり</rt></ruby>' 처럼 어떤 대상의 바로 옆을 가리킬 때 쓰는 말입니다. 하지만 콘서트에서 말하는 '옆 쪽'이나 '가운데'는 특정 대상의 옆이 아니라 좌석 구역을 의미합니다. 따라서 隣 대신 右, 左, 後ろ, 真ん中 같이 좌석 구역으로 말하는 것이 더 자연스럽습니다. ",
      "fix": [
        "センターの<ruby>方<rt>ほう</rt></ruby>もありがとうございます。<br>→ 센터 쪽도 감사합니다.",
        "サイドの<ruby>方<rt>ほう</rt></ruby>もありがとうございます。<br>→ 사이드 쪽도 감사합니다."
      ],
      "stepup": "・アリーナ<ruby>席<rt>せき</rt></ruby>のみんなもありがとう！<br>→ 아리나석 여러분도 고마워요!<br><br>・<ruby>後<rt>うし</rt></ruby>ろもちゃんと<ruby>見<rt>み</rt></ruby>えてるよ！<br>→ 뒤쪽도 잘 보이고 있어요!<br><br>・ずっとそばにいます。<br>→ 계속 곁에 있겠습니다.<br><br>・<ruby>僕<rt>ぼく</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>にいてください。<br>→ 제 옆에 있어 주세요.",
      "summary": "무대에서는 구역 이름으로 부르고, 무언가의 바로 옆자리를 말할 때는 隣를 씁니다."
    }
  ];

  window.masterExplainDB = masterExplainDB;

})();
