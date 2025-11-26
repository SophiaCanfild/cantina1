document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("pedidoForm");
    const mensagem = document.getElementById("mensagem-confirmacao");

    // Armazenar códigos já usados
    let codigosUsados = [];

    function gerarCodigo() {
        let codigo;
        do {
            codigo = Math.floor(10000 + Math.random() * 90000);
        } while (codigosUsados.includes(codigo));

        codigosUsados.push(codigo);
        return codigo;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const pedido = document.getElementById("pedido").value;

        const codigo = gerarCodigo();

        mensagem.innerHTML = `
            Pedido realizado com sucesso!<br>
            <strong>Código:</strong> ${codigo}
        `;
        mensagem.style.opacity = "1";

        form.reset();
    });
});
