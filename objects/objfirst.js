var  person={Id:001,name:"ajay",Course:"Mean stack"}
console.log(person.name);//to display name
console.log("total"in person);//to search total key in obj
person["total"]=150//add total=150
console.log(person);
console.log("total"in person);
console.log(person.total);
person["total"]+=50  //to update the value of total
console.log(person);