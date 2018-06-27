
import Person from "./person.js";
import Class from "./class";
class Teacher extends Person{
    constructor(name, age,klass) {
        super(name, age); // 调用父类的Person(name, age)
        this.klass=klass;
    }

    introduce() {
        if(this.klass==null)
        {
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }
        return super.introduce()+" I am a Teacher. I teach Class "+this.klass.number + ".";
    }
    introduceWith(student)
    {
        if(this.klass==student.klass)
        {
            return super.introduce() + " I am a Teacher. I teach " + student.name + ".";
        }
        return super.introduce() + " I am a Teacher. I don't teach " + student.name + ".";
    }
}
export default Teacher;

