function addTwo(number){
    // number.toUpperCase()
    return number + 2
}

function getUpper(value){
    return value.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    
}

let loginUser = (name: string, email: string, isPaid: boolean) => {

}


addTwo(5)
getUpper("Burak")
signUpUser("Burak", "brkbaloglu@gmail.com", true)
loginUser("Burak", "brkbaloglu@gmail.com", true)

function getValue(myValue: number): boolean {
    if (myValue > 5) {
        return true
    }
    return false
}


const getHello = (s: string): string => {
    return `Hello ${s}`
}

const heros = [
    "thor",
    "spiderman",
    "ironman"
]


heros.map(hero => {
    return `hero is ${hero}`
})


function consoleError(errormsg: string) {
    console.log(errormsg);
    
}

function consoleError2(errormsg: string): never {
    throw new Error(errormsg)
    
}



export {}