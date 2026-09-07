// Korean -> English overlay.
//
// The v3 design pages are authored in Korean only. Rather than tagging every
// element with a data-i18n key, this keys the dictionary on the Korean source
// text itself: one entry covers the same phrase on all five pages, and adding
// copy to a page needs no markup changes — only a new entry here.
//
// Strings deliberately absent from the dictionary (brand names, numbers,
// section eyebrows like "01 · Payments", the address, contact details) stay
// as-is in both languages.

const DICT = {
  // ── shared chrome ──────────────────────────────────────────────
  '그룹': 'Group',
  '문의하기': 'Contact',
  '메뉴': 'Menu',
  '지금 문의하기': 'Contact us',
  '그룹으로': 'Back to group',
  '자세히 보기 →': 'Learn more →',
  '사업': 'Businesses',
  '연락': 'Contact',
  '신뢰는 구조에서 나옵니다.': 'Trust comes from structure.',
  '사업자등록번호 283-88-03541': 'Business reg. no. 283-88-03541',

  // ── index — V Financial Group ──────────────────────────────────
  'V Financial Group | 신뢰는 구조에서 나옵니다':
    'V Financial Group | Trust comes from structure',
  'V Financial Group은 결제(V Pay), 커머스(V Bazzar), 문화관광(NIA World), 웰니스(Genova Wellness) 네 개 사업을 하나의 운영 기준 위에서 운영합니다.':
    'V Financial Group runs four businesses — payments (V Pay), commerce (V Bazzar), culture and tourism (NIA World) and wellness (Genova Wellness) — on a single operating standard.',
  '골든아워의 금융 지구, 유리 오피스 타워와 거리 풍경':
    'A financial district at golden hour, glass office towers above the street',
  '신뢰는 구조에서 나옵니다': 'Trust comes from structure',
  '결제·커머스·문화관광·웰니스 네 개 사업을 하나의 운영 기준 위에서 만듭니다.':
    'Payments, commerce, culture and tourism, wellness — four businesses built on one operating standard.',
  '사업 살펴보기': 'Explore the businesses',
  '파트너십 문의': 'Partnership enquiry',
  '인가를 먼저 통과하고, 그 위에서 가장 빠르게 움직입니다.':
    'We clear the licence first, then move fast on top of it.',
  '규제 회색지대에서 매출을 만들지 않습니다. 절차를 통과한 범위 안에서 제품을 붙이고, 각 사업이 서로의 트래픽을 되돌려 받는 구조를 설계합니다.':
    'We do not build revenue in regulatory grey areas. We add products only within the scope we have cleared, and design each business to return traffic to the others.',
  '사업 부문': 'Business divisions',
  '결제, 커머스, 문화관광, 웰니스. 각각 독립 손익으로 운영합니다.':
    'Payments, commerce, culture and tourism, wellness — each run on its own P&L.',
  '진출 국가': 'Countries served',
  '한국·베트남·태국·필리핀·인도네시아 정산 파트너와 직접 계약합니다.':
    'We contract directly with settlement partners in Korea, Vietnam, Thailand, the Philippines and Indonesia.',
  '플랫폼 운영': 'Platform operations',
  '구간별 처리 시간을 지표로 관리하고 지연을 상시 점검합니다.':
    'We track processing time per leg as a metric and monitor delays continuously.',
  '네 개의 사업': 'Four businesses',
  '좌우로 밀어 넘겨보세요': 'Drag sideways to browse',
  '여러 국가의 외화 지폐를 펼쳐 놓은 정물':
    'A still life of banknotes from several countries, fanned out',
  '아시아 5개국 크로스보더 송금·결제. 환율은 요청 시점에 확정됩니다.':
    'Cross-border transfers and payments across five Asian countries. The rate is locked when you request it.',
  '아이보리 종이 위에 정돈된 중고 거래 물품 정물':
    'A still life of second-hand goods arranged on ivory paper',
  '대금을 플랫폼이 보관하고 수령 확인 후 정산하는 C2C 마켓플레이스.':
    'A C2C marketplace where the platform holds the payment and settles once delivery is confirmed.',
  '해질 무렵 반사 수면과 계단식 광장을 갖춘 문화 아레나':
    'A cultural arena at dusk with a reflecting pool and terraced plaza',
  '공연·체험·숙박·상업을 한 동선으로 묶는 문화관광 복합개발.':
    'A culture and tourism development tying performance, activities, lodging and retail into one route.',
  '앰버 조명 아래의 DNA 이중나선 모형':
    'A DNA double-helix model under amber light',
  'SNP 유전 분석을 식단·수면·보충 루틴으로 바꾸는 웰니스 프로그램.':
    'A wellness programme that turns SNP genetic analysis into diet, sleep and supplement routines.',
  '우리가 지키는 네 가지': 'Four things we hold to',
  '먼저 허가, 그다음 성장': 'Licence first, growth second',
  '금융위원회 소액해외송금업 인가를 추진하고, 인가 범위를 넘는 거래는 취급하지 않습니다.':
    'We are pursuing a small-sum overseas remittance licence from the Financial Services Commission, and handle no transaction beyond its scope.',
  '돈이 멈추는 구간을 없앤다': 'No leg where money stalls',
  '환전·정산·예치 어디에서도 기다림이 생기지 않도록 구간별 소요 시간을 관리합니다.':
    'We manage time per leg so no wait appears in conversion, settlement or custody.',
  '데이터는 집계로만 쓴다': 'Data is used only in aggregate',
  '사업 간 공유는 비식별 집계 단위로 제한하고, 유전·건강 데이터는 부문 밖으로 내보내지 않습니다.':
    'Sharing between businesses is limited to de-identified aggregates, and genetic and health data never leaves its division.',
  '단계로 나눠 투자한다': 'We invest in stages',
  '검증 지표를 통과한 뒤 다음 단계 자금을 집행합니다. NIA World도 존 단위로 개장합니다.':
    'The next tranche is released only after the validation metrics are met. NIA World likewise opens zone by zone.',
  '제휴와 투자,': 'Partnerships and investment —',
  '직접 이야기합시다': "let's talk directly",
  '담당자가 영업일 2일 내에 회신합니다. 제안 자료가 있다면 메일로 함께 보내주세요.':
    'We reply within two business days. If you have a proposal deck, send it along by email.',
  '본사': 'Head office',
  '인천 연수구 인천타워대로 323': '323 Incheon Tower-daero, Yeonsu-gu, Incheon',
  '송도 센트로드 B동 30층 V494호': 'Songdo Centroad B, 30F, Unit V494',
  '사업자등록': 'Business reg.',
  '제휴 분야': 'Partnership areas',
  'NIA World 개발·운영, V Pay 정산, Genova 연구 협력':
    'NIA World development and operations, V Pay settlement, Genova research collaboration',
  '채용': 'Careers',
  '결제 백엔드, 리스크 심사, 문화 콘텐츠 기획':
    'Payments backend, risk review, cultural programme planning',

  // ── V Pay ──────────────────────────────────────────────────────
  'V Pay | 크로스보더 송금·결제 — V Financial Group':
    'V Pay | Cross-border transfers and payments — V Financial Group',
  'V Pay는 아시아 5개국 크로스보더 송금·결제 플랫폼입니다. 환율은 요청 시점에 확정되고 수수료는 보내기 전에 전부 표시됩니다.':
    'V Pay is a cross-border transfer and payment platform across five Asian countries. The rate is locked at request and every fee is shown before you send.',
  '국경을 계산에서 지웁니다': 'We take the border out of the maths',
  '환율은 요청 시점에 확정되고, 수수료는 보내기 전에 전부 보입니다.':
    'The rate is locked when you request it, and every fee is visible before you send.',
  '연결 국가': 'Countries connected',
  '이하 수수료 목표': 'target fee ceiling',
  '실시간': 'Real time',
  '환율 확정': 'rate lock',
  '인가 추진': 'Licence in progress',
  '소액해외송금업': 'Small-sum overseas remittance',
  '네 가지를 제대로 합니다': 'Four things done properly',
  '요청 시점 환율 확정': 'Rate locked at request',
  '견적 화면에 보인 환율이 그대로 적용됩니다. 전송 중 변동에 따른 차액을 사용자에게 넘기지 않습니다.':
    'The rate shown on the quote screen is the rate applied. We do not pass mid-transfer movement on to the sender.',
  '전액 표시 수수료': 'Every fee shown',
  '중개 은행 차감분까지 미리 계산해 수취 금액을 확정 표기합니다. 도착 후 금액이 달라지지 않습니다.':
    'Intermediary bank deductions are calculated up front and the receive amount is stated as final. It does not change on arrival.',
  '현지 수취 네트워크': 'Local payout network',
  '베트남·태국·필리핀·인도네시아 정산 파트너와 직접 계약해 계좌 입금과 현금 수취를 함께 지원합니다.':
    'Direct contracts with settlement partners in Vietnam, Thailand, the Philippines and Indonesia support both bank deposit and cash pickup.',
  '심사 자동화': 'Automated screening',
  '본인확인과 자금세탁방지 검증을 흐름 안에 넣어, 서류 제출 없이 대부분의 송금이 자동 통과됩니다.':
    'Identity and anti-money-laundering checks sit inside the flow, so most transfers clear automatically with no paperwork.',
  '서비스 지역': 'Service regions',
  'V Pay 서비스 구간 지도': 'V Pay corridor map',
  '서울을 허브로 4개 구간을 운영합니다. 처리 시간은 현지 파트너 운영 시간에 따릅니다.':
    'Four corridors run out of the Seoul hub. Processing time follows local partner operating hours.',
  '한국 → 베트남': 'Korea → Vietnam',
  '계좌 · 현금 수취': 'Bank · cash pickup',
  '운영': 'Live',
  '한국 → 필리핀': 'Korea → Philippines',
  '한국 → 태국': 'Korea → Thailand',
  '계좌 수취': 'Bank payout',
  '한국 → 인도네시아': 'Korea → Indonesia',
  '준비': 'Planned',
  '막대는 구간별 준비 정도를 나타낸 지표이며, 실제 처리 시간은 요청 시점 기준으로 안내됩니다.':
    'The bars indicate how far each corridor has been prepared; actual processing time is quoted at the time of request.',
  '보내기까지 네 단계': 'Four steps to send',
  '계정 개설 · 평균 3분': 'Sign-up · 3 min average',
  '계정 인증': 'Verify account',
  '신분증 진위와 얼굴을 확인해 계정을 만듭니다.':
    'We check ID authenticity and a face match to open the account.',
  '환율 확정 · 즉시': 'Rate lock · instant',
  '견적 확인': 'Check the quote',
  '환율·수수료·수취액이 한 화면에서 확정됩니다.':
    'Rate, fees and receive amount are all confirmed on one screen.',
  '심사 통과 · 자동': 'Screening · automatic',
  '송금 실행': 'Send',
  '검증을 통과하면 즉시 현지 파트너로 전달됩니다.':
    'Once checks clear, the transfer goes straight to the local partner.',
  '수취 완료 · 수 분 내': 'Payout · within minutes',
  '수취 확인': 'Confirm receipt',
  '계좌 입금 또는 현금 수령 후 양쪽에 통지가 갑니다.':
    'Both parties are notified after bank deposit or cash pickup.',
  '먼저 통과하고': 'Clear it first,',
  '그 다음 확장합니다': 'then expand',
  '본인확인': 'Identity verification',
  '신분증 진위 확인과 얼굴 인증을 계정 개설 단계에서 처리합니다.':
    'ID authenticity and face verification are handled at sign-up.',
  '자금세탁방지': 'Anti-money laundering',
  '제재 명단 조회와 이상 거래 탐지를 매 건 자동 수행하고 기록을 보관합니다.':
    'Sanctions screening and anomaly detection run automatically on every transaction, and the records are retained.',
  '자금 분리': 'Fund segregation',
  '고객 자금과 회사 운영 자금을 분리 관리하고 정산 내역을 대조합니다.':
    'Customer funds are held separately from operating funds, and settlement records are reconciled.',
  '정산 파트너와 기업 송금 고객을 찾습니다':
    'We are looking for settlement partners and corporate senders',
  '구간 확대, 기업 대량 송금, API 연동 논의를 환영합니다.':
    'We welcome talks on new corridors, bulk corporate transfers and API integration.',

  // ── V Bazzar ───────────────────────────────────────────────────
  'V Bazzar | 에스크로 C2C 마켓플레이스 — V Financial Group':
    'V Bazzar | Escrow C2C marketplace — V Financial Group',
  'V Bazzar는 대금을 플랫폼이 보관한 뒤 수령이 확인되면 정산하는 C2C 마켓플레이스입니다. 판매자는 3단계 검증을 통과해야 등록됩니다.':
    'V Bazzar is a C2C marketplace where the platform holds the payment and settles once receipt is confirmed. Sellers must pass three-stage verification to list.',
  '모르는 사람과 거래해도 안전하게': 'Safe to trade with a stranger',
  '대금을 플랫폼이 보관한 뒤 수령이 확인되면 정산합니다. 판매자는 검증을 통과해야 등록됩니다.':
    'The platform holds the payment and settles once receipt is confirmed. Sellers must pass verification to list.',
  '전건': 'Every trade',
  '에스크로 적용': 'covered by escrow',
  '3단계': '3 stages',
  '판매자 검증': 'Seller verification',
  '7일': '7 days',
  '분쟁 접수 기간': 'Dispute window',
  '결제 연동': 'Payment integration',
  '사고를 구조로 막습니다': 'Structure prevents the incident',
  '실명 확인, 연락처 인증, 거래 이력 심사 3단계를 통과해야 판매 권한이 부여됩니다. 위반 시 즉시 정지됩니다.':
    'Selling rights require passing three stages — real-name check, contact verification and trading-history review. Violations mean immediate suspension.',
  '대금 예치': 'Funds held',
  '모든 거래에 에스크로가 기본 적용됩니다. 판매자는 수령 확인 전에는 대금을 인출할 수 없습니다.':
    'Escrow applies to every trade by default. Sellers cannot withdraw before receipt is confirmed.',
  '분쟁 조정': 'Dispute resolution',
  '수령 후 7일 내 접수된 분쟁은 플랫폼이 증빙을 받아 판단합니다. 조정 기간에도 대금은 예치 상태로 유지됩니다.':
    'Disputes filed within seven days of receipt are decided by the platform on the evidence submitted. Funds stay in escrow throughout.',
  '금지 품목 차단': 'Prohibited items blocked',
  '위조품, 개인정보, 규제 대상 물품은 등록 단계에서 차단하고 신고 채널을 상시 운영합니다.':
    'Counterfeits, personal data and regulated goods are blocked at listing, and a reporting channel runs at all times.',
  '대금은 어디에 있나': 'Where the money sits',
  '결제 시점부터 수령 확인까지 대금은 플랫폼 계정에 머무릅니다.':
    'From payment until receipt is confirmed, the funds stay in the platform account.',
  '구매자': 'Buyer',
  '결제 완료 · 카드 · V Pay': 'Paid · card · V Pay',
  '에스크로 보관 중': 'Held in escrow',
  '수령 확인 전에는 인출할 수 없습니다': 'Cannot be withdrawn before receipt is confirmed',
  '배송 진행': 'In transit',
  '수령 확인 대기': 'Awaiting confirmation',
  '판매자': 'Seller',
  '확정 즉시 정산 · 분쟁 창 7일': 'Settled on confirmation · 7-day dispute window',
  '전자기기': 'Electronics',
  '등급 표기 필수': 'Condition grade required',
  '패션 · 명품': 'Fashion · luxury',
  '정품 확인 우선': 'Authentication prioritised',
  '생활 · 취미': 'Home · hobby',
  '안전 거래 안내': 'Safe-trade guidance',
  '한국 상품': 'Korean goods',
  'V Pay 결제 연동': 'V Pay integrated',
  '화면은 거래 흐름 설명을 위한 예시이며, 막대는 카테고리별 정책 적용 범위를 나타냅니다.':
    'The screen is an illustration of the trade flow; the bars show how far policy applies per category.',
  '돈은 마지막에 움직입니다': 'The money moves last',
  '판매자 검증 완료': 'Seller verified',
  '상품 등록': 'List the item',
  '실명·연락처·이력 심사를 통과한 판매자만 등록합니다.':
    'Only sellers who pass real-name, contact and history review can list.',
  '플랫폼 보관': 'Held by the platform',
  '구매 대금은 판매자가 아니라 플랫폼 계정에 머무릅니다.':
    'The payment sits in the platform account, not the seller’s.',
  '운송장 등록': 'Tracking added',
  '발송 · 수령': 'Ship · receive',
  '양측에 통지되고, 수령 확인으로 거래가 확정됩니다.':
    'Both sides are notified, and confirming receipt finalises the trade.',
  '확정 즉시': 'On confirmation',
  '정산': 'Settlement',
  '분쟁 없이 확정되면 판매자에게 대금이 지급됩니다.':
    'If it finalises without a dispute, the seller is paid.',
  '주요 카테고리': 'Main categories',
  '스마트폰·노트북·주변기기. 기기 상태 등급 표기가 필수입니다.':
    'Phones, laptops and peripherals. A condition grade is mandatory.',
  '의류·신발·가방. 정품 확인 절차를 통과한 판매자를 우선 노출합니다.':
    'Clothing, shoes and bags. Sellers who clear authentication are surfaced first.',
  '해외 구매자를 위한 국내 브랜드 상품. V Pay 결제와 배송을 연계합니다.':
    'Korean brand goods for overseas buyers, with V Pay payment and shipping linked.',
  '판매자와 물류 파트너를 모집합니다': 'We are recruiting sellers and logistics partners',
  '입점, 정산 조건, 해외 배송 연계에 대해 논의할 수 있습니다.':
    'We can discuss listing, settlement terms and overseas shipping integration.',

  // ── NIA World ──────────────────────────────────────────────────
  'NIA World | V Financial Group 문화관광업':
    'NIA World | Culture and tourism — V Financial Group',
  'NIA World는 공연·체험·숙박·상업 시설을 하나의 동선으로 묶는 V Financial Group의 문화관광 복합개발 프로젝트입니다.':
    'NIA World is V Financial Group’s culture and tourism development, tying performance, activity, lodging and retail facilities into a single route.',
  '03 · Culture & tourism · 문화관광업': '03 · Culture & tourism',
  '하루가 아니라 며칠을 머무는 곳': 'A place you stay for days, not a day',
  '공연·체험·숙박·상업 시설을 하나의 동선으로 묶는 문화관광 복합개발 프로젝트입니다.':
    'A culture and tourism development tying performance, activity, lodging and retail facilities into a single route.',
  '4존': '4 zones',
  '단지 구성': 'Site layout',
  '4단계': '4 phases',
  '개발 로드맵': 'Development roadmap',
  '체류형': 'Stay-based',
  '관광 모델': 'Tourism model',
  '연중': 'Year-round',
  '상시 편성': 'Continuous programming',
  '체류 시간이 사업의 단위입니다': 'Time on site is the unit of the business',
  '문화 콘텐츠 앵커': 'Cultural content anchor',
  '공연·전시·페스티벌을 상시 운영해 계절과 무관한 방문 이유를 만듭니다. 지역 문화자원을 함께 편성합니다.':
    'Performances, exhibitions and festivals run continuously to create a reason to visit in any season, programmed alongside local cultural assets.',
  '체류 전환 설계': 'Designed for overnight conversion',
  '숙박·웰니스·F&B를 단지 안에 배치해 당일 방문을 1박 이상 체류로 전환합니다.':
    'Lodging, wellness and F&B sit inside the site, converting day trips into stays of one night or more.',
  '현장 결제 연동': 'On-site payment integration',
  'V Pay로 입장·식음·쇼핑·숙박을 한 수단으로 처리하고, V Bazzar로 귀국 후 구매를 이어갑니다.':
    'V Pay handles admission, food, shopping and lodging through one instrument; V Bazzar carries purchasing on after visitors go home.',
  '집계 데이터 운영': 'Operations on aggregate data',
  '동선·결제·예약 지표를 한 화면에서 보고 편성과 인력 배치를 조정합니다. 개인 식별 정보는 쓰지 않습니다.':
    'Movement, payment and booking metrics sit on one screen to adjust programming and staffing. No personally identifying data is used.',
  '단지 면적 배분': 'Site area allocation',
  '계획 단계 기준이며 인허가 협의 결과에 따라 조정됩니다.':
    'Planning-stage figures, subject to adjustment following permit negotiations.',
  '컬처 아레나': 'Culture arena',
  '실내 공연장·전시 홀. 상시 편성의 중심.':
    'Indoor venue and exhibition hall. The centre of continuous programming.',
  '스테이 · 웰니스': 'Stay · wellness',
  '숙박·스파. 체류를 1박 이상으로 늘립니다.':
    'Lodging and spa. Extends the stay past one night.',
  '리테일 스트리트': 'Retail street',
  '로컬 브랜드·F&B. 현장 결제와 면세 연계.':
    'Local brands and F&B, linked to on-site payment and duty-free.',
  '야외 체험존': 'Outdoor activity zone',
  '체험 프로그램·야간 경관. 계절 행사 공간.':
    'Activity programmes and night lighting. Space for seasonal events.',
  'Phase 1 설계 · 인허가': 'Phase 1 design · permits',
  '파트너 확정': 'Partners confirmed',
  '조성 · 시범 운영': 'Build · pilot operation',
  '네 개 존, 하나의 동선': 'Four zones, one route',
  '실내 공연장과 전시 홀. 상시 공연과 시즌 페스티벌을 병행합니다.':
    'Indoor venue and exhibition hall, running resident shows alongside seasonal festivals.',
  '숙박과 스파, Genova Wellness 프로그램을 함께 운영합니다.':
    'Lodging and spa, operated together with the Genova Wellness programme.',
  '로컬 브랜드와 F&B. 결제와 면세 절차를 연계합니다.':
    'Local brands and F&B, with payment and duty-free procedures linked.',
  '체험 프로그램과 야간 경관. 계절 행사 공간으로 운용합니다.':
    'Activity programmes and night lighting, run as a seasonal event space.',
  '존 단위로': 'We open',
  '개장합니다': 'zone by zone',
  '기획 · 인허가': 'Planning · permits',
  '입지 분석과 콘텐츠 편성 방향을 확정하고 지자체 협의를 진행합니다.':
    'Site analysis and programming direction are fixed, and talks with the local authority proceed.',
  '1단계 존을 개장하고 체류 시간과 객단가 지표를 검증합니다.':
    'The phase-one zone opens and time-on-site and spend-per-visitor metrics are validated.',
  '확장 · 정식 운영': 'Expansion · full operation',
  '검증 지표를 통과한 뒤 전 존을 개장하고 그룹 결제·커머스와 통합합니다.':
    'Once the validation metrics are met, every zone opens and integrates with group payments and commerce.',
  '함께 만들 파트너를 찾습니다': 'We are looking for partners to build it with',
  '투자, 콘텐츠 편성, 숙박·상업 시설 운영 제휴를 논의할 수 있습니다.':
    'We can discuss investment, content programming, and partnerships to operate the lodging and retail facilities.',

  // ── Genova Wellness ────────────────────────────────────────────
  'Genova Wellness | SNP 기반 정밀 웰니스 — V Financial Group':
    'Genova Wellness | SNP-based precision wellness — V Financial Group',
  'Genova Wellness는 SNP 유전 분석 결과를 식단·보충·수면 루틴으로 바꾸는 웰니스 프로그램입니다. 유전 데이터는 부문 밖으로 나가지 않습니다.':
    'Genova Wellness turns SNP genetic analysis into diet, supplement and sleep routines. Genetic data never leaves the division.',
  '평균값이 아니라 당신의 기준': 'Your baseline, not the average',
  'SNP 유전 분석 결과를 식단·보충·수면 루틴으로 바꾸는 웰니스 프로그램입니다.':
    'A wellness programme that turns SNP genetic analysis into diet, supplement and sleep routines.',
  '분석 기반': 'Analysis basis',
  '4영역': '4 areas',
  '관리 범위': 'Scope of care',
  '12주': '12 weeks',
  '기본 관리 주기': 'Standard cycle',
  '부문 내': 'In-division',
  '데이터 보관': 'Data retention',
  '네 개 영역을 함께 봅니다': 'Four areas, read together',
  '대사 · 체중': 'Metabolism · weight',
  '탄수화물·지방 대사 성향과 포만 신호 반응을 기준으로 식사 구성과 식사 시간을 정합니다.':
    'Meal composition and timing are set from carbohydrate and fat metabolism tendencies and satiety-signal response.',
  '영양소 흡수': 'Nutrient absorption',
  '비타민D·엽산·철 등 흡수 효율 지표를 확인해 필요한 항목만 보충하도록 설계합니다.':
    'Absorption-efficiency markers for vitamin D, folate, iron and others determine which items are actually supplemented.',
  '수면 · 회복': 'Sleep · recovery',
  '카페인 분해 속도와 일주기 성향을 반영해 취침 시간과 운동 시간대를 조정합니다.':
    'Caffeine clearance rate and circadian tendency shape bedtime and training windows.',
  '피부 · 노화': 'Skin · ageing',
  '항산화 능력과 자외선 민감도를 기준으로 관리 루틴과 계절별 대응을 안내합니다.':
    'Antioxidant capacity and UV sensitivity guide the care routine and seasonal response.',
  '개인 리포트 예시': 'Sample personal report',
  '영역별 결과는 질병 진단이 아니라 생활 관리 기준으로 제공됩니다.':
    'Results per area are provided as lifestyle guidance, not as a medical diagnosis.',
  'SNP 기반 관리 지표': 'SNP-based care indicators',
  '낮음 · 주의  →  높음 · 양호': 'Low · watch  →  High · good',
  '주의': 'Watch',
  '보통': 'Moderate',
  '양호': 'Good',
  '12주 코칭 · 2주 단위 점검': '12-week coaching · check-in every 2 weeks',
  '0주': 'Week 0',
  '계획 수립': 'Plan set',
  '2주': 'Week 2',
  '실행 점검': 'Adherence check',
  '4주': 'Week 4',
  '식단 조정': 'Diet adjusted',
  '8주': 'Week 8',
  '지표 재확인': 'Markers re-checked',
  '재검사 판단': 'Retest decision',
  '지표 값은 리포트 구성을 설명하기 위한 예시입니다.':
    'The values are an example to illustrate how the report is built.',
  '검사에서 습관까지': 'From test to habit',
  '자가 채취': 'Self-collected',
  '검사 키트': 'Test kit',
  '구강 상피 세포를 채취해 회송합니다. 병원 방문이 필요 없습니다.':
    'Collect a buccal swab and post it back. No clinic visit needed.',
  '인증 기관': 'Accredited lab',
  '유전 분석': 'Genetic analysis',
  '검사 기관에서 SNP 지표를 분석하고 결과를 검증합니다.':
    'The laboratory analyses the SNP markers and validates the results.',
  '영역별 번역': 'Translated per area',
  '관리 계획': 'Care plan',
  '결과를 식단·보충·운동·수면 계획으로 바꿉니다.':
    'Results become a diet, supplement, exercise and sleep plan.',
  '2주 점검': 'Check-in every 2 weeks',
  '12주 코칭': '12-week coaching',
  '실행 여부를 확인하고 계획을 조정합니다.':
    'We check what was actually done and adjust the plan.',
  '유전 데이터는': 'Genetic data',
  '부문 밖으로': 'never leaves',
  '나가지 않습니다': 'the division',
  '분리 보관': 'Separate storage',
  '분석 결과는 별도 저장소에 암호화 보관하며 접근 권한을 최소 인원으로 제한합니다.':
    'Results are encrypted in a separate store, with access limited to the smallest possible group.',
  '삭제 요청': 'Deletion requests',
  '이용자가 요청하면 검사 결과와 원본 데이터를 함께 폐기하고 결과를 통지합니다.':
    'On request we destroy both the results and the raw data, and confirm that it is done.',
  '범위 고지': 'Stated scope',
  '유전 분석은 질병 진단이나 치료를 대체하지 않는다는 점을 결과 화면과 리포트에 명시합니다.':
    'Both the results screen and the report state that genetic analysis does not replace diagnosis or treatment.',
  '검사 기관과 웰니스 파트너를 찾습니다':
    'We are looking for laboratories and wellness partners',
  '분석 기관 협력, 보충제 유통, NIA World 웰니스 존 운영 제휴를 논의할 수 있습니다.':
    'We can discuss laboratory collaboration, supplement distribution, and partnership to run the NIA World wellness zone.',
};

