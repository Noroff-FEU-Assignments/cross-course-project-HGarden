const form = document.querySelector("#form-contact");
const contactForm = document.querySelector(".form-wrapper");
const sellForm = document.querySelector(".sell-form");
const error = document.querySelector(".errorbox");

const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const game = document.querySelector("#game");
const platform = document.querySelector("#platform");

const address = document.querySelector("#address");
const city = document.querySelector("#city");
const zipcode = document.querySelector("#zip-code");
const country = document.querySelector("#country");
const CardNumber = document.querySelector("#CardNumber");
const expiration = document.querySelector("#expiration");
const CCV = document.querySelector("#CCV");

// error messages
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const nameError2 = document.querySelector("#game-name-error");
const emailError2 = document.querySelector("#game-email-error");
const gameError = document.querySelector("#game-error");
const platformError = document.querySelector("#platform-error");

const addressError = document.querySelector("#address-error");
const cityError = document.querySelector("#city-error");
const zipcodeError = document.querySelector("#zipcode-error");
const countryError = document.querySelector("#country-error");
const cardError = document.querySelector("#card-error");
const expirationError = document.querySelector("#expiration-error");
const CCVError = document.querySelector("#CCV-error");

function validateContactForm(event) {
  event.preventDefault();
  console.log("hello");

  if (checkLength(Name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 10) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (checkLength(Name.value, 0) === true) {
    nameError2.style.display = "none";
  } else {
    nameError2.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError2.style.display = "none";
  } else {
    emailError2.style.display = "block";
  }

  if (checkLength(game.value, 0) === true) {
    gameError.style.display = "none";
  } else {
    gameError.style.display = "block";
  }

  if (checkLength(platform.value, 0) === true) {
    platformError.style.display = "none";
  } else {
    platformError.style.display = "block";
  }
}

function validatePurchase(event) {
  event.preventDefault();
  console.log("hello");

  if (checkLength(Name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(city.value, 0) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }

  if (checkLength(address.value, 0) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (checkLength(zipcode.value, 0) === true) {
    zipcodeError.style.display = "none";
  } else {
    zipcodeError.style.display = "block";
  }

  if (checkLength(country.value, 0) === true) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }

  if (checkLength(CardNumber.value, 16) === true) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
  }

  if (checkLength(expiration.value, 6) === true) {
    expirationError.style.display = "none";
  } else {
    expirationError.style.display = "block";
  }

  if (checkLength(CCV.value, 3) === true) {
    CCVError.style.display = "none";
  } else {
    CCVError.style.display = "block";
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateContactForm);
sellForm.addEventListener("submit", validateContactForm);
