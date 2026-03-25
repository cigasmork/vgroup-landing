/* ════════════════════════════════════════════════════════════
   V Financial Group — Shared JavaScript
   ════════════════════════════════════════════════════════════ */

/* ─── Translations ───────────────────────────────────────── */
const T = {
  ko: {
    /* Nav */
    'nav-about':    '소개',
    'nav-hc':       '헬스케어',
    'nav-contact':  '문의',
    'nav-cta':      '문의하기',

    /* ── INDEX ── */
    'idx-badge':     '글로벌 금융 포트폴리오 그룹',
    'idx-title':     '글로벌 금융과<br>디지털 혁신을<br>연결하다',
    'idx-sub':       'V Financial Group은 V Pay · V Bazzar · V Pawn · Healthcare 4개 사업을 통해 국경 없는 금융 생태계를 구축합니다.',
    'idx-cta1':      '사업 문의하기',
    'idx-cta2':      '사업영역 보기',
    'idx-about-tag': 'ABOUT US',
    'idx-about-title':'미래 금융을 선도하는<br>디지털 혁신 그룹',
    'idx-about-sub': 'V Financial Group은 핀테크·커머스·자산금융·헬스케어의 교차점에서 새로운 가치를 창출합니다. 글로벌 스탠다드와 현지 금융 인프라를 연결하여 사용자 중심의 금융 생태계를 만들어갑니다.',
    'idx-about-p2':  '우리는 규제 준수와 기술 혁신이 공존할 수 있다고 믿습니다. 금융위원회 인가 추진, SNP 기반 개인화 플랫폼 등 각 사업 영역에서 신뢰와 혁신을 동시에 추구합니다.',
    'idx-stat1-v':   '4',  'idx-stat1-l':  '핵심 사업 영역',
    'idx-stat2-v':   '5',  'idx-stat2-l':  '진출 국가',
    'idx-stat3-v':   '24', 'idx-stat3-l':  '시간 서비스',
    'idx-stat4-v':   '2025','idx-stat4-l': '서비스 고도화',
    'idx-biz-tag':   'OUR BUSINESSES',
    'idx-biz-title': '4가지 사업 영역',
    'idx-biz-sub':   '금융·커머스·자산·헬스케어를 아우르는 통합 포트폴리오',
    'idx-vpay-title': 'V Pay',
    'idx-vpay-desc':  '아시아 5개국을 연결하는 크로스보더 디지털 송금·결제 플랫폼',
    'idx-vpay-p1':    '실시간 환전',
    'idx-vpay-p2':    '0.5% 이하 수수료',
    'idx-vpay-p3':    '금융위원회 인가 추진',
    'idx-vbazzar-title': 'V Bazzar',
    'idx-vbazzar-desc':  '에스크로 보호 C2C 중고거래 마켓플레이스 플랫폼',
    'idx-vbazzar-p1':    '에스크로 보호',
    'idx-vbazzar-p2':    '검증된 판매자',
    'idx-vbazzar-p3':    '안전 결제',
    'idx-vpawn-title': 'V Pawn',
    'idx-vpawn-desc':  '디지털 자산 기반 즉시 유동성 공급 플랫폼',
    'idx-vpawn-p1':    '즉시 자산 평가',
    'idx-vpawn-p2':    '담보 유동성',
    'idx-vpawn-p3':    '안전한 보관',
    'idx-hc-title':  'Healthcare',
    'idx-hc-desc':   'SNP 유전자 분석 기반 맞춤형 영양·건강 관리 플랫폼',
    'idx-hc-p1':     'SNP 유전자 분석',
    'idx-hc-p2':     '맞춤 영양 솔루션',
    'idx-hc-p3':     '개인화 헬스케어',
    'idx-card-learn': '자세히 보기 →',
    'idx-str-tag':   'CORE STRENGTHS',
    'idx-str-title': 'V Financial Group이<br>선택받는 이유',
    'idx-str-sub':   '기술·신뢰·글로벌 네트워크로 차별화된 금융 생태계를 만듭니다.',
    'idx-s1-title':  '규제 준수 금융 혁신',
    'idx-s1-desc':   '금융위원회 소액해외송금업 인가 추진 등 합법적·신뢰성 있는 운영 기반 위에 혁신 서비스를 구축합니다.',
    'idx-s2-title':  '글로벌-로컬 네트워크',
    'idx-s2-desc':   '한국·베트남·태국·필리핀·인도네시아를 잇는 현지 파트너십과 규제 대응 네트워크를 보유합니다.',
    'idx-s3-title':  '통합 생태계 시너지',
    'idx-s3-desc':   'V Pay·V Bazzar·V Pawn·Healthcare 4개 사업의 교차 연계를 통해 사용자 Lock-in과 생태계 가치를 극대화합니다.',
    'idx-s4-title':  '데이터 기반 개인화',
    'idx-s4-desc':   'SNP 유전자 분석, 거래 데이터 분석 등 과학적 접근으로 맞춤형 서비스를 제공합니다.',
    'idx-s5-title':  '안전한 자산 보호',
    'idx-s5-desc':   '에스크로, 에스크로 보호 거래, 콜드스토리지 등 다중 보안 체계로 사용자 자산을 안전하게 보호합니다.',
    'idx-ct-tag':    'CONTACT',
    'idx-ct-title':  '파트너십 및 사업 문의',
    'idx-ct-sub':    '투자·제휴·서비스 이용 등 모든 문의를 환영합니다.',
    'idx-ct-email':  '이메일 문의',
    'idx-ct-phone':  '전화 문의',
    'idx-ct-card1':  '이메일',
    'idx-ct-card2':  '전화번호',
    'idx-ct-card3':  '사업자등록',
    'idx-ct-card4':  '주소 (인천)',
    'idx-ct-addr':   '인천타워대로 323 비동 30층 V494호',
    'idx-ct-addr2':  '송도 센트로드, 연수구',
    'idx-biz-num':   '283-88-03541',

    /* ── V PAY ── */
    'vp-hero-tag':   'V PAY',
    'vp-hero-title': '크로스보더<br>디지털 금융 플랫폼',
    'vp-hero-sub':   '아시아 5개국을 연결하는 실시간 해외송금·결제 플랫폼. 0.5% 이하의 경쟁력 있는 수수료와 빠른 처리 속도로 글로벌 금융 장벽을 낮춥니다.',
    'vp-badge1':     '금융위원회 인가 추진',
    'vp-badge2':     '실시간 처리',
    'vp-badge3':     '아시아 5개국',
    'vp-s1v': '0.5%', 'vp-s1l': '최대 수수료율',
    'vp-s2v': '5',    'vp-s2l': '서비스 국가',
    'vp-s3v': '24/7', 'vp-s3l': '연중무휴 운영',
    'vp-s4v': '실시간','vp-s4l': '처리 속도',
    'vp-ft-tag':    'FEATURES',
    'vp-ft-title':  'V Pay의 핵심 기능',
    'vp-ft-sub':    '크로스보더 디지털 금융의 새로운 기준을 제시합니다.',
    'vp-f1-title':  '실시간 크로스보더 송금',
    'vp-f1-desc':   '한국-베트남-태국-필리핀-인도네시아를 연결하는 실시간 해외송금. 전통 금융 대비 최대 80% 절감된 비용으로 빠르고 안전하게 처리합니다.',
    'vp-f2-title':  '실시간 환전 엔진',
    'vp-f2-desc':   '투명한 환율 제공과 실시간 환전 처리로 최적의 환전 조건을 보장합니다. 숨겨진 수수료 없이 정직한 환전 서비스를 제공합니다.',
    'vp-f3-title':  '모바일 우선 UX',
    'vp-f3-desc':   '직관적인 모바일 앱으로 송금, 환전, 잔액 확인 등 모든 금융 서비스를 손쉽게 이용할 수 있습니다. 간편한 인증 절차로 빠른 서비스 이용을 지원합니다.',
    'vp-f4-title':  '글로벌 규제 준수',
    'vp-f4-desc':   'AML·KYC 등 국제 금융 규제를 준수하며, 금융위원회 소액해외송금업 인가를 추진합니다. 신뢰할 수 있는 합법적 송금 서비스를 제공합니다.',
    'vp-hw-tag':    'HOW IT WORKS',
    'vp-hw-title':  '간단한 4단계 송금',
    'vp-hw-sub':    '몇 번의 탭으로 빠르고 안전하게 해외 송금을 완료하세요.',
    'vp-step1-t':   '앱 설치 및 인증', 'vp-step1-d': '간단한 KYC 인증으로 계정을 개설합니다.',
    'vp-step2-t':   '송금 정보 입력',  'vp-step2-d': '수취인 정보와 송금액을 입력합니다.',
    'vp-step3-t':   '환전 및 결제',    'vp-step3-d': '실시간 환율로 환전 후 안전하게 송금합니다.',
    'vp-step4-t':   '수취인 수령',     'vp-step4-d': '수취인이 현지 계좌로 즉시 수령합니다.',
    'vp-reg-tag':   'SERVICE REGIONS',
    'vp-reg-title': '서비스 지역',
    'vp-reg-sub':   '아시아 주요 국가를 연결하는 송금 네트워크',
    'vp-comp-tag':  'COMPLIANCE',
    'vp-comp-title':'규제 및 라이선스',
    'vp-comp-desc': '금융위원회 소액해외송금업 인가 추진 중이며, AML·KYC 등 국제 금융 규제를 철저히 준수합니다.',

    /* ── V BAZZAR ── */
    'vb-hero-tag':   'V BAZZAR',
    'vb-hero-title': '안전하고 스마트한<br>C2C 마켓플레이스',
    'vb-hero-sub':   '에스크로 결제 보호 기반의 신뢰할 수 있는 개인간 중고거래 플랫폼. 스마트한 상품 매칭과 안전한 거래 환경으로 새로운 커머스 경험을 제공합니다.',
    'vb-badge1':     '에스크로 보호',
    'vb-badge2':     '검증된 판매자',
    'vb-badge3':     '안전 거래 보장',
    'vb-s1v': '100%', 'vb-s1l': '에스크로 보호율',
    'vb-s2v': '3단계', 'vb-s2l': '판매자 검증',
    'vb-s3v': '24/7', 'vb-s3l': '분쟁 지원',
    'vb-s4v': '0원',  'vb-s4l': '기본 등록 수수료',
    'vb-ft-tag':    'FEATURES',
    'vb-ft-title':  'V Bazzar의 핵심 기능',
    'vb-ft-sub':    '안전하고 편리한 C2C 거래 경험을 제공합니다.',
    'vb-f1-title':  'C2C 통합 플랫폼',
    'vb-f1-desc':   '개인과 개인을 직접 연결하는 직거래 플랫폼. 판매자와 구매자 모두에게 최적화된 경험을 제공하여 효율적인 거래를 지원합니다.',
    'vb-f2-title':  '에스크로 결제 보호',
    'vb-f2-desc':   '모든 거래에 에스크로 결제 보호를 적용합니다. 구매자가 상품을 수령하고 확인할 때까지 결제 금액을 안전하게 보관합니다.',
    'vb-f3-title':  '스마트 상품 매칭',
    'vb-f3-desc':   'AI 기반 상품 추천 및 검색 기능으로 원하는 상품을 빠르게 찾을 수 있습니다. 카테고리별 최적화된 인터페이스를 제공합니다.',
    'vb-f4-title':  '투명한 리뷰 시스템',
    'vb-f4-desc':   '검증된 거래자 리뷰와 평점 시스템으로 신뢰할 수 있는 거래 파트너를 쉽게 찾을 수 있습니다.',
    'vb-hw-tag':    'HOW IT WORKS',
    'vb-hw-title':  '쉽고 안전한 거래 과정',
    'vb-hw-sub':    '4단계로 완료되는 안전한 C2C 거래 프로세스.',
    'vb-step1-t':   '상품 등록',  'vb-step1-d': '사진과 설명을 입력하여 상품을 등록합니다.',
    'vb-step2-t':   '상품 탐색',  'vb-step2-d': '스마트 검색으로 원하는 상품을 찾습니다.',
    'vb-step3-t':   '거래 시작',  'vb-step3-d': '에스크로 결제로 안전하게 거래를 시작합니다.',
    'vb-step4-t':   '거래 완료',  'vb-step4-d': '수령 확인 후 대금이 판매자에게 전달됩니다.',
    'vb-trust-tag':   'TRUST & SAFETY',
    'vb-trust-title': '안전한 거래 환경',
    'vb-trust-sub':   '다중 보안 체계로 모든 거래를 보호합니다.',

    /* ── V PAWN ── */
    'vn-hero-tag':   'V PAWN',
    'vn-hero-title': '디지털 자산 기반<br>즉시 유동성 플랫폼',
    'vn-hero-sub':   '다양한 자산을 담보로 즉시 유동성을 제공하는 혁신적인 디지털 질권 플랫폼. 스마트한 자산 평가와 투명한 조건으로 빠른 자금 조달을 지원합니다.',
    'vn-badge1':     '즉시 자산 평가',
    'vn-badge2':     '최대 70% 담보',
    'vn-badge3':     '안전한 보관',
    'vn-s1v': '즉시',   'vn-s1l': '자산 평가 속도',
    'vn-s2v': '70%',   'vn-s2l': '최대 담보 가치',
    'vn-s3v': '다양',   'vn-s3l': '자산 유형',
    'vn-s4v': '24/7',  'vn-s4l': '플랫폼 이용',
    'vn-ft-tag':    'FEATURES',
    'vn-ft-title':  'V Pawn의 핵심 기능',
    'vn-ft-sub':    '자산을 스마트하게 활용하는 새로운 방법.',
    'vn-f1-title':  '다양한 자산 담보',
    'vn-f1-desc':   '디지털 자산, 전자기기, 명품, 귀금속 등 다양한 유형의 자산을 담보로 활용할 수 있습니다. 유연한 자산 범주로 더 많은 유동성 기회를 제공합니다.',
    'vn-f2-title':  '스마트 자산 평가',
    'vn-f2-desc':   'AI 기반 실시간 자산 평가 시스템으로 공정하고 투명한 담보 가치를 산정합니다. 시장 데이터를 반영한 정확한 평가를 제공합니다.',
    'vn-f3-title':  '빠른 유동성 공급',
    'vn-f3-desc':   '자산 심사 완료 후 즉시 유동성을 제공합니다. 복잡한 절차 없이 빠르고 간편하게 자금을 조달할 수 있습니다.',
    'vn-f4-title':  '안전한 자산 보관',
    'vn-f4-desc':   '담보 자산은 최고 수준의 보안 시설에서 안전하게 보관됩니다. 자산 보험과 다중 보안 체계로 완벽하게 보호합니다.',
    'vn-hw-tag':    'HOW IT WORKS',
    'vn-hw-title':  '간편한 담보 대출 프로세스',
    'vn-hw-sub':    '4단계로 빠르게 유동성을 확보하세요.',
    'vn-step1-t':   '자산 신청',   'vn-step1-d': '담보 신청할 자산 정보를 입력합니다.',
    'vn-step2-t':   '자산 평가',   'vn-step2-d': 'AI 시스템이 자산 가치를 즉시 평가합니다.',
    'vn-step3-t':   '담보 설정',   'vn-step3-d': '조건 확인 후 담보 계약을 체결합니다.',
    'vn-step4-t':   '유동성 수령', 'vn-step4-d': '즉시 자금을 받아 자유롭게 활용하세요.',
    'vn-asset-tag':   'ELIGIBLE ASSETS',
    'vn-asset-title': '담보 가능 자산',
    'vn-asset-sub':   '다양한 자산 유형을 담보로 활용할 수 있습니다.',

    /* ── HEALTHCARE ── */
    'hc-hero-tag':   'HEALTHCARE',
    'hc-hero-title': 'SNP 유전자 기반<br>맞춤형 헬스케어',
    'hc-hero-sub':   'SNP 유전자 분석을 기반으로 개인 맞춤형 영양 솔루션과 건강 관리 서비스를 제공합니다. 과학적 데이터로 더 건강한 삶을 설계합니다.',
    'hc-badge1':     'SNP 유전자 분석',
    'hc-badge2':     '맞춤 영양 솔루션',
    'hc-badge3':     '개인화 헬스케어',
    'hc-s1v': 'SNP',    'hc-s1l': '유전자 분석 기반',
    'hc-s2v': '맞춤형', 'hc-s2l': '영양소 설계',
    'hc-s3v': '100%',   'hc-s3l': '개인화 서비스',
    'hc-s4v': '과학적', 'hc-s4l': '근거 기반',
    'hc-ft-tag':    'FEATURES',
    'hc-ft-title':  'Healthcare의 핵심 기능',
    'hc-ft-sub':    '과학적 데이터로 나만의 건강 솔루션을 만듭니다.',
    'hc-f1-title':  'SNP 유전자 분석',
    'hc-f1-desc':   'SNP(단일염기다형성) 분석을 통해 개인의 유전적 특성을 파악합니다. 과학적 데이터를 기반으로 최적의 영양 솔루션을 도출합니다.',
    'hc-f2-title':  '맞춤형 영양 솔루션',
    'hc-f2-desc':   '유전자 분석 결과를 바탕으로 개인에게 최적화된 영양제와 건강 보충제를 설계합니다. 불필요한 성분 없이 꼭 필요한 영양소만을 제공합니다.',
    'hc-f3-title':  '디지털 건강 관리',
    'hc-f3-desc':   '실시간 건강 데이터 모니터링과 AI 분석으로 지속적인 건강 관리를 지원합니다. 데이터 기반 인사이트로 생활 습관 개선을 안내합니다.',
    'hc-f4-title':  '개인화 헬스 플랫폼',
    'hc-f4-desc':   '건강 상태, 라이프스타일, 유전적 요인을 종합 분석하여 개인별 최적화된 헬스케어 플랜을 제공합니다.',
    'hc-hw-tag':    'HOW IT WORKS',
    'hc-hw-title':  'SNP 분석부터 배송까지',
    'hc-hw-sub':    '과학적 분석으로 나만의 건강 솔루션을 받아보세요.',
    'hc-step1-t':   '건강 프로파일', 'hc-step1-d': '건강 상태와 생활 습관 정보를 입력합니다.',
    'hc-step2-t':   'SNP 유전자 분석','hc-step2-d': '유전자 키트로 SNP 분석을 진행합니다.',
    'hc-step3-t':   '영양소 설계',   'hc-step3-d': '분석 결과 기반 맞춤 영양 솔루션을 설계합니다.',
    'hc-step4-t':   '제품 수령',     'hc-step4-d': '맞춤 영양제를 받고 건강 관리를 시작합니다.',
    'hc-snp-tag':   'OUR TECHNOLOGY',
    'hc-snp-title': 'SNP 기술 소개',
    'hc-snp-sub':   'SNP(단일염기다형성)는 인간 게놈에서 가장 흔한 유전적 변이로, 개인의 건강과 영양 대사에 중요한 영향을 미칩니다.',
    'hc-rd-tag':    'ROADMAP',
    'hc-rd-title':  '개발 로드맵',
    'hc-rd-sub':    '단계적 플랫폼 고도화를 통해 더 나은 헬스케어 서비스를 제공합니다.',

    /* Common */
    'ft-desc':        '글로벌 금융과 디지털 혁신을 연결하는 기업 포트폴리오 그룹.',
    'ft-businesses':  '사업 영역',
    'ft-company':     '회사',
    'ft-contact-col': '연락처',
    'ft-copy':        '© 2026 V Financial Group. All rights reserved.',
    'ft-biz':         '사업자등록번호 283-88-03541',
    'cta-contact':    '지금 문의하기',
    'cta-learn':      '더 알아보기',
  },

  en: {
    'nav-about':    'About',
    'nav-hc':       'Healthcare',
    'nav-contact':  'Contact',
    'nav-cta':      'Contact Us',

    'idx-badge':     'Global Financial Portfolio Group',
    'idx-title':     'Connecting Global Finance<br>with Digital<br>Innovation',
    'idx-sub':       'V Financial Group builds a borderless financial ecosystem through V Pay · V Bazzar · V Pawn · Healthcare.',
    'idx-cta1':      'Contact Us',
    'idx-cta2':      'Explore Businesses',
    'idx-about-tag': 'ABOUT US',
    'idx-about-title':'A Digital Innovation Group<br>Leading Future Finance',
    'idx-about-sub': 'V Financial Group creates new value at the intersection of fintech, commerce, asset finance, and healthcare. We connect global standards with local financial infrastructure to build a user-centric financial ecosystem.',
    'idx-about-p2':  'We believe regulatory compliance and technological innovation can coexist. We pursue both trust and innovation in each business area, from FSC license applications to SNP-based personalized platforms.',
    'idx-stat1-v':   '4',   'idx-stat1-l':  'Business Areas',
    'idx-stat2-v':   '5',   'idx-stat2-l':  'Countries',
    'idx-stat3-v':   '24',  'idx-stat3-l':  'Hour Service',
    'idx-stat4-v':   '2025','idx-stat4-l':  'Service Enhancement',
    'idx-biz-tag':   'OUR BUSINESSES',
    'idx-biz-title': '4 Business Areas',
    'idx-biz-sub':   'An integrated portfolio spanning finance, commerce, assets & healthcare',
    'idx-vpay-title': 'V Pay',
    'idx-vpay-desc':  'Cross-border digital remittance & payment platform connecting 5 Asian countries',
    'idx-vpay-p1':    'Real-time FX',
    'idx-vpay-p2':    'Under 0.5% Fee',
    'idx-vpay-p3':    'FSC License Pending',
    'idx-vbazzar-title': 'V Bazzar',
    'idx-vbazzar-desc':  'Escrow-protected C2C second-hand marketplace platform',
    'idx-vbazzar-p1':    'Escrow Protection',
    'idx-vbazzar-p2':    'Verified Sellers',
    'idx-vbazzar-p3':    'Safe Payment',
    'idx-vpawn-title': 'V Pawn',
    'idx-vpawn-desc':  'Instant liquidity platform backed by digital assets',
    'idx-vpawn-p1':    'Instant Appraisal',
    'idx-vpawn-p2':    'Collateral Liquidity',
    'idx-vpawn-p3':    'Secure Custody',
    'idx-hc-title':  'Healthcare',
    'idx-hc-desc':   'Personalized nutrition & health management platform based on SNP gene analysis',
    'idx-hc-p1':     'SNP Gene Analysis',
    'idx-hc-p2':     'Personalized Nutrition',
    'idx-hc-p3':     'Digital Health',
    'idx-card-learn': 'Learn More →',
    'idx-str-tag':   'CORE STRENGTHS',
    'idx-str-title': 'Why V Financial Group',
    'idx-str-sub':   'Building a differentiated financial ecosystem through technology, trust, and global networks.',
    'idx-s1-title':  'Regulated Financial Innovation',
    'idx-s1-desc':   'We build innovative services on a legal, trustworthy foundation, including FSC small overseas remittance license applications.',
    'idx-s2-title':  'Global-Local Network',
    'idx-s2-desc':   'We have local partnerships and regulatory compliance networks connecting Korea, Vietnam, Thailand, Philippines, and Indonesia.',
    'idx-s3-title':  'Integrated Ecosystem Synergy',
    'idx-s3-desc':   'Cross-linkage of V Pay, V Bazzar, V Pawn, and Healthcare maximizes user retention and ecosystem value.',
    'idx-s4-title':  'Data-Driven Personalization',
    'idx-s4-desc':   'We provide personalized services through scientific approaches including SNP gene analysis and transaction data analytics.',
    'idx-s5-title':  'Secure Asset Protection',
    'idx-s5-desc':   'Multiple security systems including escrow, escrow-protected transactions, and cold storage keep user assets completely secure.',
    'idx-ct-tag':    'CONTACT',
    'idx-ct-title':  'Partnership & Business Inquiries',
    'idx-ct-sub':    'We welcome all inquiries for investment, partnerships, and services.',
    'idx-ct-email':  'Send Email',
    'idx-ct-phone':  'Call Us',
    'idx-ct-card1':  'Email',
    'idx-ct-card2':  'Phone',
    'idx-ct-card3':  'Business Reg.',
    'idx-ct-card4':  'Address (Incheon)',
    'idx-ct-addr':   'B Tower 30F V494, 323 Incheon tower-daero',
    'idx-ct-addr2':  'Songdo Sentroad, Yeonsu-gu',
    'idx-biz-num':   '283-88-03541',

    'vp-hero-tag':   'V PAY',
    'vp-hero-title': 'Cross-Border<br>Digital Finance Platform',
    'vp-hero-sub':   'Real-time remittance and payment platform connecting 5 Asian countries. Breaking global financial barriers with fees under 0.5% and lightning-fast processing.',
    'vp-badge1':     'FSC License Pending',
    'vp-badge2':     'Real-time Processing',
    'vp-badge3':     '5 Asian Countries',
    'vp-s1v': '0.5%', 'vp-s1l': 'Maximum Fee',
    'vp-s2v': '5',    'vp-s2l': 'Countries',
    'vp-s3v': '24/7', 'vp-s3l': 'Always On',
    'vp-s4v': 'Instant','vp-s4l': 'Processing Speed',
    'vp-ft-tag':    'FEATURES',
    'vp-ft-title':  'Core Features of V Pay',
    'vp-ft-sub':    'Setting a new standard for cross-border digital finance.',
    'vp-f1-title':  'Real-time Cross-border Remittance',
    'vp-f1-desc':   'Instant remittance connecting Korea-Vietnam-Thailand-Philippines-Indonesia. Process quickly and securely at up to 80% lower cost than traditional banking.',
    'vp-f2-title':  'Real-time FX Engine',
    'vp-f2-desc':   'Transparent exchange rates and real-time conversion guarantee optimal FX conditions. Honest exchange service with no hidden fees.',
    'vp-f3-title':  'Mobile-First UX',
    'vp-f3-desc':   'Easily access all financial services — remittance, exchange, balance check — through an intuitive mobile app. Simplified verification for fast service access.',
    'vp-f4-title':  'Global Regulatory Compliance',
    'vp-f4-desc':   'Compliant with international financial regulations including AML and KYC. Pursuing FSC small overseas remittance license for a trustworthy legal service.',
    'vp-hw-tag':    'HOW IT WORKS',
    'vp-hw-title':  'Simple 4-Step Remittance',
    'vp-hw-sub':    'Complete international transfers quickly and securely in just a few taps.',
    'vp-step1-t':   'Install & Verify', 'vp-step1-d': 'Open an account with simple KYC verification.',
    'vp-step2-t':   'Enter Details',    'vp-step2-d': 'Input recipient info and transfer amount.',
    'vp-step3-t':   'Exchange & Send',  'vp-step3-d': 'Convert at real-time rates and send securely.',
    'vp-step4-t':   'Recipient Receives','vp-step4-d': 'Recipient receives funds instantly in local account.',
    'vp-reg-tag':   'SERVICE REGIONS',
    'vp-reg-title': 'Service Regions',
    'vp-reg-sub':   'Remittance network connecting major Asian countries',
    'vp-comp-tag':  'COMPLIANCE',
    'vp-comp-title':'Regulation & Licensing',
    'vp-comp-desc': 'Pursuing FSC overseas small-amount remittance license and strictly complying with AML, KYC, and other international financial regulations.',

    'vb-hero-tag':   'V BAZZAR',
    'vb-hero-title': 'Safe & Smart<br>C2C Marketplace',
    'vb-hero-sub':   'A trustworthy peer-to-peer second-hand trading platform with escrow payment protection. Smart product matching and safe trading environment for a new commerce experience.',
    'vb-badge1':     'Escrow Protection',
    'vb-badge2':     'Verified Sellers',
    'vb-badge3':     'Safe Trade Guarantee',
    'vb-s1v': '100%', 'vb-s1l': 'Escrow Coverage',
    'vb-s2v': '3-Step','vb-s2l': 'Seller Verification',
    'vb-s3v': '24/7', 'vb-s3l': 'Dispute Support',
    'vb-s4v': 'Free',  'vb-s4l': 'Basic Listing Fee',
    'vb-ft-tag':    'FEATURES',
    'vb-ft-title':  'Core Features of V Bazzar',
    'vb-ft-sub':    'Providing a safe and convenient C2C trading experience.',
    'vb-f1-title':  'Integrated C2C Platform',
    'vb-f1-desc':   'A direct trading platform that connects individuals. Optimized experience for both buyers and sellers to support efficient transactions.',
    'vb-f2-title':  'Escrow Payment Protection',
    'vb-f2-desc':   'Escrow payment protection applied to all transactions. Payment is held securely until the buyer receives and confirms the item.',
    'vb-f3-title':  'Smart Product Matching',
    'vb-f3-desc':   'AI-powered product recommendations and search help you quickly find what you want. Category-optimized interface provided.',
    'vb-f4-title':  'Transparent Review System',
    'vb-f4-desc':   'Verified trader reviews and rating system help you easily find trustworthy trading partners.',
    'vb-hw-tag':    'HOW IT WORKS',
    'vb-hw-title':  'Easy & Safe Trading Process',
    'vb-hw-sub':    'A secure C2C trading process completed in 4 steps.',
    'vb-step1-t':   'List Product',  'vb-step1-d': 'Add photos and description to list your item.',
    'vb-step2-t':   'Browse Products','vb-step2-d': 'Find what you want with smart search.',
    'vb-step3-t':   'Start Trade',   'vb-step3-d': 'Begin trading safely with escrow payment.',
    'vb-step4-t':   'Complete Trade','vb-step4-d': 'Funds released to seller after delivery confirmed.',
    'vb-trust-tag':   'TRUST & SAFETY',
    'vb-trust-title': 'Safe Trading Environment',
    'vb-trust-sub':   'Multiple security systems protect every transaction.',

    'vn-hero-tag':   'V PAWN',
    'vn-hero-title': 'Digital Asset-Backed<br>Instant Liquidity Platform',
    'vn-hero-sub':   'An innovative digital collateral platform providing instant liquidity against various assets. Fast funding through smart asset appraisal and transparent terms.',
    'vn-badge1':     'Instant Appraisal',
    'vn-badge2':     'Up to 70% LTV',
    'vn-badge3':     'Secure Custody',
    'vn-s1v': 'Instant','vn-s1l': 'Appraisal Speed',
    'vn-s2v': '70%',   'vn-s2l': 'Max Collateral Value',
    'vn-s3v': 'Diverse','vn-s3l': 'Asset Types',
    'vn-s4v': '24/7',  'vn-s4l': 'Platform Access',
    'vn-ft-tag':    'FEATURES',
    'vn-ft-title':  'Core Features of V Pawn',
    'vn-ft-sub':    'A new way to smartly leverage your assets.',
    'vn-f1-title':  'Diverse Asset Collateral',
    'vn-f1-desc':   'Use digital assets, electronics, luxury goods, precious metals and more as collateral. Flexible asset categories provide more liquidity opportunities.',
    'vn-f2-title':  'Smart Asset Appraisal',
    'vn-f2-desc':   'AI-powered real-time asset appraisal system determines fair and transparent collateral value. Accurate appraisal reflecting market data.',
    'vn-f3-title':  'Fast Liquidity Supply',
    'vn-f3-desc':   'Instant liquidity provided upon asset review completion. Access funds quickly and easily without complicated procedures.',
    'vn-f4-title':  'Secure Asset Custody',
    'vn-f4-desc':   'Collateral assets are stored safely in top-tier security facilities. Completely protected by asset insurance and multiple security systems.',
    'vn-hw-tag':    'HOW IT WORKS',
    'vn-hw-title':  'Simple Collateral Loan Process',
    'vn-hw-sub':    'Secure liquidity quickly in 4 steps.',
    'vn-step1-t':   'Asset Application', 'vn-step1-d': 'Enter information for the asset to be used as collateral.',
    'vn-step2-t':   'Asset Appraisal',   'vn-step2-d': 'AI system instantly appraises asset value.',
    'vn-step3-t':   'Set Collateral',    'vn-step3-d': 'Confirm terms and execute collateral agreement.',
    'vn-step4-t':   'Receive Funds',     'vn-step4-d': 'Receive funds immediately and use freely.',
    'vn-asset-tag':   'ELIGIBLE ASSETS',
    'vn-asset-title': 'Eligible Assets',
    'vn-asset-sub':   'A wide range of asset types can be used as collateral.',

    'hc-hero-tag':   'HEALTHCARE',
    'hc-hero-title': 'SNP Gene-Based<br>Personalized Healthcare',
    'hc-hero-sub':   'Providing personalized nutrition solutions and health management services based on SNP gene analysis. Design a healthier life with scientific data.',
    'hc-badge1':     'SNP Gene Analysis',
    'hc-badge2':     'Personalized Nutrition',
    'hc-badge3':     'Digital Health',
    'hc-s1v': 'SNP',    'hc-s1l': 'Gene Analysis',
    'hc-s2v': 'Custom', 'hc-s2l': 'Nutrient Design',
    'hc-s3v': '100%',   'hc-s3l': 'Personalized Service',
    'hc-s4v': 'Science','hc-s4l': 'Evidence-Based',
    'hc-ft-tag':    'FEATURES',
    'hc-ft-title':  'Core Features of Healthcare',
    'hc-ft-sub':    'Create your personal health solution with scientific data.',
    'hc-f1-title':  'SNP Gene Analysis',
    'hc-f1-desc':   'Identify individual genetic characteristics through SNP (Single Nucleotide Polymorphism) analysis. Derive optimal nutritional solutions based on scientific data.',
    'hc-f2-title':  'Personalized Nutrition Solutions',
    'hc-f2-desc':   'Design optimal supplements and health products for each individual based on gene analysis results. Provide only the nutrients truly needed, with no unnecessary ingredients.',
    'hc-f3-title':  'Digital Health Management',
    'hc-f3-desc':   'Support continuous health management through real-time health data monitoring and AI analysis. Guide lifestyle improvements with data-driven insights.',
    'hc-f4-title':  'Personalized Health Platform',
    'hc-f4-desc':   'Provide individualized healthcare plans through comprehensive analysis of health status, lifestyle, and genetic factors.',
    'hc-hw-tag':    'HOW IT WORKS',
    'hc-hw-title':  'From SNP Analysis to Delivery',
    'hc-hw-sub':    'Receive your personal health solution through scientific analysis.',
    'hc-step1-t':   'Health Profile',   'hc-step1-d': 'Enter your health condition and lifestyle information.',
    'hc-step2-t':   'SNP Gene Analysis','hc-step2-d': 'Conduct SNP analysis with a gene test kit.',
    'hc-step3-t':   'Nutrient Design',  'hc-step3-d': 'Design a custom nutrition solution based on results.',
    'hc-step4-t':   'Receive Product',  'hc-step4-d': 'Receive your custom supplements and start health management.',
    'hc-snp-tag':   'OUR TECHNOLOGY',
    'hc-snp-title': 'About SNP Technology',
    'hc-snp-sub':   'SNPs (Single Nucleotide Polymorphisms) are the most common genetic variations in the human genome, significantly influencing individual health and nutrient metabolism.',
    'hc-rd-tag':    'ROADMAP',
    'hc-rd-title':  'Development Roadmap',
    'hc-rd-sub':    'Providing better healthcare services through phased platform enhancement.',

    'ft-desc':        'A corporate portfolio group connecting global finance with digital innovation.',
    'ft-businesses':  'Businesses',
    'ft-company':     'Company',
    'ft-contact-col': 'Contact',
    'ft-copy':        '© 2026 V Financial Group. All rights reserved.',
    'ft-biz':         'Business Reg. 283-88-03541',
    'cta-contact':    'Contact Us Now',
    'cta-learn':      'Learn More',
  }
};

