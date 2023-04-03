export default class Section {
  constructor({items, renderer}, templateSelector)
  {
    this._renderedItems = items;
    this._renderer = renderer;
    this._template = templateSelector;
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    })
  }

  addItem(card) {
    this._template.prepend(card)
  }

}
