
class Card {
  constructor(data, templateSelector, openPopupImage) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.elements__item')
    .cloneNode(true);

    return cardElement
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.elements__like');
    this._cardImage = this._element.querySelector('.elements__photo')


    this._element.querySelector('.elements__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();



    return this._element
  }

  _setEventListeners() {
    const deleteButton = this._element.querySelector('.elements__trash')
    deleteButton.addEventListener('click', () => {this._deleteCard()})

    this._likeButton.addEventListener('click', () => {
      this._toggleLike()
    })
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick()
    })

  }

  _toggleLike() {
    this._likeButton.classList.toggle('elements__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _handleImageClick() {
    this._openPopupImage(this._name, this._link);
  }


}


export default Card