/* ─── Language ───────────────────────────────────────────── */
let currentLang = localStorage.getItem('vfg-lang') || 'ko';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('vfg-lang', lang);
  document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[lang][k] !== undefined) el.innerHTML = T[lang][k];
  });
  const tg = document.getElementById('langToggle');
  const mt = document.getElementById('mobLangBtn');
  if (tg) tg.textContent = lang === 'ko' ? 'EN' : 'KR';
  if (mt) mt.textContent = lang === 'ko' ? 'EN' : 'KR';
}

function toggleLang() { applyLang(currentLang === 'ko' ? 'en' : 'ko'); }

/* ─── Navigation ─────────────────────────────────────────── */
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  if (m) m.classList.toggle('open');
  if (h) h.classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
}

function smoothNav(e, id) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  closeMenu();
}

/* Active nav */
function setActiveNav() {
  const f = (location.pathname.split('/').pop() || '').replace('.html','') || 'index';
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === f);
  });
  document.querySelectorAll('[data-mob-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.mobPage === f);
  });
}

/* ─── Scroll & Nav State ─────────────────────────────────── */
function initScroll() {
  const nav = document.getElementById('mainNav');
  const darkHero = !!document.querySelector('.biz-hero');
  if (darkHero) nav.classList.add('dark');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 30;
    nav.classList.toggle('scrolled', scrolled);
    // For dark hero pages, keep dark class always
    if (!darkHero && scrolled) nav.classList.remove('dark');
  }, { passive: true });
}

