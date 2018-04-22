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
    // 운영 단계에서 필요한 의존성 모듈 
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  "devDependencies": {
    // 개발 단계에서 필요한 의존성 모듈 
  }
}
```


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

