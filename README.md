# CosmoICT Website Project

이 프로젝트는 코스모아이씨티(CosmoICT)의 기업 홈페이지 구축을 위한 소스코드 및 문서입니다.
요청하신 모든 요구사항(1~10)을 반영하여 구성되었습니다.

## 📁 폴더 구조

```
/
├── index.html              # 메인 홈페이지 (랜딩 페이지)
├── about.html              # 회사 소개 페이지
├── products_axgate.html    # AXGATE 제품 상세 페이지
├── products_fortinet.html  # FORTINET 제품 상세 페이지
├── products_cad.html       # CAD 솔루션 비교 페이지 (ZXY vs ZW)
├── services.html           # 구축 및 기술지원 서비스 페이지
├── contact.html            # 고객 문의 및 견적 요청 페이지
├── css/
│   └── style.css           # 전체 디자인 스타일 (CSS Variables, Reset, Components)
└── docs/
    └── IA_StyleGuide.md    # 홈페이지 메뉴 구조(IA) 및 디자인 스타일 가이드
```

## 🎨 디자인 및 구현 특징

1. **B2B 신뢰성 강조**: Deep Navy(#0A192F)와 Cosmo Blue(#0056B3)를 메인 컬러로 사용하여 보안 기업의 신뢰감을 주었습니다.
2. **반응형 웹**: PC, 태블릿, 모바일 환경에 맞춰 레이아웃이 최적화됩니다 (CSS Grid/Flex 활용).
3. **모듈화된 CSS**: 버튼, 카드, 섹션 등 재사용 가능한 컴포넌트 단위로 스타일을 작성하여 유지보수가 용이합니다.
4. **웹 접근성 고려**: 시맨틱 태그(header, nav, section, footer)를 사용하여 구조를 잡았습니다.

## 🚀 실행 및 배포 방법

### 로컬에서 확인

1. 이 폴더를 VS Code 등으로 엽니다.
2. `index.html` 파일을 브라우저로 엽니다.

### GitHub Pages 배포 절차

1. GitHub 저장소를 생성하고 소스 코드를 Push합니다.
2. 저장소 **Settings > Pages** 메뉴로 이동합니다.
3. 배포 소스를 `main` 브랜치의 `/ (root)` 폴더로 설정하고 **Save**를 클릭합니다.
4. 배포가 완료되면 `https://<USER_NAME>.github.io/<REPO_NAME>/` 주소에서 확인할 수 있습니다.

## 📝 주요 포함 내용

- **회사 소개**: 미션, 비전, 핵심 가치 및 강점
- **제품 소개**: AXGATE/FORTINET 스펙 및 구축 사례, CAD 비교 테이블
- **서비스**: 구축 프로세스 및 SLA(서비스 수준 협약) 안내
- **문의하기**: 개인정보 동의가 포함된 상담 신청 폼 UI
