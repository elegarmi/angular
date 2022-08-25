/*
    ===== Código de TypeScript =====
*/

interface Player {
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const player: Player = {
    volume: 90,
    second: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheran',
        year: 2015
    }
}

const { volume, second, song, details } = player;
const { author, year} = details;
// const { volume, second, song, details: { author, year } } = player; // Más confuso

// console.log( 'Tiene un volumen de:',  volume );
// console.log( 'Está en el segundo:', second );
// console.log( 'La canción es:', song );
// console.log( 'El autor es:', author );

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ c1, c2, c3 ] = dbz;

// console.log('Personaje 1:', dbz[0] );
// console.log('Personaje 2:', dbz[1] );
// console.log('Personaje 3:', dbz[2] );

console.log('Personaje 1:', c1 );
console.log('Personaje 2:', c2 );
console.log('Personaje 3:', c3 );