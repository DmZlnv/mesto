class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#elements-template')
    .content
    .querySelector('.elements__item')
    .cloneNode(true);

    return cardElement
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__title').textContent = this._name;
    this._element.querySelector('.elements__photo').src = this._link;
    this._element.querySelector('.elements__photo').alt = this._name;

    return this._element
  }

  _setEventListeners() {
    const deleteButton = this._element.querySelector('.elements__trash')
    deleteButton.addEventListener('click', () => {this._element.remove()})
    const likeButton = this._element.querySelector('.elements__like')
    likeButton.addEventListener('click', () => {
      {this._handleLikeClick(evt)};
    })
    const enlargeImage = this._element.querySelector('.elements__photo')
    enlargeImage.addEventListener('click', () => {
      {this.element._openPopupCard()};
    })

  }

  _deleteCard() {
    this._element.remove();
  }

  _openPopupCard() {
    this._element.classList.add('popup_opened')
  }

  _closePopupCard() {

  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle('elements__like_active');
  }
}


export default Card;
