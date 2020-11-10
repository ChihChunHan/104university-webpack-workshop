export default class {
  constructor(){}

  createTag(tag) {
    this.node = document.createElement(tag)
    return this

  }

  addText(text) {
    this.node.appendChild(document.createTextNode(text))
    return this
  };
};
