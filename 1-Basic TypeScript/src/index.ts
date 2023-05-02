// declaring  variable
const courses: string = 'next level web development';
const fee: number = 5000;

// object with type
const obj: {
    name: string,
    age: number,
    isMarried: boolean
} = {
    name: 'mamun',
    age: 25,
    isMarried: true
}


// function in typescript
function add(num1: number, num2: number): number {
    return num1 + num2
}
const result: number = add(2, 3)

// declaring arrow function and with default value
const multiply = (num1: number, num2: number = 20): number => {
    return num1 * num2
}

const result2 = multiply(3)

// rest parameter = take all the elements and make them an array
const greetFriends = (...friends: string[]): void => {
    friends.forEach((friend) => console.log(`hi ${friend}`))
}
// greetFriends('rakib', 'habib', "sakib")


// type alias = declaring one type for multiple variable
type FriendType = {
    name: string;
    age: number;
    profession: string;
    address: string;
    isMarried: boolean
};

const friend1: FriendType = {
    name: "Rakib",
    age: 21,
    profession: 'mern dev',
    address: 'chittagong',
    isMarried: false
}

const friend2: FriendType = {
    name: "Habib",
    age: 20,
    profession: 'Native dev',
    address: 'chittagong',
    isMarried: false
}

const friend3: FriendType = {
    name: "Sakib",
    age: 22,
    profession: 'python dev',
    address: 'chittagong',
    isMarried: true
}

type OperationType = (x: number, y: number) => number

const calculate = (num1: number, num2: number, operation: OperationType) => {
    return operation(num1, num2)
}
const result3 = calculate(10, 20, ((x, y) => x + y))
// console.log(result3);


// union or optional type

type NoobDev = {
    name: string
}

type JrDev = {
    name: string;
    skill: string;
    experience: number;
}

const dev1: NoobDev | JrDev = {
    name: 'hamid',
    skill: 'react',
    experience: 2
}

// intersection

type NoobDev2 = {
    name: string
}

type JrDev2 = NoobDev2 & {
    skill: string;
    experience: number;
}

type NextLevelDev = JrDev2 & {
    skill2: string;
    skill3: string;
}

const dev2: NoobDev | JrDev | NextLevelDev = {
    name: 'hamid',
    skill: 'react',
    experience: 2,
}

//enum
enum Level {
    jr = 'jr',
    mid = 'mid',
    sr = 'sr'
}

const dev3: NoobDev & {
    level: Level
} = {
    name: "hasan",
    level: Level.mid
}

// null type

const searchName = (value: string | null) => {
    if (value === null) {
        console.log('there is nothing to search');
    } else {
        console.log('searching... ...');
    }
}

// searchName('azim')


// unknown type 
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        console.log(`my car speed is ${speed / 60} per minute`);
    } else if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ')
        console.log(`my car speed is ${parseFloat(value) / 60} ${unit} per minute`);
    } else {
        console.log('there is wrong type');
    }
}

// getMyCarSpeed(180)
// getMyCarSpeed("180 km")
// getMyCarSpeed(true)


// never type 
const throwError = (msg: string):never => {
    throw new Error(msg)
}

// throwError('Error is mortal')

// ternary operator and  nullish coalescing operator

const user = "";
const userName  = user ? user :'guest';
const userName2 = user ?? 'guest'
// console.log({userName}, {userName2});