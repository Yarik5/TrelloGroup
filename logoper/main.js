let value = prompt('Введите логин');

if (value === "Админ"){
    login();
} else if (!!value ){
    alert("Я вас не знаю");
} else  {
    alert("Отменено");
}

function login(){ 
let value = prompt('Введите пароль');

if (value === "Я главний"){ 
    alert("Здраствуйте!");
} else if (!!value )
{
    alert("неверный пароль");
} else {
    alert("Отменено");
}
}