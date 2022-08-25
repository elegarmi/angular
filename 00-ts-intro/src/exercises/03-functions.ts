/*
    ===== Código de TypeScript =====
*/

function sum(a: number, b: number): number {
    return a + b;
}

const sumArrow = (a: number, b: number): number => a + b;

function mult(firstNum: number, secondNum?: number, base: number = 2): number {
   return firstNum * base;
}

interface CharacterLOTR {
    name: string;
    hp: number;

    showHp: () => void;
}

function heal( character: CharacterLOTR, healX: number ): void {
    character.hp += healX;

    console.log( character );
}

const newCharacter: CharacterLOTR = {
    name: 'Strider',
    hp: 50,

    showHp() {
        console.log( 'Heal points:', this.hp );
    }
}

heal( newCharacter, 20 );

const result = sum(10, 20);
const resultArrow = sumArrow(10, 20);
const resultMult = mult(5, 0, 10);

console.log( result );
console.log( resultArrow );
console.log( resultMult );
