function Home(a:number, b:number):number {
    return a + b;
}

// console.log(Home(10,10));

function map(nums: number[]) :number[] {
    return nums.map(num => num +1);
}

// console.log(map([1,2,3]));

interface Person {
    name: string;
    age?: number;
}

type User =  {
    name: string;
    age?: number;
}

const alice: Person = {name: "Alice", age: 12};
const bobo: Person = {name: "Bobo"};
const tt:User = {name: "Ttt", age: 12};
// console.log(alice,bobo,tt);

function wrap<T>(value: T): T[] {
    return [value];
}

const hello = wrap('hello');
const num = wrap(123);
// console.log(num,hello);

type Res<A> = {
    data : A,
    status: number
}

const user: Res<User> = {
    data: {
        name: 'Ma Ma',
        age: 20
    },
    status: 200
}
console.log(user);
