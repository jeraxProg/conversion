function yen() {
    let x = document.getElementById("firstNum").value;
    const y = 0.40
    const convertyen =  x / y;
    let result = convertyen.toFixed(2);
    document.getElementById('result1').textContent = "YEN" + ": "  + result;
}

function usd() {
    let x = document.getElementById("firstNum").value;
    const y = 58.18
    const convertdollar = x / y;
    let result = convertdollar.toFixed(3);
    document.getElementById('result1').textContent = "USD" + ": " + result;
}


function aud() {
    let x = document.getElementById("firstNum").value;
    const y = 37.61
    const convertaud =  x / y;
    let result = convertaud.toFixed(3)
    document.getElementById('result1').textContent = "AUD" + ": " + result;
}
