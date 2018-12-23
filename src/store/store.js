import {createStore, combineReducers} from 'redux';


export const articleReducers = (state = [], action) => {
    let newState = [...state];

    switch(action.type) {
        case 'ADD_ARTICLE':
            newState.push(action.payload);
            break;
        case 'UPDATE_ARTICLE':
            let article = newState.find(a => a.id === action.payload.id);
            if (!article) {
                newState.push(action.payload);
            } else {
                // not sure about this
                article = Object.assign(article, {...action.payload});
            }
            break;
        case 'REMOVE_ARTICLE':
            newState = newState.filter(a => a.id === action.payload);
            break;
        case 'EMPTY_BASKET':
            newState = [];
            break;
        default:
            break;
    }

    return newState;
} 
export const store = createStore(combineReducers({articles: articleReducers}));
