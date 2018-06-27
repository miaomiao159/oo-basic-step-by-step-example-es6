

import Person from "./person.js";
class Teacher extends Person{
    constructor(id,name, age,klasses) {
        super(id,name, age); // 调用父类的Person(name, age)
        this.klasses=klasses;
    }

    introduce() {
        if(this.klasses==undefined)
        {
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }

            let temp=super.introduce()+" I am a Teacher. I teach Class ";
            for (let i = 0; i < this.klasses.length; i++) {
                temp += this.klasses[i].number + ", ";
            }
            temp = temp.slice(0, temp.length - 2);
            return temp+".";

    }
    isTeaching(Student){
        if (this.klasses.includes(Student)) {
            return true;
        }
        return false;
    }
}
export default Teacher;



