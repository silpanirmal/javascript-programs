var arr=[10,9,11,8,12,7]
//var data=arr.sort((no1,no2)=>no1-no2)
for(var i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        var temp=0;
        if(arr[i]>arr[j]){
            temp=arr[i];
           
            arr[j]=temp;
        }
    }
}
console.log(arr);