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



let popup = document.querySelector('.popup');
let popupCont = document.querySelector('.popup__container');
let profileEdit = document.querySelector('.profile__edit');
let popupEditProfile = document.querySelector('.popup__editprofile');
const popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('input[name="name"]');
let jobInput = document.querySelector('input[name="profession"]');
//let placeTitleInput = document.querySelector('input[name="place-title"]');
//let placeTitleInput = document.querySelector('input[name="place-title"]');
let placeTitleInput = document.querySelector('.popup__input_type_place-title');

let placeImgInput = document.querySelector('input[name="place-img"]');
//
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');
let cardEdit = document.querySelector('.profile__plus-button');
let popupCardEdit = document.querySelector('.popup__editcard');
let popupSubmitCard = document.querySelector('.popup__submit-editcard');
let popupSubmitProfile = document.querySelector('.popup__submit-editprofile');

let popupFullImage = document.querySelector('.popup__full-image');
let popupBigImage = document.querySelector('.popup__bigimage');
let popupDescImage = document.querySelector('.popup__descimage');
let popupCloseImage = document.querySelector('.popup__close_image')
let popupCloseCard = document.querySelector('.popup__close_card');
let popupCloseProfile = document.querySelector('.popup__close_profile');


//Функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
}


profileEdit.addEventListener('click', function() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  
  openPopup(popupEditProfile);
});

cardEdit.addEventListener('click', function() {
  //placeTitleInput = " ";
  //placeImgInput = " ";
  openPopup(popupCardEdit);
});




//Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Кнопки закрытия
popupClose.addEventListener('click', closePopup);

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
  })

};


function loadArray(items) {
  items.reverse().forEach(({name, link}) => {
    addCard(name, link);
  })
}

loadArray(initialCards);



/*function mestoFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = placeTitleInput.value;
  jobProfile.src = placeImgInput.value;
  closePopup();
}*/

/*elementDelete.addEventListener('click', removeCard());*/

function handleFormSubmit(evt) {
  evt.preventDefault();
  closePopup();
}

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});

cardEdit.addEventListener('click', openPopup);

popupCardEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addCard(placeTitleInput.value, placeImgInput.value)
  //placeTitleInput = '';
  //placeImgInput = '';
  closePopup(popupCardEdit);
});