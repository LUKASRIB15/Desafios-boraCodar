var buttonProgress = document.getElementById('button-progress');
var textSuccess = document.getElementById('text-success')
var buttonBack = document.getElementById('button-back')
var actionsForm = document.querySelector('.actions-form')

let currentIndex = 1;

function handleSubmitForm(event){
  event.preventDefault()
  if(currentIndex<4){
    currentIndex++;
  }

  changeActionsForm(currentIndex)
  currentForm(currentIndex);
  multiStep(currentIndex);
}

function actionBack(){
  if(currentIndex>1){
    currentIndex--;
  }

  changeActionsForm(currentIndex)
  currentForm(currentIndex);
  multiStep(currentIndex);
}

function reloadPage(){
  window.location.reload(true)
}


function currentForm(index){
  for(var i=1; i<=3; i++){
    if(i==index){
      document.getElementById(`form-${i}`).classList.remove('hidden');
    }else{
      document.getElementById(`form-${i}`).classList.add('hidden');
    }
  }
}

function multiStep(index){
  for(var i=1; i<=3; i++){
    if(i<index){
      var formChecked = document.getElementById(`step-${i}`)
      var spanFormChecked = document.getElementById(`step-span-${i}`)
      formChecked.classList.add('checked')
      formChecked.classList.remove('active')
      spanFormChecked.innerHTML = `<img src="./assets/checked.svg">`
    }
    if(i==index){
      var formChecked = document.getElementById(`step-${i}`)
      var spanFormChecked = document.getElementById(`step-span-${i}`)
      formChecked.classList.add('active')
      formChecked.classList.remove('checked')
      spanFormChecked.innerText = `${i}`
    }
    if(i>index){
      var formChecked = document.getElementById(`step-${i}`)
      formChecked.classList.remove('active')
      formChecked.classList.remove('checked')
    }
  }
}

function changeActionsForm(index){
  if(index > 1){
    actionsForm.style.justifyContent = 'space-between'
    actionsForm.innerHTML = `
    <button id="button-back" onclick="actionBack()">Voltar</button>
    <button id="button-progress" form="form-${index}" type="submit">
      ${index == 3 ? 'Enviar Proposta': 'Continuar'}
    </button>
    `

  }else{
    actionsForm.style.justifyContent = 'end'
    actionsForm.innerHTML = `
    <button id="button-progress" form="form-1" type="submit">Continuar</button>
    `
  }

  if(index == 4){
    textSuccess.classList.remove('hidden')
    actionsForm.style.justifyContent = 'end'
    actionsForm.innerHTML = `
    <button id="button-progress" form="form-1" onClick="reloadPage()" type="submit">Retornar</button>
    `
  }else{
    textSuccess.classList.add('hidden')
    actionsForm.style.justifyContent = 'space-between'
    actionsForm.innerHTML = `
    <button id="button-back" onclick="actionBack()">Voltar</button>
    <button id="button-progress" form="form-${index}" type="submit">
      ${index == 3 ? 'Enviar Proposta': 'Continuar'}
    </button>
    `
  }
}