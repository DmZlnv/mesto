import Popup from './Popup.js'
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupBigImage = this._popup.querySelector('.popup__bigimage');
    this._popupDesc = this._popup.querySelector('.popup__descimage');

  }

  open(name, link) {
    super.open();
    this._popupBigImage.src = link;
    this._popupBigImage.alt = name;
    this._popupDesc.textContent = name;

  }



}
