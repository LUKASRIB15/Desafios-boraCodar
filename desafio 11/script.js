const submit = document.getElementById("submit");
var currentIndex = 1;
const arrayImage = [
  "./assets/eye-off.svg",
  "./assets/eye.svg",
];
let valid = true;

submit.addEventListener("click", login);

function login(event){
  event.preventDefault();
  var inputEmail = document.getElementById("email");
  var inputPassword = document.getElementById("password");
  for(var i=0; i<inputEmail.value.length; i++){
    if(inputEmail.value[i] == "@"){
      break;
    }
    if(i==inputEmail.value.length-1){
      valid = false;
    }
  }
  if(!valid){
    inputEmail.classList.add("invalid");
    document.getElementById("error").innerHTML = "Digite um e-mail válido"
    setTimeout(()=>{
      inputEmail.classList.remove("invalid");
      document.getElementById("error").outerHTML = `<span id="error"></span>`
    },5000);
  }else{
    inputEmail.value = '';
    inputPassword.value = '';
  }
  valid=true;
}

function changeImage(){
  var inputPassword = document.getElementById("password");
  if(currentIndex==1){
    inputPassword.type = "text";
  }else{
    inputPassword.type = "password";
  }
  document.getElementById("icon-eye").src = arrayImage[currentIndex];
  currentIndex++;
  if(currentIndex>1){
    currentIndex=0;
  }
}
