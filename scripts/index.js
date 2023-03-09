import Card from './Card.js';
import Section  from './components/Section.js';
import Popup from './components/Popup.js'
import { PopupWithForm } from './components/PopupWithForm.js';

import {FormValidator} from './FormValidator.js';
import {initialCards, validationConfig} from './utils/constants.js';

import {
  popupEditProfile,
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
//const popupSubmitCard = document.querySelector('.popup__submit-editcard');
//const popupSubmitProfile = document.querySelector('.popup__submit-editprofile');
//Переменные изображения
popupFullImage,
popupBigImage,
popupDescImage,
cardsContainer
} from './utils/constants.js'
import UserInfo from './components/UserInfo.js';

const popupContainer = document.querySelector('.popup__container');

//переменные полей ввода


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

/*cardEdit.addEventListener('click', function () {
  openPopup(popupCardEdit);
});*/

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

/*popupCardEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard({name: placeTitleInput.value, link: placeImgInput.value});
  closePopup(popupCardEdit);
  evt.target.reset();
  //popupSubmitCard.disabled = true;
});*/

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

/*const handleCloseByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
}*/

///7 PR
const createCard = (item) => {
  const card = new Card(item, '#elements-template', openPopupImage);
  return card.generateCard();
}

/*
const addCard = (item) => {
  cardsContainer.prepend(createCard(item));
}

initialCards.forEach((item) => {
addCard(item);
})*/

function openAddCard() {
  addCard.open();
}

const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    //const card = new Card(item, '#elements-template');
    cardList.addItem(createCard(item))
  }
}, cardsContainer);

cardList.renderItems(initialCards);


const addCard = new PopupWithForm('.editcard', (item) => {
  cardList.addItem(createCard(item));
  console.log(popupCardEdit);
  addCard.close();
});

addCard._setEventListeners();

const userInfo = new UserInfo({name: nameInput, job: jobInput})

function openEditProfile() {
  const {name, job} = userInfo
}
//const editProfile = new PopupWithForm(popupEditProfile, )

cardEdit.addEventListener('click', () => {
  openAddCard();
});

profileEdit.addEventListener('click', () => {
  userInfo.setUserInfo({name: nameInput.textContent, job: jobInput.textContent})


  editProfile.setUserInfo;
})




/*const profileFormValidation = new FormValidator(popupEditProfile, validationConfig);
const cardFormValidation = new FormValidator(popupCardEdit, validationConfig);


profileFormValidation.enableValidation();
cardFormValidation.enableValidation();
//profileFormValidation.resetValidation();
cardFormValidation.resetValidation();*/

