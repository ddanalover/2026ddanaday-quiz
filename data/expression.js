// data/expression.js  (별빛노트 - 표현 100문항)
// - export/import 없이 GitHub Pages에서 안정적으로 동작
// - window.masterDB.expression 에 퀴즈 엔진 스키마(q/o/a/e)로 저장

(function(){
// 별빛노트: 일본어 뽀개기
// 문제 (표현) - masterDB.expression (100문항)
// 분포: 조사18 / 자타14 / ~<ruby>中<rt>なか</rt></ruby>12 / あげる12 / 방향12 / 요청10 / 무대어휘12 / 중급뉘앙스10
// 규칙: 한자 루비 적용, 완전 오답 기반

const masterDB = {
  expression: [
    {
      tag: "(표현)",
      question: "친구를 만나고 싶어요.",
      options: ["<ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いたいです。", "<ruby>友達<rt>ともだち</rt></ruby>を<ruby>会<rt>あ</rt></ruby>いたいです。"],
      answer: 0,
      explanation: "「<ruby>会<rt>あ</rt></ruby>う」는 일본어에서 만나는 사람 앞에 「に」를 붙입니다. 한국어로는 ‘친구를 만나다’라서 「を」를 붙이고 싶어지지만 일본어에서는 「<ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>う」가 자연스럽습니다.<br>한 줄 비교: <ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>う(O) / <ruby>友達<rt>ともだち</rt></ruby>を<ruby>会<rt>あ</rt></ruby>う(X)"
    },
    {
      tag: "(표현)",
      question: "카페에서 공부해요.",
      options: ["カフェで<ruby>勉強<rt>べんきょう</rt></ruby>します。", "カフェに<ruby>勉強<rt>べんきょう</rt></ruby>します。"],
      answer: 0,
      explanation: "공부는 ‘어디에서 하는 행동’이라 장소 조사 「で」를 씁니다. 「に」를 쓰면 도착점 느낌이 나서 「カフェに<ruby>勉強<rt>べんきょう</rt></ruby>します」는 어색합니다.<br>한 줄 비교: カフェで<ruby>勉強<rt>べんきょう</rt></ruby>します(O) / カフェに<ruby>行<rt>い</rt></ruby>きます(O, 이동일 때)"
    },
    {
      tag: "(표현)",
      question: "버스로 갑니다.",
      options: ["バスで<ruby>行<rt>い</rt></ruby>きます。", "バスに<ruby>行<rt>い</rt></ruby>きます。"],
      answer: 0,
      explanation: "버스는 목적지가 아니라 이동 수단이기 때문에 「で」를 씁니다. 「に」는 도착할 장소에 붙이는 조사라 「バスに<ruby>行<rt>い</rt></ruby>きます」는 뜻이 틀어집니다.<br>한 줄 비교: <ruby>駅<rt>えき</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます(어디로) / バスで<ruby>行<rt>い</rt></ruby>きます(무엇으로)"
    },
    {
      tag: "(표현)",
      question: "일본어를 잘해요.",
      options: ["<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>です。", "<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>上手<rt>じょうず</rt></ruby>です。"],
      answer: 0,
      explanation: "「<ruby>上手<rt>じょうず</rt></ruby>です」는 능력·상태를 말할 때 「が」와 함께 쓰는 패턴입니다. 그래서 「<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>上手<rt>じょうず</rt></ruby>です」처럼 「を」를 붙이면 일본어에서는 연결이 어색합니다.<br>한 줄 비교: <ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>です(O) / <ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します(O, 행동일 때)"
    },
    {
      tag: "(표현)",
      question: "비가 와요.",
      options: ["<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています。", "<ruby>雨<rt>あめ</rt></ruby>を<ruby>降<rt>ふ</rt></ruby>っています。"],
      answer: 0,
      explanation: "비는 내가 대상으로 처리하는 게 아니라 자연현상으로 일어나는 일이어서 「が」를 씁니다. 그래서 「<ruby>雨<rt>あめ</rt></ruby>を<ruby>降<rt>ふ</rt></ruby>っています」는 일본어에서 맞지 않습니다.<br>한 줄 비교: <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています(O) / <ruby>雨<rt>あめ</rt></ruby>を<ruby>避<rt>さ</rt></ruby>けます(O, 목적어가 있을 때)"
    },
    {
      tag: "(표현)",
      question: "친구를 기다려요.",
      options: ["<ruby>友達<rt>ともだち</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちます。", "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>待<rt>ま</rt></ruby>ちます。"],
      answer: 0,
      explanation: "「<ruby>待<rt>ま</rt></ruby>つ」는 기다리는 대상을 「を」로 받습니다. 사람이 나와도 「に」가 아니라 「を」를 쓴다는 점이 핵심입니다.<br>한 줄 비교: <ruby>友達<rt>ともだち</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちます(O) / <ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>います(O, 동사가 바뀌면 조사도 바뀜)"
    },
    {
      tag: "(표현)",
      question: "학교에 갑니다.",
      options: ["<ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。", "<ruby>学校<rt>がっこう</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます。"],
      answer: 0,
      explanation: "「<ruby>行<rt>い</rt></ruby>く」는 어디로 가는지 말하는 동사라 목적지에 「に」를 붙입니다. 「で」는 그 장소에서 행동할 때 쓰기 때문에 「<ruby>学校<rt>がっこう</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます」는 어색합니다.<br>한 줄 비교: <ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます(O) / <ruby>学校<rt>がっこう</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます(X)"
    },
    {
      tag: "(표현)",
      question: "집에서 일해요.",
      options: ["<ruby>家<rt>いえ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>きます。", "<ruby>家<rt>いえ</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>きます。"],
      answer: 0,
      explanation: "일하는 건 장소에서 일어나는 행동이라 「で」를 씁니다. 「に」는 이동 목적지를 가리킬 때 자연스럽기 때문에 「<ruby>家<rt>いえ</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>きます」는 어색합니다.<br>한 줄 비교: <ruby>家<rt>いえ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>きます(O) / <ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ります(O, 이동일 때)"
    },
    {
      tag: "(표현)",
      question: "전철을 타요.",
      options: ["<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります。", "<ruby>電車<rt>でんしゃ</rt></ruby>を<ruby>乗<rt>の</rt></ruby>ります。"],
      answer: 0,
      explanation: "「<ruby>乗<rt>の</rt></ruby>る」는 일본어에서 탈것과 함께 「に」를 쓰는 패턴입니다. 한국어 느낌대로 「を」를 붙이면 일본어 화자에게는 어색하게 들립니다.<br>한 줄 비교: <ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります(O) / <ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります(O, 「を」는 이런 동사에서)"
    },
    {
      tag: "(표현)",
      question: "버스터미널에 갑니다.",
      options: ["バスターミナルに<ruby>行<rt>い</rt></ruby>きます。", "バスターミナルで<ruby>行<rt>い</rt></ruby>きます。"],
      answer: 0,
      explanation: "버스터미널은 도착할 장소이므로 「に」를 씁니다. 「で」는 그 장소에서 어떤 행동을 할 때 자연스럽기 때문에 「バスターミナルで<ruby>行<rt>い</rt></ruby>きます」는 어색합니다.<br>한 줄 비교: バスターミナルに<ruby>行<rt>い</rt></ruby>きます(O) / バスターミナルで<ruby>行<rt>い</rt></ruby>きます(X)"
    },
    {
      tag: "(표현)",
      question: "사진을 찍어 주세요.",
      options: ["<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってください。", "<ruby>写真<rt>しゃしん</rt></ruby>に<ruby>撮<rt>と</rt></ruby>ってください。"],
      answer: 0,
      explanation: "「<ruby>撮<rt>と</rt></ruby>る」는 찍는 대상을 「を」로 받기 때문에 「<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってください」가 자연스럽습니다. 「<ruby>写真<rt>しゃしん</rt></ruby>に<ruby>撮<rt>と</rt></ruby>ってください」는 조사 선택이 틀어져서 일본어 화자에게 어색하게 들립니다.<br>한 줄 비교: <ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってください(O) / <ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます(O, 「に」는 목적지)"
    },
    {
      tag: "(표현)",
      question: "지도를 보여 주세요.",
      options: ["<ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。", "<ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>てください。"],
      answer: 0,
      explanation: "상대에게 ‘보여 달라’는 말은 「<ruby>見<rt>み</rt></ruby>せてください」를 씁니다. 「<ruby>見<rt>み</rt></ruby>てください」는 ‘봐 주세요’라서 방향이 다릅니다.<br>한 줄 비교: <ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください(O) / スクリーンを<ruby>見<rt>み</rt></ruby>てください(O, 보기 요청)"
    },
    {
      tag: "(표현)",
      question: "멤버 전원이 왔어요.",
      options: ["メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。", "メンバー<ruby>全部<rt>ぜんぶ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。"],
      answer: 0,
      explanation: "사람 전체를 말할 때는 「<ruby>全員<rt>ぜんいん</rt></ruby>」이 자연스럽고, 「<ruby>全部<rt>ぜんぶ</rt></ruby>」는 물건이나 내용 전체에 더 잘 맞습니다.<br>한 줄 비교: メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました(O) / チケットは<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>売<rt>う</rt></ruby>れました(O)"
    },
    {
      tag: "(표현)",
      question: "티켓은 이제 전부 매진됐어요.",
      options: ["チケットはもう<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れです。", "チケットはもう<ruby>全員<rt>ぜんいん</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れです。"],
      answer: 0,
      explanation: "티켓처럼 사물 전체를 말할 때는 「<ruby>全部<rt>ぜんぶ</rt></ruby>」를 씁니다. 「<ruby>全員<rt>ぜんいん</rt></ruby>」은 사람 집합에 쓰는 말이라 이 문장에서는 맞지 않습니다.<br>한 줄 비교: チケットはもう<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れです(O) / メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました(O)"
    },
    {
      tag: "(표현)",
      question: "오른쪽도 가운데도 와 줘서 고마워요!",
      options: ["サイドも<ruby>真ん中<rt>まんなか</rt></ruby>も<ruby>来<rt>き</rt></ruby>てくれてありがとう！", "<ruby>隣<rt>となり</rt></ruby>も<ruby>真ん中<rt>まんなか</rt></ruby>も<ruby>来<rt>き</rt></ruby>てくれてありがとう！"],
      answer: 0,
      explanation: "공연 구역을 부를 때는 「サイド / <ruby>真ん中<rt>まんなか</rt></ruby> / <ruby>右<rt>みぎ</rt></ruby> / <ruby>左<rt>ひだり</rt></ruby>」처럼 위치 이름을 씁니다. 「<ruby>隣<rt>となり</rt></ruby>」는 구역명이 아니라 ‘누군가의 옆’이라는 사람 기준 표현이라 이 문맥에서는 맞지 않습니다.<br>한 줄 비교: サイドも<ruby>真ん中<rt>まんなか</rt></ruby>も<ruby>来<rt>き</rt></ruby>てくれてありがとう(O) / <ruby>私<rt>わたし</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>来<rt>き</rt></ruby>てくれてありがとう(O, 개인 위치)"
    },
    {
      tag: "(표현)",
      question: "제 오른쪽에 서 주세요.",
      options: ["<ruby>私<rt>わたし</rt></ruby>の<ruby>右<rt>みぎ</rt></ruby>に<ruby>立<rt>た</rt></ruby>ってください。", "<ruby>私<rt>わたし</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>立<rt>た</rt></ruby>ってください。"],
      answer: 0,
      explanation: "방향을 정확히 지정할 때는 「<ruby>右<rt>みぎ</rt></ruby> / <ruby>左<rt>ひだり</rt></ruby>」가 필요합니다. 「<ruby>隣<rt>となり</rt></ruby>」는 방향 정보 없이 ‘옆’만 말하므로 지시가 덜 정확합니다.<br>한 줄 비교: <ruby>私<rt>わたし</rt></ruby>の<ruby>右<rt>みぎ</rt></ruby>に<ruby>立<rt>た</rt></ruby>ってください(O) / <ruby>私<rt>わたし</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>座<rt>すわ</rt></ruby>ってください(O, 옆자리 요청)"
    },
    {
      tag: "(표현)",
      question: "항상 제 곁에 있어 주세요.",
      options: ["そばにいてください。", "<ruby>右<rt>みぎ</rt></ruby>にいてください。"],
      answer: 0,
      explanation: "‘곁에’라는 의미는 「そば」가 가장 자연스럽습니다. 「<ruby>右<rt>みぎ</rt></ruby>にいてください」는 ‘오른쪽에 있어 달라’는 공간 지시라 감정 뉘앙스가 달라집니다.<br>한 줄 비교: そばにいてください(O) / <ruby>右<rt>みぎ</rt></ruby>に<ruby>立<rt>た</rt></ruby>ってください(O, 방향 지시)"
    },
    {
      tag: "(표현)",
      question: "지금 공부 중이에요.",
      options: ["<ruby>勉強中<rt>べんきょうちゅう</rt></ruby>です。", "<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>中<rt>ちゅう</rt></ruby>です。"],
      answer: 0,
      explanation: "지금 공부 중이라는 상태는 「<ruby>勉強中<rt>べんきょうちゅう</rt></ruby>です」가 자연스럽습니다. 「<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>中<rt>なか</rt></ruby>です」는 일본어에서 어색합니다.<br>한 줄 비교: <ruby>勉強中<rt>べんきょうちゅう</rt></ruby>です(O) / <ruby>勉強<rt>べんきょう</rt></ruby>しています(O)"
    },
    {
      tag: "(표현)",
      question: "문이 닫혔어요.",
      options: ["ドアが<ruby>閉<rt>し</rt></ruby>まりました。", "ドアを<ruby>閉<rt>し</rt></ruby>まりました。"],
      answer: 0,
      explanation: "문이 저절로 닫힌 상태를 말할 때는 「ドアが<ruby>閉<rt>し</rt></ruby>まりました」를 씁니다. 「ドアを<ruby>閉<rt>し</rt></ruby>まりました」는 ‘문을’과 ‘닫히다’가 섞여서 어색합니다.<br>한 줄 비교: ドアが<ruby>閉<rt>し</rt></ruby>まりました(O) / ドアを<ruby>閉<rt>し</rt></ruby>めました(O, 내가 닫았을 때)"
    },
    {
      tag: "(표현)",
      question: "가게를 닫았어요.",
      options: ["<ruby>店<rt>みせ</rt></ruby>を<ruby>閉<rt>し</rt></ruby>めました。", "<ruby>店<rt>みせ</rt></ruby>が<ruby>閉<rt>し</rt></ruby>めました。"],
      answer: 0,
      explanation: "내가 가게를 닫았다고 말할 때는 「<ruby>店<rt>みせ</rt></ruby>を<ruby>閉<rt>し</rt></ruby>めました」가 맞습니다. 「<ruby>店<rt>みせ</rt></ruby>が<ruby>閉<rt>し</rt></ruby>めました」는 가게가 행동한 것처럼 들려 어색합니다.<br>한 줄 비교: <ruby>店<rt>みせ</rt></ruby>を<ruby>閉<rt>し</rt></ruby>めました(O) / <ruby>店<rt>みせ</rt></ruby>が<ruby>閉<rt>し</rt></ruby>まりました(O, 상태 설명)"
    },
    {
      tag: "(표현)",
      question: "창문이 열렸어요.",
      options: ["<ruby>窓<rt>まど</rt></ruby>が<ruby>開<rt>あ</rt></ruby>きました。", "<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>きました。"],
      answer: 0,
      explanation: "창문이 저절로 열린 상태는 「<ruby>窓<rt>まど</rt></ruby>が<ruby>開<rt>あ</rt></ruby>きました」가 자연스럽습니다. 「<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>きました」는 자동사와 타동사가 섞인 형태라 어색합니다.<br>한 줄 비교: <ruby>窓<rt>まど</rt></ruby>が<ruby>開<rt>あ</rt></ruby>きました(O) / <ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けました(O, 내가 열었을 때)"
    },
    {
      tag: "(표현)",
      question: "가방을 열었어요.",
      options: ["かばんを<ruby>開<rt>あ</rt></ruby>けました。", "かばんが<ruby>開<rt>あ</rt></ruby>けました。"],
      answer: 0,
      explanation: "내가 가방을 연 행동을 말할 때는 「かばんを<ruby>開<rt>あ</rt></ruby>けました」를 씁니다. 「かばんが<ruby>開<rt>あ</rt></ruby>けました」는 가방이 스스로 연 것처럼 들려 어색합니다.<br>한 줄 비교: かばんを<ruby>開<rt>あ</rt></ruby>けました(O) / かばんが<ruby>開<rt>あ</rt></ruby>きました(O, 상태 설명)"
    },
    {
      tag: "(표현)",
      question: "에어컨이 고장 났어요.",
      options: ["エアコンが<ruby>壊<rt>こわ</rt></ruby>れました。", "エアコンを<ruby>壊<rt>こわ</rt></ruby>れました。"],
      answer: 0,
      explanation: "고장 난 상태를 말할 때는 에어컨이 주어가 되어 「エアコンが<ruby>壊<rt>こわ</rt></ruby>れました」를 씁니다. 「エアコンを<ruby>壊<rt>こわ</rt></ruby>れました」는 형태가 섞여 어색합니다.<br>한 줄 비교: エアコンが<ruby>壊<rt>こわ</rt></ruby>れました(O) / エアコンを<ruby>壊<rt>こわ</rt></ruby>しました(O, 내가 고장 냈을 때)"
    },
    {
      tag: "(표현)",
      question: "제가 컵을 깨뜨렸어요.",
      options: ["コップを<ruby>壊<rt>こわ</rt></ruby>しました。", "コップが<ruby>壊<rt>こわ</rt></ruby>しました。"],
      answer: 0,
      explanation: "내가 컵을 깨뜨린 행동이라면 「コップを<ruby>壊<rt>こわ</rt></ruby>しました」가 맞습니다. 「コップが<ruby>壊<rt>こわ</rt></ruby>しました」는 컵이 행동한 것처럼 들려 어색합니다.<br>한 줄 비교: コップを<ruby>壊<rt>こわ</rt></ruby>しました(O) / コップが<ruby>壊<rt>こわ</rt></ruby>れました(O, 상태 설명)"
    },
    {
      tag: "(표현)",
      question: "회의가 시작됐어요.",
      options: ["<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まりました。", "<ruby>会議<rt>かいぎ</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>まりました。"],
      answer: 0,
      explanation: "회의가 시작된 상태를 말하면 「<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まりました」가 자연스럽습니다. 「<ruby>会議<rt>かいぎ</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>まりました」는 ‘회의를’와 ‘시작되다’가 섞여 어색합니다.<br>한 줄 비교: <ruby>会議<rt>かいぎ</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まりました(O) / <ruby>会議<rt>かいぎ</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めました(O, 내가 시작했을 때)"
    },
    {
      tag: "(표현)",
      question: "행사를 시작했어요.",
      options: ["イベントを<ruby>始<rt>はじ</rt></ruby>めました。", "イベントが<ruby>始<rt>はじ</rt></ruby>めました。"],
      answer: 0,
      explanation: "내가 행사를 시작한 상황이라면 「イベントを<ruby>始<rt>はじ</rt></ruby>めました」를 씁니다. 「イベントが<ruby>始<rt>はじ</rt></ruby>めました」는 행사가 행동한 것처럼 들려 어색합니다.<br>한 줄 비교: イベントを<ruby>始<rt>はじ</rt></ruby>めました(O) / イベントが<ruby>始<rt>はじ</rt></ruby>まりました(O, 상태 설명)"
    },
    {
      tag: "(표현)",
      question: "차가 멈췄어요.",
      options: ["<ruby>車<rt>くるま</rt></ruby>が<ruby>止<rt>と</rt></ruby>まりました。", "<ruby>車<rt>くるま</rt></ruby>を<ruby>止<rt>と</rt></ruby>まりました。"],
      answer: 0,
      explanation: "차가 멈춘 상태를 말할 때는 「<ruby>車<rt>くるま</rt></ruby>が<ruby>止<rt>と</rt></ruby>まりました」가 맞습니다. 「<ruby>車<rt>くるま</rt></ruby>を<ruby>止<rt>と</rt></ruby>まりました」는 ‘차를’와 ‘멈추다’를 섞어 어색합니다.<br>한 줄 비교: <ruby>車<rt>くるま</rt></ruby>が<ruby>止<rt>と</rt></ruby>まりました(O) / <ruby>車<rt>くるま</rt></ruby>を<ruby>止<rt>と</rt></ruby>めました(O, 내가 세웠을 때)"
    },
    {
      tag: "(표현)",
      question: "음악을 멈췄어요.",
      options: ["<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>止<rt>と</rt></ruby>めました。", "<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>止<rt>と</rt></ruby>めました。"],
      answer: 0,
      explanation: "내가 음악을 멈춘 행동이면 「<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>止<rt>と</rt></ruby>めました」를 씁니다. 「<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>止<rt>と</rt></ruby>めました」는 음악이 행동한 것처럼 들려 어색합니다.<br>한 줄 비교: <ruby>音楽<rt>おんがく</rt></ruby>を<ruby>止<rt>と</rt></ruby>めました(O) / <ruby>音楽<rt>おんがく</rt></ruby>が<ruby>止<rt>と</rt></ruby>まりました(O, 상태 설명)"
    },
    {
      tag: "(표현)",
      question: "불이 꺼졌어요.",
      options: ["<ruby>電気<rt>でんき</rt></ruby>が<ruby>消<rt>き</rt></ruby>えました。", "<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>き</rt></ruby>えました。"],
      answer: 0,
      explanation: "불이 꺼진 상태를 말할 때는 「<ruby>電気<rt>でんき</rt></ruby>が<ruby>消<rt>き</rt></ruby>えました」가 자연스럽습니다. 「<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>き</rt></ruby>えました」는 ‘전기를’와 ‘꺼지다’를 섞어서 어색합니다.<br>한 줄 비교: <ruby>電気<rt>でんき</rt></ruby>が<ruby>消<rt>き</rt></ruby>えました(O) / <ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>き</rt></ruby>しました(O, 내가 껐을 때)"
    },
    {
      tag: "(표현)",
      question: "알람을 껐어요.",
      options: ["アラームを<ruby>消<rt>き</rt></ruby>しました。", "アラームが<ruby>消<rt>き</rt></ruby>しました。"],
      answer: 0,
      explanation: "내가 알람을 끈 행동이라면 「アラームを<ruby>消<rt>き</rt></ruby>しました」가 맞습니다. 「アラームが<ruby>消<rt>き</rt></ruby>しました」는 알람이 행동한 것처럼 들려 어색합니다.<br>한 줄 비교: アラームを<ruby>消<rt>き</rt></ruby>しました(O) / アラームが<ruby>消<rt>き</rt></ruby>えました(O, 상태 설명)"
    },
    {
      tag: "(표현)",
      question: "휴대폰이 떨어졌어요.",
      options: ["<ruby>携帯<rt>けいたい</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちました。", "<ruby>携帯<rt>けいたい</rt></ruby>を<ruby>落<rt>お</rt></ruby>ちました。"],
      answer: 0,
      explanation: "휴대폰이 떨어진 상태는 「<ruby>携帯<rt>けいたい</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちました」로 말합니다. 「<ruby>携帯<rt>けいたい</rt></ruby>を<ruby>落<rt>お</rt></ruby>ちました」는 ‘휴대폰을’과 ‘떨어지다’를 섞어서 어색합니다.<br>한 줄 비교: <ruby>携帯<rt>けいたい</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちました(O) / <ruby>携帯<rt>けいたい</rt></ruby>を<ruby>落<rt>お</rt></ruby>としました(O, 내가 떨어뜨렸을 때)"
    },
    {
      tag: "(표현)",
      question: "제가 열쇠를 떨어뜨렸어요.",
      options: ["<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>落<rt>お</rt></ruby>としました。", "<ruby>鍵<rt>かぎ</rt></ruby>が<ruby>落<rt>お</rt></ruby>としました。"],
      answer: 0,
      explanation: "내가 열쇠를 떨어뜨린 행동은 「<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>落<rt>お</rt></ruby>としました」가 맞습니다. 「<ruby>鍵<rt>かぎ</rt></ruby>が<ruby>落<rt>お</rt></ruby>としました」는 열쇠가 행동한 것처럼 들려 어색합니다.<br>한 줄 비교: <ruby>鍵<rt>かぎ</rt></ruby>を<ruby>落<rt>お</rt></ruby>としました(O) / <ruby>鍵<rt>かぎ</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちました(O, 상태 설명)"
    },
    {
      tag: "(표현)",
      question: "지금 이동 중이에요.",
      options: ["<ruby>移動中<rt>いどうちゅう</rt></ruby>です。", "<ruby>移動<rt>いどう</rt></ruby>する<ruby>中<rt>ちゅう</rt></ruby>です。"],
      answer: 0,
      explanation: "지금 이동 중이라는 상태는 「<ruby>移動中<rt>いどうちゅう</rt></ruby>です」가 자연스럽습니다. 「<ruby>移動<rt>いどう</rt></ruby>する<ruby>中<rt>なか</rt></ruby>です」는 일본어에서 어색합니다.<br>한 줄 비교: <ruby>移動中<rt>いどうちゅう</rt></ruby>です(O) / <ruby>移動<rt>いどう</rt></ruby>しています(O)"
    },
    {
      tag: "(표현)",
      question: "이어서 다음 코너를 진행해 드리겠습니다.",
      options: ["<ruby>次<rt>つぎ</rt></ruby>のコーナーをお<ruby>届<rt>とど</rt></ruby>けします。", "<ruby>次<rt>つぎ</rt></ruby>のコーナーを<ruby>届<rt>とど</rt></ruby>けてください。"],
      answer: 0,
      explanation: "무대에서 다음 순서를 공손하게 전할 때는 「お<ruby>届<rt>とど</rt></ruby>けします」가 자연스럽습니다. 「<ruby>届<rt>とど</rt></ruby>けてください」는 상대에게 부탁하는 말이라 말의 방향이 반대입니다.<br>한 줄 비교: このあと<ruby>新曲<rt>しんきょく</rt></ruby>をお<ruby>届<rt>とど</rt></ruby>けします(O) / このあと<ruby>新曲<rt>しんきょく</rt></ruby>を<ruby>届<rt>とど</rt></ruby>けてください(X)"
    },
    {
      tag: "(표현)",
      question: "지금 화면 자료를 보여 드리겠습니다.",
      options: ["いま、<ruby>資料<rt>しりょう</rt></ruby>をお<ruby>見<rt>み</rt></ruby>せします。", "いま、<ruby>資料<rt>しりょう</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。"],
      answer: 0,
      explanation: "진행자가 직접 보여 주는 상황은 「お<ruby>見<rt>み</rt></ruby>せします」가 맞습니다. 「<ruby>見<rt>み</rt></ruby>せてください」는 상대에게 보여 달라는 요청이라 화자 역할이 바뀝니다.<br>한 줄 비교: <ruby>次<rt>つぎ</rt></ruby>は<ruby>特別<rt>とくべつ</rt></ruby>ステージをお<ruby>見<rt>み</rt></ruby>せします(O) / <ruby>次<rt>つぎ</rt></ruby>は<ruby>特別<rt>とくべつ</rt></ruby>ステージを<ruby>見<rt>み</rt></ruby>せてください(X)"
    },
    {
      tag: "(표현)",
      question: "다음은 밴드 멤버를 소개하겠습니다.",
      options: ["ここでバンドメンバーをご<ruby>紹介<rt>しょうかい</rt></ruby>します。", "バンドメンバーを<ruby>紹介<rt>しょうかい</rt></ruby>してください。"],
      answer: 0,
      explanation: "무대 진행 멘트에서 소개를 이어갈 때는 「ご<ruby>紹介<rt>しょうかい</rt></ruby>します」가 자연스럽습니다. 「<ruby>紹介<rt>しょうかい</rt></ruby>してください」는 상대에게 부탁하는 문장이라 문맥이 맞지 않습니다.<br>한 줄 비교: ここでバンドメンバーをご<ruby>紹介<rt>しょうかい</rt></ruby>します(O) / バンドメンバーを<ruby>紹介<rt>しょうかい</rt></ruby>してください(X)"
    },
    {
      tag: "(표현)",
      question: "화면을 봐 주세요.",
      options: ["この<ruby>映像<rt>えいぞう</rt></ruby>をご<ruby>覧<rt>らん</rt></ruby>ください。", "この<ruby>映像<rt>えいぞう</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。"],
      answer: 0,
      explanation: "청중에게 시청을 안내할 때는 「ご<ruby>覧<rt>らん</rt></ruby>ください」가 자연스럽습니다. 「<ruby>見<rt>み</rt></ruby>せてください」는 ‘보여 달라’는 요청이라 방향이 다릅니다.<br>한 줄 비교: この<ruby>映像<rt>えいぞう</rt></ruby>をご<ruby>覧<rt>らん</rt></ruby>ください(O) / この<ruby>映像<rt>えいぞう</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください(X)"
    },
    {
      tag: "(표현)",
      question: "다음 프레이즈를 잘 들어 주세요.",
      options: ["<ruby>次<rt>つぎ</rt></ruby>のフレーズをよくお<ruby>聞<rt>き</rt></ruby>きください。", "<ruby>次<rt>つぎ</rt></ruby>のフレーズをよく<ruby>聞<rt>き</rt></ruby>かせてください。"],
      answer: 0,
      explanation: "청중에게 듣기를 요청할 때는 「お<ruby>聞<rt>き</rt></ruby>きください」가 맞습니다. 「<ruby>聞<rt>き</rt></ruby>かせてください」는 ‘들려 달라’는 뜻이라 의미 방향이 다릅니다.<br>한 줄 비교: <ruby>次<rt>つぎ</rt></ruby>のフレーズをよくお<ruby>聞<rt>き</rt></ruby>きください(O) / <ruby>次<rt>つぎ</rt></ruby>のフレーズをよく<ruby>聞<rt>き</rt></ruby>かせてください(X)"
    },
    {
      tag: "(표현)",
      question: "지금 일하는 중이에요.",
      options: ["<ruby>仕事中<rt>しごとちゅう</rt></ruby>です。", "<ruby>仕事<rt>しごと</rt></ruby>する<ruby>中<rt>ちゅう</rt></ruby>です。"],
      answer: 0,
      explanation: "지금 일하는 상태는 「<ruby>仕事中<rt>しごとちゅう</rt></ruby>です」가 자연스럽습니다. 「<ruby>仕事<rt>しごと</rt></ruby>する<ruby>中<rt>なか</rt></ruby>です」는 일본어에서 어색합니다.<br>한 줄 비교: <ruby>仕事中<rt>しごとちゅう</rt></ruby>です(O) / <ruby>仕事<rt>しごと</rt></ruby>しています(O)"
    },
    {
      tag: "(표현)",
      question: "지금 연습 중이에요.",
      options: ["<ruby>練習中<rt>れんしゅうちゅう</rt></ruby>です。", "<ruby>練習<rt>れんしゅう</rt></ruby>する<ruby>中<rt>ちゅう</rt></ruby>です。"],
      answer: 0,
      explanation: "지금 연습 중이라는 상태는 「<ruby>練習中<rt>れんしゅうちゅう</rt></ruby>です」가 자연스럽습니다. 「<ruby>練習<rt>れんしゅう</rt></ruby>する<ruby>中<rt>なか</rt></ruby>です」는 일본어에서 어색합니다.<br>한 줄 비교: <ruby>練習中<rt>れんしゅうちゅう</rt></ruby>です(O) / <ruby>練習<rt>れんしゅう</rt></ruby>しています(O)"
    },
    {
      tag: "(표현)",
      question: "지금 보는 중이에요.",
      options: ["いま<ruby>見<rt>み</rt></ruby>ています。", "いま<ruby>見<rt>み</rt></ruby>る<ruby>中<rt>ちゅう</rt></ruby>です。"],
      answer: 0,
      explanation: "지금 보고 있는 진행 상태는 「いま<ruby>見<rt>み</rt></ruby>ています」가 자연스럽습니다. 「いま<ruby>見<rt>み</rt></ruby>る<ruby>中<rt>なか</rt></ruby>です」는 일본어에서 어색합니다.<br>한 줄 비교: いま<ruby>見<rt>み</rt></ruby>ています(O) / いま<ruby>見<rt>み</rt></ruby>る<ruby>中<rt>なか</rt></ruby>です(X)"
    },
    {
      tag: "(표현)",
      question: "지금 기다리는 중이에요.",
      options: ["いま<ruby>待<rt>ま</rt></ruby>っています。", "いま<ruby>待<rt>ま</rt></ruby>つ<ruby>中<rt>ちゅう</rt></ruby>です。"],
      answer: 0,
      explanation: "지금 기다리는 진행 상태는 「いま<ruby>待<rt>ま</rt></ruby>っています」가 자연스럽습니다. 「いま<ruby>待<rt>ま</rt></ruby>つ<ruby>中<rt>なか</rt></ruby>です」는 일본어에서 어색합니다.<br>한 줄 비교: いま<ruby>待<rt>ま</rt></ruby>っています(O) / いま<ruby>待<rt>ま</rt></ruby>つ<ruby>中<rt>なか</rt></ruby>です(X)"
    },
    {
      tag: "(표현)",
      question: "마지막까지 라이브를 즐겨 주세요.",
      options: ["<ruby>最後<rt>さいご</rt></ruby>までライブをお<ruby>楽<rt>たの</rt></ruby>しみください。", "<ruby>最後<rt>さいご</rt></ruby>までライブを<ruby>楽<rt>たの</rt></ruby>しませてください。"],
      answer: 0,
      explanation: "공손한 안내 멘트에서는 「お<ruby>楽<rt>たの</rt></ruby>しみください」가 자연스럽습니다. 「<ruby>楽<rt>たの</rt></ruby>しませてください」는 ‘나를 즐겁게 해 달라’는 뜻으로 바뀌어 어색합니다.<br>한 줄 비교: <ruby>最後<rt>さいご</rt></ruby>までライブをお<ruby>楽<rt>たの</rt></ruby>しみください(O) / <ruby>最後<rt>さいご</rt></ruby>までライブを<ruby>楽<rt>たの</rt></ruby>しませてください(X)"
    },
    {
      tag: "(표현)",
      question: "다 같이 즐겨 주세요!",
      options: ["<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しんでください。", "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しませてください。"],
      answer: 0,
      explanation: "현장 멘트에서 함께 호흡할 때는 「<ruby>楽<rt>たの</rt></ruby>しんでください」가 자연스럽습니다. 「<ruby>楽<rt>たの</rt></ruby>しませてください」는 의미 방향이 달라 어색합니다.<br>한 줄 비교: <ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しんでください(O) / <ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しませてください(X)"
    },
    {
      tag: "(표현)",
      question: "지금 밥 먹는 중이에요.",
      options: ["いま<ruby>食事中<rt>しょくじちゅう</rt></ruby>です。", "いまご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べる<ruby>中<rt>ちゅう</rt></ruby>です。"],
      answer: 0,
      explanation: "지금 식사 중이라는 상태는 「いま<ruby>食事中<rt>しょくじちゅう</rt></ruby>です」가 자연스럽습니다. 「いまご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べる<ruby>中<rt>なか</rt></ruby>です」는 일본어에서 어색합니다.<br>한 줄 비교: いま<ruby>食事中<rt>しょくじちゅう</rt></ruby>です(O) / いまご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べています(O)"
    },
    {
      tag: "(표현)",
      question: "선생님께 설명하겠습니다.",
      options: ["<ruby>先生<rt>せんせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>します。", "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>してあげます。"],
      answer: 0,
      explanation: "「〜てあげる」는 내가 상대에게 호의를 베푼다는 뉘앙스가 있어서, 높여야 하는 상대에게는 위에서 말하는 느낌이 날 수 있습니다. 그래서 이 문장에서는 「<ruby>説明<rt>せつめい</rt></ruby>します」가 자연스럽습니다.<br>한 줄 비교: <ruby>先生<rt>せんせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>します(O) / <ruby>先生<rt>せんせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>してあげます(X)"
    },
    {
      tag: "(표현)",
      question: "많이 응원해 주세요.",
      options: ["たくさん<ruby>応援<rt>おうえん</rt></ruby>してください。", "たくさん<ruby>応援<rt>おうえん</rt></ruby>してあげてください。"],
      answer: 0,
      explanation: "청중에게 요청할 때는 「<ruby>応援<rt>おうえん</rt></ruby>してください」가 자연스럽습니다. 「<ruby>応援<rt>おうえん</rt></ruby>してあげてください」는 ‘누군가를 위해 해 주세요’라서 방향이 달라집니다.<br>한 줄 비교: たくさん<ruby>応援<rt>おうえん</rt></ruby>してください(O) / <ruby>後輩<rt>こうはい</rt></ruby>を<ruby>応援<rt>おうえん</rt></ruby>してあげてください(O, 제3자를 도울 때)"
    },
    {
      tag: "(표현)",
      question: "큰 목소리로 부탁드립니다.",
      options: ["<ruby>大<rt>おお</rt></ruby>きい<ruby>声<rt>こえ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。", "<ruby>大<rt>おお</rt></ruby>きい<ruby>声<rt>こえ</rt></ruby>でしてあげてください。"],
      answer: 0,
      explanation: "큰 목소리를 부탁할 때는 「お<ruby>願<rt>ねが</rt></ruby>いします」가 자연스럽습니다. 「してあげてください」는 ‘누군가를 위해 해 주세요’ 느낌이라 이 문장과 맞지 않습니다.<br>한 줄 비교: <ruby>大<rt>おお</rt></ruby>きい<ruby>声<rt>こえ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします(O) / <ruby>手伝<rt>てつだ</rt></ruby>ってあげてください(O, 제3자를 도울 때)"
    },
    {
      tag: "(표현)",
      question: "(영화, 드라마 등을 마지막회까지) 끝까지 봐 주세요.",
      options: ["<ruby>最後<rt>さいご</rt></ruby>まで<ruby>見届<rt>みとど</rt></ruby>けてください。", "<ruby>最後<rt>さいご</rt></ruby>まで<ruby>見届<rt>みとど</rt></ruby>けてあげてください。"],
      answer: 0,
      explanation: "끝까지 지켜봐 달라는 뜻은 「<ruby>見届<rt>みとど</rt></ruby>けてください」가 자연스럽습니다. 「<ruby>見届<rt>みとど</rt></ruby>けてあげてください」는 ‘누군가를 위해’라는 뉘앙스가 붙어 이 문맥에서는 어색합니다.<br>한 줄 비교: <ruby>最後<rt>さいご</rt></ruby>まで<ruby>見届<rt>みとど</rt></ruby>けてください(O) / <ruby>最後<rt>さいご</rt></ruby>まで<ruby>見届<rt>みとど</rt></ruby>けてあげてください(X)"
    },
    {
      tag: "(표현)",
      question: "(무대에서) 함께 즐겨 주세요.",
      options: ["<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しんでください。", "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しんであげてください。"],
      answer: 0,
      explanation: "청중에게 ‘함께 즐겨 주세요’라고 할 때는 「<ruby>楽<rt>たの</rt></ruby>しんでください」가 자연스럽습니다. 「<ruby>楽<rt>たの</rt></ruby>しんであげてください」는 누군가를 위해 즐겨 달라는 느낌이라 어색합니다.<br>한 줄 비교: <ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しんでください(O) / <ruby>弟<rt>おとうと</rt></ruby>を<ruby>楽<rt>たの</rt></ruby>しませてあげる(O, 동생을 즐겁게 할 때)"
    },
    {
      tag: "(표현)",
      question: "다음 무대도 즐겨 주세요.",
      options: ["<ruby>次<rt>つぎ</rt></ruby>のステージも<ruby>楽<rt>たの</rt></ruby>しんでください。", "<ruby>次<rt>つぎ</rt></ruby>のステージも<ruby>楽<rt>たの</rt></ruby>しませてください。"],
      answer: 0,
      explanation: "청중에게 즐기라고 안내할 때는 「<ruby>楽<rt>たの</rt></ruby>しんでください」가 자연스럽습니다. 「<ruby>楽<rt>たの</rt></ruby>しませてください」는 상대에게 나를 즐겁게 해 달라는 뜻으로 바뀌어 어색합니다.<br>한 줄 비교: <ruby>次<rt>つぎ</rt></ruby>のステージも<ruby>楽<rt>たの</rt></ruby>しんでください(O) / <ruby>次<rt>つぎ</rt></ruby>のステージも<ruby>楽<rt>たの</rt></ruby>しませてください(X)"
    },
    {
      tag: "(표현)",
      question: "(연인에게) 내일의 너도 내가 즐겁게 해줄게.",
      options: ["<ruby>明日<rt>あした</rt></ruby>の<ruby>君<rt>きみ</rt></ruby>も、<ruby>僕<rt>ぼく</rt></ruby>が<ruby>楽<rt>たの</rt></ruby>しませてあげるよ。", "<ruby>明日<rt>あした</rt></ruby>の<ruby>君<rt>きみ</rt></ruby>も、<ruby>僕<rt>ぼく</rt></ruby>が<ruby>楽<rt>たの</rt></ruby>しませてください。"],
      answer: 0,
      explanation: "개인 대상 감정 멘트에서는 「<ruby>楽<rt>たの</rt></ruby>しませてあげるよ」가 자연스럽습니다. 「<ruby>楽<rt>たの</rt></ruby>しませてください」는 상대에게 부탁하는 말이라 의미 방향이 맞지 않습니다.<br>한 줄 비교: <ruby>明日<rt>あした</rt></ruby>の<ruby>君<rt>きみ</rt></ruby>も、<ruby>僕<rt>ぼく</rt></ruby>が<ruby>楽<rt>たの</rt></ruby>しませてあげるよ(O) / <ruby>最後<rt>さいご</rt></ruby>までお<ruby>楽<rt>たの</rt></ruby>しみください(O, 안내 멘트)"
    },
    {
      tag: "(표현)",
      question: "(후배에게) 내가 도와줄게.",
      options: ["<ruby>手伝<rt>てつだ</rt></ruby>ってあげる。", "<ruby>手伝<rt>てつだ</rt></ruby>ってください。"],
      answer: 0,
      explanation: "후배에게 ‘내가 도와줄게’라고 할 때는 「<ruby>手伝<rt>てつだ</rt></ruby>ってあげる」가 자연스럽습니다. 「<ruby>手伝<rt>てつだ</rt></ruby>ってください」는 내가 부탁하는 문장이라 방향이 반대입니다.<br>한 줄 비교: <ruby>手伝<rt>てつだ</rt></ruby>ってあげる(O) / <ruby>手伝<rt>てつだ</rt></ruby>ってください(O, 부탁할 때)"
    },
    {
      tag: "(표현)",
      question: "(청중에게) 자막을 봐 주세요.",
      options: ["<ruby>字幕<rt>じまく</rt></ruby>をご<ruby>覧<rt>らん</rt></ruby>ください。", "<ruby>字幕<rt>じまく</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。"],
      answer: 0,
      explanation: "청중에게 자막을 보라고 안내할 때는 「ご<ruby>覧<rt>らん</rt></ruby>ください」가 자연스럽습니다. 「<ruby>見<rt>み</rt></ruby>せてください」는 ‘보여 주세요’라서 말의 방향이 달라 이 문장에서는 맞지 않습니다.<br>한 줄 비교: <ruby>字幕<rt>じまく</rt></ruby>をご<ruby>覧<rt>らん</rt></ruby>ください(O) / <ruby>字幕<rt>じまく</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください(X)"
    },
    {
      tag: "(표현)",
      question: "이 사진을 보여 주세요.",
      options: ["<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。", "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>てください。"],
      answer: 0,
      explanation: "‘이 사진을 보여 주세요’는 「<ruby>見<rt>み</rt></ruby>せてください」가 맞습니다. 「<ruby>見<rt>み</rt></ruby>てください」는 사진을 보라는 뜻이어서 의미가 달라집니다.<br>한 줄 비교: <ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください(O) / スクリーンを<ruby>見<rt>み</rt></ruby>てください(O, 보라고 할 때)"
    },
    {
      tag: "(표현)",
      question: "여러분의 함성을 들려 주세요!",
      options: ["<ruby>皆<rt>みな</rt></ruby>さんの<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください。", "<ruby>皆<rt>みな</rt></ruby>さんの<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。"],
      answer: 0,
      explanation: "청중에게 소리를 내 달라고 요청할 때는 「<ruby>聞<rt>き</rt></ruby>かせてください」가 자연스럽습니다. 「<ruby>聞<rt>き</rt></ruby>いてください」는 내가 듣는 행동을 부탁하는 말이라 상황이 달라집니다.<br>한 줄 비교: <ruby>皆<rt>みな</rt></ruby>さんの<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください(O) / <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください(O, 들어 달라고 할 때)"
    },
    {
      tag: "(표현)",
      question: "여러분의 목소리를 들려 주세요!",
      options: ["<ruby>皆<rt>みな</rt></ruby>さんの<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください。", "<ruby>皆<rt>みな</rt></ruby>さんの<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。"],
      answer: 0,
      explanation: "청중에게 소리를 내 달라고 요청할 때는 「<ruby>聞<rt>き</rt></ruby>かせてください」가 자연스럽습니다. 「<ruby>聞<rt>き</rt></ruby>いてください」는 내가 듣는 행동을 부탁하는 말이라 상황이 달라집니다.<br>한 줄 비교: <ruby>皆<rt>みな</rt></ruby>さんの<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください(O) / <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください(O, 들어 달라고 할 때)"
    },
    {
      tag: "(표현)",
      question: "다음 곡을 들어 주세요.",
      options: ["<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。", "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください。"],
      answer: 0,
      explanation: "곡을 들어 달라고 할 때는 「<ruby>聞<rt>き</rt></ruby>いてください」를 씁니다. 「<ruby>聞<rt>き</rt></ruby>かせてください」는 상대에게 소리를 들려 달라는 뜻이라 방향이 반대입니다.<br>한 줄 비교: <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください(O) / <ruby>皆<rt>みな</rt></ruby>さんの<ruby>声<rt>こえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください(O, 들려 달라고 할 때)"
    },
    {
      tag: "(표현)",
      question: "저에게 사진을 보여 주세요.",
      options: ["<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。", "<ruby>写真<rt>しゃしん</rt></ruby>をご<ruby>覧<rt>らん</rt></ruby>ください。"],
      answer: 0,
      explanation: "내가 사진을 받아보려면 「<ruby>見<rt>み</rt></ruby>せてください」가 맞습니다. 「ご<ruby>覧<rt>らん</rt></ruby>ください」는 상대에게 보라고 안내할 때 쓰는 표현입니다.<br>한 줄 비교: <ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください(O) / スクリーンをご<ruby>覧<rt>らん</rt></ruby>ください(O, 안내 멘트)"
    },
    {
      tag: "(표현)",
      question: "여러분의 응원봉을 보여 주세요!",
      options: ["<ruby>皆<rt>みな</rt></ruby>さんのペンライトを<ruby>見<rt>み</rt></ruby>せてください。", "<ruby>皆<rt>みな</rt></ruby>さんのペンライトを<ruby>見<rt>み</rt></ruby>てください。"],
      answer: 0,
      explanation: "응원봉을 보여 달라고 할 때는 「<ruby>見<rt>み</rt></ruby>せてください」가 맞습니다. 「<ruby>見<rt>み</rt></ruby>てください」는 보라고 요청하는 말이라 의미가 다릅니다.<br>한 줄 비교: <ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください(O) / <ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>てください(X, 보여 달라고 할 때)"
    },
    {
      tag: "(표현)",
      question: "잠시만 기다려 주세요.",
      options: ["<ruby>少<rt>すこ</rt></ruby>し<ruby>待<rt>ま</rt></ruby>ってください。", "<ruby>少<rt>すこ</rt></ruby>しお<ruby>待<rt>ま</rt></ruby>ちしてください。"],
      answer: 0,
      explanation: "「お<ruby>待<rt>ま</rt></ruby>ちしてください」는 형태가 맞지 않습니다. 정중하게 부탁할 때는 「お<ruby>待<rt>ま</rt></ruby>ちください」를 씁니다.<br>한 줄 비교: <ruby>少<rt>すこ</rt></ruby>し<ruby>待<rt>ま</rt></ruby>ってください(O) / <ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください(O, 더 정중)"
    },
    {
      tag: "(표현)",
      question: "조용히 해 주세요.",
      options: ["<ruby>静<rt>しず</rt></ruby>かにしてください。", "<ruby>静<rt>しず</rt></ruby>かをしてください。"],
      answer: 0,
      explanation: "「<ruby>静<rt>しず</rt></ruby>か」는 「<ruby>静<rt>しず</rt></ruby>かに」 형태로 연결해야 자연스럽습니다. 「<ruby>静<rt>しず</rt></ruby>かを」는 조사 선택이 맞지 않습니다.<br>한 줄 비교: <ruby>静<rt>しず</rt></ruby>かにしてください(O) / <ruby>静<rt>しず</rt></ruby>かな<ruby>部屋<rt>へや</rt></ruby>(O, 명사 수식)"
    },
    {
      tag: "(표현)",
      question: "여기에서 기다려 주세요.",
      options: ["ここで<ruby>待<rt>ま</rt></ruby>ってください。", "ここに<ruby>待<rt>ま</rt></ruby>ってください。"],
      answer: 0,
      explanation: "기다리는 행동이 일어나는 장소는 「で」를 씁니다. 「ここに<ruby>待<rt>ま</rt></ruby>ってください」는 일본어에서 어색합니다.<br>한 줄 비교: ここで<ruby>待<rt>ま</rt></ruby>ってください(O) / ここに<ruby>来<rt>き</rt></ruby>てください(O, 도착 지점)"
    },
    {
      tag: "(표현)",
      question: "박수 부탁드립니다.",
      options: ["<ruby>拍手<rt>はくしゅ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。", "<ruby>拍手<rt>はくしゅ</rt></ruby>をください。"],
      answer: 0,
      explanation: "박수처럼 행동을 부탁할 때는 「お<ruby>願<rt>ねが</rt></ruby>いします」가 자연스럽습니다. 「ください」는 물건을 받을 때 더 잘 맞습니다.<br>한 줄 비교: <ruby>拍手<rt>はくしゅ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします(O) / <ruby>水<rt>みず</rt></ruby>をください(O, 물건 요청)"
    },
    {
      tag: "(표현)",
      question: "조심해 주세요.",
      options: ["<ruby>気<rt>き</rt></ruby>をつけてください。", "<ruby>気<rt>き</rt></ruby>をついてください。"],
      answer: 0,
      explanation: "‘조심하다’는 「<ruby>気<rt>き</rt></ruby>をつける」를 씁니다. 「<ruby>気<rt>き</rt></ruby>をつく」는 이 뜻으로 쓰지 않습니다.<br>한 줄 비교: <ruby>気<rt>き</rt></ruby>をつけてください(O) / <ruby>気<rt>き</rt></ruby>がつきました(O, 알아차림)"
    },
    {
      tag: "(표현)",
      question: "협조 부탁드립니다.",
      options: ["ご<ruby>協力<rt>きょうりょく</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。", "ご<ruby>協力<rt>きょうりょく</rt></ruby>くださいお<ruby>願<rt>ねが</rt></ruby>いします。"],
      answer: 0,
      explanation: "「ご<ruby>協力<rt>きょうりょく</rt></ruby>くださいお<ruby>願<rt>ねが</rt></ruby>いします」는 요청 표현이 겹쳐 어색합니다. 하나만 써서 정리하면 자연스럽습니다.<br>한 줄 비교: ご<ruby>協力<rt>きょうりょく</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします(O) / ご<ruby>協力<rt>きょうりょく</rt></ruby>ください(O, 같은 뜻의 다른 정중형)"
    },
    {
      tag: "(표현)",
      question: "뮤지컬 무대에 섰어요.",
      options: ["ミュージカルの<ruby>舞台<rt>ぶたい</rt></ruby>に<ruby>立<rt>た</rt></ruby>ちました。", "ミュージカルのライブに<ruby>行<rt>い</rt></ruby>きました。"],
      answer: 0,
      explanation: "뮤지컬은 공연 장르라 「<ruby>舞台<rt>ぶたい</rt></ruby>」가 자연스럽습니다. 「ライブに<ruby>行<rt>い</rt></ruby>きました」는 콘서트 관람 쪽 표현입니다.<br>한 줄 비교: ミュージカルの<ruby>舞台<rt>ぶたい</rt></ruby>に<ruby>立<rt>た</rt></ruby>ちました(O) / ライブに<ruby>行<rt>い</rt></ruby>きました(O, 콘서트 관람)"
    },
    {
      tag: "(표현)",
      question: "관객 전원이 일어났어요.",
      options: ["<ruby>観客<rt>かんきゃく</rt></ruby><ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>立<rt>た</rt></ruby>ちました。", "<ruby>観客<rt>かんきゃく</rt></ruby><ruby>全部<rt>ぜんぶ</rt></ruby>が<ruby>立<rt>た</rt></ruby>ちました。"],
      answer: 0,
      explanation: "사람 집합에는 「<ruby>全員<rt>ぜんいん</rt></ruby>」을 쓰고, 사물·내용 전체에는 「<ruby>全部<rt>ぜんぶ</rt></ruby>」를 씁니다.<br>한 줄 비교: <ruby>観客<rt>かんきゃく</rt></ruby><ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>立<rt>た</rt></ruby>ちました(O)→관객 전원이 일어났어요. / <ruby>準備<rt>じゅんび</rt></ruby>は<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>終<rt>お</rt></ruby>わりました(O)→준비는 전부 끝났어요."
    },
    {
      tag: "(표현)",
      question: "준비는 다 끝났어요.",
      options: ["<ruby>準備<rt>じゅんび</rt></ruby>は<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>終<rt>お</rt></ruby>わりました。", "<ruby>準備<rt>じゅんび</rt></ruby>は<ruby>全員<rt>ぜんいん</rt></ruby><ruby>終<rt>お</rt></ruby>わりました。"],
      answer: 0,
      explanation: "준비 내용 같은 사물·상태 전체는 「<ruby>全部<rt>ぜんぶ</rt></ruby>」가 자연스럽습니다. 「<ruby>全員<rt>ぜんいん</rt></ruby>」은 사람 집합에 씁니다.<br>한 줄 비교: <ruby>準備<rt>じゅんび</rt></ruby>は<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>終<rt>お</rt></ruby>わりました(O) / スタッフ<ruby>全員<rt>ぜんいん</rt></ruby><ruby>集合<rt>しゅうごう</rt></ruby>(O, 사람)"
    },
    {
      tag: "(표현)",
      question: "센터도 사이드도 고마워!",
      options: ["センターもサイドもありがとう！", "<ruby>隣<rt>となり</rt></ruby>も<ruby>真ん中<rt>まんなか</rt></ruby>もありがとう！"],
      answer: 0,
      explanation: "좌석 구역을 부를 때는 「センター/サイド/<ruby>右<rt>みぎ</rt></ruby>/<ruby>左<rt>ひだり</rt></ruby>/<ruby>真ん中<rt>まんなか</rt></ruby>」처럼 말하는 게 자연스럽습니다. 「<ruby>隣<rt>となり</rt></ruby>」는 사람 기준의 ‘옆’이라 구역명으로는 맞지 않습니다.<br>한 줄 비교: センターもサイドもありがとう！(O) / <ruby>私<rt>わたし</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>来<rt>き</rt></ruby>てくれてありがとう(O, 사람 기준)"
    },
    {
      tag: "(표현)",
      question: "가운데도 최고예요!",
      options: ["<ruby>真ん中<rt>まんなか</rt></ruby>も<ruby>最高<rt>さいこう</rt></ruby>！", "そばも<ruby>最高<rt>さいこう</rt></ruby>！"],
      answer: 0,
      explanation: "관객 구역을 말할 때는 「<ruby>真ん中<rt>まんなか</rt></ruby>」나 「センター」가 자연스럽습니다. 「そば」는 사람 곁에 있다는 뜻입니다.<br>한 줄 비교: <ruby>真ん中<rt>まんなか</rt></ruby>も<ruby>最高<rt>さいこう</rt></ruby>！(O) / そばにいてください(O, 사람 사이 거리)"
    },
    {
      tag: "(표현)",
      question: "왼쪽도 잘 보이나요?",
      options: ["<ruby>左<rt>ひだり</rt></ruby>も<ruby>見<rt>み</rt></ruby>えますか。", "<ruby>隣<rt>となり</rt></ruby>も<ruby>見<rt>み</rt></ruby>えますか。"],
      answer: 0,
      explanation: "무대에서 방향을 부를 때는 「<ruby>左<rt>ひだり</rt></ruby>/<ruby>右<rt>みぎ</rt></ruby>」가 자연스럽습니다. 「<ruby>隣<rt>となり</rt></ruby>」는 특정 사람의 옆을 말할 때 씁니다.<br>한 줄 비교: <ruby>左<rt>ひだり</rt></ruby>も<ruby>見<rt>み</rt></ruby>えますか。(O) / <ruby>隣<rt>となり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>(O, 사람 위치)"
    },
    {
      tag: "(표현)",
      question: "내 옆에 와 줘서 고마워.",
      options: ["<ruby>隣<rt>となり</rt></ruby>に<ruby>来<rt>き</rt></ruby>てくれてありがとう。", "<ruby>右<rt>みぎ</rt></ruby>に<ruby>来<rt>き</rt></ruby>てくれてありがとう。"],
      answer: 0,
      explanation: "누군가의 옆에 와 준 상황은 「<ruby>隣<rt>となり</rt></ruby>」가 자연스럽습니다. 「<ruby>右<rt>みぎ</rt></ruby>」는 절대 방향이라 뜻이 달라집니다.<br>한 줄 비교: <ruby>隣<rt>となり</rt></ruby>に<ruby>来<rt>き</rt></ruby>てくれてありがとう。(O) / <ruby>右<rt>みぎ</rt></ruby>に<ruby>立<rt>た</rt></ruby>ってください(O, 방향 지시)"
    },
    {
      tag: "(표현)",
      question: "앞으로도 지켜봐 주세요.",
      options: ["これからも<ruby>見守<rt>みまも</rt></ruby>ってください。", "これからもご<ruby>覧<rt>らん</rt></ruby>ください。"],
      answer: 0,
      explanation: "응원해 달라는 뜻의 ‘지켜봐 주세요’는 「<ruby>見守<rt>みまも</rt></ruby>ってください」가 맞습니다. 「ご<ruby>覧<rt>らん</rt></ruby>ください」는 화면·자료 시청 안내에 씁니다.<br>한 줄 비교: これからも<ruby>見守<rt>みまも</rt></ruby>ってください(O) / VTRをご<ruby>覧<rt>らん</rt></ruby>ください(O, 시청 안내)"
    },
    {
      tag: "(표현)",
      question: "(청중에게) VTR을 봐 주세요.",
      options: ["VTRをご<ruby>覧<rt>らん</rt></ruby>ください。", "VTRを<ruby>見<rt>み</rt></ruby>せてください。"],
      answer: 0,
      explanation: "청중에게 VTR 시청을 안내할 때는 「ご<ruby>覧<rt>らん</rt></ruby>ください」가 자연스럽습니다. 「<ruby>見<rt>み</rt></ruby>せてください」는 ‘보여 달라’는 요청이라 방향이 다릅니다.<br>한 줄 비교: VTRをご<ruby>覧<rt>らん</rt></ruby>ください(O) / VTRを<ruby>見<rt>み</rt></ruby>せてください(X)"
    },
    {
      tag: "(표현)",
      question: "앞으로도 계속 노력하겠습니다.",
      options: ["これからも<ruby>頑張<rt>がんば</rt></ruby>っていきます。", "これからも<ruby>頑張<rt>がんば</rt></ruby>ってきます。"],
      answer: 0,
      explanation: "앞으로 이어질 다짐은 「〜ていきます」가 자연스럽습니다. 「〜てきます」는 지금까지 이어진 흐름을 말할 때 씁니다.<br>한 줄 비교: これからも<ruby>頑張<rt>がんば</rt></ruby>っていきます(O) / <ruby>今<rt>いま</rt></ruby>まで<ruby>頑張<rt>がんば</rt></ruby>ってきました(O, 과거부터 지금까지)"
    },
    {
      tag: "(표현)",
      question: "지금까지 열심히 해왔어요.",
      options: ["<ruby>今<rt>いま</rt></ruby>まで<ruby>頑張<rt>がんば</rt></ruby>ってきました。", "<ruby>今<rt>いま</rt></ruby>まで<ruby>頑張<rt>がんば</rt></ruby>っていきました。"],
      answer: 0,
      explanation: "지금까지의 누적을 말할 때는 「〜てきました」를 씁니다. 「〜ていきました」는 보통 앞으로의 방향과 맞지 않습니다.<br>한 줄 비교: <ruby>今<rt>いま</rt></ruby>まで<ruby>頑張<rt>がんば</rt></ruby>ってきました(O) / これから<ruby>頑張<rt>がんば</rt></ruby>っていきます(O, 앞으로)"
    },
    {
      tag: "(표현)",
      question: "(하늘 보며) 오늘 비가 올 것 같아요.",
      options: ["<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りそうです。", "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るらしいです。"],
      answer: 0,
      explanation: "눈으로 보고 하는 추측은 「〜そうです」가 자연스럽습니다. 「〜らしいです」는 들은 정보를 전할 때 씁니다.<br>한 줄 비교: <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りそうです(O) / <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るらしいです(O, 들은 정보)"
    },
    {
      tag: "(표현)",
      question: "한번 해 볼게요.",
      options: ["やってみます。", "やってみせます。"],
      answer: 0,
      explanation: "「〜てみます」는 ‘한번 해 본다’는 시도 표현입니다. 「〜てみせます」는 반드시 해내겠다는 강한 의지입니다.<br>한 줄 비교: やってみます(O) / <ruby>必<rt>かなら</rt></ruby>ず<ruby>成功<rt>せいこう</rt></ruby>してみせます(O, 강한 결심)"
    },
    {
      tag: "(표현)",
      question: "(결심) 오늘은 쉬기로 했어요.",
      options: ["<ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>むことにしました。", "<ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>むようにしました。"],
      answer: 0,
      explanation: "이번에 스스로 정한 결정은 「ことにしました」가 자연스럽습니다. 「ようにしました」는 습관·노력으로 바꿔 갈 때 자주 씁니다.<br>한 줄 비교: <ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>むことにしました(O) / <ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>るようにしています(O, 습관)"
    },
    {
      tag: "(표현)",
      question: "늦지 않도록 할게요.",
      options: ["<ruby>遅<rt>おく</rt></ruby>れないようにします。", "<ruby>遅<rt>おく</rt></ruby>れないことにします。"],
      answer: 0,
      explanation: "지각하지 않도록 신경 쓰겠다는 말은 「ようにします」가 자연스럽습니다. 「ことにします」는 그 순간의 결정을 말할 때 더 잘 맞습니다.<br>한 줄 비교: <ruby>遅<rt>おく</rt></ruby>れないようにします(O) / <ruby>今日<rt>きょう</rt></ruby>は<ruby>早<rt>はや</rt></ruby>く<ruby>帰<rt>かえ</rt></ruby>ることにします(O, 결정)"
    },
    {
      tag: "(표현)",
      question: "소문으로는 내일 온대요.",
      options: ["<ruby>明日<rt>あした</rt></ruby><ruby>来<rt>く</rt></ruby>るらしいです。", "<ruby>明日<rt>あした</rt></ruby><ruby>来<rt>き</rt></ruby>そうです。"],
      answer: 0,
      explanation: "소문이나 전달 정보는 「らしいです」를 씁니다. 「そうです」는 눈앞에서 그렇게 보일 때 자연스럽습니다.<br>한 줄 비교: <ruby>明日<rt>あした</rt></ruby><ruby>来<rt>く</rt></ruby>るらしいです(O) / <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りそうです(O, 보이는 추측)"
    },
    {
      tag: "(표현)",
      question: "이제 끝났어요.",
      options: ["もう<ruby>終<rt>お</rt></ruby>わりました。", "まだ<ruby>終<rt>お</rt></ruby>わっていません。"],
      answer: 0,
      explanation: "‘이제 끝났다’는 완료 상태이므로 「もう<ruby>終<rt>お</rt></ruby>わりました」가 맞습니다. 「まだ<ruby>終<rt>お</rt></ruby>わっていません」는 ‘아직 안 끝났다’는 반대 의미입니다.<br>한 줄 비교: もう<ruby>終<rt>お</rt></ruby>わりました(O) / まだ<ruby>終<rt>お</rt></ruby>わっていません(X)"
    },
    {
      tag: "(표현)",
      question: "이거밖에 없어요.",
      options: ["これしかありません。", "これだけありません。"],
      answer: 0,
      explanation: "「しか〜ない」는 ‘이것밖에 없다’는 고정형입니다. 「だけありません」는 같은 뜻이 되지 않습니다.<br>한 줄 비교: これしかありません(O) / これだけあります(O, 이것만 있다)"
    },
  ]
};



const raw = (typeof masterDB !== 'undefined' && masterDB.expression) ? masterDB.expression : [];
window.masterDB = window.masterDB || {};
window.masterDB.expression = raw.map(it => ({
  q: it.question,
  o: it.options,
  a: it.answer,
  e: it.explanation
}));
})();

