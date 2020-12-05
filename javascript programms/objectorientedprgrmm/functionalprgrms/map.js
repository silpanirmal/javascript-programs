//map
//filter         //foreach=>to print objts
//reduce
//sort
        //map[to change all the numbers]
let arr=[1,2,3,4,5,6,7,8,9]
let squares=arr.map((n1)=>n1**2);
console.log(squares);
let cubes=arr.map((n1)=>n1**3);
console.log(cubes);
      //filter[to change certain numbers]
 let evens=arr.filter((n1)=>n1%2==0);
 console.log(evens);     
      
        //reduce[to fetch single value]
     let total=arr.reduce((n1,n2)=>n1+n2);
     console.log(total);
     let max=arr.reduce((n1,n2)=>n1>n2?n1:n2);//[?=if n1>n2 print n1 else(:) n2]
     console.log(max);
     //sort
     let sorted=arr.sort((i,j)=>i-j);//ascending
     console.log(sorted);
     let sortd=arr.sort((i,j)=>j-i);//descending
     console.log(sortd);
