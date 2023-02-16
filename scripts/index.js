import Card from './Card.js';

import {validationConfig, ValidationForm} from './validate.js';

console.log(Card)

const popupContainer = document.querySelector('.popup__container');
const popupEditProfile = document.querySelector('.editprofile');
//переменные полей ввода
const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="profession"]');
const placeTitleInput = document.querySelector('.popup__input_type_place-title');
const placeImgInput = document.querySelector('input[name="place-img"]');
//Переменные попапа
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession');
const cardEdit = document.querySelector('.profile__plus-button');
const profileEdit = document.querySelector('.profile__edit');
const popupCardEdit = document.querySelector('.editcard');
const popupSubmitCard = document.querySelector('.popup__submit-editcard');
const popupSubmitProfile = document.querySelector('.popup__submit-editprofile');
//Переменные изображения
const popupFullImage = document.querySelector('.full-image');
const popupBigImage = document.querySelector('.popup__bigimage');
const popupDescImage = document.querySelector('.popup__descimage');
const popupCloseImage = document.querySelector('.popup__close_image')
//Кнопки закрытия попапов
const popupCloseCard = document.querySelector('.popup__close_card');
const popupCloseProfile = document.querySelector('.popup__close_profile');
//Переменные шаблона
const cardsContainer = document.querySelector('.elements');
//const templateCard = document.querySelector('#elements-template').content;

//Функция открытия попапа
function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keyup', handleCloseByEsc);
}

profileEdit.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditProfile);
});

cardEdit.addEventListener('click', function () {
  openPopup(popupCardEdit);
});

//Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleCloseByEsc);
}

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
})

/*
function createCard(name, link) {
  const cardElement = templateCard.querySelector('.elements__item').cloneNode(true);
  const elementLike = cardElement.querySelector('.elements__like');
  const elementDelete = cardElement.querySelector('.elements__trash');
  const elementImage = cardElement.querySelector('.elements__photo');
  cardElement.querySelector('.elements__title').textContent = name;
  elementImage.src = link;
  elementImage.alt = name;
  elementLike.addEventListener('click', function (event) {
    event.target.classList.toggle('elements__like_active')
  });
  elementDelete.addEventListener('click', function () {
    cardElement.remove()
  });
  elementImage.addEventListener('click', function () {
    openPopup(popupFullImage);
    popupBigImage.src = link;
    popupDescImage.textContent = name;
    popupBigImage.alt = name;
  })
  return cardElement;
}

function addCard(name, link) {
  const element = createCard(name, link);
  cardsContainer.prepend(element);
}

initialCards.reverse().forEach((item) => {
  addCard(item.name, item.link);
}) */

const openPopupImage = (name, link) => {
  openPopup(popupFullImage);
  popupBigImage.src = link;
  popupDescImage.textContent = name;
  popupBigImage.alt = name;
}

popupEditProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});

popupCardEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard({name: placeTitleInput.value, link: placeImgInput.value});
  closePopup(popupCardEdit);
  evt.target.reset();
  popupSubmitCard.disabled = true;
});

//6 Sprint
/*const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  activeButtonClass: 'popup__submit_valid',
  inactiveButtonClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}*/

const handleCloseByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
}

///7 PR
const addCard = (item, templateSelector) => {
  const card = new Card(item, '#elements-template', openPopupImage);
  cardsContainer.prepend(card.generateCard());
}

initialCards.forEach((item) => {
addCard(item);
})

const profileFormValidation = new ValidationForm(popupEditProfile, validationConfig);
const cardFormValidation = new ValidationForm(popupCardEdit, validationConfig);

profileFormValidation.enableValidaion();
cardFormValidation.enableValidaion();
