
import Person from "./person.js";
class Worker extends Person{
    constructor(name, age) {
        super(name, age); // 调用父类的Person(name, age)
    }

    introduce() {
        return super.introduce()+" I am a Teacher. I have a job.";
    }
}
export default Worker;
