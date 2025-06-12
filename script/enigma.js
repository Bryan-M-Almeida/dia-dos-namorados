function verificarResposta() {
    const resposta = document.getElementById('resposta').value.trim().toLowerCase();
    const carta = document.getElementById('cartaAmor');
    const erro = document.getElementById('mensagemErro');

    if (resposta === 'amor') {
        carta.style.display = 'block';
        erro.textContent = '';
    } else {
        erro.textContent = 'Resposta incorreta. Tente de novo com o coração 💗';
    }
}

const surpresa = document.querySelector(".surpresaa");

surpresa.addEventListener("click", function () {
    alert("achou msm que eu ia fazer carta com chatgpt? aiai");
})