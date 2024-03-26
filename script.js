const cryptoData = [
    { name: "Bitcoin", price: "$71 036,68", trend: "Stoupající" },
    { name: "Ethereum", price: "$3 649,96", trend: "Stoupající" },
    { name: "Ripple", price: "$1.50", trend: "Klesající" },
    { name: "BNB", price: "$594,87", trend: "stoupající"},
    { name:"Solan",price:"$194,80", trend:"stoupající"},
    { name:"USD Coin", price: "$1,00", trend:"klesající"},
    { name:"Dogecoin", price: "$0,1852", trend:"stoupající"},
    { name:"Cardano", price: "$1", trend:"stoupající"},
];
function createCryptoElement(crypto) {
    const div = document.createElement('div');
    div.classList.add('crypto-item');
    div.innerHTML = `
        <h2>${crypto.name}</h2>
        <p><strong>Cena:</strong> ${crypto.price}</p>
        <p><strong>Trend:</strong> ${crypto.trend}</p>
    `;
    return div;
}
window.addEventListener('DOMContentLoaded', () => {
    const cryptoList = document.getElementById('crypto-list');
    cryptoData.forEach(crypto => {
        const cryptoElement = createCryptoElement(crypto);
        cryptoList.appendChild(cryptoElement);
    });
});