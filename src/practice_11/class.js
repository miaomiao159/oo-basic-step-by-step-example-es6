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
            if (this.teacher !== undefined && this.teacher.klasses.includes(Student.klass)) {
                console.log("I am " + this.teacher.name + ". I know " + Student.name +" become Leader of Class " + this.number + ".");
            }
        }
        else
        {
            console.log("It is not one of us.");
        }
    }

    appendMember(Student) {
        Student.klass=this;
        if (this.teacher !== undefined && this.teacher.klasses.includes(Student.klass)) {
            console.log("I am " + this.teacher.name + ". I know " + Student.name +" has joined Class " + this.number + ".");
        }
    }
    isIn(Student)
    {
        if( this==Student.klass)
        {
            return true;
        }
        return false;

    }
    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }
    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}

export default Class;


