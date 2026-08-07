const nomeCliente = prompt("Digite o nome do cliente:");
const valorCompra = parseFloat(prompt("Digite o valor da compra (ex: 650.00):"));
const clienteVip = confirm("O cliente é VIP? (Clique em OK para SIM ou Cancelar para NÃO)");

let percentualDesconto = 0;

if (clienteVip) {
    percentualDesconto = 20;
} else if (valorCompra >= 500) {
    percentualDesconto = 15;
} else if (valorCompra >= 200) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 0;
}


const valorDesconto = (valorCompra * percentualDesconto) / 100;
const valorFinal = valorCompra - valorDesconto;


console.log(`Nome: ${nomeCliente}`);
console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto: ${percentualDesconto}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);


if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}