
import Person from "./person.js";

class Student extends Person {

    constructor(id, name, age, klass) {
        super(id, name, age); // 调用父类的Person(id,name, age)
        this.klass = klass;
    }

    introduce() {
        if (this.klass.leader!=null && this.klass.leader.name == this.name) {
            return super.introduce() + " I am a Student. I am Leader of Class " + this.klass.number + ".";
        }
        return super.introduce() + " I am a Student. I am at Class " + this.klass.number + ".";
    }
}

export default Student;


