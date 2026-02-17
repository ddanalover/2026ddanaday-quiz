// 별빛노트: 일본어 뽀개기
// 문제 (표현) - masterDB.expression (100문항)
// 분포: 조사18 / 자타14 / ~中12 / あげる12 / 방향12 / 요청10 / 무대어휘12 / 중급뉘앙스10
// 규칙: 한자 루비 적용, 오답 교정(오답을 맞게 쓰려면) 포함, 완전 오답 기반

const masterDB = {
  expression: [
    {
      tag: "(표현)",
      question: "친구를 만나고 싶어요.",
      options: ["<ruby>友達<rt>ともだち</rt></ruby>に会いたいです。", "<ruby>友達<rt>ともだち</rt></ruby>を会いたいです。"],
      answer: 0,
      explanation: "「会う」는 대상에 「に」를 씁니다. 「を会う」는 직역 오류입니다.<br>오답을 맞게 쓰려면: <ruby>映画<rt>えいが</rt></ruby>を見たいです。"
    },
    {
      tag: "(표현)",
      question: "카페에서 공부해요.",
      options: ["カフェで<ruby>勉強<rt>べんきょう</rt></ruby>します。", "カフェに<ruby>勉強<rt>べんきょう</rt></ruby>します。"],
      answer: 0,
      explanation: "행동 장소는 「で」입니다. 「に<ruby>勉強<rt>べんきょう</rt></ruby>する」는 오류입니다.<br>오답을 맞게 쓰려면: カフェに行きます。"
    },
    {
      tag: "(표현)",
      question: "버스로 갑니다.",
      options: ["バスで行きます。", "バスに行きます。"],
      answer: 0,
      explanation: "교통수단은 「で」입니다. 「バスに行く」는 오류입니다.<br>오답을 맞게 쓰려면: <ruby>駅<rt>えき</rt></ruby>に行きます。"
    },
    {
      tag: "(표현)",
      question: "일본어를 잘해요.",
      options: ["<ruby>日本語<rt>にほんご</rt></ruby>が上手です。", "<ruby>日本語<rt>にほんご</rt></ruby>を上手です。"],
      answer: 0,
      explanation: "능력/상태는 「が」입니다. 「を上手」는 오류입니다.<br>오답을 맞게 쓰려면: <ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。"
    },
    {
      tag: "(표현)",
      question: "비가 와요.",
      options: ["<ruby>雨<rt>あめ</rt></ruby>が降っています。", "<ruby>雨<rt>あめ</rt></ruby>を降っています。"],
      answer: 0,
      explanation: "자연현상 주어는 「が」입니다. 「<ruby>雨<rt>あめ</rt></ruby>を」는 오류입니다.<br>오답을 맞게 쓰려면: <ruby>雨<rt>あめ</rt></ruby>を避けます。"
    },
    {
      tag: "(표현)",
      question: "친구를 기다려요.",
      options: ["<ruby>友達<rt>ともだち</rt></ruby>を待ちます。", "<ruby>友達<rt>ともだち</rt></ruby>に待ちます。"],
      answer: 0,
      explanation: "「待つ」는 목적어에 「を」입니다. 「に待つ」는 오류입니다.<br>오답을 맞게 쓰려면: <ruby>友達<rt>ともだち</rt></ruby>に会います。"
    },
    {
      tag: "(표현)",
      question: "학교에 갑니다.",
      options: ["<ruby>学校<rt>がっこう</rt></ruby>に行きます。", "<ruby>学校<rt>がっこう</rt></ruby>で行きます。"],
      answer: 0,
      explanation: "목적지는 「に」입니다. 「で行く」는 오류입니다.<br>오답을 맞게 쓰려면: <ruby>学校<rt>がっこう</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>します。"
    },
    {
      tag: "(표현)",
      question: "집에서 일해요.",
      options: ["<ruby>家<rt>いえ</rt></ruby>で働きます。", "<ruby>家<rt>いえ</rt></ruby>に働きます。"],
      answer: 0,
      explanation: "행동 장소는 「で」입니다. 「に働く」는 오류입니다.<br>오답을 맞게 쓰려면: <ruby>家<rt>いえ</rt></ruby>に帰ります。"
    },
    {
      tag: "(표현)",
      question: "전철을 타요.",
      options: ["<ruby>電車<rt>でんしゃ</rt></ruby>に乗ります。", "<ruby>電車<rt>でんしゃ</rt></ruby>を乗ります。"],
      answer: 0,
      explanation: "「乗る」는 탈 것에 「に」입니다. 「を乗る」는 오류입니다.<br>오답을 맞게 쓰려면: <ruby>電車<rt>でんしゃ</rt></ruby>を見ます。"
    },
    {
      tag: "(표현)",
      question: "버스터미널에 갑니다.",
      options: ["バスターミナルに行きます。", "バスターミナルで行きます。"],
      answer: 0,
      explanation: "목적지는 「に」입니다. 「で行く」는 오류입니다.<br>오답을 맞게 쓰려면: バスターミナルで待ちます。"
    },
    {
      tag: "(표현)",
      question: "사진을 찍어 주세요.",
      options: ["<ruby>写真<rt>しゃしん</rt></ruby>を撮ってください。", "<ruby>写真<rt>しゃしん</rt></ruby>に撮ってください。"],
      answer: 0,
      explanation: "목적어는 「を」입니다. 「に撮る」는 오류입니다.<br>오답을 맞게 쓰려면: 日本に行きます。"
    },
    {
      tag: "(표현)",
      question: "지도를 보여 주세요.",
      options: ["<ruby>地図<rt>ちず</rt></ruby>を見せてください。", "<ruby>地図<rt>ちず</rt></ruby>を見てください。"],
      answer: 0,
      explanation: "「見せてください」는 ‘보여 주세요’입니다. 「見てください」는 ‘봐 주세요’입니다.<br>오답을 맞게 쓰려면: スクリーンを見てください。"
    },
    {
      tag: "(표현)",
      question: "모두 와 줘서 고마워요. (사람)",
      options: ["<ruby>全員<rt>ぜんいん</rt></ruby> 来てくれてありがとう！", "<ruby>全部<rt>ぜんぶ</rt></ruby> 来てくれてありがとう！"],
      answer: 0,
      explanation: "사람은 「<ruby>全員<rt>ぜんいん</rt></ruby>」, 사물은 「<ruby>全部<rt>ぜんぶ</rt></ruby>」입니다.<br>오답을 맞게 쓰려면: チケットは<ruby>全部<rt>ぜんぶ</rt></ruby>売れました。"
    },
    {
      tag: "(표현)",
      question: "티켓이 다 팔렸어요. (사물)",
      options: ["チケットは<ruby>全部<rt>ぜんぶ</rt></ruby> 売れました。", "チケットは<ruby>全員<rt>ぜんいん</rt></ruby> 売れました。"],
      answer: 0,
      explanation: "사물은 「<ruby>全部<rt>ぜんぶ</rt></ruby>」입니다. 「<ruby>全員<rt>ぜんいん</rt></ruby>」은 사람에 씁니다.<br>오답을 맞게 쓰려면: メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が来ました。"
    },
    {
      tag: "(표현)",
      question: "오른쪽도 가운데도 와 줘서 고마워요!",
      options: ["サイドも<ruby>真ん中<rt>まんなか</rt></ruby>も来てくれてありがとう！", "<ruby>隣<rt>となり</rt></ruby>も<ruby>真ん中<rt>まんなか</rt></ruby>も来てくれてありがとう！"],
      answer: 0,
      explanation: "구역은 「センター/サイド/<ruby>右<rt>みぎ</rt></ruby>/<ruby>左<rt>ひだり</rt></ruby>/<ruby>真ん中<rt>まんなか</rt></ruby>」로 말합니다. 「<ruby>隣<rt>となり</rt></ruby>」는 사람 기준 ‘옆’이라 구역 표현으로 어색합니다.<br>오답을 맞게 쓰려면: 私の<ruby>隣<rt>となり</rt></ruby>に来てくれてありがとう。"
    },
    {
      tag: "(표현)",
      question: "제 오른쪽에 서 주세요.",
      options: ["私の<ruby>右<rt>みぎ</rt></ruby>に立ってください。", "私の<ruby>隣<rt>となり</rt></ruby>に立ってください。"],
      answer: 0,
      explanation: "방향을 정확히 말할 때는 「<ruby>右<rt>みぎ</rt></ruby>/<ruby>左<rt>ひだり</rt></ruby>」를 씁니다. 「<ruby>隣<rt>となり</rt></ruby>」는 방향 정보가 없습니다.<br>오답을 맞게 쓰려면: 私の<ruby>隣<rt>となり</rt></ruby>に座ってください。"
    },
    {
      tag: "(표현)",
      question: "항상 제 곁에 있어 주세요.",
      options: ["そばにいてください。", "<ruby>右<rt>みぎ</rt></ruby>にいてください。"],
      answer: 0,
      explanation: "「そば」는 ‘곁’입니다. 「<ruby>右<rt>みぎ</rt></ruby>」는 방향이라 의미가 달라집니다.<br>오답을 맞게 쓰려면: 私の<ruby>右<rt>みぎ</rt></ruby>に立ってください。"
    },
    {
      tag: "(표현)",
      question: "회의 도중이라 지금은 어려워요.",
      options: ["<ruby>会議<rt>かいぎ</rt></ruby>中です。", "<ruby>会議<rt>かいぎ</rt></ruby>する中です。"],
      answer: 0,
      explanation: "명사+中는 자연스럽습니다. 동사원형+中는 직역 오류입니다.<br>오답을 맞게 쓰려면: <ruby>会議<rt>かいぎ</rt></ruby>しています。"
    },
    {
      tag: "(표현)",
      question: "문이 닫혔어요.",
      options: ["ドアが閉まりました。", "ドアを閉まりました。"],
      answer: 0,
      explanation: "「<ruby>閉<rt>し</rt></ruby>まる」는 자동사라 「が」입니다.<br>오답을 맞게 쓰려면: ドアを閉めました。"
    },
    {
      tag: "(표현)",
      question: "문을 닫았어요.",
      options: ["ドアを閉めました。", "ドアが閉めました。"],
      answer: 0,
      explanation: "「<ruby>閉<rt>し</rt></ruby>める」는 타동사라 「を」입니다.<br>오답을 맞게 쓰려면: ドアが閉まりました。"
    },
    {
      tag: "(표현)",
      question: "문이 열렸어요.",
      options: ["ドアが開きました。", "ドアを開きました。"],
      answer: 0,
      explanation: "「<ruby>開<rt>あ</rt></ruby>く」는 자동사라 「が」입니다.<br>오답을 맞게 쓰려면: ドアを開けました。"
    },
    {
      tag: "(표현)",
      question: "문을 열었어요.",
      options: ["ドアを開けました。", "ドアが開けました。"],
      answer: 0,
      explanation: "「<ruby>開<rt>あ</rt></ruby>ける」는 타동사라 「を」입니다.<br>오답을 맞게 쓰려면: ドアが開きました。"
    },
    {
      tag: "(표현)",
      question: "에어컨이 고장 났어요.",
      options: ["エアコンが壊れました。", "エアコンを壊れました。"],
      answer: 0,
      explanation: "「<ruby>壊<rt>こわ</rt></ruby>れる」는 자동사라 「が」입니다.<br>오답을 맞게 쓰려면: エアコンを壊しました。"
    },
    {
      tag: "(표현)",
      question: "제가 에어컨을 망가뜨렸어요.",
      options: ["エアコンを壊しました。", "エアコンが壊しました。"],
      answer: 0,
      explanation: "「<ruby>壊<rt>こわ</rt></ruby>す」는 타동사라 「を」입니다.<br>오답을 맞게 쓰려면: エアコンが壊れました。"
    },
    {
      tag: "(표현)",
      question: "회의가 시작됐어요.",
      options: ["<ruby>会議<rt>かいぎ</rt></ruby>が始まりました。", "<ruby>会議<rt>かいぎ</rt></ruby>を始まりました。"],
      answer: 0,
      explanation: "「<ruby>始<rt>はじ</rt></ruby>まる」는 자동사라 「が」입니다.<br>오답을 맞게 쓰려면: <ruby>会議<rt>かいぎ</rt></ruby>を始めました。"
    },
    {
      tag: "(표현)",
      question: "회의를 시작했어요.",
      options: ["<ruby>会議<rt>かいぎ</rt></ruby>を始めました。", "<ruby>会議<rt>かいぎ</rt></ruby>が始めました。"],
      answer: 0,
      explanation: "「<ruby>始<rt>はじ</rt></ruby>める」는 타동사라 「を」입니다.<br>오답을 맞게 쓰려면: <ruby>会議<rt>かいぎ</rt></ruby>が始まりました。"
    },
    {
      tag: "(표현)",
      question: "차가 멈췄어요.",
      options: ["車が止まりました。", "車を止まりました。"],
      answer: 0,
      explanation: "「<ruby>止<rt>と</rt></ruby>まる」는 자동사라 「が」입니다.<br>오답을 맞게 쓰려면: 車を止めました。"
    },
    {
      tag: "(표현)",
      question: "차를 세웠어요.",
      options: ["車を止めました。", "車が止めました。"],
      answer: 0,
      explanation: "「<ruby>止<rt>と</rt></ruby>める」는 타동사라 「を」입니다.<br>오답을 맞게 쓰려면: 車が止まりました。"
    },
    {
      tag: "(표현)",
      question: "불이 꺼졌어요.",
      options: ["電気が消えました。", "電気を消えました。"],
      answer: 0,
      explanation: "「<ruby>消<rt>き</rt></ruby>える」는 자동사라 「が」입니다.<br>오답을 맞게 쓰려면: 電気を消しました。"
    },
    {
      tag: "(표현)",
      question: "불을 껐어요.",
      options: ["電気を消しました。", "電気が消しました。"],
      answer: 0,
      explanation: "「<ruby>消<rt>け</rt></ruby>す」는 타동사라 「を」입니다.<br>오답을 맞게 쓰려면: 電気が消えました。"
    },
    {
      tag: "(표현)",
      question: "휴대폰이 떨어졌어요.",
      options: ["携帯が落ちました。", "携帯を落ちました。"],
      answer: 0,
      explanation: "「<ruby>落<rt>お</rt></ruby>ちる」는 자동사라 「が」입니다.<br>오답을 맞게 쓰려면: 携帯を落としました。"
    },
    {
      tag: "(표현)",
      question: "제가 휴대폰을 떨어뜨렸어요.",
      options: ["携帯を落としました。", "携帯が落としました。"],
      answer: 0,
      explanation: "「<ruby>落<rt>お</rt></ruby>とす」는 타동사라 「を」입니다.<br>오답을 맞게 쓰려면: 携帯が落ちました。"
    },
    {
      tag: "(표현)",
      question: "지금 회의 중이에요.",
      options: ["<ruby>会議<rt>かいぎ</rt></ruby>中です。", "<ruby>会議<rt>かいぎ</rt></ruby>する中です。"],
      answer: 0,
      explanation: "명사+中는 상태 표현입니다. 동사원형+中는 직역 오류입니다.<br>오답을 맞게 쓰려면: <ruby>会議<rt>かいぎ</rt></ruby>しています。"
    },
    {
      tag: "(표현)",
      question: "지금 공부 중이에요.",
      options: ["<ruby>勉強<rt>べんきょう</rt></ruby>中です。", "<ruby>勉強<rt>べんきょう</rt></ruby>する中です。"],
      answer: 0,
      explanation: "명사+中는 자연스럽습니다. 동사원형+中는 직역 오류입니다.<br>오답을 맞게 쓰려면: <ruby>勉強<rt>べんきょう</rt></ruby>しています。"
    },
    {
      tag: "(표현)",
      question: "지금 이동 중이에요.",
      options: ["<ruby>移動<rt>いどう</rt></ruby>中です。", "<ruby>移動<rt>いどう</rt></ruby>する中です。"],
      answer: 0,
      explanation: "명사+中는 자연스럽습니다. 동사원형+中는 직역 오류입니다.<br>오답을 맞게 쓰려면: <ruby>移動<rt>いどう</rt></ruby>しています。"
    },
    {
      tag: "(표현)",
      question: "지금 일하는 중이에요.",
      options: ["<ruby>仕事<rt>しごと</rt></ruby>中です。", "<ruby>仕事<rt>しごと</rt></ruby>する中です。"],
      answer: 0,
      explanation: "명사+中는 상태 표현입니다. 동사원형+中는 직역 오류입니다.<br>오답을 맞게 쓰려면: <ruby>仕事<rt>しごと</rt></ruby>しています。"
    },
    {
      tag: "(표현)",
      question: "지금 연습 중이에요.",
      options: ["<ruby>練習<rt>れんしゅう</rt></ruby>中です。", "<ruby>練習<rt>れんしゅう</rt></ruby>する中です。"],
      answer: 0,
      explanation: "명사+中는 자연스럽습니다. 동사원형+中는 직역 오류입니다.<br>오답을 맞게 쓰려면: <ruby>練習<rt>れんしゅう</rt></ruby>しています。"
    },
    {
      tag: "(표현)",
      question: "지금 보는 중이에요.",
      options: ["見ています。", "見る中です。"],
      answer: 0,
      explanation: "진행은 「〜ています」입니다. 「見る中」는 직역 오류입니다.<br>오답을 맞게 쓰려면: 見ているところです。"
    },
    {
      tag: "(표현)",
      question: "일하는 과정에서 배웠어요.",
      options: ["<ruby>仕事<rt>しごと</rt></ruby>する中で学びました。", "<ruby>仕事<rt>しごと</rt></ruby>する中です。"],
      answer: 0,
      explanation: "「〜する中で」는 ‘과정 속에서’로 문장이 이어집니다. 「〜する中です」는 상태 표현으로 어색합니다.<br>오답을 맞게 쓰려면: <ruby>仕事<rt>しごと</rt></ruby>中です。"
    },
    {
      tag: "(표현)",
      question: "연습하는 과정에서 늘었어요.",
      options: ["<ruby>練習<rt>れんしゅう</rt></ruby>する中で上手になりました。", "<ruby>練習<rt>れんしゅう</rt></ruby>する中です。"],
      answer: 0,
      explanation: "「〜する中で」는 연결 표현입니다. 「〜する中です」는 어색합니다.<br>오답을 맞게 쓰려면: <ruby>練習<rt>れんしゅう</rt></ruby>中です。"
    },
    {
      tag: "(표현)",
      question: "여행하는 과정에서 알게 됐어요.",
      options: ["旅行する中で分かりました。", "旅行する中です。"],
      answer: 0,
      explanation: "「〜する中で」는 연결 표현입니다. 「〜する中です」는 어색합니다.<br>오답을 맞게 쓰려면: 旅行中です。"
    },
    {
      tag: "(표현)",
      question: "지금 준비 중이에요.",
      options: ["準備中です。", "準備する中です。"],
      answer: 0,
      explanation: "명사+中는 자연스럽습니다. 동사원형+中는 직역 오류입니다.<br>오답을 맞게 쓰려면: 準備しています。"
    },
    {
      tag: "(표현)",
      question: "지금 기다리는 중이에요.",
      options: ["待っているところです。", "待つ中です。"],
      answer: 0,
      explanation: "진행은 「〜ているところ」입니다. 「待つ中」는 직역 오류입니다.<br>오답을 맞게 쓰려면: 待っています。"
    },
    {
      tag: "(표현)",
      question: "지금 밥 먹는 중이에요.",
      options: ["食べています。", "食べる中です。"],
      answer: 0,
      explanation: "진행은 「〜ています」입니다. 「食べる中」는 직역 오류입니다.<br>오답을 맞게 쓰려면: 食べているところです。"
    },
    {
      tag: "(표현)",
      question: "다음 곡을 들어 주세요.",
      options: ["<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を聞いてください。", "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を聞かせてあげます。"],
      answer: 0,
      explanation: "청중에게는 「聞いてください」입니다. 「聞かせてあげる」는 베푸는 뉘앙스가 납니다.<br>오답을 맞게 쓰려면: <ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を聞かせます。(내가 누군가에게 들려줄 때)"
    },
    {
      tag: "(표현)",
      question: "사진을 봐 주세요.",
      options: ["<ruby>写真<rt>しゃしん</rt></ruby>を見てください。", "<ruby>写真<rt>しゃしん</rt></ruby>を見せてあげます。"],
      answer: 0,
      explanation: "청중에게는 「見てください」가 자연스럽습니다. 「見せてあげる」는 베푸는 느낌입니다.<br>오답을 맞게 쓰려면: <ruby>友達<rt>ともだち</rt></ruby>に<ruby>写真<rt>しゃしん</rt></ruby>を見せてあげる。"
    },
    {
      tag: "(표현)",
      question: "선생님께 설명하겠습니다.",
      options: ["<ruby>先生<rt>せんせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>します。", "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>してあげます。"],
      answer: 0,
      explanation: "윗사람에게 「〜てあげる」는 부적절합니다.<br>오답을 맞게 쓰려면: <ruby>友達<rt>ともだち</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>してあげます。"
    },
    {
      tag: "(표현)",
      question: "(무대에서) 여러분을 행복하게 하겠습니다.",
      options: ["皆さんを幸せにします。", "皆さんを幸せにしてあげます。"],
      answer: 0,
      explanation: "청중에게 「〜てあげる」는 위에서 베푸는 느낌으로 어색합니다.<br>오답을 맞게 쓰려면(반말): 幸せにしてあげるよ。"
    },
    {
      tag: "(표현)",
      question: "(공식 톤) 최선을 다하겠습니다.",
      options: ["頑張ります。", "頑張ってあげます。"],
      answer: 0,
      explanation: "「頑張ってあげる」는 베푸는 느낌으로 어색합니다.<br>오답을 맞게 쓰려면: 弟のために頑張ってあげる。"
    },
    {
      tag: "(표현)",
      question: "많이 응원해 주세요.",
      options: ["たくさん応援してください。", "たくさん応援してあげてください。"],
      answer: 0,
      explanation: "청중에게 요청은 「〜してください」입니다. 「〜してあげる」는 베풂 뉘앙스입니다.<br>오답을 맞게 쓰려면: 後輩を応援してあげてください。"
    },
    {
      tag: "(표현)",
      question: "큰 목소리로 부탁드립니다.",
      options: ["大きい<ruby>声<rt>こえ</rt></ruby>でお願いします。", "大きい<ruby>声<rt>こえ</rt></ruby>でしてあげてください。"],
      answer: 0,
      explanation: "요청은 「お願いします」가 자연스럽습니다. 「してあげる」는 부적절합니다.<br>오답을 맞게 쓰려면: 手伝ってあげてください。"
    },
    {
      tag: "(표현)",
      question: "(연인에게) 내가 지켜 줄게.",
      options: ["守ってあげるよ。", "守ってください。"],
      answer: 0,
      explanation: "반말/친근 톤에서는 「〜てあげる」가 자연스럽습니다. 「守ってください」는 요청입니다.<br>오답을 맞게 쓰려면: 守ってください。(상대에게 부탁)"
    },
    {
      tag: "(표현)",
      question: "(친구에게) 내가 알려 줄게.",
      options: ["教えてあげる。", "教えてください。"],
      answer: 0,
      explanation: "친구 사이에서는 「教えてあげる」가 자연스럽습니다. 「教えてください」는 요청입니다.<br>오답을 맞게 쓰려면: 教えてください。(상대에게 부탁)"
    },
    {
      tag: "(표현)",
      question: "(무대에서) 끝까지 봐 주세요.",
      options: ["最後まで見てください。", "最後まで見てあげてください。"],
      answer: 0,
      explanation: "청중에게는 「見てください」입니다. 「見てあげる」는 베푸는 느낌입니다.<br>오답을 맞게 쓰려면: 子どもに見せてあげて。"
    },
    {
      tag: "(표현)",
      question: "(무대에서) 함께 즐겨 주세요.",
      options: ["一緒に楽しんでください。", "一緒に楽しんであげてください。"],
      answer: 0,
      explanation: "청중에게는 「楽しんでください」입니다. 「〜てあげる」는 베푸는 느낌입니다.<br>오답을 맞게 쓰려면: 弟を楽しませてあげる。"
    },
    {
      tag: "(표현)",
      question: "(후배에게) 내가 도와줄게.",
      options: ["手伝ってあげる。", "手伝ってください。"],
      answer: 0,
      explanation: "아랫사람에게는 「手伝ってあげる」가 자연스럽습니다. 「手伝ってください」는 요청입니다.<br>오답을 맞게 쓰려면: 手伝ってください。(상대에게 부탁)"
    },
    {
      tag: "(표현)",
      question: "(청중에게) 이 영상을 봐 주세요.",
      options: ["この映像を見てください。", "この映像を見せてください。"],
      answer: 0,
      explanation: "見てください=봐 주세요. 見せてください=보여 주세요로 방향이 다릅니다.<br>오답을 맞게 쓰려면: <ruby>写真<rt>しゃしん</rt></ruby>を見せてください。"
    },
    {
      tag: "(표현)",
      question: "(청중에게) 화면을 봐 주세요.",
      options: ["スクリーンをご覧ください。", "スクリーンを見せてください。"],
      answer: 0,
      explanation: "ご覧ください=보세요. 見せてください=보여 주세요입니다.<br>오답을 맞게 쓰려면: <ruby>写真<rt>しゃしん</rt></ruby>を見せてください。"
    },
    {
      tag: "(표현)",
      question: "이 사진을 보여 주세요.",
      options: ["<ruby>写真<rt>しゃしん</rt></ruby>を見せてください。", "<ruby>写真<rt>しゃしん</rt></ruby>を見てください。"],
      answer: 0,
      explanation: "見せてください=보여 주세요. 見てください=봐 주세요입니다.<br>오답을 맞게 쓰려면: スクリーンを見てください。"
    },
    {
      tag: "(표현)",
      question: "제 이야기를 들어 주세요.",
      options: ["私の話を聞いてください。", "私の話を聞かせてください。"],
      answer: 0,
      explanation: "聞いてください=들어 주세요. 聞かせてください=들려 주세요입니다.<br>오답을 맞게 쓰려면: 皆さんの<ruby>声<rt>こえ</rt></ruby>を聞かせてください。"
    },
    {
      tag: "(표현)",
      question: "여러분의 목소리를 들려 주세요!",
      options: ["皆さんの<ruby>声<rt>こえ</rt></ruby>を聞かせてください。", "皆さんの<ruby>声<rt>こえ</rt></ruby>を聞いてください。"],
      answer: 0,
      explanation: "청중이 소리를 내는 상황은 聞かせてください가 맞습니다.<br>오답을 맞게 쓰려면: 私の話を聞いてください。"
    },
    {
      tag: "(표현)",
      question: "다음 곡을 들어 주세요.",
      options: ["<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を聞いてください。", "<ruby>次<rt>つぎ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>を聞かせてください。"],
      answer: 0,
      explanation: "聞いてください=들어 주세요. 聞かせてください=들려 주세요입니다.<br>오답을 맞게 쓰려면: 皆さんの<ruby>声<rt>こえ</rt></ruby>を聞かせてください。"
    },
    {
      tag: "(표현)",
      question: "(청중에게) 여기 보세요!",
      options: ["こっちを見てください。", "こっちを見せてください。"],
      answer: 0,
      explanation: "見てください=봐 주세요. 見せてください=보여 주세요입니다.<br>오답을 맞게 쓰려면: <ruby>写真<rt>しゃしん</rt></ruby>を見せてください。"
    },
    {
      tag: "(표현)",
      question: "(청중에게) 잘 들어 주세요.",
      options: ["よく聞いてください。", "よく聞かせてください。"],
      answer: 0,
      explanation: "聞いてください=들어 주세요. 聞かせてください=들려 주세요입니다.<br>오답을 맞게 쓰려면: <ruby>声<rt>こえ</rt></ruby>を聞かせてください。"
    },
    {
      tag: "(표현)",
      question: "저에게 사진을 보여 주세요.",
      options: ["<ruby>写真<rt>しゃしん</rt></ruby>を見せてください。", "<ruby>写真<rt>しゃしん</rt></ruby>をご覧ください。"],
      answer: 0,
      explanation: "見せてください=보여 주세요. ご覧ください=보세요(청중)입니다.<br>오답을 맞게 쓰려면: スクリーンをご覧ください。"
    },
    {
      tag: "(표현)",
      question: "VTR을 봐 주세요.",
      options: ["VTRをご覧ください。", "VTRを見てください。"],
      answer: 0,
      explanation: "이 문장에서는 ‘청중에게’라면 ご覧ください가 더 맞는 표현으로 취급합니다.<br>오답을 맞게 쓰려면: この映像を見てください。(일반 시청 요청)"
    },
    {
      tag: "(표현)",
      question: "여러분의 응원봉을 보여 주세요!",
      options: ["皆さんのペンライトを見せてください。", "皆さんのペンライトを見てください。"],
      answer: 0,
      explanation: "보여 달라는 요청은 見せてください입니다.<br>오답을 맞게 쓰려면: スクリーンを見てください。"
    },
    {
      tag: "(표현)",
      question: "이쪽을 봐 주세요.",
      options: ["こちらを見てください。", "こちらをご覧ください。"],
      answer: 0,
      explanation: "청중에게 간단히 ‘봐 주세요’는 見てください로 처리합니다.<br>오답을 맞게 쓰려면: スクリーンをご覧ください。"
    },
    {
      tag: "(표현)",
      question: "(무대에서 스태프에게) 다음 문제 넘겨 주세요.",
      options: ["<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お願いします。", "<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を見せてください。"],
      answer: 0,
      explanation: "스태프에게 진행 요청은 お願いします입니다. 見せてください는 ‘보여 주세요’입니다.<br>오답을 맞게 쓰려면: <ruby>写真<rt>しゃしん</rt></ruby>を見せてください。"
    },
    {
      tag: "(표현)",
      question: "(무대에서 스태프에게) 다음 영상 부탁해요.",
      options: ["<ruby>次<rt>つぎ</rt></ruby>のVTR、お願いします。", "<ruby>次<rt>つぎ</rt></ruby>のVTRどうぞ。"],
      answer: 0,
      explanation: "스태프에게는 お願いします가 자연스럽습니다. どうぞ는 청중에게 넘길 때 더 씁니다.<br>오답을 맞게 쓰려면:では、<ruby>次<rt>つぎ</rt></ruby>のVTRどうぞ。"
    },
    {
      tag: "(표현)",
      question: "(청중에게) 자, 다음 문제입니다.",
      options: ["では、<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>どうぞ。", "では、<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>お願いします。"],
      answer: 0,
      explanation: "청중에게 넘길 때는 どうぞ가 자연스럽습니다. お願いします는 요청 느낌입니다.<br>오답을 맞게 쓰려면: <ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>、お願いします。"
    },
    {
      tag: "(표현)",
      question: "잠시만 기다려 주세요.",
      options: ["少し待ってください。", "少しお待ちしてください。"],
      answer: 0,
      explanation: "「お待ちしてください」는 잘못된 형태입니다.<br>오답을 맞게 쓰려면: 少々お待ちください。"
    },
    {
      tag: "(표현)",
      question: "조금만 기다려 주세요. (정중)",
      options: ["少々お待ちください。", "少々お待ちします。"],
      answer: 0,
      explanation: "청중에게 요청은 お待ちください입니다. お待ちします는 내가 기다린다는 뜻이 됩니다.<br>오답을 맞게 쓰려면: 少々お待ちします。(내가 기다림)"
    },
    {
      tag: "(표현)",
      question: "조용히 해 주세요.",
      options: ["静かにしてください。", "静かをしてください。"],
      answer: 0,
      explanation: "형용동사는 「静かに」로 연결합니다. 「静かを」는 문법 오류입니다.<br>오답을 맞게 쓰려면: 静かな<ruby>部屋<rt>へや</rt></ruby>。(수식)"
    },
    {
      tag: "(표현)",
      question: "여기에서 기다려 주세요.",
      options: ["ここで待ってください。", "ここに待ってください。"],
      answer: 0,
      explanation: "행동 장소는で입니다. 「に待つ」는 어색합니다.<br>오답을 맞게 쓰려면: ここに来てください。(도착)"
    },
    {
      tag: "(표현)",
      question: "박수 부탁드립니다.",
      options: ["拍手をお願いします。", "拍手をください。"],
      answer: 0,
      explanation: "행위 요청은 お願いします가 자연스럽습니다. ください는 물건 요청에 씁니다.<br>오답을 맞게 쓰려면: 水をください。"
    },
    {
      tag: "(표현)",
      question: "조심해 주세요.",
      options: ["気をつけてください。", "気をついてください。"],
      answer: 0,
      explanation: "조심하다=気をつける. 気をつく는 뜻이 다릅니다.<br>오답을 맞게 쓰려면: 気がつきました。(깨달았다)"
    },
    {
      tag: "(표현)",
      question: "협조 부탁드립니다.",
      options: ["ご協力お願いします。", "ご協力くださいお願いします。"],
      answer: 0,
      explanation: "「くださいお願いします」는 중복되어 어색/오류입니다.<br>오답을 맞게 쓰려면: ご協力ください。"
    },
    {
      tag: "(표현)",
      question: "오늘 공연 정말 즐거웠어요.",
      options: ["今日のライブは楽しかったです。", "今日の<ruby>舞台<rt>ぶたい</rt></ruby>は楽しかったです。"],
      answer: 0,
      explanation: "콘서트/음악 공연은 ライブ/ステージ가 자연스럽습니다. <ruby>舞台<rt>ぶたい</rt></ruby>는 연극/뮤지컬입니다.<br>오답을 맞게 쓰려면: ミュージカルの<ruby>舞台<rt>ぶたい</rt></ruby>は素晴らしかったです。"
    },
    {
      tag: "(표현)",
      question: "뮤지컬 무대에 섰어요.",
      options: ["ミュージカルの<ruby>舞台<rt>ぶたい</rt></ruby>に立ちました。", "ミュージカルのライブに行きました。"],
      answer: 0,
      explanation: "뮤지컬은 <ruby>舞台<rt>ぶたい</rt></ruby>, 라이브는 콘서트입니다.<br>오답을 맞게 쓰려면: コンサートのライブに行きました。"
    },
    {
      tag: "(표현)",
      question: "공식 안내: 6시에 시작합니다.",
      options: ["本日の<ruby>公演<rt>こうえん</rt></ruby>は6時に始まります。", "本日のライブは6時に始まります。"],
      answer: 0,
      explanation: "공지/안내 문맥은 <ruby>公演<rt>こうえん</rt></ruby>이 자연스럽습니다.<br>오답을 맞게 쓰려면: 今日のライブ楽しかった？"
    },
    {
      tag: "(표현)",
      question: "멤버 전원이 왔어요.",
      options: ["メンバー<ruby>全員<rt>ぜんいん</rt></ruby>が来ました。", "メンバー<ruby>全部<rt>ぜんぶ</rt></ruby>が来ました。"],
      answer: 0,
      explanation: "사람은 <ruby>全員<rt>ぜんいん</rt></ruby>, 사물은 <ruby>全部<rt>ぜんぶ</rt></ruby>입니다.<br>오답을 맞게 쓰려면: チケットは<ruby>全部<rt>ぜんぶ</rt></ruby>売れました。"
    },
    {
      tag: "(표현)",
      question: "준비는 다 끝났어요. (사물)",
      options: ["準備は<ruby>全部<rt>ぜんぶ</rt></ruby>終わりました。", "準備は<ruby>全員<rt>ぜんいん</rt></ruby>終わりました。"],
      answer: 0,
      explanation: "사물은 <ruby>全部<rt>ぜんぶ</rt></ruby>입니다. <ruby>全員<rt>ぜんいん</rt></ruby>은 사람입니다.<br>오답을 맞게 쓰려면: スタッフ<ruby>全員<rt>ぜんいん</rt></ruby>集合。"
    },
    {
      tag: "(표현)",
      question: "센터도 사이드도 고마워!",
      options: ["センターの方もサイドの方もありがとうございます！", "<ruby>隣<rt>となり</rt></ruby>も<ruby>真ん中<rt>まんなか</rt></ruby>もありがとう！"],
      answer: 0,
      explanation: "구역은 センター/サイド/<ruby>右<rt>みぎ</rt></ruby>/<ruby>左<rt>ひだり</rt></ruby>/<ruby>真ん中<rt>まんなか</rt></ruby>. <ruby>隣<rt>となり</rt></ruby>는 사람 기준 ‘옆’입니다.<br>오답을 맞게 쓰려면: 私の<ruby>隣<rt>となり</rt></ruby>に来てくれてありがとう。"
    },
    {
      tag: "(표현)",
      question: "가운데도 최고예요!",
      options: ["<ruby>真ん中<rt>まんなか</rt></ruby>も最高！", "そばも最高！"],
      answer: 0,
      explanation: "구역은 <ruby>真ん中<rt>まんなか</rt></ruby>/センター. そば는 ‘곁’입니다.<br>오답을 맞게 쓰려면: そばにいてください。"
    },
    {
      tag: "(표현)",
      question: "왼쪽도 잘 보이나요?",
      options: ["<ruby>左<rt>ひだり</rt></ruby>も見えますか。", "<ruby>隣<rt>となり</rt></ruby>も見えますか。"],
      answer: 0,
      explanation: "구역은 <ruby>左<rt>ひだり</rt></ruby>/<ruby>右<rt>みぎ</rt></ruby>로 부릅니다. <ruby>隣<rt>となり</rt></ruby>는 사람 기준입니다.<br>오답을 맞게 쓰려면: <ruby>隣<rt>となり</rt></ruby>の人。"
    },
    {
      tag: "(표현)",
      question: "제 옆에 와 줘서 고마워.",
      options: ["<ruby>隣<rt>となり</rt></ruby>に来てくれてありがとう。", "<ruby>右<rt>みぎ</rt></ruby>に来てくれてありがとう。"],
      answer: 0,
      explanation: "‘옆’은 <ruby>隣<rt>となり</rt></ruby>. <ruby>右<rt>みぎ</rt></ruby>는 방향이라 의미가 달라집니다.<br>오답을 맞게 쓰려면: <ruby>右<rt>みぎ</rt></ruby>に立ってください。"
    },
    {
      tag: "(표현)",
      question: "앞으로도 지켜봐 주세요.",
      options: ["これからも見守ってください。", "これからもご覧ください。"],
      answer: 0,
      explanation: "見守る=지켜보다(응원). ご覧ください=보세요(시청). 의미가 다릅니다.<br>오답을 맞게 쓰려면: VTRをご覧ください。"
    },
    {
      tag: "(표현)",
      question: "VTR을 봐 주세요.",
      options: ["VTRをご覧ください。", "VTRを見せてください。"],
      answer: 0,
      explanation: "ご覧ください=보세요. 見せてください=보여 주세요입니다.<br>오답을 맞게 쓰려면: <ruby>写真<rt>しゃしん</rt></ruby>を見せてください。"
    },
    {
      tag: "(표현)",
      question: "여러분의 응원봉을 보여 주세요!",
      options: ["ペンライトを見せてください。", "ペンライトをご覧ください。"],
      answer: 0,
      explanation: "보여 달라는 요청은 見せてください입니다. ご覧ください는 ‘보세요’입니다.<br>오답을 맞게 쓰려면: スクリーンをご覧ください。"
    },
    {
      tag: "(표현)",
      question: "앞으로도 계속 노력하겠습니다.",
      options: ["これからも頑張っていきます。", "これからも頑張ってきます。"],
      answer: 0,
      explanation: "〜ていく=앞으로 이어짐. 〜てくる=지금까지의 흐름입니다.<br>오답을 맞게 쓰려면: 今まで頑張ってきました。"
    },
    {
      tag: "(표현)",
      question: "지금까지 열심히 해왔어요.",
      options: ["今まで頑張ってきました。", "今まで頑張っていきました。"],
      answer: 0,
      explanation: "〜てくる=지금까지의 흐름입니다. 〜ていく는 앞으로입니다.<br>오답을 맞게 쓰려면: これから頑張っていきます。"
    },
    {
      tag: "(표현)",
      question: "오늘 비가 올 것 같아요. (하늘 보며)",
      options: ["<ruby>雨<rt>あめ</rt></ruby>が降りそうです。", "<ruby>雨<rt>あめ</rt></ruby>が降るらしいです。"],
      answer: 0,
      explanation: "보이는 추측은 〜そうです. らしい는 소문/전달입니다.<br>오답을 맞게 쓰려면: <ruby>雨<rt>あめ</rt></ruby>が降るらしいよ。(들었을 때)"
    },
    {
      tag: "(표현)",
      question: "한번 해 볼게요.",
      options: ["やってみます。", "やってみせます。"],
      answer: 0,
      explanation: "〜てみる=시도. 〜てみせる=해내 보이겠다(강한 의지)입니다.<br>오답을 맞게 쓰려면: 必ず成功してみせます。"
    },
    {
      tag: "(표현)",
      question: "결심했어요. 오늘은 쉬기로 했어요.",
      options: ["今日は休むことにしました。", "今日は休むようにしました。"],
      answer: 0,
      explanation: "ことにする=결정. ようにする=노력/습관입니다.<br>오답을 맞게 쓰려면: 早く寝るようにしています。"
    },
    {
      tag: "(표현)",
      question: "늦지 않도록 할게요.",
      options: ["遅れないようにします。", "遅れないことにします。"],
      answer: 0,
      explanation: "ようにする=노력/조심. ことにする는 결정 느낌입니다.<br>오답을 맞게 쓰려면: 今日は早く帰ることにします。"
    },
    {
      tag: "(표현)",
      question: "소문으로는 내일 온대요.",
      options: ["明日来るらしいです。", "明日来そうです。"],
      answer: 0,
      explanation: "전달/소문은 らしい. 来そう는 ‘올 것처럼 보인다’입니다.<br>오답을 맞게 쓰려면: <ruby>雨<rt>あめ</rt></ruby>が降りそうです。"
    },
    {
      tag: "(표현)",
      question: "벌써 끝나 버렸어요.",
      options: ["もう終わってしまいました。", "もう終わりましたしまいました。"],
      answer: 0,
      explanation: "〜てしまう는 완료/아쉬움. ましたしまいました는 연결 오류입니다.<br>오답을 맞게 쓰려면: 終わってしまいました。"
    },
    {
      tag: "(표현)",
      question: "이거밖에 없어요.",
      options: ["これしかありません。", "これだけありません。"],
      answer: 0,
      explanation: "しか〜ない=~밖에 없다. だけありません는 의미가 다릅니다.<br>오답을 맞게 쓰려면: これだけあります。"
    },
    {
      tag: "(표현)",
      question: "그는 올 거예요. (확신)",
      options: ["彼は来るはずです。", "彼は来るべきです。"],
      answer: 0,
      explanation: "はず=예상/확신. べき=당위입니다.<br>오답을 맞게 쓰려면: 来るべきです。(와야 한다)"
    }
  ]
};

export default masterDB;