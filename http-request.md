0## HTTP Request status codes
HTTP 상태 코드는 특정 HTTP 요청에 대한 상태를 나타내준다. 클라이언트와 서버가 분리된 업무 환경 뿐만 아니라 API 통신을 하기 위해서는 기본적으로 알아두면 좋을 듯 하다.
 
### Success status(2XX)
해당 상태들은 클라이언트에서 요청한 동작을 수신하여 이해해서 성공적으로 처리했음을 의미 한다. 

| Status | Message | Information
| :--- | :--- | :---
| 200 | OK | 요청 성공(단, HTTP method에 따라 성공 의미는 다름)
| 201 | Created | 요청이 성공하여, 새로운 리소스가 생성(put, post methods에 해당)
| 202 | Accepted | 요청을 성공적으로 수신하였으나 처리되지 않음. 비동기 처리에서 사용하며 response 에는 결과가 포함되지 않을 수도 있음.

### Redirect status(3xx)
해당 상태들을 클라이언트에서 요청을 한 후, 그 요청을 마무리하기 추가적인 액션을 취해야 함을 의미한다.

| Status | Message | Information
| :--- | :--- | :---
| 301 | Moved Permanently | 요청한 리소스의 URI가 영구적으로 변경되었음을 의미하며, 새로운 URI를 response 에 포함.
| 302 | Found | 요청한 리소스의 URI가 임시적으로 변경되었으며, 이후에는 요청한 리소스의 URI 로 돌아올 예정임. 

### Error in client status(4xx) 
해당 상태는 클라이언트의 요청에 뭔가의 오류가 있음을 의미한다.

| Status | Message | Information
| :--- | :--- | :---
| 400 | Bad Request | 클라이언트에 보낸 요청을 서버에서 이해할 수 없음
| 401 | Unauthorized | 요청한 리소스에 대한 권한이 없음을 의미(인증되지 않은 경우) 
| 403 | Forbidden | 요청한 리소스에 대한 접근 권한이 없음을 의미하며 401과 다른점은 서버에서는 요청자를 알고 있으나, 인증여부 상관없이 비공개인 경우
| 404 | Not Found | 요청한 리소스의 URI가 없음을 의미
| 405 | Method Not Allowed | 요청한 리소스의 URI에 요청한 메소드가 정의되어 있지 않을 경우

### Error in server status(5xx)
4xx는 클라이언트의 오류일 경우라고 한다면, 해당 상태는 서버에 오류가 있음을 의미한다.

| Status | Message | Information
| :--- | :--- | :---
| 500 | Internal Server Error | 서버 내부에 오류가 있어 요청을 수행할 수 없음 
| 502 | Bad Gateway | 서버가 게이트웨이나 프록시 역할을 하고 있거나 또는 업스트림 서버에서 잘못된 응답을 받음
| 503 | Service Unavailable | 서버가 가부하에 걸렸거나, 유지보수를 위하여 접근이 거부

---

## 출처
- [MDN 공식 홈페이지](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
- [Wiki 백과](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)
- [Spoqa 기술블로그](https://spoqa.github.io/2013/06/11/more-restful-interface.html)
