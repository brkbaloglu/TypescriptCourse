// const User = {
//     name: "Burak",
//     email: "burak@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){
//     return name
// }

// let newUser = {name: "Burak", isPaid: true, email: "burak@gmail.com"}

// createUser(newUser)


// function createCourse(): {name: string, price: number}{
//     return {name: "react", price: 300}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// type MyString = string


// function createUser(user: User){
//     return {name: "", email: "", isActive: true}
// }


// createUser({name: "", email: "", isActive: true})



type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails: number
}


let myUser: User = {
    _id: "2314",
    name: "h",
    email: "h@h.com",
    isActive: true,
    creditCardDetails: 123456789
}

myUser.email = "h@gmail.com"

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export {}