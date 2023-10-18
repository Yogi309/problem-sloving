let arr = [1,5,8,3,6];
let max = arr[0];
let smax = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i]> max) {
        max = arr[i];
    }
}

console.log(max);

for(var i = 1; i < arr.length; i++){
    if(arr[i]>smax && arr[i]<max){
        smax = arr[i];
    }
}

console.log(smax);