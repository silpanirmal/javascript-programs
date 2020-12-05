var arr=[7,1,2,3,4]
var elem=6;
var low=0;
var upp=arr.length-1;

while(low<upp){
    total=arr[low]+arr[upp];
if(total==elem){
    console.log(arr[low]+ ","+ arr[upp])
}
low+=1;
}
