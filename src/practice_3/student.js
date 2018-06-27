import Person from "./person.js";

class Student extends Person{
    constructor(name, age, klass) {
        super(name, age); // 调用父类的Person(name, age)
        this.klass = klass;
    }

    introduce() {
        return "I am a Student. I am at Class " +this.klass + ".";
    }
}
export default Student;