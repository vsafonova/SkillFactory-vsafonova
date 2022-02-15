let myMap = new Map();

myMap.set(1, 'number');
myMap.set('Привет', 'string');
myMap.set(false, 'boolean');

for (let elem of myMap) {
    console.log(elem);
}