const fileInput = document.getElementById("file-input")
const uploadArea = document.getElementById("upload-area")
const typeFile = {
  inProgress: "./assets/purpleFile.svg",
  fill: "./assets/greenFile.svg",
  error: "./assets/redFile.svg"
}
fileInput.addEventListener("change", function(event){
  const file = event.target.files[0];
  createElementsAndAtributtes(file)
})

// drag and drop
const dropzone = document.querySelector(".file-label")

dropzone.addEventListener("dragenter", ()=>{
  dropzone.classList.add("is-dragover")
})

dropzone.addEventListener("dragover", (event)=>{
  event.preventDefault()
  dropzone.classList.add("is-dragover")
})

dropzone.addEventListener("dragleave", ()=>{
  dropzone.classList.remove("is-dragover")
})

dropzone.addEventListener("drop", (event)=>{
  event.preventDefault()
  const file = event.dataTransfer.files[0]
  const inputFile = document.getElementById('file-input')
  inputFile.files = event.dataTransfer.files;
  createElementsAndAtributtes(file)
  dropzone.classList.remove("is-dragover")
})

function createElementsAndAtributtes(file){
  const reader = new FileReader();
  console.log("tamanho do arquivo: ", ((Math.round((Math.random() * (Math.round((file.size/1024/1024)*100))/100)*100)/100))) 
  var sizeInProgress = ((Math.round((Math.random() * (Math.round((file.size/1024/1024)*100))/100)*100)/100))
  var sizeTotal = (Math.round((file.size/1024/1024)*100))/100

  reader.onload = () =>{
    //Criando elementos HTML
    const componentFile = document.createElement('div')
    const componentPercentage = document.createElement('div')
    const mainFile = document.createElement('main')
    const fileNameHeader = document.createElement('h2')
    const fileSize = document.createElement('span')
    const percentage = document.createElement('span')
    const bar = document.createElement('div')
    const progressBar = document.createElement('div')
    const imgTypeFile = document.createElement('img')
    const option = document.createElement('button')
    const imgOption = document.createElement('img')

    //Passando valores aos elementos HTML
    fileNameHeader.innerText = file.name
    fileSize.innerText = `${sizeInProgress} MB / ${sizeTotal} MB`
    percentage.innerText = `${Math.round((sizeInProgress/sizeTotal) * 100)}%`
    

    //Passando atributos aos elementos HTML
    bar.id = "bar"
    progressBar.id = "progress-bar"
    componentPercentage.id = "component-percentage"
    componentFile.className = "component-file"
    if(sizeTotal == 0){
      imgTypeFile.src = typeFile.error
      imgOption.src = "./assets/return.svg"
      fileSize.innerText = `${sizeTotal} MB`
      progressBar.style.width = "0%"
      percentage.innerText = "Erro"
      percentage.style.color = "#E36363"
    }else{
      if(sizeInProgress == sizeTotal){
        imgTypeFile.src = typeFile.fill
        imgOption.src = ""
        fileSize.innerText = `${sizeTotal} MB`
        percentage.style.color = "#4E884D"
        progressBar.style.background = "#4E884D"
        progressBar.style.borderRadius = "999px"
      }else{
        imgTypeFile.src = typeFile.inProgress
        imgOption.src = "./assets/remove.svg"
        progressBar.style.width = `${percentage.innerText}` 
      }
    }
    option.disabled = true
    
    //Adicionando elementos HTML dentro de outros elementos HTML
    mainFile.appendChild(fileNameHeader)
    mainFile.appendChild(fileSize)
    bar.appendChild(progressBar)
    componentPercentage.appendChild(bar)
    componentPercentage.appendChild(percentage)
    mainFile.appendChild(componentPercentage)
    componentFile.appendChild(imgTypeFile)
    componentFile.appendChild(mainFile)
    option.appendChild(imgOption)
    componentFile.appendChild(option)
    uploadArea.appendChild(componentFile)
  }

  reader.readAsDataURL(file)
}
