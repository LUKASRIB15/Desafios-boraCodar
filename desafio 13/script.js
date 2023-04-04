var numberCard = document.querySelector('#number-card')
var nameUser = document.querySelector('#name-user')
var validity = document.querySelector('#validity')
var cvv = document.querySelector('#cvv')
var imagesCards = [
  "./assets/visa.svg",
  "./assets/mastercard.svg",
  "./assets/elo.svg",
]
var mainCard = document.querySelector('.main-card')
let brandCard;
numberCard.addEventListener('input', function(event){
  console.log(event.target.value)
  for(var i=0; i<16; i++){
    //Mostrar número aovivo no cartão
    if(numberCard.value[i]!=null){
      document.getElementById(`number-${i+1}`).innerHTML= numberCard.value[i];
    }else{
      document.getElementById(`number-${i+1}`).innerHTML= '.';
    }
    if(numberCard.value[15]!=null){
      //Cartão Visa
    if(numberCard.value[0]=='4'){
      document.getElementById('image-card').src = imagesCards[0];
    }
    //Cartão MasterCard
    if(numberCard.value[0]=='5'){
      if(i==1){
        switch(numberCard.value[i]){
          case '1':
            document.getElementById('image-card').src = imagesCards[1];
            break;
          case '2':
            document.getElementById('image-card').src = imagesCards[1];
            break;
          case '3':
            document.getElementById('image-card').src = imagesCards[1];
            break;
          case '4':
            document.getElementById('image-card').src = imagesCards[1];
            break;
          case '5':
            document.getElementById('image-card').src = imagesCards[1];
            break;
          default:
            document.getElementById('image-card').src = imagesCards[2];
            break;
        }
      }
    }
    //Cartão Elo
    if(numberCard.value[0]=='6'){
      document.getElementById('image-card').src = imagesCards[2];
    }
    }else{
      //Sem cartão
      document.getElementById('image-card').src = '';
    }
  }
}, false)


nameUser.addEventListener('input', function(event){
  console.log(event.target.value)
  if(nameUser.value[0]!=null){
    document.getElementById('user').innerHTML = nameUser.value;
  }else{
    document.getElementById('user').innerHTML = "Seu nome aqui"
  }
}, false)

validity.addEventListener('input', function(event){
  console.log(event.target.value)
  for(var i=0; i<4; i++){
    //Mostar número de validade
    if(validity.value[i]!=null){
      document.getElementById(`footer-1-${i+1}`).innerHTML = validity.value[i];
    }else{
      document.getElementById(`footer-1-${i+1}`).innerHTML = '.'
    }
  }
}, false)

var card = document.getElementById('card')
cvv.addEventListener('input', function(event){
  console.log(event.target.value)
  if(cvv.value[0] != null){
    card.classList.add('card-back');
    card.classList.remove('card');
    document.getElementById('card').innerHTML = `<header></header>`
  }else{
    card.classList.add('card');
    card.classList.remove('card-back');
    document.getElementById('card').innerHTML = `<header class="header-card">
    <img id="image-card" src="" alt="">
    <img src="./assets/iconCard.svg" alt="Ícone do cartão">
  </header>
  <div class="main-card">
    <div id="children-1">
      <div id="number-1">${numberCard.value[0]!=null? numberCard.value[0] : `.` }</div>
      <div id="number-2">.</div>
      <div id="number-3">.</div>
      <div id="number-4">.</div>
    </div>
    <div id="children-2">
      <div id="number-5">.</div>
      <div id="number-6">.</div>
      <div id="number-7">.</div>
      <div id="number-8">.</div>
    </div>
    <div id="children-3">
      <div id="number-9">.</div>
      <div id="number-10">.</div>
      <div id="number-11">.</div>
      <div id="number-12">.</div>
    </div>
    <div id="children-4">
      <div id="number-13">.</div>
      <div id="number-14">.</div>
      <div id="number-15">.</div>
      <div id="number-16">.</div>
    </div>
  </div>
  <footer class="footer-card">
    <span id="user">${
      (nameUser.value[0] != null) ?
        nameUser.value
      :
        `Seu nome aqui`
    }</span>
    <div id="footer-1">
      <div id="footer-1-1">.</div>
      <div id="footer-1-2">.</div>
      <div>/</div>
      <div id="footer-1-3">.</div>
      <div id="footer-1-4">.</div>
    </div>
  </footer>   
    `
  }
}, false)

