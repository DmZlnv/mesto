import Card from '../components/Card.js';
import Section  from '../components/Section.js';
import Popup from '../components/Popup.js'
import { PopupWithForm } from '../components/PopupWithForm.js';
import './index.css';

import {FormValidator} from '../components/FormValidator.js';
import {initialCards, validationConfig} from '../utils/constants.js';

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
} from '../utils/constants.js'
import UserInfo from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

const popupContainer = document.querySelector('.popup__container');

//переменные полей ввода


//Функция открытия попапа
/*function openPopup(item) {
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
})*/

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
})

const openPopupImage = (name, link) => {
  openPopup(popupFullImage);
  popupBigImage.src = link;
  popupDescImage.textContent = name;
  popupBigImage.alt = name;
}*/

const openPopupImage = new PopupWithImage('.full-image');

openPopupImage.setEventListeners();

function getPopupImage(name, link) {
  openPopupImage.open(name, link)
}


/*
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
/*
const addCard = (item) => {
  cardsContainer.prepend(createCard(item));
}

initialCards.forEach((item) => {
addCard(item);
})*/


/////CARD
//Создание карточки

const createCard = (item) => {
  const card = new Card(item, '#elements-template', getPopupImage);
  return card.generateCard();
}

//открытие карточки

function openAddCard() {
  addCard.open();
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

const addCard = new PopupWithForm ('.editcard', (item) => {
  cardList.addItem(createCard(item));
  console.log(popupCardEdit);
  addCard.close();
});

addCard._setEventListeners();

cardEdit.addEventListener('click', () => {
  openAddCard();
});


//Инфорация о пользователе
const userInfo = new UserInfo({name: nameProfile, profession: jobProfile})
console.log(userInfo)



const getEditProfile = new PopupWithForm ('.editprofile', profileSubmit);
getEditProfile._setEventListeners();

profileEdit.addEventListener('click', () => {
  getEditProfile.open();
  nameInput.value = userInfo._nameUser.textContent
  jobInput.value = userInfo._jobUser.textContent
  userInfo.getUserInfo();
})



/*profileEdit.addEventListener('click', () => {
  userInfo.setUserInfo({name: nameInput.textContent, job: jobInput.textContent})


  editProfile.setUserInfo;
})*/



function profileSubmit(name, profession) {
  userInfo.setUserInfo(name, profession);
  getEditProfile.close();
}


console.log(FormValidator);
console.log(validationConfig)

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(formElement, validationConfig);
    formValidator.enableValidation();
  });
}
enableValidation(validationConfig);
