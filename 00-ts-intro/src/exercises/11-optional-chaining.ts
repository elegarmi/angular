/*
    ===== Código de TypeScript =====
*/

interface Passenger {
    name: string;
    childs?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melisa',
    childs: ['Natalia', 'Gabriel']
}

function printChilds( passenger: Passenger ): void {
    const howManyChilds = passenger.childs?.length || 0;

    console.log( howManyChilds );
}

printChilds( passenger2 );