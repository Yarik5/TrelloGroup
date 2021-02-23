let n = 10;

nextN:
for (let i = 2; i <= n; i++) { // Для всех i

  for (let j = 2; j < i; j++) { // проверить делится ли число
    if (i % j == 0) continue nextN; // не подходит, берём следующее
  }

  console.log( i );
}