const KEY = 'vfg-lang';
const swaps = [];

// Text nodes whose trimmed content has a translation. Surrounding whitespace is
// preserved so the markup's own indentation is untouched.
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
for (let n; (n = walker.nextNode()); ) {
  const t = n.nodeValue.trim();
  if (!t || !DICT[t]) continue;
  const ko = n.nodeValue;
  swaps.push({ ko, en: ko.replace(t, () => DICT[t]), set: (v) => { n.nodeValue = v; } });
}

// Attributes and head metadata.
const attr = (el, name) => {
  const ko = el.getAttribute(name);
  if (ko && DICT[ko.trim()]) {
    swaps.push({ ko, en: DICT[ko.trim()], set: (v) => el.setAttribute(name, v) });
  }
};
document.querySelectorAll('img[alt]').forEach((el) => attr(el, 'alt'));
document.querySelectorAll('[aria-label]').forEach((el) => attr(el, 'aria-label'));
document.querySelectorAll('iframe[title]').forEach((el) => attr(el, 'title'));
const desc = document.querySelector('meta[name="description"]');
if (desc) attr(desc, 'content');
if (DICT[document.title]) {
  const ko = document.title;
  swaps.push({ ko, en: DICT[ko], set: (v) => { document.title = v; } });
}

function apply(lang) {
  swaps.forEach((s) => s.set(lang === 'en' ? s.en : s.ko));
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang-btn]').forEach((b) => {
    b.textContent = lang === 'en' ? 'KO' : 'EN';
    b.setAttribute('aria-label', lang === 'en' ? '한국어로 보기' : 'View in English');
  });
  document.querySelectorAll('iframe').forEach((f) => {
    try { f.contentWindow.postMessage({ vfgLang: lang }, '*'); } catch (e) { /* not ready */ }
  });
  try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
}

let current = 'ko';
try { if (localStorage.getItem(KEY) === 'en') current = 'en'; } catch (e) { /* private mode */ }

window.toggleLang = () => { current = current === 'en' ? 'ko' : 'en'; apply(current); };
apply(current);
