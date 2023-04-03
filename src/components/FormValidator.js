export class FormValidator {
  constructor(formElement, validationConfig)
  {
    this._formElement = formElement;
    this._validationConfig = validationConfig;
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._inputElement = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    //this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._activeButtonClass = validationConfig.activeButtonClass;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

  }

  _showInputError (input, validationMessage) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = validationMessage;
    input.classList.add(this._errorClass);
  }

  _hideInputError (input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass)
}

  _checkInputValidity (input) {
    if (input.validity.valid) {
        this._hideInputError(input);
    }
    else {
        this._showInputError(input, input.validationMessage);
    }
}

  _hasInvalidInput() {
    return this._inputElement.some((input) => !input.validity.valid)
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
        this._buttonElement.classList.remove(this._activeButtonClass)
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }
    else {
      this._buttonElement.classList.add(this._activeButtonClass)
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
}

_setEventListeners() {
  this._toggleButtonState();
  this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
          this._toggleButtonState()
      }, 0)
  })
  this._inputElement.forEach((input) => {
      input.addEventListener('input', () => {
          this._checkInputValidity(input);
          this._toggleButtonState();
      })
  })
}

enableValidation() {
  this._setEventListeners()
}

resetValidation() {
  this._toggleButtonState();

  this._inputElement.forEach((input) => {
    this._hideInputError(input)
  });

}



}



/*
function showInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass)
}

function checkInputValidity(formElement, inputElement, config) {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    }
    else {
        showInputError(formElement, inputElement, config);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid)

}

function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.remove(config.activeButtonClass)
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true;
    }
    else {
        buttonElement.classList.add(config.activeButtonClass)
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(inputList, buttonElement, config)
        }, 0)
    })
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        })
    })
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, config)
    })
}

*/
//export {validationConfig, ValidationForm};
