import { useStore,useDispatch,useSelector } from "react-redux"
import { useState } from "react"

function TodoReduxComponent() {
    
    const dispatch = useDispatch(); 
    const showTodo = useSelector(state=>state.todo)
    let [userVal,setuserVal] = useState([])
    
    const addTodo = (e) => {
        e.preventDefault();
        let array=userVal.concat({todoList:e.target.area.value,
                                status:e.target.check.value})
        setuserVal(array);
    }

    dispatch({type:"add",todo:userVal})

    console.log(showTodo)
    console.log(userVal)

    return(
        <div>
            <h1>TodoList</h1>
    
            <form onSubmit={addTodo}>
                <textarea name="area" rows="10" cols="30" /><br/>
                <label for="c">Complete</label>
                <input type="radio" name="check" value="complete" id="c"/>
                <label for="d">Incomplete</label>
                <input type="radio" name="check" value="incomplete" id="d"/><br/>
                <p/>
                <button >Add Todo</button>
            </form>
            {!showTodo?null:showTodo.map((val)=><div>Todo: {val.todoList} Status: {val.status}</div>)} <br/>
        </div>
    )
}

export default TodoReduxComponent;