// type assertion
let emergency: any;

emergency = 999;

const bucket = (emergency as number).toString()
// different syntax of type assertion
const bucket2 = <number>emergency
// console.log(typeof bucket, typeof bucket2);

function kgToGram(input: number | string): string | number | undefined {
    if (typeof input === 'number') {
        return input * 1000
    } else if (typeof input === 'string') {
        const value = parseFloat(input) * 1000;
        return `${value} gram`
    }
}

const tryIt = kgToGram('5') as string
const tryIt2 = kgToGram(5) as number
// console.log(tryIt, tryIt2);


// Interface
interface IUser {
    name: string;
    class: number;
    roll: number;
}

interface INewUser extends IUser {
    section: string
}

const newUser: IUser = {
    name: 'habib',
    class: 9,
    roll: 10,
}


const newUser2: INewUser = {
    name: 'rakib',
    class: 8,
    roll: 3,
    section: 'B'
}


// type alias vs interface
// different syntax
const rollNumbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
type rollNumberType = number[];
const rollNumbers2: rollNumberType = [1, 2, 3, 4, 5, 6, 7, 8, 9];
interface IRollNumbers {
    [index: number]: number
}
const rollNumbers3: IRollNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



// generic types

type genericArray<T> = Array<T>

const numbers: genericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2: genericArray<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
type numberWithValue = { name: string, value: number }
const numbers3: genericArray<numberWithValue> = [{ name: 'one', value: 1 }, { name: 'two', value: 2 }]

type genericTuple<X, Y> = [X, Y]

const nums: genericTuple<string, number> = ['one', 1]
const numObj: genericTuple<object, string> = [{ name: 'one', value: 1 }, 'one']
const numsObj: genericTuple<{ name: string, value: number }, string> = [{ name: 'one', value: 1 }, 'one']

// generic interface
interface PlayerInterface<P> {
    name: string,
    position: P
}

const messi: PlayerInterface<string> = {
    name: 'lionel Messi',
    position: 'forward / attacking midfielder'
}
const ronaldo: PlayerInterface<boolean> = {
    name: 'Cristiano Ronaldo',
    position: true
}

interface PlayerInterface2<X, Y> {
    name: string,
    club: X,
    BallonDor: Y
}

const messi2: PlayerInterface2<object, number[]> = {
    name: 'lionel messi',
    club: {
        name: 'PSG',
        championsTrophy: false
    },
    BallonDor: [2008, 2009, 2010, 2012, 2014, 2016, 2019]
}



// generic function

const convertToArray = <T>(param: T): T[] => {
    return [param]
}

const result = convertToArray<boolean>(false)
const result2 = convertToArray<string>('bangladesh')
const result3 = convertToArray<object>({ name: 'azim', age: 21 })
// console.log(result, result2, result3);



const addNewBallondor = <T>(param: T) => {
    const player: object = {
        name: 'messi',
        age: 34,
        club: 'psg'
    }
    const newPlayer = { ...player, ...param }
    return newPlayer
}

const result4 = addNewBallondor<object>({ lastBallonDor: 2021 })
// console.log(result4);


// Generic Constraints
type player2 = {
    name: string,
    age: number,
    club: string,
    ballondor: number
}

const cristianoRonaldo: player2 = {
    name: "cristiano ronaldo",
    age: 37,
    club: 'al nasser',
    ballondor: 5
}

type mandatoryInput = {name:string, age:number, club:string}
interface mandatoryInput2  {name:string, age:number, club:string}

const addOneMoreProp = <T extends mandatoryInput>(param:T) => {
    const add = {...param, insta:"555M"}
    return add;
}

const result5 = addOneMoreProp(cristianoRonaldo)
// console.log(result5);