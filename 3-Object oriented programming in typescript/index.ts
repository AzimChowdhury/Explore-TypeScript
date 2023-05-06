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
// console.log(student1.gotClass());
const teacher1 = new Teacher('MR. Nasir', 48, 6, 23)
// console.log(teacher1.takeClass())






// type guard 

type normalUser = {
    name: string
}

type adminUser = {
    name: string,
    role: 'admin'
}


const checker = (param: normalUser | adminUser): string => {
    if ('role' in param) {
        return 'I am an admin'
    } else {
        return 'I am a user'
    }
}

const user1: normalUser = { name: 'sakib' };
const user2: adminUser = { name: 'Mabud', role: 'admin' }

// console.log(checker(user2));


class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    makeBark() {
        console.log(`ghew ghew`);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }
    makeMeaw() {
        console.log(`meaw meaw`); 
    }
}

const animalChecker = (animal: Animal) => {
    if(animal instanceof Dog){
        animal.makeBark()
    }else if(animal instanceof Cat){
        animal.makeMeaw()
    }
}

const animal1 = new Dog('jhon') 
const animal2 = new Cat('pet')

// console.log(animalChecker(animal2))




//Access Modifiers: Public, Private, Protected

// private property only accessible with class.  protected properties also accessible with class.
// but the difference is protected property is accessible with inheritance but private property not

class BankAccount {
    constructor(public readonly id:number, public name:string, private _balance: number){

    }

    // method
    getBalance():number{
        return this._balance
    }
    addBalance(amount:number){
        this._balance = this._balance +amount
    }


    // getter
    get balance():number{
        return this._balance
    }
    
    // setter
    set deposit(amount:number){
        this._balance = this._balance + amount
    }
}

const myAcc = new BankAccount(151054, 'azim', 217)
myAcc.addBalance(69)
myAcc.deposit = 214
const result3 = myAcc.balance
const result4 = myAcc.getBalance()
// console.log(result3, result4);



// static
class Counter {
    static number:number = 0;

    static increment():number{
       return Counter.number = Counter.number +1
    }

    static decrement():number{
        return Counter.number = Counter.number -1 
    }

}
 
// console.log(Counter.increment(), Counter.increment()); 





// polymorphism
class Person {
    sleep():void{
        console.log('I sleep 7 hours a day');
    }
}

class Student2 {
    sleep():void{
        console.log('I sleep 8 hours a day');
    }
}

class Developer {
    sleep():void{
        console.log('I sleep 5 hours a day');
    }
}

const sleep =(param: Person)=>{
    param.sleep()
}

const person1 = new Person()
const person2 = new Student2()
const person3 = new Developer()

// sleep(person1)
// sleep(person2)
// sleep(person3)

 



// abstraction

interface IVehicle {
    startEngine():void
    stopEngine():void
    move():void
}

class Vehicle implements IVehicle{

    constructor(public name:string, public model: number){}

    startEngine(): void {
        console.log('i am starting the engine');
    }

    stopEngine(): void {
        console.log('I am stopping the engine');
    }

    move(): void {
        console.log('move the vehicle');
    }
}

const car = new Vehicle ('toyota', 2022)
// car.move()




 

abstract class Vehicle2{

    constructor(public name:string, public model: number){}

    abstract startEngine(): void

    abstract stopEngine(): void 

    move(): void {
        console.log('move the vehicle');
    }
}

class newCar extends Vehicle2{
    startEngine(): void {
        console.log('start the engine');
    }
    stopEngine(): void {
        console.log('stop the engine');
    }
}

 