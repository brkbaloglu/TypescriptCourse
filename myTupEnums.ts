const user: string[] = [
    "hc"
]

const tUser: [string, number, boolean] = [
   "hc",
   123,
   true 
]

let rgb: [number, number, number] = [
    255,
    135,
    21
]

type User2 = [number, string]

const newUser: User2 = [
    112,
    "example@google.com"
]

newUser[1] = "hc.com"
newUser.push()