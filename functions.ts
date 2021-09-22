// 
function add(a: number, b: number): number{
    return a + b;
}
// У функции в TS есть возможность перегружать функцию и принимать
// разные значения
function toUpperCase(str: string): string {
    return str.trim();
}

interface MyPosition{
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition{
    default: string
}

function position(): MyPosition

function position(a: number): MyPositionWithDefault

function position(a?: number, b?: number){
    if(!a && !b){
        return {x: undefined, y: undefined}
    }
    if(a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log('Empty: ', position());
console.log('One param: ', position(42));
console.log('Empty: ', position(10));

