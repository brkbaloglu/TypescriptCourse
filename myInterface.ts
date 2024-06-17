interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponName: string): number
}

const hitesh: User = {
    dbId: 22,
    email: "h@h.com",
    userId: 222,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh") => {
        return 10
    }
}