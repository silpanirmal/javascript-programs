//multilevel inheritance
class Parent{
    m1(){
        console.log( "inside m1");

    }
}
    
    class Child extends Parent{
        m2(){
            console.log("inside m2");
        }
    }
class Subchild extends Child{
    m3(){
        console.log("inside m3");
    }
}
let sb=new Subchild()
sb.m3()
sb.m2()
sb.m1()

//CLASS BANK{
   // CREATE ACCOUNT(ACC Nam,)
