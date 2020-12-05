
   let em1= { eid:100,name:"ajay",desig:"devop",join:1981,resign:2003};
   let em2= {eid:101,name:"vijay",desig:"devop",join:1992,resign:2008};
   let em3= {eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007};
   let em4= {eid:103,name:"jhon",desig:"ba",join:1989,resign:2010};
   let em5= {eid:104,name:"danie",desig:"qa",join:2009,resign:2014};
   let em6= {eid:105,name:"lari",desig:"qa",join:1987,resign:2010};
var emp=[]
emp.push(em1)
emp.push(em2)
emp.push(em3)
emp.push(em4)
emp.push(em5)
emp.push(em6)
var emnd=emp.map((em1)=>em1.name+"-"+em1.desig);
console.log(emnd);
var emdevop=emp.filter((em1)=>em1.desig=="devop");
console.log(emdevop);
var em80=emp.filter((em1)=>em1.join<1990);
console.log(em80);
let sorted=emp.sort((em1,em2)=>em1.join-em2.join);
console.log(sorted);
