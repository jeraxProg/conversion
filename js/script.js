function yen() {
    let x = document.getElementById("firstNum").value;
    const y = 0.40
    const convertyen =  x / y;
    let result = convertyen.toFixed(2);
    document.getElementById('result').textContent = result;
    document.getElementById('symbol').textContent = "¥";
    document.getElementById('displayCurrency').textContent = "Yen";
}

function usd() {
    let x = document.getElementById("firstNum").value;
    const y = 58.18
    const convertdollar = x / y;
    let result = convertdollar.toFixed(3);
    document.getElementById('result').textContent =result;
    document.getElementById('symbol').textContent = "$";
    document.getElementById('displayCurrency').textContent = "United States Dollar";
}


function aud() {
    let x = document.getElementById("firstNum").value;
    const y = 37.61
    const convertaud =  x / y;
    let result = convertaud.toFixed(3)
    document.getElementById('result').textContent = result;
    document.getElementById('symbol').textContent = "AU$";
    document.getElementById('displayCurrency').textContent = "Australian Dollar";
}
