//class  design pattern
//object  real world entity
//reference
//class
//syntax
//class Classname{

//}
class Person{
    constructor(age,name){
        this.age=age;
        this.name=name;
    }
    getPerson(){
        console.log(this.age)
        console.log(this.name)
    }
}
let obj1=new Person(25,"Ajay");

obj1.getPerson()