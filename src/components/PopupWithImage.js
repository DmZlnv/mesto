import Popup from './Popup.js'
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupBigImage = document.querySelector(popupSelector).querySelector('.popup__bigimage');
    this._popupDesc = document.querySelector(popupSelector).querySelector('.popup__descimage');

  }

  open(name, link) {
    super.open();
    this._popupBigImage.src = link;
    this._popupBigImage.alt = name;
    this._popupDesc.textContent = name;

  }

  setEventListeners() {
    super._setEventListeners();
  }

  _close() {
    super.close();
    this.popupSelector.reset();
  }
}
