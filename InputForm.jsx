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
    const [ toDoList, setToDoList] = useState([])
    const [done, setDone] = useState(0)
    
    
    const handleClick = () => {
        const input = document.getElementById("input")
        setToDoList(
            [...toDoList, input.value]
        )
    
    
        
    
    }  
    const deleteTodo = (index) => {
        const element = document.getElementById(`element-${index}`);  
        var checkBox = document.getElementById(`myCheck-${index}`);
        if (checkBox.checked == true){
        setDone(done -1);
        }   
        setCount(count -1);
        element.remove();
      };
    const checkBox = (index) => {
        const element = document.getElementById(`element-${index}`);
        var checkBox = document.getElementById(`myCheck-${index}`);
        if (checkBox.checked == true){
            element.style.textDecoration = "line-through";
            setDone(done +1);
        }
        else{
            setDone(done -1);
            element.style.textDecoration = "none";
        }
      };  
    
    
        function Myfucntion(){
            setCount(count + 1);
            
            handleClick();
            console.log(toDoList)
        }    
    
    return (
        <div className="boxy">
        <Counter>Total : {count} </Counter>
        <Counter>Done  : {done}</Counter>

        <input id="input" type="text" />
        <button onClick={() => Myfucntion() }>Add Todo</button>

        <hr id='hrr' />
        
            {toDoList.map((i,index) => <div key={index} className='element' id={`element-${index}`}><input type="checkbox" id={`myCheck-${index}`} onClick={() => checkBox(index)}/>{i}<button onClick={() => deleteTodo(index)} >Delete</button></div> )}
            <hr id='hrr' />
        </div>
    );
}

export default InputForm

