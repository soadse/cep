var cep_input = document.querySelector('#cep_input')
var search_btn = document.querySelector('#search_btn')
var clear = document.querySelector('#clear')
var address = document.querySelector('#address')
var erro = document.querySelector('#erro')
var ruaa = document.querySelector('#rua')
var bairroo = document.querySelector('#bairro')
var cidadee = document.querySelector('#cidade')


search_btn.addEventListener('click', () => {
    var cep = cep_input.value
    if(cep.length < 8){
        erro.innerHTML = 'Formato Incorreto<br>Digite apenas números sem caracteres'
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            var text_rua = `${data.logradouro}`

            var text_bairro = `${data.bairro}`

            var text_cidade = `${data.localidade}/${data.uf}`
            erro.style.display = 'none'
            ruaa.innerText = text_rua
            bairroo.innerText = text_bairro
            cidadee.innerText = text_cidade
        })
})
















