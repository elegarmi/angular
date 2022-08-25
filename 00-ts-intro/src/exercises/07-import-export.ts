/*
    ===== Código de TypeScript =====
*/

import { Product, calcVAT } from './06-functions-destructuring';

const shoppingCart: Product[] = [
    {
        desc: 'Phone 1',
        price: 400
    },
    {
        desc: 'Phone 2',
        price: 800
    },
];

const [ total, vat ] = calcVAT( shoppingCart );

console.log( 'Total:', total );
console.log( 'VAT:', vat );