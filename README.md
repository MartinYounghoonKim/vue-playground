# vue-playground

## Vitual Dom(가상돔이란?)

[Youtube 동영상보기](https://www.youtube.com/watch?v=BYbgopx44vo)

### Vitual Dom이 나오게 된 배경

- Dom이란 Document Object Model의 약자로서 구조화된 nodes와 property 그리고 method를 갖고 object로 문서를 표현 [Dom의 methods와 property](https://www.w3schools.com/jsref/dom_obj_all.asp)
- 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

### Dom의 NodeType 
- [원문 보러가기](https://developer.mozilla.org/ko/docs/Web/API/Node/nodeType)

| Constant              | Value              | Description              
| :---               | :---                     | :---
| Node.ELEMENT_NODE           | 1            | An Element node such as <p> or <div>.
| Node.TEXT_NODE           | 3            | The actual Text of Element or Attr.
| Node.PROCESSING_INSTRUCTION_NODE          | 7            | A ProcessingInstruction of an XML document such as <?xml-stylesheet ... ?> declaration.
| Node.COMMENT_NODE          | 8	            | A Comment node.
| Node.DOCUMENT_NODE         | 9            | A Document node.
| Node.DOCUMENT_TYPE_NODE   | 10            | A DocumentType node e.g. <!DOCTYPE html> for HTML5 documents.
| Node.DOCUMENT_FRAGMENT_NODE         | 11            | A DocumentFragment node.

- 위의 테이블과 같은 다양한 Dom NodeType이 존재하며, 이러한 NodeType은 Dom의 고유한 property

```js
let domTree = `<div id="obj">
<div id="children1">children dom</div>
<div id="children2">children dom</div>
</div>`;
document.write(domTree);
let obj = document.getElementById('obj');
let children1 = document.getElementById('children1');
let children2 = document.getElementById('children2');

// 위의 코드를 실행한 후, 아래의 log를 하나씩 실행
console.log(children1.nodeType);
console.log(children1.nextSibling.nodeType);
console.log(children1.nextSibling.nextSibling.nodeType);
```

- 이러한 Dom 노드 속에서 우리가 원하는 Node를 탐색하고 제어하는 것은 큰 비용이 든다.

<img src='./dom-flow.png'>

- HTML, CSS를 브라우저에 전달
- 브라우저 엔진에서 각각을 파싱 
- Dom tree와 CSS 규칙이 결합해 `Render tree` 를 형성
> Render tree 란 페이지를 랜더링하는 데 필요한 노드만 포함하며, 예를 들어 display: none, <head> 에 있는 내용은 포함하지 않는다. 

- Reflow라는 Dom element의 좌표 등과 같은 레이아웃 배치 작업이 일어남
- Repainting 이라는 색을 입히는 과정이 일어나며 시각적인 작업이 일어남
- 유저에게 제공
 
이러한 성능을 개선하기 위해 Vitual Dom(가상돔) 이라는 개념이 나옴

- Dom의 추상화 개념으로 Real Dom의 복사본이라고 생각하면 쉬움
- Dom에 변화가 일어나면 변화된 부분만 감지하여, 해당 부분만 변경해주는 개념 [간단한 예시](https://github.com/nhnent/fe.javascript/wiki/Reflow%EC%99%80-Repaint#%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95)

## Setting deployd

```bash
# Homebrew가 없을경우
$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"

# install mongodb
$ brew install mongodb

# install deployd global
$ npm install -g deployd
```

## Restful api methods

### Get

- Get Method 에는 2가지의 경우에 사용할 수 있다.

> * 모든 데이터
> * 모든 데이터 중 특정 데이터


| Task | Route | Accepts | Returns |
| :--- | :---  | :---    | :---
| **Listing Data** | /todos | Nothing | An array of objects |
| **Getting an object** | /todos/:id | Nothing | A single object |

- 특정 데이터를 보는 경우는 Primary Key 를 뒤에 param으로 붙여준다.
- Return 값으로는 모든 데이터를 호출한 경우는 Array 형태로, 특정 데이터만 호출한 경우에는 Object 형태로 받는다.

### Post

- Get Method는 새로운 데이터를 추가하는 경우 사용할 수 있다.

| Task | Route | Accepts | Returns |
| :--- | :---  | :---    | :---
| **Creating an object** | /todos | A single object | The saved object (or errors) |

- 해당 Method를 사용할 때는 새로 추가할 데이터를 Object 형태로 요청해야 한다.
- Return 값으로는 새로 추가되는 데이터를 Object 형태로 받는다.

### Put

- Put Method는 기존 데이터를 Update 할 경우에 사용할 수 있다.

| Task | Route | Accepts | Returns |
| :--- | :---  | :---    | :---
| **Updating an object** | /todos/:id | A single object | The saved object (or errors) |

- 해당 Method를 사용할 때는 새로 추가할 데이터를 Object 형태로 요청해야 한다.
- Return 값으로는 새로 변경되는 데이터를 Object 형태로 받는다.

### Delete

- Delete Method는 기존 데이터를 삭제할 때 사용한다.

| Task | Route | Accepts | Returns |
| :--- | :---  | :---    | :---
| **Deleting an object** | /todos/:id | A single object | Nothing |


- Return 값으로는 아무 것도 받지 않으며, 대체로 responsive의 status 값을 받아 이 후 처리를 한다.`
