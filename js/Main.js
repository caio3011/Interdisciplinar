function calcularTMB() {
    const peso = document.querySelector('input[name="peso"]').value;
    const altura = document.querySelector('input[name="altura"]').value;
    const idade = document.querySelector('input[name="idade"]').value;
    const sexo = document.querySelector('select[name="sexo"]').value;

    let tmb;
    if (sexo === "homem") {
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else {
        tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    }

    document.getElementById('resultado').innerText = tmb.toFixed(2) + " kcal";
}

window.addEventListener("scroll", function () {
    // Verifica se o usuário chegou ao final da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById("footer").style.display = "block"; // Exibe o footer
    } else {
        document.getElementById("footer").style.display = "none"; // Oculta o footer
    }
});