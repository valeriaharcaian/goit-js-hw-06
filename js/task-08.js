const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements["email"];
  const passwordInput = loginForm.elements["password"];

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("All fields must be filled out");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);

    loginForm.reset();
  }
});
