"use strict";

const markup = `
  <div>
    <nav>This is a Navigation</nav>
    <p>This is a Paragrap</p>
  </div>

  <div>
    <button>Click Me</button>
  </div>
`;

const newDOM = document.createRange().createContextualFragment(markup);
const newElements = [...newDOM.querySelectorAll("*")];
const currentElement = [...document.body.getElementsByTagName("*")];

newElements.forEach((newElement, index) => {
  if (
    !newElement.isEqualNode(currentElement[index]) &&
    newElement.firstChild?.nodeValue.trim()
  ) {
    currentElement[index].textContent = newElement.textContent;
  }
});
