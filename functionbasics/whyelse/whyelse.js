let count = prompt('Ведите свой возраст');

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

checkAge(count)