import {Action, ADD_LINK, POP_LINK} from './actions'

import {createStore, combineReducers} from 'redux'

const initialState: Array<string> = []

function linkQueueReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_LINK:
            return [action.payload, ...state]
        case POP_LINK:
            return state.slice(1)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    linkQueue: linkQueueReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
