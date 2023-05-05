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