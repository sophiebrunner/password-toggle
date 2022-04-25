const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", togglePassword);

function togglePassword() {
  if (input.type === "password") {
    input.type = "text";
    button.innerText = "Hide Password";
  } else {
    input.type = "password";
    button.innerText = "Show Password";
  }
}
