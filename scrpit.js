const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        alert('produto adicionado ao carrinho!');
    });
});