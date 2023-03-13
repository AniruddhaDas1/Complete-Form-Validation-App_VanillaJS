const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const displayError = (input, message) => {
  const formField = input.parentElement.parentElement;
  const errorMessage = formField.querySelector(".error-message");

  errorMessage.innerText = message;
  formField.className = "form-field error";
};

const displaySuccess = (input) => {
  const formField = input.parentElement.parentElement;
  formField.className = "form-field success";
};

const isEmailValid = (email) => {
  const regexForEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regexForEmail.test(email);
};

const isPassValid = (password) => {
  const regexForPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/;

  return regexForPassword.test(password);
};

const validateUsername = () => {
  const usernameValue = username.value.trim();

  if (usernameValue === "") {
    displayError(username, "Required");
  } else {
    displaySuccess(username);
  }
};

const validateEmail = () => {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    displayError(email, "Required");
  } else if (!isEmailValid(emailValue)) {
    displayError(email, "Email must be Valid");
  } else {
    displaySuccess(email);
  }
};

const validatePassword = () => {
  const passwordValue = password.value.trim();

  if (password === "") {
    displayError(password, "Required");
  } else if (!isPassValid(passwordValue)) {
    displayError(
      password,
      "Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    );
  } else {
    displaySuccess(password);
  }
};

const validateConfirmPassword = () => {
  const confirmPasswordValue = confirmPassword.value.trim();
  const passwordValue = password.value.trim();

  if (confirmPasswordValue === "") {
    displayError(confirmPassword, "Required");
  } else if (passwordValue !== confirmPasswordValue) {
    displayError(confirmPassword, "Both passwords must be same");
  } else {
    displaySuccess(confirmPassword);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateUsername();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
});

username.addEventListener("focusout", () => {
  validateUsername();
});
email.addEventListener("focusout", () => {
  validateEmail();
});
password.addEventListener("focusout", () => {
  validatePassword();
});
confirmPassword.addEventListener("focusout", () => {
  validateConfirmPassword();
});

//show & hide Password
const showPasswordIcons = document.querySelectorAll(".bi-eye-slash-fill");
const hidePasswordIcons = document.querySelectorAll(".bi-eye-fill");

showPasswordIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    password.type = "text";
    confirmPassword.type = "text";
    password.parentElement.classList.add("visible");
    confirmPassword.parentElement.classList.add("visible");
  });
});
hidePasswordIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    password.type = "password";
    confirmPassword.type = "password";
    password.parentElement.classList.remove("visible");
    confirmPassword.parentElement.classList.remove("visible");
  });
});
