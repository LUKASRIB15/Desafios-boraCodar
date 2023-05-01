const currentYear = document.querySelector("#year");
const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
currentYear.innerHTML = new Date().getFullYear();

const currentMonth = new Date().getMonth();

monthOfTheCurrentYear()


leftButton.addEventListener("click", function(){
  const currentValue = parseInt(currentYear.textContent); 
  currentYear.innerHTML = currentValue-1;
  monthOfTheCurrentYear()
})

rightButton.addEventListener("click", function(){
  const currentValue = parseInt(currentYear.textContent); 
  currentYear.innerHTML = currentValue+1;
  monthOfTheCurrentYear()
})

function monthOfTheCurrentYear(){
  if(currentYear.textContent == new Date().getFullYear()){
    document.getElementById(`month-${currentMonth}`).classList.add("current")
    document.getElementById(`month-${currentMonth}`).classList.remove("month")
  }else{
    document.getElementById(`month-${currentMonth}`).classList.remove("current")
    document.getElementById(`month-${currentMonth}`).classList.add("month")
  }
}
