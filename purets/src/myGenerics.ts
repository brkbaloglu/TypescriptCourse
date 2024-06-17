const score: Array<number> = [

]

const names: Array<string> = [

]


function identityOne(value: boolean | number): boolean | number{
    return value
}


function identityTwo(value: any): any{
    return value
}


function identityThree<Type>(value: Type): Type{
    return value
}

identityThree(3)
identityThree("3")
identityThree(true)


function identityFour<T>(value: T): T {
    return value
}


interface Bootle{
    brand: string,
    type: number
}


function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T=> {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database{
    connection: string,
    username: string,
    password: string
}


function anotherFunction<T, U extends Database>(valueOne: T, valueTwo: U): object{
    return { valueOne, valueTwo }
}

anotherFunction(34, {connection: "test", username: "test", password: "test"})


interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}


class Sellable<T>{
    public cart: T[] = []


    addToCart(product: T){
        this.cart.push(product)
    }
}