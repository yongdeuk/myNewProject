# 포트폴리오 웹사이트

순수 HTML, CSS, JavaScript로 제작된 현대적이고 반응형인 개인 포트폴리오 웹사이트입니다.

## 🚀 주요 기능

- **순수 웹 기술**: React나 프레임워크 없이 HTML, CSS, JavaScript만으로 구현
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션**: CSS와 JavaScript를 활용한 인터랙티브한 애니메이션
- **현대적인 UI**: 깔끔하고 모던한 디자인
- **섹션별 네비게이션**: 스무스 스크롤을 통한 섹션 이동
- **프로젝트 필터링**: 카테고리별 프로젝트 필터링 기능
- **연락처 폼**: 사용자와의 소통을 위한 연락처 폼
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업과 최신 HTML 기능
- **CSS3**: Flexbox, Grid, 애니메이션, 반응형 디자인
- **JavaScript (ES6+)**: 모듈화된 코드, 이벤트 처리, DOM 조작
- **Font Awesome**: 아이콘 라이브러리
- **Google Fonts**: Inter 폰트

## 📦 설치 및 실행

### 필수 요구사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 웹 서버 (선택사항)

### 실행 방법

#### 방법 1: 직접 파일 열기
```bash
# index.html 파일을 브라우저에서 직접 열기
```

#### 방법 2: 로컬 서버 사용 (권장)
```bash
# Python 3 사용
python -m http.server 8000

# Node.js 사용 (http-server 설치 필요)
npx http-server

# PHP 사용
php -S localhost:8000
```

그 후 브라우저에서 `http://localhost:8000`으로 접속

## 📁 프로젝트 구조

```
portfolio-website/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명서
```

## 🎨 주요 섹션

1. **Hero Section**: 첫인상을 위한 메인 섹션
2. **About Section**: 개인 소개 및 경력 정보
3. **Skills Section**: 기술 스택 및 숙련도
4. **Projects Section**: 포트폴리오 프로젝트 (필터링 기능)
5. **Contact Section**: 연락처 정보 및 메시지 폼
6. **Footer**: 소셜 미디어 링크와 추가 정보

## ✨ 특별한 기능

### 애니메이션 효과
- **스크롤 애니메이션**: 요소들이 화면에 나타날 때 부드러운 애니메이션
- **스킬 프로그레스 바**: 스크롤 시 숙련도 바가 채워지는 애니메이션
- **통계 카운터**: 숫자가 증가하는 애니메이션
- **호버 효과**: 마우스 오버 시 인터랙티브한 효과

### 인터랙티브 기능
- **프로젝트 필터링**: 카테고리별 프로젝트 분류
- **스무스 스크롤**: 섹션 간 부드러운 이동
- **반응형 네비게이션**: 모바일에서 햄버거 메뉴
- **연락처 폼**: 실시간 유효성 검사 및 제출 처리

### 접근성
- **키보드 네비게이션**: Tab 키로 모든 요소 접근 가능
- **스크린 리더 지원**: 적절한 ARIA 라벨과 시맨틱 마크업
- **포커스 관리**: 모바일 메뉴에서 포커스 트랩

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 커스터마이징

### 색상 테마 변경
`styles.css` 파일에서 CSS 변수를 수정하여 테마를 변경할 수 있습니다:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --text-color: #1f2937;
    --bg-color: #ffffff;
}
```

### 콘텐츠 수정
`index.html` 파일에서 다음 내용을 수정할 수 있습니다:
- 개인 정보 (이름, 이메일, 전화번호 등)
- 프로젝트 목록
- 기술 스택
- 소셜 미디어 링크

### 애니메이션 조정
`script.js` 파일에서 애니메이션 타이밍과 효과를 조정할 수 있습니다.

## 🔧 성능 최적화

- **이미지 최적화**: WebP 형식 사용 권장
- **CSS 최적화**: 불필요한 스타일 제거
- **JavaScript 최적화**: 이벤트 리스너 최적화
- **폰트 최적화**: Google Fonts preload 사용

## 🌐 배포

### GitHub Pages
1. GitHub 저장소에 코드 푸시
2. Settings > Pages에서 배포 설정
3. 자동으로 `https://username.github.io/repository-name`에서 접근 가능

### Netlify
1. Netlify에 GitHub 저장소 연결
2. 자동 배포 설정
3. 커스텀 도메인 연결 가능

### Vercel
1. Vercel에 GitHub 저장소 연결
2. 자동 배포 및 CDN 제공
3. 실시간 미리보기

## 🐛 문제 해결

### 일반적인 문제
1. **로컬 서버 없이 실행 시 CORS 오류**: 로컬 웹 서버 사용
2. **폰트가 로드되지 않음**: 인터넷 연결 확인
3. **애니메이션이 작동하지 않음**: JavaScript 활성화 확인

### 브라우저 호환성
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요!

- 이메일: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 감사의 말

- [Font Awesome](https://fontawesome.com/) - 아이콘 제공
- [Google Fonts](https://fonts.google.com/) - Inter 폰트 제공
- [Unsplash](https://unsplash.com/) - 샘플 이미지 제공

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!

