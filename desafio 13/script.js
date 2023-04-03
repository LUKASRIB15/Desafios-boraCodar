var numberCard = document.querySelector('#number-card')
var nameUser = document.querySelector('#name-user')
var imagesCards = [
  "./assets/visa.svg",
]
var mainCard = document.querySelector('.main-card')

numberCard.addEventListener('input', function(event){
  console.log(event.target.value)
  for(var i=0; i<16; i++){
    if(numberCard.value[0]=='4'){
      document.getElementById('image-card').src = imagesCards[0];
    }else{
      document.getElementById('image-card').src = '';
    }
    if(numberCard.value[i]!=null){
      document.getElementById(`number-${i+1}`).innerHTML= numberCard.value[i];
    }else{
      document.getElementById(`number-${i+1}`).innerHTML= '.';
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


