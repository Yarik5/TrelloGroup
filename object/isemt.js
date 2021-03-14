let schedule = {};

function isEmty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
let gaara = {who: 'Kazekage' };

console.log(isEmty(gaara));
console.log(isEmty(schedule));