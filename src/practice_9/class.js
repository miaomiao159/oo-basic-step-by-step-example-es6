class Class {
    leader;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(Student) {
        if (this.number == Student.klass.number) {
            this.leader = Student;
        }
        else
        {
            console.log("It is not one of us.");
        }
    }

    appendMember(Student) {
       Student.klass=this;
    }
}

export default Class;
