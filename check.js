let num = [1,2,3,4,5];

function check(){
    for(i=1; i<num.length; i++){
        if(num[i]>=num[i-1]){

        }else{
            return false;
        }
       
    }
    return true;
}

console.log(check());