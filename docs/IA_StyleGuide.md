# 코스모아이씨티(CosmoICT) 홈페이지 메뉴 구조 (IA)

## 1. Main Menu Structure

| 1 Depth (메인 메뉴) | 2 Depth (서브 메뉴) | 설명 |
| :--- | :--- | :--- |
| **Company** (회사 소개) | 회사 개요 | 코스모아이씨티 소개, 미션/비전 |
| | CEO 인사말 | 대표이사 인사말 (옵션) |
| | 오시는 길 | 본사 위치 및 연락처 |
| **Security Solutions** | **AXGATE** | 차세대 방화벽, VPN, UTM 솔루션 상세 |
| | **FORTINET** | FortiGate, Security Fabric 솔루션 상세 |
| **CAD Solutions** | **ZXYCAD vs ZWCAD** | CAD 제품 비교 및 특징 |
| | 도입 가이드 | 산업별 추천 및 라이선스 안내 |
| **Services** (기술지원) | 구축 서비스 | 네트워크 설계, 보안 정책 설정, 최적화 |
| | 유지보수 | 정기 점검, 장애 대응, 기술 지원 |
| | 교육 서비스 | CAD 및 보안 장비 운영 교육 |
| **Contact** (고객센터) | 견적 문의 | 제품 및 솔루션 도입 문의 |
| | 기술 문의 | 기존 고객 기술 지원 요청 |
| | 자료실 | 브로슈어, 매뉴얼 다운로드 |

## 2. User Flow Strategy

- **메인 페이지**: 핵심 솔루션(보안/CAD) 노출 -> 신뢰성 강조(구축 사례/파트너) -> 문의하기(CTA)
- **제품 페이지**: 제품 특징 -> 스펙/기능 -> 도입 효과 -> 관련 구축 사례 -> 견적 문의
- **서비스 페이지**: 프로세스 안내 -> 전문성 강조 -> 지원 범위 확인 -> 문의

---

# 코스모아이씨티(CosmoICT) UI/디자인 스타일 가이드

## 1. Brand Identity

- **Keywords**: Trust(신뢰), Professional(전문성), Technology(기술), Security(보안)
- **Tone & Manner**: 차분하고 안정감 있는, 모던하고 직관적인 B2B 스타일

## 2. Color Palette

- **Primary Color (Blue/Navy)**: 신뢰와 보안을 상징
  - `Deep Navy`: #0A192F (헤더, 푸터, 강조 텍스트)
  - `Cosmo Blue`: #0056B3 (메인 버튼, 주요 아이콘, 링크)
- **Secondary Color**
  - `Tech Cyan`: #00A8CC (포인트, 그라데이션, 호버 효과)
  - `Soft Grey`: #F4F6F8 (배경, 섹션 구분)
- **Text Color**
  - `Heading`: #111111
  - `Body`: #333333
  - `Disabled`: #999999

## 3. Typography

- **Font Family**: 'Pretendard', 'Noto Sans KR', sans-serif (가독성 최우선)
- **Scale**:
  - H1 (Main Title): 48px / 700 Bold
  - H2 (Section Title): 36px / 600 SemiBold
  - H3 (Sub Title): 24px / 500 Medium
  - Body: 16px / 400 Regular
  - Small: 14px / 400 Regular

## 4. UI Components

- **Buttons**:
  - Primary: Solid Blue (#0056B3) with rounded corners (4px). Hover: Darker Blue.
  - Secondary: Outline Blue border. Hover: Light Blue background.
- **Cards**:
  - White background, subtle shadow (`box-shadow: 0 4px 6px rgba(0,0,0,0.05)`).
  - Hover effect: Lift up (`transform: translateY(-5px)`).
- **Icons**:
  - Line style or Duotone style icons (FontAwesome or SVG).

## 5. Layout & Grid

- **Container Width**: Max 1200px (Centered)
- **Grid System**: 12 Column Grid for desktop, 1 Column for mobile.
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px ~ 1024px
  - Desktop: > 1024px
