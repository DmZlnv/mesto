let popup = document.querySelector('.popup');
let popupCont = document.querySelector('.popup__container')
let profileEdit = document.querySelector('.profile__edit')
let popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('input[name="name"]');
let jobInput = document.querySelector('input[name="profession"]');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession')

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
