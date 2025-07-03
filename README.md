# 포트폴리오 웹사이트

현대적이고 반응형인 개인 포트폴리오 웹사이트입니다. React, Tailwind CSS, Framer Motion을 활용하여 제작되었습니다.

## 🚀 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브한 애니메이션
- **현대적인 UI**: Tailwind CSS로 구현된 깔끔하고 모던한 디자인
- **섹션별 네비게이션**: 스무스 스크롤을 통한 섹션 이동
- **프로젝트 필터링**: 카테고리별 프로젝트 필터링 기능
- **연락처 폼**: 사용자와의 소통을 위한 연락처 폼

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 16.0 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Navbar.jsx      # 네비게이션 바
│   ├── Hero.jsx        # 히어로 섹션
│   ├── About.jsx       # 소개 섹션
│   ├── Skills.jsx      # 기술 스택 섹션
│   ├── Projects.jsx    # 프로젝트 섹션
│   ├── Contact.jsx     # 연락처 섹션
│   └── Footer.jsx      # 푸터
├── App.jsx             # 메인 앱 컴포넌트
├── main.jsx            # 앱 진입점
└── index.css           # 전역 스타일
```

## 🎨 커스터마이징

### 색상 테마 변경
`tailwind.config.js` 파일에서 primary 색상을 수정하여 테마를 변경할 수 있습니다:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... 원하는 색상으로 변경
  }
}
```

### 콘텐츠 수정
각 컴포넌트 파일에서 다음 내용을 수정할 수 있습니다:
- 개인 정보 (이름, 이메일, 전화번호 등)
- 프로젝트 목록
- 기술 스택
- 소셜 미디어 링크

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 주요 섹션

1. **Hero Section**: 첫인상을 위한 메인 섹션
2. **About Section**: 개인 소개 및 경력 정보
3. **Skills Section**: 기술 스택 및 숙련도
4. **Projects Section**: 포트폴리오 프로젝트
5. **Contact Section**: 연락처 정보 및 메시지 폼

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

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!

