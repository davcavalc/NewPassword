

const info = document.querySelector(".info");
const passField = document.querySelector("#password");
let password = "";

function generatePassword() {
  password = "";
  let lenght = 20;
  let chars = `abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()_+-^~`;
  let n = chars.length;
  for (var i = 0; i < lenght; ++i) {
    password += chars.charAt(Math.floor(Math.random() * n));
  }
  passField.value = password;
}

function copyText() {
  navigator.clipboard.writeText(password);
  info.style.opacity = "1";
  setTimeout(function(){
    info.style.opacity = "0";
  }, 1500);
}
