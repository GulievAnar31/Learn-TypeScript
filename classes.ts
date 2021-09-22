class Typescript {
    version: string

    constructor(version: string){
        this.version = version
    }

    info(name: string){
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string){
//         this.model = theModel
//     }
// }

// Идентичная запись классу кар сверху
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string){

    }
}

// Модификаторы полей
// protected нельзя обращаться.
// private доступны только в том классе в котором были определенны.


class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private gg(){
        console.log('go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test');

// Абстрактные классы - не компилируются нужны на этапе разработки

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return ('asdasd');
    }
}