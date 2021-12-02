let liczba = 99;

function number(n) {
    if (n < 100 || n > 200) {
        console.log('Liczba nie mieści sie w przedziale');
    } else {
        console.log('Liczba mieści sie w przedziale');
    }
}

number(liczba)
number(77)
number(156)