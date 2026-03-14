// data/kanji.js (별빛노트 - 한자 통합본 130문항) [FINAL v3]
// - 동사/형용사 표제어가 한자 1글자(乗/降/換/遅/辛/甘/酸 등)로 덜렁 나오던 문제 수정
//   → 乗る / 降りる / 乗り換える / 遅れる / 辛い / 甘い / 酸っぱい 등 '기본형 전체'로 통일
// - 보기(options)는 한국어만 사용
// - 해설: 「단어」는 '뜻'이라는 뜻입니다. (필요 시 한 줄 보강) + 자연스러운 예문 + 번역

(function () {
  window.masterDB = window.masterDB || {};
  window.masterDB.kanji = [
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>公演<rt>こうえん</rt></ruby>의 뜻은?",
    "options": [
      "공연",
      "연습"
    ],
    "answer": 0,
    "explanation": "「<ruby>公演<rt>こうえん</rt></ruby>」는 '공연'이라는 뜻입니다.<br><br><b><ruby>公演<rt>こうえん</rt></ruby>は18<ruby>時<rt>じ</rt></ruby>からです。</b><br>공연은 18시부터입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>開演<rt>かいえん</rt></ruby>의 뜻은?",
    "options": [
      "공연 시작",
      "입장 시작"
    ],
    "answer": 0,
    "explanation": "「<ruby>開演<rt>かいえん</rt></ruby>」는 '공연 시작'이라는 뜻입니다.<br><br><b><ruby>開演<rt>かいえん</rt></ruby>は19<ruby>時<rt>じ</rt></ruby>です。</b><br>공연 시작은 19시입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>終演<rt>しゅうえん</rt></ruby>의 뜻은?",
    "options": [
      "공연 종료",
      "공연 시작"
    ],
    "answer": 0,
    "explanation": "「<ruby>終演<rt>しゅうえん</rt></ruby>」는 '공연 종료'라는 뜻입니다.<br><br><b><ruby>終演<rt>しゅうえん</rt></ruby>は21<ruby>時<rt>じ</rt></ruby>ごろです。</b><br>공연 종료는 21시쯤입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>開場<rt>かいじょう</rt></ruby>의 뜻은?",
    "options": [
      "입장 시작(개장)",
      "공연 시작"
    ],
    "answer": 0,
    "explanation": "「<ruby>開場<rt>かいじょう</rt></ruby>」는 '입장 시작(개장)'이라는 뜻입니다.<br><br><b><ruby>開場<rt>かいじょう</rt></ruby>は18<ruby>時<rt>じ</rt></ruby>、<ruby>開演<rt>かいえん</rt></ruby>は19<ruby>時<rt>じ</rt></ruby>です。</b><br>입장은 18시, 공연 시작은 19시입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>本番<rt>ほんばん</rt></ruby>의 뜻은?",
    "options": [
      "본공연(본방)",
      "연습"
    ],
    "answer": 0,
    "explanation": "「<ruby>本番<rt>ほんばん</rt></ruby>」는 '본공연(본방)'이라는 뜻입니다.<br><br><b><ruby>本番<rt>ほんばん</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby>の19<ruby>時<rt>じ</rt></ruby>です。</b><br>본공연은 오늘 19시입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>楽屋<rt>がくや</rt></ruby>의 뜻은?",
    "options": [
      "대기실",
      "무대"
    ],
    "answer": 0,
    "explanation": "「<ruby>楽屋<rt>がくや</rt></ruby>」는 '대기실'이라는 뜻입니다.<br><br><b><ruby>楽屋<rt>がくや</rt></ruby>で<ruby>準備<rt>じゅんび</rt></ruby>します。</b><br>대기실에서 준비합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>演出<rt>えんしゅつ</rt></ruby>의 뜻은?",
    "options": [
      "연출",
      "조명"
    ],
    "answer": 0,
    "explanation": "「<ruby>演出<rt>えんしゅつ</rt></ruby>」는 '연출'이라는 뜻입니다.<br><br><b><ruby>演出<rt>えんしゅつ</rt></ruby>がすごかったです。</b><br>연출이 대단했어요."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>照明<rt>しょうめい</rt></ruby>의 뜻은?",
    "options": [
      "조명",
      "음향"
    ],
    "answer": 0,
    "explanation": "「<ruby>照明<rt>しょうめい</rt></ruby>」는 '조명'이라는 뜻입니다.<br><br><b><ruby>照明<rt>しょうめい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。</b><br>조명을 확인합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>音響<rt>おんきょう</rt></ruby>의 뜻은?",
    "options": [
      "음향",
      "좌석"
    ],
    "answer": 0,
    "explanation": "「<ruby>音響<rt>おんきょう</rt></ruby>」는 '음향'이라는 뜻입니다.<br><br><b><ruby>音響<rt>おんきょう</rt></ruby>チェックをします。</b><br>음향 체크를 합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>音量<rt>おんりょう</rt></ruby>의 뜻은?",
    "options": [
      "음량",
      "조명"
    ],
    "answer": 0,
    "explanation": "「<ruby>音量<rt>おんりょう</rt></ruby>」는 '음량'이라는 뜻입니다.<br><br><b><ruby>音量<rt>おんりょう</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。</b><br>음량을 올려 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>舞台<rt>ぶたい</rt></ruby>의 뜻은?",
    "options": [
      "무대(연극·뮤지컬 느낌)",
      "좌석"
    ],
    "answer": 0,
    "explanation": "「<ruby>舞台<rt>ぶたい</rt></ruby>」는 '무대(연극·뮤지컬 느낌)'이라는 뜻입니다.<br><br><b>ミュージカルの<ruby>舞台<rt>ぶたい</rt></ruby>を<ruby>観<rt>み</rt></ruby>ました。</b><br>뮤지컬 무대를 봤습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>座席<rt>ざせき</rt></ruby>의 뜻은?",
    "options": [
      "좌석",
      "무대"
    ],
    "answer": 0,
    "explanation": "「<ruby>座席<rt>ざせき</rt></ruby>」는 '좌석'이라는 뜻입니다.<br><br><b><ruby>座席<rt>ざせき</rt></ruby>は<ruby>指定<rt>してい</rt></ruby>です。</b><br>좌석은 지정석입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>入場<rt>にゅうじょう</rt></ruby>의 뜻은?",
    "options": [
      "입장",
      "퇴장"
    ],
    "answer": 0,
    "explanation": "「<ruby>入場<rt>にゅうじょう</rt></ruby>」는 '입장'이라는 뜻입니다.<br><br><b><ruby>入場<rt>にゅうじょう</rt></ruby>は18<ruby>時<rt>じ</rt></ruby>からです。</b><br>입장은 18시부터입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>再入場<rt>さいにゅうじょう</rt></ruby>의 뜻은?",
    "options": [
      "재입장",
      "입장 금지"
    ],
    "answer": 0,
    "explanation": "「<ruby>再入場<rt>さいにゅうじょう</rt></ruby>」는 '재입장'이라는 뜻입니다.<br><br><b><ruby>退場<rt>たいじょう</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>再入場<rt>さいにゅうじょう</rt></ruby>はできません。</b><br>퇴장 후 재입장은 불가능합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>申込<rt>もうしこみ</rt></ruby>의 뜻은?",
    "options": [
      "신청",
      "환불"
    ],
    "answer": 0,
    "explanation": "「<ruby>申込<rt>もうしこみ</rt></ruby>」는 '신청'이라는 뜻입니다.<br><br><b>チケットの<ruby>申込<rt>もうしこみ</rt></ruby>をしました。</b><br>티켓 신청을 했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>抽選<rt>ちゅうせん</rt></ruby>의 뜻은?",
    "options": [
      "추첨",
      "선착순"
    ],
    "answer": 0,
    "explanation": "「<ruby>抽選<rt>ちゅうせん</rt></ruby>」는 '추첨'이라는 뜻입니다.<br><br><b><ruby>抽選<rt>ちゅうせん</rt></ruby><ruby>結果<rt>けっか</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。</b><br>추첨 결과를 확인해 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>当選<rt>とうせん</rt></ruby>의 뜻은?",
    "options": [
      "당첨",
      "낙첨"
    ],
    "answer": 0,
    "explanation": "「<ruby>当選<rt>とうせん</rt></ruby>」는 '당첨'이라는 뜻입니다.<br><br><b><ruby>当選<rt>とうせん</rt></ruby>メールが<ruby>届<rt>とど</rt></ruby>きました。</b><br>당첨 메일이 도착했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>落選<rt>らくせん</rt></ruby>의 뜻은?",
    "options": [
      "낙첨",
      "당첨"
    ],
    "answer": 0,
    "explanation": "「<ruby>落選<rt>らくせん</rt></ruby>」는 '낙첨'이라는 뜻입니다.<br><br><b><ruby>今回<rt>こんかい</rt></ruby>は<ruby>落選<rt>らくせん</rt></ruby>しました。</b><br>이번에는 낙첨했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>完売<rt>かんばい</rt></ruby>의 뜻은?",
    "options": [
      "매진",
      "빈자리"
    ],
    "answer": 0,
    "explanation": "「<ruby>完売<rt>かんばい</rt></ruby>」는 '매진'이라는 뜻입니다.<br><br><b>チケットは<ruby>完売<rt>かんばい</rt></ruby>しました。</b><br>티켓은 매진되었습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>通販<rt>つうはん</rt></ruby>의 뜻은?",
    "options": [
      "온라인 판매",
      "현장 입장"
    ],
    "answer": 0,
    "explanation": "「<ruby>通販<rt>つうはん</rt></ruby>」는 '온라인 판매'라는 뜻입니다.<br><br><b>グッズは<ruby>通販<rt>つうはん</rt></ruby>でも<ruby>購入<rt>こうにゅう</rt></ruby>できます。</b><br>굿즈는 온라인으로도 구매할 수 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>始<rt>はじ</rt></ruby>まる의 뜻은?",
    "options": [
      "시작되다",
      "끝나다"
    ],
    "answer": 0,
    "explanation": "「<ruby>始<rt>はじ</rt></ruby>まる」는 '시작되다'라는 뜻입니다.<br><br><b>ライブはもうすぐ<ruby>始<rt>はじ</rt></ruby>まります。</b><br>라이브는 곧 시작됩니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>終<rt>お</rt></ruby>わる의 뜻은?",
    "options": [
      "끝나다",
      "계속되다"
    ],
    "answer": 0,
    "explanation": "「<ruby>終<rt>お</rt></ruby>わる」는 '끝나다'라는 뜻입니다.<br><br><b>イベントは21<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わります。</b><br>이벤트는 21시에 끝납니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>続<rt>つづ</rt></ruby>く의 뜻은?",
    "options": [
      "이어지다",
      "멈추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>続<rt>つづ</rt></ruby>く」는 '이어지다'라는 뜻입니다.<br><br><b>アンコールはまだ<ruby>続<rt>つづ</rt></ruby>きます。</b><br>앙코르는 아직 이어집니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>立<rt>た</rt></ruby>つ의 뜻은?",
    "options": [
      "서다",
      "앉다"
    ],
    "answer": 0,
    "explanation": "「<ruby>立<rt>た</rt></ruby>つ」는 '서다'라는 뜻입니다.<br><br><b><ruby>歌<rt>うた</rt></ruby>う<ruby>前<rt>まえ</rt></ruby>にステージに<ruby>立<rt>た</rt></ruby>ちます。</b><br>노래하기 전에 무대에 섭니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>座<rt>すわ</rt></ruby>る의 뜻은?",
    "options": [
      "앉다",
      "일어나다"
    ],
    "answer": 0,
    "explanation": "「<ruby>座<rt>すわ</rt></ruby>る」는 '앉다'라는 뜻입니다.<br><br><b>こちらの<ruby>席<rt>せき</rt></ruby>に<ruby>座<rt>すわ</rt></ruby>ってください。</b><br>이 자리로 앉아 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>見<rt>み</rt></ruby>える의 뜻은?",
    "options": [
      "보이다",
      "보여 주다"
    ],
    "answer": 0,
    "explanation": "「<ruby>見<rt>み</rt></ruby>える」는 '보이다'라는 뜻입니다.<br><br><b><ruby>後<rt>うし</rt></ruby>ろの<ruby>席<rt>せき</rt></ruby>からもステージがよく<ruby>見<rt>み</rt></ruby>えます。</b><br>뒤쪽 자리에서도 무대가 잘 보입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>聞<rt>き</rt></ruby>こえる의 뜻은?",
    "options": [
      "들리다",
      "들려주다"
    ],
    "answer": 0,
    "explanation": "「<ruby>聞<rt>き</rt></ruby>こえる」는 '들리다'라는 뜻입니다.<br><br><b>マイクの<ruby>声<rt>こえ</rt></ruby>がよく<ruby>聞<rt>き</rt></ruby>こえません。</b><br>마이크 소리가 잘 들리지 않습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>近<rt>ちか</rt></ruby>い의 뜻은?",
    "options": [
      "가깝다",
      "멀다"
    ],
    "answer": 0,
    "explanation": "「<ruby>近<rt>ちか</rt></ruby>い」는 '가깝다'라는 뜻입니다.<br><br><b>ここから<ruby>駅<rt>えき</rt></ruby>は<ruby>近<rt>ちか</rt></ruby>いです。</b><br>여기서 역은 가깝습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>遠<rt>とお</rt></ruby>い의 뜻은?",
    "options": [
      "멀다",
      "가깝다"
    ],
    "answer": 0,
    "explanation": "「<ruby>遠<rt>とお</rt></ruby>い」는 '멀다'라는 뜻입니다.<br><br><b><ruby>空港<rt>くうこう</rt></ruby>はここから<ruby>少<rt>すこ</rt></ruby>し<ruby>遠<rt>とお</rt></ruby>いです。</b><br>공항은 여기서 조금 멉니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>遅<rt>おそ</rt></ruby>い의 뜻은?",
    "options": [
      "늦다",
      "빠르다"
    ],
    "answer": 0,
    "explanation": "「<ruby>遅<rt>おそ</rt></ruby>い」는 '늦다'라는 뜻입니다.<br><br><b>この<ruby>時間<rt>じかん</rt></ruby>のバスは<ruby>少<rt>すこ</rt></ruby>し<ruby>遅<rt>おそ</rt></ruby>いです。</b><br>이 시간대 버스는 조금 늦습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>早<rt>はや</rt></ruby>い의 뜻은?",
    "options": [
      "빠르다",
      "늦다"
    ],
    "answer": 0,
    "explanation": "「<ruby>早<rt>はや</rt></ruby>い」는 '빠르다'라는 뜻입니다.<br><br><b>この<ruby>道<rt>みち</rt></ruby>のほうが<ruby>早<rt>はや</rt></ruby>いです。</b><br>이 길이 더 빠릅니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>歌<rt>うた</rt></ruby>う의 뜻은?",
    "options": [
      "노래하다",
      "춤추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>歌<rt>うた</rt></ruby>う」는 '노래하다'라는 뜻입니다.<br><br><b>この<ruby>曲<rt>きょく</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>います。</b><br>이 곡을 노래합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>踊<rt>おど</rt></ruby>る의 뜻은?",
    "options": [
      "춤추다",
      "노래하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>踊<rt>おど</rt></ruby>る」는 '춤추다'라는 뜻입니다.<br><br><b>ステージで<ruby>踊<rt>おど</rt></ruby>ります。</b><br>무대에서 춤춥니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>拍手<rt>はくしゅ</rt></ruby>의 뜻은?",
    "options": [
      "박수",
      "함성"
    ],
    "answer": 0,
    "explanation": "「<ruby>拍手<rt>はくしゅ</rt></ruby>」는 '박수'라는 뜻입니다.<br><br><b><ruby>拍手<rt>はくしゅ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>박수 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>声援<rt>せいえん</rt></ruby>의 뜻은?",
    "options": [
      "응원 소리",
      "조명"
    ],
    "answer": 0,
    "explanation": "「<ruby>声援<rt>せいえん</rt></ruby>」는 '응원 소리'라는 뜻입니다.<br><br><b><ruby>温<rt>あたた</rt></ruby>かい<ruby>声援<rt>せいえん</rt></ruby>、ありがとうございます。</b><br>따뜻한 응원 감사합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>歓声<rt>かんせい</rt></ruby>의 뜻은?",
    "options": [
      "환호성",
      "예매"
    ],
    "answer": 0,
    "explanation": "「<ruby>歓声<rt>かんせい</rt></ruby>」는 '환호성'이라는 뜻입니다.<br><br><b><ruby>歓声<rt>かんせい</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえました。</b><br>환호성이 들렸습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>観客<rt>かんきゃく</rt></ruby>의 뜻은?",
    "options": [
      "관객",
      "출연자"
    ],
    "answer": 0,
    "explanation": "「<ruby>観客<rt>かんきゃく</rt></ruby>」는 '관객'이라는 뜻입니다.<br><br><b><ruby>観客<rt>かんきゃく</rt></ruby>がたくさん<ruby>集<rt>あつ</rt></ruby>まりました。</b><br>관객이 많이 모였습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>客席<rt>きゃくせき</rt></ruby>의 뜻은?",
    "options": [
      "객석",
      "무대"
    ],
    "answer": 0,
    "explanation": "「<ruby>客席<rt>きゃくせき</rt></ruby>」는 '객석'이라는 뜻입니다.<br><br><b><ruby>客席<rt>きゃくせき</rt></ruby>までよく<ruby>見<rt>み</rt></ruby>えます。</b><br>객석까지 잘 보입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>満席<rt>まんせき</rt></ruby>의 뜻은?",
    "options": [
      "만석",
      "빈자리"
    ],
    "answer": 0,
    "explanation": "「<ruby>満席<rt>まんせき</rt></ruby>」는 '만석'이라는 뜻입니다.<br><br><b>きょうは<ruby>満席<rt>まんせき</rt></ruby>です。</b><br>오늘은 만석입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>緊張<rt>きんちょう</rt></ruby>의 뜻은?",
    "options": [
      "긴장",
      "응원"
    ],
    "answer": 0,
    "explanation": "「<ruby>緊張<rt>きんちょう</rt></ruby>」는 '긴장'이라는 뜻입니다.<br><br><b>ステージの<ruby>前<rt>まえ</rt></ruby>で<ruby>緊張<rt>きんちょう</rt></ruby>しています。</b><br>무대 전에 긴장하고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>応援<rt>おうえん</rt></ruby>의 뜻은?",
    "options": [
      "응원",
      "연기"
    ],
    "answer": 0,
    "explanation": "「<ruby>応援<rt>おうえん</rt></ruby>」는 '응원'이라는 뜻입니다.<br><br><b>たくさんの<ruby>応援<rt>おうえん</rt></ruby>をありがとうございます。</b><br>많은 응원 감사합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>笑顔<rt>えがお</rt></ruby>의 뜻은?",
    "options": [
      "웃는 얼굴",
      "조명"
    ],
    "answer": 0,
    "explanation": "「<ruby>笑顔<rt>えがお</rt></ruby>」는 '웃는 얼굴'이라는 뜻입니다.<br><br><b>みんなの<ruby>笑顔<rt>えがお</rt></ruby>が<ruby>見<rt>み</rt></ruby>えました。</b><br>모두의 웃는 얼굴이 보였습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>出演<rt>しゅつえん</rt></ruby>する의 뜻은?",
    "options": [
      "출연하다",
      "퇴장하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>出演<rt>しゅつえん</rt></ruby>する」는 '출연하다'라는 뜻입니다.<br><br><b>あの<ruby>俳優<rt>はいゆう</rt></ruby>も<ruby>出演<rt>しゅつえん</rt></ruby>します。</b><br>저 배우도 출연합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>登場<rt>とうじょう</rt></ruby>する의 뜻은?",
    "options": [
      "등장하다",
      "예약하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>登場<rt>とうじょう</rt></ruby>する」는 '등장하다'라는 뜻입니다.<br><br><b>メンバーがステージに<ruby>登場<rt>とうじょう</rt></ruby>しました。</b><br>멤버가 무대에 등장했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>退場<rt>たいじょう</rt></ruby>する의 뜻은?",
    "options": [
      "퇴장하다",
      "입장하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>退場<rt>たいじょう</rt></ruby>する」는 '퇴장하다'라는 뜻입니다.<br><br><b>スタッフの<ruby>案内<rt>あんない</rt></ruby>で<ruby>退場<rt>たいじょう</rt></ruby>してください。</b><br>스태프 안내에 따라 퇴장해 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>響<rt>ひび</rt></ruby>く의 뜻은?",
    "options": [
      "울려 퍼지다",
      "멈추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>響<rt>ひび</rt></ruby>く」는 '울려 퍼지다'라는 뜻입니다.<br><br><b><ruby>会場<rt>かいじょう</rt></ruby>にドラムの<ruby>音<rt>おと</rt></ruby>が<ruby>響<rt>ひび</rt></ruby>きます。</b><br>공연장에 드럼 소리가 울려 퍼집니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>盛<rt>も</rt></ruby>り<ruby>上<rt>あ</rt></ruby>がる의 뜻은?",
    "options": [
      "분위기가 달아오르다",
      "잠잠해지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>盛<rt>も</rt></ruby>り<ruby>上<rt>あ</rt></ruby>がる」는 '분위기가 달아오르다'라는 뜻입니다.<br><br><b>サビでいっきに<ruby>盛<rt>も</rt></ruby>り<ruby>上<rt>あ</rt></ruby>がりました。</b><br>후렴에서 단번에 분위기가 달아올랐습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>気持<rt>きも</rt></ruby>ち의 뜻은?",
    "options": [
      "마음/기분",
      "좌석"
    ],
    "answer": 0,
    "explanation": "「<ruby>気持<rt>きも</rt></ruby>ち」는 '마음/기분'이라는 뜻입니다.<br><br><b>この<ruby>歌<rt>うた</rt></ruby>に<ruby>気持<rt>きも</rt></ruby>ちをこめます。</b><br>이 노래에 마음을 담습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>楽<rt>たの</rt></ruby>しい의 뜻은?",
    "options": [
      "즐겁다",
      "어렵다"
    ],
    "answer": 0,
    "explanation": "「<ruby>楽<rt>たの</rt></ruby>しい」는 '즐겁다'라는 뜻입니다.<br><br><b>きょうのライブはとても<ruby>楽<rt>たの</rt></ruby>しかったです。</b><br>오늘 라이브는 매우 즐거웠습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>当日券<rt>とうじつけん</rt></ruby>의 뜻은?",
    "options": [
      "당일권",
      "예매표"
    ],
    "answer": 0,
    "explanation": "「<ruby>当日券<rt>とうじつけん</rt></ruby>」는 '당일권'이라는 뜻입니다.<br><br><b><ruby>当日券<rt>とうじつけん</rt></ruby>は<ruby>若干<rt>じゃっかん</rt></ruby>あります。</b><br>당일권은 조금 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>演奏<rt>えんそう</rt></ruby>의 뜻은?",
    "options": [
      "연주",
      "노래 가사"
    ],
    "answer": 0,
    "explanation": "「<ruby>演奏<rt>えんそう</rt></ruby>」는 '연주'라는 뜻입니다.<br><br><b><ruby>演奏<rt>えんそう</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まりました。</b><br>연주가 시작됐습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>楽器<rt>がっき</rt></ruby>의 뜻은?",
    "options": [
      "악기",
      "의상"
    ],
    "answer": 0,
    "explanation": "「<ruby>楽器<rt>がっき</rt></ruby>」는 '악기'라는 뜻입니다.<br><br><b>この<ruby>楽器<rt>がっき</rt></ruby>はとても<ruby>大<rt>おお</rt></ruby>きいです。</b><br>이 악기는 매우 큽니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>歌詞<rt>かし</rt></ruby>의 뜻은?",
    "options": [
      "가사",
      "객석"
    ],
    "answer": 0,
    "explanation": "「<ruby>歌詞<rt>かし</rt></ruby>」는 '가사'라는 뜻입니다.<br><br><b><ruby>歌詞<rt>かし</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら<ruby>歌<rt>うた</rt></ruby>いました。</b><br>가사를 보면서 노래했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>振付<rt>ふりつけ</rt></ruby>의 뜻은?",
    "options": [
      "안무",
      "박수"
    ],
    "answer": 0,
    "explanation": "「<ruby>振付<rt>ふりつけ</rt></ruby>」는 '안무'라는 뜻입니다.<br><br><b>この<ruby>曲<rt>きょく</rt></ruby>の<ruby>振付<rt>ふりつけ</rt></ruby>はかっこいいです。</b><br>이 곡 안무는 멋있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>衣装<rt>いしょう</rt></ruby>의 뜻은?",
    "options": [
      "의상",
      "조명"
    ],
    "answer": 0,
    "explanation": "「<ruby>衣装<rt>いしょう</rt></ruby>」는 '의상'이라는 뜻입니다.<br><br><b>きょうの<ruby>衣装<rt>いしょう</rt></ruby>は<ruby>白<rt>しろ</rt></ruby>です。</b><br>오늘 의상은 흰색입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>司会<rt>しかい</rt></ruby>의 뜻은?",
    "options": [
      "사회/진행",
      "출연"
    ],
    "answer": 0,
    "explanation": "「<ruby>司会<rt>しかい</rt></ruby>」는 '사회/진행'이라는 뜻입니다.<br><br><b><ruby>司会<rt>しかい</rt></ruby>の<ruby>方<rt>かた</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しています。</b><br>진행하는 분이 이야기하고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>開催<rt>かいさい</rt></ruby>する의 뜻은?",
    "options": [
      "개최하다",
      "반납하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>開催<rt>かいさい</rt></ruby>する」는 '개최하다'라는 뜻입니다.<br><br><b>このイベントは<ruby>来月<rt>らいげつ</rt></ruby><ruby>開催<rt>かいさい</rt></ruby>します。</b><br>이 이벤트는 다음 달 개최합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>延期<rt>えんき</rt></ruby>する의 뜻은?",
    "options": [
      "연기하다",
      "등장하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>延期<rt>えんき</rt></ruby>する」는 '연기하다'라는 뜻입니다.<br><br><b>ライブが<ruby>雨<rt>あめ</rt></ruby>で<ruby>延期<rt>えんき</rt></ruby>しました。</b><br>라이브가 비 때문에 연기됐습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>中止<rt>ちゅうし</rt></ruby>する의 뜻은?",
    "options": [
      "중지하다/취소하다",
      "개막하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>中止<rt>ちゅうし</rt></ruby>する」는 '중지하다/취소하다'라는 뜻입니다.<br><br><b>この<ruby>公演<rt>こうえん</rt></ruby>は<ruby>中止<rt>ちゅうし</rt></ruby>になりました。</b><br>이 공연은 취소됐습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>合唱<rt>がっしょう</rt></ruby>する의 뜻은?",
    "options": [
      "합창하다",
      "환불하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>合唱<rt>がっしょう</rt></ruby>する」는 '합창하다'라는 뜻입니다.<br><br><b>みんなでサビを<ruby>合唱<rt>がっしょう</rt></ruby>しました。</b><br>다 같이 후렴을 합창했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>手拍子<rt>てびょうし</rt></ruby>의 뜻은?",
    "options": [
      "손뼉 장단",
      "노을"
    ],
    "answer": 0,
    "explanation": "「<ruby>手拍子<rt>てびょうし</rt></ruby>」는 '손뼉 장단'이라는 뜻입니다.<br><br><b><ruby>手拍子<rt>てびょうし</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>손뼉 장단 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>名曲<rt>めいきょく</rt></ruby>의 뜻은?",
    "options": [
      "명곡",
      "신곡"
    ],
    "answer": 0,
    "explanation": "「<ruby>名曲<rt>めいきょく</rt></ruby>」는 '명곡'이라는 뜻입니다.<br><br><b>この<ruby>曲<rt>きょく</rt></ruby>はずっと<ruby>人気<rt>にんき</rt></ruby>の<ruby>名曲<rt>めいきょく</rt></ruby>です。</b><br>이 곡은 계속 인기 있는 명곡입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>主役<rt>しゅやく</rt></ruby>의 뜻은?",
    "options": [
      "주역",
      "조연"
    ],
    "answer": 0,
    "explanation": "「<ruby>主役<rt>しゅやく</rt></ruby>」는 '주역'이라는 뜻입니다.<br><br><b>あの<ruby>俳優<rt>はいゆう</rt></ruby>が<ruby>主役<rt>しゅやく</rt></ruby>です。</b><br>저 배우가 주역입니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>歌声<rt>うたごえ</rt></ruby>의 뜻은?",
    "options": [
      "노랫소리",
      "발소리"
    ],
    "answer": 0,
    "explanation": "「<ruby>歌声<rt>うたごえ</rt></ruby>」는 '노랫소리'라는 뜻입니다.<br><br><b>きれいな<ruby>歌声<rt>うたごえ</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえます。</b><br>아름다운 노랫소리가 들립니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>台本<rt>だいほん</rt></ruby>의 뜻은?",
    "options": [
      "대본",
      "영수증"
    ],
    "answer": 0,
    "explanation": "「<ruby>台本<rt>だいほん</rt></ruby>」는 '대본'이라는 뜻입니다.<br><br><b><ruby>台本<rt>だいほん</rt></ruby>をもう<ruby>一度<rt>いちど</rt></ruby><ruby>読<rt>よ</rt></ruby>みます。</b><br>대본을 한 번 더 읽습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>会話<rt>かいわ</rt></ruby>의 뜻은?",
    "options": [
      "대화",
      "응원"
    ],
    "answer": 0,
    "explanation": "「<ruby>会話<rt>かいわ</rt></ruby>」는 '대화'라는 뜻입니다.<br><br><b><ruby>劇<rt>げき</rt></ruby>の<ruby>会話<rt>かいわ</rt></ruby>が<ruby>面白<rt>おもしろ</rt></ruby>いです。</b><br>극 중 대화가 재미있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>賑<rt>にぎ</rt></ruby>やかだ의 뜻은?",
    "options": [
      "활기차다",
      "조용하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>賑<rt>にぎ</rt></ruby>やかだ」는 '활기차다'라는 뜻입니다.<br><br><b>きょうの<ruby>会場<rt>かいじょう</rt></ruby>はとても<ruby>賑<rt>にぎ</rt></ruby>やかです。</b><br>오늘 공연장은 매우 활기찹니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>華<rt>はな</rt></ruby>やかだ의 뜻은?",
    "options": [
      "화려하다",
      "어둡다"
    ],
    "answer": 0,
    "explanation": "「<ruby>華<rt>はな</rt></ruby>やかだ」는 '화려하다'라는 뜻입니다.<br><br><b>ステージがとても<ruby>華<rt>はな</rt></ruby>やかです。</b><br>무대가 매우 화려합니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>並<rt>なら</rt></ruby>ぶ의 뜻은?",
    "options": [
      "줄 서다",
      "춤추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>並<rt>なら</rt></ruby>ぶ」는 '줄 서다'라는 뜻입니다.<br><br><b><ruby>開場前<rt>かいじょうまえ</rt></ruby>に<ruby>人<rt>ひと</rt></ruby>が<ruby>並<rt>なら</rt></ruby>んでいます。</b><br>입장 전에 사람들이 줄 서 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "공연·행사",
    "question": "<ruby>始<rt>はじ</rt></ruby>める의 뜻은?",
    "options": [
      "시작하다",
      "끝내다"
    ],
    "answer": 0,
    "explanation": "「<ruby>始<rt>はじ</rt></ruby>める」는 '시작하다'라는 뜻입니다.<br><br><b>そろそろ<ruby>公演<rt>こうえん</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めます。</b><br>이제 슬슬 공연을 시작합니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>預<rt>あず</rt></ruby>かる의 뜻은?",
    "options": [
      "맡다",
      "돌려주다"
    ],
    "answer": 0,
    "explanation": "「<ruby>預<rt>あず</rt></ruby>かる」는 '맡다'라는 뜻입니다.<br><br><b><ruby>荷物<rt>にもつ</rt></ruby>を<ruby>預<rt>あず</rt></ruby>かります。</b><br>짐을 맡아 드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>消<rt>け</rt></ruby>す의 뜻은?",
    "options": [
      "끄다",
      "켜다"
    ],
    "answer": 0,
    "explanation": "「<ruby>消<rt>け</rt></ruby>す」는 '끄다'라는 뜻입니다.<br><br><b><ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>してください。</b><br>불을 꺼 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>点<rt>つ</rt></ruby>ける의 뜻은?",
    "options": [
      "켜다",
      "끄다"
    ],
    "answer": 0,
    "explanation": "「<ruby>点<rt>つ</rt></ruby>ける」는 '켜다'라는 뜻입니다.<br><br><b>エアコンを<ruby>点<rt>つ</rt></ruby>けます。</b><br>에어컨을 켭니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>予約<rt>よやく</rt></ruby>의 뜻은?",
    "options": [
      "예약",
      "취소"
    ],
    "answer": 0,
    "explanation": "「<ruby>予約<rt>よやく</rt></ruby>」는 '예약'이라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>しています。</b><br>예약했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>確認<rt>かくにん</rt></ruby>의 뜻은?",
    "options": [
      "확인",
      "취소"
    ],
    "answer": 0,
    "explanation": "「<ruby>確認<rt>かくにん</rt></ruby>」는 '확인'이라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。</b><br>예약을 확인합니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>変更<rt>へんこう</rt></ruby>의 뜻은?",
    "options": [
      "변경",
      "추가"
    ],
    "answer": 0,
    "explanation": "「<ruby>変更<rt>へんこう</rt></ruby>」는 '변경'이라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>を<ruby>変更<rt>へんこう</rt></ruby>したいです。</b><br>예약을 변경하고 싶습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>取り消し<rt>とりけし</rt></ruby>의 뜻은?",
    "options": [
      "취소",
      "연장"
    ],
    "answer": 0,
    "explanation": "「<ruby>取り消し<rt>とりけし</rt></ruby>」는 '취소'라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>を<ruby>取り消し<rt>とりけし</rt></ruby>できますか。</b><br>예약을 취소할 수 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>一泊<rt>いっぱく</rt></ruby>의 뜻은?",
    "options": [
      "1박",
      "2박"
    ],
    "answer": 0,
    "explanation": "「<ruby>一泊<rt>いっぱく</rt></ruby>」는 '1박'이라는 뜻입니다.<br><br><b><ruby>一泊<rt>いっぱく</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>1박으로 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>廊下<rt>ろうか</rt></ruby>의 뜻은?",
    "options": [
      "복도",
      "편도"
    ],
    "answer": 0,
    "explanation": "「<ruby>廊下<rt>ろうか</rt></ruby>」는 '복도'라는 뜻입니다.<br><br><b><ruby>廊下<rt>ろうか</rt></ruby>はお<ruby>静<rt>しず</rt></ruby>かにお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>복도에서는 조용히 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>宿泊<rt>しゅくはく</rt></ruby>의 뜻은?",
    "options": [
      "숙박",
      "주문"
    ],
    "answer": 0,
    "explanation": "「<ruby>宿泊<rt>しゅくはく</rt></ruby>」는 '숙박'이라는 뜻입니다.<br><br><b><ruby>宿泊<rt>しゅくはく</rt></ruby>の<ruby>予約<rt>よやく</rt></ruby>です。</b><br>숙박 예약입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>部屋番号<rt>へやばんごう</rt></ruby>의 뜻은?",
    "options": [
      "방 번호",
      "조식 포함"
    ],
    "answer": 0,
    "explanation": "「<ruby>部屋番号<rt>へやばんごう</rt></ruby>」는 '방 번호'라는 뜻입니다.<br><br><b><ruby>部屋番号<rt>へやばんごう</rt></ruby>は305です。</b><br>방 번호는 305입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>朝食<rt>ちょうしょく</rt></ruby>의 뜻은?",
    "options": [
      "조식",
      "석식"
    ],
    "answer": 0,
    "explanation": "「<ruby>朝食<rt>ちょうしょく</rt></ruby>」는 '조식'이라는 뜻입니다.<br><br><b><ruby>朝食<rt>ちょうしょく</rt></ruby>は7<ruby>時<rt>じ</rt></ruby>からです。</b><br>조식은 7시부터입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>夕食<rt>ゆうしょく</rt></ruby>의 뜻은?",
    "options": [
      "석식",
      "조식"
    ],
    "answer": 0,
    "explanation": "「<ruby>夕食<rt>ゆうしょく</rt></ruby>」는 '석식'이라는 뜻입니다.<br><br><b><ruby>夕食<rt>ゆうしょく</rt></ruby>はありますか。</b><br>석식이 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>満室<rt>まんしつ</rt></ruby>의 뜻은?",
    "options": [
      "만실",
      "빈방"
    ],
    "answer": 0,
    "explanation": "「<ruby>満室<rt>まんしつ</rt></ruby>」는 '만실'이라는 뜻입니다.<br><br><b>ただいま<ruby>満室<rt>まんしつ</rt></ruby>です。</b><br>현재 만실입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>受付<rt>うけつけ</rt></ruby>의 뜻은?",
    "options": [
      "프런트/접수",
      "출구"
    ],
    "answer": 0,
    "explanation": "「<ruby>受付<rt>うけつけ</rt></ruby>」는 '프런트/접수'라는 뜻입니다.<br><br><b><ruby>受付<rt>うけつけ</rt></ruby>はどこですか。</b><br>프런트는 어디인가요?"
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>部屋<rt>へや</rt></ruby>의 뜻은?",
    "options": [
      "방",
      "좌석"
    ],
    "answer": 0,
    "explanation": "「<ruby>部屋<rt>へや</rt></ruby>」는 '방'이라는 뜻입니다.<br><br><b>この<ruby>部屋<rt>へや</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>이 방으로 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>鍵<rt>かぎ</rt></ruby>의 뜻은?",
    "options": [
      "열쇠",
      "비밀번호"
    ],
    "answer": 0,
    "explanation": "「<ruby>鍵<rt>かぎ</rt></ruby>」는 '열쇠'라는 뜻입니다.<br><br><b><ruby>鍵<rt>かぎ</rt></ruby>が<ruby>使<rt>つか</rt></ruby>えません。</b><br>열쇠가 작동하지 않습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>窓<rt>まど</rt></ruby>의 뜻은?",
    "options": [
      "창문",
      "문"
    ],
    "answer": 0,
    "explanation": "「<ruby>窓<rt>まど</rt></ruby>」는 '창문'이라는 뜻입니다.<br><br><b><ruby>窓<rt>まど</rt></ruby>が<ruby>開<rt>あ</rt></ruby>きません。</b><br>창문이 열리지 않습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>荷物<rt>にもつ</rt></ruby>의 뜻은?",
    "options": [
      "짐",
      "메뉴"
    ],
    "answer": 0,
    "explanation": "「<ruby>荷物<rt>にもつ</rt></ruby>」는 '짐'이라는 뜻입니다.<br><br><b><ruby>荷物<rt>にもつ</rt></ruby>を<ruby>預<rt>あず</rt></ruby>けたいです。</b><br>짐을 맡기고 싶습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>預<rt>あず</rt></ruby>ける의 뜻은?",
    "options": [
      "맡기다",
      "찾다"
    ],
    "answer": 0,
    "explanation": "「<ruby>預<rt>あず</rt></ruby>ける」는 '맡기다'라는 뜻입니다.<br><br><b><ruby>荷物<rt>にもつ</rt></ruby>を<ruby>預<rt>あず</rt></ruby>けます。</b><br>짐을 맡깁니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>運<rt>はこ</rt></ruby>ぶ의 뜻은?",
    "options": [
      "옮기다",
      "버리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>運<rt>はこ</rt></ruby>ぶ」는 '옮기다'라는 뜻입니다.<br><br><b><ruby>荷物<rt>にもつ</rt></ruby>を<ruby>部屋<rt>へや</rt></ruby>に<ruby>運<rt>はこ</rt></ruby>びます。</b><br>짐을 방으로 옮깁니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>壊<rt>こわ</rt></ruby>れる의 뜻은?",
    "options": [
      "고장 나다",
      "수리하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>壊<rt>こわ</rt></ruby>れる」는 '고장 나다'라는 뜻입니다.<br><br><b>エアコンが<ruby>壊<rt>こわ</rt></ruby>れました。</b><br>에어컨이 고장 났습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>効<rt>き</rt></ruby>く의 뜻은?",
    "options": [
      "작동하다/효과가 있다",
      "멈추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>効<rt>き</rt></ruby>く」는 '작동하다/효과가 있다'라는 뜻입니다.<br><br><b>エアコンが<ruby>効<rt>き</rt></ruby>きません。</b><br>에어컨이 잘 작동하지 않습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>湯<rt>ゆ</rt></ruby>의 뜻은?",
    "options": [
      "뜨거운 물",
      "차가운 물"
    ],
    "answer": 0,
    "explanation": "「<ruby>湯<rt>ゆ</rt></ruby>」는 '뜨거운 물'이라는 뜻입니다.<br><br><b>お<ruby>湯<rt>ゆ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ません。</b><br>뜨거운 물이 나오지 않습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>汚<rt>よご</rt></ruby>れる의 뜻은?",
    "options": [
      "더러워지다",
      "깨끗해지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>汚<rt>よご</rt></ruby>れる」는 '더러워지다'라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>が<ruby>汚<rt>よご</rt></ruby>れています。</b><br>방이 더러워요."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>掃除<rt>そうじ</rt></ruby>의 뜻은?",
    "options": [
      "청소",
      "수리"
    ],
    "answer": 0,
    "explanation": "「<ruby>掃除<rt>そうじ</rt></ruby>」는 '청소'라는 뜻입니다.<br><br><b><ruby>掃除<rt>そうじ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>청소 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>修理<rt>しゅうり</rt></ruby>의 뜻은?",
    "options": [
      "수리",
      "예약"
    ],
    "answer": 0,
    "explanation": "「<ruby>修理<rt>しゅうり</rt></ruby>」는 '수리'라는 뜻입니다.<br><br><b><ruby>修理<rt>しゅうり</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>수리 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>延長<rt>えんちょう</rt></ruby>의 뜻은?",
    "options": [
      "연장",
      "취소"
    ],
    "answer": 0,
    "explanation": "「<ruby>延長<rt>えんちょう</rt></ruby>」는 '연장'이라는 뜻입니다.<br><br><b>チェックアウトを<ruby>延長<rt>えんちょう</rt></ruby>できますか。</b><br>체크아웃을 연장할 수 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>客室<rt>きゃくしつ</rt></ruby>의 뜻은?",
    "options": [
      "객실",
      "접수"
    ],
    "answer": 0,
    "explanation": "「<ruby>客室<rt>きゃくしつ</rt></ruby>」는 '객실'이라는 뜻입니다.<br><br><b><ruby>客室<rt>きゃくしつ</rt></ruby>は<ruby>二階<rt>にかい</rt></ruby>です。</b><br>객실은 2층입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>素泊<rt>すど</rt></ruby>まり의 뜻은?",
    "options": [
      "식사 없는 숙박",
      "조식 포함 숙박"
    ],
    "answer": 0,
    "explanation": "「<ruby>素泊<rt>すど</rt></ruby>まり」는 '식사 없는 숙박'이라는 뜻입니다.<br><br><b>きょうは<ruby>素泊<rt>すど</rt></ruby>まりで<ruby>予約<rt>よやく</rt></ruby>しました。</b><br>오늘은 식사 없는 숙박으로 예약했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>朝食付<rt>ちょうしょくつ</rt></ruby>き의 뜻은?",
    "options": [
      "조식 포함",
      "석식 포함"
    ],
    "answer": 0,
    "explanation": "「<ruby>朝食付<rt>ちょうしょくつ</rt></ruby>き」는 '조식 포함'이라는 뜻입니다.<br><br><b><ruby>朝食付<rt>ちょうしょくつ</rt></ruby>きのプランにしました。</b><br>조식 포함 플랜으로 했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>禁煙室<rt>きんえんしつ</rt></ruby>의 뜻은?",
    "options": [
      "금연실",
      "흡연실"
    ],
    "answer": 0,
    "explanation": "「<ruby>禁煙室<rt>きんえんしつ</rt></ruby>」는 '금연실'이라는 뜻입니다.<br><br><b><ruby>禁煙室<rt>きんえんしつ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>금연실 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>風呂<rt>ふろ</rt></ruby>의 뜻은?",
    "options": [
      "목욕",
      "세면실"
    ],
    "answer": 0,
    "explanation": "「<ruby>風呂<rt>ふろ</rt></ruby>」는 '목욕'이라는 뜻입니다.<br><br><b><ruby>風呂<rt>ふろ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ります。</b><br>목욕하러 들어갑니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>浴室<rt>よくしつ</rt></ruby>의 뜻은?",
    "options": [
      "욕실",
      "세면실"
    ],
    "answer": 0,
    "explanation": "「<ruby>浴室<rt>よくしつ</rt></ruby>」는 '욕실'이라는 뜻입니다.<br><br><b><ruby>浴室<rt>よくしつ</rt></ruby>はこの<ruby>奥<rt>おく</rt></ruby>です。</b><br>욕실은 이 안쪽입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>二泊<rt>にはく</rt></ruby>의 뜻은?",
    "options": [
      "2박",
      "1박"
    ],
    "answer": 0,
    "explanation": "「<ruby>二泊<rt>にはく</rt></ruby>」는 '2박'이라는 뜻입니다.<br><br><b><ruby>二泊<rt>にはく</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>2박으로 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>浴衣<rt>ゆかた</rt></ruby>의 뜻은?",
    "options": [
      "유카타",
      "슬리퍼"
    ],
    "answer": 0,
    "explanation": "「<ruby>浴衣<rt>ゆかた</rt></ruby>」는 '유카타'라는 뜻입니다.<br><br><b><ruby>浴衣<rt>ゆかた</rt></ruby>は<ruby>部屋<rt>へや</rt></ruby>にあります。</b><br>유카타는 방에 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>連泊<rt>れんぱく</rt></ruby>의 뜻은?",
    "options": [
      "연박",
      "숙박"
    ],
    "answer": 0,
    "explanation": "「<ruby>連泊<rt>れんぱく</rt></ruby>」는 '연박'이라는 뜻입니다.<br><br><b><ruby>連泊<rt>れんぱく</rt></ruby>で<ruby>予約<rt>よやく</rt></ruby>しました。</b><br>연박으로 예약했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>温泉<rt>おんせん</rt></ruby>의 뜻은?",
    "options": [
      "온천",
      "수영장"
    ],
    "answer": 0,
    "explanation": "「<ruby>温泉<rt>おんせん</rt></ruby>」는 '온천'이라는 뜻입니다.<br><br><b>このホテルには<ruby>温泉<rt>おんせん</rt></ruby>があります。</b><br>이 호텔에는 온천이 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>景色<rt>けしき</rt></ruby>의 뜻은?",
    "options": [
      "경치",
      "침구"
    ],
    "answer": 0,
    "explanation": "「<ruby>景色<rt>けしき</rt></ruby>」는 '경치'라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>からの<ruby>景色<rt>けしき</rt></ruby>がきれいです。</b><br>방에서 보이는 경치가 예쁩니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>眺<rt>なが</rt></ruby>め의 뜻은?",
    "options": [
      "전망",
      "요금"
    ],
    "answer": 0,
    "explanation": "「<ruby>眺<rt>なが</rt></ruby>め」는 '전망'이라는 뜻입니다.<br><br><b>この<ruby>部屋<rt>へや</rt></ruby>は<ruby>海<rt>うみ</rt></ruby>の<ruby>眺<rt>なが</rt></ruby>めがいいです。</b><br>이 방은 바다 전망이 좋습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>泊<rt>と</rt></ruby>まる의 뜻은?",
    "options": [
      "묵다",
      "돌아가다"
    ],
    "answer": 0,
    "explanation": "「<ruby>泊<rt>と</rt></ruby>まる」는 '묵다'라는 뜻입니다.<br><br><b>きょうはホテルに<ruby>泊<rt>と</rt></ruby>まります。</b><br>오늘은 호텔에 묵습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>休<rt>やす</rt></ruby>む의 뜻은?",
    "options": [
      "쉬다",
      "서두르다"
    ],
    "answer": 0,
    "explanation": "「<ruby>休<rt>やす</rt></ruby>む」는 '쉬다'라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>でゆっくり<ruby>休<rt>やす</rt></ruby>みます。</b><br>방에서 푹 쉽니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>借<rt>か</rt></ruby>りる의 뜻은?",
    "options": [
      "빌리다",
      "반납하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>借<rt>か</rt></ruby>りる」는 '빌리다'라는 뜻입니다.<br><br><b>フロントで<ruby>傘<rt>かさ</rt></ruby>を<ruby>借<rt>か</rt></ruby>りました。</b><br>프런트에서 우산을 빌렸습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>返<rt>かえ</rt></ruby>す의 뜻은?",
    "options": [
      "반납하다",
      "빌리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>返<rt>かえ</rt></ruby>す」는 '반납하다'라는 뜻입니다.<br><br><b>チェックアウトのときに<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>返<rt>かえ</rt></ruby>します。</b><br>체크아웃할 때 열쇠를 반납합니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>의 뜻은?",
    "options": [
      "분실물/두고 온 물건",
      "짐 보관"
    ],
    "answer": 0,
    "explanation": "「<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>」는 '분실물/두고 온 물건'이라는 뜻입니다.<br><br><b><ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>がないか<ruby>確認<rt>かくにん</rt></ruby>しました。</b><br>두고 온 물건이 없는지 확인했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>広<rt>ひろ</rt></ruby>い의 뜻은?",
    "options": [
      "넓다",
      "좁다"
    ],
    "answer": 0,
    "explanation": "「<ruby>広<rt>ひろ</rt></ruby>い」는 '넓다'라는 뜻입니다.<br><br><b>この<ruby>部屋<rt>へや</rt></ruby>はとても<ruby>広<rt>ひろ</rt></ruby>いです。</b><br>이 방은 매우 넓습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>狭<rt>せま</rt></ruby>い의 뜻은?",
    "options": [
      "좁다",
      "넓다"
    ],
    "answer": 0,
    "explanation": "「<ruby>狭<rt>せま</rt></ruby>い」는 '좁다'라는 뜻입니다.<br><br><b>この<ruby>浴室<rt>よくしつ</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>狭<rt>せま</rt></ruby>いです。</b><br>이 욕실은 조금 좁습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>静<rt>しず</rt></ruby>かだ의 뜻은?",
    "options": [
      "조용하다",
      "시끄럽다"
    ],
    "answer": 0,
    "explanation": "「<ruby>静<rt>しず</rt></ruby>かだ」는 '조용하다'라는 뜻입니다.<br><br><b>このホテルはとても<ruby>静<rt>しず</rt></ruby>かです。</b><br>이 호텔은 매우 조용합니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>快適<rt>かいてき</rt></ruby>だ의 뜻은?",
    "options": [
      "쾌적하다",
      "답답하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>快適<rt>かいてき</rt></ruby>だ」는 '쾌적하다'라는 뜻입니다.<br><br><b>この<ruby>部屋<rt>へや</rt></ruby>はとても<ruby>快適<rt>かいてき</rt></ruby>です。</b><br>이 방은 매우 쾌적합니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>清潔<rt>せいけつ</rt></ruby>だ의 뜻은?",
    "options": [
      "청결하다",
      "지저분하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>清潔<rt>せいけつ</rt></ruby>だ」는 '청결하다'라는 뜻입니다.<br><br><b><ruby>館内<rt>かんない</rt></ruby>はとても<ruby>清潔<rt>せいけつ</rt></ruby>です。</b><br>관내는 매우 청결합니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>便利<rt>べんり</rt></ruby>だ의 뜻은?",
    "options": [
      "편리하다",
      "불편하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>便利<rt>べんり</rt></ruby>だ」는 '편리하다'라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>から<ruby>近<rt>ちか</rt></ruby>くて<ruby>便利<rt>べんり</rt></ruby>です。</b><br>역에서 가까워서 편리합니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>明<rt>あか</rt></ruby>るい의 뜻은?",
    "options": [
      "밝다",
      "어둡다"
    ],
    "answer": 0,
    "explanation": "「<ruby>明<rt>あか</rt></ruby>るい」는 '밝다'라는 뜻입니다.<br><br><b>この<ruby>部屋<rt>へや</rt></ruby>は<ruby>窓<rt>まど</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きくて<ruby>明<rt>あか</rt></ruby>るいです。</b><br>이 방은 창문이 커서 밝습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>暗<rt>くら</rt></ruby>い의 뜻은?",
    "options": [
      "어둡다",
      "밝다"
    ],
    "answer": 0,
    "explanation": "「<ruby>暗<rt>くら</rt></ruby>い」는 '어둡다'라는 뜻입니다.<br><br><b><ruby>廊下<rt>ろうか</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>し<ruby>暗<rt>くら</rt></ruby>いです。</b><br>복도가 조금 어둡습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>枕<rt>まくら</rt></ruby>의 뜻은?",
    "options": [
      "베개",
      "이불"
    ],
    "answer": 0,
    "explanation": "「<ruby>枕<rt>まくら</rt></ruby>」는 '베개'라는 뜻입니다.<br><br><b><ruby>枕<rt>まくら</rt></ruby>をもう<ruby>一<rt>ひと</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>베개 하나 더 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>毛布<rt>もうふ</rt></ruby>의 뜻은?",
    "options": [
      "담요",
      "수건"
    ],
    "answer": 0,
    "explanation": "「<ruby>毛布<rt>もうふ</rt></ruby>」는 '담요'라는 뜻입니다.<br><br><b><ruby>夜<rt>よる</rt></ruby>は<ruby>毛布<rt>もうふ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>います。</b><br>밤에는 담요를 사용합니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>充電器<rt>じゅうでんき</rt></ruby>의 뜻은?",
    "options": [
      "충전기",
      "열쇠"
    ],
    "answer": 0,
    "explanation": "「<ruby>充電器<rt>じゅうでんき</rt></ruby>」는 '충전기'라는 뜻입니다.<br><br><b><ruby>充電器<rt>じゅうでんき</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してください。</b><br>충전기를 빌려 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>의 뜻은?",
    "options": [
      "냉장고",
      "세면대"
    ],
    "answer": 0,
    "explanation": "「<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>」는 '냉장고'라는 뜻입니다.<br><br><b><ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に<ruby>水<rt>みず</rt></ruby>を<ruby>入<rt>い</rt></ruby>れました。</b><br>냉장고에 물을 넣었습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>洗濯機<rt>せんたくき</rt></ruby>의 뜻은?",
    "options": [
      "세탁기",
      "에어컨"
    ],
    "answer": 0,
    "explanation": "「<ruby>洗濯機<rt>せんたくき</rt></ruby>」는 '세탁기'라는 뜻입니다.<br><br><b><ruby>洗濯機<rt>せんたくき</rt></ruby>は<ruby>一階<rt>いっかい</rt></ruby>にあります。</b><br>세탁기는 1층에 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>乾燥機<rt>かんそうき</rt></ruby>의 뜻은?",
    "options": [
      "건조기",
      "전자레인지"
    ],
    "answer": 0,
    "explanation": "「<ruby>乾燥機<rt>かんそうき</rt></ruby>」는 '건조기'라는 뜻입니다.<br><br><b><ruby>乾燥機<rt>かんそうき</rt></ruby>も<ruby>使<rt>つか</rt></ruby>えます。</b><br>건조기도 사용할 수 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>洗面所<rt>せんめんじょ</rt></ruby>의 뜻은?",
    "options": [
      "세면실",
      "객석"
    ],
    "answer": 0,
    "explanation": "「<ruby>洗面所<rt>せんめんじょ</rt></ruby>」는 '세면실'이라는 뜻입니다.<br><br><b><ruby>洗面所<rt>せんめんじょ</rt></ruby>はこの<ruby>奥<rt>おく</rt></ruby>です。</b><br>세면실은 이 안쪽입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>浴槽<rt>よくそう</rt></ruby>의 뜻은?",
    "options": [
      "욕조",
      "매표소"
    ],
    "answer": 0,
    "explanation": "「<ruby>浴槽<rt>よくそう</rt></ruby>」는 '욕조'라는 뜻입니다.<br><br><b><ruby>浴槽<rt>よくそう</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>いです。</b><br>욕조가 넓습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>室内<rt>しつない</rt></ruby>의 뜻은?",
    "options": [
      "실내",
      "실외"
    ],
    "answer": 0,
    "explanation": "「<ruby>室内<rt>しつない</rt></ruby>」는 '실내'라는 뜻입니다.<br><br><b><ruby>室内<rt>しつない</rt></ruby>ではお<ruby>静<rt>しず</rt></ruby>かにお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>실내에서는 조용히 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>宿泊料<rt>しゅくはくりょう</rt></ruby>의 뜻은?",
    "options": [
      "숙박비",
      "입장료"
    ],
    "answer": 0,
    "explanation": "「<ruby>宿泊料<rt>しゅくはくりょう</rt></ruby>」는 '숙박비'라는 뜻입니다.<br><br><b><ruby>宿泊料<rt>しゅくはくりょう</rt></ruby>は<ruby>先<rt>さき</rt></ruby>に<ruby>払<rt>はら</rt></ruby>いました。</b><br>숙박비는 먼저 냈습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>入浴<rt>にゅうよく</rt></ruby>의 뜻은?",
    "options": [
      "입욕",
      "출연"
    ],
    "answer": 0,
    "explanation": "「<ruby>入浴<rt>にゅうよく</rt></ruby>」는 '입욕'이라는 뜻입니다.<br><br><b><ruby>入浴<rt>にゅうよく</rt></ruby>は<ruby>十時<rt>じゅうじ</rt></ruby>までです。</b><br>입욕은 10시까지입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>忘れ物<rt>わすれもの</rt></ruby>의 뜻은?",
    "options": [
      "두고 온 물건",
      "예약 확인"
    ],
    "answer": 0,
    "explanation": "「<ruby>忘れ物<rt>わすれもの</rt></ruby>」는 '두고 온 물건'이라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>に<ruby>忘れ物<rt>わすれもの</rt></ruby>をしました。</b><br>방에 물건을 두고 왔습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>失<rt>な</rt></ruby>くす의 뜻은?",
    "options": [
      "잃어버리다",
      "빌리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>失<rt>な</rt></ruby>くす」는 '잃어버리다'라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>の<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>失<rt>な</rt></ruby>くしました。</b><br>방 열쇠를 잃어버렸습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>落<rt>お</rt></ruby>とす의 뜻은?",
    "options": [
      "떨어뜨리다",
      "주워 올리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>落<rt>お</rt></ruby>とす」는 '떨어뜨리다'라는 뜻입니다.<br><br><b>ロビーで<ruby>財布<rt>さいふ</rt></ruby>を<ruby>落<rt>お</rt></ruby>としました。</b><br>로비에서 지갑을 떨어뜨렸습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>電話<rt>でんわ</rt></ruby>의 뜻은?",
    "options": [
      "전화",
      "메시지"
    ],
    "answer": 0,
    "explanation": "「<ruby>電話<rt>でんわ</rt></ruby>」는 '전화'라는 뜻입니다.<br><br><b>フロントに<ruby>電話<rt>でんわ</rt></ruby>してみます。</b><br>프런트에 전화해 보겠습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>個室<rt>こしつ</rt></ruby>의 뜻은?",
    "options": [
      "개인실",
      "출구"
    ],
    "answer": 0,
    "explanation": "「<ruby>個室<rt>こしつ</rt></ruby>」는 '개인실'이라는 뜻입니다.<br><br><b><ruby>個室<rt>こしつ</rt></ruby>はありますか。</b><br>개인실이 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>席<rt>せき</rt></ruby>의 뜻은?",
    "options": [
      "자리",
      "지도"
    ],
    "answer": 0,
    "explanation": "「<ruby>席<rt>せき</rt></ruby>」는 '자리'라는 뜻입니다.<br><br><b><ruby>席<rt>せき</rt></ruby>はありますか。</b><br>자리가 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>注文<rt>ちゅうもん</rt></ruby>의 뜻은?",
    "options": [
      "주문",
      "계산"
    ],
    "answer": 0,
    "explanation": "「<ruby>注文<rt>ちゅうもん</rt></ruby>」는 '주문'이라는 뜻입니다.<br><br><b><ruby>注文<rt>ちゅうもん</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>주문 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>会計<rt>かいけい</rt></ruby>의 뜻은?",
    "options": [
      "계산",
      "예약"
    ],
    "answer": 0,
    "explanation": "「<ruby>会計<rt>かいけい</rt></ruby>」는 '계산'이라는 뜻입니다.<br><br><b>お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。</b><br>계산 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>鶏<rt>とり</rt></ruby>의 뜻은?",
    "options": [
      "닭",
      "돼지"
    ],
    "answer": 0,
    "explanation": "「<ruby>鶏<rt>とり</rt></ruby>」는 '닭'이라는 뜻입니다.<br><br><b><ruby>鶏<rt>とり</rt></ruby><ruby>肉<rt>にく</rt></ruby>に<ruby>変更<rt>へんこう</rt></ruby>できますか。</b><br>닭고기로 변경할 수 있을까요?"
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>豚<rt>ぶた</rt></ruby>의 뜻은?",
    "options": [
      "돼지",
      "소"
    ],
    "answer": 0,
    "explanation": "「<ruby>豚<rt>ぶた</rt></ruby>」는 '돼지'라는 뜻입니다.<br><br><b><ruby>豚<rt>ぶた</rt></ruby><ruby>肉<rt>にく</rt></ruby>は<ruby>食<rt>た</rt></ruby>べられません。</b><br>돼지고기는 먹을 수 없습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>牛<rt>ぎゅう</rt></ruby>의 뜻은?",
    "options": [
      "소",
      "닭"
    ],
    "answer": 0,
    "explanation": "「<ruby>牛<rt>ぎゅう</rt></ruby>」는 '소'라는 뜻입니다.<br><br><b><ruby>牛<rt>ぎゅう</rt></ruby><ruby>肉<rt>にく</rt></ruby>はよく<ruby>焼<rt>や</rt></ruby>いてください。</b><br>소고기는 잘 익혀 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>海鮮<rt>かいせん</rt></ruby>의 뜻은?",
    "options": [
      "해산물",
      "채소"
    ],
    "answer": 0,
    "explanation": "「<ruby>海鮮<rt>かいせん</rt></ruby>」는 '해산물'이라는 뜻입니다.<br><br><b>おすすめは<ruby>海鮮<rt>かいせん</rt></ruby><ruby>丼<rt>どん</rt></ruby>です。</b><br>추천은 해산물 덮밥입니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>刺身<rt>さしみ</rt></ruby>의 뜻은?",
    "options": [
      "회",
      "국"
    ],
    "answer": 0,
    "explanation": "「<ruby>刺身<rt>さしみ</rt></ruby>」는 '회'라는 뜻입니다.<br><br><b><ruby>刺身<rt>さしみ</rt></ruby>をください。</b><br>회 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>寿司<rt>すし</rt></ruby>의 뜻은?",
    "options": [
      "스시",
      "빵"
    ],
    "answer": 0,
    "explanation": "「<ruby>寿司<rt>すし</rt></ruby>」는 '스시'라는 뜻입니다.<br><br><b><ruby>寿司<rt>すし</rt></ruby>を<ruby>二人前<rt>ににんまえ</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。</b><br>스시 2인분 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>定食<rt>ていしょく</rt></ruby>의 뜻은?",
    "options": [
      "정식",
      "단품"
    ],
    "answer": 0,
    "explanation": "「<ruby>定食<rt>ていしょく</rt></ruby>」는 '정식'이라는 뜻입니다.<br><br><b><ruby>定食<rt>ていしょく</rt></ruby>にします。</b><br>정식으로 할게요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>単品<rt>たんぴん</rt></ruby>의 뜻은?",
    "options": [
      "단품",
      "정식"
    ],
    "answer": 0,
    "explanation": "「<ruby>単品<rt>たんぴん</rt></ruby>」는 '단품'이라는 뜻입니다.<br><br><b><ruby>単品<rt>たんぴん</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>단품으로 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>辛<rt>から</rt></ruby>い의 뜻은?",
    "options": [
      "맵다",
      "달다"
    ],
    "answer": 0,
    "explanation": "「<ruby>辛<rt>から</rt></ruby>い」는 '맵다'라는 뜻입니다.<br><br><b>このカレーは<ruby>辛<rt>から</rt></ruby>いです。</b><br>이 카레는 맵습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>甘<rt>あま</rt></ruby>い의 뜻은?",
    "options": [
      "달다",
      "짜다"
    ],
    "answer": 0,
    "explanation": "「<ruby>甘<rt>あま</rt></ruby>い」는 '달다'라는 뜻입니다.<br><br><b>このケーキは<ruby>甘<rt>あま</rt></ruby>いです。</b><br>이 케이크는 달아요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>酸<rt>す</rt></ruby>っぱい의 뜻은?",
    "options": [
      "시다",
      "맵다"
    ],
    "answer": 0,
    "explanation": "「<ruby>酸<rt>す</rt></ruby>っぱい」는 '시다'라는 뜻입니다.<br><br><b>このレモンは<ruby>酸<rt>す</rt></ruby>っぱいです。</b><br>이 레몬은 셔요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>塩辛<rt>しおから</rt></ruby>의 뜻은?",
    "options": [
      "짜다",
      "쓰다"
    ],
    "answer": 0,
    "explanation": "「<ruby>塩辛<rt>しおから</rt></ruby>」는 '짜다'라는 뜻입니다.<br><br><b>このスープは<ruby>塩辛<rt>しおから</rt></ruby>いです。</b><br>이 수프는 짜요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>熱<rt>あつ</rt></ruby>い의 뜻은?",
    "options": [
      "뜨겁다",
      "차갑다"
    ],
    "answer": 0,
    "explanation": "「<ruby>熱<rt>あつ</rt></ruby>い」는 '뜨겁다'라는 뜻입니다. 음식이나 물건의 온도가 높을 때 씁니다. 날씨가 더울 때는 「<ruby>暑<rt>あつ</rt></ruby>い」를 씁니다.<br><br><b>このお茶は<ruby>熱<rt>あつ</rt></ruby>いです。</b><br>이 차는 뜨거워요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>冷<rt>つめ</rt></ruby>たい의 뜻은?",
    "options": [
      "차갑다",
      "뜨겁다"
    ],
    "answer": 0,
    "explanation": "「<ruby>冷<rt>つめ</rt></ruby>たい」는 '차갑다'라는 뜻입니다.<br><br><b>この水は<ruby>冷<rt>つめ</rt></ruby>たいです。</b><br>이 물은 차가워요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>焼<rt>や</rt></ruby>く의 뜻은?",
    "options": [
      "굽다",
      "삶다"
    ],
    "answer": 0,
    "explanation": "「<ruby>焼<rt>や</rt></ruby>く」는 '굽다'라는 뜻입니다.<br><br><b>お<ruby>肉<rt>にく</rt></ruby>はよく<ruby>焼<rt>や</rt></ruby>いてください。</b><br>고기는 잘 익혀 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>煮<rt>に</rt></ruby>る의 뜻은?",
    "options": [
      "끓이다",
      "굽다"
    ],
    "answer": 0,
    "explanation": "「<ruby>煮<rt>に</rt></ruby>る」는 '끓이다'라는 뜻입니다.<br><br><b><ruby>大根<rt>だいこん</rt></ruby>をやわらかく<ruby>煮<rt>に</rt></ruby>ます。</b><br>무를 부드럽게 조립니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>混<rt>ま</rt></ruby>ぜる의 뜻은?",
    "options": [
      "섞다",
      "자르다"
    ],
    "answer": 0,
    "explanation": "「<ruby>混<rt>ま</rt></ruby>ぜる」는 '섞다'라는 뜻입니다.<br><br><b>よく<ruby>混<rt>ま</rt></ruby>ぜてから<ruby>食<rt>た</rt></ruby>べてください。</b><br>잘 섞어서 드세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>入<rt>い</rt></ruby>れる의 뜻은?",
    "options": [
      "넣다",
      "빼다"
    ],
    "answer": 0,
    "explanation": "「<ruby>入<rt>い</rt></ruby>れる」는 '넣다'라는 뜻입니다.<br><br><b><ruby>砂糖<rt>さとう</rt></ruby>は<ruby>入<rt>い</rt></ruby>れないでください。</b><br>설탕은 넣지 말아 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>残<rt>のこ</rt></ruby>す의 뜻은?",
    "options": [
      "남기다",
      "다 먹다"
    ],
    "answer": 0,
    "explanation": "「<ruby>残<rt>のこ</rt></ruby>す」는 '남기다'라는 뜻입니다.<br><br><b><ruby>食<rt>た</rt></ruby>べきれないので、少し<ruby>残<rt>のこ</rt></ruby>します。</b><br>다 못 먹겠어서 조금 남깁니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>包<rt>つつ</rt></ruby>む의 뜻은?",
    "options": [
      "포장하다",
      "섞다"
    ],
    "answer": 0,
    "explanation": "「<ruby>包<rt>つつ</rt></ruby>む」는 '포장하다'라는 뜻입니다.<br><br><b><ruby>残<rt>のこ</rt></ruby>りを<ruby>包<rt>つつ</rt></ruby>んでもらえますか。</b><br>남은 것을 포장해 주실 수 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>足<rt>た</rt></ruby>りる의 뜻은?",
    "options": [
      "충분하다",
      "부족하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>足<rt>た</rt></ruby>りる」는 '충분하다'라는 뜻입니다.<br><br><b>これで二人でも<ruby>足<rt>た</rt></ruby>ります。</b><br>이 정도면 두 명이 먹기에도 충분합니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>濃<rt>こ</rt></ruby>い의 뜻은?",
    "options": [
      "진하다",
      "연하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>濃<rt>こ</rt></ruby>い」는 '진하다'라는 뜻입니다.<br><br><b>このスープは少し<ruby>味<rt>あじ</rt></ruby>が<ruby>濃<rt>こ</rt></ruby>いです。</b><br>이 수프는 맛이 조금 진합니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>薄<rt>うす</rt></ruby>い의 뜻은?",
    "options": [
      "연하다",
      "진하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>薄<rt>うす</rt></ruby>い」는 '연하다'라는 뜻입니다.<br><br><b>このお茶は少し<ruby>薄<rt>うす</rt></ruby>いです。</b><br>이 차는 조금 연합니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>苦<rt>にが</rt></ruby>い의 뜻은?",
    "options": [
      "쓰다",
      "달다"
    ],
    "answer": 0,
    "explanation": "「<ruby>苦<rt>にが</rt></ruby>い」는 '쓰다'라는 뜻입니다.<br><br><b>このコーヒーはちょっと<ruby>苦<rt>にが</rt></ruby>いです。</b><br>이 커피는 조금 씁니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>追加<rt>ついか</rt></ruby>의 뜻은?",
    "options": [
      "추가",
      "매운맛"
    ],
    "answer": 0,
    "explanation": "「<ruby>追加<rt>ついか</rt></ruby>」는 '추가'라는 뜻입니다.<br><br><b>ドリンクを<ruby>追加<rt>ついか</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>음료를 추가로 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>取<rt>と</rt></ruby>り<ruby>分<rt>わ</rt></ruby>ける의 뜻은?",
    "options": [
      "덜어 나누다",
      "볶다"
    ],
    "answer": 0,
    "explanation": "「<ruby>取<rt>と</rt></ruby>り<ruby>分<rt>わ</rt></ruby>ける」는 '덜어 나누다'라는 뜻입니다.<br><br><b>ケーキを<ruby>取<rt>と</rt></ruby>り<ruby>分<rt>わ</rt></ruby>けます。</b><br>케이크를 나눠 덜어 줍니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>取<rt>と</rt></ruby>り<ruby>皿<rt>ざら</rt></ruby>의 뜻은?",
    "options": [
      "앞접시",
      "쟁반"
    ],
    "answer": 0,
    "explanation": "「<ruby>取<rt>と</rt></ruby>り<ruby>皿<rt>ざら</rt></ruby>」는 '앞접시'라는 뜻입니다.<br><br><b><ruby>取<rt>と</rt></ruby>り<ruby>皿<rt>ざら</rt></ruby>をください。</b><br>앞접시 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "おかわり의 뜻은?",
    "options": [
      "리필/한 번 더",
      "포장"
    ],
    "answer": 0,
    "explanation": "「おかわり」는 '리필/한 번 더'라는 뜻입니다.<br><br><b>ごはんのおかわりは<ruby>無料<rt>むりょう</rt></ruby>です。</b><br>밥 리필은 무료입니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby>의 뜻은?",
    "options": [
      "무제한 음료",
      "테이크아웃"
    ],
    "answer": 0,
    "explanation": "「<ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby>」는 '무제한 음료'라는 뜻입니다.<br><br><b>きょうは<ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby>のコースです。</b><br>오늘은 무제한 음료 코스입니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>의 뜻은?",
    "options": [
      "무한리필",
      "한 입"
    ],
    "answer": 0,
    "explanation": "「<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>」는 '무한리필'이라는 뜻입니다.<br><br><b>この<ruby>店<rt>みせ</rt></ruby>は<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>です。</b><br>이 가게는 무한리필입니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>湯気<rt>ゆげ</rt></ruby>의 뜻은?",
    "options": [
      "김/수증기",
      "얼음"
    ],
    "answer": 0,
    "explanation": "「<ruby>湯気<rt>ゆげ</rt></ruby>」는 '김/수증기'라는 뜻입니다.<br><br><b>スープから<ruby>湯気<rt>ゆげ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ています。</b><br>수프에서 김이 나고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>注<rt>そそ</rt></ruby>ぐ의 뜻은?",
    "options": [
      "따르다",
      "비우다"
    ],
    "answer": 0,
    "explanation": "「<ruby>注<rt>そそ</rt></ruby>ぐ」는 '따르다'라는 뜻입니다.<br><br><b>コップにお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>注<rt>そそ</rt></ruby>ぎます。</b><br>컵에 차를 따릅니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>温<rt>あたた</rt></ruby>める의 뜻은?",
    "options": [
      "데우다",
      "식히다"
    ],
    "answer": 0,
    "explanation": "「<ruby>温<rt>あたた</rt></ruby>める」는 '데우다'라는 뜻입니다.<br><br><b>このパンを<ruby>温<rt>あたた</rt></ruby>めてください。</b><br>이 빵을 데워 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>冷<rt>さ</rt></ruby>ます의 뜻은?",
    "options": [
      "식히다",
      "데우다"
    ],
    "answer": 0,
    "explanation": "「<ruby>冷<rt>さ</rt></ruby>ます」는 '식히다'라는 뜻입니다.<br><br><b>スープを<ruby>少<rt>すこ</rt></ruby>し<ruby>冷<rt>さ</rt></ruby>まします。</b><br>수프를 조금 식힙니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>香<rt>かお</rt></ruby>る의 뜻은?",
    "options": [
      "향이 나다",
      "젖다"
    ],
    "answer": 0,
    "explanation": "「<ruby>香<rt>かお</rt></ruby>る」는 '향이 나다'라는 뜻입니다.<br><br><b>コーヒーからいい<ruby>香<rt>かお</rt></ruby>りがします。</b><br>커피에서 좋은 향이 납니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>揚<rt>あ</rt></ruby>げる의 뜻은?",
    "options": [
      "튀기다",
      "삶다"
    ],
    "answer": 0,
    "explanation": "「<ruby>揚<rt>あ</rt></ruby>げる」는 '튀기다'라는 뜻입니다.<br><br><b><ruby>店<rt>みせ</rt></ruby>でからあげを<ruby>揚<rt>あ</rt></ruby>げています。</b><br>가게에서 가라아게를 튀기고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>炒<rt>いた</rt></ruby>める의 뜻은?",
    "options": [
      "볶다",
      "찌다"
    ],
    "answer": 0,
    "explanation": "「<ruby>炒<rt>いた</rt></ruby>める」는 '볶다'라는 뜻입니다.<br><br><b>この<ruby>野菜<rt>やさい</rt></ruby>を<ruby>炒<rt>いた</rt></ruby>めます。</b><br>이 채소를 볶습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>蒸<rt>む</rt></ruby>す의 뜻은?",
    "options": [
      "찌다",
      "굽다"
    ],
    "answer": 0,
    "explanation": "「<ruby>蒸<rt>む</rt></ruby>す」는 '찌다'라는 뜻입니다.<br><br><b>しゅうまいを<ruby>蒸<rt>む</rt></ruby>しています。</b><br>슈마이를 찌고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>噛<rt>か</rt></ruby>む의 뜻은?",
    "options": [
      "씹다",
      "삼키다"
    ],
    "answer": 0,
    "explanation": "「<ruby>噛<rt>か</rt></ruby>む」는 '씹다'라는 뜻입니다.<br><br><b>よく<ruby>噛<rt>か</rt></ruby>んで<ruby>食<rt>た</rt></ruby>べてください。</b><br>잘 씹어서 드세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>溶<rt>と</rt></ruby>ける의 뜻은?",
    "options": [
      "녹다",
      "굳다"
    ],
    "answer": 0,
    "explanation": "「<ruby>溶<rt>と</rt></ruby>ける」는 '녹다'라는 뜻입니다.<br><br><b>チーズがよく<ruby>溶<rt>と</rt></ruby>けています。</b><br>치즈가 잘 녹아 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>一口<rt>ひとくち</rt></ruby>의 뜻은?",
    "options": [
      "한 입",
      "한 접시"
    ],
    "answer": 0,
    "explanation": "「<ruby>一口<rt>ひとくち</rt></ruby>」는 '한 입'이라는 뜻입니다.<br><br><b>このケーキを<ruby>一口<rt>ひとくち</rt></ruby>どうぞ。</b><br>이 케이크 한 입 드세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>食欲<rt>しょくよく</rt></ruby>의 뜻은?",
    "options": [
      "식욕",
      "향기"
    ],
    "answer": 0,
    "explanation": "「<ruby>食欲<rt>しょくよく</rt></ruby>」는 '식욕'이라는 뜻입니다.<br><br><b>きょうは<ruby>食欲<rt>しょくよく</rt></ruby>があります。</b><br>오늘은 식욕이 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>注文<rt>ちゅうもん</rt></ruby>する의 뜻은?",
    "options": [
      "주문하다",
      "반납하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>注文<rt>ちゅうもん</rt></ruby>する」는 '주문하다'라는 뜻입니다.<br><br><b>まだ<ruby>注文<rt>ちゅうもん</rt></ruby>していません。</b><br>아직 주문하지 않았습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>会計<rt>かいけい</rt></ruby>する의 뜻은?",
    "options": [
      "계산하다",
      "포장하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>会計<rt>かいけい</rt></ruby>する」는 '계산하다'라는 뜻입니다.<br><br><b><ruby>先<rt>さき</rt></ruby>に<ruby>会計<rt>かいけい</rt></ruby>します。</b><br>먼저 계산합니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>満腹<rt>まんぷく</rt></ruby>의 뜻은?",
    "options": [
      "배부름",
      "목마름"
    ],
    "answer": 0,
    "explanation": "「<ruby>満腹<rt>まんぷく</rt></ruby>」는 '배부름'이라는 뜻입니다.<br><br><b>もう<ruby>満腹<rt>まんぷく</rt></ruby>です。</b><br>이미 배부릅니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>空腹<rt>くうふく</rt></ruby>의 뜻은?",
    "options": [
      "배고픔",
      "졸림"
    ],
    "answer": 0,
    "explanation": "「<ruby>空腹<rt>くうふく</rt></ruby>」는 '배고픔'이라는 뜻입니다.<br><br><b><ruby>空腹<rt>くうふく</rt></ruby>でたくさん<ruby>食<rt>た</rt></ruby>べました。</b><br>배가 고파서 많이 먹었습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>柔<rt>やわ</rt></ruby>らかい의 뜻은?",
    "options": [
      "부드럽다",
      "딱딱하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>柔<rt>やわ</rt></ruby>らかい」는 '부드럽다'라는 뜻입니다.<br><br><b>このパンはとても<ruby>柔<rt>やわ</rt></ruby>らかいです。</b><br>이 빵은 매우 부드럽습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>固<rt>かた</rt></ruby>い의 뜻은?",
    "options": [
      "딱딱하다",
      "부드럽다"
    ],
    "answer": 0,
    "explanation": "「<ruby>固<rt>かた</rt></ruby>い」는 '딱딱하다'라는 뜻입니다.<br><br><b>このお<ruby>肉<rt>にく</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>固<rt>かた</rt></ruby>いです。</b><br>이 고기는 조금 딱딱합니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>生<rt>なま</rt></ruby>의 뜻은?",
    "options": [
      "생/익히지 않음",
      "구운 것"
    ],
    "answer": 0,
    "explanation": "「<ruby>生<rt>なま</rt></ruby>」는 '생/익히지 않음'이라는 뜻입니다.<br><br><b>この<ruby>魚<rt>さかな</rt></ruby>は<ruby>生<rt>なま</rt></ruby>で<ruby>食<rt>た</rt></ruby>べられます。</b><br>이 생선은 생으로 먹을 수 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>卵<rt>たまご</rt></ruby>의 뜻은?",
    "options": [
      "달걀",
      "반찬"
    ],
    "answer": 0,
    "explanation": "「<ruby>卵<rt>たまご</rt></ruby>」는 '달걀'이라는 뜻입니다.<br><br><b><ruby>卵<rt>たまご</rt></ruby>を<ruby>二個<rt>にこ</rt></ruby><ruby>使<rt>つか</rt></ruby>います。</b><br>달걀을 두 개 사용합니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>水<rt>みず</rt></ruby>의 뜻은?",
    "options": [
      "물",
      "우유"
    ],
    "answer": 0,
    "explanation": "「<ruby>水<rt>みず</rt></ruby>」는 '물'이라는 뜻입니다.<br><br><b><ruby>水<rt>みず</rt></ruby>をもう<ruby>一杯<rt>いっぱい</rt></ruby>ください。</b><br>물 한 잔 더 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>味<rt>あじ</rt></ruby>わう의 뜻은?",
    "options": [
      "맛보다/음미하다",
      "씻다"
    ],
    "answer": 0,
    "explanation": "「<ruby>味<rt>あじ</rt></ruby>わう」는 '맛보다/음미하다'라는 뜻입니다.<br><br><b>ゆっくり<ruby>味<rt>あじ</rt></ruby>わって<ruby>食<rt>た</rt></ruby>べます。</b><br>천천히 음미하며 먹습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>飲<rt>の</rt></ruby>み<ruby>込<rt>こ</rt></ruby>む의 뜻은?",
    "options": [
      "삼키다",
      "씹다"
    ],
    "answer": 0,
    "explanation": "「<ruby>飲<rt>の</rt></ruby>み<ruby>込<rt>こ</rt></ruby>む」는 '삼키다'라는 뜻입니다.<br><br><b>よくかんでから<ruby>飲<rt>の</rt></ruby>み<ruby>込<rt>こ</rt></ruby>んでください。</b><br>잘 씹은 뒤 삼켜 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>盛<rt>も</rt></ruby>り<ruby>付<rt>つ</rt></ruby>ける의 뜻은?",
    "options": [
      "담아내다/플레이팅하다",
      "교환하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>盛<rt>も</rt></ruby>り<ruby>付<rt>つ</rt></ruby>ける」는 '담아내다/플레이팅하다'라는 뜻입니다.<br><br><b>きれいに<ruby>盛<rt>も</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けました。</b><br>예쁘게 담아냈습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>片付<rt>かたづ</rt></ruby>ける의 뜻은?",
    "options": [
      "치우다",
      "끓이다"
    ],
    "answer": 0,
    "explanation": "「<ruby>片付<rt>かたづ</rt></ruby>ける」는 '치우다'라는 뜻입니다.<br><br><b><ruby>食<rt>た</rt></ruby>べ<ruby>終<rt>お</rt></ruby>わったら<ruby>片付<rt>かたづ</rt></ruby>けます。</b><br>다 먹으면 치웁니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>食器<rt>しょっき</rt></ruby>의 뜻은?",
    "options": [
      "식기",
      "의상"
    ],
    "answer": 0,
    "explanation": "「<ruby>食器<rt>しょっき</rt></ruby>」는 '식기'라는 뜻입니다.<br><br><b><ruby>食器<rt>しょっき</rt></ruby>はそこにあります。</b><br>식기는 거기에 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>箸<rt>はし</rt></ruby>의 뜻은?",
    "options": [
      "젓가락",
      "수건"
    ],
    "answer": 0,
    "explanation": "「<ruby>箸<rt>はし</rt></ruby>」는 '젓가락'이라는 뜻입니다.<br><br><b><ruby>箸<rt>はし</rt></ruby>をもう<ruby>一膳<rt>いちぜん</rt></ruby>ください。</b><br>젓가락 한 벌 더 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>皿<rt>さら</rt></ruby>의 뜻은?",
    "options": [
      "접시",
      "젓가락"
    ],
    "answer": 0,
    "explanation": "「<ruby>皿<rt>さら</rt></ruby>」는 '접시'라는 뜻입니다.<br><br><b><ruby>皿<rt>さら</rt></ruby>をもう<ruby>一枚<rt>いちまい</rt></ruby>ください。</b><br>접시 한 장 더 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>의 뜻은?",
    "options": [
      "음료",
      "디저트"
    ],
    "answer": 0,
    "explanation": "「<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>」는 '음료'라는 뜻입니다.<br><br><b><ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>は<ruby>何<rt>なに</rt></ruby>にしますか。</b><br>음료는 무엇으로 하시겠어요?"
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>의 뜻은?",
    "options": [
      "음식",
      "주문표"
    ],
    "answer": 0,
    "explanation": "「<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>」는 '음식'이라는 뜻입니다.<br><br><b>この<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>はおいしいです。</b><br>이 음식은 맛있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>焦<rt>こ</rt></ruby>げる의 뜻은?",
    "options": [
      "타다",
      "익다"
    ],
    "answer": 0,
    "explanation": "「<ruby>焦<rt>こ</rt></ruby>げる」는 '타다'라는 뜻입니다.<br><br><b>パンが<ruby>少<rt>すこ</rt></ruby>し<ruby>焦<rt>こ</rt></ruby>げました。</b><br>빵이 조금 탔습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>冷<rt>さ</rt></ruby>める의 뜻은?",
    "options": [
      "식다",
      "끓다"
    ],
    "answer": 0,
    "explanation": "「<ruby>冷<rt>さ</rt></ruby>める」는 '식다'라는 뜻입니다.<br><br><b>スープが<ruby>冷<rt>さ</rt></ruby>めました。</b><br>수프가 식었습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>温<rt>あたた</rt></ruby>かい의 뜻은?",
    "options": [
      "따뜻하다",
      "차갑다"
    ],
    "answer": 0,
    "explanation": "「<ruby>温<rt>あたた</rt></ruby>かい」는 '따뜻하다'라는 뜻입니다.<br><br><b><ruby>温<rt>あたた</rt></ruby>かいお<ruby>茶<rt>ちゃ</rt></ruby>をください。</b><br>따뜻한 차 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>見<rt>み</rt></ruby>つかる의 뜻은?",
    "options": [
      "찾아지다",
      "놓치다"
    ],
    "answer": 0,
    "explanation": "「<ruby>見<rt>み</rt></ruby>つかる」는 '찾아지다'라는 뜻입니다.<br><br><b>いいサイズが<ruby>見<rt>み</rt></ruby>つかりました。</b><br>맞는 사이즈를 찾았습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>探<rt>さが</rt></ruby>す의 뜻은?",
    "options": [
      "찾다",
      "팔다"
    ],
    "answer": 0,
    "explanation": "「<ruby>探<rt>さが</rt></ruby>す」는 '찾다'라는 뜻입니다.<br><br><b><ruby>黒<rt>くろ</rt></ruby>いバッグを<ruby>探<rt>さが</rt></ruby>しています。</b><br>검은 가방을 찾고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>確<rt>たし</rt></ruby>かめる의 뜻은?",
    "options": [
      "확인하다",
      "고르다"
    ],
    "answer": 0,
    "explanation": "「<ruby>確<rt>たし</rt></ruby>かめる」는 '확인하다'라는 뜻입니다.<br><br><b><ruby>値段<rt>ねだん</rt></ruby>をもう<ruby>一度<rt>いちど</rt></ruby><ruby>確<rt>たし</rt></ruby>かめます。</b><br>가격을 한 번 더 확인합니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>売<rt>う</rt></ruby>れる의 뜻은?",
    "options": [
      "팔리다",
      "고장 나다"
    ],
    "answer": 0,
    "explanation": "「<ruby>売<rt>う</rt></ruby>れる」는 '팔리다'라는 뜻입니다.<br><br><b>この<ruby>色<rt>いろ</rt></ruby>はよく<ruby>売<rt>う</rt></ruby>れます。</b><br>이 색은 잘 팔립니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>店員<rt>てんいん</rt></ruby>의 뜻은?",
    "options": [
      "점원",
      "손님"
    ],
    "answer": 0,
    "explanation": "「<ruby>店員<rt>てんいん</rt></ruby>」는 '점원'이라는 뜻입니다.<br><br><b><ruby>店員<rt>てんいん</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いてみます。</b><br>점원에게 물어보겠습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>長<rt>なが</rt></ruby>い의 뜻은?",
    "options": [
      "길다",
      "짧다"
    ],
    "answer": 0,
    "explanation": "「<ruby>長<rt>なが</rt></ruby>い」는 '길다'라는 뜻입니다.<br><br><b>このズボンは<ruby>少<rt>すこ</rt></ruby>し<ruby>長<rt>なが</rt></ruby>いです。</b><br>이 바지는 조금 깁니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>短<rt>みじか</rt></ruby>い의 뜻은?",
    "options": [
      "짧다",
      "길다"
    ],
    "answer": 0,
    "explanation": "「<ruby>短<rt>みじか</rt></ruby>い」는 '짧다'라는 뜻입니다.<br><br><b>このスカートは<ruby>少<rt>すこ</rt></ruby>し<ruby>短<rt>みじか</rt></ruby>いです。</b><br>이 치마는 조금 짧습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>重<rt>おも</rt></ruby>い의 뜻은?",
    "options": [
      "무겁다",
      "가볍다"
    ],
    "answer": 0,
    "explanation": "「<ruby>重<rt>おも</rt></ruby>い」는 '무겁다'라는 뜻입니다.<br><br><b>このかばんは<ruby>少<rt>すこ</rt></ruby>し<ruby>重<rt>おも</rt></ruby>いです。</b><br>이 가방은 조금 무겁습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>軽<rt>かる</rt></ruby>い의 뜻은?",
    "options": [
      "가볍다",
      "무겁다"
    ],
    "answer": 0,
    "explanation": "「<ruby>軽<rt>かる</rt></ruby>い」는 '가볍다'라는 뜻입니다.<br><br><b>この<ruby>靴<rt>くつ</rt></ruby>は<ruby>軽<rt>かる</rt></ruby>いです。</b><br>이 신발은 가볍습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>色<rt>いろ</rt></ruby>의 뜻은?",
    "options": [
      "색",
      "무늬"
    ],
    "answer": 0,
    "explanation": "「<ruby>色<rt>いろ</rt></ruby>」는 '색'이라는 뜻입니다.<br><br><b>ほかの<ruby>色<rt>いろ</rt></ruby>もありますか。</b><br>다른 색도 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>値段<rt>ねだん</rt></ruby>의 뜻은?",
    "options": [
      "가격",
      "번호"
    ],
    "answer": 0,
    "explanation": "「<ruby>値段<rt>ねだん</rt></ruby>」는 '가격'이라는 뜻입니다.<br><br><b><ruby>値段<rt>ねだん</rt></ruby>はいくらですか。</b><br>가격은 얼마인가요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>割引<rt>わりびき</rt></ruby>의 뜻은?",
    "options": [
      "할인",
      "정가"
    ],
    "answer": 0,
    "explanation": "「<ruby>割引<rt>わりびき</rt></ruby>」는 '할인'이라는 뜻입니다.<br><br><b>アプリ<ruby>会員<rt>かいいん</rt></ruby>は10%<ruby>割引<rt>わりびき</rt></ruby>になります。</b><br>앱 회원은 10% 할인이 됩니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>税込<rt>ぜいこ</rt></ruby>み의 뜻은?",
    "options": [
      "세금 포함",
      "세금 별도"
    ],
    "answer": 0,
    "explanation": "「<ruby>税込<rt>ぜいこ</rt></ruby>み」는 '세금 포함'이라는 뜻입니다.<br><br><b><ruby>表示価格<rt>ひょうじかかく</rt></ruby>は<ruby>税込<rt>ぜいこ</rt></ruby>みです。</b><br>표시 가격은 세금 포함입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>税抜<rt>ぜいぬ</rt></ruby>き의 뜻은?",
    "options": [
      "세금 별도",
      "세금 포함"
    ],
    "answer": 0,
    "explanation": "「<ruby>税抜<rt>ぜいぬ</rt></ruby>き」는 '세금 별도'라는 뜻입니다.<br><br><b>こちらは<ruby>税抜<rt>ぜいぬ</rt></ruby>き<ruby>価格<rt>かかく</rt></ruby>です。</b><br>이쪽은 세금 별도 가격입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>限定<rt>げんてい</rt></ruby>의 뜻은?",
    "options": [
      "한정",
      "무제한"
    ],
    "answer": 0,
    "explanation": "「<ruby>限定<rt>げんてい</rt></ruby>」는 '한정'이라는 뜻입니다.<br><br><b>この<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>期間限定<rt>きかんげんてい</rt></ruby>です。</b><br>이 상품은 기간 한정입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>残り<rt>のこり</rt></ruby>의 뜻은?",
    "options": [
      "남은 것",
      "재고 많음"
    ],
    "answer": 0,
    "explanation": "「<ruby>残り<rt>のこり</rt></ruby>」는 '남은 것'이라는 뜻입니다.<br><br><b><ruby>残り<rt>のこり</rt></ruby>わずかです。</b><br>(수량이) 얼마 남지 않았습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>訳<rt>わけ</rt></ruby>의 뜻은?",
    "options": [
      "이유 있음",
      "정상"
    ],
    "answer": 0,
    "explanation": "「<ruby>訳<rt>わけ</rt></ruby>あり」는 '이유 있음'이라는 뜻입니다. 보통 하자 등이 있어 저렴하게 판매하는 상품을 나타낼 때 사용합니다.<br><br><b><ruby>訳<rt>わけ</rt></ruby>あり<ruby>商品<rt>しょうひん</rt></ruby>です。</b><br>이유 있는(=하자 있는) 상품입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>在庫<rt>ざいこ</rt></ruby>의 뜻은?",
    "options": [
      "재고",
      "품절"
    ],
    "answer": 0,
    "explanation": "「<ruby>在庫<rt>ざいこ</rt></ruby>」는 '재고'라는 뜻입니다.<br><br><b><ruby>在庫<rt>ざいこ</rt></ruby>はありますか。</b><br>재고가 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>売り切れ<rt>うりきれ</rt></ruby>의 뜻은?",
    "options": [
      "품절",
      "재고 있음"
    ],
    "answer": 0,
    "explanation": "「<ruby>売り切れ<rt>うりきれ</rt></ruby>」는 '품절'이라는 뜻입니다.<br><br><b><ruby>売り切れ<rt>うりきれ</rt></ruby>です。</b><br>품절입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>返品<rt>へんぴん</rt></ruby>의 뜻은?",
    "options": [
      "반품",
      "교환"
    ],
    "answer": 0,
    "explanation": "「<ruby>返品<rt>へんぴん</rt></ruby>」는 '반품'이라는 뜻입니다.<br><br><b><ruby>返品<rt>へんぴん</rt></ruby>できますか。</b><br>반품할 수 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>交換<rt>こうかん</rt></ruby>의 뜻은?",
    "options": [
      "교환",
      "환불"
    ],
    "answer": 0,
    "explanation": "「<ruby>交換<rt>こうかん</rt></ruby>」는 '교환'이라는 뜻입니다.<br><br><b><ruby>交換<rt>こうかん</rt></ruby>してください。</b><br>교환해 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>返金<rt>へんきん</rt></ruby>의 뜻은?",
    "options": [
      "환불",
      "지불"
    ],
    "answer": 0,
    "explanation": "「<ruby>返金<rt>へんきん</rt></ruby>」는 '환불'이라는 뜻입니다.<br><br><b><ruby>返金<rt>へんきん</rt></ruby>できますか。</b><br>환불이 가능한가요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>払<rt>はら</rt></ruby>う의 뜻은?",
    "options": [
      "지불하다",
      "환불하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>払<rt>はら</rt></ruby>う」는 '지불하다'라는 뜻입니다.<br><br><b>カードで<ruby>払<rt>はら</rt></ruby>います。</b><br>카드로 지불합니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>現金<rt>げんきん</rt></ruby>의 뜻은?",
    "options": [
      "현금",
      "카드"
    ],
    "answer": 0,
    "explanation": "「<ruby>現金<rt>げんきん</rt></ruby>」는 '현금'이라는 뜻입니다.<br><br><b><ruby>現金<rt>げんきん</rt></ruby>で<ruby>払<rt>はら</rt></ruby>います。</b><br>현금으로 지불합니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>有料<rt>ゆうりょう</rt></ruby>의 뜻은?",
    "options": [
      "유료",
      "무료"
    ],
    "answer": 0,
    "explanation": "「<ruby>有料<rt>ゆうりょう</rt></ruby>」는 '유료'라는 뜻입니다.<br><br><b>レジ<ruby>袋<rt>ぶくろ</rt></ruby>は1<ruby>枚<rt>まい</rt></ruby>3<ruby>円<rt>えん</rt></ruby>で<ruby>有料<rt>ゆうりょう</rt></ruby>です。</b><br>비닐봉투는 1장 3엔 유료입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>無料<rt>むりょう</rt></ruby>의 뜻은?",
    "options": [
      "무료",
      "유료"
    ],
    "answer": 0,
    "explanation": "「<ruby>無料<rt>むりょう</rt></ruby>」는 '무료'라는 뜻입니다.<br><br><b><ruby>会員登録<rt>かいいんとうろく</rt></ruby>すると<ruby>送料<rt>そうりょう</rt></ruby>が<ruby>無料<rt>むりょう</rt></ruby>になります。</b><br>회원가입하면 배송비가 무료가 됩니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>必要<rt>ひつよう</rt></ruby>의 뜻은?",
    "options": [
      "필요",
      "불필요"
    ],
    "answer": 0,
    "explanation": "「<ruby>必要<rt>ひつよう</rt></ruby>」는 '필요'라는 뜻입니다.<br><br><b>チェックインには<ruby>身分証<rt>みぶんしょう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。</b><br>체크인에는 신분증이 필요합니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>化粧品<rt>けしょうひん</rt></ruby>의 뜻은?",
    "options": [
      "화장품",
      "과자"
    ],
    "answer": 0,
    "explanation": "「<ruby>化粧品<rt>けしょうひん</rt></ruby>」는 '화장품'이라는 뜻입니다.<br><br><b><ruby>化粧品<rt>けしょうひん</rt></ruby>（コスメ）<ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>はどこですか。</b><br>화장품(코스메) 매장은 어디인가요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>袋<rt>ふくろ</rt></ruby>의 뜻은?",
    "options": [
      "봉투",
      "영수증"
    ],
    "answer": 0,
    "explanation": "「<ruby>袋<rt>ふくろ</rt></ruby>」는 '봉투'라는 뜻입니다.<br><br><b>レジ<ruby>袋<rt>ぶくろ</rt></ruby>はご<ruby>利用<rt>りよう</rt></ruby>ですか。</b><br>봉투는 필요하신가요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>安<rt>やす</rt></ruby>い의 뜻은?",
    "options": [
      "싸다",
      "비싸다"
    ],
    "answer": 0,
    "explanation": "「<ruby>安<rt>やす</rt></ruby>い」는 '싸다'라는 뜻입니다.<br><br><b>このTシャツは<ruby>安<rt>やす</rt></ruby>いです。</b><br>이 티셔츠는 쌉니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>高<rt>たか</rt></ruby>い의 뜻은?",
    "options": [
      "비싸다",
      "싸다"
    ],
    "answer": 0,
    "explanation": "「<ruby>高<rt>たか</rt></ruby>い」는 '비싸다'라는 뜻입니다.<br><br><b>これはちょっと<ruby>高<rt>たか</rt></ruby>いです。</b><br>이건 조금 비쌉니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>大<rt>おお</rt></ruby>きい의 뜻은?",
    "options": [
      "크다",
      "작다"
    ],
    "answer": 0,
    "explanation": "「<ruby>大<rt>おお</rt></ruby>きい」는 '크다'라는 뜻입니다.<br><br><b>このサイズは少し<ruby>大<rt>おお</rt></ruby>きいです。</b><br>이 사이즈는 조금 큽니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>小<rt>ちい</rt></ruby>さい의 뜻은?",
    "options": [
      "작다",
      "크다"
    ],
    "answer": 0,
    "explanation": "「<ruby>小<rt>ちい</rt></ruby>さい」는 '작다'라는 뜻입니다.<br><br><b>この<ruby>靴<rt>くつ</rt></ruby>は少し<ruby>小<rt>ちい</rt></ruby>さいです。</b><br>이 신발은 조금 작습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>合<rt>あ</rt></ruby>う의 뜻은?",
    "options": [
      "맞다",
      "바꾸다"
    ],
    "answer": 0,
    "explanation": "「<ruby>合<rt>あ</rt></ruby>う」는 '맞다'라는 뜻입니다.<br><br><b>このサイズで<ruby>合<rt>あ</rt></ruby>っています。</b><br>이 사이즈가 맞습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>試<rt>ため</rt></ruby>す의 뜻은?",
    "options": [
      "시험해 보다",
      "포장하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>試<rt>ため</rt></ruby>す」는 '시험해 보다'라는 뜻입니다.<br><br><b>この<ruby>色<rt>いろ</rt></ruby>も<ruby>試<rt>ため</rt></ruby>したいです。</b><br>이 색도 시험해 보고 싶습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>選<rt>えら</rt></ruby>ぶ의 뜻은?",
    "options": [
      "고르다",
      "돌아가다"
    ],
    "answer": 0,
    "explanation": "「<ruby>選<rt>えら</rt></ruby>ぶ」는 '고르다'라는 뜻입니다.<br><br><b>どちらにするかまだ<ruby>選<rt>えら</rt></ruby>んでいます。</b><br>어느 쪽으로 할지 아직 고르고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>比<rt>くら</rt></ruby>べる의 뜻은?",
    "options": [
      "비교하다",
      "계산하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>比<rt>くら</rt></ruby>べる」는 '비교하다'라는 뜻입니다.<br><br><b>二つの<ruby>色<rt>いろ</rt></ruby>を<ruby>比<rt>くら</rt></ruby>べています。</b><br>두 색을 비교하고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>着<rt>き</rt></ruby>る의 뜻은?",
    "options": [
      "입다",
      "벗다"
    ],
    "answer": 0,
    "explanation": "「<ruby>着<rt>き</rt></ruby>る」는 '입다'라는 뜻입니다.<br><br><b>このコートを<ruby>着<rt>き</rt></ruby>てみます。</b><br>이 코트를 입어 보겠습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>履<rt>は</rt></ruby>く의 뜻은?",
    "options": [
      "신다",
      "입다"
    ],
    "answer": 0,
    "explanation": "「<ruby>履<rt>は</rt></ruby>く」는 '신다'라는 뜻입니다.<br><br><b>この<ruby>靴<rt>くつ</rt></ruby>を<ruby>履<rt>は</rt></ruby>いてみてもいいですか。</b><br>이 신발을 신어 봐도 될까요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>穿<rt>は</rt></ruby>く의 뜻은?",
    "options": [
      "입다(하의)",
      "신다"
    ],
    "answer": 0,
    "explanation": "「<ruby>穿<rt>は</rt></ruby>く」는 '입다(하의)'라는 뜻입니다.<br><br><b>このズボンを<ruby>穿<rt>は</rt></ruby>いてみます。</b><br>이 바지를 입어 봅니다.<br><br>「<ruby>履<rt>は</rt></ruby>く」도 읽기는 같지만, 신발은 「<ruby>履<rt>は</rt></ruby>く」, 바지 같은 하의는 「<ruby>穿<rt>は</rt></ruby>く」를 씁니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>試着<rt>しちゃく</rt></ruby>의 뜻은?",
    "options": [
      "시착",
      "환불"
    ],
    "answer": 0,
    "explanation": "「<ruby>試着<rt>しちゃく</rt></ruby>」는 '시착'이라는 뜻입니다.<br><br><b>まず<ruby>試着<rt>しちゃく</rt></ruby>してみます。</b><br>먼저 입어 보겠습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>試着<rt>しちゃく</rt></ruby>する의 뜻은?",
    "options": [
      "입어 보다",
      "반품하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>試着<rt>しちゃく</rt></ruby>する」는 '입어 보다'라는 뜻입니다.<br><br><b>このコートを<ruby>試着<rt>しちゃく</rt></ruby>してもいいですか。</b><br>이 코트를 입어 봐도 될까요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>品切<rt>しなぎ</rt></ruby>れ의 뜻은?",
    "options": [
      "품절",
      "재입고"
    ],
    "answer": 0,
    "explanation": "「<ruby>品切<rt>しなぎ</rt></ruby>れ」는 '품절'이라는 뜻입니다.<br><br><b>いまは<ruby>品切<rt>しなぎ</rt></ruby>れです。</b><br>지금은 품절입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>取<rt>と</rt></ruby>り<ruby>寄<rt>よ</rt></ruby>せる의 뜻은?",
    "options": [
      "주문해 들여오다",
      "신다"
    ],
    "answer": 0,
    "explanation": "「<ruby>取<rt>と</rt></ruby>り<ruby>寄<rt>よ</rt></ruby>せる」는 '주문해 들여오다'라는 뜻입니다.<br><br><b>ほかの<ruby>店<rt>みせ</rt></ruby>から<ruby>取<rt>と</rt></ruby>り<ruby>寄<rt>よ</rt></ruby>せます。</b><br>다른 매장에서 주문해 들여옵니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>似合<rt>にあ</rt></ruby>う의 뜻은?",
    "options": [
      "어울리다",
      "고르다"
    ],
    "answer": 0,
    "explanation": "「<ruby>似合<rt>にあ</rt></ruby>う」는 '어울리다'라는 뜻입니다.<br><br><b>その<ruby>色<rt>いろ</rt></ruby>がよく<ruby>似合<rt>にあ</rt></ruby>います。</b><br>그 색이 잘 어울립니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>支払<rt>しはら</rt></ruby>う의 뜻은?",
    "options": [
      "지불하다",
      "포장하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>支払<rt>しはら</rt></ruby>う」는 '지불하다'라는 뜻입니다.<br><br><b>カードで<ruby>支払<rt>しはら</rt></ruby>います。</b><br>카드로 지불합니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>分割払<rt>ぶんかつばら</rt></ruby>い의 뜻은?",
    "options": [
      "할부",
      "일시불"
    ],
    "answer": 0,
    "explanation": "「<ruby>分割払<rt>ぶんかつばら</rt></ruby>い」는 '할부'라는 뜻입니다.<br><br><b><ruby>分割払<rt>ぶんかつばら</rt></ruby>いもできます。</b><br>할부도 가능합니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>一括払<rt>いっかつばら</rt></ruby>い의 뜻은?",
    "options": [
      "일시불",
      "할부"
    ],
    "answer": 0,
    "explanation": "「<ruby>一括払<rt>いっかつばら</rt></ruby>い」는 '일시불'이라는 뜻입니다.<br><br><b>きょうは<ruby>一括払<rt>いっかつばら</rt></ruby>いにします。</b><br>오늘은 일시불로 하겠습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>値下<rt>ねさ</rt></ruby>げ의 뜻은?",
    "options": [
      "가격 인하",
      "재고"
    ],
    "answer": 0,
    "explanation": "「<ruby>値下<rt>ねさ</rt></ruby>げ」는 '가격 인하'라는 뜻입니다.<br><br><b>このシャツは<ruby>値下<rt>ねさ</rt></ruby>げしました。</b><br>이 셔츠는 가격을 내렸습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れる의 뜻은?",
    "options": [
      "매진되다/품절되다",
      "교환하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れる」는 '매진되다/품절되다'라는 뜻입니다.<br><br><b><ruby>人気<rt>にんき</rt></ruby>のサイズはすぐ<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れます。</b><br>인기 사이즈는 금방 품절됩니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>의 뜻은?",
    "options": [
      "선물",
      "장바구니"
    ],
    "answer": 0,
    "explanation": "「<ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>」는 '선물'이라는 뜻입니다.<br><br><b>これは<ruby>母<rt>はは</rt></ruby>への<ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>です。</b><br>이것은 어머니께 드릴 선물입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>小銭<rt>こぜに</rt></ruby>의 뜻은?",
    "options": [
      "잔돈/동전",
      "영수증"
    ],
    "answer": 0,
    "explanation": "「<ruby>小銭<rt>こぜに</rt></ruby>」는 '잔돈/동전'이라는 뜻입니다.<br><br><b><ruby>小銭<rt>こぜに</rt></ruby>がありますか。</b><br>잔돈이 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "お<ruby>釣<rt>つ</rt></ruby>り의 뜻은?",
    "options": [
      "거스름돈",
      "세금"
    ],
    "answer": 0,
    "explanation": "「お<ruby>釣<rt>つ</rt></ruby>り」는 '거스름돈'이라는 뜻입니다.<br><br><b>お<ruby>釣<rt>つ</rt></ruby>りです。</b><br>거스름돈입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>値札<rt>ねふだ</rt></ruby>의 뜻은?",
    "options": [
      "가격표",
      "장바구니"
    ],
    "answer": 0,
    "explanation": "「<ruby>値札<rt>ねふだ</rt></ruby>」는 '가격표'라는 뜻입니다.<br><br><b><ruby>値札<rt>ねふだ</rt></ruby>をよく<ruby>見<rt>み</rt></ruby>てください。</b><br>가격표를 잘 봐 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>購入<rt>こうにゅう</rt></ruby>する의 뜻은?",
    "options": [
      "구입하다",
      "반품하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>購入<rt>こうにゅう</rt></ruby>する」는 '구입하다'라는 뜻입니다.<br><br><b>ネットで<ruby>購入<rt>こうにゅう</rt></ruby>しました。</b><br>인터넷으로 구입했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>売場<rt>うりば</rt></ruby>의 뜻은?",
    "options": [
      "매장/판매 코너",
      "출구"
    ],
    "answer": 0,
    "explanation": "「<ruby>売場<rt>うりば</rt></ruby>」는 '매장/판매 코너'라는 뜻입니다.<br><br><b><ruby>靴<rt>くつ</rt></ruby><ruby>売場<rt>うりば</rt></ruby>は<ruby>二階<rt>にかい</rt></ruby>です。</b><br>신발 매장은 2층입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>見本<rt>みほん</rt></ruby>의 뜻은?",
    "options": [
      "견본",
      "영수증"
    ],
    "answer": 0,
    "explanation": "「<ruby>見本<rt>みほん</rt></ruby>」는 '견본'이라는 뜻입니다.<br><br><b>これは<ruby>見本<rt>みほん</rt></ruby>です。</b><br>이것은 견본입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>人気<rt>にんき</rt></ruby>의 뜻은?",
    "options": [
      "인기",
      "불량"
    ],
    "answer": 0,
    "explanation": "「<ruby>人気<rt>にんき</rt></ruby>」는 '인기'라는 뜻입니다.<br><br><b>この<ruby>商品<rt>しょうひん</rt></ruby>はとても<ruby>人気<rt>にんき</rt></ruby>です。</b><br>이 상품은 매우 인기 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>高級<rt>こうきゅう</rt></ruby>의 뜻은?",
    "options": [
      "고급",
      "저가"
    ],
    "answer": 0,
    "explanation": "「<ruby>高級<rt>こうきゅう</rt></ruby>」는 '고급'이라는 뜻입니다.<br><br><b>この<ruby>店<rt>みせ</rt></ruby>は<ruby>高級<rt>こうきゅう</rt></ruby>ブランドが<ruby>多<rt>おお</rt></ruby>いです。</b><br>이 가게는 고급 브랜드가 많습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>手頃<rt>てごろ</rt></ruby>だ의 뜻은?",
    "options": [
      "적당하다/가격이 알맞다",
      "지나치게 비싸다"
    ],
    "answer": 0,
    "explanation": "「<ruby>手頃<rt>てごろ</rt></ruby>だ」는 '적당하다/가격이 알맞다'라는 뜻입니다.<br><br><b>この<ruby>値段<rt>ねだん</rt></ruby>は<ruby>手頃<rt>てごろ</rt></ruby>です。</b><br>이 가격은 적당합니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>本物<rt>ほんもの</rt></ruby>의 뜻은?",
    "options": [
      "진품",
      "가짜"
    ],
    "answer": 0,
    "explanation": "「<ruby>本物<rt>ほんもの</rt></ruby>」는 '진품'이라는 뜻입니다.<br><br><b>これは<ruby>本物<rt>ほんもの</rt></ruby>です。</b><br>이것은 진품입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>偽物<rt>にせもの</rt></ruby>의 뜻은?",
    "options": [
      "가짜",
      "진품"
    ],
    "answer": 0,
    "explanation": "「<ruby>偽物<rt>にせもの</rt></ruby>」는 '가짜'라는 뜻입니다.<br><br><b><ruby>偽物<rt>にせもの</rt></ruby>ではありません。</b><br>가짜가 아닙니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>免税<rt>めんぜい</rt></ruby>의 뜻은?",
    "options": [
      "면세",
      "환불"
    ],
    "answer": 0,
    "explanation": "「<ruby>免税<rt>めんぜい</rt></ruby>」는 '면세'라는 뜻입니다.<br><br><b>この<ruby>店<rt>みせ</rt></ruby>は<ruby>免税<rt>めんぜい</rt></ruby><ruby>対応<rt>たいおう</rt></ruby>です。</b><br>이 가게는 면세 대응입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>配達<rt>はいたつ</rt></ruby>의 뜻은?",
    "options": [
      "배달",
      "교환"
    ],
    "answer": 0,
    "explanation": "「<ruby>配達<rt>はいたつ</rt></ruby>」는 '배달'이라는 뜻입니다.<br><br><b><ruby>配達<rt>はいたつ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>배달로 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>配送<rt>はいそう</rt></ruby>의 뜻은?",
    "options": [
      "배송",
      "계산"
    ],
    "answer": 0,
    "explanation": "「<ruby>配送<rt>はいそう</rt></ruby>」는 '배송'이라는 뜻입니다.<br><br><b><ruby>配送<rt>はいそう</rt></ruby>は<ruby>明日<rt>あした</rt></ruby>です。</b><br>배송은 내일입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>届<rt>とど</rt></ruby>く의 뜻은?",
    "options": [
      "도착하다/배송되다",
      "신다"
    ],
    "answer": 0,
    "explanation": "「<ruby>届<rt>とど</rt></ruby>く」는 '도착하다/배송되다'라는 뜻입니다.<br><br><b>まだ<ruby>商品<rt>しょうひん</rt></ruby>が<ruby>届<rt>とど</rt></ruby>いていません。</b><br>아직 상품이 도착하지 않았습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>注文品<rt>ちゅうもんひん</rt></ruby>의 뜻은?",
    "options": [
      "주문 상품",
      "견본"
    ],
    "answer": 0,
    "explanation": "「<ruby>注文品<rt>ちゅうもんひん</rt></ruby>」는 '주문 상품'이라는 뜻입니다.<br><br><b><ruby>注文品<rt>ちゅうもんひん</rt></ruby>は<ruby>来週<rt>らいしゅう</rt></ruby><ruby>届<rt>とど</rt></ruby>きます。</b><br>주문 상품은 다음 주 도착합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>駅<rt>えき</rt></ruby>의 뜻은?",
    "options": [
      "역",
      "공항"
    ],
    "answer": 0,
    "explanation": "「<ruby>駅<rt>えき</rt></ruby>」는 '역'이라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>はどこですか。</b><br>역은 어디인가요?"
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>危<rt>あぶ</rt></ruby>ない의 뜻은?",
    "options": [
      "위험하다",
      "안전하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>危<rt>あぶ</rt></ruby>ない」는 '위험하다'라는 뜻입니다.<br><br><b>ここは<ruby>車<rt>くるま</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いので<ruby>危<rt>あぶ</rt></ruby>ないです。</b><br>여기는 차가 많아서 위험합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>電車<rt>でんしゃ</rt></ruby>의 뜻은?",
    "options": [
      "전철",
      "버스"
    ],
    "answer": 0,
    "explanation": "「<ruby>電車<rt>でんしゃ</rt></ruby>」는 '전철'이라는 뜻입니다.<br><br><b><ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります。</b><br>전철을 탑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>改札<rt>かいさつ</rt></ruby>의 뜻은?",
    "options": [
      "개찰구",
      "입구"
    ],
    "answer": 0,
    "explanation": "「<ruby>改札<rt>かいさつ</rt></ruby>」는 '개찰구'라는 뜻입니다.<br><br><b><ruby>改札<rt>かいさつ</rt></ruby>はどこですか。</b><br>개찰구는 어디인가요?"
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>出口<rt>でぐち</rt></ruby>의 뜻은?",
    "options": [
      "출구",
      "입구"
    ],
    "answer": 0,
    "explanation": "「<ruby>出口<rt>でぐち</rt></ruby>」는 '출구'라는 뜻입니다.<br><br><b><ruby>出口<rt>でぐち</rt></ruby>はこちらです。</b><br>출구는 이쪽입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>入口<rt>いりぐち</rt></ruby>의 뜻은?",
    "options": [
      "입구",
      "출구"
    ],
    "answer": 0,
    "explanation": "「<ruby>入口<rt>いりぐち</rt></ruby>」는 '입구'라는 뜻입니다.<br><br><b><ruby>入口<rt>いりぐち</rt></ruby>はこちらです。</b><br>입구는 이쪽입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>乗<rt>の</rt></ruby>る의 뜻은?",
    "options": [
      "타다",
      "내리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>乗<rt>の</rt></ruby>る」는 '타다'라는 뜻입니다. 탈 것 이름 뒤에 자주 붙습니다.<br><br><b><ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります。</b><br>전철을 탑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>降<rt>お</rt></ruby>りる의 뜻은?",
    "options": [
      "내리다",
      "타다"
    ],
    "answer": 0,
    "explanation": "「<ruby>降<rt>お</rt></ruby>りる」는 '내리다'라는 뜻입니다. 내리는 지점을 말할 때 자주 씁니다.<br><br><b><ruby>次<rt>つぎ</rt></ruby>の<ruby>駅<rt>えき</rt></ruby>で<ruby>降<rt>お</rt></ruby>ります。</b><br>다음 역에서 내립니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>える의 뜻은?",
    "options": [
      "환승하다",
      "출발하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>える」는 '환승하다'라는 뜻입니다. 다른 노선으로 갈아탈 때 쓰입니다.<br><br><b><ruby>渋谷<rt>しぶや</rt></ruby>で<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えます。</b><br>시부야에서 환승합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>遅<rt>おく</rt></ruby>れる의 뜻은?",
    "options": [
      "늦다/지연되다",
      "정상"
    ],
    "answer": 0,
    "explanation": "「<ruby>遅<rt>おく</rt></ruby>れる」는 '늦다/지연되다'라는 뜻입니다. 전철/약속 시간에 대해 자주 씁니다.<br><br><b><ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れています。</b><br>전철이 지연되고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>運休<rt>うんきゅう</rt></ruby>의 뜻은?",
    "options": [
      "운행 중지",
      "정상 운행"
    ],
    "answer": 0,
    "explanation": "「<ruby>運休<rt>うんきゅう</rt></ruby>」는 '운행 중지'라는 뜻입니다.<br><br><b><ruby>本日<rt>ほんじつ</rt></ruby>は<ruby>終日<rt>しゅうじつ</rt></ruby><ruby>運休<rt>うんきゅう</rt></ruby>です。</b><br>오늘은 종일 운행이 중지됩니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>路線<rt>ろせん</rt></ruby>의 뜻은?",
    "options": [
      "노선",
      "좌석"
    ],
    "answer": 0,
    "explanation": "「<ruby>路線<rt>ろせん</rt></ruby>」는 '노선'이라는 뜻입니다.<br><br><b><ruby>路線<rt>ろせん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。</b><br>노선을 확인합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>時刻表<rt>じこくひょう</rt></ruby>의 뜻은?",
    "options": [
      "시간표",
      "영수증"
    ],
    "answer": 0,
    "explanation": "「<ruby>時刻表<rt>じこくひょう</rt></ruby>」는 '시간표'라는 뜻입니다.<br><br><b><ruby>時刻表<rt>じこくひょう</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。</b><br>시간표를 봅니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>終電<rt>しゅうでん</rt></ruby>의 뜻은?",
    "options": [
      "막차",
      "첫차"
    ],
    "answer": 0,
    "explanation": "「<ruby>終電<rt>しゅうでん</rt></ruby>」는 '막차'라는 뜻입니다.<br><br><b><ruby>終電<rt>しゅうでん</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>ですか。</b><br>막차는 몇 시인가요?"
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>発車<rt>はっしゃ</rt></ruby>의 뜻은?",
    "options": [
      "출발",
      "도착"
    ],
    "answer": 0,
    "explanation": "「<ruby>発車<rt>はっしゃ</rt></ruby>」는 '출발'이라는 뜻입니다.<br><br><b>まもなく<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>発車<rt>はっしゃ</rt></ruby>します。</b><br>곧 전철이 출발합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>到着<rt>とうちゃく</rt></ruby>의 뜻은?",
    "options": [
      "도착",
      "출발"
    ],
    "answer": 0,
    "explanation": "「<ruby>到着<rt>とうちゃく</rt></ruby>」는 '도착'이라는 뜻입니다.<br><br><b>まもなく<ruby>新宿<rt>しんじゅく</rt></ruby>に<ruby>到着<rt>とうちゃく</rt></ruby>します。</b><br>곧 신주쿠에 도착합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>地図<rt>ちず</rt></ruby>의 뜻은?",
    "options": [
      "지도",
      "티켓"
    ],
    "answer": 0,
    "explanation": "「<ruby>地図<rt>ちず</rt></ruby>」는 '지도'라는 뜻입니다.<br><br><b><ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。</b><br>지도를 봅니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>信号<rt>しんごう</rt></ruby>의 뜻은?",
    "options": [
      "신호",
      "표지판"
    ],
    "answer": 0,
    "explanation": "「<ruby>信号<rt>しんごう</rt></ruby>」는 '신호'라는 뜻입니다.<br><br><b><ruby>信号<rt>しんごう</rt></ruby>が<ruby>赤<rt>あか</rt></ruby>に<ruby>変<rt>か</rt></ruby>わりました。</b><br>신호가 빨간색으로 바뀌었습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>의 뜻은?",
    "options": [
      "주차장",
      "개찰구"
    ],
    "answer": 0,
    "explanation": "「<ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>」는 '주차장'이라는 뜻입니다.<br><br><b><ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>はどこですか。</b><br>주차장은 어디인가요?"
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>行き<rt>いき</rt></ruby>의 뜻은?",
    "options": [
      "~행(행선지)",
      "출구"
    ],
    "answer": 0,
    "explanation": "「<ruby>行き<rt>いき</rt></ruby>」는 '~행(행선지)'라는 뜻입니다.<br><br><b>こちらは<ruby>東京<rt>とうきょう</rt></ruby><ruby>行き<rt>いき</rt></ruby>です。</b><br>이쪽은 도쿄행입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>混雑<rt>こんざつ</rt></ruby>의 뜻은?",
    "options": [
      "혼잡",
      "한산"
    ],
    "answer": 0,
    "explanation": "「<ruby>混雑<rt>こんざつ</rt></ruby>」는 '혼잡'이라는 뜻입니다.<br><br><b>この<ruby>時間<rt>じかん</rt></ruby>は<ruby>駅<rt>えき</rt></ruby>が<ruby>混雑<rt>こんざつ</rt></ruby>しています。</b><br>이 시간에는 역이 혼잡합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>歩<rt>ある</rt></ruby>く의 뜻은?",
    "options": [
      "걷다",
      "달리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>歩<rt>ある</rt></ruby>く」는 '걷다'라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>まで10<ruby>分<rt>ぷん</rt></ruby>くらい<ruby>歩<rt>ある</rt></ruby>きます。</b><br>역까지 10분 정도 걸어갑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>渡<rt>わた</rt></ruby>る의 뜻은?",
    "options": [
      "건너다",
      "돌아가다"
    ],
    "answer": 0,
    "explanation": "「<ruby>渡<rt>わた</rt></ruby>る」는 '건너다'라는 뜻입니다.<br><br><b>あの<ruby>信号<rt>しんごう</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>ってください。</b><br>저 신호를 건너 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>曲<rt>ま</rt></ruby>がる의 뜻은?",
    "options": [
      "돌다",
      "곧장 가다"
    ],
    "answer": 0,
    "explanation": "「<ruby>曲<rt>ま</rt></ruby>がる」는 '돌다'라는 뜻입니다.<br><br><b><ruby>次<rt>つぎ</rt></ruby>の<ruby>角<rt>かど</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がります。</b><br>다음 모퉁이에서 오른쪽으로 돕니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>着<rt>つ</rt></ruby>く의 뜻은?",
    "options": [
      "도착하다",
      "출발하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>着<rt>つ</rt></ruby>く」는 '도착하다'라는 뜻입니다.<br><br><b>もうすぐホテルに<ruby>着<rt>つ</rt></ruby>きます。</b><br>곧 호텔에 도착합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>急<rt>いそ</rt></ruby>ぐ의 뜻은?",
    "options": [
      "서두르다",
      "기다리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>急<rt>いそ</rt></ruby>ぐ」는 '서두르다'라는 뜻입니다.<br><br><b><ruby>終電<rt>しゅうでん</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うように<ruby>急<rt>いそ</rt></ruby>ぎます。</b><br>막차에 맞추려고 서두릅니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>迷<rt>まよ</rt></ruby>う의 뜻은?",
    "options": [
      "길을 헤매다",
      "찾아내다"
    ],
    "answer": 0,
    "explanation": "「<ruby>迷<rt>まよ</rt></ruby>う」는 '길을 헤매다'라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で少し<ruby>迷<rt>まよ</rt></ruby>いました。</b><br>역 안에서 조금 헤맸습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>進<rt>すす</rt></ruby>む의 뜻은?",
    "options": [
      "나아가다",
      "멈추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>進<rt>すす</rt></ruby>む」는 '나아가다'라는 뜻입니다.<br><br><b>このまままっすぐ<ruby>進<rt>すす</rt></ruby>んでください。</b><br>이대로 곧장 가 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>戻<rt>もど</rt></ruby>る의 뜻은?",
    "options": [
      "돌아가다",
      "건너다"
    ],
    "answer": 0,
    "explanation": "「<ruby>戻<rt>もど</rt></ruby>る」는 '돌아가다'라는 뜻입니다.<br><br><b>一つ<ruby>前<rt>まえ</rt></ruby>の<ruby>駅<rt>えき</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ります。</b><br>한 정거장 전 역으로 돌아갑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>近<rt>ちか</rt></ruby>づく의 뜻은?",
    "options": [
      "가까워지다",
      "멀어지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>近<rt>ちか</rt></ruby>づく」는 '가까워지다'라는 뜻입니다.<br><br><b>もうすぐ<ruby>目的地<rt>もくてきち</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づきます。</b><br>곧 목적지에 가까워집니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>離<rt>はな</rt></ruby>れる의 뜻은?",
    "options": [
      "멀어지다",
      "가까워지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>離<rt>はな</rt></ruby>れる」는 '멀어지다'라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>から少し<ruby>離<rt>はな</rt></ruby>れた<ruby>場所<rt>ばしょ</rt></ruby>です。</b><br>역에서 조금 떨어진 곳입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>え의 뜻은?",
    "options": [
      "환승",
      "하차"
    ],
    "answer": 0,
    "explanation": "「<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>え」는 '환승'이라는 뜻입니다.<br><br><b>ここで<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えます。</b><br>여기서 환승합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>乗<rt>の</rt></ruby>り<ruby>過<rt>す</rt></ruby>ごす의 뜻은?",
    "options": [
      "지나쳐 타다/내릴 곳을 놓치다",
      "건너다"
    ],
    "answer": 0,
    "explanation": "「<ruby>乗<rt>の</rt></ruby>り<ruby>過<rt>す</rt></ruby>ごす」는 '지나쳐 타다/내릴 곳을 놓치다'라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>を<ruby>乗<rt>の</rt></ruby>り<ruby>過<rt>す</rt></ruby>ごしました。</b><br>역을 지나쳤습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>出発<rt>しゅっぱつ</rt></ruby>의 뜻은?",
    "options": [
      "출발",
      "정차"
    ],
    "answer": 0,
    "explanation": "「<ruby>出発<rt>しゅっぱつ</rt></ruby>」는 '출발'이라는 뜻입니다.<br><br><b>バスは<ruby>九時<rt>くじ</rt></ruby>に<ruby>出発<rt>しゅっぱつ</rt></ruby>します。</b><br>버스는 9시에 출발합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>通<rt>とお</rt></ruby>り의 뜻은?",
    "options": [
      "길/거리",
      "지하철"
    ],
    "answer": 0,
    "explanation": "「<ruby>通<rt>とお</rt></ruby>り」는 '길/거리'라는 뜻입니다.<br><br><b>この<ruby>通<rt>とお</rt></ruby>りは<ruby>車<rt>くるま</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いです。</b><br>이 길은 차가 많습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>横断歩道<rt>おうだんほどう</rt></ruby>의 뜻은?",
    "options": [
      "횡단보도",
      "주차장"
    ],
    "answer": 0,
    "explanation": "「<ruby>横断歩道<rt>おうだんほどう</rt></ruby>」는 '횡단보도'라는 뜻입니다.<br><br><b><ruby>横断歩道<rt>おうだんほどう</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>ります。</b><br>횡단보도를 건넙니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>階段<rt>かいだん</rt></ruby>의 뜻은?",
    "options": [
      "계단",
      "엘리베이터"
    ],
    "answer": 0,
    "explanation": "「<ruby>階段<rt>かいだん</rt></ruby>」는 '계단'이라는 뜻입니다.<br><br><b><ruby>階段<rt>かいだん</rt></ruby>で<ruby>上<rt>あ</rt></ruby>がります。</b><br>계단으로 올라갑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>曲<rt>ま</rt></ruby>がり<ruby>角<rt>かど</rt></ruby>의 뜻은?",
    "options": [
      "모퉁이",
      "직진"
    ],
    "answer": 0,
    "explanation": "「<ruby>曲<rt>ま</rt></ruby>がり<ruby>角<rt>かど</rt></ruby>」는 '모퉁이'라는 뜻입니다.<br><br><b>つぎの<ruby>曲<rt>ま</rt></ruby>がり<ruby>角<rt>かど</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>です。</b><br>다음 모퉁이에서 오른쪽입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>近道<rt>ちかみち</rt></ruby>의 뜻은?",
    "options": [
      "지름길",
      "우회길"
    ],
    "answer": 0,
    "explanation": "「<ruby>近道<rt>ちかみち</rt></ruby>」는 '지름길'이라는 뜻입니다.<br><br><b>この<ruby>道<rt>みち</rt></ruby>が<ruby>近道<rt>ちかみち</rt></ruby>です。</b><br>이 길이 지름길입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>遠回<rt>とおまわ</rt></ruby>り의 뜻은?",
    "options": [
      "우회/멀리 돌아감",
      "지름길"
    ],
    "answer": 0,
    "explanation": "「<ruby>遠回<rt>とおまわ</rt></ruby>り」는 '우회/멀리 돌아감'이라는 뜻입니다.<br><br><b><ruby>工事<rt>こうじ</rt></ruby>で<ruby>遠回<rt>とおまわ</rt></ruby>りします。</b><br>공사 때문에 돌아갑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>通勤<rt>つうきん</rt></ruby>의 뜻은?",
    "options": [
      "통근",
      "관광"
    ],
    "answer": 0,
    "explanation": "「<ruby>通勤<rt>つうきん</rt></ruby>」는 '통근'이라는 뜻입니다.<br><br><b><ruby>毎日<rt>まいにち</rt></ruby><ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>通勤<rt>つうきん</rt></ruby>します。</b><br>매일 전철로 출근합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>始発<rt>しはつ</rt></ruby>의 뜻은?",
    "options": [
      "첫차",
      "막차"
    ],
    "answer": 0,
    "explanation": "「<ruby>始発<rt>しはつ</rt></ruby>」는 '첫차'라는 뜻입니다.<br><br><b>あしたは<ruby>始発<rt>しはつ</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます。</b><br>내일은 첫차로 갑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>降車<rt>こうしゃ</rt></ruby>의 뜻은?",
    "options": [
      "하차",
      "승차"
    ],
    "answer": 0,
    "explanation": "「<ruby>降車<rt>こうしゃ</rt></ruby>」는 '하차'라는 뜻입니다.<br><br><b>つぎで<ruby>降車<rt>こうしゃ</rt></ruby>する<ruby>方<rt>かた</rt></ruby>はボタンを<ruby>押<rt>お</rt></ruby>してください。</b><br>다음에 내리실 분은 버튼을 눌러 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>車内<rt>しゃない</rt></ruby>의 뜻은?",
    "options": [
      "차 안",
      "역 안"
    ],
    "answer": 0,
    "explanation": "「<ruby>車内<rt>しゃない</rt></ruby>」는 '차 안'이라는 뜻입니다.<br><br><b><ruby>車内<rt>しゃない</rt></ruby>ではお<ruby>静<rt>しず</rt></ruby>かにお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>차 안에서는 조용히 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>片道<rt>かたみち</rt></ruby>의 뜻은?",
    "options": [
      "편도",
      "왕복"
    ],
    "answer": 0,
    "explanation": "「<ruby>片道<rt>かたみち</rt></ruby>」는 '편도'라는 뜻입니다. 표를 살 때 자주 씁니다.<br><br><b><ruby>片道<rt>かたみち</rt></ruby>だけ<ruby>買<rt>か</rt></ruby>いました。</b><br>편도만 샀습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>往復<rt>おうふく</rt></ruby>의 뜻은?",
    "options": [
      "왕복",
      "편도"
    ],
    "answer": 0,
    "explanation": "「<ruby>往復<rt>おうふく</rt></ruby>」는 '왕복'이라는 뜻입니다. 표를 살 때 자주 씁니다.<br><br><b>きょうは<ruby>往復<rt>おうふく</rt></ruby>で<ruby>買<rt>か</rt></ruby>います。</b><br>오늘은 왕복으로 삽니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>急行<rt>きゅうこう</rt></ruby>의 뜻은?",
    "options": [
      "급행",
      "보통"
    ],
    "answer": 0,
    "explanation": "「<ruby>急行<rt>きゅうこう</rt></ruby>」는 '급행'이라는 뜻입니다.<br><br><b>この<ruby>電車<rt>でんしゃ</rt></ruby>は<ruby>急行<rt>きゅうこう</rt></ruby>です。</b><br>이 전철은 급행입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>止<rt>と</rt></ruby>まる의 뜻은?",
    "options": [
      "멈추다",
      "건너다"
    ],
    "answer": 0,
    "explanation": "「<ruby>止<rt>と</rt></ruby>まる」는 '멈추다'라는 뜻입니다.<br><br><b>このバスはここで<ruby>止<rt>と</rt></ruby>まります。</b><br>이 버스는 여기서 멈춥니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>走<rt>はし</rt></ruby>る의 뜻은?",
    "options": [
      "달리다",
      "멈추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>走<rt>はし</rt></ruby>る」는 '달리다'라는 뜻입니다.<br><br><b><ruby>車<rt>くるま</rt></ruby>が<ruby>速<rt>はや</rt></ruby>く<ruby>走<rt>はし</rt></ruby>っています。</b><br>차가 빠르게 달리고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>普通<rt>ふつう</rt></ruby>의 뜻은?",
    "options": [
      "보통 열차",
      "특급 열차"
    ],
    "answer": 0,
    "explanation": "「<ruby>普通<rt>ふつう</rt></ruby>」는 '보통 열차'라는 뜻입니다. 교통에서는 보통 '보통/일반 열차'를 줄여서 말합니다.<br><br><b>つぎは<ruby>普通<rt>ふつう</rt></ruby>しかありません。</b><br>다음은 보통 열차밖에 없습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>右折<rt>うせつ</rt></ruby>의 뜻은?",
    "options": [
      "우회전",
      "좌회전"
    ],
    "answer": 0,
    "explanation": "「<ruby>右折<rt>うせつ</rt></ruby>」는 '우회전'이라는 뜻입니다.<br><br><b>つぎの<ruby>角<rt>かど</rt></ruby>を<ruby>右折<rt>うせつ</rt></ruby>します。</b><br>다음 모퉁이에서 우회전합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>終点<rt>しゅうてん</rt></ruby>의 뜻은?",
    "options": [
      "종점",
      "출발점"
    ],
    "answer": 0,
    "explanation": "「<ruby>終点<rt>しゅうてん</rt></ruby>」는 '종점'이라는 뜻입니다.<br><br><b>ここが<ruby>終点<rt>しゅうてん</rt></ruby>です。</b><br>여기가 종점입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>途中<rt>とちゅう</rt></ruby>의 뜻은?",
    "options": [
      "도중",
      "입구"
    ],
    "answer": 0,
    "explanation": "「<ruby>途中<rt>とちゅう</rt></ruby>」는 '도중'이라는 뜻입니다.<br><br><b><ruby>途中<rt>とちゅう</rt></ruby>で<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りました。</b><br>도중에 비가 내렸습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>左折<rt>させつ</rt></ruby>의 뜻은?",
    "options": [
      "좌회전",
      "우회전"
    ],
    "answer": 0,
    "explanation": "「<ruby>左折<rt>させつ</rt></ruby>」는 '좌회전'이라는 뜻입니다.<br><br><b>ここを<ruby>左折<rt>させつ</rt></ruby>してください。</b><br>여기서 좌회전해 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>乗<rt>の</rt></ruby>り<ruby>場<rt>ば</rt></ruby>의 뜻은?",
    "options": [
      "타는 곳/승강장",
      "객실"
    ],
    "answer": 0,
    "explanation": "「<ruby>乗<rt>の</rt></ruby>り<ruby>場<rt>ば</rt></ruby>」는 '타는 곳/승강장'이라는 뜻입니다.<br><br><b><ruby>乗<rt>の</rt></ruby>り<ruby>場<rt>ば</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。</b><br>타는 곳을 확인합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>通過<rt>つうか</rt></ruby>する의 뜻은?",
    "options": [
      "통과하다",
      "하차하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>通過<rt>つうか</rt></ruby>する」는 '통과하다'라는 뜻입니다.<br><br><b>この<ruby>電車<rt>でんしゃ</rt></ruby>はこの<ruby>駅<rt>えき</rt></ruby>を<ruby>通過<rt>つうか</rt></ruby>します。</b><br>이 전철은 이 역을 통과합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>停車<rt>ていしゃ</rt></ruby>する의 뜻은?",
    "options": [
      "정차하다",
      "연주하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>停車<rt>ていしゃ</rt></ruby>する」는 '정차하다'라는 뜻입니다.<br><br><b>このバスはつぎに<ruby>停車<rt>ていしゃ</rt></ruby>します。</b><br>이 버스는 다음에 정차합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>道<rt>みち</rt></ruby>의 뜻은?",
    "options": [
      "길",
      "신호"
    ],
    "answer": 0,
    "explanation": "「<ruby>道<rt>みち</rt></ruby>」는 '길'이라는 뜻입니다.<br><br><b>この<ruby>道<rt>みち</rt></ruby>をまっすぐ<ruby>行<rt>い</rt></ruby>きます。</b><br>이 길을 곧장 갑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>渋滞<rt>じゅうたい</rt></ruby>의 뜻은?",
    "options": [
      "정체",
      "환호성"
    ],
    "answer": 0,
    "explanation": "「<ruby>渋滞<rt>じゅうたい</rt></ruby>」는 '정체'라는 뜻입니다.<br><br><b><ruby>道路<rt>どうろ</rt></ruby>が<ruby>渋滞<rt>じゅうたい</rt></ruby>しています。</b><br>도로가 정체되고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>歩道<rt>ほどう</rt></ruby>의 뜻은?",
    "options": [
      "인도",
      "차도"
    ],
    "answer": 0,
    "explanation": "「<ruby>歩道<rt>ほどう</rt></ruby>」는 '인도'라는 뜻입니다.<br><br><b><ruby>歩道<rt>ほどう</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>いてください。</b><br>인도로 걸어 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>反対側<rt>はんたいがわ</rt></ruby>의 뜻은?",
    "options": [
      "반대편",
      "왼쪽"
    ],
    "answer": 0,
    "explanation": "「<ruby>反対側<rt>はんたいがわ</rt></ruby>」는 '반대편'이라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>の<ruby>反対側<rt>はんたいがわ</rt></ruby>にあります。</b><br>역 반대편에 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>止<rt>と</rt></ruby>める의 뜻은?",
    "options": [
      "세우다",
      "출발하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>止<rt>と</rt></ruby>める」는 '세우다'라는 뜻입니다.<br><br><b>ここで<ruby>車<rt>くるま</rt></ruby>を<ruby>止<rt>と</rt></ruby>めます。</b><br>여기서 차를 세웁니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>満員<rt>まんいん</rt></ruby>의 뜻은?",
    "options": [
      "만원",
      "빈자리"
    ],
    "answer": 0,
    "explanation": "「<ruby>満員<rt>まんいん</rt></ruby>」는 '만원'이라는 뜻입니다.<br><br><b>このバスはもう<ruby>満員<rt>まんいん</rt></ruby>です。</b><br>이 버스는 이미 만원입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>空席<rt>くうせき</rt></ruby>의 뜻은?",
    "options": [
      "빈자리",
      "만석"
    ],
    "answer": 0,
    "explanation": "「<ruby>空席<rt>くうせき</rt></ruby>」는 '빈자리'라는 뜻입니다.<br><br><b><ruby>空席<rt>くうせき</rt></ruby>がひとつあります。</b><br>빈자리가 하나 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>乗<rt>の</rt></ruby>り<ruby>遅<rt>おく</rt></ruby>れる의 뜻은?",
    "options": [
      "탑승 시간을 놓치다",
      "환불하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>乗<rt>の</rt></ruby>り<ruby>遅<rt>おく</rt></ruby>れる」는 '탑승 시간을 놓치다'라는 뜻입니다.<br><br><b>バスに<ruby>乗<rt>の</rt></ruby>り<ruby>遅<rt>おく</rt></ruby>れました。</b><br>버스를 놓쳤습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>通<rt>とお</rt></ruby>り<ruby>過<rt>す</rt></ruby>ぎる의 뜻은?",
    "options": [
      "지나치다",
      "되돌리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>通<rt>とお</rt></ruby>り<ruby>過<rt>す</rt></ruby>ぎる」는 '지나치다'라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>を<ruby>通<rt>とお</rt></ruby>り<ruby>過<rt>す</rt></ruby>ぎました。</b><br>역을 지나쳤습니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>向<rt>む</rt></ruby>かう의 뜻은?",
    "options": [
      "향하다",
      "멈추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>向<rt>む</rt></ruby>かう」는 '향하다'라는 뜻입니다.<br><br><b>いま<ruby>駅<rt>えき</rt></ruby>に<ruby>向<rt>む</rt></ruby>かっています。</b><br>지금 역으로 가고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>春<rt>はる</rt></ruby>의 뜻은?",
    "options": [
      "봄",
      "여름"
    ],
    "answer": 0,
    "explanation": "「<ruby>春<rt>はる</rt></ruby>」는 '봄'이라는 뜻입니다.<br><br><b><ruby>春<rt>はる</rt></ruby>になって、<ruby>暖<rt>あたた</rt></ruby>かくなりました。</b><br>봄이 되어 따뜻해졌습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>夏<rt>なつ</rt></ruby>의 뜻은?",
    "options": [
      "여름",
      "겨울"
    ],
    "answer": 0,
    "explanation": "「<ruby>夏<rt>なつ</rt></ruby>」는 '여름'이라는 뜻입니다.<br><br><b><ruby>夏<rt>なつ</rt></ruby>は<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>してください。</b><br>여름에는 열사병에 주의해 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>秋<rt>あき</rt></ruby>의 뜻은?",
    "options": [
      "가을",
      "봄"
    ],
    "answer": 0,
    "explanation": "「<ruby>秋<rt>あき</rt></ruby>」는 '가을'이라는 뜻입니다.<br><br><b><ruby>秋<rt>あき</rt></ruby>は<ruby>紅葉<rt>こうよう</rt></ruby>がきれいです。</b><br>가을은 단풍이 아름답습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>冬<rt>ふゆ</rt></ruby>의 뜻은?",
    "options": [
      "겨울",
      "가을"
    ],
    "answer": 0,
    "explanation": "「<ruby>冬<rt>ふゆ</rt></ruby>」는 '겨울'이라는 뜻입니다.<br><br><b><ruby>冬<rt>ふゆ</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>がとても<ruby>寒<rt>さむ</rt></ruby>いです。</b><br>겨울은 아침이 매우 춥습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>晴れ<rt>はれ</rt></ruby>의 뜻은?",
    "options": [
      "맑음",
      "흐림"
    ],
    "answer": 0,
    "explanation": "「<ruby>晴れ<rt>はれ</rt></ruby>」는 '맑음'이라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>晴れ<rt>はれ</rt></ruby>の<ruby>予報<rt>よほう</rt></ruby>です。</b><br>오늘은 맑음 예보입니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>曇り<rt>くもり</rt></ruby>의 뜻은?",
    "options": [
      "흐림",
      "맑음"
    ],
    "answer": 0,
    "explanation": "「<ruby>曇り<rt>くもり</rt></ruby>」는 '흐림'이라는 뜻입니다.<br><br><b><ruby>午後<rt>ごご</rt></ruby>は<ruby>曇り<rt>くもり</rt></ruby>の<ruby>予報<rt>よほう</rt></ruby>です。</b><br>오후는 흐림 예보입니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>雨<rt>あめ</rt></ruby>의 뜻은?",
    "options": [
      "비",
      "눈"
    ],
    "answer": 0,
    "explanation": "「<ruby>雨<rt>あめ</rt></ruby>」는 '비'라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>の<ruby>予報<rt>よほう</rt></ruby>です。</b><br>오늘은 비 예보입니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>大雨<rt>おおあめ</rt></ruby>의 뜻은?",
    "options": [
      "폭우",
      "약한 비"
    ],
    "answer": 0,
    "explanation": "「<ruby>大雨<rt>おおあめ</rt></ruby>」는 '폭우'라는 뜻입니다.<br><br><b>この<ruby>地域<rt>ちいき</rt></ruby>には<ruby>大雨<rt>おおあめ</rt></ruby><ruby>警報<rt>けいほう</rt></ruby>が<ruby>出<rt>で</rt></ruby>ています。</b><br>이 지역에는 폭우 경보가 내려져 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>雪<rt>ゆき</rt></ruby>의 뜻은?",
    "options": [
      "눈",
      "비"
    ],
    "answer": 0,
    "explanation": "「<ruby>雪<rt>ゆき</rt></ruby>」는 '눈'이라는 뜻입니다.<br><br><b><ruby>今夜<rt>こんや</rt></ruby>は<ruby>雪<rt>ゆき</rt></ruby>の<ruby>予報<rt>よほう</rt></ruby>です。</b><br>오늘 밤은 눈 예보입니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>台風<rt>たいふう</rt></ruby>의 뜻은?",
    "options": [
      "태풍",
      "강풍"
    ],
    "answer": 0,
    "explanation": "「<ruby>台風<rt>たいふう</rt></ruby>」는 '태풍'이라는 뜻입니다.<br><br><b><ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近<rt>せっきん</rt></ruby>しています。</b><br>태풍이 접근하고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>気温<rt>きおん</rt></ruby>의 뜻은?",
    "options": [
      "기온",
      "습도"
    ],
    "answer": 0,
    "explanation": "「<ruby>気温<rt>きおん</rt></ruby>」는 '기온'이라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>気温<rt>きおん</rt></ruby>が30<ruby>度<rt>ど</rt></ruby>まで<ruby>上<rt>あ</rt></ruby>がります。</b><br>오늘은 기온이 30도까지 오릅니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>湿度<rt>しつど</rt></ruby>의 뜻은?",
    "options": [
      "습도",
      "기온"
    ],
    "answer": 0,
    "explanation": "「<ruby>湿度<rt>しつど</rt></ruby>」는 '습도'라는 뜻입니다.<br><br><b><ruby>梅雨<rt>つゆ</rt></ruby>の<ruby>時期<rt>じき</rt></ruby>は<ruby>湿度<rt>しつど</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いです。</b><br>장마철은 습도가 높습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>乾燥<rt>かんそう</rt></ruby>의 뜻은?",
    "options": [
      "건조",
      "폭우"
    ],
    "answer": 0,
    "explanation": "「<ruby>乾燥<rt>かんそう</rt></ruby>」는 '건조'라는 뜻입니다.<br><br><b><ruby>冬<rt>ふゆ</rt></ruby>は<ruby>空気<rt>くうき</rt></ruby>が<ruby>乾燥<rt>かんそう</rt></ruby>しています。</b><br>겨울에는 공기가 건조합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>暑<rt>あつ</rt></ruby>い의 뜻은?",
    "options": [
      "덥다(날씨)",
      "춥다"
    ],
    "answer": 0,
    "explanation": "「<ruby>暑<rt>あつ</rt></ruby>い」는 '덥다(날씨)'라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>暑<rt>あつ</rt></ruby>いので、<ruby>水<rt>みず</rt></ruby>を<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>ってください。</b><br>오늘은 더우니 물을 챙겨 가세요."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>寒<rt>さむ</rt></ruby>い의 뜻은?",
    "options": [
      "춥다",
      "덥다"
    ],
    "answer": 0,
    "explanation": "「<ruby>寒<rt>さむ</rt></ruby>い」는 '춥다'라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>いので、コートが<ruby>必要<rt>ひつよう</rt></ruby>です。</b><br>오늘은 추워서 코트가 필요합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>警報<rt>けいほう</rt></ruby>의 뜻은?",
    "options": [
      "경보",
      "주의보"
    ],
    "answer": 0,
    "explanation": "「<ruby>警報<rt>けいほう</rt></ruby>」는 '경보'라는 뜻입니다.<br><br><b><ruby>警報<rt>けいほう</rt></ruby>が<ruby>出<rt>で</rt></ruby>ています。</b><br>경보가 나와 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>注意報<rt>ちゅういほう</rt></ruby>의 뜻은?",
    "options": [
      "주의보",
      "경보"
    ],
    "answer": 0,
    "explanation": "「<ruby>注意報<rt>ちゅういほう</rt></ruby>」는 '주의보'라는 뜻입니다.<br><br><b><ruby>注意報<rt>ちゅういほう</rt></ruby>が<ruby>出<rt>で</rt></ruby>ています。</b><br>주의보가 나와 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>의 뜻은?",
    "options": [
      "열사병",
      "감기"
    ],
    "answer": 0,
    "explanation": "「<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>」는 '열사병'이라는 뜻입니다.<br><br><b><ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>してください。</b><br>열사병에 주의해 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>暖<rt>あたた</rt></ruby>かい의 뜻은?",
    "options": [
      "따뜻하다",
      "시원하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>暖<rt>あたた</rt></ruby>かい」는 '따뜻하다'라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>昨日<rt>きのう</rt></ruby>より<ruby>暖<rt>あたた</rt></ruby>かいです。</b><br>오늘은 어제보다 따뜻합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>涼<rt>すず</rt></ruby>しい의 뜻은?",
    "options": [
      "시원하다",
      "덥다"
    ],
    "answer": 0,
    "explanation": "「<ruby>涼<rt>すず</rt></ruby>しい」는 '시원하다'라는 뜻입니다.<br><br><b><ruby>朝<rt>あさ</rt></ruby>は少し<ruby>涼<rt>すず</rt></ruby>しいです。</b><br>아침은 조금 시원합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>吹<rt>ふ</rt></ruby>く의 뜻은?",
    "options": [
      "불다",
      "내리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>吹<rt>ふ</rt></ruby>く」는 '불다'라는 뜻입니다.<br><br><b><ruby>外<rt>そと</rt></ruby>は<ruby>強<rt>つよ</rt></ruby>い<ruby>風<rt>かぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いています。</b><br>밖에는 강한 바람이 불고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>降<rt>ふ</rt></ruby>る의 뜻은?",
    "options": [
      "내리다",
      "쌓이다"
    ],
    "answer": 0,
    "explanation": "「<ruby>降<rt>ふ</rt></ruby>る」는 '내리다'라는 뜻입니다.<br><br><b><ruby>午後<rt>ごご</rt></ruby>から<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りそうです。</b><br>오후부터 비가 올 것 같습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>積<rt>つ</rt></ruby>もる의 뜻은?",
    "options": [
      "쌓이다",
      "녹다"
    ],
    "answer": 0,
    "explanation": "「<ruby>積<rt>つ</rt></ruby>もる」는 '쌓이다'라는 뜻입니다.<br><br><b><ruby>道<rt>みち</rt></ruby>に<ruby>雪<rt>ゆき</rt></ruby>が<ruby>積<rt>つ</rt></ruby>もっています。</b><br>길에 눈이 쌓여 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>冷<rt>ひ</rt></ruby>える의 뜻은?",
    "options": [
      "차가워지다",
      "따뜻해지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>冷<rt>ひ</rt></ruby>える」는 '차가워지다'라는 뜻입니다.<br><br><b><ruby>夜<rt>よる</rt></ruby>はかなり<ruby>冷<rt>ひ</rt></ruby>えます。</b><br>밤에는 꽤 추워집니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>凍<rt>こお</rt></ruby>る의 뜻은?",
    "options": [
      "얼다",
      "녹다"
    ],
    "answer": 0,
    "explanation": "「<ruby>凍<rt>こお</rt></ruby>る」는 '얼다'라는 뜻입니다.<br><br><b><ruby>道<rt>みち</rt></ruby>が<ruby>凍<rt>こお</rt></ruby>っているので、<ruby>気<rt>き</rt></ruby>をつけてください。</b><br>길이 얼어 있으니 조심해 주세요."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>濡<rt>ぬ</rt></ruby>れる의 뜻은?",
    "options": [
      "젖다",
      "마르다"
    ],
    "answer": 0,
    "explanation": "「<ruby>濡<rt>ぬ</rt></ruby>れる」는 '젖다'라는 뜻입니다.<br><br><b><ruby>傘<rt>かさ</rt></ruby>がなくて、<ruby>服<rt>ふく</rt></ruby>が<ruby>濡<rt>ぬ</rt></ruby>れました。</b><br>우산이 없어서 옷이 젖었습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>強<rt>つよ</rt></ruby>い의 뜻은?",
    "options": [
      "강하다",
      "약하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>強<rt>つよ</rt></ruby>い」는 '강하다'라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>風<rt>かぜ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>いです。</b><br>오늘은 바람이 강합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>弱<rt>よわ</rt></ruby>い의 뜻은?",
    "options": [
      "약하다",
      "강하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>弱<rt>よわ</rt></ruby>い」는 '약하다'라는 뜻입니다.<br><br><b><ruby>今朝<rt>けさ</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>いです。</b><br>오늘 아침은 비가 약합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>晴<rt>は</rt></ruby>れる의 뜻은?",
    "options": [
      "개다/맑아지다",
      "흐려지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>晴<rt>は</rt></ruby>れる」는 '개다/맑아지다'라는 뜻입니다.<br><br><b>あしたは<ruby>晴<rt>は</rt></ruby>れそうです。</b><br>내일은 맑아질 것 같습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>曇<rt>くも</rt></ruby>る의 뜻은?",
    "options": [
      "흐려지다",
      "개다"
    ],
    "answer": 0,
    "explanation": "「<ruby>曇<rt>くも</rt></ruby>る」는 '흐려지다'라는 뜻입니다.<br><br><b>だんだん<ruby>空<rt>そら</rt></ruby>が<ruby>曇<rt>くも</rt></ruby>ってきました。</b><br>점점 하늘이 흐려졌습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>蒸<rt>む</rt></ruby>し<ruby>暑<rt>あつ</rt></ruby>い의 뜻은?",
    "options": [
      "후덥지근하다",
      "서늘하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>蒸<rt>む</rt></ruby>し<ruby>暑<rt>あつ</rt></ruby>い」는 '후덥지근하다'라는 뜻입니다.<br><br><b>きょうは<ruby>蒸<rt>む</rt></ruby>し<ruby>暑<rt>あつ</rt></ruby>いです。</b><br>오늘은 후덥지근합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>日差<rt>ひざ</rt></ruby>し의 뜻은?",
    "options": [
      "햇살",
      "바람 소리"
    ],
    "answer": 0,
    "explanation": "「<ruby>日差<rt>ひざ</rt></ruby>し」는 '햇살'이라는 뜻입니다.<br><br><b><ruby>日差<rt>ひざ</rt></ruby>しが<ruby>強<rt>つよ</rt></ruby>いです。</b><br>햇살이 강합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>日陰<rt>ひかげ</rt></ruby>의 뜻은?",
    "options": [
      "그늘",
      "햇살"
    ],
    "answer": 0,
    "explanation": "「<ruby>日陰<rt>ひかげ</rt></ruby>」는 '그늘'이라는 뜻입니다.<br><br><b><ruby>日陰<rt>ひかげ</rt></ruby>で<ruby>少<rt>すこ</rt></ruby>し<ruby>休<rt>やす</rt></ruby>みましょう。</b><br>그늘에서 조금 쉽시다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>夕立<rt>ゆうだち</rt></ruby>의 뜻은?",
    "options": [
      "소나기",
      "안개"
    ],
    "answer": 0,
    "explanation": "「<ruby>夕立<rt>ゆうだち</rt></ruby>」는 '소나기'라는 뜻입니다.<br><br><b><ruby>夕立<rt>ゆうだち</rt></ruby>でびしょぬれになりました。</b><br>소나기로 흠뻑 젖었습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>雷<rt>かみなり</rt></ruby>의 뜻은?",
    "options": [
      "천둥",
      "무지개"
    ],
    "answer": 0,
    "explanation": "「<ruby>雷<rt>かみなり</rt></ruby>」는 '천둥'이라는 뜻입니다.<br><br><b><ruby>雷<rt>かみなり</rt></ruby>の<ruby>音<rt>おと</rt></ruby>がしました。</b><br>천둥 소리가 났습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>夕焼<rt>ゆうや</rt></ruby>け의 뜻은?",
    "options": [
      "노을",
      "먹구름"
    ],
    "answer": 0,
    "explanation": "「<ruby>夕焼<rt>ゆうや</rt></ruby>け」는 '노을'이라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>の<ruby>夕焼<rt>ゆうや</rt></ruby>けはきれいです。</b><br>오늘 노을은 예쁩니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>虹<rt>にじ</rt></ruby>의 뜻은?",
    "options": [
      "무지개",
      "먹구름"
    ],
    "answer": 0,
    "explanation": "「<ruby>虹<rt>にじ</rt></ruby>」는 '무지개'라는 뜻입니다.<br><br><b><ruby>雨<rt>あめ</rt></ruby>のあとに<ruby>虹<rt>にじ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ました。</b><br>비 뒤에 무지개가 나왔습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>花見<rt>はなみ</rt></ruby>의 뜻은?",
    "options": [
      "꽃구경",
      "단풍놀이"
    ],
    "answer": 0,
    "explanation": "「<ruby>花見<rt>はなみ</rt></ruby>」는 '꽃구경'이라는 뜻입니다.<br><br><b><ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>花見<rt>はなみ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。</b><br>주말에는 꽃구경을 갑니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>紅葉<rt>こうよう</rt></ruby>의 뜻은?",
    "options": [
      "단풍",
      "벚꽃"
    ],
    "answer": 0,
    "explanation": "「<ruby>紅葉<rt>こうよう</rt></ruby>」는 '단풍'이라는 뜻입니다.<br><br><b><ruby>山<rt>やま</rt></ruby>の<ruby>紅葉<rt>こうよう</rt></ruby>がきれいです。</b><br>산의 단풍이 예쁩니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>桜<rt>さくら</rt></ruby>의 뜻은?",
    "options": [
      "벚꽃",
      "단풍"
    ],
    "answer": 0,
    "explanation": "「<ruby>桜<rt>さくら</rt></ruby>」는 '벚꽃'이라는 뜻입니다.<br><br><b><ruby>桜<rt>さくら</rt></ruby>がもう<ruby>咲<rt>さ</rt></ruby>いています。</b><br>벚꽃이 벌써 피어 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>長袖<rt>ながそで</rt></ruby>의 뜻은?",
    "options": [
      "긴소매",
      "반소매"
    ],
    "answer": 0,
    "explanation": "「<ruby>長袖<rt>ながそで</rt></ruby>」는 '긴소매'라는 뜻입니다.<br><br><b>きょうは<ruby>長袖<rt>ながそで</rt></ruby>を<ruby>着<rt>き</rt></ruby>ます。</b><br>오늘은 긴소매를 입습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>半袖<rt>はんそで</rt></ruby>의 뜻은?",
    "options": [
      "반소매",
      "긴소매"
    ],
    "answer": 0,
    "explanation": "「<ruby>半袖<rt>はんそで</rt></ruby>」는 '반소매'라는 뜻입니다.<br><br><b>もう<ruby>半袖<rt>はんそで</rt></ruby>で<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。</b><br>이제 반소매로도 괜찮습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>日焼<rt>ひや</rt></ruby>け의 뜻은?",
    "options": [
      "햇볕에 탐/선탠",
      "감기"
    ],
    "answer": 0,
    "explanation": "「<ruby>日焼<rt>ひや</rt></ruby>け」는 '햇볕에 탐/선탠'이라는 뜻입니다.<br><br><b><ruby>海<rt>うみ</rt></ruby>で<ruby>日焼<rt>ひや</rt></ruby>けしました。</b><br>바다에서 탔습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>乾燥<rt>かんそう</rt></ruby>する의 뜻은?",
    "options": [
      "건조하다",
      "축축하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>乾燥<rt>かんそう</rt></ruby>する」는 '건조하다'라는 뜻입니다.<br><br><b>この<ruby>季節<rt>きせつ</rt></ruby>は<ruby>空気<rt>くうき</rt></ruby>が<ruby>乾燥<rt>かんそう</rt></ruby>します。</b><br>이 계절은 공기가 건조합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>雪道<rt>ゆきみち</rt></ruby>의 뜻은?",
    "options": [
      "눈길",
      "빗길"
    ],
    "answer": 0,
    "explanation": "「<ruby>雪道<rt>ゆきみち</rt></ruby>」는 '눈길'이라는 뜻입니다.<br><br><b><ruby>雪道<rt>ゆきみち</rt></ruby>はすべりやすいです。</b><br>눈길은 미끄럽습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>強<rt>つよ</rt></ruby>まる의 뜻은?",
    "options": [
      "강해지다",
      "약해지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>強<rt>つよ</rt></ruby>まる」는 '강해지다'라는 뜻입니다.<br><br><b><ruby>午後<rt>ごご</rt></ruby>から<ruby>風<rt>かぜ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>まります。</b><br>오후부터 바람이 강해집니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>晴<rt>は</rt></ruby>れ의 뜻은?",
    "options": [
      "맑음",
      "비"
    ],
    "answer": 0,
    "explanation": "「<ruby>晴<rt>は</rt></ruby>れ」는 '맑음'이라는 뜻입니다.<br><br><b>あしたは<ruby>晴<rt>は</rt></ruby>れです。</b><br>내일은 맑습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>曇<rt>くも</rt></ruby>り의 뜻은?",
    "options": [
      "흐림",
      "눈"
    ],
    "answer": 0,
    "explanation": "「<ruby>曇<rt>くも</rt></ruby>り」는 '흐림'이라는 뜻입니다.<br><br><b>きょうは<ruby>曇<rt>くも</rt></ruby>りです。</b><br>오늘은 흐립니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>雨上<rt>あめあ</rt></ruby>がり의 뜻은?",
    "options": [
      "비가 갠 뒤",
      "장마"
    ],
    "answer": 0,
    "explanation": "「<ruby>雨上<rt>あめあ</rt></ruby>がり」는 '비가 갠 뒤'라는 뜻입니다.<br><br><b><ruby>雨上<rt>あめあ</rt></ruby>がりの<ruby>空<rt>そら</rt></ruby>がきれいです。</b><br>비 갠 뒤 하늘이 예쁩니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>雨宿<rt>あまやど</rt></ruby>り의 뜻은?",
    "options": [
      "비를 피해 잠시 머묾",
      "산책"
    ],
    "answer": 0,
    "explanation": "「<ruby>雨宿<rt>あまやど</rt></ruby>り」는 '비를 피해 잠시 머묾'이라는 뜻입니다.<br><br><b>コンビニで<ruby>雨宿<rt>あまやど</rt></ruby>りしました。</b><br>편의점에서 비를 피했습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>空<rt>そら</rt></ruby>의 뜻은?",
    "options": [
      "하늘",
      "바람"
    ],
    "answer": 0,
    "explanation": "「<ruby>空<rt>そら</rt></ruby>」는 '하늘'이라는 뜻입니다.<br><br><b><ruby>空<rt>そら</rt></ruby>がとても<ruby>青<rt>あお</rt></ruby>いです。</b><br>하늘이 매우 파랗습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>北風<rt>きたかぜ</rt></ruby>의 뜻은?",
    "options": [
      "북풍",
      "남풍"
    ],
    "answer": 0,
    "explanation": "「<ruby>北風<rt>きたかぜ</rt></ruby>」는 '북풍'이라는 뜻입니다.<br><br><b><ruby>北風<rt>きたかぜ</rt></ruby>が<ruby>冷<rt>つめ</rt></ruby>たいです。</b><br>북풍이 차갑습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>南風<rt>みなみかぜ</rt></ruby>의 뜻은?",
    "options": [
      "남풍",
      "북풍"
    ],
    "answer": 0,
    "explanation": "「<ruby>南風<rt>みなみかぜ</rt></ruby>」는 '남풍'이라는 뜻입니다.<br><br><b><ruby>南風<rt>みなみかぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いています。</b><br>남풍이 불고 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>乾<rt>かわ</rt></ruby>く의 뜻은?",
    "options": [
      "마르다",
      "젖다"
    ],
    "answer": 0,
    "explanation": "「<ruby>乾<rt>かわ</rt></ruby>く」는 '마르다'라는 뜻입니다.<br><br><b><ruby>洗濯物<rt>せんたくもの</rt></ruby>がよく<ruby>乾<rt>かわ</rt></ruby>きます。</b><br>빨래가 잘 마릅니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>湿<rt>しめ</rt></ruby>る의 뜻은?",
    "options": [
      "축축해지다",
      "맑아지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>湿<rt>しめ</rt></ruby>る」는 '축축해지다'라는 뜻입니다.<br><br><b><ruby>雨<rt>あめ</rt></ruby>で<ruby>地面<rt>じめん</rt></ruby>が<ruby>湿<rt>しめ</rt></ruby>っています。</b><br>비 때문에 땅이 축축합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>日<rt>ひ</rt></ruby>の<ruby>出<rt>で</rt></ruby>의 뜻은?",
    "options": [
      "일출",
      "일몰"
    ],
    "answer": 0,
    "explanation": "「<ruby>日<rt>ひ</rt></ruby>の<ruby>出<rt>で</rt></ruby>」는 '일출'이라는 뜻입니다.<br><br><b>あしたは<ruby>日<rt>ひ</rt></ruby>の<ruby>出<rt>で</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。</b><br>내일은 일출을 봅니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>朝<rt>あさ</rt></ruby>의 뜻은?",
    "options": [
      "아침",
      "밤"
    ],
    "answer": 0,
    "explanation": "「<ruby>朝<rt>あさ</rt></ruby>」는 '아침'이라는 뜻입니다.<br><br><b><ruby>朝<rt>あさ</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>寒<rt>さむ</rt></ruby>いです。</b><br>아침은 조금 춥습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>夜<rt>よる</rt></ruby>의 뜻은?",
    "options": [
      "밤",
      "아침"
    ],
    "answer": 0,
    "explanation": "「<ruby>夜<rt>よる</rt></ruby>」는 '밤'이라는 뜻입니다.<br><br><b><ruby>夜<rt>よる</rt></ruby>は<ruby>風<rt>かぜ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>いです。</b><br>밤에는 바람이 강합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>霧<rt>きり</rt></ruby>의 뜻은?",
    "options": [
      "안개",
      "번개"
    ],
    "answer": 0,
    "explanation": "「<ruby>霧<rt>きり</rt></ruby>」는 '안개'라는 뜻입니다.<br><br><b><ruby>朝<rt>あさ</rt></ruby>は<ruby>霧<rt>きり</rt></ruby>が<ruby>濃<rt>こ</rt></ruby>いです。</b><br>아침에는 안개가 짙습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>帽子<rt>ぼうし</rt></ruby>의 뜻은?",
    "options": [
      "모자",
      "장갑"
    ],
    "answer": 0,
    "explanation": "「<ruby>帽子<rt>ぼうし</rt></ruby>」는 '모자'라는 뜻입니다.<br><br><b><ruby>日差<rt>ひざ</rt></ruby>しが<ruby>強<rt>つよ</rt></ruby>いので<ruby>帽子<rt>ぼうし</rt></ruby>をかぶります。</b><br>햇살이 강해서 모자를 씁니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>薄着<rt>うすぎ</rt></ruby>의 뜻은?",
    "options": [
      "얇게 입음",
      "두껍게 입음"
    ],
    "answer": 0,
    "explanation": "「<ruby>薄着<rt>うすぎ</rt></ruby>」는 '얇게 입음'이라는 뜻입니다.<br><br><b>まだ<ruby>夜<rt>よる</rt></ruby>は<ruby>薄着<rt>うすぎ</rt></ruby>だと<ruby>寒<rt>さむ</rt></ruby>いです。</b><br>아직 밤은 얇게 입으면 춥습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>上着<rt>うわぎ</rt></ruby>의 뜻은?",
    "options": [
      "겉옷",
      "수건"
    ],
    "answer": 0,
    "explanation": "「<ruby>上着<rt>うわぎ</rt></ruby>」는 '겉옷'이라는 뜻입니다.<br><br><b><ruby>朝<rt>あさ</rt></ruby>は<ruby>上着<rt>うわぎ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。</b><br>아침에는 겉옷이 필요합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>長靴<rt>ながぐつ</rt></ruby>의 뜻은?",
    "options": [
      "장화",
      "운동화"
    ],
    "answer": 0,
    "explanation": "「<ruby>長靴<rt>ながぐつ</rt></ruby>」는 '장화'라는 뜻입니다.<br><br><b><ruby>雨<rt>あめ</rt></ruby>なので<ruby>長靴<rt>ながぐつ</rt></ruby>を<ruby>履<rt>は</rt></ruby>きます。</b><br>비가 와서 장화를 신습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>強風<rt>きょうふう</rt></ruby>의 뜻은?",
    "options": [
      "강풍",
      "잔바람"
    ],
    "answer": 0,
    "explanation": "「<ruby>強風<rt>きょうふう</rt></ruby>」는 '강풍'이라는 뜻입니다.<br><br><b>きょうは<ruby>強風<rt>きょうふう</rt></ruby><ruby>注意<rt>ちゅうい</rt></ruby>です。</b><br>오늘은 강풍 주의입니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>傘<rt>かさ</rt></ruby>의 뜻은?",
    "options": [
      "우산",
      "모자"
    ],
    "answer": 0,
    "explanation": "「<ruby>傘<rt>かさ</rt></ruby>」는 '우산'이라는 뜻입니다.<br><br><b>きょうは<ruby>傘<rt>かさ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。</b><br>오늘은 우산이 필요합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く의 뜻은?",
    "options": [
      "감기에 걸리다",
      "열이 나다"
    ],
    "answer": 0,
    "explanation": "「<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く」는 '감기에 걸리다'라는 뜻입니다.<br><br><b><ruby>昨日<rt>きのう</rt></ruby>から<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>いています。</b><br>어제부터 감기에 걸렸습니다."
  },
];
})();


