var currentIndex=1;
const arrayImage = [
  './assets/sofa.png',
  './assets/sofa.gif',
]

const arrayIcon = [
  './assets/360.svg',
  './assets/close.svg',
]

function pngToGif(){
  if(currentIndex==arrayImage.length){
    currentIndex=0;
  }
  document.getElementById("image-sofa").src = arrayImage[currentIndex];
  document.getElementById("button-sofa").src = arrayIcon[currentIndex];
  currentIndex++;
}