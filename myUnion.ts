let score: number | string  = 33

score = 44

score = "55"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string
    id: number
}

let hitesh: User | Admin = {
    name: "hitesh",
    id: 334
}

hitesh = {username: "hc", id: 333}

function getDBId(id: number | string){
    console.log(`DB id is ${id}`);
    
}

getDBId(3)
getDBId("4")
function getDBId2(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3","4"]
const data3: (number | string)[] = ["1","2",3,"4"]

