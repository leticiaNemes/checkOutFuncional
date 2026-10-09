function pagarComPix(){
    let preco = Number (document.getElementById("preco").value)
    let frete = Number (document.getElementById("frete").value)
    let valorApagar = (preco * 0.90) + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorApagar}`
}

function pagarComDinheiro(){
    let preco = Number (document.getElementById("preco").value)
    let frete = Number (document.getElementById("frete").value)
    let valorApagar = (preco * 0.95) + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorApagar}`
}


function pagarComCartao(){
    let preco = Number (document.getElementById("preco").value)
    let frete = Number (document.getElementById("frete").value)
    let valorApagar = preco + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorApagar}`
}

function pagarParcelado(){
    let preco = Number (document.getElementById("preco").value)
    let frete = Number (document.getElementById("frete").value)
    let valorApagar = (preco + 1.10) + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorApagar}`
}
