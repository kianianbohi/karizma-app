const reducer = (state=[], action) =>{
    switch (action.type){
        case 'ADD_TO_LIST':
            return [
                ...state,
                {label:action.label}
            ]
        case 'REMOVE_ITEM':
                const newState = [...state]
                newState.splice(action.index,1)
                return newState

        case 'REMOVE_ALL':
            return []
        default:
            return state
    }
}

export default reducer