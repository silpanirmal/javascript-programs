var num1=10,num2=20,num3=30;
if ((num1>num2)&(num1<num3)|| ((num1>num3)&(num1<num2)) ){
    console.log(num1+" is second largest number");
}
else if ((num2>num1)&(num2<num3) ||(num2>num3)&(num2<num1)){
    console.log(num2+" is second largest number");
}
else if((num3>num1)&(num3<num2)||(num3>num2)&(num3<num1))
console.log(num3+" is second largest number")