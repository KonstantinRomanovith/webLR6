// 1. Возведение в степень
function pow(x, n) {
    if (!Number.isInteger(n) || n <= 0) {
        return "Ошибка";
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

// 2. НОД
function gcd(a, b) {
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));

    if (a === 0 && b === 0) return 0;
    if (a === 0) return b;
    if (b === 0) return a;

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 3. Наименьшая цифра
function minDigit(x) {
    if (!Number.isInteger(x) || x < 0) {
        return "Ошибка";
    }

    const digitsStr = x.toString().split('');
    if (digitsStr.length === 0) return 0;

    let min = 10;
    for (let ch of digitsStr) {
        let digit = parseInt(ch, 10);
        if (digit < min) {
            min = digit;
        }
    }
    return min;
}

// 4. Множественное число
function pluralizeRecords(n) {
    if (!Number.isInteger(n) || n < 0) {
        return "Ошибка";
    }

    let form;
    const lastTwo = n % 100;
    const lastOne = n % 10;

    if (lastTwo >= 11 && lastTwo <= 19) {
        form = 'записей';
    } else if (lastOne === 1) {
        form = 'запись';
    } else if (lastOne >= 2 && lastOne <= 4) {
        form = 'записи';
    } else {
        form = 'записей';
    }

    return n + ' ' + form;
}

// 5. Числа Фибоначчи
function fibb(n) {
    if (!Number.isInteger(n) || n < 0 || n > 1000) {
        return "Ошибка";
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let prevPrev = 0;
    let prev = 1;
    let current = 0;

    for (let i = 2; i <= n; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }
    return current;
}