// Интерфейс
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '123124',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'

// Мы можем указывать к какому типу будет относиться обьект

const rect3 = {} as Rect
const rect4 = <Rect>{}

// Наследование интерфейсов.
interface ReactWithArea extends Rect {
    getArea: () => number
}

const rect5: ReactWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// Так же интерфейсы взаимодействуют с классами.

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void{
        this.time = date
    }
}

// Бывают ситуации когда нам необходимо создать обьект для интерфейса
// с большим количеством ключей
interface Styles {
    [key: string]: string
}


const css: Styles = {
    border: '1px solid black',
    marginTop: '2px'
}