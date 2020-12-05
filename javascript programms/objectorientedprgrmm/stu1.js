class Student{
    setStudent(id,name,course){
        this.id=id;
        this.name=name;
        this.course=course;
    }
    getStudent(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.course);
    }
}
let obj1=new Student();
obj1.setStudent=(1,"SILPA","MS");
obj1.getStudent();