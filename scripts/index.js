const initialCards = [
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



const closeButtons = document.querySelectorAll('.popup__close');
const popupCont = document.querySelector('.popup__container');
const popupEditProfile = document.querySelector('.editprofile');
const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="profession"]');
const placeTitleInput = document.querySelector('.popup__input_type_place-title');

const placeImgInput = document.querySelector('input[name="place-img"]');
//
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession');
const cardEdit = document.querySelector('.profile__plus-button');
const profileEdit = document.querySelector('.profile__edit');
const popupCardEdit = document.querySelector('.editcard');
const popupSubmitCard = document.querySelector('.popup__submit-editcard');
const popupSubmitProfile = document.querySelector('.popup__submit-editprofile');

const popupFullImage = document.querySelector('.full-image');
const popupBigImage = document.querySelector('.popup__bigimage');
const popupDescImage = document.querySelector('.popup__descimage');
const popupCloseImage = document.querySelector('.popup__close_image')
const popupCloseCard = document.querySelector('.popup__close_card');
const popupCloseProfile = document.querySelector('.popup__close_profile');

const arrayCard = document.querySelector('.elements');
const templateCard = document.querySelector('#elements-template').content;
const element = templateCard.querySelector('.elements__item')
const elementLike = element.querySelector('.elements__like');
const elementDelete = element.querySelector('.elements__trash');
const elementImage = element.querySelector('.elements__photo');


//Функция открытия попапа
function openPopup(item) {
  document.addEventListener('keyup', keyHandler)
  item.classList.add('popup_opened');
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
function closePopup(item) {
  document.removeEventListener('keyup', keyHandler)
  item.classList.remove('popup_opened');
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
  arrayCard.prepend(element);
}

initialCards.reverse().forEach((item) => {
  addCard(item.name, item.link);
})


popupEditProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});

popupCardEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard(placeTitleInput.value, placeImgInput.value);
  closePopup(popupCardEdit);
  evt.target.reset();
});

//6 Sprint

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  activeButtonClass: 'popup__submit_valid',
  inactiveButtonClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

function handleSubmit(evt) {
  evt.preventDefault();
  console.log(
    {
      username: nameInput.value,
      profession: jobInput.value,
    }
  )
}




function keyHandler(evt) {
  if (evt.key === 'Escape') {
    const popupList = document.querySelectorAll('.popup_opened')
    popupList.forEach((popup) => {
      if (popup.classList.contains('popup_opened')) {
        closePopup(popup)
      };
    });
  }
}


enableValidation(validationConfig);