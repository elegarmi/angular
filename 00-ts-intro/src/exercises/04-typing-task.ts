/*
    ===== Código de TypeScript =====
*/

interface Superhero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superhero: Superhero = {
    name: 'Spiderman',
    age: 16,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.address.city + ', ' + this.address.country;
    }
}

const address = superhero.showAddress();
console.log( address );