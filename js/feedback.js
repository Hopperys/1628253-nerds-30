const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".modal-form");
const feedbackName = feedbackPopup.querySelector(".feedback-name");
const feedbackEmail = feedbackPopup.querySelector(".feedback-email");
const feedbackMessage = feedbackPopup.querySelector(".feedback-message");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }  
})

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
})

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
    }    
  }
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
})