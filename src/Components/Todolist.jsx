import React,{useState} from "react";
// import {FcEditImage} from "react-icons/all";

import EditForm from "./EditForm";
export default function Todolist({textVal,deletedItem,id,Items,setItems}) {
   const [isEdit,setEdit] = useState(false); 
   const [line,setLine] = useState(false); 

   const cutIt = () =>{
       setLine(true);
   };
   

    return (
        <div>
            {
            isEdit ? <EditForm textVal={textVal} id={id}
            Items={Items} setItems={setItems} setEdit={setEdit}
            
            />:
           <li className="list-group-item list-group-item-primary m-2" style= {{textDecoration : line ? "line-through" : "none"}}>{textVal}
           <div>
            <button type="button" className="btn btn-success m-2" onClick={()=>setEdit(true)}>Edit</button>
            {/* <FcEditImage onClick={()=>setEdit(true)}/> */}
           <button type="button" className="btn btn-danger m-2" onClick={()=>{deletedItem(id);}}>Delete</button>
           <button type="button" className="btn btn-info" onClick={cutIt}>Complete</button>

           </div>
           </li>
             }         
           
            
        </div>
    );
}
