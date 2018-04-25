# vue-playground

## Vitual Dom(가상돔이란?)

[Youtube 동영상보기](https://www.youtube.com/watch?v=BYbgopx44vo)

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
