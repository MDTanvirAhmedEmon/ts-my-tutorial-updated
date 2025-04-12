// type assertion
let ownerName: any;
ownerName = 'Tanvir Ahmed Emon';
(ownerName as string).length;
<string>ownerName.length;

interface villageInterface {
    zip: number,
    river: string,
}

interface emonInterface extends villageInterface {
    zip: number,
    river: string,
}


// const rollNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// const rollNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

// array using type alias
// type genericArray= Array<number>
// const rollNumber: genericArray = [1, 2, 3, 4, 5, 6, 7, 8];

// generic with type alias or we can call generic type
// =====================================================================
type genericArray<T> = Array<T> // here T is a generic type and it's general name is param
const rollNumber: genericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8];
const studentName: genericArray<string> = ['Abir', 'Shihab', 'Shanto'];

// const studentInfo: Array<{ name: string, roll: number }> = [
//     {
//         name: 'Emon',
//         roll: 198,
//     },
//     {
//         name: 'Azhar',
//         roll: 125,
//     }
// ];

type studentInfoType = { name: string, roll: number };

const studentInfo: genericArray<studentInfoType> = [
    {
        name: 'Emon',
        roll: 198,
    },
    {
        name: 'Azhar',
        roll: 125,
    }
];

type genericTuples<X, Y> = [X, Y]; // Array ekhane likhte hobena <> na hoye [] hobe.

const friends: genericTuples<string, number> = ['Aziz', 500];

// const friends2: genericTuples<object, string> = [
//     {
//         name: 'Aziz',
//         salary: 50000,
//     },
//     'Mithapur'
// ]

interface friendsInterface {
    name: string,
    salary: number,
};
const friends2: genericTuples<friendsInterface, string> = [
    {
        name: 'Aziz',
        salary: 50000,
    },
    'Mithapur'
]
// =========================================================================
// generic in interface

interface peopleInterface<T> {
    name: string,
    village: T,
};

const localPeople: peopleInterface<string> = {
    name: 'Sajal',
    village: 'Mithapur',
};

// generic in type
type PeopleType<T> = {
    name: string;
    village: T;
};

const localPeople5: PeopleType<string> = {
    name: 'Aziz',
    village: 'Mithapur',
};


// const localPeople2: peopleInterface<object> = {
//     name: 'Apu',
//     village: {
//         zip: 1313,
//         river: 'Dhalesari',
//     }
// }
interface villageInterface {
    zip: number,
    river: string,
}

const localPeople2: peopleInterface<villageInterface> = {
    name: 'Apu',
    village: {
        zip: 1313,
        river: 'Dhalesari',
    }
}

interface peopleInfo<T, U = null> {
    // default value null is set here for U, so if we don't pass U then it will be null by default.
    // but if we pass U then it will be the value we passed.
    name: string,
    id: number,
    job: T,
    marrid?: U,
}
// interface peopleInfo <T, U = null>{
// default value set korte pari zodi pore null or undefined set na korte cai
//     name: string,
//     id: number,
//     job: T,
//     marrid?: U,
// }

const peopleFullInfo: peopleInfo<string, boolean> = {
    name: 'Tamjid',
    id: 124,
    job: 'video Editor',
    marrid: false,
}
const peopleFullInfo2: peopleInfo<string, null> = {
    // marrid optional rakha hoise zodi marrid na declare kore tahole eikhane null or undefined dite hobe.
    name: 'Tamjid',
    id: 124,
    job: 'video Editor',
}

// =========================================================================
// generic in function

const addnumber = <T>(param: T): T[] => {
    return [param]
};

const result = addnumber<number>(12)

const addnumber2 = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2]
};
addnumber2<string, number>('name', 13)

// =========================================================================
// generic constraints

const addFriend = <T extends { name: string, age: number }>(fdInfo: T) => {
    // extends diye name and age deya ase tai object pass korar somoy object er vitore ei property gula must dite hobe.
    const village = 'Alinagar';
    const newFdInfo = { ...fdInfo, village };
    return newFdInfo;
};

type fdInfoType = {
    name: string,
    age: number,
    salary: number,
    job: string,
}

const fdInfoFirst = {
    name: 'sajal',
    age: 23,
    salary: 12000,
    job: 'Quality Checker',
};

addFriend<fdInfoType>(fdInfoFirst);

// ============================================
// ============================================

type personType = {
    name: string,
    age: number,
    address: string,
}

type newType = 'name' | 'age' | 'address';

type newTypeUsingKeyOf = keyof personType; // keyof does the same thing as above 'name' | 'age' | 'address'

// const user = {
//     name: 'Emon',
//     age: 23
// }

// user['age'] // 23
// do the same thing using below function

// function getProperty(object, key) {
//     console.log(object[key]);
// }

function getProperty<T, U extends keyof T>(object: T, key: U) {
    console.log(object[key]);
}

getProperty({ name: 'Emon', age: 23 }, 'age')

// ============================================
// ============================================
// Conditional Type

type a1 = number;
type a2 = boolean;
type a3 = a1 extends string ? string : null;
// nested conditional type
type a4 = a1 extends string ? string : a2 extends string ? string : null;

type habibiFriend = {
    property: string,
    wife: number,
};

type checkHabibiProperty<T> = T extends { property: string } ? true : false;
type checkHabibiPropertyFinally = checkHabibiProperty<habibiFriend>;

type checkHabibiProperty2<T, U> = U extends keyof T ? true : false;
type checkHabibiPropertyFinally2 = checkHabibiProperty2<habibiFriend, 'property'>;

// remove

type friendOfUnivercity = 'Joynal' | 'Jobayer' | 'Rashed';
type RemoveUniFriend<T, F> = T extends F ? never : T;

type CurrentUniFriend = RemoveUniFriend<friendOfUnivercity, 'Jobayer'>

// ============================================
// Mapped Type 

type AreaNumber = {
    height: number,
    width: string,
}
type A = AreaNumber['height'] // Look Up Types

type Area = {
    [key in 'name' | 'address']: string
    // mapping
};

type newAreaNumber = {
    [key in keyof AreaNumber]: number;
    // Mapping diye ekta type theke new ekta type make korte partesi 
};

type newAreaNumber2 = {
    [key in keyof AreaNumber]: AreaNumber[key];
};

type Area2<T> = {
    [key in keyof T]: T[key]
};

const areaResult: Area2<{ name: string, age: number }> = { name: 'emon', age: 23 }

// ========================
// Utility Type
// Pick

type person = {
    name: string;
    phone: number;
    married: boolean;
}

type contact = Pick<person, 'name' | 'phone'> // pick the properties from person type
type contact2 = Omit<person, 'married'> // married bade sob nibe
type optional = Partial<person> // to make all properties optional
type required = Required<person> // to make all properties required
type readonly = Readonly<person> // to make readonly all properties

// dynamic type
//================
type dynamicKey = Record<string, string> // key and value both are string
// in dynamic type key always string

const dynamicKeyResult: dynamicKey = {
    a: 'Emon',
    b: 'Azhar',
    c: 'Shihab',
    d: 'Shanto',
    e: 'Himel',
    f: 'Abir',
    g: 'Sajal',
} // auto complete the key and value as string

