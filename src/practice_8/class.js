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
    }
}

export default Class;