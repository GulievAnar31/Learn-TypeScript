const arrayOfNumbers: Array<number> = [1,2,3,4,5];
const arrayOfStrings: Array<string> = ['hello', 'hi'];

// Указываем что за обьект и указываем из чего он состоит

function reverse<T>(array: T[]:) T[]{
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);


