export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  activeButtonClass: 'popup__submit_valid',
  inactiveButtonClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}


export const popupEditProfile = document.querySelector('.editprofile');
export const nameInput = document.querySelector('input[name="name"]');
export const jobInput = document.querySelector('input[name="profession"]');
export const placeTitleInput = document.querySelector('.popup__input_type_place-title');
export const placeImgInput = document.querySelector('input[name="place-img"]');
//Переменные попапа
export const nameProfile = document.querySelector('.profile__name');
export const jobProfile = document.querySelector('.profile__profession');
export const cardEdit = document.querySelector('.profile__plus-button');
export const profileEdit = document.querySelector('.profile__edit');
export const popupCardEdit = document.querySelector('.editcard');
//const popupSubmitCard = document.querySelector('.popup__submit-editcard');
//const popupSubmitProfile = document.querySelector('.popup__submit-editprofile');
//Переменные изображения
export const popupFullImage = document.querySelector('.full-image');
export const popupBigImage = document.querySelector('.popup__bigimage');
export const popupDescImage = document.querySelector('.popup__descimage');
//const popupCloseImage = document.querySelector('.popup__close_image')
//Кнопки закрытия попапов
//const popupCloseCard = document.querySelector('.popup__close_card');
//const popupCloseProfile = document.querySelector('.popup__close_profile');
//Переменные шаблона
export const cardsContainer = document.querySelector('.elements');
