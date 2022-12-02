let popup = document.querySelector('.popup');
let popupCont = document.querySelector('.popup__container')
let profileEdit = document.querySelector('.profile__edit')
let popupClose = document.querySelector('.popup__close');


function openPopup() {
    popup.classList.add('popup__active');
}

function closePopup() {
    popup.classList.remove('popup__active');
}


profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);


let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('input[name="name"]');
let jobInput = document.querySelector('input[name="profession"]');

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameInput.textContent = nameInput;
    jobInput.textContent = jobInput;
}

formElement.addEventListener('submit', handleFormSubmit); 