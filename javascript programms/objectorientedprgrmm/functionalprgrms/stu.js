class Student{
    constructor(Id,Name,Rollnmbr,total){
        this.Id=Id;
        this.Name=Name;
        this.Rollnmbr=Rollnmbr;
        this.total=total;
    }
    getStudent(){
        console.log(this.Id);
        console.log(this.Name);
        console.log(this.Rollnmbr);
        console.log(this.total);
    }

}
let obj1=new Student(001,"Silpa",10,145);

obj1.getStudent();
let obj2=new Student(002,"ajay",11,150);
obj2.getStudent();

let obj3=new Student(003,"vijay",12,130);
obj3.getStudent();
var student=[]
student.push(obj1)
student.push(obj2)
student.push(obj3)
var stud=student.filter((obj)=>obj.total>140);
console.log(stud);
var stu=student.map((obj)=>obj.total+20);
console.log(stu);