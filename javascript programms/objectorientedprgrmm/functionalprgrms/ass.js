let employee=[
 { eid:100,name:"ajay",desig:"devop",join:1981,resign:2003},
 { eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
 { eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
 { eid:103,name:"jhon",desig:"ba",join:1989,resign:2010},
 { eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
 { eid:105,name:"lari",desig:"qa",join:1987,resign:2010}
]
//print name and designation of employees
employee.forEach(obj=>console.log(obj.name+"-"+obj.desig))//foreach-for print objcts directly
//print employee with desig-devep
let desig=employee.filter((obj)=>obj.desig=="devop")
console.log(desig);
//print employees join in 80s
let emp=employee.filter((obj)=>obj.join<=1990)
console.log(emp);
//sort by joining date
let em=employee.sort((a,b)=>a.join-b.join)
console.log(em);