/* ─── Scroll Reveal ──────────────────────────────────────── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      // Auto-stagger siblings in same container
      if (!el.dataset.delaySet) {
        const siblings = [...(el.parentElement?.querySelectorAll('.reveal') || [])];
        const idx = siblings.indexOf(el);
        if (!el.classList.contains('d1') && !el.classList.contains('d2') &&
            !el.classList.contains('d3') && !el.classList.contains('d4')) {
          el.style.transitionDelay = (idx * 0.09) + 's';
        }
        el.dataset.delaySet = '1';
      }
      el.classList.add('visible');
      io.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─── Counter Animation ──────────────────────────────────── */
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suf || '';
      const prefix = el.dataset.pre || '';
      if (isNaN(target)) return;
      const dec = el.dataset.dec || 0;
      const dur = 1600;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 4);
        el.textContent = prefix + (target * e).toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
}

/* ─── Progress Bar ───────────────────────────────────────── */
function initBars() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const w = el.dataset.fill || '0';
      setTimeout(() => { el.style.width = w + '%'; }, 200);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.progress-fill').forEach(el => io.observe(el));
}

/* ─── Ripple Effect ──────────────────────────────────────── */
function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const r = document.createElement('span');
      r.className = 'ripple-effect';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;margin-left:0;margin-top:0;`;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(r);
      setTimeout(() => r.remove(), 700);
    });
  });
}

/* ─── Init All ───────────────────────────────────────────── */
function initShared() {
  applyLang(currentLang);
  setActiveNav();
  initScroll();
  initReveal();
  initCounters();
  initBars();
  initRipple();
}

document.addEventListener('DOMContentLoaded', initShared);
