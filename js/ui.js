function calculatePow() {
    const x = parseFloat(document.getElementById('powX').value);
    const n = parseInt(document.getElementById('powN').value, 10);

    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        document.getElementById('powResult').innerText = 'Ошибка';
        return;
    }
    if (isNaN(x)) {
        document.getElementById('powResult').innerText = 'Ошибка';
        return;
    }

    const result = pow(x, n);
    document.getElementById('powResult').innerText = result;
}

function calculateGcd() {
    let a = parseInt(document.getElementById('gcdA').value, 10);
    let b = parseInt(document.getElementById('gcdB').value, 10);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('gcdResult').innerText = 'Ошибка';
        return;
    }

    const result = gcd(a, b);
    document.getElementById('gcdResult').innerText = result;
}

function calculateMinDigit() {
    let x = parseInt(document.getElementById('minDigitInput').value, 10);

    if (isNaN(x) || x < 0) {
        document.getElementById('minDigitResult').innerText = 'Ошибка';
        return;
    }

    const result = minDigit(x);
    document.getElementById('minDigitResult').innerText = result;
}

function showPlural() {
    let n = parseInt(document.getElementById('pluralInput').value, 10);

    if (isNaN(n) || n < 0) {
        document.getElementById('pluralResult').innerText = 'Ошибка';
        return;
    }

    const result = pluralizeRecords(n);
    document.getElementById('pluralResult').innerText = result;
}

function calculateFib() {
    let n = parseInt(document.getElementById('fibInput').value, 10);

    if (isNaN(n) || n < 0 || n > 1000) {
        document.getElementById('fibResult').innerText = 'Ошибка';
        return;
    }

    const result = fibb(n);
    document.getElementById('fibResult').innerText = result;
}

window.onload = function () {
    calculatePow();
    calculateGcd();
    calculateMinDigit();
    showPlural();
    calculateFib();
};