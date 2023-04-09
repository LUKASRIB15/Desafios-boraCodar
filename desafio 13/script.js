var elementNumber = document.getElementById("cc-number");
var elementCvv = document.getElementById("cc-cvv");
var elementValidity = document.getElementById("cc-validity");
var elementHolder = document.getElementById("cc-holder");
var submit = document.getElementById("submit")
let currentBrand;

var maskOptions = {
  maskNumber: '0000 0000 0000 0000',
  maskCvv: '000',
  maskValidity: "MM{/}YY",
}

//Input numberCard
IMask(elementNumber, {
  mask: maskOptions.maskNumber
})

//Input Cvv
IMask(elementCvv, {
  mask: maskOptions.maskCvv
})

//Input Validity
IMask(elementValidity, {
  mask: maskOptions.maskValidity,
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2)
    }
  }
})

var brandCard = {
  masterCard: "./assets/mastercard.svg",
  visa: "./assets/visa.svg",
  elo: "./assets/elo.svg"
}

// Ver em tempo real o valor do input elementNumber e executar funções
elementNumber.addEventListener('input', function(event){
  console.log(event.target.value);
  verifyBrand()
  numberCard() 
})

// Ver em tempo real o valor do input elementHolder e executar funções
elementHolder.addEventListener('input', function(event){
  console.log(event.target.value);
  nameHolder()
})

// Ver em tempo real o valor do input elementValidity e executar funções
elementValidity.addEventListener('input', function(event){
  console.log(event.target.value)
  numberValidity()
})

// Ver em tempo real o valor do input elementCvv e executar funções
elementCvv.addEventListener('input', function(event){
  console.log(event.target.value)
  numberCvv();
})

// Verifica qual a marca do cartão baseado no número
function verifyBrand(){
  if(elementNumber.value[18] != null){
    if(elementNumber.value[0] == '4'){
      document.getElementById("image-card").src = brandCard.visa;
      currentBrand = 1;
    }
    if(elementNumber.value[0] == '5'){
      if(
          elementNumber.value.slice(0,2) == "51" ||
          elementNumber.value.slice(0,2) == "52" ||
          elementNumber.value.slice(0,2) == "53" ||
          elementNumber.value.slice(0,2) == "54" ||
          elementNumber.value.slice(0,2) == "55"
        ){
          document.getElementById("image-card").src= brandCard.masterCard;
          currentBrand = 1;
        }else{
          document.getElementById("image-card").src = brandCard.elo;
          currentBrand = 1;
        }
    }
    if(elementNumber.value[0] == '6'){
      document.getElementById("image-card").src = brandCard.elo;
      currentBrand = 1;
    }
  }else{
    document.getElementById("image-card").src = ""
    currentBrand = 0;
  }
}

// Conectando os valores do input cc-number com o cartão virtual
function numberCard(){
  for(var i=0; i<19; i++){
    if(elementNumber.value[i] != null){
      document.getElementById(`block-${i+1}`).innerHTML = elementNumber.value[i];
      document.getElementById(`block-${i+1}`).classList.remove("block-null");
    }else{
      document.getElementById(`block-${i+1}`).innerHTML = "";
      document.getElementById(`block-${i+1}`).classList.add("block-null");
    }
    if(elementNumber.value[i+1] == ' '){
      i++;
    }
  }
}

// Conectando os valores do input cc-holder com o cartão virtual
function nameHolder(){
  if(elementHolder.value[0] != null){
    document.getElementById("name-holder").innerHTML = elementHolder.value;
    document.getElementById("name-holder").classList.add('color-holder');
  }else{
    document.getElementById("name-holder").innerHTML = "Seu nome aqui"
    document.getElementById("name-holder").classList.remove('color-holder');
  }
}

// Conectando os valores do input cc-validity com o cartão virtual
function numberValidity(){
  for(var i=0; i<5; i++){
    if(elementValidity.value[i] == '/'){
      continue;
    }
    if(elementValidity.value[i] != null){
      document.getElementById(`validity-${i+1}`).innerHTML = elementValidity.value[i];
      document.getElementById(`validity-${i+1}`).classList.remove("block-null");
    }else{
      document.getElementById(`validity-${i+1}`).innerHTML = "";
      document.getElementById(`validity-${i+1}`).classList.add("block-null");
    }
  }
}

// Conectando os valores do input cc-cvv com o cartão virtuala
function numberCvv(){
  for(var i=0; i<3; i++){
    if(elementCvv.value[i] != null){
      document.getElementById(`cvv-${i+1}`).innerHTML = elementCvv.value[i];
      document.getElementById(`cvv-${i+1}`).classList.remove("block-null-dark");
    }else{
      document.getElementById(`cvv-${i+1}`).innerHTML = "";
      document.getElementById(`cvv-${i+1}`).classList.add("block-null-dark");
    }
  }
}

// Toda vez que clicar no botão com id submit, ele irá ser direcionado à função validationForm
submit.addEventListener('click', validationForm)

// Função que mostra resposta de erro durante um submit de informações
// Erro do número de cartão, caso seja inválido
function validationForm(event){
  event.preventDefault()
  submit.innerHTML = `<img id="loading" src="./assets/loading.svg" alt="ícone de loading">`
  setTimeout(()=>{
    submit.innerHTML = "Adicionar cartão"
    if(elementNumber.value[18] == null || !currentBrand){
      elementNumber.classList.add('is-invalid')
      document.getElementById('message-error').innerHTML = `
      <img src="./assets/error.svg" alt="ícone de error">
      Insira um número de cartão válido
      `
      setTimeout(()=>{
        elementNumber.classList.remove('is-invalid')
        document.getElementById('message-error').innerHTML = '' 
      }, 3000)
    }
  }, 3000)
}

// Função que checa se os inputs estão vazios ou não
function checkInputs(inputs){
  var full = true;
  
  inputs.forEach(function(input){
    if(input.value === ""){
      full = false
    }
  })
  return full;
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button")

// Se algum input estiver vazio então ele deixa o button desabilitado
// Caso todos estejam com algum valor, ele habilita o input
inputs.forEach(function(input){
  input.addEventListener("keyup", function(){
    if(checkInputs(inputs)){
      button.disabled = false;
    }else{
      button.disabled = true;
    }
  })
})

