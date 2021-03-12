function chekAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}