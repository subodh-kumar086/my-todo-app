import React,{useState} from "react";
import Todolist from "./Components/Todolist";
import "./App.css"


export default function App()
{
  const [inputVal, setInputVal] = useState('');
  const [Items,setItems] = useState([]);
  const [isRemoveAll,setRemoveAll] = useState(true);
  
 

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(Items);
        setInputVal('');
    }
    const handleChange = (event) => {
      // console.log(event.target.value);
        setInputVal(event.target.value);
    };
    const listofitems = () => {
      if(!inputVal){}
      else{
      setItems((oldItems) =>{
        return [...oldItems, inputVal];
      });}
    };
    const handleDelete = (id) => {
      console.log("Item Deleted");
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index !== id;
        });
      });
    };

   const removeAll = ()=>{
     
     setItems([]);
     setRemoveAll(true);
   
   };
   
   const checktheList = ()=>{
    if(Items.length === 0)
    {
      alert("Not Item in the todo list");
      return;
    }
    else{
    setRemoveAll(false);
    }
  };
    
      
   
  
  return(
    <>
  
      <div className="todocontainer">
            <form onSubmit={handleSubmit}>
                <h1>What's the Plan For Today?</h1>
                <input type ="text" value={inputVal} placeholder="Add a Todo" onChange={handleChange} required/>
                
                <button className="btn btn-primary m-2" type="submit" onClick={listofitems} >Add Todo</button>
                {
                isRemoveAll ?
                <button type="button" className="btn btn-warning" onClick={checktheList} >Check the list</button>
                :
                <button type="button" className="btn btn-danger" onClick={removeAll}>Remove All</button> 
            
                }
                
            </form>
            <ul className="list-group">
              
               {Items.map((item,index) =>
               {
                 return(
                  <Todolist
                    textVal = {item}
                    key = {index}
                    id = {index}
                    deletedItem = {handleDelete}
                    Items={Items}
                    setItems={setItems}
                                   
                  
                     
                    />);
                })}
                
            </ul>
            
            
          </div>
    </>
  );
}