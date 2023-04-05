import Popup from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const formValueArray = {};
    this._inputList.forEach(input => {
      formValueArray[input.name] = input.value;
    });

    return formValueArray

  }

  setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submitForm(this._getInputValues());
      console.log(this._getInputValues())
      this._close();
    })

  }

  _close() {
    super.close();
    this._form.reset();
  }

}
