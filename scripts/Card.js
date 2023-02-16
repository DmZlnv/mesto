
class Card {
  constructor(data, templateSelector, openPopupImage) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
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
    this._likeButton = this._element.querySelector('.elements__like');
    this._enlargeImage = this._element.querySelector('.elements__photo')



    this._element.querySelector('.elements__title').textContent = this._name;
    this._element.querySelector('.elements__photo').src = this._link;
    this._element.querySelector('.elements__photo').alt = this._name;

    this._setEventListeners();



    return this._element
  }

  _setEventListeners() {
    const deleteButton = this._element.querySelector('.elements__trash')
    deleteButton.addEventListener('click', () => {this._element.remove()})
    //const likeButton = this._element.querySelector('.elements__like')
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick()
    })
    //const
    this._enlargeImage.addEventListener('click', () => {
      this._openPopupImage(this._name, this._link);
    })

  }

  _deleteCard() {
    this._element.remove();
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('elements__like_active');
  }
}


export default Card
