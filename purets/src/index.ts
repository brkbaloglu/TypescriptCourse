// console.log("TS");


class User{

    // public email: string
    // name: string
    private readonly city: string = "Jaipur"

    protected _courseCount = 1

    constructor(public email: string, public name: string){
        // this.email = email
        // this.name = name
    }

    private deleteToken(){
        console.log("Token deleted");
        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseCount){
        if (courseCount <= 1) {
            throw new Error("Course count should be more than 1")
        }

        this._courseCount = courseCount
    }
}


// hitesh.city = "Jaipur"

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}


const hitesh = new User("h@h.com", "hitesh")
