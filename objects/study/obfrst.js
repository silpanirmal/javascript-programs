var person={name:"silpa",id:01,job:"software engg"}
console .log(person.name)
console.log("total" in person)
person["total"]=100
console.log("total" in person)
console.log(person.total)
person["total"]+=50
console.log(person.total)
console.log(person)
