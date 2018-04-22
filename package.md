```json
{
  "name": "프로젝트의 이름",
  "description": "프로젝트의 간단한 설명",
  "version": "프로젝트의 버전을 기입",
  "author": "작성자를 기입",
  "license": "라이센스를 기입",
  "private": true,
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  "dependencies": {
    "운영 단계에서 필요한 의존성 모듈"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  "devDependencies": {
    "개발 단계에서 필요한 의존성 모듈"
  }
}
```

## Name
프로젝트의 이름을 적는 곳으로서, 만약 node package에 직접 만든 패키지를 등록하려고 한다면 version과 마찬가지로 필수로 입력해주어야 한다. 다만 그렇지 않다면 해당 값은 선택값이다. 한 블로그에서 해당 값이 없으면 설치가 되지 않는다고 되어 있으나, 실제 테스트를 해보니 설치되는 것을 확인 했다. version과 name은 함께 해당 프로젝트의 유니크한 값이 된다.

### Name 작성법
- 이름은 214 이하의 글자로 작성되어야 한다.
- 이름은 점(.)이나 언더스코어(_)으로 시작될 수 없다.
- 대문자를 포함하면 안된다.
- 이름은 폴더의 이름과, 커맨드 라인의 인자, 그리고 URL의 일부가 됨으로, `non-URL-safe` 를 포함할 수 없다.

### Name 작성팁
- core 노드 모듈과 같은 이름을 사용하지 않는다.
- 'JS'나 'Node' 라는 단어를 이름으로 사용하지 않는다. package.json을 작성하기 전에 이미 js라는 것을 알 수 있으며, `engines` 영역에 engine에 대해서 정의할 수 있다.
- 이름은 require()의 인자로 사용되므로, 짧게 작성하되 직관적이어야 한다.
- 만약 해당 모듈의 이름이 등록되었는지 확인하려면 [https://www.npmjs.com/](https://www.npmjs.com/) 에서 확인 할 수 있다.


## Version

| 표기                | 설명
| :---               | :---
| version            | version 과 일치.
| &gt;version        | 명시한 version보다 높아야함 
| &gt;=version       | 명시한 version보다 높거나 같아야함
| &lt;version        | 명시한 version보다 낮아야함
| &lt;=version       | 명시한 version보다 낮거나 같아야함
| ~version           | version 과 근사한 버전.
| ^version           | version 과 호환되는 것.
| 1.2.x              | 1.2.0, 1.2.1, 등등. 1.3.0은 제외
| *                  | 모든 버전
| ""                 | * 와 같음
| version1 - version2| &gt;= version1 &lt;= version2 과 같음.
| range1 \|\| range2 | range1 또는 range2

