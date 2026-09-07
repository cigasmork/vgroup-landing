# V Financial Group — Corporate Site

Claude Design 프로젝트 "V Financial Group 재디자인"(v3)을 정적 사이트로 구현한 결과물입니다.

## 기술 스택

- **순수 HTML / CSS / JavaScript** (프레임워크 없음, 빌드 단계 없음)
- 시스템 폰트 스택 (SF Pro / Apple SD Gothic Neo / Pretendard)
- `apple-motion.js` — 스프링 기반 리빌·패럴랙스·드래그 레일·press/lift 모션
- V Pay 구간 지도만 CDN에서 d3 + topojson을 불러옵니다

## 화면 구성

| 페이지 | 사업 | 디자인 원본 |
|--------|------|-------------|
| `index.html` | 그룹 소개 | V Financial Group v3.dc.html |
| `vpay.html` | 크로스보더 송금·결제 | V Pay v3.dc.html |
| `vbazzar.html` | 에스크로 C2C 마켓플레이스 | V Bazzar v3.dc.html |
| `nia.html` | 문화관광 복합개발 | NIA World v3.dc.html |
| `genova.html` | SNP 기반 정밀 웰니스 | Genova Wellness v3.dc.html |

공유 자산: `v3.css`(디자인 토큰·반응형), `page.js`(모션 부팅·모바일 메뉴),
`apple-motion.js`(모션 프리미티브), `vpay-corridors.html`(구간 지도 iframe), `img/`.

v2에 있던 V Pawn과 Healthcare 페이지는 v3 디자인에서 제외되어 삭제했습니다.
Healthcare는 Genova Wellness로 대체됩니다.

## GitHub Pages 퍼블리시

`main` 브랜치 `/ (root)`에서 배포됩니다. push하면 약 1분 뒤 반영됩니다.

https://cigasmork.github.io/vgroup-landing

## 로컬 미리보기

```bash
python -m http.server 3000
```

---

**V Financial Group** | info@vpayv.com | 070-4136-4390
