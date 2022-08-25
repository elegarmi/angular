/*
    ===== Código de TypeScript =====
*/

export interface Product {
    desc: string;
    price: number;
}

const phone: Product = {
    desc: 'Xiaomi Note 10',
    price: 400,
}

const tablet: Product = {
    desc: 'iPad Air',
    price: 1200,
}

export function calcVAT( products: Product[]): [number, number] {
    let total = 0;

    products.forEach( ( { price } ) => {
        total += price;
    }) 

    return [total, total * 0.15];
}


// const items = [ phone, tablet ];
// const [ total, vat ] = calcVAT( items );

// console.log( 'Total:', total)
// console.log( 'VAT:', vat );