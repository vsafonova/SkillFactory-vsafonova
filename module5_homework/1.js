let userNumber = prompt("Ведите значение");
let result = +userNumber;

if (isNaN(result)) {
    console.log('Упс, кажется, вы ошиблись');
} else if (result % 2 === 0 ) {
    console.log('Введеное значение является четным');
} else {
    console.log('Введеное значение является нечетным');
}