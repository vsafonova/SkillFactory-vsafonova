let arr = [3, 3, 3, 3];
let result = true;

arr.forEach(function (item){
for (let i = 1; i < arr.length ; i++){
	if(item === arr[i]){
        result = true
    } else {
        result = false
        break
    }
}
})
console.log(result)