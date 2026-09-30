import { useState , useEffect } from "react";


function App(){
  const [todo , setTodo] = useState([])
  const [text , setText] = useState("")
    return(
      <div className="App">
          <h3>TodoList</h3>
          <div className="form_list">
            <div className="add_date">
              <input value={text} onChange={()=> setText()} placeholder="Новая задача" />
              <button onClick={()=> setText("")}>Добавить</button>
            </div>
            <h1>Список задач</h1>
            <div>
              <ul>
                {todo.map((todos)=>{
                  <li>{todos}</li>
                })}
              </ul>
            </div>
          </div>
      </div>
    )
}

export default App