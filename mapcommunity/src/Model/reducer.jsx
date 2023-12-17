export const Reducer = (state, action) => {
    if (state === undefined){
        
    }
    if (action.type === 'POST'){
        return {...state, community_post : action.write}
    }

}

export default Reducer