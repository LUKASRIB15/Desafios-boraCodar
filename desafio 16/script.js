//IMaskJs para o campo input-number
IMask(document.querySelector("#input-number"),{
  mask: "{(}00{)} 00000{-}0000"
})

//Desenvolvendo o modal
var openModal = document.getElementById("open-modal")
var modal = document.getElementById("containModal")
var closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", function(event){
  event.preventDefault()
  modal.classList.add("open")
})

closeModal.addEventListener("click", function(event){
  event.preventDefault()
  modal.classList.remove("open")
})

window.addEventListener("click", function(event){
  if(
    event.target == document.querySelector("#body-field") ||
    event.target == document.querySelector(".contentList")
    ){
    modal.classList.remove("open")
  }
})

// Desenvolvendo a lógica do contato
const buttonSend = document.querySelector("#button-send");
const divContacts = document.querySelector(".contacts")
var arrayLetters = []

//Botão de enviar informações
buttonSend.addEventListener("click", function(event){
  let verify = false;
  event.preventDefault()
  const inputLinkValue = document.querySelector("#input-link").value
  const inputNameValue = document.querySelector("#input-name").value
  const inputNumberValue = document.querySelector("#input-number").value
  for(var i=0; i<arrayLetters.length; i++){
    if(arrayLetters[i].toUpperCase() == inputNameValue[0].toUpperCase()){
      verify = true;
    }
  }
  if(verify){
    createElementsAndAttributesInfoContact(inputNameValue, inputNumberValue, inputLinkValue)
  }else{
    createElementsAndAttributesContact(inputNameValue, inputNumberValue, inputLinkValue)
    arrayLetters.push(inputNameValue[0].toUpperCase())
  }
})

function createElementsAndAttributesInfoContact(name, number, link){
  const listContactsArea = document.querySelector(`#listContacts${name[0].toUpperCase()}`);
  //Criando elementos
  const infoContact = document.createElement("div")
  const imageContact = document.createElement("img")
  const divInfo = document.createElement("div")
  const nameContact = document.createElement("strong")
  const numberContact = document.createElement("span") 
  //Criar atributos/parâmetros
  infoContact.classList = "infoContact"
  imageContact.style.width= "48px"
  imageContact.style.height = "48px"
  imageContact.src= link
  //Adicionando conteúdo
  nameContact.innerText = name
  numberContact.innerText = number
  //AppendChild
  infoContact.appendChild(imageContact)
  infoContact.appendChild(divInfo)
  divInfo.appendChild(nameContact)
  divInfo.appendChild(numberContact)
  listContactsArea.appendChild(infoContact)
}

function createElementsAndAttributesContact(name, number, link){
  //Criar elementos
  const divContact = document.createElement("div")
  const divLetter = document.createElement("div")
  const listContacts = document.createElement("div")
  //Criar atributos/parâmetros
  divLetter.classList = "letter"
  divLetter.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255 )})`
  divContact.classList = "contact"
  listContacts.id = `listContacts${name[0].toUpperCase()}`
  //Adicionando conteúdo
  divLetter.innerText = name[0].toUpperCase()
  //AppendChild
  divContact.appendChild(divLetter);
  divContact.appendChild(listContacts);
  divContacts.appendChild(divContact)

  createElementsAndAttributesInfoContact(name, number, link)
}