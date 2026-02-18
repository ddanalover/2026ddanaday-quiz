// data/kanji.js (별빛노트 - 한자 통합본 130문항)
// - window.masterDB.kanji에 130문항 저장
// - 각 문항에 cat(카테고리)이 포함되어 있습니다. (UI에서 필터링용)
// - 형식: tag/question/options/answer/explanation  (루비 포함, 일본어 예문 아래 한국어 번역)

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
    "explanation": "「<ruby>公演<rt>こうえん</rt></ruby>」은 '공연'이라는 뜻입니다. 안내문·일정에서 자주 보입니다.<br><br><b><ruby>公演<rt>こうえん</rt></ruby>は18<ruby>時<rt>じ</rt></ruby>からです。</b><br>공연은 18시부터입니다."
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
    "explanation": "「<ruby>開演<rt>かいえん</rt></ruby>」은 '공연 시작'이라는 뜻입니다.<br><br><b><ruby>開演<rt>かいえん</rt></ruby>は19<ruby>時<rt>じ</rt></ruby>です。</b><br>공연 시작은 19시입니다."
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
    "explanation": "「<ruby>終演<rt>しゅうえん</rt></ruby>」은 '공연 종료'이라는 뜻입니다.<br><br><b><ruby>終演<rt>しゅうえん</rt></ruby>は21<ruby>時<rt>じ</rt></ruby>ごろです。</b><br>공연 종료는 21시쯤입니다."
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
    "explanation": "「<ruby>開場<rt>かいじょう</rt></ruby>」은 '입장 시작(개장)'이라는 뜻입니다. 開演과 헷갈리기 쉽습니다.<br><br><b><ruby>開場<rt>かいじょう</rt></ruby>は18<ruby>時<rt>じ</rt></ruby>、<ruby>開演<rt>かいえん</rt></ruby>は19<ruby>時<rt>じ</rt></ruby>です。</b><br>입장은 18시, 공연 시작은 19시입니다."
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
    "explanation": "「<ruby>本番<rt>ほんばん</rt></ruby>」은 '본공연(본방)'이라는 뜻입니다. 리허설은 リハーサル로 씁니다.<br><br><b><ruby>本番<rt>ほんばん</rt></ruby>はきょうです。</b><br>본공연은 오늘입니다."
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
    "explanation": "「<ruby>楽屋<rt>がくや</rt></ruby>」은 '대기실'이라는 뜻입니다.<br><br><b><ruby>楽屋<rt>がくや</rt></ruby>で<ruby>準備<rt>じゅんび</rt></ruby>します。</b><br>대기실에서 준비합니다."
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
    "explanation": "「<ruby>演出<rt>えんしゅつ</rt></ruby>」은 '연출'이라는 뜻입니다.<br><br><b><ruby>演出<rt>えんしゅつ</rt></ruby>がすごかったです。</b><br>연출이 대단했어요."
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
    "explanation": "「<ruby>照明<rt>しょうめい</rt></ruby>」은 '조명'이라는 뜻입니다. 밝기는 <ruby>明<rt>あか</rt></ruby>るさ로 말합니다.<br><br><b><ruby>照明<rt>しょうめい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。</b><br>조명을 확인합니다."
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
    "explanation": "「<ruby>音響<rt>おんきょう</rt></ruby>」은 '음향'이라는 뜻입니다.<br><br><b><ruby>音響<rt>おんきょう</rt></ruby>チェックをします。</b><br>음향 체크를 합니다."
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
    "explanation": "「<ruby>音量<rt>おんりょう</rt></ruby>」은 '음량'이라는 뜻입니다.<br><br><b><ruby>音量<rt>おんりょう</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。</b><br>음량을 올려 주세요."
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
    "explanation": "「<ruby>舞台<rt>ぶたい</rt></ruby>」은 '무대(연극·뮤지컬 느낌)'이라는 뜻입니다. 콘서트는 ステージ/ライブ가 더 자연스럽습니다.<br><br><b>ミュージカルの<ruby>舞台<rt>ぶたい</rt></ruby>を<ruby>観<rt>み</rt></ruby>ました。</b><br>뮤지컬 무대를 봤습니다."
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
    "explanation": "「<ruby>座席<rt>ざせき</rt></ruby>」은 '좌석'이라는 뜻입니다.<br><br><b><ruby>座席<rt>ざせき</rt></ruby>は<ruby>指定<rt>してい</rt></ruby>です。</b><br>좌석은 지정석입니다."
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
    "explanation": "「<ruby>入場<rt>にゅうじょう</rt></ruby>」은 '입장'이라는 뜻입니다.<br><br><b><ruby>入場<rt>にゅうじょう</rt></ruby>は18<ruby>時<rt>じ</rt></ruby>からです。</b><br>입장은 18시부터입니다."
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
    "explanation": "「<ruby>再入場<rt>さいにゅうじょう</rt></ruby>」은 '재입장'이라는 뜻입니다.<br><br><b><ruby>退場<rt>たいじょう</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>再入場<rt>さいにゅうじょう</rt></ruby>はできません。</b><br>퇴장 후 재입장은 불가능합니다."
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
    "explanation": "「<ruby>申込<rt>もうしこみ</rt></ruby>」은 '신청'이라는 뜻입니다.<br><br><b>チケットの<ruby>申込<rt>もうしこみ</rt></ruby>をしました。</b><br>티켓 신청을 했습니다."
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
    "explanation": "「<ruby>抽選<rt>ちゅうせん</rt></ruby>」은 '추첨'이라는 뜻입니다.<br><br><b><ruby>抽選<rt>ちゅうせん</rt></ruby><ruby>結果<rt>けっか</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。</b><br>추첨 결과를 확인해 주세요."
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
    "explanation": "「<ruby>当選<rt>とうせん</rt></ruby>」은 '당첨'이라는 뜻입니다.<br><br><b><ruby>当選<rt>とうせん</rt></ruby>メールが<ruby>届<rt>とど</rt></ruby>きました。</b><br>당첨 메일이 도착했습니다."
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
    "explanation": "「<ruby>落選<rt>らくせん</rt></ruby>」은 '낙첨'이라는 뜻입니다.<br><br><b><ruby>今回<rt>こんかい</rt></ruby>は<ruby>落選<rt>らくせん</rt></ruby>しました。</b><br>이번에는 낙첨했습니다."
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
    "explanation": "「<ruby>完売<rt>かんばい</rt></ruby>」은 '매진'이라는 뜻입니다.<br><br><b>チケットは<ruby>完売<rt>かんばい</rt></ruby>しました。</b><br>티켓은 매진되었습니다."
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
    "explanation": "「<ruby>通販<rt>つうはん</rt></ruby>」은 '온라인 판매'이라는 뜻입니다.<br><br><b>グッズは<ruby>通販<rt>つうはん</rt></ruby>でも<ruby>購入<rt>こうにゅう</rt></ruby>できます。</b><br>굿즈는 온라인으로도 구매할 수 있습니다."
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
    "explanation": "「<ruby>予約<rt>よやく</rt></ruby>」은 '예약'이라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>しています。</b><br>예약했습니다."
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
    "explanation": "「<ruby>確認<rt>かくにん</rt></ruby>」은 '확인'이라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。</b><br>예약을 확인합니다."
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
    "explanation": "「<ruby>変更<rt>へんこう</rt></ruby>」은 '변경'이라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>を<ruby>変更<rt>へんこう</rt></ruby>したいです。</b><br>예약을 변경하고 싶습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>取消<rt>とりけし</rt></ruby>의 뜻은?",
    "options": [
      "취소",
      "연장"
    ],
    "answer": 0,
    "explanation": "「<ruby>取消<rt>とりけし</rt></ruby>」은 '취소'이라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>を<ruby>取消<rt>とりけし</rt></ruby>できますか。</b><br>예약을 취소할 수 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>一泊<rt>いっぱく</rt></ruby>의 뜻은?",
    "options": [
      "1박",
      "연박"
    ],
    "answer": 0,
    "explanation": "「<ruby>一泊<rt>いっぱく</rt></ruby>」은 '1박'이라는 뜻입니다.<br><br><b><ruby>一泊<rt>いっぱく</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>1박으로 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>連泊<rt>れんぱく</rt></ruby>의 뜻은?",
    "options": [
      "연박",
      "편도"
    ],
    "answer": 0,
    "explanation": "「<ruby>連泊<rt>れんぱく</rt></ruby>」은 '연박'이라는 뜻입니다.<br><br><b><ruby>連泊<rt>れんぱく</rt></ruby>です。</b><br>연박입니다."
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
    "explanation": "「<ruby>宿泊<rt>しゅくはく</rt></ruby>」은 '숙박'이라는 뜻입니다.<br><br><b><ruby>宿泊<rt>しゅくはく</rt></ruby>の<ruby>予約<rt>よやく</rt></ruby>です。</b><br>숙박 예약입니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>素泊<rt>すど</rt></ruby>의 뜻은?",
    "options": [
      "숙박만(식사 없음)",
      "조식 포함"
    ],
    "answer": 0,
    "explanation": "「<ruby>素泊<rt>すど</rt></ruby>」은 '숙박만(식사 없음)'이라는 뜻입니다.<br><br><b><ruby>素泊<rt>すど</rt></ruby>まりで<ruby>予約<rt>よやく</rt></ruby>しました。</b><br>숙박만으로 예약했습니다."
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
    "explanation": "「<ruby>朝食<rt>ちょうしょく</rt></ruby>」은 '조식'이라는 뜻입니다. 조식 포함은 朝食付(ちょうしょくつき)처럼 표기됩니다.<br><br><b><ruby>朝食<rt>ちょうしょく</rt></ruby>は7<ruby>時<rt>じ</rt></ruby>からです。</b><br>조식은 7시부터입니다."
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
    "explanation": "「<ruby>夕食<rt>ゆうしょく</rt></ruby>」은 '석식'이라는 뜻입니다. 석식 포함은 夕食付(ゆうしょくつき)처럼 표기됩니다.<br><br><b><ruby>夕食<rt>ゆうしょく</rt></ruby>はありますか。</b><br>석식이 있나요?"
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
    "explanation": "「<ruby>満室<rt>まんしつ</rt></ruby>」은 '만실'이라는 뜻입니다.<br><br><b>ただいま<ruby>満室<rt>まんしつ</rt></ruby>です。</b><br>현재 만실입니다."
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
    "explanation": "「<ruby>受付<rt>うけつけ</rt></ruby>」은 '프런트/접수'이라는 뜻입니다. 호텔에서는 フロント라고도 합니다(표현).<br><br><b><ruby>受付<rt>うけつけ</rt></ruby>はどこですか。</b><br>프런트는 어디인가요?"
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
    "explanation": "「<ruby>部屋<rt>へや</rt></ruby>」은 '방'이라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>です。</b><br>방입니다."
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
    "explanation": "「<ruby>鍵<rt>かぎ</rt></ruby>」은 '열쇠'이라는 뜻입니다.<br><br><b><ruby>鍵<rt>かぎ</rt></ruby>が<ruby>使<rt>つか</rt></ruby>えません。</b><br>열쇠가 작동하지 않습니다."
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
    "explanation": "「<ruby>窓<rt>まど</rt></ruby>」은 '창문'이라는 뜻입니다.<br><br><b><ruby>窓<rt>まど</rt></ruby>が<ruby>開<rt>あ</rt></ruby>きません。</b><br>창문이 열리지 않습니다."
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
    "explanation": "「<ruby>荷物<rt>にもつ</rt></ruby>」은 '짐'이라는 뜻입니다.<br><br><b><ruby>荷物<rt>にもつ</rt></ruby>を<ruby>預<rt>あず</rt></ruby>けたいです。</b><br>짐을 맡기고 싶습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>預<rt>あず</rt></ruby>의 뜻은?",
    "options": [
      "맡기다",
      "찾다"
    ],
    "answer": 0,
    "explanation": "「<ruby>預<rt>あず</rt></ruby>」은 '맡기다'이라는 뜻입니다.<br><br><b><ruby>荷物<rt>にもつ</rt></ruby>を<ruby>預<rt>あず</rt></ruby>けます。</b><br>짐을 맡깁니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>運<rt>はこ</rt></ruby>의 뜻은?",
    "options": [
      "옮기다",
      "버리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>運<rt>はこ</rt></ruby>」은 '옮기다'이라는 뜻입니다.<br><br><b><ruby>荷物<rt>にもつ</rt></ruby>を<ruby>部屋<rt>へや</rt></ruby>に<ruby>運<rt>はこ</rt></ruby>びます。</b><br>짐을 방으로 옮깁니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>壊<rt>こわ</rt></ruby>의 뜻은?",
    "options": [
      "고장 나다",
      "수리하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>壊<rt>こわ</rt></ruby>」은 '고장 나다'이라는 뜻입니다.<br><br><b>エアコンが<ruby>壊<rt>こわ</rt></ruby>れました。</b><br>에어컨이 고장 났습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>効<rt>き</rt></ruby>의 뜻은?",
    "options": [
      "작동하다/효과가 있다",
      "멈추다"
    ],
    "answer": 0,
    "explanation": "「<ruby>効<rt>き</rt></ruby>」은 '작동하다/효과가 있다'이라는 뜻입니다.<br><br><b>エアコンが<ruby>効<rt>き</rt></ruby>きません。</b><br>에어컨이 잘 작동하지 않습니다."
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
    "explanation": "「<ruby>湯<rt>ゆ</rt></ruby>」은 '뜨거운 물'이라는 뜻입니다.<br><br><b>お<ruby>湯<rt>ゆ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ません。</b><br>뜨거운 물이 나오지 않습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>寒<rt>さむ</rt></ruby>의 뜻은?",
    "options": [
      "춥다",
      "덥다"
    ],
    "answer": 0,
    "explanation": "「<ruby>寒<rt>さむ</rt></ruby>」은 '춥다'이라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>が<ruby>寒<rt>さむ</rt></ruby>いです。</b><br>방이 춥습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>暑<rt>あつ</rt></ruby>의 뜻은?",
    "options": [
      "덥다",
      "춥다"
    ],
    "answer": 0,
    "explanation": "「<ruby>暑<rt>あつ</rt></ruby>」은 '덥다'이라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>が<ruby>暑<rt>あつ</rt></ruby>いです。</b><br>방이 덥습니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>汚<rt>よご</rt></ruby>의 뜻은?",
    "options": [
      "더러워지다",
      "깨끗해지다"
    ],
    "answer": 0,
    "explanation": "「<ruby>汚<rt>よご</rt></ruby>」은 '더러워지다'이라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>が<ruby>汚<rt>よご</rt></ruby>れています。</b><br>방이 더러워요."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>清掃<rt>せいそう</rt></ruby>의 뜻은?",
    "options": [
      "청소",
      "수리"
    ],
    "answer": 0,
    "explanation": "「<ruby>清掃<rt>せいそう</rt></ruby>」은 '청소'이라는 뜻입니다. 掃除(そうじ)보다 안내/직원 표현에 자주 보입니다.<br><br><b><ruby>清掃<rt>せいそう</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>청소 부탁드립니다."
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
    "explanation": "「<ruby>修理<rt>しゅうり</rt></ruby>」은 '수리'이라는 뜻입니다.<br><br><b><ruby>修理<rt>しゅうり</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>수리 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>交換<rt>こうかん</rt></ruby>의 뜻은?",
    "options": [
      "교체/교환",
      "연장"
    ],
    "answer": 0,
    "explanation": "「<ruby>交換<rt>こうかん</rt></ruby>」은 '교체/교환'이라는 뜻입니다.<br><br><b><ruby>部屋<rt>へや</rt></ruby>を<ruby>交換<rt>こうかん</rt></ruby>できますか。</b><br>방을 바꿀 수 있나요?"
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
    "explanation": "「<ruby>延長<rt>えんちょう</rt></ruby>」은 '연장'이라는 뜻입니다.<br><br><b>チェックアウトを<ruby>延長<rt>えんちょう</rt></ruby>できますか。</b><br>체크아웃을 연장할 수 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>会計<rt>かいけい</rt></ruby>의 뜻은?",
    "options": [
      "계산",
      "예약"
    ],
    "answer": 0,
    "explanation": "「<ruby>会計<rt>かいけい</rt></ruby>」은 '계산'이라는 뜻입니다.<br><br><b>お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。</b><br>계산 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "호텔·숙박",
    "question": "<ruby>払<rt>はら</rt></ruby>의 뜻은?",
    "options": [
      "지불하다",
      "환불하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>払<rt>はら</rt></ruby>」은 '지불하다'이라는 뜻입니다.<br><br><b>カードで<ruby>払<rt>はら</rt></ruby>います。</b><br>카드로 지불합니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>予約<rt>よやく</rt></ruby>의 뜻은?",
    "options": [
      "예약",
      "환불"
    ],
    "answer": 0,
    "explanation": "「<ruby>予約<rt>よやく</rt></ruby>」은 '예약'이라는 뜻입니다.<br><br><b><ruby>予約<rt>よやく</rt></ruby>しています。</b><br>예약했습니다."
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
    "explanation": "「<ruby>個室<rt>こしつ</rt></ruby>」은 '개인실'이라는 뜻입니다.<br><br><b><ruby>個室<rt>こしつ</rt></ruby>はありますか。</b><br>개인실이 있나요?"
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
    "explanation": "「<ruby>席<rt>せき</rt></ruby>」은 '자리'이라는 뜻입니다.<br><br><b><ruby>席<rt>せき</rt></ruby>はありますか。</b><br>자리가 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>満席<rt>まんせき</rt></ruby>의 뜻은?",
    "options": [
      "만석",
      "빈자리"
    ],
    "answer": 0,
    "explanation": "「<ruby>満席<rt>まんせき</rt></ruby>」은 '만석'이라는 뜻입니다.<br><br><b>ただいま<ruby>満席<rt>まんせき</rt></ruby>です。</b><br>현재 만석입니다."
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
    "explanation": "「<ruby>注文<rt>ちゅうもん</rt></ruby>」은 '주문'이라는 뜻입니다.<br><br><b><ruby>注文<rt>ちゅうもん</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>주문 부탁드립니다."
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
    "explanation": "「<ruby>会計<rt>かいけい</rt></ruby>」은 '계산'이라는 뜻입니다.<br><br><b>お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。</b><br>계산 부탁드립니다."
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
    "explanation": "「<ruby>鶏<rt>とり</rt></ruby>」은 '닭'이라는 뜻입니다.<br><br><b><ruby>鶏<rt>とり</rt></ruby><ruby>肉<rt>にく</rt></ruby>です。</b><br>닭고기입니다."
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
    "explanation": "「<ruby>豚<rt>ぶた</rt></ruby>」은 '돼지'이라는 뜻입니다.<br><br><b><ruby>豚<rt>ぶた</rt></ruby><ruby>肉<rt>にく</rt></ruby>です。</b><br>돼지고기입니다."
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
    "explanation": "「<ruby>牛<rt>ぎゅう</rt></ruby>」은 '소'이라는 뜻입니다.<br><br><b><ruby>牛<rt>ぎゅう</rt></ruby><ruby>肉<rt>にく</rt></ruby>です。</b><br>소고기입니다."
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
    "explanation": "「<ruby>海鮮<rt>かいせん</rt></ruby>」은 '해산물'이라는 뜻입니다.<br><br><b><ruby>海鮮<rt>かいせん</rt></ruby><ruby>丼<rt>どん</rt></ruby>です。</b><br>해산물 덮밥입니다."
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
    "explanation": "「<ruby>刺身<rt>さしみ</rt></ruby>」은 '회'이라는 뜻입니다.<br><br><b><ruby>刺身<rt>さしみ</rt></ruby>です。</b><br>회입니다."
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
    "explanation": "「<ruby>寿司<rt>すし</rt></ruby>」은 '스시'이라는 뜻입니다.<br><br><b><ruby>寿司<rt>すし</rt></ruby>です。</b><br>스시입니다."
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
    "explanation": "「<ruby>定食<rt>ていしょく</rt></ruby>」은 '정식'이라는 뜻입니다.<br><br><b><ruby>定食<rt>ていしょく</rt></ruby>にします。</b><br>정식으로 할게요."
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
    "explanation": "「<ruby>単品<rt>たんぴん</rt></ruby>」은 '단품'이라는 뜻입니다.<br><br><b><ruby>単品<rt>たんぴん</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。</b><br>단품으로 부탁드립니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>辛<rt>から</rt></ruby>의 뜻은?",
    "options": [
      "맵다",
      "달다"
    ],
    "answer": 0,
    "explanation": "「<ruby>辛<rt>から</rt></ruby>」은 '맵다'이라는 뜻입니다.<br><br><b><ruby>辛<rt>から</rt></ruby>いです。</b><br>맵습니다."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>甘<rt>あま</rt></ruby>의 뜻은?",
    "options": [
      "달다",
      "짜다"
    ],
    "answer": 0,
    "explanation": "「<ruby>甘<rt>あま</rt></ruby>」은 '달다'이라는 뜻입니다.<br><br><b><ruby>甘<rt>あま</rt></ruby>いです。</b><br>달아요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>酸<rt>す</rt></ruby>의 뜻은?",
    "options": [
      "시다",
      "맵다"
    ],
    "answer": 0,
    "explanation": "「<ruby>酸<rt>す</rt></ruby>」은 '시다'이라는 뜻입니다.<br><br><b><ruby>酸<rt>す</rt></ruby>っぱいです。</b><br>셔요."
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
    "explanation": "「<ruby>塩辛<rt>しおから</rt></ruby>」은 '짜다'이라는 뜻입니다.<br><br><b><ruby>塩辛<rt>しおから</rt></ruby>いです。</b><br>짜요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>熱<rt>あつ</rt></ruby>의 뜻은?",
    "options": [
      "뜨겁다",
      "차갑다"
    ],
    "answer": 0,
    "explanation": "「<ruby>熱<rt>あつ</rt></ruby>」은 '뜨겁다'이라는 뜻입니다.<br><br><b><ruby>熱<rt>あつ</rt></ruby>いです。</b><br>뜨거워요."
  },
  {
    "tag": "(한자)",
    "cat": "식당·카페",
    "question": "<ruby>冷<rt>つめ</rt></ruby>의 뜻은?",
    "options": [
      "차갑다",
      "뜨겁다"
    ],
    "answer": 0,
    "explanation": "「<ruby>冷<rt>つめ</rt></ruby>」은 '차갑다'이라는 뜻입니다.<br><br><b><ruby>冷<rt>つめ</rt></ruby>たいです。</b><br>차가워요."
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
    "explanation": "「<ruby>値段<rt>ねだん</rt></ruby>」은 '가격'이라는 뜻입니다.<br><br><b><ruby>値段<rt>ねだん</rt></ruby>はいくらですか。</b><br>가격은 얼마인가요?"
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
    "explanation": "「<ruby>割引<rt>わりびき</rt></ruby>」은 '할인'이라는 뜻입니다.<br><br><b><ruby>割引<rt>わりびき</rt></ruby>です。</b><br>할인입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>税込<rt>ぜいこみ</rt></ruby>의 뜻은?",
    "options": [
      "세금 포함",
      "세금 별도"
    ],
    "answer": 0,
    "explanation": "「<ruby>税込<rt>ぜいこみ</rt></ruby>」은 '세금 포함'이라는 뜻입니다.<br><br><b><ruby>税込<rt>ぜいこみ</rt></ruby>です。</b><br>세금 포함입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>税抜<rt>ぜいぬき</rt></ruby>의 뜻은?",
    "options": [
      "세금 별도",
      "세금 포함"
    ],
    "answer": 0,
    "explanation": "「<ruby>税抜<rt>ぜいぬき</rt></ruby>」은 '세금 별도'이라는 뜻입니다.<br><br><b><ruby>税抜<rt>ぜいぬき</rt></ruby>です。</b><br>세금 별도입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>数量限定<rt>すうりょうげんてい</rt></ruby>의 뜻은?",
    "options": [
      "수량 한정",
      "무제한"
    ],
    "answer": 0,
    "explanation": "「<ruby>数量限定<rt>すうりょうげんてい</rt></ruby>」은 '수량 한정'이라는 뜻입니다.<br><br><b><ruby>数量限定<rt>すうりょうげんてい</rt></ruby>です。</b><br>수량 한정입니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>残<rt>のこ</rt></ruby>의 뜻은?",
    "options": [
      "남은 것(残りわずか)",
      "재고 많음"
    ],
    "answer": 0,
    "explanation": "「<ruby>残<rt>のこ</rt></ruby>」은 '남은 것(残りわずか)'이라는 뜻입니다.<br><br><b><ruby>残<rt>のこ</rt></ruby>りわずかです。</b><br>얼마 남지 않았습니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>訳<rt>わけ</rt></ruby>의 뜻은?",
    "options": [
      "이유 있음(訳あり)",
      "정상"
    ],
    "answer": 0,
    "explanation": "「<ruby>訳<rt>わけ</rt></ruby>」은 '이유 있음(訳あり)'이라는 뜻입니다.<br><br><b><ruby>訳<rt>わけ</rt></ruby>ありです。</b><br>이유 있는(하자/사연 있는) 상품입니다."
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
    "explanation": "「<ruby>在庫<rt>ざいこ</rt></ruby>」은 '재고'이라는 뜻입니다.<br><br><b><ruby>在庫<rt>ざいこ</rt></ruby>はありますか。</b><br>재고가 있나요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>売<rt>う</rt></ruby>의 뜻은?",
    "options": [
      "품절(売り切れ)",
      "재고 있음"
    ],
    "answer": 0,
    "explanation": "「<ruby>売<rt>う</rt></ruby>」은 '품절(売り切れ)'이라는 뜻입니다.<br><br><b><ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れです。</b><br>품절입니다."
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
    "explanation": "「<ruby>返品<rt>へんぴん</rt></ruby>」은 '반품'이라는 뜻입니다.<br><br><b><ruby>返品<rt>へんぴん</rt></ruby>できますか。</b><br>반품할 수 있나요?"
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
    "explanation": "「<ruby>交換<rt>こうかん</rt></ruby>」은 '교환'이라는 뜻입니다.<br><br><b><ruby>交換<rt>こうかん</rt></ruby>してください。</b><br>교환해 주세요."
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
    "explanation": "「<ruby>返金<rt>へんきん</rt></ruby>」은 '환불'이라는 뜻입니다.<br><br><b><ruby>返金<rt>へんきん</rt></ruby>できますか。</b><br>환불이 가능한가요?"
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>払<rt>はら</rt></ruby>의 뜻은?",
    "options": [
      "지불하다",
      "환불하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>払<rt>はら</rt></ruby>」은 '지불하다'이라는 뜻입니다.<br><br><b>カードで<ruby>払<rt>はら</rt></ruby>います。</b><br>카드로 지불합니다."
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
    "explanation": "「<ruby>現金<rt>げんきん</rt></ruby>」은 '현금'이라는 뜻입니다.<br><br><b><ruby>現金<rt>げんきん</rt></ruby>です。</b><br>현금입니다."
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
    "explanation": "「<ruby>有料<rt>ゆうりょう</rt></ruby>」은 '유료'이라는 뜻입니다.<br><br><b><ruby>袋<rt>ふくろ</rt></ruby>は<ruby>有料<rt>ゆうりょう</rt></ruby>です。</b><br>봉투는 유료입니다."
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
    "explanation": "「<ruby>無料<rt>むりょう</rt></ruby>」은 '무료'이라는 뜻입니다.<br><br><b><ruby>無料<rt>むりょう</rt></ruby>です。</b><br>무료입니다."
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
    "explanation": "「<ruby>必要<rt>ひつよう</rt></ruby>」은 '필요'이라는 뜻입니다.<br><br><b><ruby>必要<rt>ひつよう</rt></ruby>です。</b><br>필요합니다."
  },
  {
    "tag": "(한자)",
    "cat": "쇼핑",
    "question": "<ruby>不要<rt>ふよう</rt></ruby>의 뜻은?",
    "options": [
      "불필요",
      "필요"
    ],
    "answer": 0,
    "explanation": "「<ruby>不要<rt>ふよう</rt></ruby>」은 '불필요'이라는 뜻입니다.<br><br><b><ruby>不要<rt>ふよう</rt></ruby>です。</b><br>불필요합니다."
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
    "explanation": "「<ruby>化粧品<rt>けしょうひん</rt></ruby>」은 '화장품'이라는 뜻입니다.<br><br><b><ruby>化粧品<rt>けしょうひん</rt></ruby>です。</b><br>화장품입니다."
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
    "explanation": "「<ruby>袋<rt>ふくろ</rt></ruby>」은 '봉투'이라는 뜻입니다.<br><br><b><ruby>袋<rt>ふくろ</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>ですか。</b><br>봉투가 필요하신가요?"
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
    "explanation": "「<ruby>駅<rt>えき</rt></ruby>」은 '역'이라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>はどこですか。</b><br>역은 어디인가요?"
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
    "explanation": "「<ruby>電車<rt>でんしゃ</rt></ruby>」은 '전철'이라는 뜻입니다.<br><br><b><ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります。</b><br>전철을 탑니다."
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
    "explanation": "「<ruby>改札<rt>かいさつ</rt></ruby>」은 '개찰구'이라는 뜻입니다.<br><br><b><ruby>改札<rt>かいさつ</rt></ruby>はどこですか。</b><br>개찰구는 어디인가요?"
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
    "explanation": "「<ruby>出口<rt>でぐち</rt></ruby>」은 '출구'이라는 뜻입니다.<br><br><b><ruby>出口<rt>でぐち</rt></ruby>はこちらです。</b><br>출구는 이쪽입니다."
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
    "explanation": "「<ruby>入口<rt>いりぐち</rt></ruby>」은 '입구'이라는 뜻입니다.<br><br><b><ruby>入口<rt>いりぐち</rt></ruby>はこちらです。</b><br>입구는 이쪽입니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>乗<rt>の</rt></ruby>의 뜻은?",
    "options": [
      "타다",
      "내리다"
    ],
    "answer": 0,
    "explanation": "「<ruby>乗<rt>の</rt></ruby>」은 '타다'이라는 뜻입니다.<br><br><b><ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります。</b><br>전철을 탑니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>降<rt>お</rt></ruby>의 뜻은?",
    "options": [
      "내리다",
      "타다"
    ],
    "answer": 0,
    "explanation": "「<ruby>降<rt>お</rt></ruby>」은 '내리다'이라는 뜻입니다.<br><br><b><ruby>駅<rt>えき</rt></ruby>で<ruby>降<rt>お</rt></ruby>ります。</b><br>역에서 내립니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>換<rt>か</rt></ruby>의 뜻은?",
    "options": [
      "환승하다",
      "출발하다"
    ],
    "answer": 0,
    "explanation": "「<ruby>換<rt>か</rt></ruby>」은 '환승하다'이라는 뜻입니다. 표기는 乗り換える입니다.<br><br><b><ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えます。</b><br>환승합니다."
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>遅<rt>おく</rt></ruby>의 뜻은?",
    "options": [
      "지연(遅れ)",
      "정상"
    ],
    "answer": 0,
    "explanation": "「<ruby>遅<rt>おく</rt></ruby>」은 '지연(遅れ)'이라는 뜻입니다.<br><br><b><ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れています。</b><br>전철이 지연되고 있습니다."
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
    "explanation": "「<ruby>運休<rt>うんきゅう</rt></ruby>」은 '운행 중지'이라는 뜻입니다.<br><br><b><ruby>運休<rt>うんきゅう</rt></ruby>です。</b><br>운행이 중지되었습니다."
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
    "explanation": "「<ruby>路線<rt>ろせん</rt></ruby>」은 '노선'이라는 뜻입니다.<br><br><b><ruby>路線<rt>ろせん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。</b><br>노선을 확인합니다."
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
    "explanation": "「<ruby>時刻表<rt>じこくひょう</rt></ruby>」은 '시간표'이라는 뜻입니다.<br><br><b><ruby>時刻表<rt>じこくひょう</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。</b><br>시간표를 봅니다."
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
    "explanation": "「<ruby>終電<rt>しゅうでん</rt></ruby>」은 '막차'이라는 뜻입니다.<br><br><b><ruby>終電<rt>しゅうでん</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>ですか。</b><br>막차는 몇 시인가요?"
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
    "explanation": "「<ruby>発車<rt>はっしゃ</rt></ruby>」은 '출발'이라는 뜻입니다.<br><br><b><ruby>発車<rt>はっしゃ</rt></ruby>します。</b><br>출발합니다."
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
    "explanation": "「<ruby>到着<rt>とうちゃく</rt></ruby>」은 '도착'이라는 뜻입니다.<br><br><b><ruby>到着<rt>とうちゃく</rt></ruby>しました。</b><br>도착했습니다."
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
    "explanation": "「<ruby>地図<rt>ちず</rt></ruby>」은 '지도'이라는 뜻입니다.<br><br><b><ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。</b><br>지도를 봅니다."
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
    "explanation": "「<ruby>信号<rt>しんごう</rt></ruby>」은 '신호'이라는 뜻입니다.<br><br><b><ruby>赤<rt>あか</rt></ruby><ruby>信号<rt>しんごう</rt></ruby>です。</b><br>빨간 신호입니다."
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
    "explanation": "「<ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>」은 '주차장'이라는 뜻입니다.<br><br><b><ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>はどこですか。</b><br>주차장은 어디인가요?"
  },
  {
    "tag": "(한자)",
    "cat": "교통·이동",
    "question": "<ruby>行<rt>い</rt></ruby>의 뜻은?",
    "options": [
      "~행(행선지)",
      "출구"
    ],
    "answer": 0,
    "explanation": "「<ruby>行<rt>い</rt></ruby>」은 '~행(행선지)'이라는 뜻입니다.<br><br><b><ruby>東京<rt>とうきょう</rt></ruby><ruby>行<rt>い</rt></ruby>きです。</b><br>도쿄행입니다."
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
    "explanation": "「<ruby>混雑<rt>こんざつ</rt></ruby>」은 '혼잡'이라는 뜻입니다.<br><br><b><ruby>混雑<rt>こんざつ</rt></ruby>しています。</b><br>혼잡합니다."
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
    "explanation": "「<ruby>春<rt>はる</rt></ruby>」은 '봄'이라는 뜻입니다.<br><br><b><ruby>春<rt>はる</rt></ruby>です。</b><br>봄입니다."
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
    "explanation": "「<ruby>夏<rt>なつ</rt></ruby>」은 '여름'이라는 뜻입니다.<br><br><b><ruby>夏<rt>なつ</rt></ruby>です。</b><br>여름입니다."
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
    "explanation": "「<ruby>秋<rt>あき</rt></ruby>」은 '가을'이라는 뜻입니다.<br><br><b><ruby>秋<rt>あき</rt></ruby>です。</b><br>가을입니다."
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
    "explanation": "「<ruby>冬<rt>ふゆ</rt></ruby>」은 '겨울'이라는 뜻입니다.<br><br><b><ruby>冬<rt>ふゆ</rt></ruby>です。</b><br>겨울입니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>晴<rt>は</rt></ruby>의 뜻은?",
    "options": [
      "맑음(晴れ)",
      "흐림"
    ],
    "answer": 0,
    "explanation": "「<ruby>晴<rt>は</rt></ruby>」은 '맑음(晴れ)'이라는 뜻입니다.<br><br><b><ruby>晴<rt>は</rt></ruby>れです。</b><br>맑습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>曇<rt>くも</rt></ruby>의 뜻은?",
    "options": [
      "흐림(曇り)",
      "맑음"
    ],
    "answer": 0,
    "explanation": "「<ruby>曇<rt>くも</rt></ruby>」은 '흐림(曇り)'이라는 뜻입니다.<br><br><b><ruby>曇<rt>くも</rt></ruby>りです。</b><br>흐립니다."
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
    "explanation": "「<ruby>雨<rt>あめ</rt></ruby>」은 '비'이라는 뜻입니다.<br><br><b><ruby>雨<rt>あめ</rt></ruby>です。</b><br>비입니다."
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
    "explanation": "「<ruby>大雨<rt>おおあめ</rt></ruby>」은 '폭우'이라는 뜻입니다.<br><br><b><ruby>大雨<rt>おおあめ</rt></ruby>です。</b><br>폭우입니다."
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
    "explanation": "「<ruby>雪<rt>ゆき</rt></ruby>」은 '눈'이라는 뜻입니다.<br><br><b><ruby>雪<rt>ゆき</rt></ruby>です。</b><br>눈입니다."
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
    "explanation": "「<ruby>台風<rt>たいふう</rt></ruby>」은 '태풍'이라는 뜻입니다.<br><br><b><ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近<rt>せっきん</rt></ruby>しています。</b><br>태풍이 접근하고 있습니다."
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
    "explanation": "「<ruby>気温<rt>きおん</rt></ruby>」은 '기온'이라는 뜻입니다.<br><br><b><ruby>気温<rt>きおん</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いです。</b><br>기온이 높습니다."
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
    "explanation": "「<ruby>湿度<rt>しつど</rt></ruby>」은 '습도'이라는 뜻입니다.<br><br><b><ruby>湿度<rt>しつど</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いです。</b><br>습도가 높습니다."
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
    "explanation": "「<ruby>乾燥<rt>かんそう</rt></ruby>」은 '건조'이라는 뜻입니다.<br><br><b><ruby>乾燥<rt>かんそう</rt></ruby>しています。</b><br>건조합니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>暑<rt>あつ</rt></ruby>의 뜻은?",
    "options": [
      "덥다(날씨)",
      "춥다"
    ],
    "answer": 0,
    "explanation": "「<ruby>暑<rt>あつ</rt></ruby>」은 '덥다(날씨)'이라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>暑<rt>あつ</rt></ruby>いです。</b><br>오늘은 덥습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>熱<rt>あつ</rt></ruby>의 뜻은?",
    "options": [
      "뜨겁다(물건/온도)",
      "덥다"
    ],
    "answer": 0,
    "explanation": "「<ruby>熱<rt>あつ</rt></ruby>」은 '뜨겁다(물건/온도)'이라는 뜻입니다.<br><br><b>お<ruby>湯<rt>ゆ</rt></ruby>が<ruby>熱<rt>あつ</rt></ruby>いです。</b><br>뜨거운 물이 뜨거워요."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>寒<rt>さむ</rt></ruby>의 뜻은?",
    "options": [
      "춥다",
      "덥다"
    ],
    "answer": 0,
    "explanation": "「<ruby>寒<rt>さむ</rt></ruby>」은 '춥다'이라는 뜻입니다.<br><br><b><ruby>今日<rt>きょう</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>いです。</b><br>오늘은 춥습니다."
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
    "explanation": "「<ruby>警報<rt>けいほう</rt></ruby>」은 '경보'이라는 뜻입니다.<br><br><b><ruby>警報<rt>けいほう</rt></ruby>が<ruby>出<rt>で</rt></ruby>ています。</b><br>경보가 나와 있습니다."
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
    "explanation": "「<ruby>注意報<rt>ちゅういほう</rt></ruby>」은 '주의보'이라는 뜻입니다.<br><br><b><ruby>注意報<rt>ちゅういほう</rt></ruby>が<ruby>出<rt>で</rt></ruby>ています。</b><br>주의보가 나와 있습니다."
  },
  {
    "tag": "(한자)",
    "cat": "계절·날씨",
    "question": "<ruby>運休<rt>うんきゅう</rt></ruby>의 뜻은?",
    "options": [
      "운행 중지",
      "정상 운행"
    ],
    "answer": 0,
    "explanation": "「<ruby>運休<rt>うんきゅう</rt></ruby>」은 '운행 중지'이라는 뜻입니다.<br><br><b><ruby>運休<rt>うんきゅう</rt></ruby>です。</b><br>운행이 중지되었습니다."
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
    "explanation": "「<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>」은 '열사병'이라는 뜻입니다.<br><br><b><ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>してください。</b><br>열사병에 주의해 주세요."
  }
];
})();
