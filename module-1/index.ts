const course: string = 'next level web development';
console.log(course)
// Array
const roll: number[] = [10, 11, 12];

// Tuple  => means an array with different data types
const emon: [string, number] = ['TAEmon', 12];

console.log(emon)


// Object
const user: {
    readonly name: string, // readonly => can't change the value of this property
    company: string,
    age: number,
    phone?: number, // optional property
} = {
    name: 'Emon',
    company: 'GP',
    age: 23,
    phone: 484545434355468489498
};

console.log(user)


const user1: {
    name: string,
    company: "programming hero",  // fixed value => literal type
    age: number,
    phone?: number,
} = {
    name: 'Emon',
    company: 'programming hero',
    age: 23,
    phone: 484545434355468489498
};



// Function
function add(num1: number, num2: number): number {
    return (num1 + num2);
}

console.log(add(2, 3))


const sayHi = (zipCode: number, ...friend: string[]) => { // rest operator
    console.log(zipCode, friend)
}

sayHi(1313, 'Emon', 'Himel', 'Abir', 'Shihab')

const emonInfo: {
    name: string;
    company: string;
} = {
    name: 'emon',
    company: 'programming hero',
}
// name alias
const { name: emonName, company } = emonInfo;


// type alias
type LocalFriend = {
    name: string,
    age: number,
    address: string
}

const localFriend: LocalFriend = {
    name: 'Azhar',
    age: 23,
    address: 'Alinogor'
}

// union type and intersection
type NoobDeveloper = {
    name: string
}
// intersection &
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number,
    level: 'Entry' | 'Mid' | 'High', // union types
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'abir',
    expertise: 'javascript',
    experience: 6,
    level: 'Mid'
}

// aliases with function
type OperationType = (x: number, y: number) => number;
const calculate = (
    num1: number,
    num2: number,
    operation: OperationType
) => {
    return operation(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);

// nullish coalescing operator
// null / undefined ----> decision making
// do not work with falsy values like 0, '', false, NaN only work with null and undefined
const isAuthenticatedUser = false;
const userName = isAuthenticatedUser ?? 'Guest';
// if isAuthenticatedUser is null or undefined then userName will be 'Guest' otherwise it will be isAuthenticatedUser value.

const throwError = (message: string): never => {
    throw new Error(message)
} // never type is used for function that will never return a value
throwError('This is an error message')

