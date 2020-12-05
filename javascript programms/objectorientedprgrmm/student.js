class Student{
    constructor(Id,Name,Rollnmbr,course){
        this.Id=Id;
        this.Name=Name;
        this.Rollnmbr=Rollnmbr;
        this.course=course;
    }
    getStudent(){
        console.log(this.Id);
        console.log(this.Name);
        console.log(this.Rollnmbr);
        console.log(this.course);
    }

}
let obj1=new Student(001,"Silpa",01,"Meanstack");

obj1.getStudent();