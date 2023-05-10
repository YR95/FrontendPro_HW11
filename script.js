// Створити масив, довжину та елементи якого задає користувач.
//     Відсортувати масив за зростанням.
//     Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.


let quantity = parseInt(prompt("Length of array: "));
let ar = [];

for (let i = 0; i < quantity; i++) {
    ar[i] = prompt("Element is: ", '0');
}
console.log(`Initial ar: ${ar}`);
//console.log(`Natural sort: ${ar.sort((a, b) => a.value - b.value)}`);
//якщо прям сортування в лоб без лямбд))
for (let i = 1; i < ar.length; i++)
    for (let j = 0; j < i; j++)
        if (ar[i] < ar[j]) {
            let min = ar[i];
            ar[i] = ar[j];
            ar[j] = min;
        }
console.log(`Result of  natural sorting: ${ar}`);
ar.splice(1, 3);
console.log(`Ar after removing elements : ${ar}`);