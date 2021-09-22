//  Сначала нужно установить typeScript. npm install -g typescript

const str: string = 'hello';

// Создали константу с типом стриг. И значением 'hello'

console.log(str);

// Что бы скомпилировать ts нужно написать в консоль tsc и .\и
// название файла. Или просто нажать tab

// Рассматриваем типы

// Принимает логические значения boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// тип числа, теперь мы не сможем этой переменной назначить другое 
// значение
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

// String
const message: string = 'Hello Typescript'
const word: string[] = ['h', 'a'];

// Мы можем создавать массивы только с числами или только с строками
const numberArray: number[] = [1,2,3,4,5];
// Но есть и другая форма указания
const numberArray2: Array<number> = [1, 2, 3, 4, 5];

// Tuple. Его идея заключается в том что это массив с разными типами
// данных.

const contact: [string, number] = ['Anar', 12312312];

// Что бы переопределить тип данных. для этого есть другой тип
// Any
let variable: any = 42;
variable = 'New String';

// Void функция которая ничего не возвращает
function sayMyName(name: string): void{
    console.log(name);
}

sayMyName('Хайзенберг');

// Never указывается в случаях когда функция либо возвращает ошибку
// либо когда она постоянно что то делает.
function throwError(message: string): never{
            throw new Error(message)
}

function infinite(): never{
    while(true){

    }
}

// Type создаем свои типы.

type Login = string;

// Теперь этот тип можем указывать для переменных
const login: Login = 'admin';

// Но мы не сможем указывать его другим переменны с значениями не
// стринг

type ID = string | number
const id: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true; //Это работать не будет.

type Sometype = string | null | undefined


