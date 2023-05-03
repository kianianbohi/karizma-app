export const addToList = (label) =>{
    return {type:'ADD_TO_LIST',label:label}
}

export const removeItem = (index) =>{
    return {type:'REMOVE_ITEM',index}
}

export const removeAll = () =>{
    return {type:'REMOVE_ALL'}
}