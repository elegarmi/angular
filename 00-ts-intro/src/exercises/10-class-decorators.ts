/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class MySuperClass {
    public myProperty: string = "ABC123";

    print() {
        console.log('Hi, World')
    }
}

console.log( MySuperClass );

const myClass = new MySuperClass();

console.log( myClass.myProperty );