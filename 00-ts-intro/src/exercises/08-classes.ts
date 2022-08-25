/*
    ===== Código de TypeScript =====
*/

// class Person {
//     name: string;
//     address: string;

//     constructor(name: string, address: string) {
//         this.name = name;
//         this.address = address;
//     }
// }

// class Hero extends Person {
//     alterEgo: string
//     name: string;
//     age: number;

//     constructor( alterEgo: string ) {
//         this.alterEgo = alterEgo;
//     }
// }

class Person {
    constructor(
        public name: string, 
        public age: number,
        public address: string
    ) {}
}

class Hero extends Person {
    constructor(
        public alterEgo: string
    ) {
        super('Tony', 45, 'Malibu Point 10880, 90265');
    }
}

const ironman = new Hero('Ironman');

console.log( ironman )