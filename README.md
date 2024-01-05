# Drag_On
### 프로젝트 소개
<img src="https://github.com/11th-LikeLion-DragOn/DragOn_Front/assets/100662232/cdfdf55f-0c3c-41ab-b9c3-dead9a32848d" width="100%" /> 
🐉 새해맞이 목표를 세우는 당신을 위한 챌린지 서비스 drag-on 🐉 <br />
유연한 목표 달성 방식과 친구 간 달성률 공유를 통해 지치지 않는 챌린지 성공을 경험해요🔥

### 주요기능 소개

 <details>
<summary>챌린지 관리하기</summary>
<img src="https://github.com/11th-LikeLion-DragOn/DragOn_Front/assets/100662232/1a71679c-6209-4a31-b91f-7e430b6c01b4" width="200" /> 
  <img src="https://github.com/11th-LikeLion-DragOn/DragOn_Front/assets/100662232/393a8c3f-7bd2-4d6e-ba4e-888ac4bb5363" width="200" /> 
  <img src="https://github.com/11th-LikeLion-DragOn/DragOn_Front/assets/100662232/989dce06-ee44-4b5b-bed1-d0637f05433a" width="200" /> 
  <br />   <br />
✅ 챌린지 최대 3개까지 생성 가능 <br />
✅ 하나의 챌린지에 목표 최대 3개 <br />
✅ 일정기간 성공 시 드래곤볼 🔮 <br />
✅ 완료하지 못한 날은 챌린지 메꾸기로 빈 날짜 채우기 <br />
✅ 내 친구의 챌린지에 반응 남기기

</details>

 <details>
<summary>챌린지 성향 테스트</summary>
<img src="https://github.com/11th-LikeLion-DragOn/DragOn_Front/assets/100662232/8ba5843c-a104-47bd-a1fd-fc43ef168b52" width="200" />  
  <img src="https://github.com/11th-LikeLion-DragOn/DragOn_Front/assets/100662232/a3245da5-dca2-46e7-bfa4-f93f228a6d85" width="220"  />  
  
<br />  <br />
✅ 도전 과제를 수행할 때 나의 성향 확인 🐲 <br />
✅ 용의 해를 맞은 드래곤볼 컨셉으로 성향에 따라 달라지는 여의주

</details>


### 프론트엔드 개발자

|                           김가영                            |                             이다빈                             |
| :---------------------------------------------------------: | :------------------------------------------------------------: |
|               <img src="https://github.com/11th-LikeLion-DragOn/DragOn_Front/assets/126054466/bc9651ce-f7d2-4866-9c26-22dc348b8158" width="100" height="100"/>               |                <img src="https://github.com/11th-LikeLion-DragOn/DragOn_Front/assets/100662232/46d5d753-0dbc-4846-9010-e694a350b0d0" width="100" height="100"/>                 |
| 로그인 & 회원가입 <br /> 홈 화면<br /> 챌린지 메꾸기 페이지 | 챌린지 관리 페이지 <br /> 챌린지 성향 테스트 <br /> 설정페이지 |


### 기술 스택 및 라이브러리

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white" height="29px"/> <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white" height="29px">


### 파일구조

```
📂 public
⎪   └─  index.html
📂 src
⎪  📂 api
⎪   └─ challenge.js
⎪   └─ https.js
⎪   └─ user.js
├─ 📂 components
⎪  ⎪   └─ 📂 _common                    ▶︎ 공통 컴포넌트 
⎪  ⎪   ⎪   └─ TopBar.js 
⎪  ⎪   ⎪   └─ InputBox.js 
⎪  ⎪   └─ 📂 MainPage
⎪  ⎪   └─ 📂 Signupge     
⎪  ⎪   └─ 📂 ChallengeListPage
⎪  ⎪   └─ 📂 SetPeriodPage
⎪  ⎪   └─ 📂 SettingPage    
⎪  ⎪   └─ 📂 testchallenge 
⎪  ⎪   └─ 📂 SearchFriendPage  
├─ 📂 pages
⎪  ⎪   └─  MainPage.js
⎪  ⎪   └─  LoginPage.js              
⎪  ⎪   └─  SignupPage.js 
⎪  ⎪   └─  AlarmPage.js
⎪  ⎪   └─  ChallengeListPage.js
⎪  ⎪   └─  ChangeNickPage.js
⎪  ⎪   └─  ChangePasswordPage.js
⎪  ⎪   └─  ExchargePage.js
⎪  ⎪   └─  FillChallengePage.js
⎪  ⎪   └─  FriendMainPage.js
⎪  ⎪   └─  MakeChallengePage.js
⎪  ⎪   └─  SearchFriendPage.js
⎪  ⎪   └─  NoChallengeListPage.js
⎪  ⎪   └─  SetPeriodPage.js
⎪  ⎪   └─  SettingPage.js
⎪  ⎪   └─  StartTestPage.js
⎪  ⎪   └─  TestingPage.js
⎪  ⎪   └─  TestResultPage.js
⎪  📂 assets  
⎪  ⎪   └─ 📂 images                     ▶︎ 페이지별 아이콘/이미지
⎪  ⎪   ⎪   └─ 📂 Main
⎪  ⎪   └─ 📂 icons                      ▶︎ 공통 사용 아이콘
├─   App.js                    
└─   index.js
├─ .gitignore
├─ package.json
├─ README.md
```
