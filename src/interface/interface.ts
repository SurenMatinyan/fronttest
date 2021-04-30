export interface IUsers {
    lastName: String | null,
    firstName: string | null,
    email: string | null,
    isAuth: boolean,
}

export interface IParents { 
    id: number
    name: string
}

export interface ICategory {  
    id: number
    name: string
    Parents: IParents[]
}


export interface IReducer {
    users: IUsers
    category: ICategory
}


