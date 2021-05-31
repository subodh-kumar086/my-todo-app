import React,{useState} from 'react'

export default function TodoInput() {
    const [inputVal, setInputVal] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        setInputVal('');
    }
    const handleChange = (event) => {
      // console.log(event.target.value);
        setInputVal(event.target.value);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>What's the Plan For Today?</h1>
                <input type ="text" value={inputVal} placeholder="Add a Todo" onChange={handleChange} required/>
                <button className="btn btn-primary m-2" type="submit" >Add Todo</button>
            </form>
        </div>
    );
}
