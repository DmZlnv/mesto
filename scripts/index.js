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
  item.classList.remove('popup_opened');
}

//Кнопки закрытия

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});



function createCard(item) {

  const cardElement = templateCard.querySelector('.elements__item').cloneNode(true);
  const elementLike = cardElement.querySelector('.elements__like');
  const elementDelete = cardElement.querySelector('.elements__trash');
  const elementImage = cardElement.querySelector('.elements__photo');

  cardElement.querySelector('.elements__title').textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;


  elementLike.addEventListener('click', function (event) {
    event.target.classList.toggle('elements__like_active')
  });
  elementDelete.addEventListener('click', function () {
    cardElement.remove()
  });

  elementImage.addEventListener('click', function () {
    openPopup(popupFullImage);
    popupBigImage.src = item.link;
    popupDescImage.textContent = item.name;
    popupBigImage.alt = item.name;
  })


  return cardElement;
}

function addCard(name, link) {
  const element = createCard(name, link);
  arrayCard.prepend(element);
}

initialCards.reverse().forEach((item) => {
  addCard(item);
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