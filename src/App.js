import { useState , useEffect } from "react";
import "./App.css"

function App(){
  const [todo , setTodo] = useState([
    {
      name: "Maga",
      age: 21,
    },
    {
      name: "Osman",
      age: 17,
    },
    {
      name: "Vlad",
      age: 20,
    },
  ])
  const [text , setText] = useState("")

  // const [cars , setCars] = useState([])
  // const [text1 , setText1] = useState("")

  function addTodo(){
    const newTodo = {
      name: text,
      age: 0,
    }
    if (isNaN(text)) {
      setTodo([...todo , newTodo])
      setText("")
    }
    
    console.log(todo);
    return todo
  }

  // function addCar(){
  //   const newCar = {
  //     mark: text1,
  //     model: 0,
  //   }
  //   if (isNaN(text1)) {
  //     setCars([...cars , newCar])
  //     setText1("")
  //   }
    
  //   console.log(cars);
  //   return cars
  // }

    return(
      <div className="App">
          <h1>TodoList</h1>
          <div className="form_list">
            <div className="add_date">
              <input value={text} onChange={(e)=> setText(e.target.value)} placeholder="Новая задача" />
              <button onClick={()=> addTodo()}>Добавить</button>
            </div>

            {/* <div className="add_car">
              <input value={text1} onChange={(a)=> setText1(a.target.value)} placeholder="Новая машина" />
              <button onClick={()=> addCar()}>Добавить</button>
            </div> */}
            <h1>Список задач</h1>
            <div className="list">
              <ul>
                {todo.map((todos , index)=>{
                  return (<li key={index}>{todos.name}</li>)
                 
                })}
              </ul>
            </div>

            {/* <h1>Список машин</h1>
            <div>
              <ul>
                {cars.map((car , index)=>{
                  return (<li key={index}>{car.mark}</li>)
                 
                })}
              </ul>
            </div> */}
          </div>
      </div>
    )
}

export default App