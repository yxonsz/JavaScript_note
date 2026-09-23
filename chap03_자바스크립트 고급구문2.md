# JavaScript 고급 구문

---

# 1. json-server 설치하기

1. 구글에서 npm json server 검색 후 사이트 이동, install과 usage 확인
2. bootcamp 폴더 아래에 json-server 폴더 생성
3. 터미널로 돌아와 cd json-server 로 경로 변경
4. 터미널창을 열고 c...\bootcamp\json-server>npm install -g json-server 명령어로 설치
5. json-server에 db.json 파일을 작성
6. 터미널에서 c...\bootcamp\json-server>npx json-server db.json 로 서버를 실행
7. 서버 동작 확인

---

# 2. 서버와 클라이언트 통신
1. 동기 통신 :
     1. HTTP 통신(동기 통신)
        - request(클라이언트) <-> response(서버)의 관계에서 응답이 오기 전까지 다른 프로그램 실행 불가
        - 요청과 응답이 발생 시 화면의 refresh 작업이 발생, 깜빡이는 증상 발생
       
2. 비동기 통신 :
     1. Ajax-Asynchronous Javascript and XML (비동기 통신)
        - request(클라이언트) <-> response(서버)의 동작 중에도 다른 프로그램 구동 가능
        - 효율적, 화면 전체를 refresh 하지 않고 데이터를 전송하거나 받는 것이 가능
        - 클라이언트와 서버가 데이터 통신을 하기 위해서 XMLHttpRequest 객체를 이용하여 구현
        - XMLHttpRequest 객체를 이용하여 db.json 중 posts데이터 가져오기를 해보자
        - 참고 1:
            - XMLHttpRequest 객체를 이용한 HTTP method 통신 방법

| 종류 | 의미 | 상태 |
|---|---|---:|
| GET | 조회 | 200 |
| POST | 생성 | 201 |
| PUT | 수정 | 200 |
| DELETE | 삭제 | 200 |
        - 참고 2 :
            - 객체 생성 const xhr = new XMLHttpRequest();
            - 요청을 보낼 준비 xhr.open("GET", "https://localhost:3000/posts");
            - 컨텐츠 타입 설정 xhr.setRequestHeader("content-type", "applcation/json:);
            - 실제 요청 전송 xhr.send();
            - 응답이 오는 순간 동작하는 함수 onland() 작성
              

```javascript
xhr.onland = () => {
  if (xhr.status === 200) {
    ;
  }
}
              
