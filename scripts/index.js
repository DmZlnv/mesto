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



const popup = document.querySelector('.popup');
const popupCont = document.querySelector('.popup__container');
const popupEditProfile = document.querySelector('.editprofile');
const popupClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('input[name="name"]');
let jobInput = document.querySelector('input[name="profession"]');
//let placeTitleInput = document.querySelector('input[name="place-title"]');
let placeTitleInput = document.querySelector('.popup__input_type_place-title');

let placeImgInput = document.querySelector('input[name="place-img"]');
//
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');
const cardEdit = document.querySelector('.profile__plus-button');
const popupCardEdit = document.querySelector('.editcard');
const popupSubmitCard = document.querySelector('.popup__submit-editcard');
const popupSubmitProfile = document.querySelector('.popup__submit-editprofile');

let popupFullImage = document.querySelector('.full-image');
let popupBigImage = document.querySelector('.popup__bigimage');
let popupDescImage = document.querySelector('.popup__descimage');
const popupCloseImage = document.querySelector('.popup__close_image')
const popupCloseCard = document.querySelector('.popup__close_card');
const popupCloseProfile = document.querySelector('.popup__close_profile');


//Функция открытия попапа
function openPopup(item) {
    item.classList.add('popup_opened');
}


profileEdit.addEventListener('click', function() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  
  openPopup(popupEditProfile);
});

cardEdit.addEventListener('click', function() {
  openPopup(popupCardEdit);
});




//Функция закрытия попапа
function closePopup(item) {
  item.classList.remove('popup_opened');
}

//Кнопки закрытия


popupCloseCard.addEventListener('click', () => 
closePopup(popupCardEdit)
);

popupCloseProfile.addEventListener('click', () => 
closePopup(popupEditProfile)
);

popupCloseImage.addEventListener('click', () => 
  closePopup(popupFullImage)
);




//Перебор карточек

const loadCards = initialCards.map(function(item) {
  return {
    name: item.name,
    link: item.link,
  };
});
const arrayCard = document.querySelector('.elements');
const templateCard = document.querySelector('#elements-template').content;

//Функция добавления карточки
function addCard (name, link) {
  const element = templateCard.querySelector('.elements__item').cloneNode(true);
  element.querySelector('.elements__title').textContent = name;
  element.querySelector('.elements__photo').src = link;
  element.querySelector('.elements__photo').alt = name;

  const elementLike = element.querySelector('.elements__like');
  const elementDelete = element.querySelector('.elements__trash');
  const elementImage = element.querySelector('.elements__photo');
  arrayCard.prepend(element) ;
  
  elementLike.addEventListener('click', function (event) {
    event.target.classList.toggle('elements__like_active')
  });
  elementDelete.addEventListener('click', function () {
    element.remove()
  });

  elementImage.addEventListener('click', function() {
    openPopup(popupFullImage);
    popupBigImage.src = link;
    popupDescImage.textContent = name;
    popupBigImage.alt = name;
  })

};


function loadArray(items) {
  items.reverse().forEach(({name, link}) => {
    addCard(name, link);
  })
}

loadArray(initialCards);

popupEditProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});

popupCardEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addCard(placeTitleInput.value, placeImgInput.value)
  //placeTitleInput = '';
  //placeImgInput = '';
  closePopup(popupCardEdit);
});