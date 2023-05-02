// type assertion
let emergency: any;

emergency = 999;

const bucket = (emergency as number).toString()
// console.log(typeof bucket);

function kgToGram(input: number | string): string | number | undefined {
    if(typeof input === 'number'){
        return input*1000
    }else if(typeof input ==='string'){
        const value = parseFloat(input)*1000;
        return `${value} gram`
    }
}

const tryIt = kgToGram('5') as string
const tryIt2 = kgToGram(5) as number
console.log(tryIt, tryIt2);