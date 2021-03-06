
import Person from "./person.js";
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
        return super.introduce()+" I am a Teacher. I teach Class "+this.klass + ".";
    }
}
export default Teacher;

