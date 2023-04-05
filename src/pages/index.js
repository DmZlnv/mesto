import Card from '../components/Card.js';
import Section  from '../components/Section.js';
import Popup from '../components/Popup.js'
import { PopupWithForm } from '../components/PopupWithForm.js';

import {FormValidator} from '../components/FormValidator.js';
import {initialCards, validationConfig} from '../utils/constants.js';
import './index.css'

import {
  nameInput,
  jobInput,
  placeTitleInput,
  placeImgInput,
//Переменные попапа
nameProfile,
jobProfile,
cardEdit,
profileEdit,
popupCardEdit,
popupFullImage,
popupBigImage,
popupDescImage,
cardsContainer
} from '../utils/constants.js'
import UserInfo from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

const popupContainer = document.querySelector('.popup__container');

const popupImage = new PopupWithImage('.full-image');

popupImage._setEventListeners();

function getPopupImage(name, link) {
  popupImage.open(name, link)
}

const createCard = (item) => {
  const card = new Card(item, '#elements-template', getPopupImage);
  return card.generateCard();
}

//открытие карточки

function openAddCard() {
  popupAddCard.open();
}

//Вывод стека карточек

const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    //const card = new Card(item, '#elements-template');
    cardList.addItem(createCard(item))
  }
}, cardsContainer);

cardList.renderItems(initialCards);

//Добавление карточки

const popupAddCard = new PopupWithForm ('.editcard', (item) => {
  cardList.addItem(createCard(item));
  popupAddCard.close();
});

popupAddCard.setEventListeners();

cardEdit.addEventListener('click', () => {
  openAddCard();
});


//Инфорация о пользователе
const userInfo = new UserInfo({name: nameProfile, profession: jobProfile})



const popupEditProfile = new PopupWithForm ('.editprofile', profileSubmit);
popupEditProfile.setEventListeners();

profileEdit.addEventListener('click', () => {
  popupEditProfile.open();
 // nameInput.value = userInfo._nameUser.textContent
  nameInput.value = userInfo.getUserInfo().name
  jobInput.value = userInfo.getUserInfo().profession
})


function profileSubmit(name, profession) {
  userInfo.setUserInfo(name, profession);
  popupEditProfile.close();
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(formElement, validationConfig);
    formValidator.enableValidation();
  });
}
enableValidation(validationConfig);

