// Evitar repetição de códigos
let codigosGerados = new Set();

function gerarCodigo() {
    let codigo;
    do {
        codigo = Math.floor(10000 + Math.random() * 90000); // 5 dígitos
    } while (codigosGerados.has(codigo));

    codigosGerados.add(codigo);
    return codigo;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".pedido-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const codigo = gerarCodigo();

            alert(
                "🍽️ Pedido realizado com sucesso!\n\n" +
                "Seu código de retirada é: " + codigo +
                "\n\nMostre este código na cantina para retirar seu lanche."
            );

            form.reset();
        });
    }
});