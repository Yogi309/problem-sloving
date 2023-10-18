let a = [1,5,8,3,6];
let max = arr[0];


for (var i = 1; i < a.length; i++) {
    if (a[i]> max) {
        max = a[i];
    }
}

console.log(max);