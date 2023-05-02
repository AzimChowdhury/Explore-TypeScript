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
    section:string
}

const newUser: IUser = {
    name: 'habib',
    class: 9,
    roll: 10, 
}


const newUser2 : INewUser ={
    name:'rakib',
    class:8,
    roll:3,
    section:'B'
}
 