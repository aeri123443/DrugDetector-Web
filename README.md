# DrugDetector-Web

마약 섭취 감지 시스템의 **관리자용 웹 대시보드**입니다.
[DrugDetector-Server](https://github.com/aeri123443/DrugDetector-Server)에서 감지 이력을 받아 표로 보여줍니다.

## 주요 기능

- **이력 및 알림 관리**: 감지된 사용자의 ID, 이름, 성별, 나이, 시간, 장소, EEG/ECG 판정 결과, 비고를 표로 조회
- 상단 고정 헤더와 내비게이션 (사용자 관리 / 이력 및 알림 관리 / 통계 분석)
- 표 헤더 고정(sticky), 스크롤 영역 처리

> 현재는 **이력 및 알림 관리** 화면만 구현되어 있습니다. 사용자 관리, 통계 분석은 메뉴만 있습니다.

## 기술 스택

- React 18 (Create React App)
- React Router v6
- CSS (CSS 변수 기반 컬러 팔레트, Pretendard 폰트)

## 디렉토리 구조

```
src/
├── index.js                 # 진입점
├── App.js                   # 라우팅 정의
├── pages/
│   └── logsandalerts.js     # 이력 및 알림 관리 페이지 (서버 API 호출, 테이블 렌더링)
├── constants/
│   └── header.js            # 공통 헤더 / 내비게이션
├── styles/
│   ├── color.css            # 컬러 변수
│   ├── body.css             # 기본 레이아웃, 폰트
│   ├── header.css           # 헤더, 메인 영역 레이아웃
│   └── table.css            # 이력 테이블
└── assets/
    ├── logo.png
    └── icon_user.png
```

## 라우팅

| 경로 | 페이지 |
|---|---|
| `/` | 이력 및 알림 관리 |
| `/LogsAndAlerts/*` | 이력 및 알림 관리 |

## 서버 연동

페이지가 처음 렌더링될 때 서버에서 감지 이력을 가져옵니다.

```
GET http://127.0.0.1:11000/api/getlogs
```

엔드포인트는 `src/pages/logsandalerts.js`의 `ENDPOINT` 상수에 정의되어 있습니다.

## 시작하기

### 사전 준비

- Node.js 18 이상
- [DrugDetector-Server](https://github.com/aeri123443/DrugDetector-Server)가 `11000` 포트에서 실행 중이어야 합니다.

### 실행

```bash
npm install
npm start
```

`http://localhost:5600`에서 확인할 수 있습니다. (`package.json`의 start 스크립트에서 포트를 5600으로 지정)

> start 스크립트가 `export PORT=5600 && ...` 형식이라 macOS/Linux에서 동작합니다. Windows에서는 `set PORT=5600 && react-scripts start`로 바꾸거나 `.env`에 `PORT=5600`을 지정하세요.

### 빌드

```bash
npm run build
```

## 개선 예정

- 사용자 관리, 통계 분석 페이지 구현
- 서버 주소를 환경 변수(`REACT_APP_API_URL`)로 분리
- 실시간 갱신(폴링 또는 WebSocket)과 신규 감지 알림
- JSX의 `class` 속성을 `className`으로 변경하고, 리스트에 `key` 추가
- 헤더의 사용자 이름(`홍길동`)을 로그인 정보와 연동
