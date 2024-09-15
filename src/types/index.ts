export interface Hobby{
    name: string
}

export interface Address{
    city: string,
    state: string
}

export interface FormData{
    firstname: string,
    lastname: string,
    age: number,
    email: string,
    hobbies: Hobby[],
    address: Address,
    startDate: Date,
    subscribe: boolean
}