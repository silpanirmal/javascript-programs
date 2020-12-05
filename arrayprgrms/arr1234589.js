var arr=[1,2,3,4,5,8,9]
var num=5;
for (i of arr){
    if (i<num){
        console.log(i-1);
    }
    else if(i==num){
        console.log(i);
    }
    else if(i>num){
        console.log(i+1)
    }

}