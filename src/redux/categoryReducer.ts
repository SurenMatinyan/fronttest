import {  ICategory } from '../interface/interface';

const SETCATEGORY = "SETCATEGORY";


const categoryState: Array<ICategory> = [
    {
    id: 1,
    Parents: [],
    name: "null"
    }
]



const categoryReducer = (state = categoryState, action: setCategoryAC): Array<ICategory> => {
    
    switch(action.type){
        case SETCATEGORY: {
            return action.category
        }

        default: return state;
    }
}


interface setCategoryAC {
    type: typeof SETCATEGORY
    category: ICategory[]
}

export const setCategoryAC = (category: ICategory[]): setCategoryAC => ({type: SETCATEGORY, category});

export default categoryReducer;