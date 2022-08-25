/*
    ===== Código de TypeScript =====
*/

function kindOfType<T>( arg: T ) {
    return arg;
}

let imString = kindOfType( 'Hi, World!' );
let imNumber = kindOfType( 100 );
let imArray = kindOfType( [1, 2, 3, 4, 5, 6] );
let imgExplicit = kindOfType<number>( 50 ); 