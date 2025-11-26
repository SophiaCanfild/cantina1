// Geração de códigos únicos
let codigosGerados = JSON.parse(localStorage.getItem("codigos")) || [];

function gerarCodigo() {
    let codigo;
    do {
        codigo = Math.floor(10000 + Math.random() * 90000); // 5 dígitos
    } while (codigosGerados.includes(codigo));

    codigosGerados.push(codigo);
    localStorage.setItem("codigos", JSON.stringify(codigosGerados));

    return codigo;
}

// Modal
const modal = document.getElementById("modal");

function fecharModal() {
    modal.style.display = "none";
}

// Formulário
document.getElementById("pedidoForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const turma = document.getElementById("turma").value;
    const refeicao = document.getElementById("refeicao").value;
    const pagamento = document.getElementById("pagamento").value;

    const codigo = gerarCodigo();
    document.getElementById("codigoPedido").textContent =
        `Código do seu pedido: ${codigo}`;

    // Criar QR Code
    const qrArea = document.getElementById("qrcode");
    qrArea.innerHTML = "";
    new QRCode(qrArea, {
        text: `Pedido: ${codigo}\nNome: ${nome}\nTurma: ${turma}\nRefeição: ${refeicao}`,
        width: 150,
        height: 150
    });

    modal.style.display = "flex"; 
});
