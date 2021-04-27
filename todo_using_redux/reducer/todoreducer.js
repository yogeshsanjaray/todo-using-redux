let initialState = {todo:[]}

function TodoReducer(state=initialState,action) {

    // console.log(action)
    // console.log(state)
    switch(action.type){
        case "add":
            return{...state,todo:action.todo}
        default:
            return state
    }

}   
export default TodoReducer;