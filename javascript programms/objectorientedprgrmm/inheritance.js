//single inheritance
class Parent{
    phone(){
        console.log("have nokia 5310")
    }
}
class Child extends Parent{

}
let obj=new Child();
obj.phone()