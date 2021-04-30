import {IUsers} from '../interface/interface';
const SETUSERS: String = "SETUSERS";



const usersState: IUsers = {
    lastName: null,
    firstName: null,
    email: null,
    isAuth: false
}



const userReducer = (state: IUsers = usersState, action: actionCreater): IUsers => {
    
    switch(action.type){
        case SETUSERS: {
            return { ...state, ...action.users }
        }

        default: return state;
    }
}

interface setUsersAC {
    type: typeof SETUSERS
    users: IUsers
}

type actionCreater = setUsersAC; 

export const setUsersAC = (users: IUsers): setUsersAC => ({type: SETUSERS, users});


export default userReducer;


