let priceTotal = 0.00;
let totalItems = 0;
var totalPayable = document.querySelector('#total-payable')
var items = document.querySelector('#total-items')

var products = [
  {
    id:"product-1",
    price: 8599.90
  },{
    id:"product-2",
    price: 959.90,
  },{
    id:"product-3",
    price: 1002.90
  },{
    id:"product-4",
    price: 99.90,
  },{
    id:"product-5",
    price:19.90
  }
]

function addProduct(id){
  var inputProduct = document.querySelector(`#${id}`);
  // Não pode ter mais de 10 produtos
  if(inputProduct.value<10){
    inputProduct.value++;
    totalItems++;

    items.innerText = `${totalItems} itens`

    products.map((product)=>{
      if(id == product.id){
        return priceTotal+=product.price
      }else{
        return priceTotal
      }
    })

    totalPayable.innerText = `R$ ${priceTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits:2})}`

  }
}

function subtractProduct(id){
  var inputProduct = document.querySelector(`#${id}`);
  // Não pode ter menos que 0 produtos
  if(inputProduct.value>0){
    inputProduct.value--;

    totalItems--;

    items.innerText = `${totalItems} itens`

    products.map((product)=>{
      if(id == product.id){
        return priceTotal-=product.price
      }else{
        return priceTotal
      }
    })

    if(priceTotal<=0){
      totalPayable.innerText = `R$ 0,00`
    }else{
      totalPayable.innerText = `R$ ${priceTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits:2})}`
    }
  }
}

function confirmSale(){
  var buttonConfirm = document.querySelector('#confirm-sale')

  buttonConfirm.innerHTML= "<img id='loading' src='./assets/loading.svg'>"
  setTimeout(()=>{
    priceTotal = 0.00
    totalItems = 0
    for(var i=1; i<=products.length; i++){
      document.getElementById(`product-${i}`).value = 0;
    }
    buttonConfirm.innerText="Finalizar compra"
    items.innerText="0 itens"
    totalPayable.innerText="R$ 0,00"
    document.querySelector('#input-ticket').value = ""
  }, 3000)

}