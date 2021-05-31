import React,{useState} from 'react'


export default function EditForm({textVal,Items,setItems,id,setEdit})
{
    const[todoValue,updateTodoValue] = useState(textVal);

    const editTodo=(index,arrElm) =>{
        
        const temp_item = [...Items,todoValue];
        const updateTodo = temp_item.filter((item,index)=>{
            
           return index!== id;
            
            
        });
        setEdit(false);
       return setItems(updateTodo);
    };

    return (
        <div>
            <form onSubmit={(event)=>{ 
                event.preventDefault();
                    updateTodoValue("");
                }}>
            
            <li className="list-group-item list-group-item-primary m-2">
            <input type="text" value={todoValue} onChange={(event) => {updateTodoValue(event.target.value)}}/>
            <button type="Submit" className="btn btn-warning m-3" onClick={()=>{editTodo(id);}}>Update Todo</button>
            </li>
            </form>
            
        </div>
    )
}
