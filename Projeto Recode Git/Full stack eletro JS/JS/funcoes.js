function visualiza_info (box_produto){
    let preco = box_produto.getElementsByClassName ("preco")[0];
    preco.style.visibility = "initial"
}
function esconde_info (box_produto){
    let preco = box_produto.getElementsByClassName ("preco")[0];
    preco.style.visibility = "hidden"
}
function exibir_mensagem () {
    alert("Confira nossas promoções");
}
