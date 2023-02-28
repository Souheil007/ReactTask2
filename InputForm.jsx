import React, { useState } from 'react';
import './InputForm.css'
import './Counter.css'
function InputForm(){ 
    let todos = [];
    
    function Counter({children}){
        return(
            <div className='cou'>
            <span>{children} </span>
            </div>)

        }
    const [count, setCount] = useState(0)

    function createTodo({ text, done }){
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = text;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = done;
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "";
        }
        li.appendChild(checkbox);
        li.appendChild(span);
        liste.appendChild(li);
    
        }  
        
        function displayTodos() {
            liste.innerHTML = "";
            todos.forEach((todo) => createTodo(todo));
            todos.push({ text: input.value, done: false });
            localStorage.setItem("todos", JSON.stringify(todos));
            return(todos)
          }  
        function Myfucntion(){
            setCount(count + 1);
            displayTodos();
        }    
    
    return (
        <div className="boxy">
        <Counter>Total : {count} </Counter>
        <Counter>Done  :</Counter>

        <input type="text"/>
        <button onClick={() => Myfucntion() }>Add Todo</button>
        
        </div>
    );
}

export default InputForm

