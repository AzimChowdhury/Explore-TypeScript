// class and object
class Fifa {
    // name:string;
    // hosting: string;
    // year: number;
    // champion: string;

    // parameter properties
    constructor(public name: string, public hosting: string, public year: number, public champion: string) {
        // this.name =name,
        // this.hosting =hosting,
        // this.year = year,
        // this.champion = champion
    }

    championsCelebration() {
        // console.log(`${this.champion} won the ${this.year} ${this.name}`);
    }
}

const result = new Fifa('Qatar world cup', 'Qatar', 2022, 'Argentina')
const result2 = new Fifa('Russia world cup', 'Russia', 2018, 'France')
result.championsCelebration()
result2.championsCelebration()



// inheritance
class ParentClass {
    constructor(public name: string, public age: number, public hour: number) { }

    makeSleep(sleepingHour: number) {
        return `${this.name} sleep ${sleepingHour} hour a day`
    }
}

class Student extends ParentClass {
    constructor(name: string, age: number, hour: number) {
        super(name, age, hour)
    }

    gotClass() {
        return `${this.name} do ${this.hour} classes in a day`
    }

}

class Teacher extends ParentClass {
    experience: number;
    constructor(name: string, age: number, hour: number, experience: number) {
        super(name, age, hour)
        this.experience = experience;
    }

    takeClass() {
        return `${this.name} take ${this.hour} classes in a day`
    }
}




const student1 = new Student('rakib', 15, 7)
console.log(student1.gotClass());
const teacher1 = new Teacher('MR. Nasir', 48, 6,23)
console.log(teacher1.takeClass())