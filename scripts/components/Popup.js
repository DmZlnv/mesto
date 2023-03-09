export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popup.querySelector('.popup__close')
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleCloseByEsc);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleCloseByEsc);
  }

  _handleCloseByEsc (evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _setEventListeners() {
    this._popupCloseBtn.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    })
  }
}
